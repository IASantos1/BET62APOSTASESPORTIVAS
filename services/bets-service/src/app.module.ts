import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { requireEnv } from '@bet62/shared';
import { BullModule } from '@nestjs/bullmq';
import { TerminusModule } from '@nestjs/terminus';
import { JwtModule } from '@nestjs/jwt';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ScheduleModule } from '@nestjs/schedule';
import { PrismaModule } from './prisma/prisma.module';
import { HealthController } from './health.controller';
import { AuthSharedModule } from './modules/auth-shared/auth-shared.module';
import { EventsModule } from './modules/events/events.module';
import { ValidationModule } from './modules/validation/validation.module';
import { BetsModule } from './modules/bets/bets.module';
import { SettlementModule } from './modules/settlement/settlement.module';
import { CashoutModule } from './modules/cashout/cashout.module';
import {
  BETS_SETTLEMENT_QUEUE,
  CASHOUT_QUEUE,
  RISK_ANALYSIS_QUEUE,
} from './modules/cashout/cashout.service';

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
      { name: BETS_SETTLEMENT_QUEUE },
      { name: CASHOUT_QUEUE },
      { name: RISK_ANALYSIS_QUEUE },
    ),
    JwtModule.registerAsync({
      global: true,
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        secret: requireEnv(configService.get<string>('JWT_SECRET'), 'JWT_SECRET'),
        signOptions: { expiresIn: '15m' },
      }),
      inject: [ConfigService],
    }),
    EventEmitterModule.forRoot({
      wildcard: false,
      delimiter: '.',
      newListener: false,
      removeListener: false,
      maxListeners: 500,
      ignoreErrors: false,
    }),
    ScheduleModule.forRoot(),
    TerminusModule,
    PrismaModule,
    AuthSharedModule,
    EventsModule,
    ValidationModule,
    BetsModule,
    SettlementModule,
    CashoutModule,
  ],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {}
