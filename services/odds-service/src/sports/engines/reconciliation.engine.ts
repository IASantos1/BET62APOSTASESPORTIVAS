import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { Interval, SchedulerRegistry } from '@nestjs/schedule';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { PrismaService } from '../../prisma/prisma.service';
import { LiveMatchStateRedisService } from './live-match-state.redis';
import { SuspensionEngine } from './suspension.engine';
import { ProviderMappingService } from '../matching/provider-mapping.service';
import type { LiveMatchState, Bet62Match } from '@bet62/shared';

export const RECONCILIATION_INTERVAL_MS = 180_000;
export const RECONCILIATION_WS_DOWN_INTERVAL_MS = 60_000;
const RECONCILIATION_LOCK_KEY_PREFIX = 'bet62:recon:lock:';
const RECONCILIATION_LOCK_TTL_MS = 60_000;

export interface ReconciliationOutcome {
  matchId: string;
  stateMismatch: boolean;
  scoreMismatch: boolean;
  oddsMismatch: boolean;
  fieldsMismatched: string[];
  resolved: boolean;
  error?: string;
}

@Injectable()
export class ReconciliationEngine implements OnApplicationBootstrap {
  private wsDownMatches = new Set<string>();

  constructor(
    private readonly prisma: PrismaService,
    private readonly liveState: LiveMatchStateRedisService,
    private readonly suspensionEngine: SuspensionEngine,
    private readonly mappingService: ProviderMappingService,
    private readonly eventEmitter: EventEmitter2,
    private readonly schedulerRegistry: SchedulerRegistry,
  ) {}

  onApplicationBootstrap() {
    this.schedulerRegistry;
  }

  private lockKey(matchId: string): string {
    return `${RECONCILIATION_LOCK_KEY_PREFIX}${matchId}`;
  }

  private async acquireLock(matchId: string): Promise<boolean> {
    return this.liveState.acquireDistributedLock(this.lockKey(matchId), RECONCILIATION_LOCK_TTL_MS);
  }

  private async releaseLock(matchId: string): Promise<void> {
    await this.liveState.releaseDistributedLock(this.lockKey(matchId));
  }

  markWsDisconnected(matchId: string): void {
    this.wsDownMatches.add(matchId);
    this.suspensionEngine.suspendDueToWsDisconnect(matchId).catch(() => undefined);
  }

  markWsReconnected(matchId: string): void {
    this.wsDownMatches.delete(matchId);
  }

  private async fetchFallbackState(
    mapping: { goalApiFixtureId?: string | null; proplineEventId?: string | null } | null,
  ): Promise<Partial<Bet62Match> | null> {
    if (!mapping) return null;
    const scores: Partial<Bet62Match['score']> = {};
    const league: Partial<Bet62Match['league']> = {};
    const homeTeam: Partial<Bet62Match['homeTeam']> = {};
    const awayTeam: Partial<Bet62Match['awayTeam']> = {};
    let kickoffAt: Date | undefined;

    if (mapping.goalApiFixtureId) {
      const event = await this.prisma.event.findFirst({
        where: { providerEventId: String(mapping.goalApiFixtureId) },
        include: { league: true, homeTeam: true, awayTeam: true },
      });
      if (event) {
        scores.home = event.homeScore ?? null;
        scores.away = event.awayScore ?? null;
        scores.status = event.status.toLowerCase() as never;
        kickoffAt = event.kickoffAt;
        if (event.league) {
          league.id = event.league.providerLeagueId;
          league.name = event.league.name;
        }
        if (event.homeTeam) {
          homeTeam.id = event.homeTeam.providerTeamId;
          homeTeam.name = event.homeTeam.name;
        }
        if (event.awayTeam) {
          awayTeam.id = event.awayTeam.providerTeamId;
          awayTeam.name = event.awayTeam.name;
        }
      }
    }

    return {
      id: mapping.goalApiFixtureId || mapping.proplineEventId || undefined,
      league: league as Bet62Match['league'],
      homeTeam: homeTeam as Bet62Match['homeTeam'],
      awayTeam: awayTeam as Bet62Match['awayTeam'],
      kickoffAt,
      score: {
        home: null,
        away: null,
        status: 'scheduled',
        updatedAt: new Date(),
        ...scores,
      },
      sport: 'FOOTBALL',
    } as Partial<Bet62Match>;
  }

  private compareFields(
    a: unknown,
    b: unknown,
    field: string,
    mismatches: string[],
  ): void {
    const av =
      a instanceof Date ? a.toISOString() : typeof a === 'object' ? JSON.stringify(a) : a;
    const bv =
      b instanceof Date ? b.toISOString() : typeof b === 'object' ? JSON.stringify(b) : b;
    if (av !== bv) mismatches.push(field);
  }

  async reconcileMatch(matchId: string): Promise<ReconciliationOutcome> {
    const base: ReconciliationOutcome = {
      matchId,
      stateMismatch: false,
      scoreMismatch: false,
      oddsMismatch: false,
      fieldsMismatched: [],
      resolved: false,
    };

    const locked = await this.acquireLock(matchId);
    if (!locked) {
      return { ...base, error: 'already_reconciling' };
    }
    try {
      const state = await this.liveState.get(matchId);
      if (!state) {
        return { ...base, resolved: true };
      }

      await this.suspensionEngine.suspendAllMarkets(
        matchId,
        'reconciliation_in_progress',
        RECONCILIATION_LOCK_TTL_MS + 10_000,
      );

      const mapping = await this.mappingService.findByGoalFixture(
        state.match.sport || 'FOOTBALL',
        state.match.providers.goalApi?.fixtureId
          ? String(state.match.providers.goalApi.fixtureId)
          : '',
      );

      const fallback = await this.fetchFallbackState(mapping || null);
      const mismatched: string[] = [];

      if (fallback && fallback.score && state.match.score) {
        this.compareFields(
          state.match.score.home,
          fallback.score.home,
          'score.home',
          mismatched,
        );
        this.compareFields(
          state.match.score.away,
          fallback.score.away,
          'score.away',
          mismatched,
        );
        this.compareFields(
          state.match.score.status,
          fallback.score.status,
          'score.status',
          mismatched,
        );
      }

      const hasMismatch = mismatched.length > 0;
      if (hasMismatch) {
        base.stateMismatch = true;
        base.fieldsMismatched = mismatched;
        base.scoreMismatch =
          mismatched.some(f => f.startsWith('score.'));

        const patchMatch: Partial<Bet62Match> = { ...state.match };
        if (fallback?.score) {
          patchMatch.score = {
            ...state.match.score,
            ...fallback.score,
            updatedAt: new Date(),
          };
        }

        const patch: Partial<LiveMatchState> = {
          match: { ...patchMatch } as Bet62Match,
          updatedAt: new Date(),
          suspended: true,
          suspensionReason: 'reconciliation_corrected',
        };
        await this.liveState.updatePartial(matchId, patch);

        if (mapping) {
          await this.mappingService.setReconciled(mapping.id);
        }
      }

      base.resolved = true;

      const allMarketCodes = Object.keys(state.odds || {});
      for (const code of allMarketCodes) {
        await this.suspensionEngine.reopenMarket(matchId, code);
      }

      this.eventEmitter.emit('reconciliation_complete', {
        matchId,
        mismatched,
        corrected: hasMismatch,
      });

      return base;
    } catch (err) {
      return {
        ...base,
        error: err instanceof Error ? err.message : String(err),
      };
    } finally {
      await this.releaseLock(matchId);
    }
  }

  @Interval(RECONCILIATION_INTERVAL_MS)
  async periodicReconcile(): Promise<void> {
    try {
      const keys = await this.liveState.scanLiveMatchKeys();
      const wsDown = this.wsDownMatches.size > 0;
      const effectiveInterval = wsDown
        ? RECONCILIATION_WS_DOWN_INTERVAL_MS
        : RECONCILIATION_INTERVAL_MS;
      effectiveInterval;

      for (const key of keys) {
        const matchId = key.replace('bet62:live:', '');
        if (this.wsDownMatches.has(matchId)) {
          await this.reconcileMatch(matchId);
        } else {
          this.reconcileMatch(matchId).catch(() => undefined);
        }
      }
    } catch {
    }
  }

  async forceReconcileAll(scope?: 'all' | 'ws_down'): Promise<string[]> {
    const keys = await this.liveState.scanLiveMatchKeys();
    const matchIds: string[] = [];
    for (const k of keys) {
      const matchId = k.replace('bet62:live:', '');
      if (scope === 'ws_down' && !this.wsDownMatches.has(matchId)) continue;
      matchIds.push(matchId);
    }
    await Promise.allSettled(matchIds.map(id => this.reconcileMatch(id)));
    return matchIds;
  }
}
