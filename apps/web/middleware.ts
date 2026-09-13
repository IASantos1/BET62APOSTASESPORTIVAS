import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const MAX_REQUESTS = 20;
const WINDOW_MS = 60 * 1000;

declare global {
  var rateLimitMap: Map<string, { count: number; resetAt: number }> | undefined;
}

// TODO: Em produção, substituir Map global por Upstash Redis para distribuir rate limit entre múltiplas instâncias
const rateLimitStore = global.rateLimitMap || new Map<string, { count: number; resetAt: number }>();
if (typeof global !== 'undefined') {
  global.rateLimitMap = rateLimitStore;
}

function getClientIP(request: NextRequest): string {
  const xForwardedFor = request.headers.get('x-forwarded-for');
  if (xForwardedFor) {
    return xForwardedFor.split(',')[0].trim();
  }
  const xRealIP = request.headers.get('x-real-ip');
  if (xRealIP) {
    return xRealIP;
  }
  return request.ip || 'unknown';
}

function isRateLimitedRoute(pathname: string): boolean {
  if (pathname === '/login' || pathname === '/registro') return true;
  if (pathname.startsWith('/api/auth/') || pathname === '/api/auth') return true;
  return false;
}

function checkRateLimit(ip: string): { limited: boolean; remaining: number; resetAt: number } {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { limited: false, remaining: MAX_REQUESTS - 1, resetAt: now + WINDOW_MS };
  }

  if (record.count >= MAX_REQUESTS) {
    return { limited: true, remaining: 0, resetAt: record.resetAt };
  }

  record.count += 1;
  rateLimitStore.set(ip, record);
  return { limited: false, remaining: MAX_REQUESTS - record.count, resetAt: record.resetAt };
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isRateLimitedRoute(pathname)) {
    const ip = getClientIP(request);
    const { limited, remaining, resetAt } = checkRateLimit(ip);

    if (limited) {
      const retryAfter = Math.ceil((resetAt - Date.now()) / 1000);
      return NextResponse.json(
        { error: 'Too Many Requests', message: 'Muitas requisições. Tente novamente em ' + retryAfter + ' segundos.' },
        {
          status: 429,
          headers: {
            'Retry-After': retryAfter.toString(),
            'X-RateLimit-Limit': MAX_REQUESTS.toString(),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': Math.ceil(resetAt / 1000).toString(),
          },
        }
      );
    }
  }

  const response = NextResponse.next();

  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.jsdelivr.net;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    font-src 'self' https://fonts.gstatic.com;
    img-src 'self' blob: data: https:;
    frame-src 'self';
    connect-src 'self' ws: wss: https:;
    media-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
  `.replace(/\s{2,}/g, ' ').trim();

  response.headers.set('Content-Security-Policy-Report-Only', cspHeader);
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
  response.headers.set('Strict-Transport-Security', 'max-age=63072000');
  response.headers.set('X-Nonce', nonce);

  if (isRateLimitedRoute(pathname)) {
    response.headers.set('X-RateLimit-Limit', MAX_REQUESTS.toString());
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set('x-pathname', pathname);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ['/login', '/registro', '/api/:path*'],
};
