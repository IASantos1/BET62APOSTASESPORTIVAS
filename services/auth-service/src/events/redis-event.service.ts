import { Injectable, Logger, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';
import type { Bet62EventEnvelope } from '@bet62/shared';

@Injectable()
export class RedisEventService implements OnModuleDestroy {
  private readonly logger = new Logger(RedisEventService.name);
  private readonly client: Redis;

  constructor(private readonly configService: ConfigService) {
    const url =
      this.configService.get<string>('REDIS_URL') ||
      'redis://localhost:6379';
    this.client = new Redis(url, {
      maxRetriesPerRequest: null,
      enableReadyCheck: false,
    });
  }

  async publish<T>(
    streamKey: string,
    envelope: Bet62EventEnvelope<T>,
  ): Promise<string> {
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
      throw error;
    }
  }

  async onModuleDestroy() {
    try {
      await this.client.quit();
    } catch {
      /* noop */
    }
  }
}
