import { Injectable, Logger } from '@nestjs/common';
import type {
  Bet62Match,
  Bet62LiveEvent,
  Bet62Market,
  FootballStats,
} from '@bet62/shared';
import { GoalApiHttpClient } from './goalapi.http-client';
import {
  fixtureToBet62Match,
  statsToFootballStats,
  eventToBet62LiveEvent,
  commentaryToLastCommentary,
} from './goalapi.mapper';
import type {
  GoalApiCommentary as GoalApiCommentaryType,
  GoalApiStats as GoalApiStatsType,
} from './goalapi.types';

function buildEmptyOdds(): Record<string, Bet62Market> {
  return {};
}

@Injectable()
export class GoalApiDataAdapter {
  private readonly logger = new Logger(GoalApiDataAdapter.name);

  constructor(private readonly http: GoalApiHttpClient) {}

  async fetchLiveMatches(): Promise<Bet62Match[]> {
    try {
      this.logger.log(
        'fetchLiveMatches: obtenção de fixtures GOAL (sem odds, só dados/stats/settlement).',
      );
      const liveFixtures = await this.http.getLiveFixtures();
      const matches: Bet62Match[] = [];
      for (const f of liveFixtures) {
        try {
          matches.push(fixtureToBet62Match(f));
        } catch (err) {
          this.logger.verbose(
            `fetchLiveMatches mapper erro fixture=${f.id}: ${err instanceof Error ? err.message : String(err)}`,
          );
        }
      }
      return matches;
    } catch (err) {
      this.logger.warn(
        `fetchLiveMatches fallback vazio: ${err instanceof Error ? err.message : String(err)}`,
      );
      return [];
    }
  }

  async fetchUpcomingMatches(hours = 24): Promise<Bet62Match[]> {
    try {
      const days = Math.max(1, Math.ceil(hours / 24));
      const fixtures = await this.http.getUpcomingFixtures(days);
      const cutoff = new Date(Date.now() + hours * 60 * 60 * 1000);
      const matches: Bet62Match[] = [];
      for (const f of fixtures) {
        try {
          const m = fixtureToBet62Match(f);
          if (m.kickoffAt <= cutoff) {
            matches.push(m);
          }
        } catch (err) {
          this.logger.verbose(
            `fetchUpcomingMatches mapper erro fixture=${f.id}: ${err instanceof Error ? err.message : String(err)}`,
          );
        }
      }
      matches.sort((a, b) => a.kickoffAt.getTime() - b.kickoffAt.getTime());
      return matches;
    } catch (err) {
      this.logger.warn(
        `fetchUpcomingMatches fallback vazio: ${err instanceof Error ? err.message : String(err)}`,
      );
      return [];
    }
  }

  async fetchMatchState(fixtureId: string | number): Promise<{
    match: Bet62Match | null;
    stats: FootballStats | null;
    odds: Record<string, Bet62Market>;
    recentEvents: Bet62LiveEvent[];
    commentaries: GoalApiCommentaryType[];
    oddsEmptyReason: string;
    dataFreshnessOdds: { oddsAgeMs: Record<string, number>; stale: boolean };
  }> {
    const emptyOdds = buildEmptyOdds();
    const ODD_EMPTY_REASON =
      'Não usar odds da GOAL (~2min latência documentada no provider, latência não aceitavel para live odds betting). Odds SOT do futebol = PropLine; GOAL API é SOT apenas para dados/stats/settlement do futebol.';
    const defaultResult = {
      match: null,
      stats: null,
      odds: emptyOdds,
      recentEvents: [] as Bet62LiveEvent[],
      commentaries: [] as GoalApiCommentaryType[],
      oddsEmptyReason: ODD_EMPTY_REASON,
      dataFreshnessOdds: {
        oddsAgeMs: {} as Record<string, number>,
        stale: true,
      },
    };
    try {
      const fixturePromise = this.http.getFixtureById(fixtureId);
      const statsPromise = this.http.getStatisticsByFixture(fixtureId);
      const eventsPromise = this.http.getEventsByFixture(fixtureId);
      const commentariesPromise = this.http.getCommentariesByFixture(fixtureId);
      const [fixture, statsRaw, eventsRaw, commentariesRaw] =
        await Promise.all([
          fixturePromise,
          statsPromise,
          eventsPromise,
          commentariesPromise,
        ]);
      if (!fixture) {
        return defaultResult;
      }
      const match = fixtureToBet62Match(fixture);
      if (commentariesRaw && commentariesRaw.length > 0) {
        match.lastCommentary = commentaryToLastCommentary(
          commentariesRaw,
          fixtureId,
        );
      }
      const matchId = `goal:${fixtureId}`;
      const stats = statsRaw
        ? statsToFootballStats(statsRaw as GoalApiStatsType)
        : null;
      const recentEvents: Bet62LiveEvent[] = [];
      if (eventsRaw && eventsRaw.length > 0) {
        const sorted = [...eventsRaw].sort((a, b) => {
          const am = Number(a.minute ?? 0) + Number(a.extra_minute ?? 0);
          const bm = Number(b.minute ?? 0) + Number(b.extra_minute ?? 0);
          return bm - am;
        });
        for (const ev of sorted.slice(0, 50)) {
          try {
            recentEvents.push(eventToBet62LiveEvent(ev, matchId));
          } catch {
            /* */
          }
        }
      }
      this.logger.log(
        `fetchMatchState fixture=${fixtureId} SEM ODDS (apenas dados/stats/commentaries/settlement da GOAL).`,
      );
      return {
        match,
        stats,
        odds: emptyOdds,
        recentEvents,
        commentaries: commentariesRaw ?? [],
        oddsEmptyReason: ODD_EMPTY_REASON,
        dataFreshnessOdds: {
          oddsAgeMs: {},
          stale: true,
        },
      };
    } catch (err) {
      this.logger.verbose(
        `fetchMatchState(${fixtureId}) warning: ${err instanceof Error ? err.message : String(err)}`,
      );
      return defaultResult;
    }
  }

  async fetchLiveEvents(
    fixtureId: string | number,
  ): Promise<Bet62LiveEvent[]> {
    try {
      const matchId = `goal:${fixtureId}`;
      const events = await this.http.getEventsByFixture(fixtureId);
      const out: Bet62LiveEvent[] = [];
      for (const ev of events) {
        try {
          out.push(eventToBet62LiveEvent(ev, matchId));
        } catch {
          /* */
        }
      }
      return out;
    } catch (err) {
      this.logger.verbose(
        `fetchLiveEvents(${fixtureId}) warning: ${err instanceof Error ? err.message : String(err)}`,
      );
      return [];
    }
  }

  async fetchFootballStats(
    fixtureId: string | number,
  ): Promise<FootballStats | null> {
    try {
      const stats = await this.http.getStatisticsByFixture(fixtureId);
      if (!stats) return null;
      return statsToFootballStats(stats);
    } catch (err) {
      this.logger.verbose(
        `fetchFootballStats(${fixtureId}) warning: ${err instanceof Error ? err.message : String(err)}`,
      );
      return null;
    }
  }

  async fetchCommentaries(
    fixtureId: string | number,
  ): Promise<GoalApiCommentaryType[]> {
    try {
      return await this.http.getCommentariesByFixture(fixtureId);
    } catch (err) {
      this.logger.verbose(
        `fetchCommentaries(${fixtureId}) warning: ${err instanceof Error ? err.message : String(err)}`,
      );
      return [];
    }
  }
}
