import { requireEnv } from '@bet62/shared';

export const CONFIG = {
  nodeEnv: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',
  port: Number(process.env.API_SERVER_PORT ?? process.env.PORT ?? 8080),
  redisUrl: process.env.REDIS_URL || '',
  corsOrigins: (process.env.CORS_ORIGINS || '')
    .split(',')
    .map((o) => o.trim())
    .filter(Boolean),
} as const;

// Lido sob demanda (nao no boot do modulo) pelos middlewares de auth quando
// forem adicionados nas proximas fases, seguindo o padrao requireEnv ja usado
// no resto do monorepo (falha rapido, sem fallback inseguro).
export function getJwtAccessSecret(): string {
  return requireEnv(process.env.JWT_ACCESS_SECRET, 'JWT_ACCESS_SECRET');
}

export function getJwtRefreshSecret(): string {
  return requireEnv(process.env.JWT_REFRESH_SECRET, 'JWT_REFRESH_SECRET');
}
