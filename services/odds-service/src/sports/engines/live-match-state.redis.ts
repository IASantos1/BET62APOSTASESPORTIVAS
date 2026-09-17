import { Injectable, OnModuleDestroy, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';
import type { LiveMatchState, Bet62Market, Bet62LiveEvent } from '@bet62/shared';

const LIVE_STATE_KEY_PREFIX = 'bet62:live:';
const LIVE_ODDS_KEY_PREFIX = 'bet62:live:odds:';
const LIVE_EVENTS_KEY_PREFIX = 'bet62:live:events:';
const DEFAULT_STATE_TTL_SEC = 21600;
const DEFAULT_ODDS_TTL_SEC = 8;

class MemoryStore {
  private readonly store = new Map<string, { value: string; expiresAt: number | null }>();
  private readonly sortedSets = new Map<string, { score: number; member: string }[]>();

  set(key: string, value: string, mode: 'EX' | 'PX' | null = null, ttl?: number): void {
    let expiresAt: number | null = null;
    if (mode === 'EX' && typeof ttl === 'number') expiresAt = Date.now() + ttl * 1000;
    else if (mode === 'PX' && typeof ttl === 'number') expiresAt = Date.now() + ttl;
    this.store.set(key, { value, expiresAt });
  }

  get(key: string): string | null {
    const entry = this.store.get(key);
    if (!entry) return null;
    if (entry.expiresAt !== null && entry.expiresAt < Date.now()) {
      this.store.delete(key);
      return null;
    }
    return entry.value;
  }

  del(...keys: string[]): number {
    let removed = 0;
    for (const k of keys) {
      if (this.store.delete(k)) removed++;
      if (this.sortedSets.delete(k)) removed++;
    }
    return removed;
  }

  ttl(key: string): number {
    const entry = this.store.get(key);
    if (!entry) return -2;
    if (entry.expiresAt === null) return -1;
    const remaining = Math.max(-1, Math.floor((entry.expiresAt - Date.now()) / 1000));
    return remaining === 0 ? -1 : remaining;
  }

  expire(key: string, ttlSec: number): void {
    const entry = this.store.get(key);
    if (!entry) return;
    entry.expiresAt = Date.now() + ttlSec * 1000;
  }

  zadd(key: string, score: number, member: string): void {
    const list = this.sortedSets.get(key) ?? [];
    const existingIdx = list.findIndex((e) => e.member === member);
    if (existingIdx >= 0) list.splice(existingIdx, 1);
    list.push({ score, member });
    list.sort((a, b) => a.score - b.score);
    this.sortedSets.set(key, list);
  }

  zremrangebyrank(key: string, start: number, stop: number): number {
    const list = this.sortedSets.get(key);
    if (!list) return 0;
    const len = list.length;
    if (stop < 0) stop = len - 1 + stop;
    const count = Math.max(0, stop - start + 1);
    if (count <= 0) return 0;
    list.splice(start, count);
    return Math.min(count, len);
  }

  zrevrange(key: string, start: number, stop: number): string[] {
    const list = this.sortedSets.get(key);
    if (!list || list.length === 0) return [];
    const reversed = [...list].reverse();
    const len = reversed.length;
    const from = start;
    const to = stop < 0 ? len - 1 + stop + 1 : stop + 1;
    return reversed.slice(from, to).map((e) => e.member);
  }

  scan(pattern: string = `${LIVE_STATE_KEY_PREFIX}*`): string[] {
    const out: string[] = [];
    const reg = new RegExp(
      '^' +
        pattern
          .replace(/[.+^${}()|[\]\\]/g, '\\$&')
          .replace(/\*/g, '.*')
          .replace(/\?/g, '.') +
        '$',
    );
    for (const k of this.store.keys()) if (reg.test(k)) out.push(k);
    return out;
  }

  quit(): void {
    this.store.clear();
    this.sortedSets.clear();
  }
}

type Backend =
  | { kind: 'redis'; client: Redis }
  | { kind: 'memory'; client: MemoryStore };

@Injectable()
export class LiveMatchStateRedisService implements OnModuleDestroy {
  private backend: Backend;
  private readonly logger = new Logger(LiveMatchStateRedisService.name);
  private ready = false;

  constructor(private readonly configService: ConfigService) {
    const url = this.configService.get<string>('REDIS_URL');
    const host = this.configService.get<string>('REDIS_HOST');
    const port = Number(this.configService.get<string>('REDIS_PORT', '6379'));
    const password = this.configService.get<string>('REDIS_PASSWORD');
    const db = Number(this.configService.get<string>('REDIS_DB', '0'));
    const disableRedis = String(this.configService.get<string>('DISABLE_REDIS', '')).toLowerCase() === 'true';

    const fallbackToMemory = (reason: string) => {
      this.logger.warn(`Redis indisponível (${reason}). Fallback para cache em memória (process-local, TTL simulado).`);
      this.backend = { kind: 'memory', client: new MemoryStore() };
      this.ready = true;
    };

    if (disableRedis) {
      fallbackToMemory('DISABLE_REDIS=true');
      return;
    }

    const hasRedisConfig = Boolean(url) || Boolean(host);
    if (!hasRedisConfig) {
      fallbackToMemory('nenhuma REDIS_URL / REDIS_HOST configurada');
      return;
    }

    try {
      const baseOpts = {
        lazyConnect: true,
        maxRetriesPerRequest: null,
        enableReadyCheck: false,
        enableOfflineQueue: false,
        connectTimeout: 4000,
        commandTimeout: 5000,
        reconnectOnError: () => {
          this.logger.warn('Redis reconnectOnError disparado; bloqueando novas tentativas após 2 falhas (fallback memory).');
          return false;
        },
        retryStrategy: (times: number): number | null => {
          if (times > 1) {
            fallbackToMemory(`ECONNREFUSED ${times}x retryStrategy`);
            return null;
          }
          return 800;
        },
      } as const;

      const client = url
        ? new Redis(url, baseOpts)
        : new Redis({ host: host ?? '127.0.0.1', port, password, db, ...baseOpts });

      client.on('error', (err) => {
        if (!this.ready) {
          const msg = (err as Error)?.message ?? String(err);
          if (/ECONNREFUSED|ENOTFOUND|ETIMEDOUT|EAI_AGAIN/i.test(msg) || String(err).includes('connect')) {
            fallbackToMemory(`on('error'): ${msg.slice(0, 90)}`);
            try { client.disconnect(false); } catch { /* noop */ }
          }
        }
      });

      this.backend = { kind: 'redis', client };

      const tryConnect = async () => {
        try {
          await client.connect();
          this.ready = true;
        } catch (err) {
          fallbackToMemory(`connect() threw: ${((err as Error)?.message ?? String(err)).slice(0, 90)}`);
          try { client.disconnect(false); } catch { /* noop */ }
        }
      };
      void tryConnect();
    } catch (err) {
      fallbackToMemory(`constructor threw: ${((err as Error)?.message ?? String(err)).slice(0, 90)}`);
    }
  }

  onModuleDestroy() {
    if (this.backend.kind === 'redis') {
      try {
        this.backend.client.disconnect(false);
      } catch { /* noop */ }
    } else {
      this.backend.client.quit();
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
    try {
      const raw = this.backend.kind === 'redis'
        ? await this.backend.client.get(this.stateKey(matchId))
        : this.backend.client.get(this.stateKey(matchId));
      if (!raw) return null;
      return JSON.parse(raw) as LiveMatchState;
    } catch {
      return null;
    }
  }

  async set(state: LiveMatchState, ttlSec: number = DEFAULT_STATE_TTL_SEC): Promise<void> {
    try {
      const key = this.stateKey(state.matchId);
      const payload = JSON.stringify(state);
      if (this.backend.kind === 'redis') {
        if (ttlSec > 0) await this.backend.client.set(key, payload, 'EX', ttlSec);
        else await this.backend.client.set(key, payload);
      } else {
        this.backend.client.set(key, payload, ttlSec > 0 ? 'EX' : null, ttlSec > 0 ? ttlSec : undefined);
      }
    } catch { /* noop */ }
  }

  async del(matchId: string): Promise<void> {
    try {
      const keys = [this.stateKey(matchId), this.oddsKey(matchId), this.eventsKey(matchId)];
      if (this.backend.kind === 'redis') await this.backend.client.del(...keys);
      else this.backend.client.del(...keys);
    } catch { /* noop */ }
  }

  async updatePartial(matchId: string, patch: Partial<LiveMatchState>): Promise<LiveMatchState | null> {
    try {
      const current = await this.get(matchId);
      if (!current) return null;
      const updated: LiveMatchState = { ...current, ...patch, matchId: current.matchId, updatedAt: new Date() };
      let effectiveTtl = DEFAULT_STATE_TTL_SEC;
      if (this.backend.kind === 'redis') {
        try {
          const ttl = await this.backend.client.ttl(this.stateKey(matchId));
          if (ttl > 0) effectiveTtl = ttl;
        } catch { /* keep default */ }
      } else {
        const ttl = this.backend.client.ttl(this.stateKey(matchId));
        if (ttl > 0) effectiveTtl = ttl;
      }
      await this.set(updated, effectiveTtl);
      return updated;
    } catch {
      return null;
    }
  }

  async getOdds(matchId: string): Promise<Record<string, Bet62Market> | null> {
    try {
      const raw = this.backend.kind === 'redis'
        ? await this.backend.client.get(this.oddsKey(matchId))
        : this.backend.client.get(this.oddsKey(matchId));
      if (!raw) return null;
      return JSON.parse(raw) as Record<string, Bet62Market>;
    } catch {
      return null;
    }
  }

  async setOdds(matchId: string, odds: Record<string, Bet62Market>): Promise<void> {
    try {
      const key = this.oddsKey(matchId);
      const payload = JSON.stringify(odds);
      if (this.backend.kind === 'redis') {
        await this.backend.client.set(key, payload, 'EX', DEFAULT_ODDS_TTL_SEC);
      } else {
        this.backend.client.set(key, payload, 'EX', DEFAULT_ODDS_TTL_SEC);
      }
    } catch { /* noop */ }
  }

  async pushEvent(matchId: string, event: Bet62LiveEvent): Promise<void> {
    try {
      const score = Number(event.sequence) || Date.now();
      const member = JSON.stringify(event);
      const key = this.eventsKey(matchId);
      if (this.backend.kind === 'redis') {
        const pipeline = this.backend.client.pipeline();
        pipeline.zadd(key, score, member);
        pipeline.zremrangebyrank(key, 0, -21);
        pipeline.expire(key, DEFAULT_STATE_TTL_SEC);
        await pipeline.exec();
      } else {
        this.backend.client.zadd(key, score, member);
        this.backend.client.zremrangebyrank(key, 0, -21);
        this.backend.client.expire(key, DEFAULT_STATE_TTL_SEC);
      }
    } catch { /* noop */ }
  }

  async listEvents(matchId: string, limit: number = 20): Promise<Bet62LiveEvent[]> {
    try {
      const raw = this.backend.kind === 'redis'
        ? await this.backend.client.zrevrange(this.eventsKey(matchId), 0, limit - 1)
        : this.backend.client.zrevrange(this.eventsKey(matchId), 0, limit - 1);
      const out: Bet62LiveEvent[] = [];
      for (const r of raw) {
        try { out.push(JSON.parse(r) as Bet62LiveEvent); } catch { /* skip */ }
      }
      return out;
    } catch {
      return [];
    }
  }

  async scanLiveMatchKeys(pattern: string = `${LIVE_STATE_KEY_PREFIX}*`): Promise<string[]> {
    try {
      if (this.backend.kind === 'memory') return this.backend.client.scan(pattern);
      const keys: string[] = [];
      let cursor = '0';
      do {
        const [nextCursor, batch] = await this.backend.client.scan(cursor, 'MATCH', pattern, 'COUNT', 100);
        cursor = nextCursor;
        for (const k of batch) keys.push(k);
      } while (cursor !== '0');
      return keys;
    } catch {
      return [];
    }
  }

  getRedisClient(): unknown {
    if (this.backend.kind === 'redis') return this.backend.client;
    return null;
  }

  private readonly memoryLocks = new Map<string, number>();

  async acquireDistributedLock(key: string, ttlMs: number): Promise<boolean> {
    try {
      if (this.backend.kind === 'redis') {
        const set = await this.backend.client.set(key, '1', 'PX', ttlMs, 'NX');
        return set === 'OK';
      }
      const now = Date.now();
      for (const [k, expiresAt] of this.memoryLocks) {
        if (expiresAt < now) this.memoryLocks.delete(k);
      }
      const existing = this.memoryLocks.get(key);
      if (existing && existing > now) return false;
      this.memoryLocks.set(key, now + ttlMs);
      return true;
    } catch {
      return false;
    }
  }

  async releaseDistributedLock(key: string): Promise<void> {
    try {
      if (this.backend.kind === 'redis') {
        await this.backend.client.del(key);
      } else {
        this.memoryLocks.delete(key);
      }
    } catch {
      /* noop */
    }
  }
}

export { DEFAULT_STATE_TTL_SEC, DEFAULT_ODDS_TTL_SEC };
