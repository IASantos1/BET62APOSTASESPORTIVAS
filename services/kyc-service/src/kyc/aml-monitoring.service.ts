import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cron } from '@nestjs/schedule';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { PrismaService } from '../prisma/prisma.service';
import { DiditClient } from './didit/didit.client';
import {
  KYCStatus,
  BET62_EVENTS,
  BET62_STREAMS,
  createEnvelope,
  KycAmlHitDetectedPayload,
} from '@bet62/shared';

interface ExtractedIdentity {
  fullName: string;
  dateOfBirth?: string;
  nationality?: string;
  documentNumber?: string;
}

/**
 * Nightly re-screening of already-verified users against sanctions/PEP lists,
 * using Didit's standalone AML API. Identity data is read from the id
 * verification decision already stored at onboarding time (UserKYC.providerRawResponse) —
 * no new PII is collected for this.
 */
@Injectable()
export class AmlMonitoringService {
  private readonly logger = new Logger(AmlMonitoringService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly diditClient: DiditClient,
    private readonly configService: ConfigService,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  @Cron('0 2 * * *')
  async handleNightlyScreening(): Promise<void> {
    if (this.configService.get<string>('AML_MONITORING_ENABLED', 'true') !== 'true') {
      this.logger.debug('AML monitoring disabled via AML_MONITORING_ENABLED, skipping run');
      return;
    }
    await this.runScreening();
  }

  async runScreening(): Promise<{ screened: number; hits: number; skipped: number }> {
    const candidates = await this.prisma.userKYC.findMany({
      where: { status: KYCStatus.VERIFIED, isActive: true },
      select: { userId: true, providerRawResponse: true },
    });

    let screened = 0;
    let hits = 0;
    let skipped = 0;

    for (const candidate of candidates) {
      const identity = this.extractIdentity(candidate.providerRawResponse);
      if (!identity) {
        skipped++;
        this.logger.warn(
          `Skipping AML screening for user=${candidate.userId}: no identity data on file`,
        );
        continue;
      }

      try {
        const result = await this.diditClient.screenAml({
          fullName: identity.fullName,
          dateOfBirth: identity.dateOfBirth,
          nationality: identity.nationality,
          documentNumber: identity.documentNumber,
        });
        screened++;

        await this.prisma.kYCAmlScreening.create({
          data: {
            userId: candidate.userId,
            requestId: result.request_id,
            status: result.aml.status,
            totalHits: result.aml.total_hits ?? 0,
            score: result.aml.score,
            hitsJson: (result.aml.hits as unknown as object) ?? undefined,
          },
        });

        if ((result.aml.total_hits ?? 0) > 0) {
          hits++;
          await this.prisma.userKYC.update({
            where: { userId: candidate.userId },
            data: { riskScore: result.aml.score ?? undefined },
          });
          this.emitAmlHit(candidate.userId, result.request_id, result.aml.total_hits, result.aml.score);
        }
      } catch (err) {
        this.logger.error(
          `AML screening failed for user=${candidate.userId}: ${err instanceof Error ? err.message : err}`,
        );
      }
    }

    this.logger.log(
      `AML nightly screening complete: screened=${screened} hits=${hits} skipped=${skipped}`,
    );
    return { screened, hits, skipped };
  }

  // TODO: field names (first_name/last_name/date_of_birth/nationality/document_number)
  // are taken from the ID Verification standalone API doc; confirm they match what
  // actually lands in id_verifications[0] of a real session decision payload.
  private extractIdentity(providerRawResponse: unknown): ExtractedIdentity | null {
    if (!providerRawResponse || typeof providerRawResponse !== 'object') return null;
    const decision = providerRawResponse as { id_verifications?: Array<Record<string, unknown>> };
    const idv = decision.id_verifications?.[0];
    if (!idv) return null;

    const firstName = idv.first_name as string | undefined;
    const lastName = idv.last_name as string | undefined;
    if (!firstName && !lastName) return null;

    return {
      fullName: [firstName, lastName].filter(Boolean).join(' '),
      dateOfBirth: idv.date_of_birth as string | undefined,
      nationality: idv.nationality as string | undefined,
      documentNumber: idv.document_number as string | undefined,
    };
  }

  private emitAmlHit(userId: string, requestId: string, totalHits: number, score?: number) {
    const payload: KycAmlHitDetectedPayload = {
      userId,
      requestId,
      totalHits,
      score,
      timestamp: new Date().toISOString(),
    };
    const envelope = createEnvelope({
      event: BET62_EVENTS.KYC.AML_HIT_DETECTED,
      aggregateType: 'KYC',
      aggregateId: userId,
      payload,
      producer: 'kyc-service',
    });
    this.eventEmitter.emit(BET62_EVENTS.KYC.AML_HIT_DETECTED, envelope);
    this.eventEmitter.emit(`${BET62_STREAMS.KYC}:emit`, envelope);
    this.logger.warn(`AML hit detected userId=${userId} totalHits=${totalHits} score=${score}`);
  }
}
