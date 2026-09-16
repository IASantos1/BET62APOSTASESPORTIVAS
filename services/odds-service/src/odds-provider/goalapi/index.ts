import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SportType, type League, type Sport } from '@bet62/shared';
import {
  AbstractOddsProvider,
  LiveOddsEvent,
  LiveOddsMarket,
  LiveOddsSelection,
  OddsSettlementOutcome,
  SettlementResult,
  UpcomingEvent,
} from '../abstract-odds-provider.service';
import { GoalApiHttpClient } from './goalapi.http-client';
import { GoalApiDataAdapter } from './goalapi.adapter';
import { fixtureToBet62Match } from './goalapi.mapper';
import type { GoalApiFixture } from './goalapi.types';

const FOOTBALL_SPORT_ID = 'sport-football';

function buildEmptyLiveOddsMarkets(): LiveOddsMarket[] {
  return [];
}

@Injectable()
export class GoalApiOddsProviderService extends AbstractOddsProvider {
  override readonly providerName = 'GOAL_API';

  private readonly http: GoalApiHttpClient;
  private readonly adapter: GoalApiDataAdapter;

  constructor(private readonly configService: ConfigService) {
    super();
    this.http = new GoalApiHttpClient(configService);
    this.adapter = new GoalApiDataAdapter(this.http);
  }

  getSourceOfTruthPerSport(): Record<string, 'goal_api' | 'propline' | 'mock'> {
    return {
      FOOTBALL: 'goal_api',
      SOCCER: 'goal_api',
      FUTEBOL: 'goal_api',
    };
  }

  async getSports(): Promise<Sport[]> {
    try {
      let liveCount = 0;
      let prematchCount = 0;
      try {
        const live = await this.http.getLiveFixtures();
        liveCount = live.length;
      } catch {
        liveCount = 0;
      }
      try {
        const upcoming = await this.http.getUpcomingFixtures(7);
        prematchCount = upcoming.length;
      } catch {
        prematchCount = 0;
      }
      return [
        {
          id: FOOTBALL_SPORT_ID,
          createdAt: new Date(),
          updatedAt: new Date(),
          slug: 'football',
          name: 'Futebol',
          nameTranslations: { en: 'Football', pt: 'Futebol' },
          sportType: SportType.FOOTBALL,
          providerSportId: 'GOAL_API:football',
          active: true,
          featured: true,
          displayOrder: 1,
          iconUrl: null,
          colorHex: '#22c55e',
          totalLiveEvents: liveCount,
          totalPrematchEvents: prematchCount,
          metadata: { sourceOfTruth: 'goal_api' },
        },
      ];
    } catch (err) {
      this.logger.verbose(
        `fetchSports fallback: ${err instanceof Error ? err.message : String(err)}`,
      );
      return [
        {
          id: FOOTBALL_SPORT_ID,
          createdAt: new Date(),
          updatedAt: new Date(),
          slug: 'football',
          name: 'Futebol',
          sportType: SportType.FOOTBALL,
          active: true,
          featured: true,
          displayOrder: 1,
          totalLiveEvents: 0,
          totalPrematchEvents: 0,
        },
      ];
    }
  }

  async getLeagues(sport: string): Promise<League[]> {
    try {
      const sp = (sport || '').toUpperCase();
      if (
        sp !== 'FOOTBALL' &&
        sp !== 'SOCCER' &&
        sp !== 'FUTEBOL' &&
        sp !== FOOTBALL_SPORT_ID &&
        sport !== FOOTBALL_SPORT_ID
      ) {
        return [];
      }
      const fixtures = await this.http.getUpcomingFixtures(7);
      const seen = new Map<string, League>();
      for (const f of fixtures) {
        const lg = f.league;
        if (!lg) continue;
        const key = String(lg.id);
        if (!key || seen.has(key)) continue;
        seen.set(key, {
          id: `league-goal-${key}`,
          createdAt: new Date(),
          updatedAt: new Date(),
          sportId: FOOTBALL_SPORT_ID,
          providerLeagueId: key,
          externalId: key,
          name: lg.name ?? `League ${key}`,
          slug: String(lg.name ?? key)
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '') || `league-${key}`,
          countryCode: lg.country_code ?? lg.country ?? null,
          logoUrl: lg.logo ?? null,
          active: true,
          featured: false,
          displayOrder: 100,
          totalLiveEvents: 0,
          totalPrematchEvents: 0,
          season: lg.season ? String(lg.season) : null,
          metadata: { round: lg.round ?? null },
        });
      }
      try {
        const live = await this.http.getLiveFixtures();
        for (const f of live) {
          const lg = f.league;
          if (!lg) continue;
          const key = String(lg.id);
          if (!key) continue;
          const existing = seen.get(key);
          if (existing) {
            existing.totalLiveEvents = (existing.totalLiveEvents ?? 0) + 1;
          } else {
            seen.set(key, {
              id: `league-goal-${key}`,
              createdAt: new Date(),
              updatedAt: new Date(),
              sportId: FOOTBALL_SPORT_ID,
              providerLeagueId: key,
              name: lg.name ?? `League ${key}`,
              slug: `league-${key}`,
              countryCode: lg.country_code ?? lg.country ?? null,
              logoUrl: lg.logo ?? null,
              active: true,
              featured: false,
              displayOrder: 100,
              totalLiveEvents: 1,
              totalPrematchEvents: 0,
              season: lg.season ? String(lg.season) : null,
            });
          }
        }
      } catch {
        /* */
      }
      return Array.from(seen.values());
    } catch (err) {
      this.logger.verbose(
        `getLeagues(${sport}) fallback vazio: ${err instanceof Error ? err.message : String(err)}`,
      );
      return [];
    }
  }

  private resolveSportArg(sport?: string): boolean {
    if (!sport) return true;
    const s = sport.trim().toUpperCase();
    return (
      s === 'FOOTBALL' ||
      s === 'SOCCER' ||
      s === 'FUTEBOL' ||
      s.includes('FOOTBALL') ||
      s.includes('SOCCER')
    );
  }

  async fetchUpcomingEvents(
    sport?: string,
    league?: string,
    from?: Date,
    to?: Date,
  ): Promise<UpcomingEvent[]> {
    try {
      if (!this.resolveSportArg(sport)) return [];
      const fromDate = from ?? new Date();
      const toDate = to ?? new Date(Date.now() + 24 * 60 * 60 * 1000);
      const hours = Math.max(
        1,
        Math.ceil((toDate.getTime() - fromDate.getTime()) / (60 * 60 * 1000)),
      );
      const matches = await this.adapter.fetchUpcomingMatches(hours);
      const leagueKey = league?.trim().toLowerCase();
      const out: UpcomingEvent[] = [];
      for (const m of matches) {
        if (m.kickoffAt < fromDate || m.kickoffAt > toDate) continue;
        if (leagueKey) {
          const lgName = String(m.league.name ?? '').toLowerCase();
          const lgId = String(m.league.id ?? '').toLowerCase();
          if (lgName !== leagueKey && lgId !== leagueKey) continue;
        }
        out.push({
          id: m.id,
          providerEventId: String(m.providers.goalApi?.fixtureId ?? ''),
          name: `${m.homeTeam.name} vs ${m.awayTeam.name}`,
          sport: 'FOOTBALL',
          leagueId: `league-goal-${m.league.id ?? ''}`,
          leagueName: m.league.name ?? '',
          homeTeamName: m.homeTeam.name,
          awayTeamName: m.awayTeam.name,
          kickoffAt: m.kickoffAt,
          status: 'PRE_MATCH',
          isTop: false,
          isFeatured: false,
          markets: [],
        });
      }
      return out;
    } catch (err) {
      this.logger.warn(
        `fetchUpcomingEvents fallback vazio: ${err instanceof Error ? err.message : String(err)}`,
      );
      return [];
    }
  }

  async fetchLiveOdds(
    sport?: string,
    league?: string,
  ): Promise<LiveOddsEvent[]> {
    try {
      if (!this.resolveSportArg(sport)) return [];
      this.logger.log(
        'fetchLiveOdds GOAL API: SEM ODDS (~2min latência documentada no provider não é aceitavel para live betting). Devolver eventos live sem markets. Usar PropLine como odds SOT para futebol.',
      );
      const liveMatches = await this.adapter.fetchLiveMatches();
      const leagueKey = league?.trim().toLowerCase();
      const out: LiveOddsEvent[] = [];
      for (const m of liveMatches) {
        if (leagueKey) {
          const lgName = String(m.league.name ?? '').toLowerCase();
          const lgId = String(m.league.id ?? '').toLowerCase();
          if (lgName !== leagueKey && lgId !== leagueKey) continue;
        }
        const scoreHome =
          typeof m.score.home === 'number' ? m.score.home : undefined;
        const scoreAway =
          typeof m.score.away === 'number' ? m.score.away : undefined;
        const statusRaw = m.score.status;
        let status: LiveOddsEvent['status'] = 'LIVE';
        if (statusRaw === 'halftime') status = 'HALF_TIME';
        else if (statusRaw === 'suspended') status = 'SUSPENDED';
        const markets: LiveOddsMarket[] = buildEmptyLiveOddsMarkets();
        out.push({
          id: m.id,
          providerEventId: String(m.providers.goalApi?.fixtureId ?? ''),
          name: `${m.homeTeam.name} vs ${m.awayTeam.name}`,
          sport: 'FOOTBALL',
          leagueId: `league-goal-${m.league.id ?? ''}`,
          leagueName: m.league.name ?? '',
          homeTeamName: m.homeTeam.name,
          awayTeamName: m.awayTeam.name,
          homeScore: scoreHome,
          awayScore: scoreAway,
          minute:
            typeof m.clock.minute === 'number' ? m.clock.minute : undefined,
          status,
          kickoffAt: m.kickoffAt,
          markets,
          updatedAt: m.updatedAt,
        });
      }
      return out;
    } catch (err) {
      this.logger.warn(
        `fetchLiveOdds fallback vazio: ${err instanceof Error ? err.message : String(err)}`,
      );
      return [];
    }
  }

  async fetchSettlementOutcome(
    eventId: string,
    selectionId: string,
  ): Promise<OddsSettlementOutcome> {
    const pending: OddsSettlementOutcome = {
      eventId,
      selectionId,
      result: 'PENDING',
    };
    try {
      const fixturePart = eventId.replace(/^goal:/, '');
      let fixture: GoalApiFixture | null = null;
      try {
        fixture = await this.http.getFixtureById(fixturePart);
      } catch {
        fixture = null;
      }
      if (!fixture) {
        return pending;
      }
      const statusFinal =
        fixture.status === 'FT' ||
        fixture.status === 'AET' ||
        fixture.status === 'PEN' ||
        fixture.status === 'CANC';
      if (!statusFinal) return pending;
      const mapped = fixtureToBet62Match(fixture);
      const home = typeof mapped.score.home === 'number' ? mapped.score.home : 0;
      const away = typeof mapped.score.away === 'number' ? mapped.score.away : 0;
      if (fixture.status === 'CANC') {
        return {
          ...pending,
          result: 'VOID',
          settledAt: new Date(),
          finalScore: { home, away },
          voidReason: 'GOAL fixture CANCELLED',
        };
      }
      let result: SettlementResult = 'PENDING';
      const selLower = String(selectionId || '').toLowerCase();
      const isHome =
        selLower.includes(':home') ||
        selLower.endsWith(':1') ||
        selLower.includes(':1:') ||
        /(^|[-_:])(1|home|casa|principal)($|[-_:])/i.test(selLower);
      const isAway =
        selLower.includes(':away') ||
        selLower.endsWith(':2') ||
        selLower.includes(':2:') ||
        /(^|[-_:])(2|away|fora|visitante)($|[-_:])/i.test(selLower);
      const isDraw =
        selLower.includes(':draw') ||
        selLower.includes(':x:') ||
        selLower.endsWith(':x') ||
        /(^|[-_:])(x|draw|empate)($|[-_:])/i.test(selLower);
      const isOver =
        selLower.includes(':over') || selLower.includes(':mais') || /over|mais/i.test(selLower);
      const isUnder =
        selLower.includes(':under') || selLower.includes(':menos') || /under|menos/i.test(selLower);
      const isYes =
        selLower.includes(':yes') ||
        selLower.includes(':sim') ||
        (selLower.includes('btts') && /(^|[-_:])(y|yes|sim)($|[-_:])/i.test(selLower)) ||
        /btts.*(yes|sim)|(yes|sim).*btts/i.test(selLower);
      const isNo =
        selLower.includes(':no') ||
        selLower.includes(':nao') ||
        (selLower.includes('btts') && /(^|[-_:])(n|no|nao)($|[-_:])/i.test(selLower)) ||
        /btts.*(no|nao)|(no|nao).*btts/i.test(selLower);
      if (home > away) {
        if (isHome) result = 'WIN';
        else if (isAway || isDraw) result = 'LOSE';
      } else if (home < away) {
        if (isAway) result = 'WIN';
        else if (isHome || isDraw) result = 'LOSE';
      } else {
        if (isDraw) result = 'WIN';
        else if (isHome || isAway) result = 'LOSE';
      }
      if ((isOver || isUnder) && !isNaN(home) && !isNaN(away)) {
        const goals = home + away;
        const lineMatch = selLower.match(/(\d+)[_.](\d+)/);
        if (lineMatch) {
          const line = Number(`${lineMatch[1]}.${lineMatch[2]}`);
          if (!Number.isNaN(line)) {
            if (isOver) result = goals > line ? 'WIN' : 'LOSE';
            if (isUnder) result = goals < line ? 'WIN' : 'LOSE';
          }
        } else {
          const singleLine = selLower.match(/total[_-]?(\d+(?:\.\d+)?)/i);
          if (singleLine) {
            const line = Number(singleLine[1]);
            if (!Number.isNaN(line)) {
              if (isOver) result = goals > line ? 'WIN' : 'LOSE';
              if (isUnder) result = goals < line ? 'WIN' : 'LOSE';
            }
          }
        }
      }
      if (isYes || isNo) {
        const bothScore = home > 0 && away > 0;
        if (isYes) result = bothScore ? 'WIN' : 'LOSE';
        if (isNo) result = !bothScore ? 'WIN' : 'LOSE';
      }
      const settledAtRaw =
        (fixture.last_updated_at as string) ||
        (fixture.date as string) ||
        undefined;
      let settledAt: Date | undefined = mapped.updatedAt;
      if (settledAtRaw) {
        try {
          const d = new Date(settledAtRaw);
          if (Number.isFinite(d.getTime())) settledAt = d;
        } catch {
          /* */
        }
      }
      return {
        ...pending,
        result,
        settledAt,
        finalScore: { home, away },
      };
    } catch (err) {
      this.logger.verbose(
        `fetchSettlementOutcome(${eventId}, ${selectionId}) warning: ${err instanceof Error ? err.message : String(err)}`,
      );
      return pending;
    }
  }
}

export { GoalApiHttpClient } from './goalapi.http-client';
export { GoalApiWsClient } from './goalapi.ws-client';
export { GoalApiWebhookService } from './goalapi.webhook';
export { GoalApiDataAdapter } from './goalapi.adapter';
export * from './goalapi.types';
export * from './goalapi.mapper';
