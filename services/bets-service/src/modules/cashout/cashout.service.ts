import { InjectQueue, Processor, WorkerHost } from '@nestjs/bullmq';
import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Job, Queue } from 'bullmq';
import { PrismaService } from '../../prisma/prisma.service';
import { BET62_EVENTS, DEFAULT_BET_CONFIG, calcCashoutValue, roundAmount, SelectionOutcome } from '@bet62/shared';
import { BetsEventPublisher } from '../events/bets-event.publisher';

type DecimalLike = { toNumber(): number } | number | string;

const toNum = (d: DecimalLike | undefined | null): number => {
  if (d === null || d === undefined) return 0;
  if (typeof d === 'number') return d;
  if (typeof d === 'string') return Number(d);
  return Number(d);
};

export const CASHOUT_QUEUE = 'CASHOUT_REQUESTS';
export const BETS_SETTLEMENT_QUEUE = 'BETS_SETTLEMENT';
export const RISK_ANALYSIS_QUEUE = 'RISK_ANALYSIS';

@Injectable()
export class CashoutService {
  private readonly logger = new Logger(CashoutService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly eventEmitter: EventEmitter2,
    private readonly publisher: BetsEventPublisher,
    @InjectQueue(CASHOUT_QUEUE) private readonly cashoutQueue: Queue,
  ) {}

  async computeCashoutCurrent(betId: string, userId: string): Promise<{
    cashoutAvailable: boolean;
    reasonUnavailable?: string;
    currentImpliedProbabilityPercent: number;
    originalPotentialReturn: number;
    currentCashoutValueNet: number;
    minCashoutValue: number;
    maxCashoutValue: number;
    houseEdgePercent: number;
    partialEnabled: boolean;
    minPartialPercent: number;
    maxPartialPercent: number;
  }> {
    const bet = await this.prisma.bet.findUnique({ where: { id: betId } });
    if (!bet) throw new NotFoundException('Aposta não encontrada');
    if (bet.userId !== userId) throw new NotFoundException('Aposta não encontrada');
    const cfg = DEFAULT_BET_CONFIG.cashout;
    if (!cfg.enabled || !bet.cashoutEnabled || !bet.cashoutAvailable) {
      return {
        cashoutAvailable: false,
        reasonUnavailable: 'Cashout indisponível para esta aposta',
        currentImpliedProbabilityPercent: 0,
        originalPotentialReturn: toNum(bet.potentialReturn),
        currentCashoutValueNet: 0,
        minCashoutValue: cfg.minCashoutValue,
        maxCashoutValue: 0,
        houseEdgePercent: cfg.houseEdgePercent,
        partialEnabled: cfg.partialEnabled,
        minPartialPercent: cfg.minPartialPercent,
        maxPartialPercent: cfg.maxPartialPercent,
      };
    }
    const pendingSels = await this.prisma.betSelection.findMany({ where: { betId } });
    let totalProb = 0;
    let activeSels = 0;
    for (const s of pendingSels) {
      const oddsAt = toNum(s.oddsAtPlacement);
      if (s.status === SelectionOutcome.WON) {
        totalProb += 100;
        activeSels++;
      } else if (s.status === SelectionOutcome.LOST) {
        totalProb += 0;
        activeSels++;
      } else if (s.status === SelectionOutcome.HALF_WON) {
        totalProb += 50;
        activeSels++;
      } else if (s.status === SelectionOutcome.HALF_LOST) {
        totalProb += 50;
        activeSels++;
      } else if (s.status === SelectionOutcome.VOID) {
        totalProb += 100;
        activeSels++;
      } else {
        const implied = oddsAt > 1.01 ? Math.round((1 / oddsAt) * 10000) / 100 : 50;
        totalProb += Math.max(5, Math.min(95, implied));
        activeSels++;
      }
    }
    const avgProb = activeSels > 0 ? totalProb / activeSels : 0;
    const originalPotential = toNum(bet.potentialReturn);
    const currentRaw = calcCashoutValue(originalPotential, avgProb, cfg.houseEdgePercent);
    const currentNet = roundAmount(Math.max(0, currentRaw));
    return {
      cashoutAvailable: currentNet >= cfg.minCashoutValue,
      reasonUnavailable: currentNet < cfg.minCashoutValue ? `Valor abaixo do mínimo ${cfg.minCashoutValue}` : undefined,
      currentImpliedProbabilityPercent: Math.round(avgProb * 100) / 100,
      originalPotentialReturn: originalPotential,
      currentCashoutValueNet: currentNet,
      minCashoutValue: cfg.minCashoutValue,
      maxCashoutValue: roundAmount(originalPotential * (cfg.maxStakePercent / 100)),
      houseEdgePercent: cfg.houseEdgePercent,
      partialEnabled: cfg.partialEnabled,
      minPartialPercent: cfg.minPartialPercent,
      maxPartialPercent: cfg.maxPartialPercent,
    };
  }

  async queueCashout(recordId: string): Promise<void> {
    await this.cashoutQueue.add(
      'process-cashout',
      { cashoutRecordId: recordId },
      {
        attempts: 3,
        backoff: { type: 'exponential', delay: 1000 },
      },
    );
    this.logger.debug(`Cashout enfileirado: recordId=${recordId}`);
  }

  async processCashoutJob(data: { cashoutRecordId: string }): Promise<void> {
    const record = await this.prisma.cashoutRecord.findUnique({
      where: { id: data.cashoutRecordId },
      include: { bet: true },
    });
    if (!record) {
      throw new NotFoundException(`Cashout record não encontrado: ${data.cashoutRecordId}`);
    }
    if (record.status !== 'REQUESTED' && record.status !== 'PROCESSING') {
      this.logger.log(`Cashout ${record.id} já está em status ${record.status}, ignorando job`);
      return;
    }
    const now = new Date();
    try {
      await this.prisma.cashoutRecord.update({
        where: { id: record.id },
        data: { status: 'PROCESSING' },
      });
      const bet = record.bet;
      if (!bet) throw new BadRequestException('Aposta associada não encontrada');
      const corrId = record.correlationId ?? `cash-${record.id}`;

      const partialRemaining = record.cashoutType === 'PARTIAL'
        ? toNum(record.stakeAfter)
        : 0;
      const partialCashed = record.cashoutType === 'PARTIAL'
        ? toNum(record.stakeCashedOut)
        : toNum(bet.stakeAmount);
      const newBetStatus = record.cashoutType === 'PARTIAL'
        ? 'CASHOUT_PARTIAL'
        : 'CASHOUT';

      await this.prisma.bet.update({
        where: { id: record.betId },
        data: {
          status: newBetStatus as never,
          cashoutValueCurrent: record.amountNetToUser,
          partialCashoutRemainingStake: partialRemaining,
          partialCashoutTotalCashedOut: partialCashed,
          settlementSource: 'CASHOUT',
          settledAt: newBetStatus === 'CASHOUT' ? now : bet.settledAt,
          actualReturn: newBetStatus === 'CASHOUT' ? record.amountNetToUser : bet.actualReturn,
          actualWinNet: newBetStatus === 'CASHOUT'
            ? roundAmount(Math.max(0, toNum(record.amountNetToUser) - toNum(bet.stakeAmount)))
            : bet.actualWinNet,
        },
      });
      await this.prisma.cashoutRecord.update({
        where: { id: record.id },
        data: {
          status: 'CONFIRMED',
          confirmedAt: now,
        },
      });

      this.eventEmitter.emit(BET62_EVENTS.BETS.CASHOUT_CONFIRMED, {
        cashoutRecordId: record.id,
        betId: record.betId,
        userId: record.userId,
        walletId: record.walletId,
        amountNetToUser: toNum(record.amountNetToUser),
        amountFee: toNum(record.amountFee),
        type: record.cashoutType,
      });
      if (record.cashoutType === 'AUTO') {
        this.eventEmitter.emit(BET62_EVENTS.BETS.AUTO_CASHOUT_TRIGGERED, {
          betId: record.betId,
          userId: record.userId,
          cashoutValue: toNum(record.amountNetToUser),
        });
      }
      try {
        await this.publisher.publish({
          event: BET62_EVENTS.BETS.CASHOUT_CONFIRMED,
          aggregateType: 'cashout',
          aggregateId: record.id,
          correlationId: corrId,
          payload: {
            cashoutRecordId: record.id,
            betId: record.betId,
            userId: record.userId,
            walletId: record.walletId,
            cashoutType: record.cashoutType,
            amountRequested: toNum(record.amountRequested),
            amountFee: toNum(record.amountFee),
            amountNetToUser: toNum(record.amountNetToUser),
            confirmedAt: now.toISOString(),
          },
        });
        await this.publisher.publishWalletCashout({
          event: BET62_EVENTS.WALLET.INTERNAL_CREDIT,
          correlationId: corrId,
          payload: {
            userId: record.userId,
            walletId: record.walletId,
            betId: record.betId,
            cashoutRecordId: record.id,
            cashoutType: record.cashoutType,
            stakeBefore: toNum(record.stakeBefore),
            stakeAfter: record.stakeAfter ? toNum(record.stakeAfter) : undefined,
            stakeCashedOut: record.stakeCashedOut ? toNum(record.stakeCashedOut) : undefined,
            amountRequested: toNum(record.amountRequested),
            amountFee: toNum(record.amountFee),
            amountNetToUser: toNum(record.amountNetToUser),
            transactionReference: `cashout-${record.id}`,
            description: `Cashout ${record.cashoutType} aposta ${record.betId}`,
          },
        });
      } catch (err) {
        this.logger.warn(
          `Falha ao publicar eventos do cashout ${record.id}`,
          err instanceof Error ? err.stack : String(err),
        );
      }
    } catch (err) {
      this.logger.error(
        `Erro ao processar cashout ${record.id}`,
        err instanceof Error ? err.stack : String(err),
      );
      await this.prisma.cashoutRecord.update({
        where: { id: record.id },
        data: {
          status: 'FAILED',
          failedAt: now,
          failedReason: err instanceof Error ? err.message : String(err),
        },
      });
      throw err;
    }
  }
}

@Processor(CASHOUT_QUEUE, { concurrency: 5 })
export class CashoutProcessor extends WorkerHost {
  private readonly logger = new Logger(CashoutProcessor.name);

  constructor(private readonly cashoutService: CashoutService) {
    super();
  }

  async process(job: Job<{ cashoutRecordId: string }>): Promise<void> {
    this.logger.log(
      `[CashoutJob] Processando job ${job.id} | cashoutRecordId=${job.data.cashoutRecordId} attempt=${job.attemptsMade + 1}`,
    );
    await this.cashoutService.processCashoutJob(job.data);
  }
}
