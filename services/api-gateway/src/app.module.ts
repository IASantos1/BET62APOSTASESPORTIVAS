// @ts-nocheck — resolução de tipos temporária enquanto prisma generate não roda
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TerminusModule } from '@nestjs/terminus';
import { BullModule } from '@nestjs/bullmq';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { z } from 'zod';
import { HealthController } from './health.controller';
import { WebReverseProxyMiddlewareController } from './web-reverse-proxy.middleware';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().default(3000),
  WEB_PORT: z.coerce.number().default(3080),
  WEB_HOST: z.string().trim().default('127.0.0.1'),
  REDIS_URL: z
    .union([z.string().url(), z.string().trim().max(0), z.undefined(), z.null()])
    .optional()
    .nullable()
    .transform((v) => {
      if (v === null || v === undefined) return 'redis://localhost:6379';
      const trimmed = String(v).trim();
      if (trimmed.length === 0) return 'redis://localhost:6379';
      try {
        const parsed = new URL(trimmed);
        if (parsed.protocol === 'redis:' || parsed.protocol === 'rediss:') return parsed.href;
      } catch {
        /* fallthrough */
      }
      return 'redis://localhost:6379';
    })
    .pipe(z.string().url().default('redis://localhost:6379')),
  NEXT_PUBLIC_APP_URL: z.string().url().optional(),
  RAILWAY_PUBLIC_DOMAIN: z.string().trim().optional(),
  RAILWAY_STATIC_URL: z.string().trim().optional(),
  RAILWAY_STATIC_URLS: z.string().trim().optional(),
  CORS_ORIGINS: z.string().optional(),
});

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: ['.env', '../../.env'],
      validate: (config) => {
        const normalized = config ?? {};
        const autoAppUrl = normalized.NEXT_PUBLIC_APP_URL
          ?? normalized.RAILWAY_PUBLIC_DOMAIN
          ?? normalized.RAILWAY_STATIC_URL
          ?? normalized.RAILWAY_STATIC_URLS?.split(',')[0];
        if (autoAppUrl && typeof autoAppUrl === 'string' && autoAppUrl.trim().length > 0) {
          const trimmed = autoAppUrl.trim();
          if (/^https?:\/\//i.test(trimmed)) normalized.NEXT_PUBLIC_APP_URL = trimmed;
          else normalized.NEXT_PUBLIC_APP_URL = `https://${trimmed}`;
        }
        return envSchema.parse(normalized);
      },
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
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(WebReverseProxyMiddlewareController)
      .exclude(
        { path: '/health', method: RequestMethod.ALL },
        { path: '/health/(.*)', method: RequestMethod.ALL },
        { path: '/api/(.*)', method: RequestMethod.ALL },
        { path: '/api', method: RequestMethod.ALL },
        { path: '/favicon.ico', method: RequestMethod.GET },
      )
      .forRoutes('*');
  }
}
