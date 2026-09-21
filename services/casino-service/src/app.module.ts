// @ts-nocheck — resolução de tipos temporária enquanto prisma generate não roda
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { requireEnv } from '@bet62/shared';
import { TerminusModule } from '@nestjs/terminus';
import { BullModule } from '@nestjs/bullmq';
import { JwtModule } from '@nestjs/jwt';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { PassportModule } from '@nestjs/passport';
import { ScheduleModule } from '@nestjs/schedule';
import { APP_GUARD } from '@nestjs/core';
import { PrismaModule } from './prisma/prisma.module';
import { HealthController } from './health.controller';
import { GamesModule } from './modules/games/games.module';
import { SessionModule } from './modules/session/session.module';
import { GameplayModule } from './modules/gameplay/gameplay.module';
import { BigBangModule } from './providers/bigbang/bigbang.module';
import { JwtStrategy } from './auth-shared/jwt.strategy';
import { JwtAuthGuard } from './auth-shared/jwt-auth.guard';
import { RolesGuard } from './auth-shared/roles.guard';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '../../.env'],
      expandVariables: true,
    }),
    BullModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        connection: {
          host: configService.get('REDIS_HOST', 'localhost'),
          port: Number(configService.get('REDIS_PORT', 6379)),
          password: configService.get('REDIS_PASSWORD'),
          db: Number(configService.get('REDIS_DB', 0)),
          lazyConnect: true,
          maxRetriesPerRequest: null,
          enableReadyCheck: false,
          enableOfflineQueue: false,
          connectTimeout: 4000,
          commandTimeout: 5000,
          reconnectOnError: () => false,
          retryStrategy: (times: number): number | null => (times > 1 ? null : 1000),
        },
        defaultJobOptions: {
          attempts: 3,
          backoff: {
            type: 'exponential',
            delay: 1000,
          },
          removeOnComplete: 100,
          removeOnFail: 500,
        },
      }),
      inject: [ConfigService],
    }),
    BullModule.registerQueue(
      { name: 'CASINO_ROUNDS' },
      { name: 'JACKPOT_CONTRIBUTIONS' },
      { name: 'PROVIDER_WEBHOOKS' },
    ),
    JwtModule.registerAsync({
      global: true,
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        secret: requireEnv(configService.get<string>('JWT_ACCESS_SECRET'), 'JWT_ACCESS_SECRET'),
        signOptions: {
          expiresIn: configService.get('JWT_ACCESS_EXPIRES', '15m'),
        },
      }),
      inject: [ConfigService],
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    EventEmitterModule.forRoot({
      global: true,
      delimiter: '.',
      verboseMemoryLeak: true,
    }),
    ScheduleModule.forRoot(),
    TerminusModule,
    PrismaModule,
    BigBangModule,
    GamesModule,
    SessionModule,
    GameplayModule,
  ],
  controllers: [HealthController],
  providers: [
    JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
