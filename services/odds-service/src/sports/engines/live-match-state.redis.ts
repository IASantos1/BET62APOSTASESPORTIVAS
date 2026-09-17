import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';
import type { LiveMatchState, Bet62Market, Bet62LiveEvent } from '@bet62/shared';

const LIVE_STATE_KEY_PREFIX = 'bet62:live:';
const LIVE_ODDS_KEY_PREFIX = 'bet62:live:odds:';
const LIVE_EVENTS_KEY_PREFIX = 'bet62:live:events:';
const DEFAULT_STATE_TTL_SEC = 21600;
const DEFAULT_ODDS_TTL_SEC = 8;

@Injectable()
export class LiveMatchStateRedisService implements OnModuleDestroy {
  private readonly client: Redis;

  constructor(private readonly configService: ConfigService) {
    const url = this.configService.get<string>('REDIS_URL');
    const host = this.configService.get<string>('REDIS_HOST', 'localhost');
    const port = Number(this.configService.get<string>('REDIS_PORT', '6379'));
    const password = this.configService.get<string>('REDIS_PASSWORD');
    const db = Number(this.configService.get<string>('REDIS_DB', '0'));

    if (url) {
      this.client = new Redis(url, { lazyConnect: true });
    } else {
      this.client = new Redis({
        host,
        port,
        password,
        db,
        lazyConnect: true,
      });
    }

    try {
      const p: unknown = this.client.connect();
      if (p && typeof (p as Promise<unknown>).catch === 'function') {
        (p as Promise<unknown>).catch(() => undefined);
      }
    } catch {
      /* noop */
    }
  }

  onModuleDestroy() {
    try {
      const p: unknown = this.client.disconnect(false);
      if (p && typeof (p as Promise<unknown>).catch === 'function') {
        (p as Promise<unknown>).catch(() => undefined);
      }
    } catch {
      /* noop */
    }
  }

  private stateKey(matchId: string): string {
    return `${LIVE_STATE_KEY_PREFIX}${matchId}`;
  }

  private oddsKey(matchId: string): string {
    return `${LIVE_ODDS_KEY_PREFIX}${matchId}`;
  }

  private eventsKey(matchId: string): string {
    return `${LIVE_EVENTS_KEY_PREFIX}${matchId}`;
  }

  async get(matchId: string): Promise<LiveMatchState | null> {
    const raw = await this.client.get(this.stateKey(matchId));
    if (!raw) return null;
    try {
      return JSON.parse(raw) as LiveMatchState;
    } catch {
      return null;
    }
  }

  async set(state: LiveMatchState, ttlSec: number = DEFAULT_STATE_TTL_SEC): Promise<void> {
    const key = this.stateKey(state.matchId);
    const payload = JSON.stringify(state);
    if (ttlSec > 0) {
      await this.client.set(key, payload, 'EX', ttlSec);
    } else {
      await this.client.set(key, payload);
    }
  }

  async del(matchId: string): Promise<void> {
    await this.client.del(this.stateKey(matchId));
    await this.client.del(this.oddsKey(matchId));
    await this.client.del(this.eventsKey(matchId));
  }

  async updatePartial(
    matchId: string,
    patch: Partial<LiveMatchState>,
  ): Promise<LiveMatchState | null> {
    const current = await this.get(matchId);
    if (!current) return null;

    const updated: LiveMatchState = {
      ...current,
      ...patch,
      matchId: current.matchId,
      updatedAt: new Date(),
    };

    const ttl = await this.client.ttl(this.stateKey(matchId));
    const effectiveTtl = ttl > 0 ? ttl : DEFAULT_STATE_TTL_SEC;
    await this.set(updated, effectiveTtl);
    return updated;
  }

  async getOdds(matchId: string): Promise<Record<string, Bet62Market> | null> {
    const raw = await this.client.get(this.oddsKey(matchId));
    if (!raw) return null;
    try {
      return JSON.parse(raw) as Record<string, Bet62Market>;
    } catch {
      return null;
    }
  }

  async setOdds(matchId: string, odds: Record<string, Bet62Market>): Promise<void> {
    const key = this.oddsKey(matchId);
    const payload = JSON.stringify(odds);
    await this.client.set(key, payload, 'EX', DEFAULT_ODDS_TTL_SEC);
  }

  async pushEvent(matchId: string, event: Bet62LiveEvent): Promise<void> {
    const score = Number(event.sequence) || Date.now();
    const member = JSON.stringify(event);
    const key = this.eventsKey(matchId);
    const pipeline = this.client.pipeline();
    pipeline.zadd(key, score, member);
    pipeline.zremrangebyrank(key, 0, -21);
    pipeline.expire(key, DEFAULT_STATE_TTL_SEC);
    await pipeline.exec();
  }

  async listEvents(matchId: string, limit: number = 20): Promise<Bet62LiveEvent[]> {
    const raw = await this.client.zrevrange(this.eventsKey(matchId), 0, limit - 1);
    const out: Bet62LiveEvent[] = [];
    for (const r of raw) {
      try {
        out.push(JSON.parse(r) as Bet62LiveEvent);
      } catch {
      }
    }
    return out;
  }

  async scanLiveMatchKeys(pattern: string = `${LIVE_STATE_KEY_PREFIX}*`): Promise<string[]> {
    const keys: string[] = [];
    let cursor = '0';
    do {
      const [nextCursor, batch] = await this.client.scan(
        cursor,
        'MATCH',
        pattern,
        'COUNT',
        100,
      );
      cursor = nextCursor;
      for (const k of batch) keys.push(k);
    } while (cursor !== '0');
    return keys;
  }

  getRedisClient(): Redis {
    return this.client;
  }
}

export { DEFAULT_STATE_TTL_SEC, DEFAULT_ODDS_TTL_SEC };
