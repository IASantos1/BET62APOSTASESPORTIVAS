import { Injectable } from '@nestjs/common';
import type { Sport, League } from '@bet62/shared';
import { SportType } from '@bet62/shared';
import {
  AbstractOddsProvider,
  LiveOddsEvent,
  LiveOddsMarket,
  LiveOddsSelection,
  OddsSettlementOutcome,
  SettlementResult,
  UpcomingEvent,
} from './abstract-odds-provider.service';
import { MockOddsProviderService } from './mock-odds-provider.service';
import { SchedulerRegistry } from '@nestjs/schedule';

interface SportsDBEvent {
  idEvent: string;
  strEvent: string;
  strHomeTeam: string;
  strAwayTeam: string;
  intHomeScore?: string | null;
  intAwayScore?: string | null;
  dateEvent: string;
  strTime: string;
  strSport: string;
  idLeague: string;
  strLeague: string;
  strStatus?: string | null;
  strThumb?: string | null;
}

interface SportsDBLeague {
  idLeague: string;
  strLeague: string;
  strSport: string;
  strCountry?: string | null;
}

const SPORTSDB_BASE = 'https://www.thesportsdb.com/api/v1/json/3';
const TEST_KEY = '3';

const DEFAULT_LEAGUES = [
  { id: '4328', name: 'English Premier League', sport: 'Soccer', sportCode: 'FOOTBALL' },
  { id: '4331', name: 'French Ligue 1', sport: 'Soccer', sportCode: 'FOOTBALL' },
  { id: '4332', name: 'Italian Serie A', sport: 'Soccer', sportCode: 'FOOTBALL' },
  { id: '4334', name: 'Spanish La Liga', sport: 'Soccer', sportCode: 'FOOTBALL' },
  { id: '4335', name: 'German Bundesliga', sport: 'Soccer', sportCode: 'FOOTBALL' },
  { id: '4344', name: 'Portuguese Primeira Liga', sport: 'Soccer', sportCode: 'FOOTBALL' },
  { id: '4350', name: 'Serie A Brasil', sport: 'Soccer', sportCode: 'FOOTBALL' },
  { id: '4387', name: 'NBA', sport: 'Basketball', sportCode: 'BASKETBALL' },
  { id: '4424', name: 'ATP Masters', sport: 'Tennis', sportCode: 'TENNIS' },
];

const SPORT_MAP: Record<string, { code: string; type: SportType; name: string }> = {
  Soccer: { code: 'FOOTBALL', type: SportType.FOOTBALL, name: 'Futebol' },
  Football: { code: 'FOOTBALL', type: SportType.FOOTBALL, name: 'Futebol' },
  Basketball: { code: 'BASKETBALL', type: SportType.BASKETBALL, name: 'Basquete' },
  Tennis: { code: 'TENNIS', type: SportType.TENNIS, name: 'Tênis' },
};

function sportCodeFromSport(sport: string): string {
  return SPORT_MAP[sport]?.code ?? sport.toUpperCase();
}

function randomOdds(min = 1.4, max = 4.5): number {
  const val = Math.random() * (max - min) + min;
  return Math.round(val * 100) / 100;
}

function pairSecondOdd(o1: number): number {
  const vig = 1.06;
  const implied = 1 / o1;
  const remaining = Math.max(0.3, vig - implied);
  return Math.round((1 / remaining) * 100) / 100;
}

function pairThirdOdd(o1: number, o2: number): number {
  const vig = 1.09;
  const remaining = Math.max(0.22, vig - (1 / o1) - (1 / o2));
  return Math.round((1 / remaining) * 100) / 100;
}

function buildDefaultMarkets(eventId: string, home: string, away: string, sport = 'FOOTBALL'): LiveOddsMarket[] {
  const isFootball = sport === 'FOOTBALL';
  const markets: LiveOddsMarket[] = [];
  let counter = 1;

  const mkMkt = (type: string, name: string) => ({
    id: `${eventId}-m${counter.toString().padStart(3, '0')}`,
    type,
    name,
    selections: [] as LiveOddsSelection[],
  });

  if (isFootball) {
    const m1x2 = mkMkt('MATCH_WINNER_1X2', 'Resultado Final (1X2)');
    const h = randomOdds(1.8, 3.6);
    const d = randomOdds(3.0, 4.5);
    const a = pairThirdOdd(h, d);
    m1x2.selections = [
      { id: `${m1x2.id}-s1`, name: home, odds: h, outcome: 'HOME', status: 'ACTIVE' },
      { id: `${m1x2.id}-s2`, name: 'Empate', odds: d, outcome: 'DRAW', status: 'ACTIVE' },
      { id: `${m1x2.id}-s3`, name: away, odds: a, outcome: 'AWAY', status: 'ACTIVE' },
    ];
    markets.push(m1x2);
    counter++;

    const mOU = mkMkt('OVER_UNDER_TOTAL', 'Mais/Menos 2.5 gols');
    const ov = randomOdds(1.8, 2.1);
    const un = pairSecondOdd(ov);
    mOU.selections = [
      { id: `${mOU.id}-s1`, name: 'Mais de 2.5', odds: ov, outcome: 'OVER', status: 'ACTIVE' },
      { id: `${mOU.id}-s2`, name: 'Menos de 2.5', odds: un, outcome: 'UNDER', status: 'ACTIVE' },
    ];
    markets.push(mOU);
    counter++;

    const mBtts = mkMkt('BTTS_YES_NO', 'Ambas Marcam (BTTS)');
    const y = randomOdds(1.7, 2.1);
    const n = pairSecondOdd(y);
    mBtts.selections = [
      { id: `${mBtts.id}-s1`, name: 'Sim', odds: y, outcome: 'YES', status: 'ACTIVE' },
      { id: `${mBtts.id}-s2`, name: 'Não', odds: n, outcome: 'NO', status: 'ACTIVE' },
    ];
    markets.push(mBtts);
    counter++;
  } else {
    const mW = mkMkt('MATCH_WINNER_12', 'Vencedor do Jogo');
    const h = randomOdds(1.4, 2.8);
    const a = pairSecondOdd(h);
    mW.selections = [
      { id: `${mW.id}-s1`, name: home, odds: h, outcome: 'HOME', status: 'ACTIVE' },
      { id: `${mW.id}-s2`, name: away, odds: a, outcome: 'AWAY', status: 'ACTIVE' },
    ];
    markets.push(mW);
    counter++;
  }

  return markets;
}

@Injectable()
export class SportsDbOddsProviderService extends AbstractOddsProvider {
  override readonly providerName = 'THESPORTSDB';

  private readonly apiKey: string;
  private readonly baseUrl: string;
  private readonly mockFallback: MockOddsProviderService;

  constructor() {
    super();
    this.apiKey = process.env.SPORTSDB_API_KEY || TEST_KEY;
    this.baseUrl = process.env.SPORTSDB_BASE_URL || SPORTSDB_BASE;
    try {
      const schedulerRegistry = new SchedulerRegistry();
      this.mockFallback = new MockOddsProviderService(schedulerRegistry);
      this.mockFallback.onModuleInit();
    } catch {
      const schedulerRegistry = new SchedulerRegistry();
      this.mockFallback = new MockOddsProviderService(schedulerRegistry);
    }
  }

  private async safeFetch<T>(url: string): Promise<T | null> {
    try {
      const res = await fetch(url, { method: 'GET', signal: AbortSignal.timeout(8000) });
      if (!res.ok) {
        this.logger.warn(`SportsDB fetch failed ${res.status}: ${url}`);
        return null;
      }
      const data = await res.json();
      return data as T;
    } catch (err) {
      this.logger.warn(`SportsDB fetch error: ${err instanceof Error ? err.message : String(err)} url=${url}`);
      return null;
    }
  }

  private parseKickoff(dateStr: string, timeStr: string): Date {
    try {
      if (!dateStr) return new Date(Date.now() + 3600_000);
      const iso = timeStr ? `${dateStr}T${timeStr}Z` : `${dateStr}T00:00:00Z`;
      const d = new Date(iso);
      return isNaN(d.getTime()) ? new Date(Date.now() + 3600_000) : d;
    } catch {
      return new Date(Date.now() + 3600_000);
    }
  }

  private mapStatus(strStatus: string | null | undefined, kickoff: Date): {
    status: LiveOddsEvent['status'] | UpcomingEvent['status'];
    minute?: number;
  } {
    const s = (strStatus || '').toLowerCase();
    const now = Date.now();
    const kickMs = kickoff.getTime();
    if (s.includes('finished') || s.includes('full') || s.includes('ft')) {
      return { status: 'PRE_MATCH' };
    }
    if (s.includes('live') || s.includes('in play') || (kickMs <= now && now - kickMs < 3 * 3600_000)) {
      const elapsed = Math.floor((now - kickMs) / 60000);
      const minute = elapsed > 0 && elapsed < 120 ? elapsed : undefined;
      const liveStatus: LiveOddsEvent['status'] =
        minute !== undefined && minute >= 45 && minute <= 60 ? 'HALF_TIME' : 'LIVE';
      return { status: liveStatus, minute };
    }
    return { status: kickMs <= now ? 'PRE_LIVE' : 'PRE_MATCH' };
  }

  private leagueFilterMatches(sportParam: string | undefined, leagueParam: string | undefined, league: {
    id: string; name: string; sport: string; sportCode: string;
  }): boolean {
    if (sportParam && sportCodeFromSport(sportParam) !== league.sportCode &&
        sportParam !== league.sportCode && sportParam !== league.sport) return false;
    if (leagueParam && leagueParam !== league.id && leagueParam !== league.name) return false;
    return true;
  }

  private selectLeagues(sport?: string, league?: string) {
    return DEFAULT_LEAGUES.filter((l) => this.leagueFilterMatches(sport, league, l));
  }

  private async fetchEventsNextForLeague(leagueId: string): Promise<SportsDBEvent[]> {
    const url = `${this.baseUrl}/eventsnextleague.php?id=${encodeURIComponent(leagueId)}`;
    const data = await this.safeFetch<{ events: SportsDBEvent[] | null }>(url);
    return data?.events ?? [];
  }

  private async fetchEventsLastForLeague(leagueId: string): Promise<SportsDBEvent[]> {
    const url = `${this.baseUrl}/eventslastleague.php?id=${encodeURIComponent(leagueId)}`;
    const data = await this.safeFetch<{ events: SportsDBEvent[] | null }>(url);
    return data?.events ?? [];
  }

  private async fetchAllLeaguesFromApi(): Promise<SportsDBLeague[]> {
    const url = `${this.baseUrl}/all_leagues.php`;
    const data = await this.safeFetch<{ leagues: SportsDBLeague[] | null }>(url);
    return data?.leagues ?? [];
  }

  async fetchLiveOdds(sport?: string, league?: string): Promise<LiveOddsEvent[]> {
    try {
      const leagues = this.selectLeagues(sport, league);
      const allEvents: SportsDBEvent[] = [];
      const results = await Promise.allSettled(leagues.map((l) => this.fetchEventsLastForLeague(l.id)));
      for (const r of results) {
        if (r.status === 'fulfilled') allEvents.push(...r.value);
      }
      if (allEvents.length === 0) {
        this.logger.debug('SportsDB live: no events from API, using mock fallback');
        return this.mockFallback.fetchLiveOdds(sport, league);
      }
      const live: LiveOddsEvent[] = [];
      const now = Date.now();
      for (const ev of allEvents) {
        const ko = this.parseKickoff(ev.dateEvent, ev.strTime || '12:00:00');
        const elapsedMs = now - ko.getTime();
        if (elapsedMs < -1800_000 || elapsedMs > 4 * 3600_000) continue;
        const sportCode = sportCodeFromSport(ev.strSport || DEFAULT_LEAGUES[0].sport);
        const { status, minute } = this.mapStatus(ev.strStatus, ko);
        if (status !== 'LIVE' && status !== 'HALF_TIME') continue;
        const markets = buildDefaultMarkets(ev.idEvent, ev.strHomeTeam, ev.strAwayTeam, sportCode);
        live.push({
          id: ev.idEvent,
          providerEventId: ev.idEvent,
          name: ev.strEvent || `${ev.strHomeTeam} vs ${ev.strAwayTeam}`,
          sport: sportCode,
          leagueId: ev.idLeague,
          leagueName: ev.strLeague,
          homeTeamName: ev.strHomeTeam,
          awayTeamName: ev.strAwayTeam,
          homeScore: ev.intHomeScore != null ? Number(ev.intHomeScore) : 0,
          awayScore: ev.intAwayScore != null ? Number(ev.intAwayScore) : 0,
          minute,
          status,
          kickoffAt: ko,
          markets,
          updatedAt: new Date(),
        });
      }
      if (live.length === 0) {
        this.logger.debug('SportsDB live: none matched live filter, using mock fallback');
        return this.mockFallback.fetchLiveOdds(sport, league);
      }
      this.logger.log(`SportsDB live: returned ${live.length} events`);
      return live;
    } catch (err) {
      this.logger.error(`SportsDB fetchLiveOdds failed, fallback to mock: ${err instanceof Error ? err.message : String(err)}`);
      return this.mockFallback.fetchLiveOdds(sport, league);
    }
  }

  async fetchUpcomingEvents(sport?: string, league?: string, from?: Date, to?: Date): Promise<UpcomingEvent[]> {
    try {
      const leagues = this.selectLeagues(sport, league);
      const allEvents: SportsDBEvent[] = [];
      const results = await Promise.allSettled(leagues.map((l) => this.fetchEventsNextForLeague(l.id)));
      for (const r of results) {
        if (r.status === 'fulfilled') allEvents.push(...r.value);
      }
      if (allEvents.length === 0) {
        this.logger.debug('SportsDB upcoming: no events from API, using mock fallback');
        return this.mockFallback.fetchUpcomingEvents(sport, league, from, to);
      }
      const upcoming: UpcomingEvent[] = [];
      for (const ev of allEvents) {
        const ko = this.parseKickoff(ev.dateEvent, ev.strTime || '12:00:00');
        if (from && ko < from) continue;
        if (to && ko > to) continue;
        const sportCode = sportCodeFromSport(ev.strSport || DEFAULT_LEAGUES[0].sport);
        const { status } = this.mapStatus(ev.strStatus, ko);
        if (status === 'LIVE' || status === 'HALF_TIME') continue;
        const markets = buildDefaultMarkets(ev.idEvent, ev.strHomeTeam, ev.strAwayTeam, sportCode);
        upcoming.push({
          id: ev.idEvent,
          providerEventId: ev.idEvent,
          name: ev.strEvent || `${ev.strHomeTeam} vs ${ev.strAwayTeam}`,
          sport: sportCode,
          leagueId: ev.idLeague,
          leagueName: ev.strLeague,
          homeTeamName: ev.strHomeTeam,
          awayTeamName: ev.strAwayTeam,
          kickoffAt: ko,
          status: status === 'PRE_LIVE' ? 'PRE_LIVE' : 'PRE_MATCH',
          isTop: Math.random() < 0.2,
          isFeatured: false,
          markets,
        });
      }
      if (upcoming.length === 0) {
        this.logger.debug('SportsDB upcoming: none matched filter, using mock fallback');
        return this.mockFallback.fetchUpcomingEvents(sport, league, from, to);
      }
      upcoming.sort((a, b) => a.kickoffAt.getTime() - b.kickoffAt.getTime());
      this.logger.log(`SportsDB upcoming: returned ${upcoming.length} events`);
      return upcoming;
    } catch (err) {
      this.logger.error(`SportsDB fetchUpcomingEvents failed, fallback to mock: ${err instanceof Error ? err.message : String(err)}`);
      return this.mockFallback.fetchUpcomingEvents(sport, league, from, to);
    }
  }

  async fetchSettlementOutcome(eventId: string, selectionId: string): Promise<OddsSettlementOutcome> {
    try {
      const url = `${this.baseUrl}/lookupevent.php?id=${encodeURIComponent(eventId)}`;
      const data = await this.safeFetch<{ events: SportsDBEvent[] | null }>(url);
      const ev = data?.events?.[0];
      if (!ev || ev.intHomeScore == null || ev.intAwayScore == null) {
        this.logger.debug(`SportsDB settlement: event ${eventId} not finished, fallback`);
        return this.mockFallback.fetchSettlementOutcome(eventId, selectionId);
      }
      const finalScore = {
        home: Number(ev.intHomeScore),
        away: Number(ev.intAwayScore),
      };
      let result: SettlementResult = 'PENDING';
      const sLower = selectionId.toLowerCase();
      const isHome = sLower.includes('home') || sLower.includes('-s1') || selectionId.endsWith('s1');
      const isAway = sLower.includes('away') || sLower.includes('-s3') || selectionId.endsWith('s3');
      const isDraw = sLower.includes('draw') || sLower.includes('empate') || sLower.includes('-s2') || selectionId.endsWith('s2');
      if (finalScore.home > finalScore.away) {
        result = isHome ? 'WIN' : isAway || isDraw ? 'LOSE' : (Math.random() < 0.5 ? 'WIN' : 'LOSE');
      } else if (finalScore.home < finalScore.away) {
        result = isAway ? 'WIN' : isHome || isDraw ? 'LOSE' : (Math.random() < 0.5 ? 'WIN' : 'LOSE');
      } else {
        if (isDraw) result = 'WIN';
        else if (isHome || isAway) result = 'LOSE';
        else result = Math.random() < 0.5 ? 'WIN' : 'LOSE';
      }
      return {
        eventId,
        selectionId,
        result,
        settledAt: new Date(),
        finalScore,
      };
    } catch (err) {
      this.logger.error(`SportsDB fetchSettlementOutcome failed, fallback: ${err instanceof Error ? err.message : String(err)}`);
      return this.mockFallback.fetchSettlementOutcome(eventId, selectionId);
    }
  }

  async getSports(): Promise<Sport[]> {
    try {
      const prematch = await this.fetchUpcomingEvents();
      const live = await this.fetchLiveOdds();
      const unique = new Map<string, { code: string; type: SportType; name: string }>();
      for (const l of DEFAULT_LEAGUES) {
        const info = SPORT_MAP[l.sport] ?? { code: l.sportCode, type: SportType.FOOTBALL, name: l.sport };
        unique.set(info.code, info);
      }
      const out: Sport[] = [];
      let idx = 0;
      for (const info of unique.values()) {
        out.push({
          id: info.code,
          slug: info.code.toLowerCase(),
          name: info.name,
          sportType: info.type,
          active: true,
          featured: idx === 0,
          displayOrder: idx,
          iconUrl: null,
          colorHex: null,
          totalLiveEvents: live.filter((e) => e.sport === info.code).length,
          totalPrematchEvents: prematch.filter((e) => e.sport === info.code).length,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        idx++;
      }
      return out.length > 0 ? out : this.mockFallback.getSports();
    } catch (err) {
      this.logger.error(`SportsDB getSports failed, fallback: ${err instanceof Error ? err.message : String(err)}`);
      return this.mockFallback.getSports();
    }
  }

  async getLeagues(sport: string): Promise<League[]> {
    try {
      const prematch = await this.fetchUpcomingEvents(sport);
      const live = await this.fetchLiveOdds(sport);
      const apiLeagues = await this.fetchAllLeaguesFromApi();
      const selected = this.selectLeagues(sport);
      const merged = selected.length > 0 ? selected : apiLeagues
        .filter((l) => sportCodeFromSport(l.strSport || '') === sport || l.strSport === sport)
        .slice(0, 30)
        .map((l) => ({
          id: l.idLeague,
          name: l.strLeague,
          sport: l.strSport,
          sportCode: sportCodeFromSport(l.strSport || ''),
        }));
      if (merged.length === 0) return this.mockFallback.getLeagues(sport);
      return merged.map((l, idx) => ({
        id: l.id,
        sportId: sport,
        providerLeagueId: l.id,
        name: l.name,
        slug: l.name.toLowerCase().replace(/\s+/g, '-'),
        countryCode: null,
        tier: null,
        logoUrl: null,
        active: true,
        featured: idx === 0,
        displayOrder: idx,
        totalLiveEvents: live.filter((e) => e.leagueId === l.id).length,
        totalPrematchEvents: prematch.filter((e) => e.leagueId === l.id).length,
        createdAt: new Date(),
        updatedAt: new Date(),
      }));
    } catch (err) {
      this.logger.error(`SportsDB getLeagues failed, fallback: ${err instanceof Error ? err.message : String(err)}`);
      return this.mockFallback.getLeagues(sport);
    }
  }
}
