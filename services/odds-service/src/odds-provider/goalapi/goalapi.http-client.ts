import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type {
  GoalApiFixture,
  GoalApiStats,
  GoalApiCommentary,
  GoalApiLineups,
  GoalApiLiveEvent,
  GoalApiH2hResponse,
} from './goalapi.types';

const DEFAULT_BASE_URL = 'https://api.goal-api.com/v1';
const DEFAULT_TIMEOUT_MS = 10_000;

interface GoalApiPagedResponse<T> {
  data?: T[];
  results?: T[];
  fixtures?: T[];
  response?: T[];
  errors?: unknown;
}

function extractData<T>(resp: unknown): T[] {
  if (Array.isArray(resp)) return resp as T[];
  if (!resp || typeof resp !== 'object') return [];
  const obj = resp as GoalApiPagedResponse<T>;
  if (Array.isArray(obj.fixtures)) return obj.fixtures;
  if (Array.isArray(obj.data)) return obj.data;
  if (Array.isArray(obj.results)) return obj.results;
  if (Array.isArray(obj.response)) return obj.response;
  return [];
}

function extractSingle<T>(resp: unknown): T | null {
  if (resp === null || resp === undefined) return null;
  if (!Array.isArray(resp) && typeof resp === 'object') {
    const obj = resp as GoalApiPagedResponse<T> & { fixture?: T; event?: T };
    if (obj.fixture) return obj.fixture;
    if (obj.event) return obj.event;
    if (obj.data && !Array.isArray(obj.data)) return obj.data as T;
    if (obj.results && !Array.isArray(obj.results)) return obj.results as T;
    if (obj.response && !Array.isArray(obj.response)) return obj.response as T;
    return resp as T;
  }
  if (Array.isArray(resp)) return (resp[0] as T) ?? null;
  return resp as T;
}

@Injectable()
export class GoalApiHttpClient {
  private readonly logger = new Logger(GoalApiHttpClient.name);
  private readonly baseUrl: string;
  private readonly apiKey: string;
  private readonly timeoutMs: number;
  private readonly _emptyKeyWarnedOnce: Map<string, boolean> = new Map();
  private readonly _authFailWarnedOnce: Map<string, boolean> = new Map();

  constructor(private readonly configService: ConfigService) {
    this.baseUrl =
      (this.configService?.get<string>('GOAL_API_BASE_URL') ||
        process.env.GOAL_API_BASE_URL ||
        DEFAULT_BASE_URL).replace(/\/$/, '');
    this.apiKey =
      this.configService?.get<string>('GOAL_API_KEY') ||
      process.env.GOAL_API_KEY ||
      '';
    this.timeoutMs = Number(
      this.configService?.get<string>('GOAL_API_TIMEOUT_MS') ||
        process.env.GOAL_API_TIMEOUT_MS ||
        String(DEFAULT_TIMEOUT_MS),
    );
    if (!this.apiKey) {
      this.logger.warn(
        'GOAL_API_KEY VAZIA ou PLACEHOLDER. Futebol (SourceOfTruth = GOAL_API) retornara vazio. Configurar GOAL_API_KEY no .env / Railway vars.',
      );
    }
  }

  async safeFetch(
    url: string,
    opts?: RequestInit,
  ): Promise<[Response | null, unknown | null]> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeoutMs);
    try {
      if (!this.apiKey) {
        const pathKey = new URL(url).pathname;
        if (!this._emptyKeyWarnedOnce.get(pathKey)) {
          this.logger.warn(
            `GOAL_API_KEY vazia. Chamada a ${pathKey} retorna vazio (sem envio auth). Configurar GOAL_API_KEY no Railway.`,
          );
          this._emptyKeyWarnedOnce.set(pathKey, true);
        }
      }
      const baseHeaders: Record<string, string> = {
        Accept: 'application/json',
        ...(this.apiKey ? { Authorization: `Bearer ${this.apiKey}` } : {}),
      };
      const extra = opts?.headers;
      if (extra) {
        if (Array.isArray(extra)) {
          for (const [k, v] of extra) baseHeaders[k] = String(v);
        } else if (typeof extra === 'object' && extra !== null && !(extra instanceof Headers)) {
          for (const [k, v] of Object.entries(extra as Record<string, unknown>)) {
            if (v !== undefined && v !== null) baseHeaders[k] = String(v);
          }
        } else if (extra instanceof Headers) {
          extra.forEach((v, k) => { baseHeaders[k] = v; });
        }
      }
      const headers: Record<string, string> = baseHeaders;
      const res = await fetch(url, {
        ...opts,
        headers,
        signal: controller.signal,
        redirect: 'follow',
      });
      if (!res.ok) {
        if (res.status === 401 || res.status === 403) {
          const pathKey = new URL(url).pathname;
          if (!this._authFailWarnedOnce.get(pathKey)) {
            this.logger.warn(
              `GOAL API HTTP ${res.status} AUTH FAIL em ${opts?.method ?? 'GET'} ${url}. Verificar GOAL_API_KEY (key invalida, expirada ou permissoes insuficientes).`,
            );
            this._authFailWarnedOnce.set(pathKey, true);
          }
        } else {
          this.logger.verbose(
            `GOAL API HTTP ${res.status} em ${opts?.method ?? 'GET'} ${url}`,
          );
        }
      }
      let body: unknown = null;
      try {
        const contentType = res.headers.get('content-type') ?? '';
        if (contentType.includes('application/json')) {
          body = await res.json();
        } else {
          body = await res.text();
        }
      } catch {
        body = null;
      }
      return [res, body];
    } catch (err) {
      if (err instanceof DOMException && err.name === 'AbortError') {
        this.logger.verbose(
          `GOAL API timeout após ${this.timeoutMs}ms em ${opts?.method ?? 'GET'} ${url}`,
        );
      } else {
        this.logger.verbose(
          `GOAL API safeFetch erro em ${opts?.method ?? 'GET'} ${url}: ${
            err instanceof Error ? err.message : String(err)
          }`,
        );
      }
      return [null, err instanceof Error ? err : new Error(String(err))];
    } finally {
      clearTimeout(timeoutId);
    }
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

  async getLiveFixtures(): Promise<GoalApiFixture[]> {
    try {
      const url = this.buildUrl('/fixtures/live');
      const [, body] = await this.safeFetch(url);
      return extractData<GoalApiFixture>(body);
    } catch (err) {
      this.logger.verbose(
        `getLiveFixtures erro: ${err instanceof Error ? err.message : String(err)}`,
      );
      return [];
    }
  }

  async getUpcomingFixtures(days?: number): Promise<GoalApiFixture[]> {
    try {
      const rangeDays = Math.max(1, Math.min(90, Number.isFinite(days) ? (days ?? 14) : 14));
      const seenIds = new Set<string | number>();
      const out: GoalApiFixture[] = [];
      const dedupe = (list: GoalApiFixture[]) => {
        for (const f of list) {
          if (!f || f.id == null) continue;
          const key = String(f.id);
          if (seenIds.has(key)) continue;
          seenIds.add(key);
          out.push(f);
        }
      };
      try {
        const params: Record<string, string | number> = {};
        params.next = rangeDays;
        const urlUpcoming = this.buildUrl('/fixtures/upcoming', params);
        const [, bodyUpcoming] = await this.safeFetch(urlUpcoming);
        dedupe(extractData<GoalApiFixture>(bodyUpcoming));
      } catch (err) {
        this.logger.verbose(
          `getUpcomingFixtures /upcoming skip (não fatal): ${err instanceof Error ? err.message : String(err)}`,
        );
      }
      const toPad = (n: number) => n < 10 ? `0${n}` : String(n);
      const isoDate = (d: Date) => `${d.getUTCFullYear()}-${toPad(d.getUTCMonth() + 1)}-${toPad(d.getUTCDate())}`;
      const today = new Date();
      today.setUTCHours(0, 0, 0, 0);
      const minFixtures = rangeDays >= 14 ? 10 : 2;
      for (let offset = 0; offset < rangeDays; offset++) {
        if (out.length >= minFixtures * 4) break;
        const d = new Date(today.getTime() + offset * 24 * 60 * 60 * 1000);
        try {
          const urlDate = this.buildUrl(`/fixtures/date/${isoDate(d)}`);
          const [, bodyDate] = await this.safeFetch(urlDate);
          dedupe(extractData<GoalApiFixture>(bodyDate));
        } catch (err) {
          this.logger.verbose(
            `getUpcomingFixtures /date/${isoDate(d)} skip (não fatal): ${err instanceof Error ? err.message : String(err)}`,
          );
        }
      }
      try {
        const urlLive = this.buildUrl('/fixtures/live');
        const [, bodyLive] = await this.safeFetch(urlLive);
        dedupe(extractData<GoalApiFixture>(bodyLive));
      } catch (err) {
        this.logger.verbose(
          `getUpcomingFixtures /live skip (não fatal): ${err instanceof Error ? err.message : String(err)}`,
        );
      }
      const now = Date.now();
      out.sort((a, b) => {
        const ta = a.kickoff_at
          ? new Date(String(a.kickoff_at)).getTime()
          : a.date
            ? new Date(String(a.date)).getTime()
            : typeof a.timestamp === 'number'
              ? a.timestamp * 1000
              : now;
        const tb = b.kickoff_at
          ? new Date(String(b.kickoff_at)).getTime()
          : b.date
            ? new Date(String(b.date)).getTime()
            : typeof b.timestamp === 'number'
              ? b.timestamp * 1000
              : now;
        return ta - tb;
      });
      this.logger.log(
        `getUpcomingFixtures GOAL: /upcoming?next=${rangeDays} + ${rangeDays}x /date/YYYY-MM-DD + /live => ${out.length} fixtures.`,
      );
      return out;
    } catch (err) {
      this.logger.warn(
        `getUpcomingFixtures fallback vazio: ${err instanceof Error ? err.message : String(err)}`,
      );
      return [];
    }
  }

  async getFixtureById(
    id: number | string,
  ): Promise<GoalApiFixture | null> {
    try {
      const url = this.buildUrl(`/fixtures/${String(id)}`);
      const [, body] = await this.safeFetch(url);
      return extractSingle<GoalApiFixture>(body);
    } catch (err) {
      this.logger.verbose(
        `getFixtureById(${id}) erro: ${err instanceof Error ? err.message : String(err)}`,
      );
      return null;
    }
  }

  async getStatisticsByFixture(
    id: string | number,
  ): Promise<GoalApiStats | null> {
    try {
      const url = this.buildUrl(`/fixtures/${String(id)}/statistics`);
      const [, body] = await this.safeFetch(url);
      return extractSingle<GoalApiStats>(body);
    } catch (err) {
      this.logger.verbose(
        `getStatisticsByFixture(${id}) erro: ${err instanceof Error ? err.message : String(err)}`,
      );
      return null;
    }
  }

  async getCommentariesByFixture(
    id: string | number,
  ): Promise<GoalApiCommentary[]> {
    try {
      const url = this.buildUrl(`/fixtures/${String(id)}/commentaries`);
      const [, body] = await this.safeFetch(url);
      return extractData<GoalApiCommentary>(body);
    } catch (err) {
      this.logger.verbose(
        `getCommentariesByFixture(${id}) erro: ${err instanceof Error ? err.message : String(err)}`,
      );
      return [];
    }
  }

  async getLineupsByFixture(
    id: string | number,
  ): Promise<GoalApiLineups | null> {
    try {
      const url = this.buildUrl(`/fixtures/${String(id)}/lineups`);
      const [, body] = await this.safeFetch(url);
      return extractSingle<GoalApiLineups>(body);
    } catch (err) {
      this.logger.verbose(
        `getLineupsByFixture(${id}) erro: ${err instanceof Error ? err.message : String(err)}`,
      );
      return null;
    }
  }

  async getEventsByFixture(
    id: string | number,
  ): Promise<GoalApiLiveEvent[]> {
    try {
      const url = this.buildUrl(`/fixtures/${String(id)}/events`);
      const [, body] = await this.safeFetch(url);
      return extractData<GoalApiLiveEvent>(body);
    } catch (err) {
      this.logger.verbose(
        `getEventsByFixture(${id}) erro: ${err instanceof Error ? err.message : String(err)}`,
      );
      return [];
    }
  }

  async getH2h(
    teamA: string | number,
    teamB: string | number,
  ): Promise<GoalApiH2hResponse> {
    try {
      const url = this.buildUrl('/teams/h2h', {
        teamA: String(teamA),
        teamB: String(teamB),
      });
      const [, body] = await this.safeFetch(url);
      return (extractSingle<GoalApiH2hResponse>(body) ?? {
        teamA: undefined,
        teamB: undefined,
        h2h: [],
        latest_teamA: [],
        latest_teamB: [],
        next_teamA: [],
        next_teamB: [],
      }) as GoalApiH2hResponse;
    } catch (err) {
      this.logger.verbose(
        `getH2h(${teamA}, ${teamB}) erro: ${err instanceof Error ? err.message : String(err)}`,
      );
      return {
        teamA: undefined,
        teamB: undefined,
        h2h: [],
        latest_teamA: [],
        latest_teamB: [],
        next_teamA: [],
        next_teamB: [],
      };
    }
  }
}
