import { Inject, Injectable, Logger } from '@nestjs/common';
import { SimpleCache } from '../common/simple-cache';
import {
  EventDetailQueryDto,
  LeagueQueryDto,
  LiveEventsQueryDto,
  MarketDto,
  MarketSelectionDto,
  PrematchEventsQueryDto,
  EventDto,
  LiveMatchUpdateDto,
} from '@bet62/shared';
import {
  EventStatus,
  MarketStatus,
  SportType,
} from '@bet62/shared';
import {
  ABSTRACT_ODDS_PROVIDER_TOKEN,
} from '../odds-provider/odds-provider.module';
import type {
  OddsProvider,
  ProviderEvent,
  ProviderEventDetail,
  ProviderMarket,
  ProviderMarketSelection,
} from '../odds-provider/odds-provider.interface';
import { AbstractOddsProvider } from '../odds-provider/abstract-odds-provider.service';
import type { LiveOddsEvent, UpcomingEvent } from '../odds-provider/abstract-odds-provider.service';
import { GoalApiOddsProviderService, GoalApiHttpClient, fixtureToBet62Match } from '../odds-provider/goalapi';
import { ProplineOddsProviderService } from '../odds-provider/propline';
import type { GoalApiFixture } from '../odds-provider/goalapi/goalapi.types';
import type { ProplineEvent } from '../odds-provider/propline/propline.types';
import { normalizeCompetitionName, normalizeTeamName, resolveTeamAlias } from '../sports/normalization/team-normalizer';
import { ProviderMappingService } from '../sports';

interface SportDto {
  id: string;
  code: string;
  name: string;
  active: boolean;
  orderIndex: number;
  iconUrl?: string | null;
  liveCount: number;
  prematchCount: number;
}

interface LeagueDto {
  id: string;
  providerLeagueId: string;
  name: string;
  sportCode: string;
  countryCode?: string | null;
  tier?: number | null;
  isTop?: boolean | null;
  liveCount: number;
  prematchCount: number;
}

@Injectable()
export class OddsService {
  private readonly logger = new Logger(OddsService.name);
  private readonly CACHE_PREMATCH_TTL_MS = 60_000;
  private readonly CACHE_LIVE_TTL_MS = 5_000;
  private readonly FOOTBALL_MAPPING_SYNC_MS = 60_000;
  private lastFootballMappingSyncAt = 0;

  constructor(
    @Inject(ABSTRACT_ODDS_PROVIDER_TOKEN)
    private readonly abstractProvider: AbstractOddsProvider,
    private readonly goalApiProvider: GoalApiOddsProviderService,
    private readonly goalApiHttpClient: GoalApiHttpClient,
    private readonly proplineProvider: ProplineOddsProviderService,
    private readonly providerMappingService: ProviderMappingService,
  ) {}

  private readonly cache = new SimpleCache();

  private get runtimeOddsProvider(): OddsProvider {
    return this.abstractProvider as unknown as OddsProvider;
  }

  private isGoaldirRuntimeProvider(): boolean {
    return String(this.abstractProvider.providerName ?? '').trim().toUpperCase() === 'GOALDIR';
  }

  private isFootballSportCode(value?: string | SportType | null): boolean {
    const raw = String(value ?? '').trim().toUpperCase();
    return (
      raw === 'FOOTBALL' ||
      raw === 'SOCCER' ||
      raw === 'FUTEBOL' ||
      raw.includes('FOOTBALL') ||
      raw.includes('SOCCER')
    );
  }

  private isFootballEventId(eventId: string): boolean {
    return String(eventId || '').startsWith('goal:');
  }

  private splitSportsFilter(
    sports?: SportType[],
  ): { hasFilter: boolean; wantsFootball: boolean; otherSports: SportType[] } {
    if (!sports || sports.length === 0) {
      return { hasFilter: false, wantsFootball: true, otherSports: [] };
    }
    const wantsFootball = sports.some((sport) => this.isFootballSportCode(sport));
    const otherSports = sports.filter((sport) => !this.isFootballSportCode(sport));
    return { hasFilter: true, wantsFootball, otherSports };
  }

  private resolveFootballLeagueFilter(leagueIds?: string[]): string | undefined {
    const league = leagueIds?.[0];
    if (!league) return undefined;
    return String(league).replace(/^league-goal-/i, '');
  }

  private getSourcesForSport(sportCode?: string | SportType | null) {
    if (this.isGoaldirRuntimeProvider()) {
      return {
        data: 'goaldir',
        stats: 'goaldir',
        odds: 'goaldir',
        settlement: 'goaldir',
      };
    }
    if (this.isFootballSportCode(sportCode)) {
      return {
        data: 'goal_api',
        stats: 'goal_api',
        odds: 'propline',
        settlement: 'goal_api',
      };
    }
    return {
      data: 'propline',
      stats: 'propline',
      odds: 'propline',
      settlement: 'propline',
    };
  }

  private buildDataFreshness(ev: ProviderEvent) {
    const updatedAt = ev.liveUpdatedAt ?? ev.kickoffAt ?? null;
    const ageMs = updatedAt ? Math.max(0, Date.now() - updatedAt.getTime()) : null;
    return {
      dataSource: this.isGoaldirRuntimeProvider()
        ? 'goaldir'
        : this.isFootballSportCode(ev.sportCode)
          ? 'goal_api'
          : 'propline',
      scoreAgeMs: ageMs,
      clockAgeMs: ageMs,
      statsAgeMs: this.isGoaldirRuntimeProvider() || this.isFootballSportCode(ev.sportCode) ? ageMs : null,
      oddsAgeMs: {},
      stale: ageMs !== null ? ageMs > 90_000 : false,
    };
  }

  private listFootballPropLineCandidates(): Promise<ProviderEvent[]> {
    return Promise.all([
      this.proplineProvider.getPrematchEvents({ sports: [SportType.FOOTBALL], limit: 2000 }),
      this.proplineProvider.getLiveEvents({ sports: [SportType.FOOTBALL], limit: 2000 }),
    ]).then(([prematch, live]) => [...prematch.events, ...live.events]);
  }

  private findBestFootballCandidate(
    fixture: GoalApiFixture,
    candidates: ProviderEvent[],
  ): { candidate: ProviderEvent | null; score: number } {
    let best: ProviderEvent | null = null;
    let bestScore = 0;
    for (const candidate of candidates) {
      const score = this.scoreFootballCandidate(fixture, candidate);
      if (score > bestScore) {
        bestScore = score;
        best = candidate;
      }
    }
    return { candidate: best, score: bestScore };
  }

  private toProplineMappingEvent(candidate: ProviderEvent): ProplineEvent {
    const [maybeSportKey, maybeEventId] = String(candidate.id ?? '').split(':', 2);
    const sportKey = maybeEventId ? maybeSportKey : 'soccer';
    const eventId = candidate.providerEventId ?? (maybeEventId || maybeSportKey || candidate.id);
    const teamKey = (name?: string) =>
      normalizeTeamName(name ?? '')
        .replace(/[^a-z0-9]+/g, '_')
        .replace(/^_+|_+$/g, '') || undefined;
    return {
      id: eventId,
      event_id: eventId,
      sport_key: sportKey,
      league_key: candidate.leagueId ?? null,
      home_team_key: teamKey(candidate.homeTeamName),
      away_team_key: teamKey(candidate.awayTeamName),
      home_team_name: candidate.homeTeamName ?? null,
      away_team_name: candidate.awayTeamName ?? null,
      start_date: candidate.kickoffAt?.toISOString?.() ?? undefined,
      status: candidate.status === 'LIVE' || candidate.status === 'HALF_TIME' ? 'in_progress' : 'scheduled',
    };
  }

  private async persistFootballMapping(
    fixture: GoalApiFixture,
    candidate: ProviderEvent,
    score: number,
  ): Promise<void> {
    if (score < 0.85) return;
    try {
      await this.providerMappingService.resolveAndUpsertMapping(
        fixture,
        this.toProplineMappingEvent(candidate),
      );
    } catch (err) {
      this.logger.warn(
        `Falha ao persistir mapping futebol ${fixture.id} -> ${candidate.id}: ${
          err instanceof Error ? err.message : String(err)
        }`,
      );
    }
  }

  private scheduleFootballMappingSync(): void {
    const now = Date.now();
    if (now - this.lastFootballMappingSyncAt < this.FOOTBALL_MAPPING_SYNC_MS) return;
    this.lastFootballMappingSyncAt = now;
    void this.syncFootballMappings().catch((err) => {
      this.logger.warn(
        `Falha ao sincronizar mappings futebol: ${err instanceof Error ? err.message : String(err)}`,
      );
    });
  }

  private async syncFootballMappings(): Promise<void> {
    const [upcomingFixtures, liveFixtures, candidates] = await Promise.all([
      this.goalApiHttpClient.getUpcomingFixtures(3),
      this.goalApiHttpClient.getLiveFixtures(),
      this.listFootballPropLineCandidates(),
    ]);
    const fixtures = [...liveFixtures, ...upcomingFixtures];
    await Promise.allSettled(
      fixtures.map(async (fixture) => {
        const { candidate, score } = this.findBestFootballCandidate(fixture, candidates);
        if (!candidate) return;
        await this.persistFootballMapping(fixture, candidate, score);
      }),
    );
  }

  private toProviderEventFromUpcoming(event: UpcomingEvent): ProviderEvent {
    return {
      id: event.id,
      providerEventId: event.providerEventId ?? event.id,
      name: event.name,
      sportCode: event.sport ?? SportType.FOOTBALL,
      leagueId: event.leagueId ?? 'league-goal-unknown',
      leagueName: event.leagueName ?? 'Liga Desconhecida',
      homeTeamName: event.homeTeamName,
      awayTeamName: event.awayTeamName,
      status: event.status,
      kickoffAt: event.kickoffAt,
      isTop: event.isTop,
      isFeatured: event.isFeatured,
      marketsCount: event.markets?.length ?? 0,
      markets: [],
    };
  }

  private toProviderEventFromLive(event: LiveOddsEvent): ProviderEvent {
    return {
      id: event.id,
      providerEventId: event.providerEventId ?? event.id,
      name: event.name,
      sportCode: event.sport ?? SportType.FOOTBALL,
      leagueId: event.leagueId ?? 'league-goal-unknown',
      leagueName: event.leagueName ?? 'Liga Desconhecida',
      homeTeamName: event.homeTeamName,
      awayTeamName: event.awayTeamName,
      homeScore: event.homeScore,
      awayScore: event.awayScore,
      minuteOfMatch: event.minute,
      status: event.status,
      kickoffAt: event.kickoffAt ?? new Date(),
      liveUpdatedAt: event.updatedAt,
      marketsCount: event.markets?.length ?? 0,
      markets: [],
    };
  }

  private goalFixtureKickoff(fixture: GoalApiFixture): Date {
    const koUtc = fixture.kickoffUtc as string | undefined;
    if (koUtc) {
      const d = new Date(String(koUtc));
      if (Number.isFinite(d.getTime())) return d;
    }
    if (fixture.matchDate && typeof fixture.matchDate === 'string') {
      const combined = fixture.matchTime
        ? `${fixture.matchDate}T${String(fixture.matchTime).padStart(5, '0')}:00.000Z`
        : `${fixture.matchDate}T00:00:00.000Z`;
      const d = new Date(combined);
      if (Number.isFinite(d.getTime())) return d;
      const d2 = new Date(String(fixture.matchDate));
      if (Number.isFinite(d2.getTime())) return d2;
    }
    if (typeof fixture.timestamp === 'number' && Number.isFinite(fixture.timestamp)) {
      return new Date(fixture.timestamp * 1000);
    }
    if (fixture.kickoff_at) {
      const d = new Date(fixture.kickoff_at);
      if (Number.isFinite(d.getTime())) return d;
    }
    if (fixture.date) {
      const d = new Date(fixture.date);
      if (Number.isFinite(d.getTime())) return d;
    }
    return new Date();
  }

  private mapMatchStatus(status?: string | null): ProviderEvent['status'] {
    const raw = String(status ?? '').trim().toLowerCase();
    if (raw === 'in_progress' || raw === 'live' || raw === 'playing' || raw === 'ongoing') return 'LIVE';
    if (raw === 'halftime' || raw === 'half_time') return 'HALF_TIME';
    if (raw === 'final' || raw === 'ended' || raw === 'finished' || raw === 'completed') return 'FINISHED';
    if (raw === 'suspended') return 'SUSPENDED';
    if (raw === 'postponed') return 'POSTPONED';
    if (raw === 'cancelled' || raw === 'canceled') return 'CANCELLED';
    return 'PRE_MATCH';
  }

  private buildFootballDetailFromFixture(fixture: GoalApiFixture): ProviderEventDetail {
    const match = fixtureToBet62Match(fixture);
    return {
      id: match.id,
      providerEventId: String(match.providers.goalApi?.fixtureId ?? fixture.id),
      name: `${match.homeTeam.name} vs ${match.awayTeam.name}`,
      sportCode: SportType.FOOTBALL,
      leagueId: `league-goal-${String(match.league.id ?? fixture.league?.id ?? 'unknown')}`,
      leagueName: match.league.name,
      homeTeamId: match.homeTeam.id !== null && match.homeTeam.id !== undefined ? String(match.homeTeam.id) : undefined,
      awayTeamId: match.awayTeam.id !== null && match.awayTeam.id !== undefined ? String(match.awayTeam.id) : undefined,
      homeTeamName: match.homeTeam.name,
      awayTeamName: match.awayTeam.name,
      homeScore: match.score.home ?? undefined,
      awayScore: match.score.away ?? undefined,
      status: this.mapMatchStatus(match.score.status),
      kickoffAt: match.kickoffAt,
      liveUpdatedAt: match.updatedAt,
      minuteOfMatch: match.clock.minute ?? undefined,
      liveStreamAvailable: false,
      isTop: false,
      isFeatured: false,
      marketsCount: 0,
      markets: [],
    };
  }

  private scoreFootballCandidate(fixture: GoalApiFixture, candidate: ProviderEvent): number {
    const homeNested = fixture.home as { id?: unknown; name?: unknown; badge?: unknown; logo?: unknown } | undefined;
    const awayNested = fixture.away as { id?: unknown; name?: unknown; badge?: unknown; logo?: unknown } | undefined;
    const homeTeamAlt = fixture.homeTeam as { id?: unknown; name?: unknown; badge?: unknown; logo?: unknown } | undefined;
    const awayTeamAlt = fixture.awayTeam as { id?: unknown; name?: unknown; badge?: unknown; logo?: unknown } | undefined;
    const goalHome = resolveTeamAlias(
      normalizeTeamName(
        String(
          (fixture.homeTeamName as string | undefined) ??
            homeNested?.name ??
            homeTeamAlt?.name ??
            '',
        ),
      ),
    );
    const goalAway = resolveTeamAlias(
      normalizeTeamName(
        String(
          (fixture.awayTeamName as string | undefined) ??
            awayNested?.name ??
            awayTeamAlt?.name ??
            '',
        ),
      ),
    );
    const candidateHome = resolveTeamAlias(normalizeTeamName(candidate.homeTeamName ?? ''));
    const candidateAway = resolveTeamAlias(normalizeTeamName(candidate.awayTeamName ?? ''));
    const sameTeams =
      (goalHome === candidateHome && goalAway === candidateAway) ||
      (goalHome === candidateAway && goalAway === candidateHome);
    if (!sameTeams) return 0;
    let score = 0.6;
    const leagueAlt = fixture.league as { id?: unknown; name?: unknown; logo?: unknown; country_code?: unknown; country?: unknown } | undefined;
    const goalLeague = normalizeCompetitionName(
      String((fixture.leagueName as string | undefined) ?? leagueAlt?.name ?? ''),
    );
    const candidateLeague = normalizeCompetitionName(candidate.leagueName ?? '');
    if (goalLeague && candidateLeague && goalLeague === candidateLeague) {
      score += 0.2;
    }
    const kickoffDiffHours = Math.abs(
      this.goalFixtureKickoff(fixture).getTime() - candidate.kickoffAt.getTime(),
    ) / (60 * 60 * 1000);
    if (kickoffDiffHours <= 6) score += 0.2;
    else if (kickoffDiffHours <= 12) score += 0.1;
    else score -= 0.2;
    return score;
  }

  private async findFootballPropLineDetail(
    fixture: GoalApiFixture,
    includeMarkets: boolean,
  ): Promise<ProviderEventDetail | null> {
    const candidates = await this.listFootballPropLineCandidates();
    const { candidate, score } = this.findBestFootballCandidate(fixture, candidates);
    if (!candidate || score < 0.65) return null;
    await this.persistFootballMapping(fixture, candidate, score);
    return this.proplineProvider.getEventDetail(candidate.id, includeMarkets);
  }

  private async getMappedFootballPropLineDetail(
    fixtureId: string,
    includeMarkets: boolean,
  ): Promise<ProviderEventDetail | null> {
    const mapping = await this.providerMappingService.findByGoalFixture('FOOTBALL', fixtureId);
    if (!mapping?.proplineEventId || !mapping.proplineSportKey) return null;
    try {
      return await this.proplineProvider.getEventDetail(
        `${mapping.proplineSportKey}:${mapping.proplineEventId}`,
        includeMarkets,
      );
    } catch (err) {
      this.logger.debug(
        `Mapping futebol ${fixtureId} -> ${mapping.proplineEventId} inválido: ${
          err instanceof Error ? err.message : String(err)
        }`,
      );
      return null;
    }
  }

  private mergeFootballDetail(
    base: ProviderEventDetail,
    propDetail: ProviderEventDetail | null,
  ): ProviderEventDetail {
    if (!propDetail) return base;
    return {
      ...base,
      markets: propDetail.markets ?? [],
      marketsCount: propDetail.markets?.length ?? 0,
      liveStreamAvailable: propDetail.liveStreamAvailable ?? base.liveStreamAvailable,
      liveUpdatedAt: propDetail.liveUpdatedAt ?? base.liveUpdatedAt,
    };
  }

  private async getFootballEventDetail(
    eventId: string,
    includeMarkets: boolean,
  ): Promise<ProviderEventDetail | null> {
    if (!this.isFootballEventId(eventId)) return null;
    const fixtureId = eventId.replace(/^goal:/, '');
    const fixture = await this.goalApiHttpClient.getFixtureById(fixtureId);
    if (!fixture) return null;
    const base = this.buildFootballDetailFromFixture(fixture);
    if (!includeMarkets) return base;
    const mappedDetail = await this.getMappedFootballPropLineDetail(fixtureId, true);
    if (mappedDetail) return this.mergeFootballDetail(base, mappedDetail);
    const propDetail = await this.findFootballPropLineDetail(fixture, true);
    return this.mergeFootballDetail(base, propDetail);
  }

  private matchEventDedupeKey(ev: ProviderEvent): string {
    const home = resolveTeamAlias(normalizeTeamName(ev.homeTeamName ?? ''));
    const away = resolveTeamAlias(normalizeTeamName(ev.awayTeamName ?? ''));
    const [h, a] = home < away ? [home, away] : [away, home];
    const sport = this.isFootballSportCode(ev.sportCode) ? 'FOOTBALL' : String(ev.sportCode ?? '').toUpperCase();
    return `${sport}:${h}:${a}`;
  }

  private enrichGoalEventsWithPropLineMarkets(
    goalEvents: ProviderEvent[],
    proplineFootballEvents: ProviderEvent[],
  ): void {
    if (!goalEvents.length || !proplineFootballEvents.length) return;
    const byKey = new Map<string, ProviderEvent>();
    for (const ev of proplineFootballEvents) {
      const k = this.matchEventDedupeKey(ev);
      if (!k || byKey.has(k)) continue;
      byKey.set(k, ev);
    }
    for (const goal of goalEvents) {
      if ((goal.marketsCount ?? 0) > 0) continue;
      const prop = byKey.get(this.matchEventDedupeKey(goal));
      if (!prop) continue;
      const koDiffHrs =
        Math.abs(goal.kickoffAt.getTime() - prop.kickoffAt.getTime()) / (60 * 60 * 1000);
      if (koDiffHrs > 6) continue;
      goal.markets = prop.markets ?? [];
      goal.marketsCount = prop.markets?.length ?? 0;
      goal.liveStreamAvailable = prop.liveStreamAvailable ?? goal.liveStreamAvailable;
      goal.liveUpdatedAt = prop.liveUpdatedAt ?? goal.liveUpdatedAt;
    }
  }

  private deduplicateMergedEvents(allEvents: ProviderEvent[]): ProviderEvent[] {
    const byKey = new Map<string, ProviderEvent>();
    for (const ev of allEvents) {
      const key = this.matchEventDedupeKey(ev);
      if (!key) {
        byKey.set(`_id:${String(ev.id ?? Math.random())}`, ev);
        continue;
      }
      const existing = byKey.get(key);
      if (!existing) {
        byKey.set(key, ev);
        continue;
      }
      const evKo = ev.kickoffAt?.getTime() ?? 0;
      const exKo = existing.kickoffAt?.getTime() ?? 0;
      if (Math.abs(evKo - exKo) / (60 * 60 * 1000) > 6) {
        byKey.set(`_id:${String(ev.id ?? Math.random())}`, ev);
        continue;
      }
      const exMc = existing.marketsCount ?? 0;
      const evMc = ev.marketsCount ?? 0;
      const exIsGoal = this.isFootballEventId(String(existing.id ?? ''));
      const evIsGoal = this.isFootballEventId(String(ev.id ?? ''));
      if (evMc > exMc) {
        if (evIsGoal || !exIsGoal) {
          byKey.set(key, ev);
        } else {
          existing.markets = ev.markets ?? existing.markets;
          existing.marketsCount = ev.marketsCount ?? existing.marketsCount;
          existing.liveStreamAvailable = ev.liveStreamAvailable ?? existing.liveStreamAvailable;
          existing.liveUpdatedAt = ev.liveUpdatedAt ?? existing.liveUpdatedAt;
        }
      } else if (evMc === exMc && evIsGoal && !exIsGoal) {
        byKey.set(key, ev);
      }
    }
    return Array.from(byKey.values());
  }

  private async collectPrematchProviderEvents(
    query: PrematchEventsQueryDto,
  ): Promise<ProviderEvent[]> {
    if (this.isGoaldirRuntimeProvider()) {
      const result = await this.runtimeOddsProvider.getPrematchEvents({
        ...query,
        page: 1,
        limit: 2000,
      });
      return [...result.events].sort((a, b) => a.kickoffAt.getTime() - b.kickoffAt.getTime());
    }
    const split = this.splitSportsFilter(query.sports);
    const out: ProviderEvent[] = [];
    let goalPrematchFootball: ProviderEvent[] = [];
    let proplinePrematchAll: ProviderEvent[] = [];
    if (!split.hasFilter || split.wantsFootball) {
      this.scheduleFootballMappingSync();
      const football = await this.goalApiProvider.fetchUpcomingEvents(
        'FOOTBALL',
        this.resolveFootballLeagueFilter(query.leagueIds),
        query.fromDate,
        query.toDate,
      );
      goalPrematchFootball = football.map((event) => this.toProviderEventFromUpcoming(event));
      out.push(...goalPrematchFootball);
    }
    if (!split.hasFilter || split.otherSports.length > 0) {
      const result = await this.proplineProvider.getPrematchEvents({
        ...query,
        sports: split.hasFilter ? split.otherSports : undefined,
        page: 1,
        limit: 2000,
      });
      proplinePrematchAll = result.events;
      out.push(...proplinePrematchAll);
    }
    const proplineFootball = (!split.hasFilter || split.wantsFootball)
      ? proplinePrematchAll.filter((event) => this.isFootballSportCode(event.sportCode))
      : [];
    this.enrichGoalEventsWithPropLineMarkets(goalPrematchFootball, proplineFootball);
    let filtered = this.deduplicateMergedEvents(out);
    if (query.topEventsOnly) filtered = filtered.filter((event) => !!event.isTop);
    if (query.onlyWithLiveStream) filtered = filtered.filter((event) => !!event.liveStreamAvailable);
    if (query.searchTerm) {
      const term = query.searchTerm.toLowerCase();
      filtered = filtered.filter(
        (event) =>
          event.name.toLowerCase().includes(term) ||
          event.leagueName.toLowerCase().includes(term),
      );
    }
    filtered.sort((a, b) => a.kickoffAt.getTime() - b.kickoffAt.getTime());
    return filtered;
  }

  private async collectLiveProviderEvents(
    query: LiveEventsQueryDto,
  ): Promise<ProviderEvent[]> {
    if (this.isGoaldirRuntimeProvider()) {
      const result = await this.runtimeOddsProvider.getLiveEvents({
        ...query,
        page: 1,
        limit: 2000,
      });
      return [...result.events].sort((a, b) => a.kickoffAt.getTime() - b.kickoffAt.getTime());
    }
    const split = this.splitSportsFilter(query.sports);
    const out: ProviderEvent[] = [];
    let goalLiveFootball: ProviderEvent[] = [];
    let proplineLiveAll: ProviderEvent[] = [];
    if (!split.hasFilter || split.wantsFootball) {
      this.scheduleFootballMappingSync();
      const football = await this.goalApiProvider.fetchLiveOdds(
        'FOOTBALL',
        this.resolveFootballLeagueFilter(query.leagueIds),
      );
      goalLiveFootball = football.map((event) => this.toProviderEventFromLive(event));
      out.push(...goalLiveFootball);
    }
    if (!split.hasFilter || split.otherSports.length > 0) {
      const result = await this.proplineProvider.getLiveEvents({
        ...query,
        sports: split.hasFilter ? split.otherSports : undefined,
        page: 1,
        limit: 2000,
      });
      proplineLiveAll = result.events;
      out.push(...proplineLiveAll);
    }
    const proplineFootball = (!split.hasFilter || split.wantsFootball)
      ? proplineLiveAll.filter((event) => this.isFootballSportCode(event.sportCode))
      : [];
    this.enrichGoalEventsWithPropLineMarkets(goalLiveFootball, proplineFootball);
    let filtered = this.deduplicateMergedEvents(out);
    if (query.onlyWithLiveStream) filtered = filtered.filter((event) => !!event.liveStreamAvailable);
    if (query.onlyWithActiveMarkets) {
      filtered = filtered.filter(
        (event) => this.isFootballSportCode(event.sportCode) || (event.marketsCount ?? 0) > 0,
      );
    }
    filtered.sort((a, b) => a.kickoffAt.getTime() - b.kickoffAt.getTime());
    return filtered;
  }

  private paginateEvents<T>(events: T[], page = 1, limit = 50): { items: T[]; total: number } {
    const safePage = Math.max(1, page);
    const safeLimit = Math.max(1, limit);
    const start = (safePage - 1) * safeLimit;
    return {
      items: events.slice(start, start + safeLimit),
      total: events.length,
    };
  }

  private key(parts: Array<string | number | boolean | undefined>): string {
    return `odds:${parts.filter((p) => p !== undefined && p !== null).join(':')}`;
  }

  private async withProviderOnly<T>(
    operationName: string,
    fn: () => Promise<T>,
  ): Promise<T> {
    try {
      return await fn();
    } catch (err) {
      this.logger.error(
        `${operationName} falhou no provider (${this.abstractProvider.providerName}). Sem fallback. Erro: ${
          err instanceof Error ? err.message : String(err)
        }`,
      );
      throw err;
    }
  }

  private async getRuntimeEventDetail(
    eventId: string,
    includeMarkets: boolean,
  ): Promise<ProviderEventDetail | null> {
    if (this.isGoaldirRuntimeProvider()) {
      return this.runtimeOddsProvider.getEventDetail(eventId, includeMarkets);
    }
    return this.isFootballEventId(eventId)
      ? this.getFootballEventDetail(eventId, includeMarkets)
      : this.proplineProvider.getEventDetail(eventId, includeMarkets);
  }

  async getSports(): Promise<SportDto[]> {
    return this.withProviderOnly(
      'getSports',
      async () => {
        const cacheKey = this.key(['sports']);
        const cached = (await this.cache.get(cacheKey)) as SportDto[];
        if (cached) return cached;
        if (this.isGoaldirRuntimeProvider()) {
          const [providerSports, prematch, live] = await Promise.all([
            this.abstractProvider.getSports(),
            this.collectPrematchProviderEvents({ limit: 2000 }),
            this.collectLiveProviderEvents({ limit: 2000 }),
          ]);
          const result: SportDto[] = providerSports.map((sp, idx) => {
            const sportCode = String(sp.sportType ?? sp.id);
            const prematchCount = prematch.filter(
              (event) => event.sportCode === sportCode || event.sportCode === sp.id,
            ).length;
            const liveCount = live.filter(
              (event) => event.sportCode === sportCode || event.sportCode === sp.id,
            ).length;
            return {
              id: sp.id,
              code: sportCode,
              name: sp.name,
              active: sp.active !== false,
              orderIndex: sp.displayOrder ?? idx,
              iconUrl: sp.iconUrl ?? null,
              liveCount,
              prematchCount,
            };
          });
          await this.cache.set(cacheKey, result, this.CACHE_PREMATCH_TTL_MS / 1000);
          return result;
        }
        const [goalSports, proplineSports, prematch, live] = await Promise.all([
          this.goalApiProvider.getSports(),
          this.proplineProvider.getSports(),
          this.collectPrematchProviderEvents({ limit: 2000 }),
          this.collectLiveProviderEvents({ limit: 2000 }),
        ]);
        const sps = [
          ...goalSports.filter((sport) => this.isFootballSportCode(sport.sportType ?? sport.id)),
          ...proplineSports.filter((sport) => !this.isFootballSportCode(sport.sportType ?? sport.id)),
        ];
        const result: SportDto[] = sps.map((sp, idx) => {
          const prematchCount = prematch.filter((e) => e.sportCode === sp.id || e.sportCode === sp.sportType).length;
          const liveCount = live.filter((e) => e.sportCode === sp.id || e.sportCode === sp.sportType).length;
          return {
            id: sp.id,
            code: sp.sportType?.toString() ?? sp.id,
            name: sp.name,
            active: sp.active !== false,
            orderIndex: sp.displayOrder ?? idx,
            iconUrl: sp.iconUrl ?? null,
            liveCount,
            prematchCount,
          };
        });
        await this.cache.set(cacheKey, result, this.CACHE_PREMATCH_TTL_MS / 1000);
        return result;
      },
    );
  }

  async getLeagues(query: LeagueQueryDto): Promise<LeagueDto[]> {
    return this.withProviderOnly(
      'getLeagues',
      async () => {
        const cacheKey = this.key(['leagues', JSON.stringify(query)]);
        const cached = (await this.cache.get(cacheKey)) as LeagueDto[];
        if (cached) return cached;
        const sport = query.sportType?.toString();
        let leagues;
        if (this.isGoaldirRuntimeProvider()) {
          const sportCodes = sport
            ? [sport]
            : Array.from(
                new Set(
                  (await this.abstractProvider.getSports()).map((sp) =>
                    String(sp.sportType ?? sp.id),
                  ),
                ),
              );
          const groups = await Promise.all(
            sportCodes.map(async (sportCode) => {
              const providerLeagues = await this.abstractProvider.getLeagues(sportCode);
              return providerLeagues.map((league) => ({
                id: league.providerLeagueId || league.id,
                providerLeagueId: league.providerLeagueId || league.id,
                name: league.name,
                sportCode,
                countryCode: league.countryCode ?? undefined,
                tier: league.tier ? Number(league.tier) : undefined,
                isTop: !!league.featured,
              }));
            }),
          );
          leagues = Array.from(
            new Map(
              groups
                .flat()
                .map((league) => [`${league.sportCode}:${league.providerLeagueId}`, league]),
            ).values(),
          );
        } else if (sport && this.isFootballSportCode(sport)) {
          const fromGoal = await this.goalApiProvider.getLeagues('FOOTBALL');
          leagues = fromGoal.map((l) => ({
            id: `league-goal-${l.providerLeagueId || l.id}`,
            providerLeagueId: l.providerLeagueId || l.id,
            name: l.name,
            sportCode: SportType.FOOTBALL,
            countryCode: l.countryCode ?? undefined,
            tier: l.tier ? Number(l.tier) : undefined,
            isTop: !!l.featured,
          }));
        } else if (sport) {
          leagues = await this.proplineProvider.getActiveLeagues(query.sportType);
        } else {
          const [footballLeagues, otherLeagues] = await Promise.all([
            this.goalApiProvider.getLeagues('FOOTBALL'),
            this.proplineProvider.getActiveLeagues(undefined),
          ]);
          leagues = [
            ...footballLeagues.map((l) => ({
              id: `league-goal-${l.providerLeagueId || l.id}`,
              providerLeagueId: l.providerLeagueId || l.id,
              name: l.name,
              sportCode: SportType.FOOTBALL,
              countryCode: l.countryCode ?? undefined,
              tier: l.tier ? Number(l.tier) : undefined,
              isTop: !!l.featured,
            })),
            ...otherLeagues.filter((league) => !this.isFootballSportCode(league.sportCode)),
          ];
        }
        const prematch = await this.collectPrematchProviderEvents({
          limit: 2000,
          sports: query.sportType ? [query.sportType] : undefined,
        });
        const live = await this.collectLiveProviderEvents({
          limit: 2000,
          sports: query.sportType ? [query.sportType] : undefined,
        });
        let filtered = leagues;
        if (query.onlyTop) {
          filtered = filtered.filter((l) => !!l.isTop);
        }
        const result: LeagueDto[] = filtered.map((l) => ({
          ...l,
          id: this.isFootballSportCode(l.sportCode) ? `league-goal-${l.providerLeagueId}` : l.providerLeagueId,
          liveCount: live.filter((e) => e.leagueId === l.providerLeagueId || e.leagueId === l.id).length,
          prematchCount: prematch.filter((e) => e.leagueId === l.providerLeagueId || e.leagueId === l.id).length,
        }));
        if (query.limit) result.length = Math.min(result.length, query.limit);
        await this.cache.set(cacheKey, result, this.CACHE_PREMATCH_TTL_MS / 1000);
        return result;
      },
    );
  }

  async getPrematchEvents(query: PrematchEventsQueryDto): Promise<{ events: EventDto[]; total: number; page: number; limit: number }> {
    return this.withProviderOnly(
      'getPrematchEvents',
      async () => {
        const cacheKey = this.key(['prematch', JSON.stringify(query)]);
        const cached = (await this.cache.get(cacheKey)) as { events: EventDto[]; total: number; page: number; limit: number };
        if (cached) return cached;
        const page = query.page ?? 1;
        const limit = query.limit ?? 50;
        const collected = await this.collectPrematchProviderEvents(query);
        const { items, total } = this.paginateEvents(collected, page, limit);
        const dtos = items.map((ev) => this.buildEventDto(ev));
        const result = { events: dtos, total, page, limit };
        await this.cache.set(cacheKey, result, this.CACHE_PREMATCH_TTL_MS / 1000);
        return result;
      },
    );
  }

  async getLiveEvents(query: LiveEventsQueryDto): Promise<{ events: EventDto[]; total: number; page: number; limit: number }> {
    return this.withProviderOnly(
      'getLiveEvents',
      async () => {
        const cacheKey = this.key(['live', JSON.stringify(query)]);
        const cached = (await this.cache.get(cacheKey)) as { events: EventDto[]; total: number; page: number; limit: number };
        if (cached) return cached;
        const page = query.page ?? 1;
        const limit = query.limit ?? 50;
        const collected = await this.collectLiveProviderEvents(query);
        const { items, total } = this.paginateEvents(collected, page, limit);
        const dtos = items.map((ev) => this.mergeLiveScoreboardIntoEvent(this.buildEventDto(ev), ev));
        const result = { events: dtos, total, page, limit };
        await this.cache.set(cacheKey, result, this.CACHE_LIVE_TTL_MS / 1000);
        return result;
      },
    );
  }

  async getEventDetail(_query: EventDetailQueryDto, eventId: string): Promise<EventDto & { markets: MarketDto[] } | null> {
    return this.withProviderOnly(
      'getEventDetail',
      async () => {
        const cacheKey = this.key(['event', eventId]);
        const cached = (await this.cache.get(cacheKey)) as EventDto & { markets: MarketDto[] };
        if (cached) return cached;
        const detail = await this.getRuntimeEventDetail(eventId, true);
        if (!detail) return null;
        const ttl = detail.status === 'LIVE' || detail.status === 'HALF_TIME' ? this.CACHE_LIVE_TTL_MS : this.CACHE_PREMATCH_TTL_MS;
        const base = this.buildEventDto(detail);
        const withLive = this.mergeLiveScoreboardIntoEvent(base, detail);
        const markets = this.formatMarketSelections(detail.markets ?? []);
        const result = { ...withLive, markets };
        await this.cache.set(cacheKey, result, ttl / 1000);
        return result;
      },
    );
  }

  async getEventMarkets(eventId: string): Promise<MarketDto[]> {
    return this.withProviderOnly(
      'getEventMarkets',
      async () => {
        const cacheKey = this.key(['event', eventId, 'markets']);
        const cached = (await this.cache.get(cacheKey)) as MarketDto[];
        if (cached) return cached;
        const detail = await this.getRuntimeEventDetail(eventId, true);
        if (!detail) return [];
        const ttl = detail.status === 'LIVE' || detail.status === 'HALF_TIME' ? this.CACHE_LIVE_TTL_MS : this.CACHE_PREMATCH_TTL_MS;
        const result = this.formatMarketSelections(detail.markets ?? []);
        await this.cache.set(cacheKey, result, ttl / 1000);
        return result;
      },
    );
  }

  formatMarketSelections(markets: ProviderMarket[]): MarketDto[] {
    return markets.map((m: ProviderMarket): MarketDto => {
      const selections: MarketSelectionDto[] = m.selections.map((s: ProviderMarketSelection) => ({
        id: s.id,
        name: s.name,
        outcome: s.outcome,
        odds: s.odds,
        status: s.status ?? MarketStatus.ACTIVE,
        handicapValue: s.handicapValue,
        totalLineValue: s.totalLineValue,
      }));
      return {
        id: m.id,
        type: m.type,
        name: m.displayedName ?? m.name,
        status: m.status ?? MarketStatus.ACTIVE,
        handicapValue: m.handicapValue ? Number(m.handicapValue) : undefined,
        totalLineValue: m.totalLineValue ? Number(m.totalLineValue) : undefined,
        specifiers: m.specifiers ? JSON.stringify(m.specifiers) : undefined,
        selections,
      };
    });
  }

  buildEventDto(ev: ProviderEvent): EventDto {
    const sources = this.getSourcesForSport(ev.sportCode);
    return {
      id: ev.id,
      matchId: ev.id,
      sportType: (ev.sportCode as SportType) ?? SportType.FOOTBALL,
      name: ev.name,
      homeTeamName: ev.homeTeamName,
      awayTeamName: ev.awayTeamName,
      leagueId: ev.leagueId,
      leagueName: ev.leagueName,
      status: (ev.status as unknown as EventStatus) ?? EventStatus.PRE_MATCH,
      kickoffAt: ev.kickoffAt,
      liveUpdatedAt: ev.liveUpdatedAt,
      liveStreamAvailable: ev.liveStreamAvailable,
      marketsCount: ev.marketsCount,
      providerEventId: ev.providerEventId,
      sources,
      primaryOddsSource: sources.odds,
      primaryStatsSource: sources.stats,
      dataFreshness: this.buildDataFreshness(ev),
    };
  }

  mergeLiveScoreboardIntoEvent(dto: EventDto, ev: ProviderEvent): EventDto {
    const isLive = dto.status === EventStatus.LIVE || dto.status === EventStatus.HALF_TIME;
    if (!isLive && !ev.homeScore && !ev.awayScore && !ev.minuteOfMatch) return dto;
    return {
      ...dto,
      liveScoreJson: {
        home: ev.homeScore ?? 0,
        away: ev.awayScore ?? 0,
        homeHalf: ev.homeHalfScore ?? null,
        awayHalf: ev.awayHalfScore ?? null,
      },
      liveClockJson: {
        minute: ev.minuteOfMatch ?? null,
        injuryMinutes: ev.injuryMinutes ?? null,
        status: dto.status,
      },
    };
  }

  async getLiveSnapshot(eventId: string): Promise<LiveMatchUpdateDto | null> {
    return this.withProviderOnly(
      'getLiveSnapshot',
      async () => {
        const detail = await this.getRuntimeEventDetail(eventId, false);
        if (!detail) return null;
        return {
          eventId,
          status: (detail.status as unknown as EventStatus) ?? EventStatus.PRE_MATCH,
          scoreBoard: {
            home: detail.homeScore ?? 0,
            away: detail.awayScore ?? 0,
            homeHalf: detail.homeHalfScore,
            awayHalf: detail.awayHalfScore,
          },
          matchClock: {
            minute: detail.minuteOfMatch,
            injuryMinutes: detail.injuryMinutes,
          },
          updatedAt: detail.liveUpdatedAt ?? new Date(),
        };
      },
    );
  }

  async getAllLiveEventIds(): Promise<string[]> {
    return this.withProviderOnly(
      'getAllLiveEventIds',
      async () => {
        const events = await this.collectLiveProviderEvents({ limit: 2000 });
        return events.map((e) => e.id);
      },
    );
  }
}
