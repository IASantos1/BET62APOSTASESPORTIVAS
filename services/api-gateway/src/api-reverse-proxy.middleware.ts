import type { NestMiddleware } from '@nestjs/common';
import * as http from 'node:http';
import type { Request, Response, NextFunction } from 'express';

const INTERNAL_HOST = process.env.INTERNAL_SERVICES_HOST ?? '127.0.0.1';
const PROXY_TIMEOUT_MS = Number(process.env.API_PROXY_TIMEOUT_MS ?? 30_000);

// Cada rota resolve host/porta via env vars proprias (ex: WALLET_ROUTE_TARGET_HOST/
// WALLET_ROUTE_TARGET_PORT), com default identico ao comportamento historico
// (INTERNAL_SERVICES_HOST + <NOME>_PORT do microservico NestJS). Isso permite
// "virar a chave" de um dominio por vez para o novo services/api-server (ver
// plano de migracao) so setando a env var — sem alterar codigo nem builds — e
// reverter instantaneamente voltando a env var, sem redeploy do gateway.
interface ServiceRouteDefinition {
  prefix: string;
  envPrefix: string;
  defaultPort: number;
  name: string;
}

const ROUTE_DEFINITIONS: ServiceRouteDefinition[] = [
  { prefix: '/api/auth', envPrefix: 'AUTH', defaultPort: Number(process.env.AUTH_PORT ?? 3001), name: 'auth-service' },
  { prefix: '/api/user', envPrefix: 'USER', defaultPort: Number(process.env.USER_PORT ?? 3002), name: 'user-service' },
  { prefix: '/api/kyc', envPrefix: 'KYC', defaultPort: Number(process.env.KYC_PORT ?? 3003), name: 'kyc-service' },
  { prefix: '/api/wallet', envPrefix: 'WALLET', defaultPort: Number(process.env.WALLET_PORT ?? 3004), name: 'wallet-service' },
  { prefix: '/api/odds', envPrefix: 'ODDS', defaultPort: Number(process.env.ODDS_PORT ?? 3005), name: 'odds-service' },
  { prefix: '/api/bets', envPrefix: 'BETS', defaultPort: Number(process.env.BETS_PORT ?? 3006), name: 'bets-service' },
  { prefix: '/api/bonus', envPrefix: 'BONUS', defaultPort: Number(process.env.BONUS_PORT ?? 3007), name: 'bonus-service' },
  { prefix: '/api/casino', envPrefix: 'CASINO', defaultPort: Number(process.env.CASINO_PORT ?? 3008), name: 'casino-service' },
  { prefix: '/api/notifications', envPrefix: 'NOTIFICATIONS', defaultPort: Number(process.env.NOTIFICATIONS_PORT ?? 3009), name: 'notifications-service' },
  { prefix: '/api/admin', envPrefix: 'ADMIN', defaultPort: Number(process.env.ADMIN_PORT ?? 3010), name: 'admin-service' },
];

const SERVICE_ROUTES = ROUTE_DEFINITIONS.map((route) => ({
  ...route,
  targetHost: process.env[`${route.envPrefix}_ROUTE_TARGET_HOST`] || INTERNAL_HOST,
  targetPort: Number(process.env[`${route.envPrefix}_ROUTE_TARGET_PORT`] || route.defaultPort),
}));

function matchRoute(url: string): (typeof SERVICE_ROUTES)[number] | null {
  if (!url || !url.startsWith('/api/')) return null;
  for (const r of SERVICE_ROUTES) {
    if (url.startsWith(r.prefix) && (url.length === r.prefix.length || url.charAt(r.prefix.length) === '/' || url.charAt(r.prefix.length) === '?')) {
      return r;
    }
  }
  return null;
}

export class ApiReverseProxyMiddlewareController implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void {
    // IMPORTANTE: usar req.originalUrl, nao req.url. O Nest/Express reescreve
    // req.url para ficar relativo ao "ponto de montagem" quando o middleware e
    // registrado via forRoutes('*') — na pratica, req.url vira sempre "/" aqui,
    // independente do caminho real requisitado. req.originalUrl preserva o
    // caminho completo original.
    const url = req.originalUrl ?? req.url ?? '/';
    if (url.startsWith('/health') || url === '/health') return next();
    const route = matchRoute(url);
    if (!route) return next();

    const options: http.RequestOptions = {
      hostname: route.targetHost,
      port: route.targetPort,
      path: url,
      method: req.method,
      headers: {
        ...(req.headers ?? {}),
        host: `${route.targetHost}:${route.targetPort}`,
        'x-forwarded-for': ((req.headers as Record<string, string>)['x-forwarded-for'] as string) ?? (req.socket?.remoteAddress ?? ''),
        'x-forwarded-proto': ((req.headers as Record<string, string>)['x-forwarded-proto'] as string) ?? (req.protocol ?? 'http'),
        'x-bet62-proxy': 'api-gateway',
      },
      timeout: PROXY_TIMEOUT_MS,
    };

    const upstream = http.request(options, (upstreamRes) => {
      res.status(upstreamRes.statusCode ?? 502);
      const h = (upstreamRes.headersDistinct as Record<string, string[]>) ?? (upstreamRes.headers as unknown as Record<string, string[]>);
      for (const [k, v] of Object.entries(h)) {
        if (k.toLowerCase() === 'transfer-encoding' && Array.isArray(v) && v.includes('chunked')) continue;
        res.setHeader(k, Array.isArray(v) ? v.join(', ') : (v as unknown as string));
      }
      upstreamRes.on('error', () => {
        if (!res.headersSent) res.status(502);
        try { res.end(); } catch { /* noop */ }
      });
      upstreamRes.pipe(res);
    });

    upstream.on('timeout', () => {
      upstream.destroy(new Error('UPSTREAM_API_TIMEOUT'));
    });

    upstream.on('error', (err: NodeJS.ErrnoException) => {
      if (res.headersSent) {
        try { res.end(); } catch { /* noop */ }
        return;
      }
      const code = err.code ?? err.message;
      if (code === 'ECONNREFUSED' || err.message === 'UPSTREAM_API_TIMEOUT') {
        res.status(503).type('text/plain; charset=utf-8').send(
          `Servico ${route.name} (${route.prefix} -> ${route.targetHost}:${route.targetPort}) indisponivel. Motivo: ${err.message}. ` +
          `Certifica-te que o start:railway arranca os 10 microservicos em paralelo. PORT_* deve estar definida para cada servico no Railway start command.`,
        );
        return;
      }
      res.status(502).end();
    });

    req.pipe(upstream);
  }
}
