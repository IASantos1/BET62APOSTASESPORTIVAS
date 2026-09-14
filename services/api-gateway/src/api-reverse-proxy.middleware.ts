import type { NestMiddleware } from '@nestjs/common';
import * as http from 'node:http';
import type { Request, Response, NextFunction } from 'express';

const SERVICE_ROUTES: Array<{ prefix: string; port: number; name: string }> = [
  { prefix: '/api/auth', port: Number(process.env.AUTH_PORT ?? 3001), name: 'auth-service' },
  { prefix: '/api/user', port: Number(process.env.USER_PORT ?? 3002), name: 'user-service' },
  { prefix: '/api/kyc', port: Number(process.env.KYC_PORT ?? 3003), name: 'kyc-service' },
  { prefix: '/api/wallet', port: Number(process.env.WALLET_PORT ?? 3004), name: 'wallet-service' },
  { prefix: '/api/odds', port: Number(process.env.ODDS_PORT ?? 3005), name: 'odds-service' },
  { prefix: '/api/bets', port: Number(process.env.BETS_PORT ?? 3006), name: 'bets-service' },
  { prefix: '/api/bonus', port: Number(process.env.BONUS_PORT ?? 3007), name: 'bonus-service' },
  { prefix: '/api/casino', port: Number(process.env.CASINO_PORT ?? 3008), name: 'casino-service' },
  { prefix: '/api/notifications', port: Number(process.env.NOTIFICATIONS_PORT ?? 3009), name: 'notifications-service' },
  { prefix: '/api/admin', port: Number(process.env.ADMIN_PORT ?? 3010), name: 'admin-service' },
];

const INTERNAL_HOST = process.env.INTERNAL_SERVICES_HOST ?? '127.0.0.1';
const PROXY_TIMEOUT_MS = Number(process.env.API_PROXY_TIMEOUT_MS ?? 30_000);

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
    const url = req.url ?? '/';
    if (url.startsWith('/health') || url === '/health') return next();
    const route = matchRoute(url);
    if (!route) return next();

    const options: http.RequestOptions = {
      hostname: INTERNAL_HOST,
      port: route.port,
      path: url,
      method: req.method,
      headers: {
        ...(req.headers ?? {}),
        host: `${INTERNAL_HOST}:${route.port}`,
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
          `Servico ${route.name} (${route.prefix} -> ${INTERNAL_HOST}:${route.port}) indisponivel. Motivo: ${err.message}. ` +
          `Certifica-te que o start:railway arranca os 10 microservicos em paralelo. PORT_* deve estar definida para cada servico no Railway start command.`,
        );
        return;
      }
      res.status(502).end();
    });

    req.pipe(upstream);
  }
}
