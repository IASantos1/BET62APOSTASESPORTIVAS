import { Injectable, Logger, NotFoundException, BadRequestException } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { PrismaService } from '../prisma/prisma.service';
import { DiditClient, DiditDecision, DiditWebhookPayload } from './didit/didit.client';
import {
  KYCLevel,
  KYCStatus,
  KYCRejectionReason,
  KYC_LEVEL_LIMITS,
  BET62_EVENTS,
  BET62_STREAMS,
  createEnvelope,
  KycLevelUpdatedPayload,
} from '@bet62/shared';

export interface VerificationSessionResult {
  sessionId: string;
  url: string;
  sessionToken: string;
  level: KYCLevel;
}

@Injectable()
export class KYCService {
  private readonly logger = new Logger(KYCService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly diditClient: DiditClient,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  async getStatus(userId: string) {
    const userKyc = await this.prisma.userKYC.findUnique({
      where: { userId },
      include: { documents: true },
    });
    if (!userKyc) {
      throw new NotFoundException('KYC record not found');
    }
    const policy = KYC_LEVEL_LIMITS[userKyc.level] ?? KYC_LEVEL_LIMITS[0];
    return {
      ...userKyc,
      limits: {
        depositDaily: policy.depositDaily,
        depositWeekly: policy.depositWeekly,
        depositMonthly: policy.depositMonthly,
        withdrawalDaily: policy.withdrawalDaily,
        withdrawalMonthly: policy.withdrawalMonthly,
        stakePerBetMax: policy.stakePerBetMax,
        cumulativeBalanceMax: policy.cumulativeBalanceMax,
        withdrawalAllowed: policy.withdrawalAllowed,
        liveBetAllowed: policy.liveBetAllowed,
        casinoAllowed: policy.casinoAllowed,
      },
    };
  }

  private async initLevel(
    userId: string,
    targetLevel: KYCLevel,
    callbackUrl?: string,
  ) {
    let userKyc = await this.prisma.userKYC.findUnique({ where: { userId } });
    if (!userKyc) {
      userKyc = await this.prisma.userKYC.create({
        data: {
          userId,
          level: KYCLevel.L0,
          status: KYCStatus.NOT_STARTED,
        },
      });
    }
    if (userKyc.level >= targetLevel && userKyc.status === KYCStatus.VERIFIED) {
      throw new BadRequestException(`User already verified at level ${userKyc.level}`);
    }
    const session = await this.diditClient.createSession(userId, targetLevel, callbackUrl);
    userKyc = await this.prisma.userKYC.update({
      where: { userId },
      data: {
        level: targetLevel,
        status: KYCStatus.INITIATED,
        externalApplicantId: session.sessionId,
        lastSubmittedAt: new Date(),
        firstSubmittedAt: userKyc.firstSubmittedAt ?? new Date(),
      },
    });
    this.logger.log(`KYC level ${targetLevel} initiated for user=${userId} session=${session.sessionId}`);
    return { userKyc, session };
  }

  async createVerificationSession(
    userId: string,
    targetLevel: KYCLevel,
    callbackUrl?: string,
  ): Promise<VerificationSessionResult> {
    const { session } = await this.initLevel(userId, targetLevel, callbackUrl);
    return {
      sessionId: session.sessionId,
      url: session.url,
      sessionToken: session.sessionToken,
      level: targetLevel,
    };
  }

  validateWebhookHMAC(payload: Buffer, signature: string): boolean {
    return this.diditClient.validateWebhookHMAC(payload, signature);
  }

  async updateStatusViaWebhook(
    provider: string,
    eventType: string,
    headers: Record<string, string>,
    payload: DiditWebhookPayload,
    signatureValid: boolean,
  ) {
    const externalApplicantId = payload.session_id;
    const eventId = payload.event_id ?? payload.id;

    if (eventId) {
      const existing = await this.prisma.kYCWebhookLog.findFirst({
        where: { provider, correlationId: eventId },
        select: { id: true },
      });
      if (existing) {
        this.logger.debug(`Duplicate Didit webhook event_id=${eventId}, skipping reprocessing`);
        return { processed: true, deduped: true };
      }
    }

    const userId = payload.vendor_data ?? (
      await this.prisma.userKYC.findFirst({
        where: { externalApplicantId },
        select: { userId: true },
      })
    )?.userId;

    const log = await this.prisma.kYCWebhookLog.create({
      data: {
        provider,
        eventType,
        externalApplicantId,
        correlationId: eventId,
        headersJson: headers as unknown as object,
        payloadJson: payload as unknown as object,
        signatureValid,
        userId,
      },
    });

    if (!signatureValid) {
      await this.markProcessed(log.id, false, 'Invalid HMAC signature');
      return { processed: false, reason: 'invalid_signature' };
    }
    if (!userId) {
      await this.markProcessed(log.id, false, `User not found for session ${externalApplicantId}`);
      return { processed: false, reason: 'user_not_found' };
    }

    try {
      const newStatus = this.mapDiditStatus(payload.status);
      let decision: DiditDecision | undefined;

      if (newStatus === KYCStatus.VERIFIED || newStatus === KYCStatus.REJECTED) {
        decision = await this.diditClient.getDecision(externalApplicantId).catch((err) => {
          this.logger.warn(
            `Failed to fetch Didit decision for session=${externalApplicantId}: ${err instanceof Error ? err.message : err}`,
          );
          return undefined;
        });
      }

      if (newStatus) {
        const before = await this.prisma.userKYC.findUnique({ where: { userId } });
        const oldLevel = before?.level ?? KYCLevel.L0;
        const rejectionReason =
          newStatus === KYCStatus.REJECTED ? this.mapRejectionReason(decision) : null;
        const updated = await this.prisma.userKYC.update({
          where: { userId },
          data: {
            status: newStatus,
            reviewedAt:
              newStatus === KYCStatus.VERIFIED || newStatus === KYCStatus.REJECTED
                ? new Date()
                : undefined,
            rejectionReason: rejectionReason ?? undefined,
            providerRawResponse: decision ? (decision as unknown as object) : undefined,
          },
        });
        await this.emitLevelUpdated(userId, oldLevel, updated.level, updated.status, externalApplicantId);
      } else {
        this.logger.warn(
          `Unmapped Didit status "${payload.status}" for session=${externalApplicantId}; no state change applied`,
        );
      }

      await this.markProcessed(log.id, true);
      return { processed: true, newStatus, userId };
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      await this.markProcessed(log.id, false, message);
      throw err;
    }
  }

  // TODO: confirm the exact Didit status strings via the console's webhook test tool
  // (Settings > API & Webhooks > "test webhooks") before relying on this in production.
  private mapDiditStatus(status?: string): KYCStatus | null {
    if (!status) return null;
    const normalized = status.toLowerCase();
    if (['approved', 'verified', 'success'].includes(normalized)) return KYCStatus.VERIFIED;
    if (['declined', 'rejected', 'failed'].includes(normalized)) return KYCStatus.REJECTED;
    if (['pending', 'in_review', 'in_progress', 'processing'].includes(normalized)) {
      return KYCStatus.PENDING;
    }
    if (normalized === 'expired') return KYCStatus.EXPIRED;
    if (normalized === 'not_started') return KYCStatus.NOT_STARTED;
    return null;
  }

  async createUserKycIfNotExists(userId: string) {
    return this.prisma.userKYC.upsert({
      where: { userId },
      update: {},
      create: {
        userId,
        level: KYCLevel.L0,
        status: KYCStatus.NOT_STARTED,
      },
    });
  }

  async emitLevelUpdated(
    userId: string,
    oldLevel: KYCLevel,
    newLevel: KYCLevel,
    status: KYCStatus,
    externalApplicantId?: string,
  ) {
    const policy = KYC_LEVEL_LIMITS[newLevel] ?? KYC_LEVEL_LIMITS[0];
    const payload: KycLevelUpdatedPayload = {
      userId,
      oldLevel,
      newLevel,
      status,
      applicantId: externalApplicantId,
      timestamp: new Date().toISOString(),
      limitsApplied: {
        depositDaily: policy.depositDaily,
        depositWeekly: policy.depositWeekly,
        depositMonthly: policy.depositMonthly,
        withdrawalDaily: policy.withdrawalDaily,
        withdrawalMonthly: policy.withdrawalMonthly,
        stakeMax: policy.stakePerBetMax,
      },
    };
    const envelope = createEnvelope({
      event: BET62_EVENTS.KYC.LEVEL_UPDATED,
      aggregateType: 'KYC',
      aggregateId: userId,
      payload,
      producer: 'kyc-service',
    });
    this.eventEmitter.emit(BET62_EVENTS.KYC.LEVEL_UPDATED, envelope);
    this.eventEmitter.emit(`${BET62_STREAMS.KYC}:emit`, envelope);
    this.logger.log(`Emitted KYC_LEVEL_UPDATED userId=${userId} level=${newLevel} status=${status}`);
  }

  // TODO: confirm the exact rejection/warning codes in the decision payload
  // (id_verifications[].warnings[].code) via a real Didit test session before relying
  // on this mapping in production; unrecognized codes fall back to OTHER.
  private mapRejectionReason(decision?: DiditDecision): KYCRejectionReason {
    const idVerification = decision?.id_verifications?.[0] as
      | { status?: string; warnings?: Array<{ code?: string }> }
      | undefined;
    const code = idVerification?.warnings?.[0]?.code ?? idVerification?.status;
    const map: Record<string, KYCRejectionReason> = {
      DOCUMENT_UNREADABLE: KYCRejectionReason.POOR_IMAGE_QUALITY,
      DOCUMENT_EXPIRED: KYCRejectionReason.EXPIRED_DOCUMENT,
      DOCUMENT_INVALID: KYCRejectionReason.INVALID_DOCUMENT,
      SELFIE_MISMATCH: KYCRejectionReason.SELFIE_MISMATCH,
      NAME_MISMATCH: KYCRejectionReason.MISMATCH_NAME,
      ADDRESS_MISMATCH: KYCRejectionReason.MISMATCH_ADDRESS,
      AGE_RESTRICTION: KYCRejectionReason.AGE_RESTRICTION,
      JURISDICTION: KYCRejectionReason.JURISDICTION_RESTRICTION,
    };
    return code ? map[code] ?? KYCRejectionReason.OTHER : KYCRejectionReason.OTHER;
  }

  private async markProcessed(logId: string, success: boolean, error?: string) {
    await this.prisma.kYCWebhookLog.update({
      where: { id: logId },
      data: {
        processed: success,
        processedAt: new Date(),
        processingError: error,
      },
    });
  }
}
