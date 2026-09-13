import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { KYC_LEVEL_LIMITS, type KYCLevelLimits } from '@bet62/shared';

export type LimitCheckType =
  | 'deposit'
  | 'wager'
  | 'loss'
  | 'stake'
  | 'withdrawal'
  | 'session';

export interface LimitCheckInput {
  userId: string;
  kycLevel?: number;
  type: LimitCheckType;
  amount?: number;
  periodUsage?: {
    daily?: number;
    weekly?: number;
    monthly?: number;
  };
  sessionMinutesUsed?: number;
}

@Injectable()
export class LimitsService {
  constructor(private readonly prisma: PrismaService) {}

  getKYCLimits(kycLevel: number): KYCLevelLimits {
    return KYC_LEVEL_LIMITS[kycLevel] ?? KYC_LEVEL_LIMITS[0];
  }

  getEffectiveLimits(
    userLimits: {
      depositDailyLimit?: number | null;
      depositWeeklyLimit?: number | null;
      depositMonthlyLimit?: number | null;
      wagerDailyLimit?: number | null;
      wagerWeeklyLimit?: number | null;
      wagerMonthlyLimit?: number | null;
      lossDailyLimit?: number | null;
      lossWeeklyLimit?: number | null;
      lossMonthlyLimit?: number | null;
      stakePerBetMax?: number | null;
      stakePerBetMin: number;
      withdrawalDailyLimit?: number | null;
      withdrawalMonthlyLimit?: number | null;
      sessionTimeLimitMin?: number | null;
      kycLevelApplied: number;
    },
  ) {
    const kyc = this.getKYCLimits(userLimits.kycLevelApplied);
    const minOrNull = (a: number | null | undefined, b: number) => {
      if (a == null) return b === 0 ? null : b;
      if (b === 0) return a;
      return Math.min(a, b);
    };
    return {
      depositDaily: minOrNull(userLimits.depositDailyLimit, kyc.depositDaily),
      depositWeekly: minOrNull(userLimits.depositWeeklyLimit, kyc.depositWeekly),
      depositMonthly: minOrNull(userLimits.depositMonthlyLimit, kyc.depositMonthly),
      wagerDaily: userLimits.wagerDailyLimit ?? null,
      wagerWeekly: userLimits.wagerWeeklyLimit ?? null,
      wagerMonthly: userLimits.wagerMonthlyLimit ?? null,
      lossDaily: userLimits.lossDailyLimit ?? null,
      lossWeekly: userLimits.lossWeeklyLimit ?? null,
      lossMonthly: userLimits.lossMonthlyLimit ?? null,
      stakePerBetMax: minOrNull(userLimits.stakePerBetMax, kyc.stakePerBetMax),
      stakePerBetMin: userLimits.stakePerBetMin,
      withdrawalDaily: minOrNull(userLimits.withdrawalDailyLimit, kyc.withdrawalDaily),
      withdrawalMonthly: minOrNull(userLimits.withdrawalMonthlyLimit, kyc.withdrawalMonthly),
      sessionTimeLimitMin: userLimits.sessionTimeLimitMin ?? null,
      kycLevelApplied: userLimits.kycLevelApplied,
    };
  }

  async getUserLimitsOrThrow(userId: string) {
    const limits = await this.prisma.userLimits.findUnique({
      where: { userId },
    });
    if (!limits) {
      throw new ForbiddenException('Limites de usuário não configurados');
    }
    const status = await this.prisma.userProfile.findUnique({
      where: { userId },
      select: { status: true },
    });
    if (!status) {
      throw new ForbiddenException('Perfil de usuário não encontrado');
    }
    if (status.status === 'SELF_EXCLUDED' || status.status === 'BANNED' || status.status === 'CLOSED') {
      throw new ForbiddenException(`Conta com status ${status.status}: operação não permitida`);
    }
    const activeExclusion = await this.prisma.selfExclusionRecord.findFirst({
      where: { userId, isActive: true },
    });
    if (activeExclusion) {
      throw new ForbiddenException('Usuário está em autoexclusão ativa');
    }
    return limits;
  }

  async checkLimit(input: LimitCheckInput): Promise<void> {
    const userLimits = await this.getUserLimitsOrThrow(input.userId);
    const effective = this.getEffectiveLimits(userLimits);
    const usage = input.periodUsage ?? {};

    const assertLimit = (cap: number | null | undefined, used: number, amount: number, label: string) => {
      if (cap == null) return;
      if (used + amount > cap) {
        throw new ForbiddenException(
          `Limite de ${label} excedido: usado ${used} + solicitado ${amount} > ${cap}`,
        );
      }
    };

    switch (input.type) {
      case 'deposit': {
        const amount = input.amount ?? 0;
        assertLimit(effective.depositDaily, usage.daily ?? 0, amount, 'depósito diário');
        assertLimit(effective.depositWeekly, usage.weekly ?? 0, amount, 'depósito semanal');
        assertLimit(effective.depositMonthly, usage.monthly ?? 0, amount, 'depósito mensal');
        break;
      }
      case 'wager': {
        const amount = input.amount ?? 0;
        if (effective.stakePerBetMax != null && amount > effective.stakePerBetMax) {
          throw new ForbiddenException(`Aposta excede stake máximo por aposta: ${amount} > ${effective.stakePerBetMax}`);
        }
        if (amount < effective.stakePerBetMin) {
          throw new ForbiddenException(`Aposta abaixo do stake mínimo: ${amount} < ${effective.stakePerBetMin}`);
        }
        assertLimit(effective.wagerDaily, usage.daily ?? 0, amount, 'aposta diária');
        assertLimit(effective.wagerWeekly, usage.weekly ?? 0, amount, 'aposta semanal');
        assertLimit(effective.wagerMonthly, usage.monthly ?? 0, amount, 'aposta mensal');
        break;
      }
      case 'loss': {
        const amount = input.amount ?? 0;
        assertLimit(effective.lossDaily, usage.daily ?? 0, amount, 'perda diária');
        assertLimit(effective.lossWeekly, usage.weekly ?? 0, amount, 'perda semanal');
        assertLimit(effective.lossMonthly, usage.monthly ?? 0, amount, 'perda mensal');
        break;
      }
      case 'stake': {
        const amount = input.amount ?? 0;
        if (effective.stakePerBetMax != null && amount > effective.stakePerBetMax) {
          throw new ForbiddenException(`Stake excede máximo: ${amount} > ${effective.stakePerBetMax}`);
        }
        if (amount < effective.stakePerBetMin) {
          throw new ForbiddenException(`Stake abaixo do mínimo: ${amount} < ${effective.stakePerBetMin}`);
        }
        break;
      }
      case 'withdrawal': {
        const amount = input.amount ?? 0;
        const kyc = this.getKYCLimits(userLimits.kycLevelApplied);
        if (!kyc.withdrawalAllowed) {
          throw new ForbiddenException('Saques não permitidos para o nível KYC atual');
        }
        assertLimit(effective.withdrawalDaily, usage.daily ?? 0, amount, 'saque diário');
        assertLimit(effective.withdrawalMonthly, usage.monthly ?? 0, amount, 'saque mensal');
        break;
      }
      case 'session': {
        if (effective.sessionTimeLimitMin != null && (input.sessionMinutesUsed ?? 0) > effective.sessionTimeLimitMin) {
          throw new ForbiddenException(`Limite de tempo de sessão excedido: ${input.sessionMinutesUsed}min > ${effective.sessionTimeLimitMin}min`);
        }
        break;
      }
    }
  }

  async applyKYCLimits(userId: string, kycLevel: number) {
    const kyc = this.getKYCLimits(kycLevel);
    await this.prisma.userLimits.upsert({
      where: { userId },
      create: {
        userId,
        kycLevelApplied: kycLevel,
        depositDailyLimit: kyc.depositDaily || null,
        depositWeeklyLimit: kyc.depositWeekly || null,
        depositMonthlyLimit: kyc.depositMonthly || null,
        withdrawalDailyLimit: kyc.withdrawalDaily || null,
        withdrawalMonthlyLimit: kyc.withdrawalMonthly || null,
        stakePerBetMax: kyc.stakePerBetMax || null,
      },
      update: {
        kycLevelApplied: kycLevel,
        depositDailyLimit: kyc.depositDaily || null,
        depositWeeklyLimit: kyc.depositWeekly || null,
        depositMonthlyLimit: kyc.depositMonthly || null,
        withdrawalDailyLimit: kyc.withdrawalDaily || null,
        withdrawalMonthlyLimit: kyc.withdrawalMonthly || null,
        stakePerBetMax: kyc.stakePerBetMax || null,
      },
    });
  }
}
