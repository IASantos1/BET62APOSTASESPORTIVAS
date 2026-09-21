import { Injectable, Logger, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';
import type { Bet62EventEnvelope } from '@bet62/shared';

@Injectable()
export class RedisEventService implements OnModuleDestroy {
  private readonly logger = new Logger(RedisEventService.name);
  private readonly client: Redis | null;

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

  async publish<T>(
    streamKey: string,
    envelope: Bet62EventEnvelope<T>,
  ): Promise<string> {
    if (!this.client) {
      this.logger.debug(
        `Redis indisponível. Evento ${envelope.event} não publicado em stream ${streamKey} (fallback noop).`,
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
        `Evento publicado no stream ${streamKey}: ${envelope.event} (id=${id})`,
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

  async onModuleDestroy() {
    try {
      if (this.client) await this.client.quit();
    } catch {
      /* noop */
    }
  }
}
