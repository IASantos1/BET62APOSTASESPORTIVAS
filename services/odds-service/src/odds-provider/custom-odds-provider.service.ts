import { Injectable, Optional } from '@nestjs/common';
import type { Sport, League } from '@bet62/shared';
import { SportType } from '@bet62/shared';
import {
  AbstractOddsProvider,
  LiveOddsEvent,
  OddsSettlementOutcome,
  UpcomingEvent,
} from './abstract-odds-provider.service';

export interface CustomOddsProviderConfig {
  baseUrl?: string;
  apiKey?: string;
  timeoutMs?: number;
  customHeaders?: Record<string, string>;
}

interface ApiLiveOddsResponse {
  data?: LiveOddsEvent[];
  events?: LiveOddsEvent[];
  items?: LiveOddsEvent[];
  result?: LiveOddsEvent[];
}

interface ApiUpcomingResponse {
  data?: UpcomingEvent[];
  events?: UpcomingEvent[];
  items?: UpcomingEvent[];
  result?: UpcomingEvent[];
}

interface ApiSettlementResponse {
  data?: OddsSettlementOutcome;
  event?: OddsSettlementOutcome;
  result?: OddsSettlementOutcome;
}

interface ApiSportsResponse {
  data?: Sport[];
  sports?: Sport[];
  items?: Sport[];
  result?: Sport[];
}

interface ApiLeaguesResponse {
  data?: League[];
  leagues?: League[];
  items?: League[];
  result?: League[];
}

function pickList<T>(
  resp: unknown,
  keys: string[],
): T[] {
  if (!resp || typeof resp !== 'object') return [];
  const r = resp as Record<string, unknown>;
  for (const k of keys) {
    const v = r[k];
    if (Array.isArray(v)) return v as T[];
  }
  return [];
}

function pickObject<T>(resp: unknown, keys: string[]): T | null {
  if (!resp || typeof resp !== 'object') return null;
  const r = resp as Record<string, unknown>;
  for (const k of keys) {
    const v = r[k];
    if (v && typeof v === 'object') return v as T;
  }
  return null;
}

function defaultSportList(): Sport[] {
  return [
    {
      id: 'FOOTBALL',
      slug: 'football',
      name: 'Futebol',
      sportType: SportType.FOOTBALL,
      active: true,
      featured: true,
      displayOrder: 0,
      iconUrl: null,
      colorHex: null,
      totalLiveEvents: 0,
      totalPrematchEvents: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'BASKETBALL',
      slug: 'basketball',
      name: 'Basquete',
      sportType: SportType.BASKETBALL,
      active: true,
      featured: false,
      displayOrder: 1,
      iconUrl: null,
      colorHex: null,
      totalLiveEvents: 0,
      totalPrematchEvents: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'TENNIS',
      slug: 'tennis',
      name: 'Tênis',
      sportType: SportType.TENNIS,
      active: true,
      featured: false,
      displayOrder: 2,
      iconUrl: null,
      colorHex: null,
      totalLiveEvents: 0,
      totalPrematchEvents: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
}

@Injectable()
export class CustomOddsProviderService extends AbstractOddsProvider {
  override readonly providerName = 'CUSTOM';

  readonly baseUrl: string;
  readonly apiKey: string;
  readonly timeoutMs: number;
  readonly customHeaders: Record<string, string>;

  constructor(@Optional() config: CustomOddsProviderConfig = {}) {
    super();
    this.baseUrl = (config.baseUrl ?? process.env.ODDS_PROVIDER_BASE_URL ?? '').replace(/\/+$/, '');
    this.apiKey = config.apiKey ?? process.env.ODDS_PROVIDER_API_KEY ?? '';
    this.timeoutMs = config.timeoutMs ?? Number(process.env.ODDS_PROVIDER_TIMEOUT_MS ?? 10_000);
    this.customHeaders = config.customHeaders ?? {};
    this.logger.log(`CustomOddsProvider inicializado baseUrl=${this.baseUrl || '(não configurado)'} key=${this.apiKey ? '***' : '(vazia)'}`);
  }

  private buildHeaders(): Record<string, string> {
    const headers: Record<string, string> = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...this.customHeaders,
    };
    if (this.apiKey) {
      headers['X-API-Key'] = this.apiKey;
      headers['X-API-KEY'] = this.apiKey;
      headers['Authorization'] = `Bearer ${this.apiKey}`;
    }
    return headers;
  }

  private assertConfigured() {
    if (!this.baseUrl) {
      throw new Error(
        'CustomOddsProvider: ODDS_PROVIDER_BASE_URL não configurado. Defina a variável de ambiente ODDS_PROVIDER_BASE_URL.',
      );
    }
  }

  private async safeRequest<T>(path: string, query: Record<string, string | number | boolean | undefined> = {}): Promise<T> {
    this.assertConfigured();
    const params = new URLSearchParams();
    for (const [k, v] of Object.entries(query)) {
      if (v !== undefined && v !== null && v !== '') {
        params.append(k, String(v));
      }
    }
    const qs = params.toString();
    const url = `${this.baseUrl}${path.startsWith('/') ? path : `/${path}`}${qs ? `?${qs}` : ''}`;
    try {
      this.logger.debug(`GET ${url}`);
      const res = await fetch(url, {
        method: 'GET',
        headers: this.buildHeaders(),
        signal: AbortSignal.timeout(this.timeoutMs),
      });
      if (!res.ok) {
        let body = '';
        try {
          body = await res.text();
        } catch {
          /* ignore */
        }
        const msg = `CustomOddsProvider HTTP ${res.status} em ${path}: ${body.slice(0, 200) || res.statusText}`;
        this.logger.error(msg);
        throw new Error(msg);
      }
      const ct = res.headers.get('content-type') || '';
      if (!ct.includes('application/json')) {
        const text = await res.text();
        this.logger.warn(`Resposta não-JSON em ${path}: ${text.slice(0, 120)}`);
        throw new Error(`CustomOddsProvider: resposta não-JSON em ${path}`);
      }
      const data = (await res.json()) as T;
      return data;
    } catch (err) {
      if (err instanceof Error && err.name === 'AbortError') {
        const msg = `CustomOddsProvider timeout em ${path} (${this.timeoutMs}ms)`;
        this.logger.error(msg);
        throw new Error(msg);
      }
      if (err instanceof Error && err.message.startsWith('CustomOddsProvider')) {
        throw err;
      }
      const msg = `CustomOddsProvider falha em ${path}: ${err instanceof Error ? err.message : String(err)}`;
      this.logger.error(msg);
      throw new Error(msg);
    }
  }

  async fetchLiveOdds(sport?: string, league?: string): Promise<LiveOddsEvent[]> {
    const data = await this.safeRequest<ApiLiveOddsResponse>('/odds/live', {
      sport,
      league,
    });
    const list = pickList<LiveOddsEvent>(data, ['data', 'events', 'items', 'result']);
    return list.map((e) => ({
      ...e,
      kickoffAt: e.kickoffAt ? new Date(e.kickoffAt as unknown as string | number) : undefined,
      updatedAt: e.updatedAt ? new Date(e.updatedAt as unknown as string | number) : new Date(),
    }));
  }

  async fetchUpcomingEvents(
    sport?: string,
    league?: string,
    from?: Date,
    to?: Date,
  ): Promise<UpcomingEvent[]> {
    const data = await this.safeRequest<ApiUpcomingResponse>('/odds/upcoming', {
      sport,
      league,
      from: from?.toISOString(),
      to: to?.toISOString(),
    });
    const list = pickList<UpcomingEvent>(data, ['data', 'events', 'items', 'result']);
    return list.map((e) => ({
      ...e,
      kickoffAt: e.kickoffAt ? new Date(e.kickoffAt as unknown as string | number) : new Date(),
    }));
  }

  async fetchSettlementOutcome(
    eventId: string,
    selectionId: string,
  ): Promise<OddsSettlementOutcome> {
    if (!eventId) {
      throw new Error('CustomOddsProvider.fetchSettlementOutcome: eventId é obrigatório');
    }
    if (!selectionId) {
      throw new Error('CustomOddsProvider.fetchSettlementOutcome: selectionId é obrigatório');
    }
    const data = await this.safeRequest<ApiSettlementResponse>(
      `/events/${encodeURIComponent(eventId)}/settlement`,
      { selectionId },
    );
    const obj = pickObject<OddsSettlementOutcome>(data, ['data', 'event', 'result']);
    if (!obj) {
      throw new Error(
        `CustomOddsProvider: resposta de settlement inválida para event=${eventId} selection=${selectionId}`,
      );
    }
    return {
      ...obj,
      eventId: obj.eventId || eventId,
      selectionId: obj.selectionId || selectionId,
      settledAt: obj.settledAt ? new Date(obj.settledAt as unknown as string | number) : undefined,
    };
  }

  async getSports(): Promise<Sport[]> {
    try {
      const data = await this.safeRequest<ApiSportsResponse>('/sports', {});
      const list = pickList<Sport>(data, ['data', 'sports', 'items', 'result']);
      if (list.length > 0) {
        return list.map((s, idx) => ({
          ...s,
          id: s.id || s.slug || `sport-${idx}`,
          slug: s.slug || (s.name || `sport-${idx}`).toLowerCase().replace(/\s+/g, '-'),
          name: s.name || s.id || `Sport ${idx}`,
          sportType: s.sportType || (SportType as Record<string, SportType>)[String(s.id || '').toUpperCase()] || SportType.FOOTBALL,
          active: s.active !== false,
          featured: !!s.featured,
          displayOrder: s.displayOrder ?? idx,
          createdAt: s.createdAt ? new Date(s.createdAt as unknown as string | number) : new Date(),
          updatedAt: s.updatedAt ? new Date(s.updatedAt as unknown as string | number) : new Date(),
        }));
      }
    } catch (err) {
      this.logger.warn(`CustomOddsProvider.getSports falhou: ${err instanceof Error ? err.message : String(err)} — usando lista padrão`);
    }
    return defaultSportList();
  }

  async getLeagues(sport: string): Promise<League[]> {
    if (!sport) {
      throw new Error('CustomOddsProvider.getLeagues: sport é obrigatório');
    }
    const data = await this.safeRequest<ApiLeaguesResponse>('/leagues', { sport });
    const list = pickList<League>(data, ['data', 'leagues', 'items', 'result']);
    return list.map((l, idx) => ({
      ...l,
      id: l.id || l.providerLeagueId || `league-${sport}-${idx}`,
      sportId: l.sportId || sport,
      providerLeagueId: l.providerLeagueId || l.id || undefined,
      name: l.name || `League ${idx}`,
      slug: l.slug || (l.name || `league-${idx}`).toLowerCase().replace(/\s+/g, '-'),
      active: l.active !== false,
      featured: !!l.featured,
      displayOrder: l.displayOrder ?? idx,
      createdAt: l.createdAt ? new Date(l.createdAt as unknown as string | number) : new Date(),
      updatedAt: l.updatedAt ? new Date(l.updatedAt as unknown as string | number) : new Date(),
    }));
  }
}
