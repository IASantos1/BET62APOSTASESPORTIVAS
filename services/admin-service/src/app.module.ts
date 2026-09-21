import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TerminusModule } from '@nestjs/terminus';
import { BullModule } from '@nestjs/bullmq';
import { ScheduleModule } from '@nestjs/schedule';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrismaModule } from './prisma/prisma.module';
import { AdminAuthModule } from './modules/auth/admin-auth.module';
import { AdminUserModule } from './modules/admin-user/admin-user.module';
import { AuditModule } from './modules/audit/audit.module';
import { PermissionsModule } from './modules/permissions/permissions.module';
import { HealthController } from './health.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TerminusModule,
    ScheduleModule.forRoot(),
    EventEmitterModule.forRoot({
      wildcard: false,
      delimiter: '.',
      newListener: false,
      removeListener: false,
      maxListeners: 100,
      verboseMemoryLeak: false,
      ignoreErrors: false,
    }),
    BullModule.forRoot({
      connection: {
        url: process.env.REDIS_URL ?? 'redis://localhost:6379',
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
    BullModule.registerQueue(
      { name: 'AUDIT_EXPORT' },
      { name: 'ADMIN_TASKS' },
    ),
    PassportModule.register({ session: true }),
    JwtModule.register({}),
    PrismaModule,
    AdminAuthModule,
    AdminUserModule,
    AuditModule,
    PermissionsModule,
  ],
  controllers: [HealthController],
})
export class AppModule {}
