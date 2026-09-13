import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { BET62_EVENTS } from '@bet62/shared';
import type { BetSettledPayload } from '@bet62/shared';

@Injectable()
export class BetsEventListener {
  private readonly logger = new Logger(BetsEventListener.name);

  @OnEvent(BET62_EVENTS.BETS.PLACED, { async: true })
  async handleBetPlaced(payload: { betId: string; userId: string; stakeAmount: number }) {
    this.logger.log(
      `[BetPlaced] Aposta criada: betId=${payload.betId} userId=${payload.userId} stake=${payload.stakeAmount}`,
    );
  }

  @OnEvent(BET62_EVENTS.BETS.SETTLED, { async: true })
  async handleBetSettled(payload: BetSettledPayload) {
    this.logger.log(
      `[BetSettled] Aposta liquidada: betId=${payload.betId} status=${payload.statusAfter} retorno=${payload.actualReturn}`,
    );
  }

  @OnEvent(BET62_EVENTS.BETS.WON, { async: true })
  async handleBetWon(payload: { betId: string; userId: string; actualReturn: number }) {
    this.logger.log(
      `[BetWon] Aposta ganha: betId=${payload.betId} userId=${payload.userId} retorno=${payload.actualReturn}`,
    );
  }

  @OnEvent(BET62_EVENTS.BETS.LOST, { async: true })
  async handleBetLost(payload: { betId: string; userId: string }) {
    this.logger.log(
      `[BetLost] Aposta perdida: betId=${payload.betId} userId=${payload.userId}`,
    );
  }

  @OnEvent(BET62_EVENTS.BETS.VOID, { async: true })
  async handleBetVoid(payload: { betId: string; userId: string; reason?: string }) {
    this.logger.log(
      `[BetVoid] Aposta anulada: betId=${payload.betId} userId=${payload.userId} motivo=${payload.reason ?? 'n/a'}`,
    );
  }

  @OnEvent(BET62_EVENTS.BETS.CASHOUT_CONFIRMED, { async: true })
  async handleCashoutConfirmed(payload: { betId: string; userId: string; amountNetToUser: number }) {
    this.logger.log(
      `[CashoutConfirmed] Cashout confirmado: betId=${payload.betId} userId=${payload.userId} valor líquido=${payload.amountNetToUser}`,
    );
  }
}
