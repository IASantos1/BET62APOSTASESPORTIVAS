import { Injectable, Logger, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { KYCLevel, PaymentStatus } from '@bet62/shared';

export type WithdrawalRiskStatus = 'ALLOWED' | 'RISK_REVIEW' | 'BLOCKED';

export interface WithdrawalRiskResult {
  status: WithdrawalRiskStatus;
  score: number;
  factors: string[];
  details: {
    kycLevel: number;
    accountAgeHours: number;
    depositCount24h: number;
    totalDeposited: number;
    totalTurnover: number;
    turnoverToDepositRatio: number;
    firstDepositHours: number;
    chargebackCount: number;
    suspectedMultipleAccounts: boolean;
    bonusAbuseCount: number;
  };
}

interface WithdrawalRiskDto {
  ipAddress?: string;
  userAgent?: string;
  deviceFingerprint?: string;
  email?: string;
}

interface RiskFactor {
  name: string;
  weight: number;
  triggered: boolean;
  message: string;
  level: 'INFO' | 'WARNING' | 'CRITICAL' | 'BLOCK';
}

const RISK_WEIGHTS = {
  KYC_L0_BLOCK: 999,
  KYC_L1_OK: 0,
  KYC_L2_SAFE: -20,
  DEPOSIT_WITHDRAW_RATIO_RISK: 40,
  BETTING_VOLUME_LOW: 35,
  ACCOUNT_AGE_YOUNG: 30,
  MULTIPLE_ACCOUNTS: 50,
  CHARGEBACK_HISTORY: 100,
  BONUS_ABUSE: 45,
  LARGE_WITHDRAWAL: 25,
  NEW_PAYMENT_METHOD: 20,
} as const;

const RISK_THRESHOLDS = {
  ALLOWED_MAX: 19,
  RISK_REVIEW_MIN: 20,
  RISK_REVIEW_MAX: 79,
  BLOCK_MIN: 80,
} as const;

@Injectable()
export class WithdrawalRiskEngineService {
  private readonly logger = new Logger(WithdrawalRiskEngineService.name);

  constructor(private readonly prisma: PrismaService) {}

  async evaluateWithdrawalRisk(
    userId: string,
    withdrawalAmount: number,
    paymentMethod: string,
    dto: WithdrawalRiskDto = {},
  ): Promise<WithdrawalRiskResult> {
    const factors: RiskFactor[] = [];

    const wallet = await this.prisma.wallet.findUnique({
      where: { userId_currency: { userId, currency: 'EUR' } },
    });

    if (!wallet) {
      throw new BadRequestException('Wallet not found');
    }

    const kycLevel = wallet.kycLevelApplied;
    const totalDeposited = Number(wallet.totalDeposited ?? 0);
    const totalTurnover = Number(wallet.totalTurnover ?? 0);
    const accountCreatedAt = wallet.createdAt;
    const accountAgeMs = Date.now() - accountCreatedAt.getTime();
    const accountAgeHours = accountAgeMs / (1000 * 60 * 60);

    const deposits = await this.prisma.deposit.findMany({
      where: { userId, walletCurrency: 'EUR' },
      orderBy: { createdAt: 'asc' },
      take: 50,
    });

    const firstDeposit = deposits[0];
    const firstDepositHours = firstDeposit
      ? (Date.now() - firstDeposit.createdAt.getTime()) / (1000 * 60 * 60)
      : Infinity;

    const deposits24h = deposits.filter(
      (d) => Date.now() - d.createdAt.getTime() < 24 * 60 * 60 * 1000,
    ).length;

    const depositCount24h = deposits24h;

    const turnoverToDepositRatio = totalDeposited > 0 ? totalTurnover / totalDeposited : 0;

    const realBalance = wallet.realBalance;
    const withdrawingFullBalance = withdrawalAmount >= realBalance * 0.95;

    const depositWithin24h = firstDepositHours < 24;
    const depositWithdrawRatioRisk = depositWithin24h && withdrawingFullBalance;

    const bettingVolumeInsufficient = totalTurnover < totalDeposited && totalDeposited > 0;

    const accountAgeRisk = accountAgeHours < 24;

    const chargebacks = await this.prisma.deposit.count({
      where: {
        userId,
        walletCurrency: 'EUR',
        status: PaymentStatus.REFUNDED,
      },
    });
    const chargebackCount = chargebacks;
    const hasChargebackHistory = chargebackCount > 0;

    let suspectedMultipleAccounts = false;
    if (dto.email || dto.ipAddress || dto.deviceFingerprint) {
      const whereClauses: Array<Record<string, unknown>> = [];
      if (dto.email) {
        whereClauses.push({ email: dto.email.toLowerCase() });
      }
      const similarUsers = await this.prisma.$queryRaw<Array<{ count: number }>>`
        SELECT COUNT(DISTINCT u.id) as count
        FROM auth.users u
        LEFT JOIN wallet.deposit d ON u.id = d.user_id
        WHERE u.id != ${userId}::uuid
        AND (
          (${dto.email ?? null} IS NOT NULL AND LOWER(u.email) = LOWER(${dto.email ?? ''}))
          OR (${dto.ipAddress ?? null} IS NOT NULL AND d.ip_address = ${dto.ipAddress ?? ''})
        )
        LIMIT 10
      `.catch(() => [{ count: 0 }]);
      suspectedMultipleAccounts = Number((similarUsers[0] as { count: number })?.count ?? 0) > 0;
    }

    let bonusAbuseCount = 0;
    try {
      const bonusStats = await this.prisma.$queryRaw<Array<{ claimed: number; wagering_complete: number }>>`
        SELECT
          COUNT(*)::int as claimed,
          COUNT(*) FILTER (WHERE ub.rollover_status IN ('COMPLETE', 'RELEASED'))::int as wagering_complete
        FROM bonus.user_bonus ub
        WHERE ub.user_id = ${userId}::uuid
        AND ub.status != 'VOID'
        AND ub.created_at >= NOW() - INTERVAL '90 days'
      `.catch(() => [{ claimed: 0, wagering_complete: 0 }]);
      const claimed = Number((bonusStats[0] as { claimed: number })?.claimed ?? 0);
      const completed = Number((bonusStats[0] as { wagering_complete: number })?.wagering_complete ?? 0);
      bonusAbuseCount = Math.max(0, claimed - completed);
    } catch (_e) {
      bonusAbuseCount = 0;
    }
    const bonusAbuse = bonusAbuseCount >= 5;

    factors.push(this.checkKYCLevel(kycLevel));
    factors.push(this.checkDepositWithdrawRatio(depositWithdrawRatioRisk, firstDepositHours, withdrawalAmount, realBalance));
    factors.push(this.checkBettingVolume(bettingVolumeInsufficient, totalTurnover, totalDeposited));
    factors.push(this.checkAccountAge(accountAgeRisk, accountAgeHours));
    factors.push(this.checkMultipleAccounts(suspectedMultipleAccounts));
    factors.push(this.checkChargebackHistory(hasChargebackHistory, chargebackCount));
    factors.push(this.checkBonusAbuse(bonusAbuse, bonusAbuseCount));

    if (withdrawalAmount >= 10000) {
      factors.push({
        name: 'LARGE_WITHDRAWAL',
        weight: RISK_WEIGHTS.LARGE_WITHDRAWAL,
        triggered: true,
        message: `Saque de valor elevado: €${withdrawalAmount.toFixed(2)}`,
        level: 'WARNING',
      });
    }

    const blockFactors = factors.filter((f) => f.level === 'BLOCK');
    if (blockFactors.length > 0) {
      return {
        status: 'BLOCKED',
        score: 100,
        factors: blockFactors.map((f) => f.message),
        details: {
          kycLevel,
          accountAgeHours,
          depositCount24h,
          totalDeposited,
          totalTurnover,
          turnoverToDepositRatio,
          firstDepositHours,
          chargebackCount,
          suspectedMultipleAccounts,
          bonusAbuseCount,
        },
      };
    }

    let score = 50;
    const triggeredFactors = factors.filter((f) => f.triggered);
    for (const f of triggeredFactors) {
      score += f.weight;
    }
    score = Math.max(0, Math.min(100, score));

    let status: WithdrawalRiskStatus;
    if (score >= RISK_THRESHOLDS.BLOCK_MIN) {
      status = 'BLOCKED';
    } else if (score >= RISK_THRESHOLDS.RISK_REVIEW_MIN) {
      status = 'RISK_REVIEW';
    } else {
      status = 'ALLOWED';
    }

    return {
      status,
      score,
      factors: triggeredFactors.map((f) => f.message),
      details: {
        kycLevel,
        accountAgeHours,
        depositCount24h,
        totalDeposited,
        totalTurnover,
        turnoverToDepositRatio,
        firstDepositHours,
        chargebackCount,
        suspectedMultipleAccounts,
        bonusAbuseCount,
      },
    };
  }

  private checkKYCLevel(kycLevel: number): RiskFactor {
    if (kycLevel === KYCLevel.L0) {
      return {
        name: 'KYC_L0',
        weight: RISK_WEIGHTS.KYC_L0_BLOCK,
        triggered: true,
        message: 'KYC nível L0: saque não permitido. Complete a verificação KYC.',
        level: 'BLOCK',
      };
    }
    if (kycLevel >= KYCLevel.L2) {
      return {
        name: 'KYC_L2',
        weight: RISK_WEIGHTS.KYC_L2_SAFE,
        triggered: true,
        message: `KYC nível L${kycLevel}: conta verificada (redução de risco -20)`,
        level: 'INFO',
      };
    }
    return {
      name: 'KYC_L1',
      weight: RISK_WEIGHTS.KYC_L1_OK,
      triggered: true,
      message: `KYC nível L${kycLevel}: saque permitido`,
      level: 'INFO',
    };
  }

  private checkDepositWithdrawRatio(
    triggered: boolean,
    firstDepositHours: number,
    withdrawalAmount: number,
    realBalance: number,
  ): RiskFactor {
    if (triggered) {
      return {
        name: 'DEPOSIT_WITHDRAW_RATIO',
        weight: RISK_WEIGHTS.DEPOSIT_WITHDRAW_RATIO_RISK,
        triggered: true,
        message: `Primeiro depósito há ${firstDepositHours.toFixed(1)}h (<24h) + saque de ${((withdrawalAmount / Math.max(realBalance, 0.01)) * 100).toFixed(0)}% do saldo`,
        level: 'WARNING',
      };
    }
    return {
      name: 'DEPOSIT_WITHDRAW_RATIO',
      weight: 0,
      triggered: false,
      message: 'Rácio depósito/saque dentro dos limites aceitáveis',
      level: 'INFO',
    };
  }

  private checkBettingVolume(
    triggered: boolean,
    totalTurnover: number,
    totalDeposited: number,
  ): RiskFactor {
    if (triggered) {
      return {
        name: 'BETTING_VOLUME_LOW',
        weight: RISK_WEIGHTS.BETTING_VOLUME_LOW,
        triggered: true,
        message: `Volume de apostas (€${totalTurnover.toFixed(2)}) < total depositado (€${totalDeposited.toFixed(2)})`,
        level: 'WARNING',
      };
    }
    return {
      name: 'BETTING_VOLUME_LOW',
      weight: 0,
      triggered: false,
      message: `Volume de apostas adequado: turnover €${totalTurnover.toFixed(2)} vs depositado €${totalDeposited.toFixed(2)}`,
      level: 'INFO',
    };
  }

  private checkAccountAge(triggered: boolean, accountAgeHours: number): RiskFactor {
    if (triggered) {
      return {
        name: 'ACCOUNT_AGE_YOUNG',
        weight: RISK_WEIGHTS.ACCOUNT_AGE_YOUNG,
        triggered: true,
        message: `Conta criada há ${accountAgeHours.toFixed(1)}h (<24h)`,
        level: 'WARNING',
      };
    }
    return {
      name: 'ACCOUNT_AGE_YOUNG',
      weight: 0,
      triggered: false,
      message: `Conta com ${(accountAgeHours / 24).toFixed(1)} dias de idade`,
      level: 'INFO',
    };
  }

  private checkMultipleAccounts(triggered: boolean): RiskFactor {
    if (triggered) {
      return {
        name: 'MULTIPLE_ACCOUNTS',
        weight: RISK_WEIGHTS.MULTIPLE_ACCOUNTS,
        triggered: true,
        message: 'Suspeita de múltiplas contas: email/IP/dispositivo corresponde a outro utilizador ativo',
        level: 'CRITICAL',
      };
    }
    return {
      name: 'MULTIPLE_ACCOUNTS',
      weight: 0,
      triggered: false,
      message: 'Sem indícios de múltiplas contas',
      level: 'INFO',
    };
  }

  private checkChargebackHistory(triggered: boolean, chargebackCount: number): RiskFactor {
    if (triggered) {
      return {
        name: 'CHARGEBACK_HISTORY',
        weight: RISK_WEIGHTS.CHARGEBACK_HISTORY,
        triggered: true,
        message: `Histórico de chargebacks: ${chargebackCount} ocorrência(s) - SAQUE BLOQUEADO`,
        level: 'BLOCK',
      };
    }
    return {
      name: 'CHARGEBACK_HISTORY',
      weight: 0,
      triggered: false,
      message: 'Sem histórico de chargebacks',
      level: 'INFO',
    };
  }

  private checkBonusAbuse(triggered: boolean, bonusAbuseCount: number): RiskFactor {
    if (triggered) {
      return {
        name: 'BONUS_ABUSE',
        weight: RISK_WEIGHTS.BONUS_ABUSE,
        triggered: true,
        message: `Potencial abuso de bónus: ${bonusAbuseCount} bónus reclamados sem completar wagering`,
        level: 'WARNING',
      };
    }
    return {
      name: 'BONUS_ABUSE',
      weight: 0,
      triggered: false,
      message: bonusAbuseCount > 0
        ? `${bonusAbuseCount} bónus pendentes de wagering (limite 5)`
        : 'Sem bónus pendentes de wagering',
      level: 'INFO',
    };
  }
}
