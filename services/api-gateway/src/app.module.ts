// @ts-nocheck — resolução de tipos temporária enquanto prisma generate não roda
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TerminusModule } from '@nestjs/terminus';
import { BullModule } from '@nestjs/bullmq';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { z } from 'zod';
import { HealthController } from './health.controller';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().default(3000),
  REDIS_URL: z.string().url().default('redis://localhost:6379'),
  NEXT_PUBLIC_APP_URL: z.string().url().optional(),
  CORS_ORIGINS: z.string().optional(),
});

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: ['.env', '../../.env'],
      validate: (config) => envSchema.parse(config),
    }),
    // TODO: instalar nestjs-throttler-storage-redis para multi-replica Redis storage
    ThrottlerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (cfg: ConfigService) => ({
        ttl: 60,
        limit: 120,
        ignoreUserAgents: [/googlebot/, /bingbot/],
      }),
    }),
    TerminusModule,
    BullModule.forRoot({
      connection: {
        url: process.env.REDIS_URL ?? 'redis://localhost:6379',
      },
    }),
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
  controllers: [HealthController],
})
export class AppModule {}
