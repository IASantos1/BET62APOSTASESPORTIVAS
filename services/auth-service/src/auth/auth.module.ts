import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import {
  ThrottlerModule,
  ThrottlerStorage,
} from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import Redis from 'ioredis';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtBlacklistService } from './jwt-blacklist.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { RefreshJwtStrategy } from './strategies/refresh-jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { RolesGuard } from './guards/roles.guard';
import { PrismaModule } from '../prisma/prisma.module';

class MemoryThrottlerStore {
  private readonly store = new Map<string, { count: number; expiresAt: number }>();

  increment(key: string, ttlMs: number): { totalHits: number; timeToExpire: number } {
    const now = Date.now();
    const existing = this.store.get(key);
    const nextCount = (existing && existing.expiresAt > now ? existing.count : 0) + 1;
    const expiresAt = now + ttlMs;
    this.store.set(key, { count: nextCount, expiresAt });
    return { totalHits: nextCount, timeToExpire: ttlMs };
  }
}

class ThrottlerRedisStorage implements ThrottlerStorage {
  private readonly backend: { kind: 'redis'; client: Redis } | { kind: 'memory'; client: MemoryThrottlerStore };
  options!: any;

  constructor(redisUrl: string) {
    const disableRedis = String(process.env.DISABLE_REDIS).toLowerCase() === 'true';
    const hasRedis = !disableRedis && Boolean(redisUrl);
    if (!hasRedis) {
      this.backend = { kind: 'memory', client: new MemoryThrottlerStore() };
      return;
    }
    try {
      const client = new Redis(redisUrl, {
        lazyConnect: true,
        maxRetriesPerRequest: null,
        enableReadyCheck: false,
        enableOfflineQueue: false,
        connectTimeout: 4000,
        commandTimeout: 5000,
        reconnectOnError: () => false,
        retryStrategy: (times: number): number | null => (times > 1 ? null : 800),
      });
      this.backend = { kind: 'redis', client };
      client.on('error', () => undefined);
      void client.connect().catch(() => {
        try { client.disconnect(false); } catch { /* noop */ }
      });
    } catch {
      this.backend = { kind: 'memory', client: new MemoryThrottlerStore() };
    }
  }

  async increment(
    key: string,
    ttl: number,
  ): Promise<{ totalHits: number; timeToExpire: number }> {
    if (this.backend.kind === 'memory') return this.backend.client.increment(key, ttl);
    try {
      const multi = this.backend.client.multi();
      multi.incr(key);
      multi.pexpire(key, ttl);
      multi.pttl(key);
      const [incrResult, , ttlResult] = (await multi.exec()) as Array<[Error | null, number | string]>;
      const totalHits = typeof incrResult?.[1] === 'number' ? (incrResult[1] as number) : 1;
      const pttl = typeof ttlResult?.[1] === 'number' ? (ttlResult[1] as number) : ttl;
      return { totalHits, timeToExpire: pttl > 0 ? pttl : ttl };
    } catch {
      return new MemoryThrottlerStore().increment(key, ttl);
    }
  }

  getRecord(_key: string): Promise<number[]> {
    return Promise.resolve([]);
  }
}

@Global()
@Module({
  imports: [
    PrismaModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret:
          configService.get<string>('JWT_ACCESS_SECRET') ||
          configService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn:
            configService.get<string>('JWT_ACCESS_EXPIRES_IN') ||
            configService.get<string>('JWT_EXPIRES_IN') ||
            '3600s',
          issuer: 'bet62',
        },
      }),
    }),
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const redisUrl =
          configService.get<string>('REDIS_URL') || 'redis://localhost:6379';
        const storage = new ThrottlerRedisStorage(redisUrl);
        return {
          throttlers: [
            {
              ttl: 60000,
              limit: 60,
            },
          ],
          storage,
        };
      },
    } as never),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtBlacklistService,
    JwtStrategy,
    RefreshJwtStrategy,
    LocalStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  exports: [AuthService, JwtBlacklistService, JwtModule],
})
export class AuthModule {}
