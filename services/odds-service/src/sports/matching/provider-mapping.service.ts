import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { computeStableKey, resolveMatchConfidence } from './match-resolver';
import { GoalApiFixture } from '../../odds-provider/goalapi/goalapi.types';
import { ProplineEvent } from '../../odds-provider/propline/propline.types';

type GoalFixtureLite = {
  id: string | number;
  league?: { id?: string | number; name?: string } | null;
  home?: { id?: string | number; name?: string } | null;
  away?: { id?: string | number; name?: string } | null;
  date?: string | null;
  timestamp?: number | null;
  kickoff_at?: string | null;
};

type ProplineEventLite = {
  event_id: string;
  sport_key?: string;
  league_key?: string | null;
  home_team_key?: string;
  away_team_key?: string;
  home_team_name?: string | null;
  away_team_name?: string | null;
  start_date?: string;
};

@Injectable()
export class ProviderMappingService {
  constructor(private readonly prisma: PrismaService) {}

  async createOrUpdate(mappingPatch: {
    id?: string;
    sportCode: string;
    bet62MatchId?: string;
    stableKey: string;
    goalApiFixtureId?: string;
    goalApiLeagueId?: string;
    goalApiHomeTeamId?: string;
    goalApiAwayTeamId?: string;
    goalApiHomeName?: string;
    goalApiAwayName?: string;
    goalApiKickoffAt?: Date;
    proplineEventId?: string;
    proplineSportKey?: string;
    proplineLeagueKey?: string;
    proplineHomeKey?: string;
    proplineAwayKey?: string;
    proplineHomeName?: string;
    proplineAwayName?: string;
    proplineKickoffAt?: Date;
    confidence: number;
    confidenceSource: string;
    status?: string;
    locked?: boolean;
    metadata?: Record<string, unknown>;
  }) {
    const metadataCast = mappingPatch.metadata as unknown as never;
    const confidenceCast = mappingPatch.confidence as unknown as never;
    return this.prisma.providerMatchMapping.upsert({
      where: {
        sportCode_stableKey: {
          sportCode: mappingPatch.sportCode,
          stableKey: mappingPatch.stableKey,
        },
      },
      create: {
        ...mappingPatch,
        metadata: metadataCast,
        confidence: confidenceCast,
      },
      update: {
        ...mappingPatch,
        id: undefined,
        metadata: metadataCast,
        confidence: confidenceCast,
      },
    });
  }

  async findByGoalFixture(sport: string, fixtureId: string) {
    return this.prisma.providerMatchMapping.findFirst({
      where: { sportCode: sport, goalApiFixtureId: fixtureId },
    });
  }

  async findByProplineEvent(sport: string, eventId: string) {
    return this.prisma.providerMatchMapping.findFirst({
      where: { sportCode: sport, proplineEventId: eventId },
    });
  }

  async findByStableKey(sport: string, stableKey: string) {
    return this.prisma.providerMatchMapping.findUnique({
      where: {
        sportCode_stableKey: { sportCode: sport, stableKey },
      },
    });
  }

  async lock(id: string) {
    return this.prisma.providerMatchMapping.update({
      where: { id },
      data: { locked: true },
    });
  }

  async incrementMismatch(id: string) {
    return this.prisma.providerMatchMapping.update({
      where: { id },
      data: {
        mismatchCount: { increment: 1 },
        lastMismatchAt: new Date(),
      },
    });
  }

  async setReconciled(id: string) {
    return this.prisma.providerMatchMapping.update({
      where: { id },
      data: { reconciledAt: new Date(), status: 'reconciled' },
    });
  }

  async listPending(limit: number = 100) {
    return this.prisma.providerMatchMapping.findMany({
      where: { status: 'pending', locked: false },
      orderBy: { createdAt: 'asc' },
      take: limit,
    });
  }

  private extractGoalKickoff(goal: GoalFixtureLite | null): Date | null {
    if (!goal) return null;
    if (goal.kickoff_at) {
      const d = new Date(goal.kickoff_at);
      if (!isNaN(d.getTime())) return d;
    }
    if (goal.timestamp) {
      const d = new Date(goal.timestamp * 1000);
      if (!isNaN(d.getTime())) return d;
    }
    if (goal.date) {
      const d = new Date(goal.date);
      if (!isNaN(d.getTime())) return d;
    }
    return null;
  }

  private extractProplineKickoff(prop: ProplineEventLite | null): Date | null {
    if (!prop || !prop.start_date) return null;
    const d = new Date(prop.start_date);
    return isNaN(d.getTime()) ? null : d;
  }

  async resolveAndUpsertMapping(
    goal: GoalApiFixture | null,
    prop: ProplineEvent | null,
  ) {
    if (!goal && !prop) return null;

    const sportCode =
      prop?.sport_key?.toUpperCase() ||
      (goal ? 'FOOTBALL' : 'FOOTBALL');

    const goalLite: GoalFixtureLite | null = goal
      ? {
          id: String(goal.id),
          league: goal.league
            ? {
                id: goal.league.id !== undefined ? String(goal.league.id) : undefined,
                name: goal.league.name,
              }
            : null,
          home: goal.home
            ? {
                id: goal.home.id !== undefined ? String(goal.home.id) : undefined,
                name: goal.home.name,
              }
            : null,
          away: goal.away
            ? {
                id: goal.away.id !== undefined ? String(goal.away.id) : undefined,
                name: goal.away.name,
              }
            : null,
          date: goal.date || null,
          timestamp: goal.timestamp || null,
          kickoff_at: goal.kickoff_at || null,
        }
      : null;

    const propLite: ProplineEventLite | null = prop
      ? {
          event_id: prop.event_id,
          sport_key: prop.sport_key,
          league_key: prop.league_key || null,
          home_team_key: prop.home_team_key,
          away_team_key: prop.away_team_key,
          home_team_name: prop.home_team_name || null,
          away_team_name: prop.away_team_name || null,
          start_date: prop.start_date,
        }
      : null;

    const { score: confidence, source: confidenceSource } = resolveMatchConfidence(
      goalLite,
      propLite,
    );

    const homeName = goal?.home?.name || prop?.home_team_name || prop?.home_team_key || '';
    const awayName = goal?.away?.name || prop?.away_team_name || prop?.away_team_key || '';
    const kickoff =
      this.extractGoalKickoff(goalLite) ||
      this.extractProplineKickoff(propLite) ||
      new Date();

    const stableKey = computeStableKey(sportCode, homeName, awayName, kickoff);

    const goalKickoffAt = this.extractGoalKickoff(goalLite);
    const propKickoffAt = this.extractProplineKickoff(propLite);

    return this.prisma.providerMatchMapping.upsert({
      where: {
        sportCode_stableKey: { sportCode, stableKey },
      },
      create: {
        sportCode,
        stableKey,
        goalApiFixtureId: goal ? String(goal.id) : undefined,
        goalApiLeagueId: goal?.league?.id !== undefined ? String(goal.league.id) : undefined,
        goalApiHomeTeamId: goal?.home?.id !== undefined ? String(goal.home.id) : undefined,
        goalApiAwayTeamId: goal?.away?.id !== undefined ? String(goal.away.id) : undefined,
        goalApiHomeName: goal?.home?.name || undefined,
        goalApiAwayName: goal?.away?.name || undefined,
        goalApiKickoffAt: goalKickoffAt || undefined,
        proplineEventId: prop?.event_id || undefined,
        proplineSportKey: prop?.sport_key || undefined,
        proplineLeagueKey: prop?.league_key || undefined,
        proplineHomeKey: prop?.home_team_key || undefined,
        proplineAwayKey: prop?.away_team_key || undefined,
        proplineHomeName: prop?.home_team_name || undefined,
        proplineAwayName: prop?.away_team_name || undefined,
        proplineKickoffAt: propKickoffAt || undefined,
        confidence: confidence as unknown as never,
        confidenceSource,
      },
      update: {
        goalApiFixtureId: goal ? String(goal.id) : undefined,
        goalApiLeagueId: goal?.league?.id !== undefined ? String(goal.league.id) : undefined,
        goalApiHomeTeamId: goal?.home?.id !== undefined ? String(goal.home.id) : undefined,
        goalApiAwayTeamId: goal?.away?.id !== undefined ? String(goal.away.id) : undefined,
        goalApiHomeName: goal?.home?.name || undefined,
        goalApiAwayName: goal?.away?.name || undefined,
        goalApiKickoffAt: goalKickoffAt || undefined,
        proplineEventId: prop?.event_id || undefined,
        proplineSportKey: prop?.sport_key || undefined,
        proplineLeagueKey: prop?.league_key || undefined,
        proplineHomeKey: prop?.home_team_key || undefined,
        proplineAwayKey: prop?.away_team_key || undefined,
        proplineHomeName: prop?.home_team_name || undefined,
        proplineAwayName: prop?.away_team_name || undefined,
        proplineKickoffAt: propKickoffAt || undefined,
        confidence: confidence as unknown as never,
        confidenceSource,
      },
    });
  }
}
