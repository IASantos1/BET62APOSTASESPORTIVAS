import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SPORTS_PROVIDER_CONFIG } from '@bet62/shared';
import type {
  ProplineBookmaker,
  ProplineEvent,
  ProplineLeague,
  ProplineOddsResponse,
  ProplineScoreResponse,
  ProplineSport,
  ProplineStatsResponse,
  ProplineTeam,
} from './propline.types';
import { PROPLINE_BOOKMAKERS } from './propline.bookmakers';

const DEFAULT_TIMEOUT_MS = 12_000;

@Injectable()
export class ProplineHttpClient {
  private readonly logger = new Logger(ProplineHttpClient.name);
  private readonly baseUrl: string;
  private readonly apiKey: string;
  private readonly timeoutMs: number;
  private readonly rateLimit: {
    dailyLimit: number | null;
    remaining: number | null;
    retryAfterSec: number | null;
    last429At: number | null;
  } = {
    dailyLimit: null,
    remaining: null,
    retryAfterSec: null,
    last429At: null,
  };
  private readonly _emptyKeyWarnedOnce: Map<string, boolean> = new Map();

  constructor(private readonly configService: ConfigService) {
    const endpoint = SPORTS_PROVIDER_CONFIG.endpoints.propline;
    const envApiKey = this.configService.get<string>(endpoint.apiKeyEnvName)
      ?? process.env.PROPLINE_API_KEY
      ?? process.env[endpoint.apiKeyEnvName]
      ?? '';
    this.baseUrl = (
      this.configService.get<string>('PROPLINE_API_BASE_URL')
      ?? process.env.PROPLINE_API_BASE_URL
      ?? endpoint.baseUrl
    ).replace(/\/$/, '');
    this.apiKey = envApiKey;
    this.timeoutMs = Number(
      this.configService.get<string>('PROPLINE_TIMEOUT_MS')
      ?? process.env.PROPLINE_TIMEOUT_MS
      ?? String(DEFAULT_TIMEOUT_MS),
    ) || DEFAULT_TIMEOUT_MS;

    // #region debug-point H1:propline-api-key-status
    (() => { const fs = require('fs'), p = '.dbg/no-prematch-live-events.env'; let u = 'http://127.0.0.1:7777/event', s = 'no-prematch-live-events'; try { const e = fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : ''; u = (e.match(/DEBUG_SERVER_URL=(.+)/) || [])[1] || u; s = (e.match(/DEBUG_SESSION_ID=(.+)/) || [])[1] || s; } catch {} const d = { sessionId: s, runId: 'pre-fix', hypothesisId: 'H1', location: 'propline.http-client.ts:36', msg: '[DEBUG] ProplineHttpClient constructor config', data: { envNameChecked: endpoint.apiKeyEnvName, hasApiKey: Boolean(this.apiKey && this.apiKey.length > 0), isSetButPlaceholder: Boolean(this.apiKey && (this.apiKey.includes('coloca') || this.apiKey.includes('<<') || this.apiKey.includes('replace') || this.apiKey.length < 10)), baseUrl: this.baseUrl, timeoutMs: this.timeoutMs, apiKeyLength: this.apiKey.length, apiKeyFirst3: this.apiKey ? this.apiKey.slice(0, 3) : '' }, ts: Date.now() }; try { require('http').request(u.split('/event')[0], { method: 'POST', path: '/event', headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(JSON.stringify(d)) } }, (r) => { r.on('data', () => {}); }).on('error', () => {}).end(JSON.stringify(d)); } catch {} })();
    // #endregion
  }

  private buildHeaders(): Record<string, string> {
    const h: Record<string, string> = {
      Accept: 'application/json',
      'User-Agent': 'BET62-OddsService/1.0 (+https://bet62.pt)',
    };
    if (this.apiKey) {
      h['X-API-Key'] = this.apiKey;
    }
    return h;
  }

  private buildUrl(
    path: string,
    params?: Record<string, string | number | boolean | undefined | null>,
  ): string {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    const url = new URL(`${this.baseUrl}${cleanPath}`);
    if (params) {
      for (const [k, v] of Object.entries(params)) {
        if (v === undefined || v === null) continue;
        url.searchParams.append(k, String(v));
      }
    }
    return url.toString();
  }

  private processResponseHeaders(headers: Headers): void {
    try {
      const daily = headers.get('X-Daily-Limit');
      if (daily) {
        const n = Number(daily);
        if (Number.isFinite(n)) this.rateLimit.dailyLimit = n;
      }
      const remaining = headers.get('RateLimit-Remaining') || headers.get('X-RateLimit-Remaining');
      if (remaining) {
        const n = Number(remaining);
        if (Number.isFinite(n)) this.rateLimit.remaining = n;
      }
      const retryAfter = headers.get('Retry-After');
      if (retryAfter) {
        const n = Number(retryAfter);
        if (Number.isFinite(n)) this.rateLimit.retryAfterSec = n;
      }
    } catch {
    }
  }

  private isRateLimitBlocked(): boolean {
    if (!this.rateLimit.retryAfterSec || !this.rateLimit.last429At) return false;
    const elapsedSec = (Date.now() - this.rateLimit.last429At) / 1000;
    return elapsedSec < this.rateLimit.retryAfterSec;
  }

  private async request<T>(
    method: 'GET',
    path: string,
    params?: Record<string, string | number | boolean | undefined | null>,
    fallbackEmpty: T = [] as unknown as T,
    fallbackNullValue: T = null as unknown as T,
  ): Promise<T> {
    try {
      if (this.isRateLimitBlocked()) {
        this.logger.warn(`PropLine rate limit ainda activo (retryAfter=${this.rateLimit.retryAfterSec}s). Saltar ${path}.`);
        return fallbackEmpty;
      }
      if (!this.apiKey) {
        // #region debug-point H1:propline-api-key-empty-return
        (() => { const fs = require('fs'), p = '.dbg/no-prematch-live-events.env'; let u = 'http://127.0.0.1:7777/event', s = 'no-prematch-live-events'; try { const e = fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : ''; u = (e.match(/DEBUG_SERVER_URL=(.+)/) || [])[1] || u; s = (e.match(/DEBUG_SESSION_ID=(.+)/) || [])[1] || s; } catch {} const d = { sessionId: s, runId: 'post-fix', hypothesisId: 'H1', location: 'propline.http-client.ts:120', msg: '[DEBUG] PropLine API key EMPTY - retornado fallbackEmpty[] para path (Causa H1)', data: { path, params: params || null, returned: 'fallbackEmpty length=' + (Array.isArray(fallbackEmpty) ? fallbackEmpty.length : 'non-array') }, ts: Date.now() }; try { require('http').request(u.split('/event')[0], { method: 'POST', path: '/event', headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(JSON.stringify(d)) } }, (r) => { r.on('data', () => {}); }).on('error', () => {}).end(JSON.stringify(d)); } catch {} })();
        // #endregion
        if (!this._emptyKeyWarnedOnce.get(path)) {
          this.logger.warn(
            `PropLine API key VAZIA ou PLACEHOLDER. endpoint=${path} retornara vazio. Configurar PROPLINE_API_KEY no .env / Railway vars.`,
          );
          this._emptyKeyWarnedOnce.set(path, true);
        }
        return fallbackEmpty;
      }
      const url = this.buildUrl(path, params);
      // #region debug-point H4:propline-request-url-sent
      (() => { const fs = require('fs'), p = '.dbg/no-prematch-live-events.env'; let u = 'http://127.0.0.1:7777/event', s = 'no-prematch-live-events'; try { const e = fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : ''; u = (e.match(/DEBUG_SERVER_URL=(.+)/) || [])[1] || u; s = (e.match(/DEBUG_SESSION_ID=(.+)/) || [])[1] || s; } catch {} const d = { sessionId: s, runId: 'pre-fix', hypothesisId: 'H4', location: 'propline.http-client.ts:124', msg: '[DEBUG] PropLine HTTP request vai ser enviado', data: { method, url, path, params: params || null, hasXApiKeyHeader: Boolean(this.apiKey) }, ts: Date.now() }; try { require('http').request(u.split('/event')[0], { method: 'POST', path: '/event', headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(JSON.stringify(d)) } }, (r) => { r.on('data', () => {}); }).on('error', () => {}).end(JSON.stringify(d)); } catch {} })();
      // #endregion
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.timeoutMs);
      try {
        const res = await fetch(url, {
          method,
          headers: this.buildHeaders(),
          signal: controller.signal,
          redirect: 'follow',
        });
        // #region debug-point H4:propline-request-status-received
        (() => { const fs = require('fs'), p = '.dbg/no-prematch-live-events.env'; let u = 'http://127.0.0.1:7777/event', s = 'no-prematch-live-events'; try { const e = fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : ''; u = (e.match(/DEBUG_SERVER_URL=(.+)/) || [])[1] || u; s = (e.match(/DEBUG_SESSION_ID=(.+)/) || [])[1] || s; } catch {} const d = { sessionId: s, runId: 'pre-fix', hypothesisId: 'H4', location: 'propline.http-client.ts:134', msg: '[DEBUG] PropLine HTTP response recebido', data: { url, status: res.status, statusText: res.statusText, ok: res.ok, contentType: res.headers.get('content-type') || null, willReturnFallbackEmpty: res.status === 404 || res.status === 401 || res.status === 403 || res.status === 429 || !res.ok }, ts: Date.now() }; try { require('http').request(u.split('/event')[0], { method: 'POST', path: '/event', headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(JSON.stringify(d)) } }, (r) => { r.on('data', () => {}); }).on('error', () => {}).end(JSON.stringify(d)); } catch {} })();
        // #endregion
        this.processResponseHeaders(res.headers);
        if (res.status === 429) {
          const retryAfterRaw = res.headers.get('Retry-After');
          const retryAfter = retryAfterRaw ? Number(retryAfterRaw) || 30 : 30;
          this.rateLimit.retryAfterSec = retryAfter;
          this.rateLimit.last429At = Date.now();
          this.logger.warn(`PropLine 429 Rate Limit em ${path}. Retry-After=${retryAfter}s. Retornar null sem throw.`);
          return fallbackNullValue;
        }
        if (res.status === 401 || res.status === 403) {
          this.logger.warn(`PropLine ${res.status} auth em ${path}. Verificar PROPLINE_API_KEY.`);
          return fallbackEmpty;
        }
        if (res.status === 404) {
          this.logger.verbose(`PropLine 404 em ${path}. Recurso não encontrado.`);
          return fallbackEmpty;
        }
        if (!res.ok) {
          const bodyText = await res.text().catch(() => '');
          this.logger.warn(`PropLine HTTP ${res.status} em ${path}: ${bodyText.slice(0, 200)}`);
          return fallbackEmpty;
        }
        const contentType = res.headers.get('content-type') ?? '';
        if (contentType.includes('application/json')) {
          return (await res.json()) as T;
        }
        const text = await res.text().catch(() => '');
        try {
          return JSON.parse(text) as T;
        } catch {
          return fallbackEmpty;
        }
      } catch (err) {
        if (err instanceof DOMException && err.name === 'AbortError') {
          this.logger.warn(`PropLine timeout ${this.timeoutMs}ms em ${path}.`);
          return fallbackEmpty;
        }
        const msg = err instanceof Error ? err.message : String(err);
        this.logger.verbose(`PropLine request erro em ${path}: ${msg}`);
        return fallbackEmpty;
      } finally {
        clearTimeout(timeoutId);
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      this.logger.verbose(`PropLine request excepção top-level em ${path}: ${msg}`);
      return fallbackEmpty;
    }
  }

  async getSports(): Promise<ProplineSport[]> {
    try {
      const res = await this.request<ProplineSport[] | { sports?: ProplineSport[] }>('GET', '/sports', undefined, [], []);
      if (Array.isArray(res)) return res;
      if (res && !Array.isArray(res) && Array.isArray((res as { sports?: ProplineSport[] }).sports)) {
        return (res as { sports: ProplineSport[] }).sports;
      }
      return [];
    } catch {
      return [];
    }
  }

  async getLeagues(sportKey: string): Promise<ProplineLeague[]> {
    try {
      const res = await this.request<ProplineLeague[] | { leagues?: ProplineLeague[] }>(
        'GET',
        '/leagues',
        { sport_key: sportKey },
        [],
        [],
      );
      if (Array.isArray(res)) return res;
      if (res && !Array.isArray(res) && Array.isArray((res as { leagues?: ProplineLeague[] }).leagues)) {
        return (res as { leagues: ProplineLeague[] }).leagues;
      }
      return [];
    } catch {
      return [];
    }
  }

  async getTeams(sportKey: string): Promise<ProplineTeam[]> {
    try {
      const res = await this.request<ProplineTeam[] | { teams?: ProplineTeam[] }>(
        'GET',
        '/teams',
        { sport_key: sportKey },
        [],
        [],
      );
      if (Array.isArray(res)) return res;
      if (res && !Array.isArray(res) && Array.isArray((res as { teams?: ProplineTeam[] }).teams)) {
        return (res as { teams: ProplineTeam[] }).teams;
      }
      return [];
    } catch {
      return [];
    }
  }

  async getBookmakers(): Promise<ProplineBookmaker[]> {
    try {
      const res = await this.request<ProplineBookmaker[] | { bookmakers?: ProplineBookmaker[] }>(
        'GET',
        '/bookmakers',
        undefined,
        [...PROPLINE_BOOKMAKERS] as ProplineBookmaker[],
        [...PROPLINE_BOOKMAKERS] as ProplineBookmaker[],
      );
      if (Array.isArray(res) && res.length > 0) return res;
      if (res && !Array.isArray(res) && Array.isArray((res as { bookmakers?: ProplineBookmaker[] }).bookmakers)) {
        const arr = (res as { bookmakers: ProplineBookmaker[] }).bookmakers;
        if (arr.length > 0) return arr;
      }
      return [...PROPLINE_BOOKMAKERS] as ProplineBookmaker[];
    } catch {
      return [...PROPLINE_BOOKMAKERS] as ProplineBookmaker[];
    }
  }

  async getUpcomingEvents(sportKey?: string, nextHours = 24): Promise<ProplineEvent[]> {
    try {
      const params: Record<string, string | number | boolean | undefined | null> = {
        next_hours: nextHours,
      };
      if (sportKey) params.sport_key = sportKey;
      const res = await this.request<ProplineEvent[] | { events?: ProplineEvent[] }>(
        'GET',
        '/events/upcoming',
        params,
        [],
        [],
      );
      if (Array.isArray(res)) return res;
      if (res && !Array.isArray(res) && Array.isArray((res as { events?: ProplineEvent[] }).events)) {
        return (res as { events: ProplineEvent[] }).events;
      }
      return [];
    } catch {
      return [];
    }
  }

  async getLiveEvents(): Promise<ProplineEvent[]> {
    try {
      const res = await this.request<ProplineEvent[] | { events?: ProplineEvent[] }>(
        'GET',
        '/events/live',
        undefined,
        [],
        [],
      );
      if (Array.isArray(res)) return res;
      if (res && !Array.isArray(res) && Array.isArray((res as { events?: ProplineEvent[] }).events)) {
        return (res as { events: ProplineEvent[] }).events;
      }
      return [];
    } catch {
      return [];
    }
  }

  async getEventById(eventId: string): Promise<ProplineEvent | null> {
    try {
      const res = await this.request<ProplineEvent | null | { event?: ProplineEvent | null }>(
        'GET',
        `/events/${encodeURIComponent(eventId)}`,
        undefined,
        null,
        null,
      );
      if (!res) return null;
      if (res && typeof res === 'object' && !Array.isArray(res) && 'event_id' in (res as object)) {
        return res as ProplineEvent;
      }
      if (res && typeof res === 'object' && !Array.isArray(res) && 'event' in (res as object)) {
        return (res as { event?: ProplineEvent | null }).event ?? null;
      }
      return null;
    } catch {
      return null;
    }
  }

  async getOdds(eventId: string, bookmakers?: (string | number)[]): Promise<ProplineOddsResponse | null> {
    try {
      const params: Record<string, string | number | boolean | undefined | null> = {};
      if (bookmakers && bookmakers.length > 0) {
        params.bookmakers = bookmakers.join(',');
      }
      const res = await this.request<ProplineOddsResponse | null>(
        'GET',
        `/odds/${encodeURIComponent(eventId)}`,
        params,
        null,
        null,
      );
      return res ?? null;
    } catch {
      return null;
    }
  }

  async getScores(eventId: string): Promise<ProplineScoreResponse | null> {
    try {
      const res = await this.request<ProplineScoreResponse | null | { score?: ProplineScoreResponse | null }>(
        'GET',
        `/scores/${encodeURIComponent(eventId)}`,
        undefined,
        null,
        null,
      );
      if (!res) return null;
      if (res && typeof res === 'object' && !Array.isArray(res) && 'event_id' in (res as object)) {
        return res as ProplineScoreResponse;
      }
      if (res && typeof res === 'object' && !Array.isArray(res) && 'score' in (res as object)) {
        return (res as { score?: ProplineScoreResponse | null }).score ?? null;
      }
      return null;
    } catch {
      return null;
    }
  }

  async getStats(eventId: string, period: string = 'full'): Promise<ProplineStatsResponse | null> {
    try {
      const res = await this.request<ProplineStatsResponse | null | { stats?: ProplineStatsResponse | null }>(
        'GET',
        `/stats/${encodeURIComponent(eventId)}`,
        { period },
        null,
        null,
      );
      if (!res) return null;
      if (res && typeof res === 'object' && !Array.isArray(res) && 'event_id' in (res as object)) {
        return res as ProplineStatsResponse;
      }
      if (res && typeof res === 'object' && !Array.isArray(res) && 'stats' in (res as object)) {
        return (res as { stats?: ProplineStatsResponse | null }).stats ?? null;
      }
      return null;
    } catch {
      return null;
    }
  }

  getRateLimitSnapshot(): Readonly<{
    dailyLimit: number | null;
    remaining: number | null;
    retryAfterSec: number | null;
    last429At: number | null;
  }> {
    return { ...this.rateLimit };
  }

  hasApiKey(): boolean {
    return Boolean(this.apiKey && this.apiKey.length > 0);
  }

  getConfig(): Readonly<{ baseUrl: string; timeoutMs: number; hasApiKey: boolean }> {
    return {
      baseUrl: this.baseUrl,
      timeoutMs: this.timeoutMs,
      hasApiKey: this.hasApiKey(),
    };
  }
}
