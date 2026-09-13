import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TerminusModule } from '@nestjs/terminus';
import { BullModule } from '@nestjs/bullmq';
import { JwtModule } from '@nestjs/jwt';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { PassportModule } from '@nestjs/passport';
import { ScheduleModule } from '@nestjs/schedule';
import { APP_GUARD } from '@nestjs/core';
import { PrismaModule } from './prisma/prisma.module';
import { HealthController } from './health.controller';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { ProvidersModule } from './modules/providers/providers.module';
import { DispatcherModule } from './modules/dispatcher/dispatcher.module';
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
        },
        defaultJobOptions: {
          attempts: 3,
          backoff: {
            type: 'exponential',
            delay: 1000,
          },
          removeOnComplete: 200,
          removeOnFail: 500,
        },
      }),
      inject: [ConfigService],
    }),
    JwtModule.registerAsync({
      global: true,
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_ACCESS_SECRET', 'bet62-dev-secret-change-me'),
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
    NotificationsModule,
    ProvidersModule,
    DispatcherModule,
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
