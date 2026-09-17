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

const SPORT_MAP: Record<string, { code: string; type: SportType; name: string }> = {
  Soccer: { code: 'FOOTBALL', type: SportType.FOOTBALL, name: 'Futebol' },
  Football: { code: 'FOOTBALL', type: SportType.FOOTBALL, name: 'Futebol' },
  Basketball: { code: 'BASKETBALL', type: SportType.BASKETBALL, name: 'Basquete' },
  Tennis: { code: 'TENNIS', type: SportType.TENNIS, name: 'Tênis' },
};

function sportCodeFromSport(sport: string): string {
  return SPORT_MAP[sport]?.code ?? sport.toUpperCase();
}

@Injectable()
export class SportsDbOddsProviderService extends AbstractOddsProvider {
  override readonly providerName = 'THESPORTSDB';

  private readonly apiKey: string;
  private readonly baseUrl: string;

  constructor() {
    super();
    this.apiKey = process.env.SPORTSDB_API_KEY || TEST_KEY;
    this.baseUrl = String(process.env.SPORTSDB_BASE_URL ?? SPORTSDB_BASE ?? '')
      .trim()
      .replace(/[,;\s]+$/g, '')
      .replace(/\/+$/g, '');
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

  private async selectLeagues(sport?: string, league?: string): Promise<Array<{id: string; name: string; sport: string; sportCode: string;}>> {
    const apiLeagues = await this.fetchAllLeaguesFromApi();
    const normalised = apiLeagues.map((l) => ({
      id: l.idLeague,
      name: l.strLeague,
      sport: l.strSport,
      sportCode: sportCodeFromSport(l.strSport || ''),
    }));
    return normalised.filter((l) => this.leagueFilterMatches(sport, league, l));
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
      const leagues = await this.selectLeagues(sport, league);
      const allEvents: SportsDBEvent[] = [];
      const results = await Promise.allSettled(leagues.map((l) => this.fetchEventsLastForLeague(l.id)));
      for (const r of results) {
        if (r.status === 'fulfilled') allEvents.push(...r.value);
      }
      if (allEvents.length === 0) {
        this.logger.debug('SportsDB live: no events from API');
        return [];
      }
      const live: LiveOddsEvent[] = [];
      const now = Date.now();
      for (const ev of allEvents) {
        const ko = this.parseKickoff(ev.dateEvent, ev.strTime || '12:00:00');
        const elapsedMs = now - ko.getTime();
        if (elapsedMs < -1800_000 || elapsedMs > 4 * 3600_000) continue;
        const sportCode = sportCodeFromSport(ev.strSport || '');
        const { status, minute } = this.mapStatus(ev.strStatus, ko);
        if (status !== 'LIVE' && status !== 'HALF_TIME') continue;
        const markets: LiveOddsMarket[] = [];
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
      this.logger.log(`SportsDB live: returned ${live.length} events`);
      return live;
    } catch (err) {
      this.logger.error(`SportsDB fetchLiveOdds failed: ${err instanceof Error ? err.message : String(err)}`);
      throw err;
    }
  }

  async fetchUpcomingEvents(sport?: string, league?: string, from?: Date, to?: Date): Promise<UpcomingEvent[]> {
    try {
      const leagues = await this.selectLeagues(sport, league);
      const allEvents: SportsDBEvent[] = [];
      const results = await Promise.allSettled(leagues.map((l) => this.fetchEventsNextForLeague(l.id)));
      for (const r of results) {
        if (r.status === 'fulfilled') allEvents.push(...r.value);
      }
      if (allEvents.length === 0) {
        this.logger.debug('SportsDB upcoming: no events from API');
        return [];
      }
      const upcoming: UpcomingEvent[] = [];
      for (const ev of allEvents) {
        const ko = this.parseKickoff(ev.dateEvent, ev.strTime || '12:00:00');
        if (from && ko < from) continue;
        if (to && ko > to) continue;
        const sportCode = sportCodeFromSport(ev.strSport || '');
        const { status } = this.mapStatus(ev.strStatus, ko);
        if (status === 'LIVE' || status === 'HALF_TIME') continue;
        const markets: LiveOddsMarket[] = [];
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
          isTop: false,
          isFeatured: false,
          markets,
        });
      }
      upcoming.sort((a, b) => a.kickoffAt.getTime() - b.kickoffAt.getTime());
      this.logger.log(`SportsDB upcoming: returned ${upcoming.length} events`);
      return upcoming;
    } catch (err) {
      this.logger.error(`SportsDB fetchUpcomingEvents failed: ${err instanceof Error ? err.message : String(err)}`);
      throw err;
    }
  }

  async fetchSettlementOutcome(eventId: string, selectionId: string): Promise<OddsSettlementOutcome> {
    try {
      const url = `${this.baseUrl}/lookupevent.php?id=${encodeURIComponent(eventId)}`;
      const data = await this.safeFetch<{ events: SportsDBEvent[] | null }>(url);
      const ev = data?.events?.[0];
      if (!ev || ev.intHomeScore == null || ev.intAwayScore == null) {
        this.logger.debug(`SportsDB settlement: event ${eventId} not finished or missing scores`);
        const pending: SettlementResult = 'PENDING';
        return {
          eventId,
          selectionId,
          result: pending,
          settledAt: undefined,
          finalScore: undefined,
        };
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
        result = isHome ? 'WIN' : isAway || isDraw ? 'LOSE' : 'PENDING';
      } else if (finalScore.home < finalScore.away) {
        result = isAway ? 'WIN' : isHome || isDraw ? 'LOSE' : 'PENDING';
      } else {
        if (isDraw) result = 'WIN';
        else if (isHome || isAway) result = 'LOSE';
      }
      return {
        eventId,
        selectionId,
        result,
        settledAt: new Date(),
        finalScore,
      };
    } catch (err) {
      this.logger.error(`SportsDB fetchSettlementOutcome failed: ${err instanceof Error ? err.message : String(err)}`);
      throw err;
    }
  }

  async getSports(): Promise<Sport[]> {
    try {
      const prematch = await this.fetchUpcomingEvents();
      const live = await this.fetchLiveOdds();
      const merged = await this.selectLeagues();
      const unique = new Map<string, { code: string; type: SportType; name: string }>();
      for (const l of merged) {
        const info = SPORT_MAP[l.sport] ?? { code: l.sportCode, type: SportType.FOOTBALL, name: l.sportCode };
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
      return out;
    } catch (err) {
      this.logger.error(`SportsDB getSports failed: ${err instanceof Error ? err.message : String(err)}`);
      throw err;
    }
  }

  async getLeagues(sport: string): Promise<League[]> {
    try {
      const prematch = await this.fetchUpcomingEvents(sport);
      const live = await this.fetchLiveOdds(sport);
      const apiLeagues = await this.fetchAllLeaguesFromApi();
      const selected = await this.selectLeagues(sport);
      const merged = selected.length > 0 ? selected : apiLeagues
        .filter((l) => sportCodeFromSport(l.strSport || '') === sport || l.strSport === sport)
        .slice(0, 30)
        .map((l) => ({
          id: l.idLeague,
          name: l.strLeague,
          sport: l.strSport,
          sportCode: sportCodeFromSport(l.strSport || ''),
        }));
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
      this.logger.error(`SportsDB getLeagues failed: ${err instanceof Error ? err.message : String(err)}`);
      throw err;
    }
  }
}
