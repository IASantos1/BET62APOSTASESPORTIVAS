import { Injectable, Logger } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { PrismaService } from '../../prisma/prisma.service';
import {
  BonusStatus,
  BonusType,
  BonusTrigger,
  RolloverStatus,
  BET62_EVENTS,
  createEnvelope,
  DEFAULT_BONUS_CONFIG,
} from '@bet62/shared';

export interface BonusGrantResult {
  bonusType: BonusType;
  grantedAmount: number;
  maxAmount?: number;
  bonusPercentage: number;
  rolloverMultiplier: number;
  minOddsRequirement?: number;
  description: string;
  validityDays: number;
  trigger: BonusTrigger;
}

export interface FreeBetGrantResult {
  amount: number;
  minOddsRequirement: number;
  rolloverMultiplier: number;
  expiresAt: Date;
  description: string;
  trigger: BonusTrigger;
}

export interface CashbackGrantResult {
  grantedAmount: number;
  netLossConsidered: number;
  cashbackPercentage: number;
  maxAmount: number;
  rolloverMultiplier: number;
  description: string;
}

export interface WageringProgressUpdate {
  userBonusId: string;
  previousRolloverRemaining: number;
  newRolloverRemaining: number;
  rolloverComplete: boolean;
  bonusReleased: boolean;
}

interface UserContext {
  userId: string;
  id?: string;
  createdAt?: Date;
  vipLevel?: number;
  country?: string;
}

interface FirstBetContext {
  stakeAmount: number;
  totalOdds: number;
  betId: string;
  status: string;
}

@Injectable()
export class PromotionEngineService {
  private readonly logger = new Logger(PromotionEngineService.name);
  private readonly config = DEFAULT_BONUS_CONFIG;

  constructor(
    private readonly prisma: PrismaService,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  evaluateDepositWelcome(
    user: UserContext,
    depositAmount: number,
    userBonus: { hasActiveWelcome: boolean; depositCount: number },
  ): BonusGrantResult | null {
    const welcomeCfg = this.config.welcome;

    if (!welcomeCfg.enabled) return null;
    if (userBonus.hasActiveWelcome) return null;
    if (userBonus.depositCount >= welcomeCfg.maxDeposits) return null;
    if (depositAmount < welcomeCfg.minDeposit) return null;

    const bonusPercentage = welcomeCfg.matchPercent;
    const rawAmount = (depositAmount * bonusPercentage) / 100;
    const grantedAmount = Math.min(rawAmount, welcomeCfg.maxAmount);

    if (grantedAmount <= 0) return null;

    return {
      bonusType: BonusType.WELCOME_MATCH,
      grantedAmount,
      maxAmount: welcomeCfg.maxAmount,
      bonusPercentage,
      rolloverMultiplier: welcomeCfg.rolloverRequirement,
      minOddsRequirement: welcomeCfg.rolloverMinOdds,
      description: `WELCOME: ${bonusPercentage}% até €${welcomeCfg.maxAmount}`,
      validityDays: welcomeCfg.rolloverDays,
      trigger: BonusTrigger.FIRST_DEPOSIT,
    };
  }

  evaluateDepositFreeBetTier(
    _user: UserContext,
    depositAmount: number,
  ): FreeBetGrantResult | null {
    const freebetCfg = this.config.freebet;

    let freeBetAmount = 0;
    let description = '';

    if (depositAmount >= 20) {
      freeBetAmount = 10;
      description = 'FREEBET €10 - Depósito ≥ €20';
    } else if (depositAmount >= 10) {
      freeBetAmount = 5;
      description = 'FREEBET €5 - Depósito ≥ €10';
    } else {
      return null;
    }

    return {
      amount: freeBetAmount,
      minOddsRequirement: freebetCfg.minOdds,
      rolloverMultiplier: freebetCfg.rolloverRequirement,
      expiresAt: new Date(Date.now() + freebetCfg.rolloverDays * 86400000),
      description,
      trigger: BonusTrigger.DEPOSIT,
    };
  }

  evaluateFirstBetFreeBet(
    user: UserContext,
    firstBet: FirstBetContext,
  ): FreeBetGrantResult | null {
    const freebetCfg = this.config.freebet;

    if (firstBet.stakeAmount < 5) return null;
    if (firstBet.totalOdds < 1.5) return null;

    const freeBetAmount = Math.min(firstBet.stakeAmount, freebetCfg.maxStake);

    if (freeBetAmount <= 0) return null;

    return {
      amount: freeBetAmount,
      minOddsRequirement: 1.5,
      rolloverMultiplier: 1,
      expiresAt: new Date(Date.now() + freebetCfg.rolloverDays * 86400000),
      description: 'FREEBET Aposta Sem Risco - Primeira Aposta',
      trigger: BonusTrigger.BET_LOST,
    };
  }

  async evaluateWeeklyReload(
    userId: string,
    depositAmount: number,
  ): Promise<BonusGrantResult | null> {
    const now = new Date();
    const weekStart = new Date(now);
    weekStart.setDate(now.getDate() - now.getDay());
    weekStart.setHours(0, 0, 0, 0);

    const weeklyReloadCount = await this.prisma.userBonus.count({
      where: {
        userId,
        bonusType: BonusType.RELOAD_MATCH,
        grantedAt: { gte: weekStart },
      },
    });

    if (weeklyReloadCount >= 1) return null;
    if (depositAmount < 10) return null;

    const bonusPercentage = 25;
    const maxAmount = 20;
    const rawAmount = (depositAmount * bonusPercentage) / 100;
    const grantedAmount = Math.min(rawAmount, maxAmount);

    if (grantedAmount <= 0) return null;

    return {
      bonusType: BonusType.RELOAD_MATCH,
      grantedAmount,
      maxAmount,
      bonusPercentage,
      rolloverMultiplier: 5,
      minOddsRequirement: 1.5,
      description: `RELOAD SEMANAL: ${bonusPercentage}% até €${maxAmount}`,
      validityDays: 7,
      trigger: BonusTrigger.WEEKLY_SCHEDULED,
    };
  }

  evaluateWeeklyCashback(
    _userId: string,
    netLossWeek: number,
    vipLevel: number = 0,
  ): CashbackGrantResult | null {
    const cashbackCfg = this.config.cashback;

    if (!cashbackCfg.enabled) return null;

    const basePercent = cashbackCfg.weeklyLossPercent;
    const vipBoost = vipLevel * 1;
    const cashbackPercentage = Math.min(basePercent + vipBoost, 15);
    const maxAmount = cashbackCfg.weeklyMaxAmount;
    const minLoss = cashbackCfg.minLossForCashback;

    if (netLossWeek < minLoss) return null;

    const rawAmount = (netLossWeek * cashbackPercentage) / 100;
    const grantedAmount = Math.min(rawAmount, maxAmount);

    if (grantedAmount <= 0) return null;

    return {
      grantedAmount,
      netLossConsidered: netLossWeek,
      cashbackPercentage,
      maxAmount,
      rolloverMultiplier: cashbackCfg.rolloverRequirement,
      description: `CASHBACK SEMANAL: ${cashbackPercentage}% até €${maxAmount}`,
    };
  }

  async updateWageringProgress(
    userId: string,
    betTurnover: number,
  ): Promise<WageringProgressUpdate[]> {
    const results: WageringProgressUpdate[] = [];

    const activeBonuses = await this.prisma.userBonus.findMany({
      where: {
        userId,
        status: { in: [BonusStatus.ACTIVE, BonusStatus.LOCKED] },
        rolloverStatus: { in: [RolloverStatus.NOT_STARTED, RolloverStatus.IN_PROGRESS] },
      },
      orderBy: [{ grantedAt: 'asc' }],
    });

    for (const ub of activeBonuses) {
      const required = Number(ub.rolloverRequiredTotal);
      const previousCompleted = Number(ub.rolloverCompletedWeighted);
      const previousRemaining = required - previousCompleted;

      const contributionPct = 100;
      const weightedContribution = (betTurnover * contributionPct) / 100;

      const newCompleted = previousCompleted + weightedContribution;
      const newRemaining = Math.max(0, required - newCompleted);
      const rolloverComplete = newRemaining <= 0;

      const newPercent = required > 0 ? Math.min(100, (newCompleted / required) * 100) : 0;
      const rolloverStatus = rolloverComplete
        ? RolloverStatus.COMPLETE
        : newCompleted > 0
        ? RolloverStatus.IN_PROGRESS
        : RolloverStatus.NOT_STARTED;

      let bonusReleased = false;
      let newStatus = ub.status;

      if (rolloverComplete) {
        newStatus = BonusStatus.RELEASED;
        bonusReleased = true;

        this.eventEmitter.emit(
          BET62_EVENTS.BONUS.RELEASED,
          createEnvelope({
            event: BET62_EVENTS.BONUS.RELEASED,
            aggregateType: 'UserBonus',
            aggregateId: ub.id,
            producer: 'bonus-service',
            payload: {
              userBonusId: ub.id,
              userId: ub.userId,
              grantedAmount: Number(ub.grantedAmount),
              releasedAmount: Number(ub.grantedAmount),
              releasedAt: new Date().toISOString(),
            },
          }),
        );

        this.eventEmitter.emit(
          BET62_EVENTS.WALLET.INTERNAL_CREDIT,
          createEnvelope({
            event: BET62_EVENTS.WALLET.INTERNAL_CREDIT,
            aggregateType: 'Wallet',
            aggregateId: ub.userId,
            producer: 'bonus-service',
            payload: {
              userId: ub.userId,
              currency: ub.grantedCurrency ?? 'EUR',
              amount: Number(ub.grantedAmount),
              transactionType: 'BONUS_RELEASED',
              referenceId: ub.id,
              referenceType: 'BONUS_RELEASE',
              toBonus: false,
              correlationId: `bonus-release-${ub.id}`,
              note: `Bônus liberado: ${ub.description ?? ub.id}`,
            },
          }),
        );
      }

      await this.prisma.userBonus.update({
        where: { id: ub.id },
        data: {
          rolloverCompletedReal: { increment: betTurnover },
          rolloverCompletedWeighted: { increment: weightedContribution },
          rolloverPercent: newPercent,
          rolloverStatus,
          lastContributionAt: new Date(),
          status: newStatus,
          releasedAt: bonusReleased ? new Date() : undefined,
        },
      });

      results.push({
        userBonusId: ub.id,
        previousRolloverRemaining: previousRemaining,
        newRolloverRemaining: newRemaining,
        rolloverComplete,
        bonusReleased,
      });
    }

    return results;
  }

  async createUserBonusRecord(
    userId: string,
    result: BonusGrantResult,
    referenceDepositId?: string,
  ) {
    const grantedAmount = result.grantedAmount;
    const multiplier = result.rolloverMultiplier;

    return this.prisma.userBonus.create({
      data: {
        userId,
        bonusType: result.bonusType,
        status: BonusStatus.ACTIVE,
        grantedAmount,
        maxAmount: result.maxAmount,
        minOddsRequirement: result.minOddsRequirement,
        rolloverMultiplier: multiplier,
        rolloverRequiredTotal: grantedAmount * multiplier,
        rolloverStatus: RolloverStatus.NOT_STARTED,
        referenceDepositId,
        description: result.description,
        expiresAt: new Date(Date.now() + result.validityDays * 86400000),
      },
    });
  }

  async createFreeBetRecord(
    userId: string,
    result: FreeBetGrantResult,
  ) {
    return this.prisma.freeBet.create({
      data: {
        userId,
        status: BonusStatus.ACTIVE,
        amount: result.amount,
        minOddsRequirement: result.minOddsRequirement,
        rolloverMultiplier: result.rolloverMultiplier,
        expiresAt: result.expiresAt,
        remainingAmount: result.amount,
      },
    });
  }

  async hasUserClaimedFirstBetFreeBet(userId: string): Promise<boolean> {
    const count = await this.prisma.freeBet.count({
      where: {
        userId,
        description: { contains: 'Primeira Aposta' },
      },
    });
    return count > 0;
  }

  async isFirstDeposit(userId: string): Promise<boolean> {
    const count = await this.prisma.userBonus.count({
      where: {
        userId,
        referenceDepositId: { not: null },
      },
    });
    return count === 0;
  }
}
