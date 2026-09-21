import { Injectable, Logger, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';
import type { Bet62EventEnvelope } from '@bet62/shared';
import { BET62_STREAMS, createEnvelope } from '@bet62/shared';

@Injectable()
export class BetsEventPublisher implements OnModuleDestroy {
  private readonly logger = new Logger(BetsEventPublisher.name);
  private readonly client: Redis | null;
  private readonly producerName = 'bets-service';

  constructor(private readonly configService: ConfigService) {
    const url = this.configService.get<string>('REDIS_URL');
    const disableRedis = String(this.configService.get<string>('DISABLE_REDIS')).toLowerCase() === 'true';
    const hasRedis = !disableRedis && Boolean(url);
    if (!hasRedis) {
      this.client = null;
      return;
    }
    try {
      const client = new Redis(url as string, {
        lazyConnect: true,
        maxRetriesPerRequest: null,
        enableReadyCheck: false,
        enableOfflineQueue: false,
        connectTimeout: 4000,
        commandTimeout: 5000,
        reconnectOnError: () => false,
        retryStrategy: (times: number): number | null => (times > 1 ? null : 800),
      });
      client.on('error', () => undefined);
      void client.connect().catch(() => { try { client.disconnect(false); } catch { /* noop */ } });
      this.client = client;
    } catch {
      this.client = null;
    }
  }

  async publish<TPayload>(params: {
    event: string;
    aggregateType: string;
    aggregateId?: string;
    payload: TPayload;
    correlationId?: string;
    causationId?: string;
    metadata?: Record<string, unknown>;
    stream?: string;
  }): Promise<string> {
    const envelope = createEnvelope({
      event: params.event,
      aggregateType: params.aggregateType,
      aggregateId: params.aggregateId,
      payload: params.payload,
      correlationId: params.correlationId,
      causationId: params.causationId,
      producer: this.producerName,
      metadata: params.metadata,
    }) as Bet62EventEnvelope<TPayload>;

    const streamKey = params.stream ?? BET62_STREAMS.BETS;

    if (!this.client) {
      this.logger.debug(
        `Redis indisponível. Evento ${envelope.event} não publicado em stream ${streamKey} betId=${params.aggregateId ?? ''} (fallback noop).`,
      );
      return '';
    }

    try {
      const payloadStr = JSON.stringify(envelope);
      const id = await this.client.xadd(
        streamKey,
        '*',
        'event',
        envelope.event,
        'envelope',
        payloadStr,
      );
      this.logger.debug(
        `Evento publicado no stream ${streamKey}: ${envelope.event} betId=${params.aggregateId ?? ''} (id=${id ?? '?'})`,
      );
      return id || '';
    } catch (error) {
      this.logger.error(
        `Falha ao publicar evento ${envelope.event} no stream ${streamKey}`,
        error instanceof Error ? error.stack : String(error),
      );
      return '';
    }
  }

  async publishWalletDebit(params: {
    event: string;
    payload: {
      userId: string;
      walletId: string;
      betId: string;
      stakeRealUsed: number;
      stakeBonusUsed: number;
      stakeFreebetUsed: number;
      totalStake: number;
      correlationId?: string;
      transactionReference: string;
      description?: string;
      currency?: string;
    };
    correlationId?: string;
  }): Promise<string> {
    return this.publish({
      event: params.event,
      aggregateType: 'wallet',
      aggregateId: params.payload.walletId,
      correlationId: params.correlationId,
      stream: BET62_STREAMS.WALLET,
      payload: {
        userId: params.payload.userId,
        walletId: params.payload.walletId,
        betId: params.payload.betId,
        stakeRealUsed: params.payload.stakeRealUsed,
        stakeBonusUsed: params.payload.stakeBonusUsed,
        stakeFreebetUsed: params.payload.stakeFreebetUsed,
        totalStake: params.payload.totalStake,
        transactionReference: params.payload.transactionReference,
        description: params.payload.description ?? 'Bet placement debit',
        currency: params.payload.currency ?? 'BRL',
        debitedAt: new Date().toISOString(),
      },
    });
  }

  async publishWalletCredit(params: {
    event: string;
    payload: {
      userId: string;
      walletId: string;
      betId: string;
      actualReturn: number;
      actualWinNet: number;
      actualTaxDeducted?: number;
      correlationId?: string;
      transactionReference: string;
      description?: string;
      currency?: string;
    };
    correlationId?: string;
  }): Promise<string> {
    return this.publish({
      event: params.event,
      aggregateType: 'wallet',
      aggregateId: params.payload.walletId,
      correlationId: params.correlationId,
      stream: BET62_STREAMS.WALLET,
      payload: {
        userId: params.payload.userId,
        walletId: params.payload.walletId,
        betId: params.payload.betId,
        actualReturn: params.payload.actualReturn,
        actualWinNet: params.payload.actualWinNet,
        actualTaxDeducted: params.payload.actualTaxDeducted,
        transactionReference: params.payload.transactionReference,
        description: params.payload.description ?? 'Bet settlement credit',
        currency: params.payload.currency ?? 'BRL',
        creditedAt: new Date().toISOString(),
      },
    });
  }

  async publishWalletCashout(params: {
    event: string;
    payload: {
      userId: string;
      walletId: string;
      betId: string;
      cashoutRecordId: string;
      cashoutType: string;
      stakeBefore: number;
      stakeAfter?: number;
      stakeCashedOut?: number;
      amountRequested: number;
      amountFee: number;
      amountNetToUser: number;
      transactionReference: string;
      correlationId?: string;
      description?: string;
      currency?: string;
    };
    correlationId?: string;
  }): Promise<string> {
    return this.publish({
      event: params.event,
      aggregateType: 'wallet',
      aggregateId: params.payload.walletId,
      correlationId: params.correlationId ?? params.payload.correlationId,
      stream: BET62_STREAMS.WALLET,
      payload: {
        userId: params.payload.userId,
        walletId: params.payload.walletId,
        betId: params.payload.betId,
        cashoutRecordId: params.payload.cashoutRecordId,
        cashoutType: params.payload.cashoutType,
        stakeBefore: params.payload.stakeBefore,
        stakeAfter: params.payload.stakeAfter,
        stakeCashedOut: params.payload.stakeCashedOut,
        amountRequested: params.payload.amountRequested,
        amountFee: params.payload.amountFee,
        amountNetToUser: params.payload.amountNetToUser,
        transactionReference: params.payload.transactionReference,
        description: params.payload.description ?? 'Cashout credit',
        currency: params.payload.currency ?? 'BRL',
        processedAt: new Date().toISOString(),
      },
    });
  }

  async onModuleDestroy() {
    try {
      await this.client.quit();
    } catch {
      /* noop */
    }
  }
}
