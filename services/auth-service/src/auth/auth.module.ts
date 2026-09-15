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

class ThrottlerRedisStorage implements ThrottlerStorage {
  private readonly redis: Redis;
  options!: any;

  constructor(redisUrl: string) {
    this.redis = new Redis(redisUrl);
  }

  async increment(
    key: string,
    ttl: number,
  ): Promise<{ totalHits: number; timeToExpire: number }> {
    const multi = this.redis.multi();
    multi.incr(key);
    multi.pexpire(key, ttl);
    multi.pttl(key);
    const [incrResult, , ttlResult] = (await multi.exec()) as Array<
      [Error | null, number | string]
    >;
    const totalHits = typeof incrResult[1] === 'number' ? incrResult[1] : 1;
    const pttl = typeof ttlResult[1] === 'number' ? ttlResult[1] : ttl;
    const timeToExpire = pttl > 0 ? pttl : ttl;
    return { totalHits, timeToExpire };
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
