import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MarketType, SelectionOutcome, SportType } from '@bet62/shared';
import type { League, Sport, SportType as SportTypeEnum } from '@bet62/shared';
import type { OddsChangeNotification } from './odds-provider.interface';
import {
  AbstractOddsProvider,
  LiveOddsEvent,
  LiveOddsMarket,
  LiveOddsSelection,
  OddsSettlementOutcome,
  SettlementResult,
  UpcomingEvent,
} from './abstract-odds-provider.service';
import type {
  IncrementalSyncResult,
  LiveEventsQuery,
  OddsChangeCallback,
  PrematchEventsQuery,
  ProviderEvent,
  ProviderEventDetail,
  ProviderLeague,
  ProviderMarket,
  ProviderMarketSelection,
} from './odds-provider.interface';
import type { OddsProvider } from './odds-provider.interface';
import {
  GoaldirHttpClient,
  GoaldirForbiddenError,
  GoaldirPaymentRequiredError,
  GoaldirRateLimitError,
  GoaldirUnauthorizedError,
} from './goaldir/goaldir.http-client';
import {
  GoaldirWsClient,
  type GoaldirWsClientConfig,
  type GoaldirWsOddsFrame,
  type GoaldirWsSport,
} from './goaldir/goaldir.ws-client';
import {
  FOOTBALL,
  TENNIS,
  BASKETBALL,
  HOCKEY,
  GOALDIR_SPORT_API_PREFIX,
  buildCompositeId,
  mapGoaldirEvent,
  mapGoaldirLeague,
  mapMarketStatus,
  mapOddsBySport,
  parseCompositeId,
  providerLeagueToSharedLeague,
  sportTypeToSharedSport,
  toNumberOrNull,
} from './goaldir/goaldir.dto-mapper';
import type {
  GoaldirEventRaw,
  GoaldirLeagueRaw,
} from './goaldir/goaldir.dto-mapper';

type GoaldirSupportedSport =
  | SportType.FOOTBALL
  | SportType.TENNIS
  | SportType.BASKETBALL
  | SportType.HOCKEY;

const SUPPORTED_GOALDIR_SPORTS: GoaldirSupportedSport[] = [
  SportType.FOOTBALL,
  SportType.TENNIS,
  SportType.BASKETBALL,
  SportType.HOCKEY,
];

const DEFAULT_BASE_URL = 'https://sports.bzzoiro.com';
const DEFAULT_TIMEOUT_MS = 15_000;

interface PagedResponse<T> {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: T[];
  data?: T[];
  events?: T[];
  matches?: T[];
}

function extractResults<T>(resp: PagedResponse<T> | T[] | unknown): T[] {
  if (Array.isArray(resp)) return resp;
  if (!resp || typeof resp !== 'object') return [];
  const r = resp as PagedResponse<T>;
  if (Array.isArray(r.results)) return r.results;
  if (Array.isArray(r.data)) return r.data;
  if (Array.isArray(r.events)) return r.events;
  if (Array.isArray(r.matches)) return r.matches;
  return [];
}

function providerMarketToLegacy(_eventId: string, markets: ProviderMarket[] | undefined): LiveOddsMarket[] {
  if (!markets || markets.length === 0) return [];
  return markets.map((m) => ({
    id: m.id,
    type: m.type,
    name: m.displayedName || m.name,
    selections: m.selections.map((s: ProviderMarketSelection): LiveOddsSelection => ({
      id: s.id,
      name: s.name,
      odds: s.odds,
      outcome: s.outcome,
      status: s.status === 'SUSPENDED' ? 'SUSPENDED' : s.status === 'SETTLED' ? 'SETTLED' : 'ACTIVE',
    })),
  }));
}

@Injectable()
export class GoaldirOddsProviderService
  extends AbstractOddsProvider
  implements OddsProvider, OnModuleInit
{
  override readonly providerName = 'GOALDIR';

  private readonly http: GoaldirHttpClient;
  private readonly ws: GoaldirWsClient;
  private readonly wsEnabled: boolean;
  private readonly supportedSports = new Set<GoaldirSupportedSport>();
  private initialized = false;
  private fatalAuthFailed = false;
  private oddsChangeCallbacks: Set<OddsChangeCallback> = new Set();

  constructor(configService?: ConfigService) {
    super();
    let baseUrl = DEFAULT_BASE_URL;
    let apiKey = '';
    let timeoutMs = DEFAULT_TIMEOUT_MS;
    let wsEnabled = false;
    if (configService && typeof configService.get === 'function') {
      baseUrl = configService.get<string>('ODDS_PROVIDER_BASE_URL') || process.env.ODDS_PROVIDER_BASE_URL || DEFAULT_BASE_URL;
      apiKey = configService.get<string>('ODDS_PROVIDER_API_KEY') || process.env.ODDS_PROVIDER_API_KEY || '';
      timeoutMs = Number(configService.get<string>('ODDS_PROVIDER_TIMEOUT_MS') || process.env.ODDS_PROVIDER_TIMEOUT_MS || String(DEFAULT_TIMEOUT_MS));
      const wsRaw = configService.get<string>('GOALDIR_WS_ENABLED') ?? process.env.GOALDIR_WS_ENABLED;
      wsEnabled = wsRaw === 'true' || wsRaw === '1' || wsRaw === 'on';
    } else {
      baseUrl = process.env.ODDS_PROVIDER_BASE_URL || DEFAULT_BASE_URL;
      apiKey = process.env.ODDS_PROVIDER_API_KEY || '';
      timeoutMs = Number(process.env.ODDS_PROVIDER_TIMEOUT_MS || String(DEFAULT_TIMEOUT_MS));
      const wsRaw = process.env.GOALDIR_WS_ENABLED;
      wsEnabled = wsRaw === 'true' || wsRaw === '1' || wsRaw === 'on';
    }
    const cleanBaseUrl = String(baseUrl ?? '').trim().replace(/[,;\s]+$/g, '').replace(/\/+$/g, '');
    this.http = new GoaldirHttpClient({ baseUrl: cleanBaseUrl, apiKey, timeoutMs });
    this.wsEnabled = wsEnabled;
    this.ws = new GoaldirWsClient({ apiKey });
    for (const s of SUPPORTED_GOALDIR_SPORTS) {
      this.supportedSports.add(s);
    }
  }

  async onModuleInit(): Promise<void> {
    if (this.initialized) return;
    this.initialized = true;
    const cfg = this.http.getConfig();
    if (!cfg.hasApiKey) {
      this.logger.warn('ODDS_PROVIDER_API_KEY vazio. Goaldir nao podera retornar dados reais. Apenas fallback mock sera usado.');
      this.fatalAuthFailed = true;
      return;
    }
    this.logger.log(`Goaldir iniciado: baseUrl=${cfg.baseUrl}, timeoutMs=${cfg.timeoutMs}. A verificar coverage por desporto...`);
    for (const sport of Array.from(this.supportedSports)) {
      if (sport === SportType.FOOTBALL) continue;
      try {
        const prefix = GOALDIR_SPORT_API_PREFIX[sport];
        if (!prefix) {
          this.supportedSports.delete(sport);
          continue;
        }
        const coveragePath = sport === SportType.TENNIS
          ? `${prefix}/tournaments/?page_size=1`
          : `${prefix}/leagues/?page_size=1`;
        await this.http.get<unknown>(coveragePath, { skipRetry429: true });
      } catch (err) {
        if (err instanceof GoaldirPaymentRequiredError) {
          this.logger.warn(`Goaldir 402 Addon Required para ${sport}. Desporto removido de supportedSports (degradação graciosa, sem crash).`);
          this.supportedSports.delete(sport);
        } else if (err instanceof GoaldirUnauthorizedError) {
          this.logger.error(`Goaldir 401 Unauthorized no coverage check ${sport}. ODDS_PROVIDER_API_KEY invalida.`);
          this.fatalAuthFailed = true;
          this.supportedSports.clear();
          return;
        } else if (err instanceof GoaldirForbiddenError) {
          this.logger.verbose(`Goaldir 403 coverage check ${sport} (consensus odds apenas). Manter desporto.`);
        } else if (err instanceof GoaldirRateLimitError) {
          this.logger.warn(`Goaldir 429 coverage check ${sport}. Manter desporto mas falhar no request.`);
        } else {
          this.logger.verbose(`Goaldir coverage check ${sport} warning (nao 402): ${err instanceof Error ? err.message : String(err)}`);
        }
      }
    }
    this.logger.log(`Goaldir supportedSports apos coverage check: [${Array.from(this.supportedSports).join(', ')}]`);
    this.http.reset402Warnings();

    if (this.wsEnabled && !this.fatalAuthFailed) {
      try {
        this.ws.onFrame((sport, frame) => this.handleWsFrame(sport, frame));
        const hasFootball = this.supportedSports.has(FOOTBALL);
        const hasTennis = this.supportedSports.has(TENNIS);
        if (hasFootball) this.ws.connect('football');
        if (hasTennis) this.ws.connect('tennis');
        this.logger.log(`Goaldir WebSocket ativado. Conectados: football=${hasFootball}, tennis=${hasTennis}.`);
      } catch (err) {
        this.logger.warn(`Goaldir WS falhou ao iniciar (falta Addon WS 3€?), continuando apenas com polling REST: ${err instanceof Error ? err.message : String(err)}`);
      }
    } else if (this.wsEnabled && this.fatalAuthFailed) {
      this.logger.warn('Goaldir WS desativado porque fatalAuthFailed=true (chave invalida).');
    }
  }

  private readonly lastSelectionOdds = new Map<string, number>();

  private emitOddsChanges(changes: OddsChangeNotification[]): void {
    if (changes.length === 0) return;
    for (const cb of this.oddsChangeCallbacks) {
      try {
        const result = cb(changes);
        if (result && typeof (result as Promise<unknown>).catch === 'function') {
          (result as Promise<unknown>).catch((err) => this.logger.verbose(`Goaldir odds cb erro: ${err instanceof Error ? err.message : String(err)}`));
        }
      } catch (err) {
        this.logger.verbose(`Goaldir odds cb sync erro: ${err instanceof Error ? err.message : String(err)}`);
      }
    }
  }

  private handleWsFrame(sport: GoaldirWsSport, frame: GoaldirWsOddsFrame): void {
    try {
      const frameType = String(frame.type || '').toLowerCase();
      if (frameType === 'heartbeat' || frameType === 'ping' || frameType === 'pong') return;
      const rawId = frame.event_id ?? frame.match_id;
      if (rawId === null || rawId === undefined || rawId === '') return;
      const numericId = typeof rawId === 'number' ? rawId : String(rawId);
      const sportType: SportType | null = sport === 'football' ? SportType.FOOTBALL : sport === 'tennis' ? SportType.TENNIS : null;
      if (!sportType) return;
      const eventComposite = buildCompositeId(sportType, numericId);
      const updatedAt = frame.updated_at
        ? typeof frame.updated_at === 'number'
          ? new Date(frame.updated_at * 1000)
          : new Date(String(frame.updated_at))
        : new Date();
      const markets = mapOddsBySport(frame as unknown as Record<string, unknown>, sportType, eventComposite);
      if (markets.length === 0) return;
      const notifications: OddsChangeNotification[] = [];
      for (const market of markets) {
        for (const sel of market.selections) {
          if (!sel || !sel.id || sel.odds === null || sel.odds === undefined) continue;
          const old = this.lastSelectionOdds.get(sel.id);
          if (old === sel.odds) continue;
          const notification: OddsChangeNotification = {
            selectionId: sel.id,
            marketId: market.id,
            eventId: eventComposite,
            oldOdds: old ?? sel.odds,
            newOdds: sel.odds,
            changedAt: updatedAt,
            status: market.status,
          };
          notifications.push(notification);
          this.lastSelectionOdds.set(sel.id, sel.odds);
        }
      }
      if (notifications.length > 0) this.emitOddsChanges(notifications);
    } catch (err) {
      this.logger.debug(`Goaldir WS frame ignorado: ${err instanceof Error ? err.message : String(err)}`);
    }
  }

  private async safeGet<T>(path: string, params?: Record<string, string | number | boolean | undefined | null>): Promise<T[]> {
    if (this.fatalAuthFailed) return [];
    try {
      const resp = await this.http.get<PagedResponse<T> | T[]>(path, { params });
      return extractResults<T>(resp);
    } catch (err) {
      if (err instanceof GoaldirUnauthorizedError) {
        if (!this.fatalAuthFailed) {
          this.logger.error(`Goaldir 401 em ${path}. Desativar requests Goaldir nesta sessao.`);
          this.fatalAuthFailed = true;
        }
      } else if (err instanceof GoaldirPaymentRequiredError || err instanceof GoaldirForbiddenError) {
      } else if (err instanceof GoaldirRateLimitError) {
        this.logger.warn(`Goaldir 429 rate limit em ${path}. Retornar vazio (backoff aplicado internamente).`);
      } else {
        this.logger.verbose(`Goaldir request warning em ${path}: ${err instanceof Error ? err.message : String(err)}`);
      }
      return [];
    }
  }

  private queryMatchesSupported(query: PrematchEventsQuery | LiveEventsQuery): GoaldirSupportedSport[] {
    const arr: GoaldirSupportedSport[] = [];
    const qSports = query.sports;
    for (const s of SUPPORTED_GOALDIR_SPORTS) {
      if (!this.supportedSports.has(s)) continue;
      if (qSports && qSports.length > 0 && !qSports.includes(s as unknown as SportTypeEnum)) continue;
      arr.push(s);
    }
    return arr;
  }

  private async fetchEventsGeneric<T>(
    sports: GoaldirSupportedSport[],
    opts: { live: boolean; limit?: number; pageSize?: number; fromDate?: Date; toDate?: Date; leagueIds?: string[] },
  ): Promise<ProviderEvent[]> {
    if (sports.length === 0) return [];
    const pageSize = opts.pageSize ?? 100;
    const limit = opts.limit;
    const all: ProviderEvent[] = [];
    const perSportPromises = sports.map(async (sport): Promise<ProviderEvent[]> => {
      const prefix = GOALDIR_SPORT_API_PREFIX[sport];
      const isEventSport = sport === SportType.FOOTBALL || sport === SportType.BASKETBALL;
      const suffix = isEventSport
        ? opts.live ? '/events/live/' : '/events/'
        : opts.live ? '/matches/live/' : '/matches/';
      const params: Record<string, string | number | boolean | undefined | null> = {
        page_size: pageSize,
      };
      if (!opts.live && sport === SportType.FOOTBALL) {
        if (opts.fromDate) params['from'] = opts.fromDate.toISOString().slice(0, 10);
        if (opts.toDate) params['to'] = opts.toDate.toISOString().slice(0, 10);
      }
      const rawList = await this.safeGet<T>(`${prefix}${suffix}`, params);
      const events: ProviderEvent[] = [];
      for (const raw of rawList as unknown as Array<Record<string, unknown>>) {
        const pe = mapGoaldirEvent(raw as unknown as GoaldirEventRaw, sport);
        if (opts.leagueIds && opts.leagueIds.length > 0 && !opts.leagueIds.includes(pe.leagueId)) continue;
        if (!opts.live && opts.fromDate && pe.kickoffAt < opts.fromDate) continue;
        if (!opts.live && opts.toDate && pe.kickoffAt > opts.toDate) continue;
        events.push(pe);
        if (limit && events.length >= limit) break;
      }
      return events;
    });
    const settled = await Promise.allSettled(perSportPromises);
    for (const s of settled) {
      if (s.status === 'fulfilled') all.push(...s.value);
    }
    all.sort((a, b) => a.kickoffAt.getTime() - b.kickoffAt.getTime());
    return limit ? all.slice(0, limit) : all;
  }

  async getPrematchEvents(query: PrematchEventsQuery): Promise<{ events: ProviderEvent[]; total: number }> {
    const sports = this.queryMatchesSupported(query);
    const events = await this.fetchEventsGeneric(sports, {
      live: false,
      limit: query.limit,
      fromDate: query.fromDate,
      toDate: query.toDate,
      leagueIds: query.leagueIds,
    });
    const filtered = query.topEventsOnly ? events.filter((e) => e.isTop) : events;
    const searched = query.searchTerm
      ? filtered.filter((e) => e.name.toLowerCase().includes(query.searchTerm!.toLowerCase()))
      : filtered;
    return { events: searched, total: searched.length };
  }

  async getLiveEvents(query: LiveEventsQuery): Promise<{ events: ProviderEvent[]; total: number }> {
    const sports = this.queryMatchesSupported(query);
    const events = await this.fetchEventsGeneric(sports, {
      live: true,
      limit: query.limit,
      leagueIds: query.leagueIds,
    });
    const liveOnly = events.filter((e) => e.status === 'LIVE' || e.status === 'HALF_TIME' || e.status === 'SUSPENDED');
    return { events: query.onlyWithActiveMarkets ? liveOnly.filter(e => (e.marketsCount ?? 0) > 0 || !query.onlyWithActiveMarkets) : liveOnly, total: liveOnly.length };
  }

  async getEventDetail(eventId: string, includeMarkets = true): Promise<ProviderEventDetail | null> {
    const parsed = parseCompositeId(eventId);
    if (!parsed.sportType || parsed.numericId === null) return null;
    const sport = parsed.sportType;
    if (!this.supportedSports.has(sport as GoaldirSupportedSport)) return null;
    const prefix = GOALDIR_SPORT_API_PREFIX[sport as GoaldirSupportedSport];
    if (!prefix) return null;
    const isEventSport = sport === SportType.FOOTBALL || sport === SportType.BASKETBALL;
    const detailSuffix = isEventSport ? `/events/${parsed.numericId}/` : `/matches/${parsed.numericId}/`;
    const oddsSuffix = isEventSport ? `/events/${parsed.numericId}/odds/` : `/matches/${parsed.numericId}/odds/`;
    const detailPromise = this.safeGet<Record<string, unknown>>(`${prefix}${detailSuffix}`);
    const oddsPromise = includeMarkets
      ? this.safeGet<Record<string, unknown>>(`${prefix}${oddsSuffix}`)
      : Promise.resolve([]);
    const [detailRawArr, oddsRawArr] = await Promise.all([detailPromise, oddsPromise]);
    const detailRaw = detailRawArr[0] ?? null;
    const oddsRaw: unknown = oddsRawArr.length === 1 ? oddsRawArr[0] : oddsRawArr.length > 0 ? oddsRawArr : null;
    if (!detailRaw && !oddsRaw) return null;
    const baseRaw: Record<string, unknown> = detailRaw ?? {};
    const ev = mapGoaldirEvent(baseRaw as unknown as GoaldirEventRaw, sport as GoaldirSupportedSport, { includeOddsMarkets: false });
    let markets: ProviderMarket[] = [];
    if (includeMarkets) {
      const isObj = (v: unknown): v is Record<string, unknown> => !!v && typeof v === 'object' && !Array.isArray(v);
      let oddsSource: Record<string, unknown> | null = null;
      if (isObj(oddsRaw)) {
        oddsSource = oddsRaw;
      } else if (Array.isArray(oddsRaw) && oddsRaw.length > 0 && isObj(oddsRaw[0])) {
        oddsSource = oddsRaw[0];
      }
      const fallbackOdds = isObj(baseRaw.odds) ? baseRaw.odds : null;
      markets = mapOddsBySport(oddsSource ?? fallbackOdds, sport as GoaldirSupportedSport, ev.id);
    }
    return { ...ev, markets };
  }

  async getActiveLeagues(sport?: SportType): Promise<ProviderLeague[]> {
    const sports: GoaldirSupportedSport[] = [];
    if (sport) {
      if (this.supportedSports.has(sport as GoaldirSupportedSport)) sports.push(sport as GoaldirSupportedSport);
    } else {
      for (const s of this.supportedSports) sports.push(s);
    }
    const all: ProviderLeague[] = [];
    await Promise.all(sports.map(async (s) => {
      const prefix = GOALDIR_SPORT_API_PREFIX[s];
      if (!prefix) return;
      const path = s === SportType.TENNIS ? `${prefix}/tournaments/?page_size=200` : `${prefix}/leagues/?page_size=200`;
      const rawList = await this.safeGet<Record<string, unknown>>(path);
      for (const raw of rawList) {
        all.push(mapGoaldirLeague(raw as unknown as GoaldirLeagueRaw, s));
      }
    }));
    return all;
  }

  async syncIncremental(since?: Date): Promise<IncrementalSyncResult> {
    const result: IncrementalSyncResult = {
      updatedEvents: [],
      updatedMarketIds: [],
      updatedSelectionIds: [],
      removedEventIds: [],
      syncedAt: new Date(),
    };
    if (this.fatalAuthFailed || this.supportedSports.size === 0) return result;
    const params: Record<string, string | number | boolean | undefined | null> = { page_size: 200 };
    if (since) params['updated_after'] = since.toISOString();
    for (const sport of Array.from(this.supportedSports)) {
      try {
        const prefix = GOALDIR_SPORT_API_PREFIX[sport];
        const oddsPath = `${prefix}/odds/`;
        const rows = await this.safeGet<Record<string, unknown>>(oddsPath, params);
        for (const row of rows) {
          const eventIdRaw = row['event_id'] ?? row['match_id'] ?? row['id'];
          const eidNum = toNumberOrNull(eventIdRaw);
          if (eidNum === null) continue;
          const eid = buildCompositeId(sport, eidNum);
          result.updatedEvents.push(eid);
        }
      } catch {
      }
    }
    return result;
  }

  subscribeOddsChanges?(callback: OddsChangeCallback): () => void {
    this.oddsChangeCallbacks.add(callback);
    return () => {
      this.oddsChangeCallbacks.delete(callback);
    };
  }

  async fetchLiveOdds(sport?: string, league?: string): Promise<LiveOddsEvent[]> {
    try {
      const st = this.resolveSportArg(sport);
      const query: LiveEventsQuery = { sports: st ? [st as unknown as SportTypeEnum] : undefined };
      if (league) query.leagueIds = [league];
      const { events } = await this.getLiveEvents(query);
      if (events.length === 0) return [];
      const out: LiveOddsEvent[] = [];
      for (const pe of events) {
        const withMarkets = pe.markets && pe.markets.length > 0
          ? pe
          : await this.getEventDetail(pe.id, true);
        const mkts = withMarkets ? providerMarketToLegacy(pe.id, (withMarkets as ProviderEventDetail).markets) : [];
        out.push({
          id: pe.id,
          providerEventId: pe.providerEventId,
          name: pe.name,
          sport: pe.sportCode,
          leagueId: pe.leagueId,
          leagueName: pe.leagueName,
          homeTeamName: pe.homeTeamName,
          awayTeamName: pe.awayTeamName,
          homeScore: pe.homeScore,
          awayScore: pe.awayScore,
          minute: pe.minuteOfMatch,
          status: (pe.status === 'HALF_TIME' ? 'HALF_TIME' : pe.status === 'SUSPENDED' ? 'SUSPENDED' : 'LIVE') as LiveOddsEvent['status'],
          kickoffAt: pe.kickoffAt,
          markets: mkts,
          updatedAt: new Date(),
        });
      }
      return out;
    } catch (err) {
      this.logger.warn(`Goaldir fetchLiveOdds fallback vazio: ${err instanceof Error ? err.message : String(err)}`);
      return [];
    }
  }

  async fetchUpcomingEvents(sport?: string, league?: string, from?: Date, to?: Date): Promise<UpcomingEvent[]> {
    try {
      const st = this.resolveSportArg(sport);
      const query: PrematchEventsQuery = {
        sports: st ? [st as unknown as SportTypeEnum] : undefined,
        fromDate: from,
        toDate: to,
      };
      if (league) query.leagueIds = [league];
      const { events } = await this.getPrematchEvents(query);
      const out: UpcomingEvent[] = [];
      for (const pe of events) {
        out.push({
          id: pe.id,
          providerEventId: pe.providerEventId,
          name: pe.name,
          sport: pe.sportCode,
          leagueId: pe.leagueId,
          leagueName: pe.leagueName,
          homeTeamName: pe.homeTeamName,
          awayTeamName: pe.awayTeamName,
          kickoffAt: pe.kickoffAt,
          status: pe.status === 'PRE_LIVE' ? 'PRE_LIVE' : 'PRE_MATCH',
          isTop: pe.isTop,
          isFeatured: pe.isFeatured,
          markets: providerMarketToLegacy(pe.id, pe.markets),
        });
      }
      return out;
    } catch (err) {
      this.logger.warn(`Goaldir fetchUpcomingEvents fallback vazio: ${err instanceof Error ? err.message : String(err)}`);
      return [];
    }
  }

  async fetchSettlementOutcome(eventId: string, selectionId: string): Promise<OddsSettlementOutcome> {
    const result: OddsSettlementOutcome = {
      eventId,
      selectionId,
      result: 'PENDING',
    };
    try {
      const detail = await this.getEventDetail(eventId, false);
      if (!detail) return result;
      if (detail.status !== 'FINISHED' && detail.status !== 'ENDED') return result;
      const finalScore = {
        home: detail.homeScore ?? 0,
        away: detail.awayScore ?? 0,
      };
      let settlement: SettlementResult = 'PENDING';
      const selLower = selectionId.toLowerCase();
      const isHome = selLower.includes(':home') || selLower.endsWith(':1') || selLower.includes(':1:');
      const isAway = selLower.includes(':away') || selLower.endsWith(':2:') || selLower.includes(':2:') || selLower.includes('away');
      const isDraw = selLower.includes(':draw') || selLower.includes(':x:') || selLower.endsWith(':x');
      const isOver = selLower.includes(':over') || selLower.includes(':mais');
      const isUnder = selLower.includes(':under') || selLower.includes(':menos');
      const isYes = selLower.includes(':yes') || selLower.includes(':sim') || selLower.includes('btts') && selLower.includes('y');
      const isNo = selLower.includes(':no') || selLower.includes(':nao') || selLower.includes(':no') || (selLower.includes('btts') && selLower.includes('n'));
      if (finalScore.home > finalScore.away) {
        if (isHome) settlement = 'WIN';
        else if (isAway || isDraw) settlement = 'LOSE';
      } else if (finalScore.home < finalScore.away) {
        if (isAway) settlement = 'WIN';
        else if (isHome || isDraw) settlement = 'LOSE';
      } else {
        if (isDraw) settlement = 'WIN';
        else if (isHome || isAway) settlement = 'LOSE';
      }
      if ((isOver || isUnder) && !isNaN(finalScore.home) && !isNaN(finalScore.away)) {
        const goals = finalScore.home + finalScore.away;
        const lineMatch = selectionId.match(/ou_(\d)(\d)/);
        if (lineMatch) {
          const line = Number(`${lineMatch[1]}.${lineMatch[2]}`);
          if (isOver) settlement = goals > line ? 'WIN' : 'LOSE';
          if (isUnder) settlement = goals < line ? 'WIN' : 'LOSE';
        }
      }
      if (isYes || isNo) {
        const bothScore = finalScore.home > 0 && finalScore.away > 0;
        if (isYes) settlement = bothScore ? 'WIN' : 'LOSE';
        if (isNo) settlement = !bothScore ? 'WIN' : 'LOSE';
      }
      return {
        ...result,
        result: settlement,
        settledAt: detail.liveUpdatedAt ?? new Date(),
        finalScore,
      };
    } catch (err) {
      this.logger.verbose(`Goaldir fetchSettlementOutcome ${eventId} warning: ${err instanceof Error ? err.message : String(err)}`);
      return result;
    }
  }

  async getSports(): Promise<Sport[]> {
    const result: Sport[] = [];
    const prematch = await this.getPrematchEvents({});
    const live = await this.getLiveEvents({});
    for (const s of Array.from(this.supportedSports)) {
      const sp = sportTypeToSharedSport(s);
      result.push({
        ...sp,
        active: true,
        totalLiveEvents: live.events.filter((e) => e.sportCode === s).length,
        totalPrematchEvents: prematch.events.filter((e) => e.sportCode === s).length,
      });
    }
    return result;
  }

  async getLeagues(sport: string): Promise<League[]> {
    const st = this.resolveSportArg(sport);
    const leagues = await this.getActiveLeagues(st ?? undefined);
    const sharedLeagues: League[] = [];
    const sportId = st ? `sport-${st.toLowerCase()}` : `sport-${sport.toLowerCase()}`;
    for (const pl of leagues) {
      sharedLeagues.push(providerLeagueToSharedLeague(pl, sportId));
    }
    return sharedLeagues;
  }

  private resolveSportArg(sport?: string): GoaldirSupportedSport | null {
    if (!sport) return null;
    const s = sport.trim().toUpperCase();
    if (s === 'FOOTBALL' || s === 'SOCCER' || s === 'FUTEBOL') return SportType.FOOTBALL;
    if (s === 'TENNIS' || s === 'TENIS') return SportType.TENNIS;
    if (s === 'BASKETBALL' || s === 'BASQUETE' || s === 'BASQUETEBOL') return SportType.BASKETBALL;
    if (s === 'HOCKEY' || s === 'HOQUEI') return SportType.HOCKEY;
    return null;
  }
}
