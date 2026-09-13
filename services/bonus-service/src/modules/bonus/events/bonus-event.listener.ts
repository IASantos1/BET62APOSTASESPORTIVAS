import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { Cron, CronExpression } from '@nestjs/schedule';
import { BonusService } from '../bonus.service';
import { BET62_EVENTS, BetStatus } from '@bet62/shared';
import type {
  Bet62EventEnvelope,
  UserCreatedPayload,
  WalletDepositCompletedPayload,
  BetSettledPayload,
  CasinoBetSettledPayload,
} from '@bet62/shared';

@Injectable()
export class BonusEventListener {
  private readonly logger = new Logger(BonusEventListener.name);

  constructor(private readonly bonusService: BonusService) {}

  @OnEvent(BET62_EVENTS.AUTH.USER_CREATED, { async: true })
  async onUserCreated(env: Bet62EventEnvelope<UserCreatedPayload>) {
    try {
      this.logger.debug(`USER_CREATED received: userId=${env.payload.userId}`);
      await this.bonusService.processSignupWelcome(
        env.payload.userId,
        env.payload.country,
      );
    } catch (err) {
      this.logger.error(`Failed to process USER_CREATED bonus`, err as Error);
    }
  }

  @OnEvent(BET62_EVENTS.WALLET.DEPOSIT_COMPLETED, { async: true })
  async onDepositCompleted(env: Bet62EventEnvelope<WalletDepositCompletedPayload>) {
    try {
      const { userId, depositId, amount } = env.payload;
      const depositAmount = Number(amount?.amount ?? 0);
      if (depositAmount <= 0) return;
      this.logger.debug(`DEPOSIT_COMPLETED userId=${userId} amount=${depositAmount}`);

      await this.bonusService.processFirstDepositMatch(
        userId,
        depositId,
        depositAmount,
        undefined,
      );

      await this.bonusService.evaluateAndGrantDepositPromotions(
        userId,
        depositId,
        depositAmount,
        undefined,
      );
    } catch (err) {
      this.logger.error(`Failed to process DEPOSIT_COMPLETED bonus`, err as Error);
    }
  }

  @OnEvent(BET62_EVENTS.BETS.SETTLED, { async: true })
  async onBetSettled(env: Bet62EventEnvelope<BetSettledPayload>) {
    try {
      const { userId, betId, stakeAmount, actualReturn, settledAt, results } = env.payload;
      const minOdds = results && results.length > 0
        ? Math.min(...results.map((r) => Number((r as any).oddsAtSettlement ?? 1)))
        : undefined;
      const totalOdds = results && results.length > 0
        ? results.reduce((acc, r) => acc * Number((r as any).oddsAtSettlement ?? 1), 1)
        : 1;

      const activeBonuses = await this.bonusService.findActiveUserBonusesForRollover(userId);
      for (const ub of activeBonuses) {
        await this.bonusService.rolloverAddContribution({
          userBonusId: ub.id,
          wagered: Number(stakeAmount),
          sourceType: 'SPORTS_BET',
          oddsAtBet: minOdds,
          betId,
          winningAmount: actualReturn ? Number(actualReturn) : undefined,
          selectionCount: results?.length,
          correlationId: env.correlationId,
        });
      }

      await this.bonusService.updateWageringProgress(userId, Number(stakeAmount));

      if (env.payload.statusAfter === BetStatus.LOST || env.payload.statusAfter === BetStatus.HALF_LOST) {
        await this.bonusService.evaluateAndGrantFirstBetFreeBet(userId, {
          stakeAmount: Number(stakeAmount),
          totalOdds,
          betId,
          status: env.payload.statusAfter,
        });
      }
    } catch (err) {
      this.logger.error(`Failed to process BETS.SETTLED rollover`, err as Error);
    }
  }

  @OnEvent(BET62_EVENTS.CASINO.BET_PLACED, { async: true })
  @OnEvent(BET62_EVENTS.CASINO.BET_WON, { async: true })
  @OnEvent(BET62_EVENTS.CASINO.BET_LOST, { async: true })
  async onCasinoBet(env: Bet62EventEnvelope<CasinoBetSettledPayload>) {
    try {
      if (env.event !== BET62_EVENTS.CASINO.BET_PLACED) {
        const { userId, betId, stake, gameName, sessionId } = env.payload;
        const activeBonuses = await this.bonusService.findActiveUserBonusesForRollover(userId);
        for (const ub of activeBonuses) {
          await this.bonusService.rolloverAddContribution({
            userBonusId: ub.id,
            wagered: Number(stake),
            sourceType: 'CASINO_BET',
            casinoCategory: gameName,
            casinoRoundId: sessionId,
            betId,
            winningAmount: env.payload.win ? Number(env.payload.win) : undefined,
            correlationId: env.correlationId,
          });
        }

        await this.bonusService.updateWageringProgress(userId, Number(stake));
      }
    } catch (err) {
      this.logger.error(`Failed to process CASINO.BET rollover`, err as Error);
    }
  }

  @Cron(CronExpression.EVERY_WEEKDAY, {
    name: 'weekly_promotions_sunday',
    timeZone: 'Europe/Lisbon',
  })
  async handleWeeklyPromotionsCron() {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const hour = now.getHours();
    const minute = now.getMinutes();

    if (dayOfWeek !== 0 || hour !== 0 || minute > 2) {
      return;
    }

    this.logger.log('Starting WEEKLY scheduled promotions (Sunday 00:01)');
    try {
      const usersWithActivity = await this.bonusService['prisma'].userBonus.findMany({
        select: { userId: true },
        distinct: ['userId'],
        take: 1000,
      });

      for (const { userId } of usersWithActivity) {
        try {
          await this.bonusService.processWeeklyScheduledPromotions(userId, 0, 0, 0);
        } catch (err) {
          this.logger.error(`Failed weekly promotions for user=${userId}`, err as Error);
        }
      }
      this.logger.log('Completed WEEKLY scheduled promotions');
    } catch (err) {
      this.logger.error(`Failed to run weekly promotions cron`, err as Error);
    }
  }
}
