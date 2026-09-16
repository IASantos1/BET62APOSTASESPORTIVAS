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

function slugifyKey(value: string): string {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

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
    const sanitize = (s: string | undefined | null): string =>
      String(s ?? '').trim().replace(/[,;\s]+$/g, '').replace(/\/+$/g, '');
    this.baseUrl = sanitize(
      this.configService.get<string>('PROPLINE_API_BASE_URL')
      ?? process.env.PROPLINE_API_BASE_URL
      ?? endpoint.baseUrl,
    ).replace(/\/v1$/, '');
    this.apiKey = String(envApiKey ?? '').trim();
    this.timeoutMs = Number(
      this.configService.get<string>('PROPLINE_TIMEOUT_MS')
      ?? process.env.PROPLINE_TIMEOUT_MS
      ?? String(DEFAULT_TIMEOUT_MS),
    ) || DEFAULT_TIMEOUT_MS;
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
        if (!this._emptyKeyWarnedOnce.get(path)) {
          this.logger.warn(
            `PropLine API key VAZIA ou PLACEHOLDER. endpoint=${path} retornara vazio. Configurar PROPLINE_API_KEY no .env / Railway vars.`,
          );
          this._emptyKeyWarnedOnce.set(path, true);
        }
        return fallbackEmpty;
      }
      const url = this.buildUrl(path, params);
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.timeoutMs);
      try {
        const res = await fetch(url, {
          method,
          headers: this.buildHeaders(),
          signal: controller.signal,
          redirect: 'follow',
        });
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
      const res = await this.request<ProplineSport[] | { sports?: ProplineSport[] }>('GET', '/v1/sports', undefined, [], []);
      if (Array.isArray(res)) {
        return res.map((sport) => ({
          ...sport,
          name: sport.name ?? sport.title ?? sport.key,
          title: sport.title ?? sport.name ?? sport.key,
        }));
      }
      if (res && !Array.isArray(res) && Array.isArray((res as { sports?: ProplineSport[] }).sports)) {
        return (res as { sports: ProplineSport[] }).sports.map((sport) => ({
          ...sport,
          name: sport.name ?? sport.title ?? sport.key,
          title: sport.title ?? sport.name ?? sport.key,
        }));
      }
      return [];
    } catch {
      return [];
    }
  }

  async getEventsBySport(sportKey: string): Promise<ProplineEvent[]> {
    try {
      const res = await this.request<ProplineEvent[]>(
        'GET',
        `/v1/sports/${encodeURIComponent(sportKey)}/events`,
        undefined,
        [],
        [],
      );
      if (Array.isArray(res)) {
        return res.map((event) => {
          const eventId = event.id ?? event.event_id ?? '';
          const homeTeam = event.home_team ?? event.home_team_name ?? event.home_team_key ?? 'Home';
          const awayTeam = event.away_team ?? event.away_team_name ?? event.away_team_key ?? 'Away';
          return {
            ...event,
            id: String(eventId),
            event_id: String(eventId),
            sport_key: event.sport_key ?? sportKey,
            home_team: homeTeam,
            away_team: awayTeam,
            commence_time: event.commence_time ?? event.start_date ?? new Date().toISOString(),
            start_date: event.start_date ?? event.commence_time ?? new Date().toISOString(),
            home_team_name: event.home_team_name ?? homeTeam,
            away_team_name: event.away_team_name ?? awayTeam,
            home_team_key: event.home_team_key ?? slugifyKey(homeTeam),
            away_team_key: event.away_team_key ?? slugifyKey(awayTeam),
            status: event.status ?? (event.completed ? 'final' : event.live ? 'in_progress' : 'scheduled'),
          };
        });
      }
      return [];
    } catch {
      return [];
    }
  }

  async getBookmakers(): Promise<ProplineBookmaker[]> {
    try {
      return [...PROPLINE_BOOKMAKERS] as ProplineBookmaker[];
    } catch {
      return [...PROPLINE_BOOKMAKERS] as ProplineBookmaker[];
    }
  }

  async getLeagues(sportKey: string): Promise<ProplineLeague[]> {
    try {
      const events = await this.getEventsBySport(sportKey);
      const byLeague = new Map<string, ProplineLeague>();
      for (const event of events) {
        const leagueKey = event.league_key ?? sportKey;
        const current = byLeague.get(leagueKey);
        if (current) continue;
        byLeague.set(leagueKey, {
          key: leagueKey,
          sport_key: sportKey,
          name: event.league_key ?? sportKey,
          country_code: null,
        });
      }
      return Array.from(byLeague.values());
    } catch {
      return [];
    }
  }

  async getTeams(_sportKey: string): Promise<ProplineTeam[]> {
    return [];
  }

  async getSportOdds(
    sportKey: string,
    markets: string[],
    bookmakers?: (string | number)[],
  ): Promise<ProplineOddsResponse[]> {
    try {
      const params: Record<string, string | number | boolean | undefined | null> = {
        markets: markets.join(','),
      };
      if (bookmakers && bookmakers.length > 0) {
        params.bookmakers = bookmakers.join(',');
      }
      const res = await this.request<ProplineOddsResponse[]>(
        'GET',
        `/v1/sports/${encodeURIComponent(sportKey)}/odds`,
        params,
        [],
        [],
      );
      return Array.isArray(res) ? res : [];
    } catch {
      return [];
    }
  }

  async getEventOdds(
    sportKey: string,
    eventId: string,
    markets: string[],
    bookmakers?: (string | number)[],
  ): Promise<ProplineOddsResponse | null> {
    try {
      const params: Record<string, string | number | boolean | undefined | null> = {};
      params.markets = markets.join(',');
      if (bookmakers && bookmakers.length > 0) {
        params.bookmakers = bookmakers.join(',');
      }
      const res = await this.request<ProplineOddsResponse | null>(
        'GET',
        `/v1/sports/${encodeURIComponent(sportKey)}/events/${encodeURIComponent(eventId)}/odds`,
        params,
        null,
        null,
      );
      return res ?? null;
    } catch {
      return null;
    }
  }

  async getUpcomingEvents(sportKey?: string, _nextHours = 24): Promise<ProplineEvent[]> {
    if (!sportKey) return [];
    const events = await this.getEventsBySport(sportKey);
    return events.filter((event) => !event.live && !event.completed);
  }

  async getLiveEvents(sportKey?: string): Promise<ProplineEvent[]> {
    if (!sportKey) return [];
    const events = await this.getEventsBySport(sportKey);
    return events.filter((event) => Boolean(event.live) && !event.completed);
  }

  async getEventById(sportKey: string, eventId: string): Promise<ProplineEvent | null> {
    try {
      const events = await this.getEventsBySport(sportKey);
      return events.find((event) => String(event.id ?? event.event_id) === String(eventId)) ?? null;
    } catch {
      return null;
    }
  }

  async getOdds(sportKey: string, eventId: string, bookmakers?: (string | number)[]): Promise<ProplineOddsResponse | null> {
    return this.getEventOdds(sportKey, eventId, ['h2h', 'spreads', 'totals'], bookmakers);
  }

  async getScores(eventId: string): Promise<ProplineScoreResponse | null> {
    this.logger.verbose(`PropLine getScores não implementado na integração oficial para eventId=${eventId}.`);
    return null;
  }

  async getStats(eventId: string, period: string = 'full'): Promise<ProplineStatsResponse | null> {
    this.logger.verbose(`PropLine getStats não implementado na integração oficial para eventId=${eventId}, period=${period}.`);
    return null;
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
