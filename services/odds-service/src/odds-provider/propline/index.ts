import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SportType, EventStatus as SharedEventStatus, MarketStatus, MarketType, SelectionOutcome } from '@bet62/shared';
import type { League, Sport, SportType as SportTypeEnum } from '@bet62/shared';
import {
  AbstractOddsProvider,
  LiveOddsEvent,
  LiveOddsMarket,
  LiveOddsSelection,
  OddsSettlementOutcome,
  SettlementResult,
  UpcomingEvent,
} from '../abstract-odds-provider.service';
import type {
  IncrementalSyncResult,
  LiveEventsQuery,
  OddsChangeCallback,
  OddsChangeNotification,
  PrematchEventsQuery,
  ProviderEvent,
  ProviderEventDetail,
  ProviderLeague,
  ProviderMarket,
  ProviderMarketSelection,
} from '../odds-provider.interface';
import type { OddsProvider } from '../odds-provider.interface';
import { ProplineHttpClient } from './propline.http-client';
import { ProplineWsClient } from './propline.ws-client';
import { ProplineWebhookService, type ParsedProplineWebhook } from './propline.webhook';
import { ProplineDataAdapter } from './propline.adapter';
import type { ProplineEvent, ProplineLeague, ProplineSport, ProplineStatsResponse } from './propline.types';
import {
  eventToBet62Match,
  oddsResponseToMarkets,
  statsToFootballStats,
  normalizeEventStatus,
  normalizePeriod,
} from './propline.mapper';
import { SPORTS_PROVIDER_CONFIG } from '@bet62/shared';

function toISODateOrNow(s: string | null | undefined): Date {
  if (!s) return new Date();
  try {
    const d = new Date(s);
    return isNaN(d.getTime()) ? new Date() : d;
  } catch {
    return new Date();
  }
}

function buildCompositeId(sportType: string, numericOrKey: string | number): string {
  return `${String(sportType).toUpperCase()}:${String(numericOrKey)}`;
}

function normalizeSportKey(key: string | null | undefined): SportType | null {
  if (!key) return null;
  const s = String(key).trim().toUpperCase();
  const map: Record<string, SportType> = {
    FOOTBALL: SportType.FOOTBALL, SOCCER: SportType.FOOTBALL, FUTEBOL: SportType.FOOTBALL,
    BASKETBALL: SportType.BASKETBALL, BASQUETE: SportType.BASKETBALL, BASQUETEBOL: SportType.BASKETBALL,
    TENNIS: SportType.TENNIS, TENIS: SportType.TENNIS,
    VOLLEYBALL: SportType.VOLLEYBALL, VOLEI: SportType.VOLLEYBALL, VOLEIBOL: SportType.VOLLEYBALL,
    HOCKEY: SportType.HOCKEY, HOQUEI: SportType.HOCKEY, ICE_HOCKEY: SportType.HOCKEY,
    F1: SportType.F1, FORMULA1: SportType.F1, FORMULA_1: SportType.F1,
    UFC: SportType.UFC, MMA: SportType.UFC,
    GOLF: SportType.GOLF, GOLFE: SportType.GOLF,
    DARTS: SportType.DARTS, DARDOS: SportType.DARTS,
    TABLE_TENNIS: SportType.TABLE_TENNIS, PINGPONG: SportType.TABLE_TENNIS, TENIS_MESA: SportType.TABLE_TENNIS,
    ESPORTS: SportType.ESPORTS, E_SPORTS: SportType.ESPORTS, ESport: SportType.ESPORTS,
  };
  return map[s] ?? null;
}

function mapStatusFromPropline(raw: string): ProviderEvent['status'] {
  const n = normalizeEventStatus(raw);
  switch (n) {
    case 'scheduled': return 'PRE_MATCH';
    case 'in_progress': return 'LIVE';
    case 'halftime': return 'HALF_TIME';
    case 'final': return 'FINISHED';
    case 'postponed': return 'POSTPONED';
    case 'cancelled': return 'CANCELLED';
    case 'suspended': return 'SUSPENDED';
    case 'awarded': return 'ENDED';
    default: return 'PRE_MATCH';
  }
}

function toNumberOrNull(v: unknown): number | null {
  if (typeof v === 'number' && isFinite(v)) return v;
  if (typeof v === 'string' && v.trim() !== '') {
    const n = Number(v);
    return isFinite(n) ? n : null;
  }
  return null;
}

@Injectable()
export class ProplineOddsProviderService
  extends AbstractOddsProvider
  implements OddsProvider, OnModuleInit, OnModuleDestroy
{
  override readonly providerName = 'PROPLINE';

  private readonly oddsChangeCallbacks: Set<OddsChangeCallback> = new Set();
  private initialized = false;
  private fatalInitFailed = false;

  constructor(
    private readonly http: ProplineHttpClient,
    private readonly ws: ProplineWsClient,
    private readonly webhook: ProplineWebhookService,
    private readonly adapter: ProplineDataAdapter,
    private readonly configService: ConfigService,
  ) {
    super();
  }

  async onModuleInit(): Promise<void> {
    if (this.initialized) return;
    this.initialized = true;
    const cfg = this.http.getConfig();
    if (!cfg.hasApiKey) {
      this.logger.warn('PROPLINE_API_KEY vazia. Provider PropLine retornara vazio (nao crashara).');
      this.fatalInitFailed = true;
      return;
    }
    this.logger.log(`ProplineOddsProvider iniciado: baseUrl=${cfg.baseUrl}, timeout=${cfg.timeoutMs}ms`);
    try {
      const wsEnabledRaw = this.configService.get<string>('PROPLINE_WS_ENABLED')
        ?? process.env.PROPLINE_WS_ENABLED
        ?? 'true';
      const wsEnabled = wsEnabledRaw !== 'false' && wsEnabledRaw !== '0' && wsEnabledRaw !== 'off';
      if (wsEnabled && this.ws.hasApiKey() && !this.ws.isPermanentlyDisabled()) {
        try {
          this.ws.onAnyMessage((msg) => {
            try {
              this.handleWsAnyMessage(msg);
            } catch { /* hard constraint: nunca propagar */ }
          });
          this.ws.onLifecycle('error', () => { /* nunca propagar */ });
          this.ws.onLifecycle('close', () => { /* nunca propagar */ });
          this.ws.onLifecycle('open', () => { /* nunca propagar */ });
          this.ws.connect();
          this.logger.log('Propline WebSocket conectado (streaming odds/scores/eventos ativado).');
        } catch (wsErr) {
          this.logger.warn(`Propline WS init warning (continuar apenas REST): ${wsErr instanceof Error ? wsErr.message : String(wsErr)}`);
        }
      }
    } catch (err) {
      this.logger.warn(`Propline onModuleInit warning: ${err instanceof Error ? err.message : String(err)}`);
    }
  }

  onModuleDestroy(): void {
    try {
      this.ws?.onModuleDestroy?.();
    } catch { /* */ }
    this.oddsChangeCallbacks.clear();
  }

  private handleWsAnyMessage(_msg: Parameters<Parameters<ProplineWsClient['onAnyMessage']>[0]>[0]): void {
    try {
      // TODO: integrar com OddsChangeNotification pipeline incremental em task 5
    } catch { /* hard constraint: nunca throw propagado */ }
  }

  private emitOddsChanges(changes: OddsChangeNotification[]): void {
    if (changes.length === 0) return;
    for (const cb of this.oddsChangeCallbacks) {
      try {
        const r = cb(changes);
        if (r && typeof (r as Promise<unknown>).catch === 'function') {
          (r as Promise<unknown>).catch((err) => this.logger.verbose(`Propline cb async: ${err instanceof Error ? err.message : String(err)}`));
        }
      } catch (err) {
        this.logger.verbose(`Propline cb sync: ${err instanceof Error ? err.message : String(err)}`);
      }
    }
  }

  private resolveSport(sport?: string): SportType | null {
    if (!sport) return null;
    return normalizeSportKey(sport);
  }

  private mapProplineEventToProviderEvent(
    pe: ProplineEvent,
    sportType: SportType,
    includeMarkets = false,
  ): ProviderEvent {
    const kickoffAt = toISODateOrNow(pe.start_date);
    const status = mapStatusFromPropline(pe.status);
    const compositeId = buildCompositeId(sportType, pe.event_id);
    const homeScore = pe.scores?.home ?? pe.scores?.current_period_home ?? null;
    const awayScore = pe.scores?.away ?? pe.scores?.current_period_away ?? null;
    const minute = typeof pe.minute === 'number' ? pe.minute : (status === 'LIVE' ? undefined : undefined);
    const ev: ProviderEvent = {
      id: compositeId,
      providerEventId: pe.event_id,
      name: `${pe.home_team_name ?? pe.home_team_key} vs ${pe.away_team_name ?? pe.away_team_key}`,
      sportCode: sportType,
      leagueId: pe.league_key ?? `${sportType.toLowerCase()}-league-default`,
      leagueName: pe.league_key ?? 'Liga Desconhecida',
      homeTeamId: pe.home_team_key,
      awayTeamId: pe.away_team_key,
      homeTeamName: pe.home_team_name ?? pe.home_team_key,
      awayTeamName: pe.away_team_name ?? pe.away_team_key,
      homeScore: toNumberOrNull(homeScore),
      awayScore: toNumberOrNull(awayScore),
      homeHalfScore: toNumberOrNull(pe.scores?.half_home),
      awayHalfScore: toNumberOrNull(pe.scores?.half_away),
      status,
      kickoffAt,
      liveStartedAt: status === 'LIVE' || status === 'HALF_TIME' ? kickoffAt : undefined,
      liveUpdatedAt: pe.last_updated_at ? toISODateOrNow(pe.last_updated_at) : undefined,
      minuteOfMatch: minute,
      liveStreamAvailable: Boolean(pe.stream_url),
      streamUrl: pe.stream_url ?? undefined,
      isTop: false,
      isFeatured: false,
      marketsCount: 0,
      markets: includeMarkets ? [] : undefined,
    };
    return ev;
  }

  private providerMarketToLegacy(
    eventId: string,
    markets: ProviderMarket[] | undefined,
  ): LiveOddsMarket[] {
    if (!markets || markets.length === 0) return [];
    return markets.map((m) => ({
      id: m.id,
      type: m.type,
      name: m.displayedName || m.name,
      selections: (m.selections ?? []).map((s: ProviderMarketSelection): LiveOddsSelection => ({
        id: s.id,
        name: s.name,
        odds: s.odds,
        outcome: s.outcome,
        status: s.status === 'SUSPENDED' ? 'SUSPENDED' : s.status === 'SETTLED' ? 'SETTLED' : 'ACTIVE',
      })),
    }));
  }

  private async fetchEventsGeneric(
    opts: { live: boolean; sport?: string; league?: string; from?: Date; to?: Date; limit?: number },
  ): Promise<ProviderEvent[]> {
    if (this.fatalInitFailed) return [];
    try {
      const st = this.resolveSport(opts.sport);
      const sportKey = st ? String(st).toLowerCase().replace(/_/g, '') : (opts.sport ? opts.sport.toLowerCase() : undefined);
      const rawList: ProplineEvent[] = opts.live
        ? await this.http.getLiveEvents()
        : await this.http.getUpcomingEvents(sportKey, 72);
      if (rawList.length === 0) return [];
      const out: ProviderEvent[] = [];
      for (const pe of rawList) {
        const sportType = this.resolveSport(pe.sport_key) ?? SportType.FOOTBALL;
        if (opts.sport && sportType !== this.resolveSport(opts.sport)) {
          const sportNorm = normalizeSportKey(opts.sport);
          if (sportNorm && sportType !== sportNorm) continue;
        }
        const pev = this.mapProplineEventToProviderEvent(pe, sportType, false);
        if (opts.league) {
          const leagueKey = String(opts.league).toLowerCase();
          const leagueName = (pev.leagueName ?? '').toLowerCase();
          const leagueId = (pev.leagueId ?? '').toLowerCase();
          if (leagueName !== leagueKey && leagueId !== leagueKey) continue;
        }
        if (!opts.live) {
          if (opts.from && pev.kickoffAt < opts.from) continue;
          if (opts.to && pev.kickoffAt > opts.to) continue;
        }
        out.push(pev);
        if (opts.limit && out.length >= opts.limit) break;
      }
      out.sort((a, b) => a.kickoffAt.getTime() - b.kickoffAt.getTime());
      return out;
    } catch (err) {
      this.logger.verbose(`Propline fetchEventsGeneric warning: ${err instanceof Error ? err.message : String(err)}`);
      return [];
    }
  }

  async getPrematchEvents(
    query: PrematchEventsQuery,
  ): Promise<{ events: ProviderEvent[]; total: number }> {
    try {
      const events = await this.fetchEventsGeneric({
        live: false,
        sport: query.sports ? query.sports[0] as unknown as string : undefined,
        league: query.leagueIds ? query.leagueIds[0] : undefined,
        from: query.fromDate,
        to: query.toDate,
        limit: query.limit,
      });
      let filtered = events;
      if (query.topEventsOnly) filtered = filtered.filter((e) => e.isTop);
      if (query.searchTerm) {
        const s = String(query.searchTerm).toLowerCase();
        filtered = filtered.filter(
          (e) => e.name.toLowerCase().includes(s) || e.leagueName.toLowerCase().includes(s),
        );
      }
      return { events: filtered, total: filtered.length };
    } catch (err) {
      this.logger.verbose(`Propline getPrematchEvents: ${err instanceof Error ? err.message : String(err)}`);
      return { events: [], total: 0 };
    }
  }

  async getLiveEvents(
    query: LiveEventsQuery,
  ): Promise<{ events: ProviderEvent[]; total: number }> {
    try {
      const events = await this.fetchEventsGeneric({
        live: true,
        sport: query.sports ? query.sports[0] as unknown as string : undefined,
        league: query.leagueIds ? query.leagueIds[0] : undefined,
        limit: query.limit,
      });
      const liveOnly = events.filter(
        (e) => e.status === 'LIVE' || e.status === 'HALF_TIME' || e.status === 'SUSPENDED',
      );
      const result = query.onlyWithActiveMarkets
        ? liveOnly.filter((e) => (e.marketsCount ?? 0) >= 0)
        : liveOnly;
      return { events: result, total: result.length };
    } catch (err) {
      this.logger.verbose(`Propline getLiveEvents: ${err instanceof Error ? err.message : String(err)}`);
      return { events: [], total: 0 };
    }
  }

  async getEventDetail(eventId: string, includeMarkets = true): Promise<ProviderEventDetail | null> {
    try {
      if (this.fatalInitFailed) return null;
      const colon = eventId.indexOf(':');
      const sportRaw = colon > 0 ? eventId.slice(0, colon) : null;
      const rawEventId = colon > 0 ? eventId.slice(colon + 1) : eventId;
      const sportType = this.resolveSport(sportRaw ?? 'FOOTBALL') ?? SportType.FOOTBALL;
      const pe = await this.http.getEventById(rawEventId);
      if (!pe) return null;
      const base = this.mapProplineEventToProviderEvent(pe, sportType, false);
      let markets: ProviderMarket[] = [];
      if (includeMarkets) {
        try {
          const oddsResp = await this.http.getOdds(rawEventId);
          if (oddsResp) {
            const { markets: bet62Markets } = this.adapter.runOddsPipeline(oddsResp, {
              isLive: base.status === 'LIVE' || base.status === 'HALF_TIME',
            });
            markets = bet62Markets.map((m, idx) => {
              const pm: ProviderMarket = {
                id: m.id,
                providerMarketId: m.code,
                eventId: base.id,
                type: (m.code as unknown as ProviderMarket['type']) ?? MarketType.TOTAL,
                name: m.label,
                specifiers: m.lineSpecifiers ?? null,
                handicapValue: m.lineSpecifiers?.handicap as number ?? undefined,
                totalLineValue: m.lineSpecifiers?.line as number ?? undefined,
                period: normalizePeriod(m.period as string | null) ?? undefined,
                status: m.status === 'active' ? MarketStatus.ACTIVE : m.status === 'suspended' ? MarketStatus.SUSPENDED : m.status === 'settled' ? MarketStatus.SETTLED : MarketStatus.CLOSED,
                displayedName: m.label,
                cashoutAvailable: true,
                selections: m.selections.map((s, sIdx) => {
                  const ps: ProviderMarketSelection = {
                    id: s.id,
                    providerSelectionId: s.id,
                    name: s.name,
                    outcome: (s.outcome.toUpperCase() as unknown as ProviderMarketSelection['outcome']) ?? SelectionOutcome.HOME,
                    odds: s.price,
                    oddsDisplay: String(s.price),
                    status: s.status === 'active' ? MarketStatus.ACTIVE : s.status === 'suspended' ? MarketStatus.SUSPENDED : s.status === 'settled' ? MarketStatus.SETTLED : MarketStatus.CLOSED,
                    handicapValue: s.handicap ?? undefined,
                    totalLineValue: s.line ?? undefined,
                    isTrendingUp: false,
                  };
                  return ps;
                }),
              };
              return pm;
            });
          }
        } catch (oddsErr) {
          this.logger.verbose(`Propline getEventDetail odds erro: ${oddsErr instanceof Error ? oddsErr.message : String(oddsErr)}`);
        }
      }
      return { ...base, markets, marketsCount: markets.length };
    } catch (err) {
      this.logger.verbose(`Propline getEventDetail: ${err instanceof Error ? err.message : String(err)}`);
      return null;
    }
  }

  async getActiveLeagues(sport?: SportType): Promise<ProviderLeague[]> {
    try {
      if (this.fatalInitFailed) return [];
      const sportType = sport ? (sport as unknown as string) : undefined;
      const key = sportType ? sportType.toLowerCase().replace(/_/g, '') : undefined;
      const rawLeagues: ProplineLeague[] = key ? await this.http.getLeagues(key) : [];
      if (rawLeagues.length === 0) {
        const rawSports: ProplineSport[] = await this.http.getSports();
        const sportsToFetch = key ? [key] : rawSports.slice(0, 10).map((s) => s.key);
        const all: ProviderLeague[] = [];
        await Promise.all(sportsToFetch.map(async (k) => {
          try {
            const list = await this.http.getLeagues(k);
            for (const l of list) {
              const st = this.resolveSport(l.sport_key) ?? SportType.FOOTBALL;
              all.push({
                id: `${st}:${l.key}`,
                providerLeagueId: l.key,
                name: l.name,
                sportCode: st,
                countryCode: l.country_code ?? undefined,
                tier: 1,
                isTop: false,
              });
            }
          } catch { /* */ }
        }));
        return all;
      }
      return rawLeagues.map((l) => {
        const st = this.resolveSport(l.sport_key) ?? SportType.FOOTBALL;
        return {
          id: `${st}:${l.key}`,
          providerLeagueId: l.key,
          name: l.name,
          sportCode: st,
          countryCode: l.country_code ?? undefined,
          tier: 1,
          isTop: false,
        };
      });
    } catch (err) {
      this.logger.verbose(`Propline getActiveLeagues: ${err instanceof Error ? err.message : String(err)}`);
      return [];
    }
  }

  async syncIncremental(_since?: Date): Promise<IncrementalSyncResult> {
    try {
      const result: IncrementalSyncResult = {
        updatedEvents: [],
        updatedMarketIds: [],
        updatedSelectionIds: [],
        removedEventIds: [],
        syncedAt: new Date(),
      };
      if (this.fatalInitFailed) return result;
      try {
        const live = await this.http.getLiveEvents();
        for (const pe of live) {
          const st = this.resolveSport(pe.sport_key) ?? SportType.FOOTBALL;
          result.updatedEvents.push(buildCompositeId(st, pe.event_id));
        }
      } catch { /* */ }
      return result;
    } catch {
      return {
        updatedEvents: [],
        updatedMarketIds: [],
        updatedSelectionIds: [],
        removedEventIds: [],
        syncedAt: new Date(),
      };
    }
  }

  subscribeOddsChanges?(callback: OddsChangeCallback): () => void {
    this.oddsChangeCallbacks.add(callback);
    return () => {
      this.oddsChangeCallbacks.delete(callback);
    };
  }

  async fetchLiveOdds(sport?: string, league?: string): Promise<LiveOddsEvent[]> {
    try {
      const { events } = await this.getLiveEvents({
        sports: sport ? [this.resolveSport(sport) as unknown as SportTypeEnum] : undefined,
        leagueIds: league ? [league] : undefined,
      });
      if (events.length === 0) return [];
      const out: LiveOddsEvent[] = [];
      for (const pe of events) {
        let withMarkets: ProviderEvent | ProviderEventDetail = pe;
        if (!pe.markets || pe.markets.length === 0) {
          const detail = await this.getEventDetail(pe.id, true);
          if (detail) withMarkets = detail;
        }
        const mkts = this.providerMarketToLegacy(
          pe.id,
          (withMarkets as ProviderEventDetail).markets,
        );
        out.push({
          id: pe.id,
          providerEventId: pe.providerEventId,
          name: pe.name,
          sport: pe.sportCode,
          leagueId: pe.leagueId,
          leagueName: pe.leagueName,
          homeTeamName: pe.homeTeamName,
          awayTeamName: pe.awayTeamName,
          homeScore: pe.homeScore ?? undefined,
          awayScore: pe.awayScore ?? undefined,
          minute: pe.minuteOfMatch,
          status: (pe.status === 'HALF_TIME' ? 'HALF_TIME' : pe.status === 'SUSPENDED' ? 'SUSPENDED' : 'LIVE') as LiveOddsEvent['status'],
          kickoffAt: pe.kickoffAt,
          markets: mkts,
          updatedAt: new Date(),
        });
      }
      return out;
    } catch (err) {
      this.logger.warn(`Propline fetchLiveOdds fallback vazio: ${err instanceof Error ? err.message : String(err)}`);
      return [];
    }
  }

  async fetchUpcomingEvents(
    sport?: string,
    league?: string,
    from?: Date,
    to?: Date,
  ): Promise<UpcomingEvent[]> {
    try {
      const { events } = await this.getPrematchEvents({
        sports: sport ? [this.resolveSport(sport) as unknown as SportTypeEnum] : undefined,
        leagueIds: league ? [league] : undefined,
        fromDate: from,
        toDate: to,
      });
      const out: UpcomingEvent[] = events.map((pe) => ({
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
        markets: this.providerMarketToLegacy(pe.id, pe.markets),
      }));
      return out;
    } catch (err) {
      this.logger.warn(`Propline fetchUpcomingEvents fallback vazio: ${err instanceof Error ? err.message : String(err)}`);
      return [];
    }
  }

  async fetchSettlementOutcome(
    eventId: string,
    selectionId: string,
  ): Promise<OddsSettlementOutcome> {
    const base: OddsSettlementOutcome = {
      eventId,
      selectionId,
      result: 'PENDING',
    };
    try {
      const colon = eventId.indexOf(':');
      const sportRaw = colon > 0 ? eventId.slice(0, colon) : null;
      const rawEventId = colon > 0 ? eventId.slice(colon + 1) : eventId;
      const sportType = this.resolveSport(sportRaw ?? 'FOOTBALL') ?? SportType.FOOTBALL;

      // R3: Futebol settlement 100% GOAL (retornar null/PENDING para futebol)
      if (sportType === SportType.FOOTBALL) {
        this.logger.verbose(`Propline settlement ${eventId}: futebol -> delegado 100% GOAL, retornar PENDING`);
        return { ...base };
      }

      const detail = await this.getEventDetail(eventId, false);
      if (!detail) return base;
      if (detail.status !== 'FINISHED' && detail.status !== 'ENDED') return base;
      const finalScore = {
        home: detail.homeScore ?? 0,
        away: detail.awayScore ?? 0,
      };
      let result: SettlementResult = 'PENDING';
      const sLower = String(selectionId).toLowerCase();
      const isHome = sLower.includes('home') || sLower.includes(':1:') || sLower.endsWith(':1') || sLower.includes(':home');
      const isAway = sLower.includes('away') || sLower.includes(':2:') || sLower.endsWith(':2') || sLower.includes(':away');
      const isDraw = sLower.includes('draw') || sLower.includes(':x:') || sLower.endsWith(':x') || sLower.includes(':empate');
      const isOver = sLower.includes('over') || sLower.includes('mais') || sLower.includes(':ma');
      const isUnder = sLower.includes('under') || sLower.includes('menos') || sLower.includes(':me');
      const isYes = sLower.includes('yes') || sLower.includes('sim') || sLower.includes('btts') && sLower.includes('y');
      const isNo = sLower.includes('no') || sLower.includes('nao') || sLower.includes('não') || (sLower.includes('btts') && sLower.includes('n'));

      if (finalScore.home > finalScore.away) {
        if (isHome) result = 'WIN';
        else if (isAway || isDraw) result = 'LOSE';
      } else if (finalScore.home < finalScore.away) {
        if (isAway) result = 'WIN';
        else if (isHome || isDraw) result = 'LOSE';
      } else {
        if (isDraw) result = 'WIN';
        else if (isHome || isAway) result = 'LOSE';
      }
      if ((isOver || isUnder) && !isNaN(finalScore.home) && !isNaN(finalScore.away)) {
        const total = finalScore.home + finalScore.away;
        const m = String(selectionId).match(/[_\-:](\d+(?:\.\d+)?)/g);
        if (m && m.length > 0) {
          const last = m[m.length - 1].replace(/^[_\-:]/, '');
          const line = Number(last);
          if (!isNaN(line) && line > 0) {
            if (isOver) result = total > line ? 'WIN' : 'LOSE';
            if (isUnder) result = total < line ? 'WIN' : 'LOSE';
          }
        }
      }
      if (isYes || isNo) {
        const both = finalScore.home > 0 && finalScore.away > 0;
        if (isYes) result = both ? 'WIN' : 'LOSE';
        if (isNo) result = !both ? 'WIN' : 'LOSE';
      }
      return {
        ...base,
        result,
        settledAt: detail.liveUpdatedAt ?? new Date(),
        finalScore,
      };
    } catch (err) {
      this.logger.verbose(`Propline fetchSettlementOutcome warning ${eventId}: ${err instanceof Error ? err.message : String(err)}`);
      return base;
    }
  }

  async getSports(): Promise<Sport[]> {
    try {
      const prematch = await this.getPrematchEvents({});
      const live = await this.getLiveEvents({});
      const rawSports: ProplineSport[] = this.fatalInitFailed ? [] : await this.http.getSports();
      const allSportCodes = new Set<string>();
      for (const s of rawSports) {
        const st = this.resolveSport(s.key);
        if (st) allSportCodes.add(st);
      }
      for (const sport of SPORTS_PROVIDER_CONFIG.allSports) {
        allSportCodes.add(sport);
      }
      const result: Sport[] = [];
      let displayOrder = 0;
      for (const code of allSportCodes) {
        const st = this.resolveSport(code);
        if (!st) continue;
        const name = SPORTS_PROVIDER_CONFIG.allSports.includes(code)
          ? code.charAt(0) + code.slice(1).toLowerCase().replace(/_/g, ' ')
          : String(st);
        result.push({
          id: code,
          slug: code.toLowerCase(),
          name,
          sportType: st,
          providerSportId: rawSports.find((rs) => this.resolveSport(rs.key) === st)?.key ?? null,
          active: true,
          featured: displayOrder === 0,
          displayOrder,
          iconUrl: null,
          colorHex: null,
          totalLiveEvents: live.events.filter((e) => e.sportCode === code).length,
          totalPrematchEvents: prematch.events.filter((e) => e.sportCode === code).length,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        displayOrder++;
      }
      return result;
    } catch (err) {
      this.logger.verbose(`Propline getSports warning: ${err instanceof Error ? err.message : String(err)}`);
      return [];
    }
  }

  async getLeagues(sport: string): Promise<League[]> {
    try {
      const st = this.resolveSport(sport);
      const active = await this.getActiveLeagues(st ?? undefined);
      const prematch = await this.getPrematchEvents({ sports: st ? [st as unknown as SportTypeEnum] : undefined });
      const live = await this.getLiveEvents({ sports: st ? [st as unknown as SportTypeEnum] : undefined });
      const sportId = st ? `sport-${st.toLowerCase()}` : `sport-${sport.toLowerCase()}`;
      const out: League[] = active.map((pl, idx) => ({
        id: pl.id,
        sportId,
        providerLeagueId: pl.providerLeagueId,
        name: pl.name,
        slug: pl.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''),
        countryCode: pl.countryCode ?? null,
        tier: pl.tier ? String(pl.tier) : null,
        season: null,
        logoUrl: null,
        active: true,
        featured: idx === 0,
        displayOrder: idx,
        totalLiveEvents: live.events.filter((e) => e.leagueId === pl.id).length,
        totalPrematchEvents: prematch.events.filter((e) => e.leagueId === pl.id).length,
        createdAt: new Date(),
        updatedAt: new Date(),
      }));
      return out;
    } catch (err) {
      this.logger.verbose(`Propline getLeagues warning: ${err instanceof Error ? err.message : String(err)}`);
      return [];
    }
  }

  async getStats(eventId: string, period = 'full'): Promise<ProplineStatsResponse | null> {
    try {
      if (this.fatalInitFailed) return null;
      const colon = eventId.indexOf(':');
      const rawEventId = colon > 0 ? eventId.slice(colon + 1) : eventId;
      return await this.http.getStats(rawEventId, period);
    } catch (err) {
      this.logger.verbose(`Propline getStats warning ${eventId}: ${err instanceof Error ? err.message : String(err)}`);
      return null;
    }
  }

  handleWebhook(
    rawBody: string,
    headers: Parameters<ProplineWebhookService['parseEvent']>[1],
  ): ParsedProplineWebhook {
    try {
      return this.webhook.parseEvent(rawBody, headers);
    } catch (err) {
      this.logger.warn(`Propline handleWebhook erro: ${err instanceof Error ? err.message : String(err)}`);
      return {
        valid: false,
        deliveryId: null,
        eventType: 'unknown',
        timestamp: new Date(),
        raw: {},
        parseError: `handleWebhook: ${err instanceof Error ? err.message : String(err)}`,
      };
    }
  }

  getAdapter(): ProplineDataAdapter {
    return this.adapter;
  }

  getHttpClient(): ProplineHttpClient {
    return this.http;
  }

  getWsClient(): ProplineWsClient {
    return this.ws;
  }

  getWebhookService(): ProplineWebhookService {
    return this.webhook;
  }
}

export * from './propline.types';
export * from './propline.bookmakers';
export * from './propline.http-client';
export * from './propline.ws-client';
export * from './propline.webhook';
export * from './propline.mapper';
export * from './propline.adapter';
export { statsToFootballStats, eventToBet62Match, oddsResponseToMarkets } from './propline.mapper';
