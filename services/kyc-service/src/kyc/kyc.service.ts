import { Injectable, Logger, NotFoundException, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { PrismaService } from '../prisma/prisma.service';
import { SumsubClient, SumsubWebhookPayload } from './sumsub/sumsub.client';
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

interface SDKTokenResult {
  token: string;
  applicantId: string;
  levelName: string;
  ttlInSecs: number;
  apiUrl: string;
}

@Injectable()
export class KYCService {
  private readonly logger = new Logger(KYCService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly sumsubClient: SumsubClient,
    private readonly configService: ConfigService,
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

  async initLevel1(userId: string, callbackUrl?: string, applicantData?: Record<string, unknown>) {
    return this.initLevel(userId, KYCLevel.L1, callbackUrl, applicantData);
  }

  async initLevel2(userId: string, callbackUrl?: string, applicantData?: Record<string, unknown>) {
    return this.initLevel(userId, KYCLevel.L2, callbackUrl, applicantData);
  }

  private async initLevel(
    userId: string,
    targetLevel: KYCLevel,
    callbackUrl?: string,
    applicantData?: Record<string, unknown>,
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
    const applicant = await this.sumsubClient.createApplicant(userId, targetLevel, applicantData);
    userKyc = await this.prisma.userKYC.update({
      where: { userId },
      data: {
        level: targetLevel,
        status: KYCStatus.INITIATED,
        externalApplicantId: applicant.id,
        lastSubmittedAt: new Date(),
        firstSubmittedAt: userKyc.firstSubmittedAt ?? new Date(),
      },
    });
    this.logger.log(`KYC level ${targetLevel} initiated for user=${userId} applicant=${applicant.id}`);
    return { userKyc, applicant, callbackUrl };
  }

  async generateSDKToken(userId: string, targetLevel: KYCLevel): Promise<SDKTokenResult> {
    let userKyc = await this.prisma.userKYC.findUnique({ where: { userId } });
    if (!userKyc?.externalApplicantId) {
      const initResult = await this.initLevel(userId, targetLevel);
      userKyc = initResult.userKyc;
    }
    const applicantId = userKyc!.externalApplicantId!;
    const access = await this.sumsubClient.getAccessToken(userId, applicantId, targetLevel);
    return {
      token: access.token,
      applicantId,
      levelName: access.levelName,
      ttlInSecs: access.ttlInSecs,
      apiUrl: this.configService.get('SUMSUB_BASE_URL', 'https://api.sumsub.com'),
    };
  }

  validateWebhookHMAC(payload: Buffer, signature: string): boolean {
    return this.sumsubClient.validateWebhookHMAC(payload, signature);
  }

  async updateStatusViaWebhook(
    provider: string,
    eventType: string,
    headers: Record<string, string>,
    payload: SumsubWebhookPayload,
    rawBody: Buffer,
    signatureValid: boolean,
  ) {
    const externalApplicantId = payload.applicantId;
    const correlationId = payload.correlationId ?? headers['x-request-id'];
    const userId = payload.externalUserId ?? (
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
        correlationId,
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
      await this.markProcessed(log.id, false, `User not found for applicant ${externalApplicantId}`);
      return { processed: false, reason: 'user_not_found' };
    }

    try {
      const reviewAnswer = payload.reviewResult?.reviewAnswer;
      let newStatus: KYCStatus | null = null;
      let rejectionReason: KYCRejectionReason | null = null;

      if (reviewAnswer === 'GREEN') {
        newStatus = KYCStatus.VERIFIED;
      } else if (reviewAnswer === 'RED') {
        newStatus = KYCStatus.REJECTED;
        const firstLabel = payload.reviewResult?.rejectLabels?.[0];
        rejectionReason = this.mapRejectionReason(firstLabel);
      } else if (eventType.includes('pending') || eventType.includes('review')) {
        newStatus = KYCStatus.PENDING;
      }

      if (newStatus) {
        const before = await this.prisma.userKYC.findUnique({ where: { userId } });
        const oldLevel = before?.level ?? KYCLevel.L0;
        const updated = await this.prisma.userKYC.update({
          where: { userId },
          data: {
            status: newStatus,
            reviewedAt: newStatus === KYCStatus.VERIFIED || newStatus === KYCStatus.REJECTED ? new Date() : undefined,
            rejectionReason: rejectionReason ?? undefined,
            rejectionDetails: payload.reviewResult?.moderationComment,
            externalInspectionId: payload.inspectionId,
          },
        });
        await this.emitLevelUpdated(userId, oldLevel, updated.level, updated.status, externalApplicantId);
      }

      await this.markProcessed(log.id, true);
      return { processed: true, newStatus, userId };
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      await this.markProcessed(log.id, false, message);
      throw err;
    }
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

  private mapRejectionReason(label?: string): KYCRejectionReason {
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
    return label ? map[label] ?? KYCRejectionReason.OTHER : KYCRejectionReason.OTHER;
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
