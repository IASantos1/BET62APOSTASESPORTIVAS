import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { FootballSettlementService } from './football-settlement';
import type { FootballSettlementOutcome } from './football-settlement';
import { OtherSportsSettlementService } from './other-sports-settlement';
import type { OtherSportSettlementOutcome } from './other-sports-settlement';
import { SPORTS_PROVIDER_CONFIG } from '@bet62/shared';

type SettlementProvider = 'GOAL_API' | 'PROPLINE';

type SettlementMatchResult =
  | 'HOME'
  | 'DRAW'
  | 'AWAY'
  | 'CANCELLED'
  | 'POSTPONED'
  | 'PENDING';

interface SettledSelection {
  selectionId: string;
  outcome: 'WON' | 'LOST' | 'VOID';
}

interface SettledMarket {
  marketCode: string;
  settledSelections: SettledSelection[];
}

export interface SettlementOutcome {
  result: SettlementMatchResult;
  settledBy: SettlementProvider;
  settledAt: Date;
  finalScore: { home: number; away: number } | null;
  markets: SettledMarket[];
  sport: string;
  matchId: string;
}

const FOOTBALL_KEYS: readonly string[] = [
  'FOOTBALL',
  'SOCCER',
  'FUTEBOL',
  'FUTBOL',
  'CALCIO',
  'FUSSBALL',
  'SPORT-FOOTBALL',
];

function isFootballSport(sport: string | undefined | null): boolean {
  if (!sport) return false;
  const s = String(sport).trim().toUpperCase().replace(/_/g, '');
  for (const k of FOOTBALL_KEYS) {
    const nk = k.replace(/_/g, '');
    if (s === nk || s.includes(nk)) return true;
  }
  return false;
}

function normaliseSport(sport: string | undefined | null): string {
  if (!sport) return 'OTHER';
  const s = String(sport).trim().toUpperCase();
  if (FOOTBALL_KEYS.some((k) => s === k || s.includes(k))) return 'FOOTBALL';
  return s;
}

function mapToSettlementOutcome(
  matchId: string,
  sport: string,
  fo: FootballSettlementOutcome | OtherSportSettlementOutcome,
): SettlementOutcome {
  return {
    result: fo.result,
    settledBy: fo.settledBy,
    settledAt: fo.settledAt,
    finalScore: fo.finalScore,
    markets: fo.markets,
    sport,
    matchId,
  };
}

@Injectable()
export class SettlementOrchestrator {
  private readonly logger = new Logger(SettlementOrchestrator.name);

  constructor(
    private readonly football: FootballSettlementService,
    private readonly other: OtherSportsSettlementService,
    private readonly prisma: PrismaService,
  ) {}

  getProviderForSport(sport: string | undefined | null): SettlementProvider {
    return isFootballSport(sport) ? 'GOAL_API' : 'PROPLINE';
  }

  async runSettlementById(
    matchId: string,
    sport: string,
    goalFixtureId?: string,
    proplineEventId?: string,
  ): Promise<SettlementOutcome> {
    const normSport = normaliseSport(sport);
    const isFootball = isFootballSport(sport);

    const pending: SettlementOutcome = {
      result: 'PENDING',
      settledBy: isFootball ? 'GOAL_API' : 'PROPLINE',
      settledAt: new Date(),
      finalScore: null,
      markets: [],
      sport: normSport,
      matchId,
    };

    try {
      if (isFootball) {
        const mappingId = goalFixtureId ?? undefined;
        const fo = await this.football.resolveSettlement(matchId, mappingId);
        return mapToSettlementOutcome(matchId, normSport, fo);
      }
      const pid = proplineEventId ?? matchId;
      const oo = await this.other.resolveSettlement(normSport, pid);
      return mapToSettlementOutcome(matchId, normSport, oo);
    } catch (err) {
      this.logger.warn(
        `runSettlementById(${matchId}, ${sport}) erro: ${err instanceof Error ? err.message : String(err)}`,
      );
      return pending;
    }
  }

  async batchRunPending(limit = 200): Promise<{
    processed: number;
    settled: number;
    byProvider: Record<SettlementProvider, number>;
  }> {
    const result: {
      processed: number;
      settled: number;
      byProvider: Record<SettlementProvider, number>;
    } = {
      processed: 0,
      settled: 0,
      byProvider: { GOAL_API: 0, PROPLINE: 0 },
    };

    try {
      const pendingEvents = await this.prisma.event
        .findMany({
          where: {
            settledAt: null,
            OR: [
              { status: 'FINISHED' },
              { status: 'ENDED' },
              { status: 'CANCELLED' },
              { status: 'POSTPONED' },
            ],
          },
          take: Math.max(1, Math.min(1000, limit)),
          select: {
            id: true,
            sportCode: true,
            status: true,
            goalFixtureId: true,
            proplineEventId: true,
          },
        })
        .catch(() => [] as Array<{
          id: string;
          sport?: string | null;
          status?: string | null;
          goalFixtureId?: string | null;
          proplineEventId?: string | null;
        }>);

      result.processed = pendingEvents.length;

      const footballBatches: string[] = [];
      const otherBatches: Array<{ sportKey: string; eventId: string }> = [];

      for (const ev of pendingEvents) {
        const sportVal = (ev as any).sportCode ?? (ev as any).sport;
        if (isFootballSport(sportVal)) {
          footballBatches.push(ev.goalFixtureId ?? ev.id);
        } else {
          otherBatches.push({
            sportKey: normaliseSport(sportVal),
            eventId: ev.proplineEventId ?? ev.id,
          });
        }
      }

      if (footballBatches.length > 0) {
        try {
          const ft = await this.football.batchFinalStatusCount(footballBatches);
          result.byProvider.GOAL_API = ft;
          result.settled += ft;
        } catch (e) {
          this.logger.warn(
            `batchRunPending goal erro: ${e instanceof Error ? e.message : String(e)}`,
          );
        }
      }
      if (otherBatches.length > 0) {
        try {
          const ot = await this.other.batchFinalStatusCount(otherBatches);
          result.byProvider.PROPLINE = ot;
          result.settled += ot;
        } catch (e) {
          this.logger.warn(
            `batchRunPending propline erro: ${e instanceof Error ? e.message : String(e)}`,
          );
        }
      }

      this.logger.log(
        `batchRunPending: processados=${result.processed}, finalizados=${result.settled} (GOAL=${result.byProvider.GOAL_API}, PROPLINE=${result.byProvider.PROPLINE})`,
      );
      return result;
    } catch (err) {
      this.logger.error(
        `batchRunPending erro top-level: ${err instanceof Error ? err.message : String(err)}`,
      );
      return result;
    }
  }

  handlerSettlementWebhook(
    provider: 'GOAL_API' | 'PROPLINE' | 'goal_api' | 'propline' | string,
    payload: unknown,
  ): Promise<SettlementOutcome | null> {
    const p = String(provider).trim().toUpperCase().replace(/-/g, '_');
    try {
      const matchId = (payload as { matchId?: string; fixtureId?: string; event_id?: string; eventId?: string; id?: string })
        ?.matchId
        ?? (payload as { fixtureId?: string })?.fixtureId
        ?? (payload as { event_id?: string })?.event_id
        ?? (payload as { eventId?: string })?.eventId
        ?? (payload as { id?: string })?.id
        ?? '';
      const sport = (payload as { sport?: string; sportKey?: string; sport_key?: string })?.sport
        ?? (payload as { sportKey?: string })?.sportKey
        ?? (payload as { sport_key?: string })?.sport_key
        ?? (p === 'GOAL_API' || p === 'GOAL' ? 'FOOTBALL' : 'OTHER');

      const goalFixtureId = (payload as { fixtureId?: string; fixture_id?: string; goalFixtureId?: string })
        ?.fixtureId
        ?? (payload as { fixture_id?: string })?.fixture_id
        ?? (payload as { goalFixtureId?: string })?.goalFixtureId
        ?? undefined;
      const proplineEventId = (payload as { eventId?: string; event_id?: string; proplineEventId?: string })
        ?.eventId
        ?? (payload as { event_id?: string })?.event_id
        ?? (payload as { proplineEventId?: string })?.proplineEventId
        ?? undefined;

      if (!matchId) {
        this.logger.verbose(
          `handlerSettlementWebhook(${provider}): sem matchId no payload, ignorado`,
        );
        return Promise.resolve(null);
      }

      return this.runSettlementById(
        matchId,
        sport,
        goalFixtureId,
        proplineEventId,
      ).catch(() => null);
    } catch (err) {
      this.logger.warn(
        `handlerSettlementWebhook(${provider}) parse erro: ${err instanceof Error ? err.message : String(err)}`,
      );
      return Promise.resolve(null);
    }
  }

  getSourceOfTruthForSport(sport: string, dimension: 'settlement' | 'data' | 'stats' | 'odds' = 'settlement'): 'goal_api' | 'propline' {
    const norm = normaliseSport(sport);
    const cfg = SPORTS_PROVIDER_CONFIG.bySport[norm];
    if (cfg && cfg[dimension]) {
      return cfg[dimension] as 'goal_api' | 'propline';
    }
    if (dimension === 'settlement') {
      return isFootballSport(sport) ? 'goal_api' : 'propline';
    }
    return 'propline';
  }
}
