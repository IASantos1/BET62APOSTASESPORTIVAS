import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { PrismaService } from '../prisma/prisma.service';
import { LimitsService } from '../modules\limits/limits.service';
import {
  BET62_EVENTS,
  type UserCreatedPayload,
  type Bet62EventEnvelope,
  type KycLevelUpdatedPayload,
  KYC_LEVEL_LIMITS,
} from '@bet62/shared';

function toPrismaLanguage(lang?: string): string {
  if (!lang) return 'pt_PT';
  if (lang === 'pt-PT') return 'pt_PT';
  if (lang === 'en-US') return 'en_US';
  if (lang === 'es-ES') return 'es_ES';
  return lang.replace('-', '_');
}

function toPrismaCountry(country?: string): string {
  if (!country) return 'PT';
  const valid = ['PT', 'ES', 'FR', 'DE', 'IT', 'NL', 'MT', 'GB', 'BR', 'OTHER'] as const;
  return valid.includes(country as (typeof valid)[number]) ? country : 'OTHER';
}

function toPrismaCurrency(cur?: string): string {
  if (!cur) return 'EUR';
  const valid = ['EUR', 'USD', 'GBP', 'BRL'] as const;
  return valid.includes(cur as (typeof valid)[number]) ? cur : 'EUR';
}

@Injectable()
export class UserEventsListener {
  private readonly logger = new Logger(UserEventsListener.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly limitsService: LimitsService,
  ) {}

  @OnEvent(BET62_EVENTS.AUTH.USER_CREATED, { async: true })
  async handleUserCreated(event: Bet62EventEnvelope<UserCreatedPayload> | UserCreatedPayload) {
    const payload: UserCreatedPayload =
      'payload' in event && event.payload ? (event.payload as UserCreatedPayload) : (event as UserCreatedPayload);

    this.logger.log(`[USER_CREATED] Inicializando perfil para ${payload.userId}`);

    const kycLevel = payload.kycLevel ?? 0;
    const kycLimits = KYC_LEVEL_LIMITS[kycLevel] ?? KYC_LEVEL_LIMITS[0];
    const lang = toPrismaLanguage(payload.preferredLanguage);
    const country = toPrismaCountry(payload.country);
    const currency = toPrismaCurrency(payload.currency);

    try {
      await this.prisma.$transaction(async (tx) => {
        const firstName = payload.firstName ?? undefined;
        const lastName = payload.lastName ?? undefined;
        const fullName = [firstName, lastName].filter(Boolean).join(' ').trim() || null;

        await tx.userProfile.upsert({
          where: { userId: payload.userId },
          update: {},
          create: {
            userId: payload.userId,
            firstName,
            lastName,
            fullName,
            country,
            preferredLanguage: lang,
            preferredCurrency: currency,
            status: payload.initialStatus ?? 'ACTIVE',
            affiliateCode: payload.affiliateCode ?? null,
          },
        });

        await tx.userPreferences.upsert({
          where: { userId: payload.userId },
          update: {},
          create: { userId: payload.userId },
        });

        await tx.userLimits.upsert({
          where: { userId: payload.userId },
          update: {
            kycLevelApplied: kycLevel,
            depositDailyLimit: kycLimits.depositDaily || null,
            depositWeeklyLimit: kycLimits.depositWeekly || null,
            depositMonthlyLimit: kycLimits.depositMonthly || null,
            withdrawalDailyLimit: kycLimits.withdrawalDaily || null,
            withdrawalMonthlyLimit: kycLimits.withdrawalMonthly || null,
            stakePerBetMax: kycLimits.stakePerBetMax || null,
          },
          create: {
            userId: payload.userId,
            kycLevelApplied: kycLevel,
            depositDailyLimit: kycLimits.depositDaily || null,
            depositWeeklyLimit: kycLimits.depositWeekly || null,
            depositMonthlyLimit: kycLimits.depositMonthly || null,
            withdrawalDailyLimit: kycLimits.withdrawalDaily || null,
            withdrawalMonthlyLimit: kycLimits.withdrawalMonthly || null,
            stakePerBetMax: kycLimits.stakePerBetMax || null,
          },
        });
      });

      this.logger.log(`[USER_CREATED] Perfil, preferências e limites criados para ${payload.userId}`);
    } catch (err) {
      this.logger.error(`[USER_CREATED] Falha ao inicializar ${payload.userId}`, err as Error);
      throw err;
    }
  }

  @OnEvent(BET62_EVENTS.KYC.LEVEL_UPDATED, { async: true })
  async handleKycLevelUpdated(event: Bet62EventEnvelope<KycLevelUpdatedPayload> | KycLevelUpdatedPayload) {
    const payload: KycLevelUpdatedPayload =
      'payload' in event && event.payload ? (event.payload as KycLevelUpdatedPayload) : (event as KycLevelUpdatedPayload);

    this.logger.log(`[KYC LEVEL UPDATED] Aplicando limites para ${payload.userId} -> L${payload.newLevel}`);
    try {
      await this.limitsService.applyKYCLimits(payload.userId, payload.newLevel);
    } catch (err) {
      this.logger.error(`[KYC LEVEL UPDATED] Falha ao aplicar limites para ${payload.userId}`, err as Error);
    }
  }
}
