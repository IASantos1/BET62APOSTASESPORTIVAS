import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { BonusService } from '../bonus.service';
import { BET62_EVENTS } from '@bet62/shared';
import type {
  Bet62EventEnvelope,
  UserCreatedPayload,
  WalletDepositCompletedPayload,
  BetSettledPayload,
  CasinoBetSettledPayload,
} from '@bet62/shared';
import { BetStatus } from '@bet62/shared';

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
        const { userId, betId, stake, gameName, sessionId, settledAt } = env.payload;
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
      }
    } catch (err) {
      this.logger.error(`Failed to process CASINO.BET rollover`, err as Error);
    }
  }
}
