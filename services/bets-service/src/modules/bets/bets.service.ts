import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { PrismaService } from '../../prisma/prisma.service';
import { BET62_EVENTS, BetAcceptanceType, BetPlacementResponse, BetStatus, BetType, DEFAULT_BET_CONFIG, PlaceBetDto, RequestCashoutDto, BetsHistoryQueryDto } from '@bet62/shared';
import { calcPotentialReturn, roundAmount } from '@bet62/shared';
import type { BetPlacedPayload } from '@bet62/shared';
import { BetValidationService } from '../validation/bet-validation.service';
import { BetsEventPublisher } from '../events/bets-event.publisher';

type DecimalLike = { toNumber(): number } | number | string;

const toNum = (d: DecimalLike | undefined | null): number => {
  if (d === null || d === undefined) return 0;
  if (typeof d === 'number') return d;
  if (typeof d === 'string') return Number(d);
  return Number(d);
};

@Injectable()
export class BetsService {
  private readonly logger = new Logger(BetsService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly eventEmitter: EventEmitter2,
    private readonly validation: BetValidationService,
    private readonly publisher: BetsEventPublisher,
  ) {}

  private generateBetNumber(): string {
    const ts = Date.now().toString(36).toUpperCase();
    const rnd = Math.random().toString(36).slice(2, 8).toUpperCase();
    return `BET-${ts}-${rnd}`;
  }

  async placeBet(
    dto: PlaceBetDto,
    context: {
      userId: string;
      walletId: string;
      ip?: string;
      device?: string;
      language?: string;
    },
  ): Promise<BetPlacementResponse> {
    if (!context.userId || !context.walletId) {
      throw new BadRequestException('Contexto de usuário/carteira inválido');
    }
    if (dto.selections.length === 0) {
      throw new BadRequestException('Nenhuma seleção informada');
    }
    const betType = dto.betType;
    if (betType !== BetType.SINGLE && dto.selections.length < 2) {
      throw new BadRequestException('Aposta múltipla requer pelo menos 2 seleções');
    }
    if (betType === BetType.SINGLE && dto.selections.length !== 1) {
      throw new BadRequestException('Aposta simples requer exatamente 1 seleção');
    }
    if (betType === BetType.MULTIPLE && dto.selections.length > DEFAULT_BET_CONFIG.stake.maxMultipleSelections) {
      throw new BadRequestException(`Máximo ${DEFAULT_BET_CONFIG.stake.maxMultipleSelections} seleções em múltipla`);
    }
    const cfg = DEFAULT_BET_CONFIG;
    if (dto.stakeAmount < cfg.stake.minPerBet || dto.stakeAmount > cfg.stake.maxPerBet) {
      throw new BadRequestException(
        `Stake fora dos limites permitidos (${cfg.stake.minPerBet} - ${cfg.stake.maxPerBet})`,
      );
    }

    const validateRes = await this.validation.validateBetPlacement({
      selections: dto.selections,
      stakeAmount: dto.stakeAmount,
      acceptanceType: dto.acceptanceType,
      maxSlippagePercent: cfg.slippage.maxSlippagePercent,
    });
    const acceptanceType = dto.acceptanceType ?? (cfg.slippage.defaultAcceptance as unknown as BetAcceptanceType);
    const acceptanceValid = validateRes.validation.acceptabilityByType[
      acceptanceType as unknown as keyof typeof validateRes.validation.acceptabilityByType
    ] ?? (acceptanceType === 'ACCEPT_ANY_ODDS');
    if (
      (acceptanceType !== 'ACCEPT_ANY_ODDS' && !acceptanceValid) &&
      validateRes.validation.maxSlippagePercent > 0.01
    ) {
      if (!validateRes.valid) {
        throw new BadRequestException(
          validateRes.reason ?? 'Validação de odds falhou',
        );
      }
    }

    const oddsAtPlacement = dto.selections.map((s) => s.oddsAtSelection);
    let boostPercent = 0;
    if (betType === BetType.MULTIPLE && cfg.oddsBoost.enabled) {
      const n = dto.selections.length;
      if (n >= 10) boostPercent = cfg.oddsBoost.multiBoost['10-folds-plus'] ?? 0;
      else if (n >= 8) boostPercent = cfg.oddsBoost.multiBoost['8-folds'] ?? 0;
      else if (n >= 5) boostPercent = cfg.oddsBoost.multiBoost['5-folds'] ?? 0;
      else if (n >= 3) boostPercent = cfg.oddsBoost.multiBoost['3-folds'] ?? 0;
    }

    const calc = calcPotentialReturn(dto.stakeAmount, oddsAtPlacement, boostPercent);
    const actualOddsChangePercent = validateRes.validation.averageSlippagePercent;

    const stakeRealUsed = dto.freebetIdUsed ? 0 : toNum(dto.stakeAmount);
    const stakeBonusUsed = 0;
    const stakeFreebetUsed = dto.freebetIdUsed ? toNum(dto.stakeAmount) : 0;

    const correlationId = crypto.randomUUID
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random()}`;

    return this.prisma.$transaction(
      async (tx) => {
        const betNumber = this.generateBetNumber();
        const now = new Date();
        const bet = await tx.bet.create({
          data: {
            userId: context.userId,
            walletId: context.walletId,
            betNumber,
            betType,
            status: BetStatus.PLACED,
            selectionsCount: dto.selections.length,
            stakeAmount: dto.stakeAmount,
            stakeRealUsed,
            stakeBonusUsed,
            stakeFreebetUsed,
            totalOdds: calc.totalOdds,
            oddsMultiplier: boostPercent > 0 ? calc.boostedOdds : null,
            potentialReturn: calc.potentialReturn,
            potentialWin: calc.potentialWin,
            bonusIdUsed: dto.bonusIdUsed ?? null,
            freebetIdUsed: dto.freebetIdUsed ?? null,
            acceptanceType,
            acceptedOddsChangeMaxPercent: cfg.slippage.maxSlippagePercent,
            actualOddsChangePercent,
            cashoutEnabled: dto.cashoutEnabled ?? cfg.cashout.enabled,
            autoCashoutValue: dto.autoCashoutValue ?? null,
            placedAt: now,
            placedIp: context.ip ?? null,
            placedDevice: context.device ?? null,
            placedLanguage: context.language ?? null,
            combiBoostPercent: boostPercent > 0 ? boostPercent : null,
            accumulatorBonusPercent: boostPercent > 0 ? boostPercent : null,
            correlationId,
            expiresAt: dto.betType === BetType.CHAIN ? new Date(now.getTime() + 24 * 60 * 60 * 1000) : null,
            metadata: {
              promocode: dto.promocode ?? null,
              boostApplied: calc.boostApplied,
              boostedOdds: calc.boostedOdds,
              acceptanceType,
            },
          },
        });

        const selectionsData = dto.selections.map((s, idx) => ({
          betId: bet.id,
          eventId: s.eventId,
          marketId: s.marketId,
          selectionId: s.selectionId,
          selectionName: `Seleção ${idx + 1}`,
          marketName: `Mercado ${idx + 1}`,
          eventName: `Evento ${s.eventId}`,
          homeTeamName: null,
          awayTeamName: null,
          leagueName: null,
          sportType: null,
          kickoffAt: new Date(Date.now() + 60 * 60 * 1000),
          marketType: 'MATCH_WINNER_1X2' as const,
          outcome: 'HOME' as const,
          specifiers: s.specifiers ?? null,
          oddsAtPlacement: s.oddsAtSelection,
          oddsDisplayAtPlacement: String(s.oddsAtSelection),
          handicapValue: s.handicapValue ?? null,
          totalLineValue: s.totalLineValue ?? null,
          providerEventId: null,
          providerMarketId: null,
          providerSelectionId: null,
          orderIndex: idx,
        }));

        await tx.betSelection.createMany({ data: selectionsData });

        const placedPayload: BetPlacedPayload = {
          betId: bet.id,
          betNumber,
          userId: context.userId,
          walletId: context.walletId,
          betType,
          selectionsCount: dto.selections.length,
          stakeAmount: dto.stakeAmount,
          stakeRealUsed,
          stakeBonusUsed,
          totalOdds: calc.totalOdds,
          potentialReturn: calc.potentialReturn,
          acceptanceType,
          placedAt: now.toISOString(),
          selections: dto.selections.map((s, idx) => ({
            selectionId: s.selectionId,
            eventId: s.eventId,
            marketId: s.marketId,
            marketType: selectionsData[idx].marketType,
            outcome: selectionsData[idx].outcome,
            odds: s.oddsAtSelection,
            kickoffAt: selectionsData[idx].kickoffAt.toISOString(),
            eventName: selectionsData[idx].eventName,
          })),
          bonusUsedId: dto.bonusIdUsed ?? undefined,
          ipAddress: context.ip,
          riskFlagged: false,
        };

        this.eventEmitter.emit(BET62_EVENTS.BETS.PLACED, placedPayload);

        try {
          await this.publisher.publish({
            event: BET62_EVENTS.BETS.PLACED,
            aggregateType: 'bet',
            aggregateId: bet.id,
            correlationId,
            payload: placedPayload,
          });
          await this.publisher.publishWalletDebit({
            event: BET62_EVENTS.WALLET.INTERNAL_DEBIT,
            correlationId,
            payload: {
              userId: context.userId,
              walletId: context.walletId,
              betId: bet.id,
              stakeRealUsed,
              stakeBonusUsed,
              stakeFreebetUsed,
              totalStake: dto.stakeAmount,
              transactionReference: `deb-bet-${bet.id}`,
              description: `Débito aposta ${betNumber}`,
            },
          });
        } catch (err) {
          this.logger.warn(
            `Falha ao publicar eventos de aposta ${bet.id}`,
            err instanceof Error ? err.stack : String(err),
          );
        }

        return {
          betId: bet.id,
          status: bet.status as unknown as BetStatus,
          stakeAmount: roundAmount(dto.stakeAmount),
          totalOdds: roundAmount(calc.boostedOdds, 4),
          potentialReturn: roundAmount(calc.potentialReturn),
          acceptedSelections: dto.selections,
        };
      },
      {
        isolationLevel: 'Serializable',
        maxWait: 5000,
        timeout: 15000,
      },
    );
  }

  async validateBet(dto: PlaceBetDto) {
    const result = await this.validation.validateBetPlacement({
      selections: dto.selections,
      stakeAmount: dto.stakeAmount,
      acceptanceType: dto.acceptanceType,
    });
    const oddsAt = dto.selections.map((s) => s.oddsAtSelection);
    const calc = calcPotentialReturn(dto.stakeAmount, oddsAt);
    return {
      valid: result.valid,
      reason: result.reason,
      validation: result.validation,
      preview: {
        stakeAmount: dto.stakeAmount,
        totalOdds: calc.totalOdds,
        potentialReturn: calc.potentialReturn,
        potentialWin: calc.potentialWin,
      },
    };
  }

  async getBet(betId: string, userId: string) {
    const bet = await this.prisma.bet.findUnique({
      where: { id: betId },
      include: { selections: true, cashoutRecords: true, settlementLogs: true },
    });
    if (!bet) throw new NotFoundException('Aposta não encontrada');
    if (bet.userId !== userId) throw new NotFoundException('Aposta não encontrada');
    return bet;
  }

  async getHistory(query: BetsHistoryQueryDto, userId: string) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 25;
    const skip = (page - 1) * limit;
    const where: Record<string, unknown> = { userId };
    if (query.statuses && query.statuses.length > 0) where.status = { in: query.statuses };
    if (query.types && query.types.length > 0) where.betType = { in: query.types };
    if (query.fromDate || query.toDate) {
      const placedAtFilter: Record<string, Date> = {};
      if (query.fromDate) placedAtFilter.gte = query.fromDate;
      if (query.toDate) placedAtFilter.lte = query.toDate;
      where.placedAt = placedAtFilter;
    }
    if (query.onlyActiveCashoutAvailable) {
      where.cashoutEnabled = true;
      where.cashoutAvailable = true;
      where.status = { in: ['PLACED', 'LIVE'] };
    }
    const [items, total] = await Promise.all([
      this.prisma.bet.findMany({
        where,
        orderBy: { placedAt: 'desc' },
        skip,
        take: limit,
        include: { selections: true },
      }),
      this.prisma.bet.count({ where }),
    ]);
    return { items, total, page, limit };
  }

  async requestCashout(
    dto: RequestCashoutDto,
    context: { userId: string; walletId: string; ip?: string },
  ): Promise<{
    cashoutRecordId: string;
    status: 'REQUESTED';
    amountRequested: number;
    amountFee: number;
    amountNetToUser: number;
  }> {
    if (!context.userId || !context.walletId) {
      throw new BadRequestException('Contexto de usuário/carteira inválido');
    }
    const bet = await this.prisma.bet.findUnique({ where: { id: dto.betId } });
    if (!bet) throw new NotFoundException('Aposta não encontrada');
    if (bet.userId !== context.userId) throw new NotFoundException('Aposta não encontrada');
    if (!bet.cashoutEnabled || !bet.cashoutAvailable) {
      throw new BadRequestException('Cashout não disponível para esta aposta');
    }
    if (
      bet.status === 'CASHOUT' ||
      bet.status === 'CANCELLED' ||
      bet.status === 'VOID' ||
      bet.status === 'WON' ||
      bet.status === 'LOST'
    ) {
      throw new BadRequestException('Cashout indisponível: aposta já liquidada ou fechada');
    }
    const cfg = DEFAULT_BET_CONFIG.cashout;
    const originalPotentialReturn = toNum(bet.potentialReturn);
    const stake = toNum(bet.stakeAmount);
    let amountRequested: number;
    let partialPercent = 100;
    if (dto.type === 'PARTIAL') {
      if (!cfg.partialEnabled) throw new BadRequestException('Cashout parcial indisponível');
      if (dto.partialPercent !== undefined) {
        partialPercent = dto.partialPercent;
        if (partialPercent < cfg.minPartialPercent || partialPercent > cfg.maxPartialPercent) {
          throw new BadRequestException(
            `Percentual parcial deve estar entre ${cfg.minPartialPercent}% e ${cfg.maxPartialPercent}%`,
          );
        }
        amountRequested = roundAmount(originalPotentialReturn * (partialPercent / 100));
      } else if (dto.partialAmount !== undefined) {
        amountRequested = dto.partialAmount;
        partialPercent = roundAmount((dto.partialAmount / originalPotentialReturn) * 100);
      } else {
        throw new BadRequestException('Cashout parcial requer partialPercent ou partialAmount');
      }
    } else {
      amountRequested = originalPotentialReturn;
    }
    if (amountRequested < cfg.minCashoutValue) {
      throw new BadRequestException(
        `Valor de cashout abaixo do mínimo de ${cfg.minCashoutValue}`,
      );
    }
    const amountFee = roundAmount((amountRequested * cfg.houseEdgePercent) / 100);
    const amountNetToUser = roundAmount(Math.max(0, amountRequested - amountFee));
    const stakeBefore = stake;
    const stakeAfter = dto.type === 'PARTIAL' ? roundAmount(stake * (1 - partialPercent / 100)) : 0;
    const stakeCashedOut = dto.type === 'PARTIAL' ? roundAmount(stake * (partialPercent / 100)) : stake;

    const corrId = crypto.randomUUID
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random()}`;

    const record = await this.prisma.cashoutRecord.create({
      data: {
        betId: dto.betId,
        userId: context.userId,
        walletId: context.walletId,
        cashoutType: dto.type,
        status: 'REQUESTED',
        stakeBefore,
        stakeAfter,
        stakeCashedOut,
        amountRequested,
        amountFee,
        amountNetToUser,
        oddsAtCashout: bet.totalOdds,
        probabilityImpliedAtCashout: Math.max(0, Math.min(100, roundAmount((stake / originalPotentialReturn) * 100, 2))),
        houseEdgePercentApplied: cfg.houseEdgePercent,
        cashoutSnapshot: {
          betStatus: bet.status,
          potentialReturn: originalPotentialReturn,
          totalOdds: toNum(bet.totalOdds),
          partialPercent,
        },
        correlationId: corrId,
        requestIp: context.ip,
      },
    });

    try {
      await this.publisher.publish({
        event: BET62_EVENTS.BETS.CASHOUT_REQUESTED,
        aggregateType: 'cashout',
        aggregateId: record.id,
        correlationId: corrId,
        payload: {
          cashoutRecordId: record.id,
          betId: dto.betId,
          userId: context.userId,
          walletId: context.walletId,
          type: dto.type,
          amountRequested,
          amountFee,
          amountNetToUser,
        },
      });
    } catch (err) {
      this.logger.warn('Falha ao publicar evento de cashout requested', err instanceof Error ? err.stack : String(err));
    }

    return {
      cashoutRecordId: record.id,
      status: 'REQUESTED',
      amountRequested,
      amountFee,
      amountNetToUser,
    };
  }
}
