import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { LiveMatchStateRedisService } from './live-match-state.redis';
import type { FootballStats } from '@bet62/shared';

export type StatsProviderName = 'GOAL_API' | 'PROPLINE' | 'GOALDIR' | 'SPORTSDB' | 'MOCK';

@Injectable()
export class StatsEngine {
  constructor(
    private readonly prisma: PrismaService,
    private readonly liveState: LiveMatchStateRedisService,
  ) {}

  async processStats(
    matchId: string,
    football: FootballStats | null,
    timestamp: Date,
    source: StatsProviderName,
    extras?: {
      commentaryLastText?: string | null;
      commentaryLastZone?: string | null;
      commentarySide?: string | null;
      mappingId?: string | null;
      sportCode?: string;
      minuteOfMatch?: number | null;
      period?: string | null;
      rawPayload?: Record<string, unknown> | null;
      timestampProvider?: Date | null;
    },
  ): Promise<boolean> {
    const sportCode = extras?.sportCode || 'FOOTBALL';

    const snapshotData: Record<string, unknown> = {
      bet62MatchId: matchId,
      sportCode,
      provider: source,
      minuteOfMatch: extras?.minuteOfMatch ?? null,
      period: extras?.period ?? null,
      mappingId: extras?.mappingId ?? null,
      commentaryLastText: extras?.commentaryLastText ?? null,
      commentaryLastZone: extras?.commentaryLastZone ?? null,
      commentarySide: extras?.commentarySide ?? null,
      timestampProvider: extras?.timestampProvider ?? null,
      rawPayload: extras?.rawPayload ?? null,
    };

    if (football) {
      snapshotData.possessionHome = football.possessionHome;
      snapshotData.possessionAway = football.possessionAway;
      snapshotData.shotsHome = football.shotsHome;
      snapshotData.shotsAway = football.shotsAway;
      snapshotData.shotsOnTargetHome = football.shotsOnTargetHome;
      snapshotData.shotsOnTargetAway = football.shotsOnTargetAway;
      snapshotData.cornersHome = football.cornersHome;
      snapshotData.cornersAway = football.cornersAway;
      snapshotData.foulsHome = football.foulsHome;
      snapshotData.foulsAway = football.foulsAway;
      snapshotData.offsidesHome = football.offsidesHome;
      snapshotData.offsidesAway = football.offsidesAway;
      snapshotData.yellowCardsHome = football.yellowCardsHome;
      snapshotData.yellowCardsAway = football.yellowCardsAway;
      snapshotData.redCardsHome = football.redCardsHome;
      snapshotData.redCardsAway = football.redCardsAway;
      snapshotData.savesHome = football.savesHome;
      snapshotData.savesAway = football.savesAway;
      snapshotData.xgHome = football.xgHome;
      snapshotData.xgAway = football.xgAway;
    }

    await this.prisma.matchStatsSnapshot.create({
      data: snapshotData as never,
    });

    if (matchId) {
      await this.liveState.updatePartial(matchId, {
        stats: football,
        dataFreshness: {
          dataSource: source.toLowerCase() as never,
          scoreAgeMs: null,
          clockAgeMs: null,
          statsAgeMs: Math.max(0, Date.now() - timestamp.getTime()),
          oddsAgeMs: {},
          stale: false,
        },
      });
    }

    return true;
  }
}
