import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { WalletService } from '../wallet.service';
import {
  BET62_EVENTS,
  Bet62EventEnvelope,
  UserCreatedPayload,
  KycLevelUpdatedPayload,
  BetPlacedPayload,
  BetSettledPayload,
  BonusGrantedPayload,
  TransactionType,
} from '@bet62/shared';

@Injectable()
export class WalletEventListener {
  private readonly logger = new Logger(WalletEventListener.name);

  constructor(private readonly walletService: WalletService) {}

  @OnEvent(BET62_EVENTS.AUTH.USER_CREATED)
  async handleUserCreated(event: Bet62EventEnvelope<UserCreatedPayload>) {
    const { userId, currency = 'EUR' } = event.payload;
    this.logger.log(`USER_CREATED received: creating Wallet L0 for user=${userId}`);
    await this.walletService.getOrCreateWallet(userId, currency);
  }

  @OnEvent(BET62_EVENTS.KYC.LEVEL_UPDATED)
  async handleKycLevelUpdated(event: Bet62EventEnvelope<KycLevelUpdatedPayload>) {
    const { userId, newLevel } = event.payload;
    this.logger.debug(`KYC_LEVEL_UPDATED user=${userId} newLevel=${newLevel}`);
    await this.walletService.updateKycLevel(userId, newLevel);
  }

  @OnEvent(BET62_EVENTS.BETS.PLACED)
  async handleBetPlaced(event: Bet62EventEnvelope<BetPlacedPayload>) {
    const { betId, userId, walletId, stakeAmount, stakeRealUsed, stakeBonusUsed } = event.payload;
    this.logger.debug(`BET_PLACED bet=${betId} user=${userId}`);
    if (stakeRealUsed > 0) {
      await this.walletService.internalDebit(
        userId,
        'EUR',
        stakeRealUsed,
        TransactionType.BET_PLACED,
        {
          referenceId: betId,
          referenceType: 'BET',
          correlationId: event.correlationId,
          note: `Bet placed stake real=${stakeRealUsed}`,
        },
        false,
      );
    }
    if (stakeBonusUsed > 0) {
      await this.walletService.internalDebit(
        userId,
        'EUR',
        stakeBonusUsed,
        TransactionType.BET_PLACED,
        {
          referenceId: `${betId}-bonus`,
          referenceType: 'BET',
          correlationId: event.correlationId,
          note: `Bet placed stake bonus=${stakeBonusUsed}`,
        },
        true,
      );
    }
  }

  @OnEvent(BET62_EVENTS.BETS.SETTLED)
  async handleBetSettled(event: Bet62EventEnvelope<BetSettledPayload>) {
    const { betId, userId, actualReturn, statusAfter, stakeAmount } = event.payload;
    this.logger.debug(`BET_SETTLED bet=${betId} user=${userId} status=${statusAfter} return=${actualReturn}`);

    let creditType: TransactionType | null = null;
    let creditAmount = 0;

    switch (statusAfter) {
      case 'WON':
        creditType = TransactionType.BET_SETTLED_WON;
        creditAmount = actualReturn;
        break;
      case 'HALF_WON':
        creditType = TransactionType.BET_SETTLED_HALF_WON;
        creditAmount = actualReturn;
        break;
      case 'HALF_LOST':
        creditType = TransactionType.BET_SETTLED_HALF_LOST;
        creditAmount = actualReturn;
        break;
      case 'VOID':
      case 'CANCELLED':
        creditType = TransactionType.BET_SETTLED_VOID;
        creditAmount = stakeAmount;
        break;
      case 'LOST':
        creditType = TransactionType.BET_SETTLED_LOST;
        creditAmount = 0;
        break;
    }

    if (creditType && creditAmount > 0) {
      await this.walletService.internalCredit(
        userId,
        'EUR',
        creditAmount,
        creditType,
        {
          referenceId: betId,
          referenceType: 'BET',
          correlationId: event.correlationId,
          note: `Bet settled ${statusAfter} return=${creditAmount}`,
        },
        false,
      );
    } else if (creditType === TransactionType.BET_SETTLED_LOST) {
      await this.walletService.internalCredit(
        userId,
        'EUR',
        0,
        creditType,
        {
          referenceId: betId,
          referenceType: 'BET',
          correlationId: event.correlationId,
          note: `Bet settled LOST`,
        },
        false,
      );
    }
  }

  @OnEvent(BET62_EVENTS.BONUS.GRANTED)
  async handleBonusGranted(event: Bet62EventEnvelope<BonusGrantedPayload>) {
    const { userBonusId, userId, remainingBalance, currency = 'EUR' } = event.payload;
    this.logger.debug(`BONUS_GRANTED user=${userId} amount=${remainingBalance}`);
    if (remainingBalance > 0) {
      await this.walletService.internalCredit(
        userId,
        currency,
        remainingBalance,
        TransactionType.BONUS_GRANTED,
        {
          referenceId: userBonusId,
          referenceType: 'BONUS',
          correlationId: event.correlationId,
          note: 'Bonus granted',
        },
        true,
      );
    }
  }
}
