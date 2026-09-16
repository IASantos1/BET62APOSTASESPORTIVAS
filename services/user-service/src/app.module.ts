import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { requireEnv } from '@bet62/shared';
import { TerminusModule } from '@nestjs/terminus';
import { BullModule } from '@nestjs/bullmq';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ScheduleModule } from '@nestjs/schedule';
import { APP_GUARD } from '@nestjs/core';
import { PrismaModule } from './prisma/prisma.module';
import { HealthController } from './health.controller';
import { ProfileModule } from './modules/profile/profile.module';
import { LimitsModule } from './modules/limits/limits.module';
import { ResponsibleGamblingModule } from './modules/responsible-gambling/responsible.module';
import { JwtStrategy } from './modules/auth-shared/jwt.strategy';
import { JwtAuthGuard } from './modules/auth-shared/jwt-auth.guard';
import { RolesGuard } from './modules/auth-shared/roles.guard';
import { UserEventsListener } from './events/user-event.listener';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TerminusModule,
    BullModule.forRootAsync({
      useFactory: (config: ConfigService) => ({
        connection: {
          url: config.get<string>('REDIS_URL') ?? 'redis://localhost:6379',
          lazyConnect: true,
          maxRetriesPerRequest: null,
          enableReadyCheck: false,
          enableOfflineQueue: false,
          connectTimeout: 4000,
          commandTimeout: 5000,
          reconnectOnError: () => false,
          retryStrategy: (times: number): number | null => (times > 1 ? null : 1000),
        },
      }),
      inject: [ConfigService],
    }),
    JwtModule.registerAsync({
      global: true,
      useFactory: (config: ConfigService) => ({
        secret: requireEnv(config.get<string>('JWT_ACCESS_SECRET'), 'JWT_ACCESS_SECRET'),
        signOptions: { expiresIn: '15m' },
      }),
      inject: [ConfigService],
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 120,
      },
    ]),
    EventEmitterModule.forRoot({
      wildcard: false,
      delimiter: '.',
      newListener: false,
      removeListener: false,
      maxListeners: 20,
      verboseMemoryLeak: false,
      ignoreErrors: false,
    }),
    ScheduleModule.forRoot(),
    PrismaModule,
    ProfileModule,
    LimitsModule,
    ResponsibleGamblingModule,
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
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    UserEventsListener,
  ],
})
export class AppModule {}
