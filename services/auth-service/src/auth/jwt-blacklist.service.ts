import { Injectable, OnModuleDestroy, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';

const BLACKLIST_PREFIX = 'bet62:jwt:blacklist';
const USER_TOKENS_PREFIX = 'bet62:jwt:user';
const GLOBAL_REVOKE_PREFIX = 'bet62:jwt:revoke-all';

class MemoryStoreTtl {
  private readonly store = new Map<string, { value: string; expiresAt: number }>();

  setex(key: string, seconds: number, value: string): void {
    this.store.set(key, { value, expiresAt: Date.now() + seconds * 1000 });
  }
  get(key: string): string | null {
    const entry = this.store.get(key);
    if (!entry) return null;
    if (entry.expiresAt < Date.now()) {
      this.store.delete(key);
      return null;
    }
    return entry.value;
  }
  exists(key: string): 0 | 1 {
    return this.get(key) === null ? 0 : 1;
  }
  del(...keys: string[]): number {
    let n = 0;
    for (const k of keys) if (this.store.delete(k)) n++;
    return n;
  }
  scanMatch(pattern: string): string[] {
    const reg = new RegExp(
      '^' + pattern.replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*') + '$',
    );
    const out: string[] = [];
    for (const k of this.store.keys()) if (reg.test(k)) out.push(k);
    return out;
  }
  clear(): void { this.store.clear(); }
}

type Backend = { kind: 'redis'; client: Redis } | { kind: 'memory'; client: MemoryStoreTtl };

@Injectable()
export class JwtBlacklistService implements OnModuleDestroy {
  private readonly logger = new Logger(JwtBlacklistService.name);
  private readonly backend: Backend;

  constructor(private readonly configService: ConfigService) {
    const url = this.configService.get<string>('REDIS_URL');
    const disableRedis = String(this.configService.get<string>('DISABLE_REDIS')).toLowerCase() === 'true';
    const hasRedis = !disableRedis && Boolean(url);
    if (!hasRedis) {
      this.backend = { kind: 'memory', client: new MemoryStoreTtl() };
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
      this.backend = { kind: 'redis', client };
    } catch {
      this.backend = { kind: 'memory', client: new MemoryStoreTtl() };
    }
  }

  private blacklistKey(jti: string): string {
    return `${BLACKLIST_PREFIX}:${jti}`;
  }

  private userTokensPattern(userId: string): string {
    return `${USER_TOKENS_PREFIX}:${userId}:*`;
  }

  private globalRevokeKey(userId: string): string {
    return `${GLOBAL_REVOKE_PREFIX}:${userId}`;
  }

  async addToken(jti: string, expiresInSeconds: number): Promise<void> {
    try {
      const key = this.blacklistKey(jti);
      if (this.backend.kind === 'redis') {
        await this.backend.client.setex(key, expiresInSeconds, '1');
      } else {
        this.backend.client.setex(key, expiresInSeconds, '1');
      }
      this.logger.debug(`Token ${jti} adicionado à blacklist por ${expiresInSeconds}s`);
    } catch (error) {
      this.logger.error(
        `Falha ao adicionar token ${jti} à blacklist`,
        error instanceof Error ? error.stack : String(error),
      );
    }
  }

  async isRevoked(jti: string): Promise<boolean> {
    try {
      const key = this.blacklistKey(jti);
      const result =
        this.backend.kind === 'redis'
          ? await this.backend.client.exists(key)
          : this.backend.client.exists(key);
      return result === 1;
    } catch (error) {
      this.logger.error(
        `Falha ao verificar blacklist para token ${jti}`,
        error instanceof Error ? error.stack : String(error),
      );
      return false;
    }
  }

  async getUserLastRevokeAllTimestamp(userId: string): Promise<number | null> {
    try {
      const key = this.globalRevokeKey(userId);
      const value =
        this.backend.kind === 'redis'
          ? await this.backend.client.get(key)
          : this.backend.client.get(key);
      return value ? parseInt(value, 10) : null;
    } catch (error) {
      this.logger.error(
        `Falha ao verificar revoke-all para usuário ${userId}`,
        error instanceof Error ? error.stack : String(error),
      );
      return null;
    }
  }

  async revokeAllForUser(userId: string): Promise<void> {
    try {
      const pattern = this.userTokensPattern(userId);
      const keysToDelete: string[] = [];

      if (this.backend.kind === 'redis') {
        let cursor = '0';
        do {
          const [nextCursor, keys] = await this.backend.client.scan(cursor, 'MATCH', pattern, 'COUNT', 100);
          cursor = nextCursor;
          keysToDelete.push(...keys);
        } while (cursor !== '0');
        if (keysToDelete.length > 0) await this.backend.client.del(...keysToDelete);
      } else {
        for (const k of this.backend.client.scanMatch(pattern)) keysToDelete.push(k);
        if (keysToDelete.length > 0) this.backend.client.del(...keysToDelete);
      }

      if (keysToDelete.length > 0) {
        this.logger.debug(`Removidas ${keysToDelete.length} chaves de tokens para usuário ${userId}`);
      }

      const refreshMaxSeconds = 7 * 24 * 60 * 60;
      const timestamp = Math.floor(Date.now() / 1000);
      const revokeKey = this.globalRevokeKey(userId);
      if (this.backend.kind === 'redis') {
        await this.backend.client.setex(revokeKey, refreshMaxSeconds, String(timestamp));
      } else {
        this.backend.client.setex(revokeKey, refreshMaxSeconds, String(timestamp));
      }
      this.logger.debug(`Usuário ${userId} marcado para revoke-all com timestamp ${timestamp}`);
    } catch (error) {
      this.logger.error(
        `Falha ao revogar todos os tokens do usuário ${userId}`,
        error instanceof Error ? error.stack : String(error),
      );
    }
  }

  async registerTokenForUser(
    userId: string,
    jti: string,
    expiresInSeconds: number,
  ): Promise<void> {
    try {
      const key = `${USER_TOKENS_PREFIX}:${userId}:${jti}`;
      if (this.backend.kind === 'redis') {
        await this.backend.client.setex(key, expiresInSeconds, '1');
      } else {
        this.backend.client.setex(key, expiresInSeconds, '1');
      }
    } catch (error) {
      this.logger.error(
        `Falha ao registar token ${jti} para usuário ${userId}`,
        error instanceof Error ? error.stack : String(error),
      );
    }
  }

  async onModuleDestroy() {
    try {
      if (this.backend.kind === 'redis') {
        await this.backend.client.quit();
      } else {
        this.backend.client.clear();
      }
    } catch {
      // noop
    }
  }
}
