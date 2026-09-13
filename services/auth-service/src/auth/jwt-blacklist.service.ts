import { Injectable, OnModuleDestroy, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';

const BLACKLIST_PREFIX = 'bet62:jwt:blacklist';
const USER_TOKENS_PREFIX = 'bet62:jwt:user';
const GLOBAL_REVOKE_PREFIX = 'bet62:jwt:revoke-all';

@Injectable()
export class JwtBlacklistService implements OnModuleDestroy {
  private readonly logger = new Logger(JwtBlacklistService.name);
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
      await this.client.setex(key, expiresInSeconds, '1');
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
      const result = await this.client.exists(key);
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
      const value = await this.client.get(key);
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
      let cursor = '0';
      const keysToDelete: string[] = [];

      do {
        const [nextCursor, keys] = await this.client.scan(
          cursor,
          'MATCH',
          pattern,
          'COUNT',
          100,
        );
        cursor = nextCursor;
        keysToDelete.push(...keys);
      } while (cursor !== '0');

      if (keysToDelete.length > 0) {
        await this.client.del(...keysToDelete);
        this.logger.debug(
          `Removidas ${keysToDelete.length} chaves de tokens para usuário ${userId}`,
        );
      }

      const refreshMaxSeconds = 7 * 24 * 60 * 60;
      const timestamp = Math.floor(Date.now() / 1000);
      const revokeKey = this.globalRevokeKey(userId);
      await this.client.setex(revokeKey, refreshMaxSeconds, String(timestamp));
      this.logger.debug(
        `Usuário ${userId} marcado para revoke-all com timestamp ${timestamp}`,
      );
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
      await this.client.setex(key, expiresInSeconds, '1');
    } catch (error) {
      this.logger.error(
        `Falha ao registar token ${jti} para usuário ${userId}`,
        error instanceof Error ? error.stack : String(error),
      );
    }
  }

  async onModuleDestroy() {
    try {
      await this.client.quit();
    } catch {
      // noop
    }
  }
}
