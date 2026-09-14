import { Next, Req, Res } from '@nestjs/common';
import type { NestMiddleware } from '@nestjs/common';
import type { NextFunction, Request, Response } from 'express';
import http from 'node:http';

export class WebReverseProxyMiddlewareController implements NestMiddleware {
  private readonly webPort = Number(process.env.WEB_PORT ?? 3080);
  private readonly webHost = process.env.WEB_HOST ?? '127.0.0.1';

  use(@Req() req: Request, @Res() res: Response, @Next() next: NextFunction): void {
    try {
      const url = req.url ?? '/';
      if (url.startsWith('/api/') || url === '/api' || url.startsWith('/health') || url === '/health') {
        next();
        return;
      }
      const options: http.RequestOptions = {
        hostname: this.webHost,
        port: this.webPort,
        path: url,
        method: req.method,
        headers: {
          ...(req.headers ?? {}),
          host: `${this.webHost}:${this.webPort}`,
          connection: 'close',
          'x-forwarded-for': (req.headers['x-forwarded-for'] as string) ?? (req.socket?.remoteAddress ?? ''),
          'x-forwarded-proto': (req.headers['x-forwarded-proto'] as string) ?? (req.protocol ?? 'http'),
        },
        timeout: Number(process.env.WEB_PROXY_TIMEOUT_MS ?? 30_000),
      };
      const upstream = http.request(options, (upstreamRes) => {
        try {
          res.status(upstreamRes.statusCode ?? 502);
          const h = upstreamRes.headersDistinct ?? upstreamRes.headers;
          const entries = Array.isArray(h)
            ? (h as unknown as Array<[string, string[]]>)
            : Object.entries(h as Record<string, string | string[] | undefined>);
          for (const [key, valueRaw] of entries) {
            if (!key || valueRaw === undefined || valueRaw === null) continue;
            if (typeof valueRaw === 'string') res.setHeader(key, valueRaw);
            else if (Array.isArray(valueRaw)) for (const v of valueRaw) res.setHeader(key, v);
          }
          res.removeHeader('transfer-encoding');
          upstreamRes.pipe(res);
        } catch (pipeErr) {
          try { res.status(502).end(); } catch { /* ignore */ }
          try { upstreamRes.destroy(); } catch { /* ignore */ }
        }
      });
      upstream.on('timeout', () => {
        try { upstream.destroy(new Error('UPSTREAM_WEB_TIMEOUT')); } catch { /* ignore */ }
      });
      upstream.on('error', (err) => {
        const msg = (err && 'message' in err) ? (err as Error).message : 'UPSTREAM_WEB_UNAVAILABLE';
        if (msg.includes('ECONNREFUSED') || msg.includes('UPSTREAM_WEB_TIMEOUT')) {
          res.status(503).send(`Web (Next.js) indisponivel. WEB_PORT=${this.webPort} WEB_HOST=${this.webHost}. Se Railway: o startCommand deve arrancar "concurrently api-gateway + next start". Causa: ${msg}`);
          return;
        }
        try { res.status(502).end(); } catch { /* ignore */ }
      });
      if (req.readable) {
        req.pipe(upstream);
      } else {
        upstream.end();
      }
    } catch (err) {
      try {
        res.status(500).end();
      } catch {
        next(err as Error);
      }
    }
  }
}
