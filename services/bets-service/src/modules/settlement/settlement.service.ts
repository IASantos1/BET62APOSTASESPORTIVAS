import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { PrismaService } from '../../prisma/prisma.service';
import type { AdminSettleEventDto } from '@bet62/shared';
import { BET62_EVENTS, BetStatus, SelectionOutcome, roundAmount } from '@bet62/shared';
import type { BetSettledPayload } from '@bet62/shared';
import { BetsEventPublisher } from '../events/bets-event.publisher';

type DecimalLike = { toNumber(): number } | number | string;

const toNum = (d: DecimalLike | undefined | null): number => {
  if (d === null || d === undefined) return 0;
  if (typeof d === 'number') return d;
  if (typeof d === 'string') return Number(d);
  return Number(d);
};

@Injectable()
export class SettlementService {
  private readonly logger = new Logger(SettlementService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly eventEmitter: EventEmitter2,
    private readonly publisher: BetsEventPublisher,
  ) {}

  private resolveSelectionOutcome(
    marketType: string,
    outcomeRequested: SelectionOutcome,
    result: AdminSettleEventDto['results'],
  ): SelectionOutcome {
    if (result.void) return SelectionOutcome.VOID;
    const homeScore = result.homeScore ?? 0;
    const awayScore = result.awayScore ?? 0;
    if (result.selectionResults && result.selectionResults.length > 0) {
      // override por seleção é tratado no loop
    }
    switch (marketType) {
      case 'MATCH_WINNER_1X2':
      case 'HALF_TIME_RESULT': {
        if (homeScore > awayScore) {
          return outcomeRequested === SelectionOutcome.HOME
            ? SelectionOutcome.WON
            : SelectionOutcome.LOST;
        }
        if (awayScore > homeScore) {
          return outcomeRequested === SelectionOutcome.AWAY
            ? SelectionOutcome.WON
            : SelectionOutcome.LOST;
        }
        return outcomeRequested === SelectionOutcome.DRAW
          ? SelectionOutcome.WON
          : SelectionOutcome.LOST;
      }
      case 'MATCH_WINNER_12':
      case 'MONEYLINE': {
        if (homeScore > awayScore) {
          return outcomeRequested === SelectionOutcome.HOME
            ? SelectionOutcome.WON
            : SelectionOutcome.LOST;
        }
        if (awayScore > homeScore) {
          return outcomeRequested === SelectionOutcome.AWAY
            ? SelectionOutcome.WON
            : SelectionOutcome.LOST;
        }
        return SelectionOutcome.VOID;
      }
      case 'OVER_UNDER_TOTAL': {
        const total = homeScore + awayScore;
        if (outcomeRequested === SelectionOutcome.OVER) {
          return total > 0 ? SelectionOutcome.WON : SelectionOutcome.LOST;
        }
        return total === 0 ? SelectionOutcome.WON : SelectionOutcome.LOST;
      }
      case 'BTTS_YES_NO': {
        const both = homeScore > 0 && awayScore > 0;
        if (outcomeRequested === SelectionOutcome.YES) {
          return both ? SelectionOutcome.WON : SelectionOutcome.LOST;
        }
        return both ? SelectionOutcome.LOST : SelectionOutcome.WON;
      }
      case 'DOUBLE_CHANCE': {
        const homeWin = homeScore > awayScore;
        const draw = homeScore === awayScore;
        const awayWin = awayScore > homeScore;
        if (outcomeRequested === SelectionOutcome.HOME && (homeWin || draw)) {
          return SelectionOutcome.WON;
        }
        if (outcomeRequested === SelectionOutcome.AWAY && (awayWin || draw)) {
          return SelectionOutcome.WON;
        }
        return SelectionOutcome.LOST;
      }
      default:
        return result.winnerSide === outcomeRequested
          ? SelectionOutcome.WON
          : SelectionOutcome.LOST;
    }
  }

  private winningRatioForSelection(outcome: SelectionOutcome): number {
    switch (outcome) {
      case SelectionOutcome.WON:
        return 1;
      case SelectionOutcome.LOST:
        return 0;
      case SelectionOutcome.VOID:
        return -1;
      case SelectionOutcome.HALF_WON:
        return 0.5;
      case SelectionOutcome.HALF_LOST:
        return 0.5;
      default:
        return 0;
    }
  }

  async settleEvent(dto: AdminSettleEventDto, settledBy?: string) {
    const { eventId, results, note } = dto;
    const pendingSelections = await this.prisma.betSelection.findMany({
      where: { eventId, status: SelectionOutcome.PENDING },
      include: { bet: true },
    });
    if (pendingSelections.length === 0) {
      return {
        eventId,
        affectedBets: 0,
        affectedSelections: 0,
        note: 'Nenhuma seleção pendente para este evento',
      };
    }
    const betIds = Array.from(new Set(pendingSelections.map((s) => s.betId)));
    const settlementSource = 'ADMIN_MANUAL';
    const now = new Date();
    const resultsSummary: Array<{
      betId: string;
      statusBefore: BetStatus;
      statusAfter: BetStatus;
      actualReturnBefore: number | null;
      actualReturnAfter: number | null;
      selectionsResults: Array<{ selectionId: string; outcomeBefore: SelectionOutcome; outcomeAfter: SelectionOutcome }>;
    }> = [];

    for (const betId of betIds) {
      const betSelections = pendingSelections.filter((s) => s.betId === betId);
      if (betSelections.length === 0) continue;
      const bet = betSelections[0].bet;
      const selectionsResults: Array<{ selectionId: string; outcomeBefore: SelectionOutcome; outcomeAfter: SelectionOutcome }> = [];
      let wonCount = 0;
      let lostCount = 0;
      let voidCount = 0;
      let halfWonCount = 0;
      let halfLostCount = 0;
      const betSelectionUpdateData: Array<{ id: string; data: any }> = [];
      for (const bs of betSelections) {
        const override = results.selectionResults?.find((r) => r.selectionId === bs.selectionId);
        let outcomeAfter: SelectionOutcome;
        if (override) {
          outcomeAfter = override.outcome;
        } else {
          outcomeAfter = this.resolveSelectionOutcome(bs.marketType, bs.outcome, results);
        }
        selectionsResults.push({
          selectionId: bs.id,
          outcomeBefore: bs.status,
          outcomeAfter,
        });
        betSelectionUpdateData.push({
          id: bs.id,
          data: {
            status: outcomeAfter,
            settledAt: now,
            settledOdds: bs.oddsAtPlacement,
            resultScore: {
              homeScore: results.homeScore ?? null,
              awayScore: results.awayScore ?? null,
              homeHalfScore: results.homeHalfScore ?? null,
              awayHalfScore: results.awayHalfScore ?? null,
              setScores: results.setScores ?? null,
            } as unknown as never,
          },
        });
        if (outcomeAfter === SelectionOutcome.WON) wonCount++;
        else if (outcomeAfter === SelectionOutcome.LOST) lostCount++;
        else if (outcomeAfter === SelectionOutcome.VOID) voidCount++;
        else if (outcomeAfter === SelectionOutcome.HALF_WON) halfWonCount++;
        else if (outcomeAfter === SelectionOutcome.HALF_LOST) halfLostCount++;
      }

      for (const upd of betSelectionUpdateData) {
        await this.prisma.betSelection.update({ where: { id: upd.id }, data: upd.data });
      }

      const stake = toNum(bet.stakeAmount);
      const totalOdds = toNum(bet.totalOdds);
      const ratio = wonCount + voidCount + lostCount + halfWonCount + halfLostCount > 0
        ? (wonCount * 1 + voidCount * 0 + lostCount * 0 + halfWonCount * 0.5 + halfLostCount * 0.5) / betSelections.length
        : 0;
      const hasLost = lostCount > 0 && wonCount === 0 && halfWonCount === 0 && voidCount === 0;
      const allVoid = voidCount === betSelections.length && wonCount === 0 && lostCount === 0 && halfWonCount === 0 && halfLostCount === 0;
      const allWon = wonCount === betSelections.length && voidCount === 0 && lostCount === 0;
      let betStatus: BetStatus;
      let actualReturn: number;
      if (allVoid) {
        betStatus = BetStatus.VOID;
        actualReturn = roundAmount(stake);
      } else if (hasLost) {
        betStatus = BetStatus.LOST;
        actualReturn = 0;
      } else if (allWon) {
        betStatus = BetStatus.WON;
        actualReturn = roundAmount(stake * totalOdds);
      } else if (halfWonCount > 0 && wonCount === 0 && lostCount === 0) {
        betStatus = BetStatus.HALF_WON;
        actualReturn = roundAmount(stake + stake * (totalOdds - 1) * 0.5);
      } else if (halfLostCount > 0 && wonCount === 0 && lostCount === 0) {
        betStatus = BetStatus.HALF_LOST;
        actualReturn = roundAmount(stake * 0.5);
      } else {
        const returnVal = stake * totalOdds * ratio;
        betStatus = ratio >= 1 ? BetStatus.WON : BetStatus.PLACED;
        actualReturn = roundAmount(Math.max(0, returnVal));
      }
      const actualWinNet = roundAmount(Math.max(0, actualReturn - stake));
      const actualTaxDeducted = 0;
      const updatedBet = await this.prisma.bet.update({
        where: { id: betId },
        data: {
          status: betStatus,
          settledAt: now,
          settledBy: settledBy ?? null,
          settlementSource,
          settlementNote: note ?? null,
          actualReturn,
          actualWinNet,
          actualTaxDeducted,
          winningSelectionsCount: wonCount + halfWonCount,
        },
      });
      resultsSummary.push({
        betId: betId as string,
        statusBefore: bet.status as unknown as BetStatus,
        statusAfter: betStatus,
        actualReturnBefore: null,
        actualReturnAfter: actualReturn,
        selectionsResults,
      });
      await this.prisma.betSettlementLog.create({
        data: {
          betId,
          statusBefore: bet.status as unknown as never,
          statusAfter: betStatus,
          settlementSource,
          settledBy: settledBy ?? null,
          actualReturnBefore: null,
          actualReturnAfter: actualReturn,
          selectionsResults: selectionsResults as unknown as never,
          reason: results.void ? results.voidReason : note ?? null,
          note: note ?? null,
          correlationId: `settle-${eventId}-${betId}`,
        },
      });

      const payload: BetSettledPayload = {
        betId: betId as string,
        userId: bet.userId as string,
        walletId: bet.walletId as string,
        statusBefore: bet.status as unknown as BetStatus,
        statusAfter: betStatus,
        settlementSource,
        stakeAmount: stake,
        actualReturn,
        actualWinNet,
        settledBy,
        settledAt: now.toISOString(),
        results: selectionsResults.map((s) => ({
          selectionId: s.selectionId,
          outcomeBefore: s.outcomeBefore,
          outcomeAfter: s.outcomeAfter,
        })),
        note: note ?? undefined,
      };
      this.eventEmitter.emit(BET62_EVENTS.BETS.SETTLED, payload);
      if (betStatus === BetStatus.WON) {
        this.eventEmitter.emit(BET62_EVENTS.BETS.WON, { betId, userId: bet.userId, actualReturn });
      } else if (betStatus === BetStatus.LOST) {
        this.eventEmitter.emit(BET62_EVENTS.BETS.LOST, { betId, userId: bet.userId });
      } else if (betStatus === BetStatus.VOID) {
        this.eventEmitter.emit(BET62_EVENTS.BETS.VOID, { betId, userId: bet.userId, reason: results.voidReason ?? note });
      }
      try {
        await this.publisher.publish({
          event: BET62_EVENTS.BETS.SETTLED,
          aggregateType: 'bet',
          aggregateId: betId as string,
          correlationId: `settle-${eventId}-${betId}`,
          payload,
        });
        if (betStatus === BetStatus.WON || betStatus === BetStatus.HALF_WON || betStatus === BetStatus.VOID || betStatus === BetStatus.HALF_LOST) {
          await this.publisher.publishWalletCredit({
            event: BET62_EVENTS.WALLET.INTERNAL_CREDIT,
            correlationId: `settle-${eventId}-${betId}`,
            payload: {
              userId: bet.userId as string,
              walletId: bet.walletId as string,
              betId: betId as string,
              actualReturn,
              actualWinNet,
              actualTaxDeducted,
              transactionReference: `cred-bet-${betId}`,
              description: `Crédito liquidação aposta ${(updatedBet.betNumber as string) ?? betId} (${betStatus})`,
            },
          });
        }
      } catch (err) {
        this.logger.error(
          `Falha ao publicar eventos de liquidação da aposta ${betId}`,
          err instanceof Error ? err.stack : String(err),
        );
      }
    }
    return {
      eventId,
      affectedBets: betIds.length,
      affectedSelections: pendingSelections.length,
      resultsSummary,
      note,
    };
  }

  async getSettlementLog(betId: string) {
    const bet = await this.prisma.bet.findUnique({ where: { id: betId } });
    if (!bet) throw new NotFoundException('Aposta não encontrada');
    return this.prisma.betSettlementLog.findMany({
      where: { betId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async manualVoidBet(params: {
    betId: string;
    reason: string;
    adminUserId?: string;
  }) {
    const bet = await this.prisma.bet.findUnique({ where: { id: params.betId } });
    if (!bet) throw new NotFoundException('Aposta não encontrada');
    if (
      bet.status === 'WON' ||
      bet.status === 'LOST' ||
      bet.status === 'VOID' ||
      bet.status === 'CANCELLED' ||
      bet.status === 'CASHOUT'
    ) {
      throw new BadRequestException('Aposta já encerrada não pode ser anulada');
    }
    const now = new Date();
    const stake = toNum(bet.stakeAmount);
    const statusBefore = bet.status as unknown as BetStatus;
    const updated = await this.prisma.bet.update({
      where: { id: params.betId },
      data: {
        status: BetStatus.VOID,
        settledAt: now,
        settledBy: params.adminUserId ?? null,
        settlementSource: 'ADMIN_MANUAL_VOID',
        settlementNote: params.reason,
        cancelledAt: now,
        cancelledBy: params.adminUserId ?? null,
        cancelledReason: params.reason,
        actualReturn: stake,
        actualWinNet: 0,
      },
    });
    await this.prisma.betSelection.updateMany({
      where: { betId: params.betId, status: SelectionOutcome.PENDING },
      data: { status: SelectionOutcome.VOID, settledAt: now },
    });
    await this.prisma.betSettlementLog.create({
      data: {
        betId: params.betId,
        statusBefore: statusBefore as never,
        statusAfter: BetStatus.VOID,
        settlementSource: 'ADMIN_MANUAL_VOID',
        settledBy: params.adminUserId ?? null,
        actualReturnBefore: null,
        actualReturnAfter: stake,
        reason: params.reason,
        correlationId: `void-${params.betId}`,
      },
    });
    try {
      await this.publisher.publishWalletCredit({
        event: BET62_EVENTS.WALLET.INTERNAL_CREDIT,
        correlationId: `void-${params.betId}`,
        payload: {
          userId: bet.userId,
          walletId: bet.walletId,
          betId: params.betId,
          actualReturn: stake,
          actualWinNet: 0,
          transactionReference: `cred-void-${params.betId}`,
          description: `Reembolso aposta anulada (${params.reason})`,
        },
      });
    } catch (err) {
      this.logger.warn(
        `Falha ao publicar reembolso de void da aposta ${params.betId}`,
        err instanceof Error ? err.stack : String(err),
      );
    }
    return updated;
  }
}
