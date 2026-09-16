import { Injectable, OnModuleInit } from '@nestjs/common';
import { Interval, SchedulerRegistry } from '@nestjs/schedule';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { LiveMatchStateRedisService } from './live-match-state.redis';
import { MAX_ODDS_AGE } from './odds.engine';
import type { Bet62Market, Bet62Selection, LiveMatchState } from '@bet62/shared';

export const SUSPENSION_TRIGGERS = {
  SUSPEND_ON_GOAL: 'SUSPEND_ON_GOAL',
  SUSPEND_ON_VAR: 'SUSPEND_ON_VAR',
  SUSPEND_ON_RED_CARD: 'SUSPEND_ON_RED_CARD',
  SUSPEND_ON_PENALTY: 'SUSPEND_ON_PENALTY',
  SUSPEND_ON_STATUS_CHANGE: 'SUSPEND_ON_STATUS_CHANGE',
  SUSPEND_ON_HT_FT: 'SUSPEND_ON_HT_FT',
  SUSPEND_ON_STALE_ODDS: 'SUSPEND_ON_STALE_ODDS',
  SUSPEND_ON_WS_DISCONNECT: 'SUSPEND_ON_WS_DISCONNECT',
  SUSPEND_ON_SCORE_CHANGE: 'SUSPEND_ON_SCORE_CHANGE',
  SUSPEND_ON_DATA_MISMATCH: 'SUSPEND_ON_DATA_MISMATCH',
} as const;

export type SuspensionTrigger = (typeof SUSPENSION_TRIGGERS)[keyof typeof SUSPENSION_TRIGGERS];

export interface SuspendPayload {
  matchId?: string;
  reason?: string;
  durationMs?: number;
  trigger: SuspensionTrigger;
}

export interface ScoreBurstEvent {
  matchId: string;
  totalGoals: number;
  windowMs: number;
}

const DEFAULT_SUSPEND_DURATION_MS = 120_000;
const SCORE_BURST_WINDOW_MS = 30_000;
const SCORE_BURST_GOAL_THRESHOLD = 3;

@Injectable()
export class SuspensionEngine implements OnModuleInit {
  private readonly recentGoals = new Map<string, Array<number>>();

  constructor(
    private readonly liveState: LiveMatchStateRedisService,
    private readonly eventEmitter: EventEmitter2,
    private readonly schedulerRegistry: SchedulerRegistry,
  ) {}

  onModuleInit() {
    this.schedulerRegistry;
  }

  private triggerToReason(trigger: SuspensionTrigger): string {
    return trigger;
  }

  private detectScoreBurst(matchId: string): boolean {
    const now = Date.now();
    const history = this.recentGoals.get(matchId) || [];
    const filtered = history.filter(t => now - t <= SCORE_BURST_WINDOW_MS);
    filtered.push(now);
    while (filtered.length > SCORE_BURST_GOAL_THRESHOLD + 4) filtered.shift();
    this.recentGoals.set(matchId, filtered);
    return filtered.length >= SCORE_BURST_GOAL_THRESHOLD;
  }

  async suspendAllMarkets(
    matchId: string,
    reason: string,
    durationMs: number = DEFAULT_SUSPEND_DURATION_MS,
  ): Promise<void> {
    if (!matchId) return;

    const now = new Date();
    const nextUpdate = new Date(now.getTime() + durationMs);

    const current = await this.liveState.get(matchId);
    const odds = current?.odds || (await this.liveState.getOdds(matchId)) || {};

    const marketSuspension: Record<string, boolean> = {
      ...(current?.marketSuspension || {}),
    };
    const marketNextUpdate: Record<string, Date> = {
      ...(current?.marketNextUpdate || {}),
    };
    const newOdds: Record<string, Bet62Market> = { ...odds };

    for (const [code, market] of Object.entries(newOdds)) {
      marketSuspension[code] = true;
      marketNextUpdate[code] = nextUpdate;
      const newSels: Bet62Selection[] = (market.selections || []).map(s => ({
        ...s,
        status: 'suspended',
      }));
      newOdds[code] = {
        ...market,
        status: 'suspended',
        selections: newSels,
        updatedAt: now,
      };
    }

    await this.liveState.setOdds(matchId, newOdds);

    const patch: Partial<LiveMatchState> = {
      odds: newOdds,
      suspended: true,
      suspensionReason: reason,
      marketSuspension,
      marketNextUpdate,
      updatedAt: now,
    };

    const state = await this.liveState.updatePartial(matchId, patch);
    if (!state && current) {
      await this.liveState.set({ ...current, ...patch });
    }

    this.eventEmitter.emit('markets_suspended', {
      matchId,
      reason,
      durationMs,
      trigger: reason,
      timestamp: now.toISOString(),
    });
  }

  async reopenMarket(matchId: string, marketCode: string): Promise<void> {
    if (!matchId || !marketCode) return;

    const current = await this.liveState.get(matchId);
    const odds = current?.odds || (await this.liveState.getOdds(matchId)) || {};
    const market = odds[marketCode];
    if (!market) return;

    const newMarket: Bet62Market = {
      ...market,
      status: 'active',
      selections: market.selections.map(s => ({
        ...s,
        status: s.status === 'settled' || s.status === 'void' ? s.status : 'active',
      })),
      updatedAt: new Date(),
    };
    const newOdds = { ...odds, [marketCode]: newMarket };
    await this.liveState.setOdds(matchId, newOdds);

    const ms = { ...(current?.marketSuspension || {}) };
    delete ms[marketCode];
    const mnu = { ...(current?.marketNextUpdate || {}) };
    delete mnu[marketCode];

    const allSuspended = Object.keys(newOdds).some(c => newOdds[c].status === 'suspended');

    await this.liveState.updatePartial(matchId, {
      odds: newOdds,
      suspended: allSuspended,
      suspensionReason: allSuspended ? current?.suspensionReason || null : null,
      marketSuspension: ms,
      marketNextUpdate: mnu,
    });

    this.eventEmitter.emit('market_reopened', { matchId, marketCode });
  }

  @OnEvent('suspend_markets')
  async handleSuspendRequest(payload: SuspendPayload & { eventType?: string; normalisedType?: string }) {
    const matchId = payload.matchId;
    if (!matchId) return;

    let trigger: SuspensionTrigger | null = null;
    const et = (payload.eventType || payload.normalisedType || payload.trigger || '').toString().toLowerCase();

    if (et.includes('goal') && !et.includes('var')) {
      trigger = SUSPENSION_TRIGGERS.SUSPEND_ON_GOAL;
      if (this.detectScoreBurst(matchId)) {
        trigger = SUSPENSION_TRIGGERS.SUSPEND_ON_SCORE_CHANGE;
      }
    } else if (et.includes('var')) {
      trigger = SUSPENSION_TRIGGERS.SUSPEND_ON_VAR;
    } else if (et.includes('red') || et.includes('second_yellow')) {
      trigger = SUSPENSION_TRIGGERS.SUSPEND_ON_RED_CARD;
    } else if (et.includes('penalty')) {
      trigger = SUSPENSION_TRIGGERS.SUSPEND_ON_PENALTY;
    } else if (et.includes('status_change') || et.includes('event_status')) {
      trigger = SUSPENSION_TRIGGERS.SUSPEND_ON_STATUS_CHANGE;
    } else if (et.includes('half_time') || et.includes('full_time') || et === 'ht' || et === 'ft') {
      trigger = SUSPENSION_TRIGGERS.SUSPEND_ON_HT_FT;
    } else if (payload.trigger) {
      trigger = payload.trigger;
    }

    if (!trigger) return;

    await this.suspendAllMarkets(
      matchId,
      payload.reason || this.triggerToReason(trigger),
      payload.durationMs || DEFAULT_SUSPEND_DURATION_MS,
    );
  }

  @Interval(15_000)
  async periodicCheckStale() {
    const keys = await this.liveState.scanLiveMatchKeys();
    const maxAge = MAX_ODDS_AGE.livePolled;

    for (const key of keys) {
      try {
        const matchId = key.replace('bet62:live:', '');
        const state = await this.liveState.get(matchId);
        if (!state) continue;

        const ages = state.dataFreshness?.oddsAgeMs || {};
        let stale = false;
        for (const age of Object.values(ages)) {
          if (typeof age === 'number' && age > maxAge) {
            stale = true;
            break;
          }
        }
        if (!stale && state.odds) {
          for (const m of Object.values(state.odds as Record<string, { updatedAt?: string | Date }>)) {
            const marketAge = m.updatedAt
              ? Date.now() - new Date(m.updatedAt).getTime()
              : 0;
            if (marketAge > maxAge) {
              stale = true;
              break;
            }
          }
        }
        if (stale && !state.marketSuspension?.__stale_triggered) {
          await this.suspendAllMarkets(
            matchId,
            this.triggerToReason(SUSPENSION_TRIGGERS.SUSPEND_ON_STALE_ODDS),
            DEFAULT_SUSPEND_DURATION_MS,
          );
          const s = await this.liveState.get(matchId);
          if (s) {
            const ms = { ...(s.marketSuspension || {}), __stale_triggered: true };
            await this.liveState.updatePartial(matchId, { marketSuspension: ms });
          }
        }
      } catch {
      }
    }
  }

  async suspendDueToWsDisconnect(matchId: string): Promise<void> {
    await this.suspendAllMarkets(
      matchId,
      this.triggerToReason(SUSPENSION_TRIGGERS.SUSPEND_ON_WS_DISCONNECT),
      DEFAULT_SUSPEND_DURATION_MS,
    );
  }

  async suspendDueToMismatch(matchId: string, confidence: number): Promise<void> {
    if (confidence < 0.65) {
      await this.suspendAllMarkets(
        matchId,
        this.triggerToReason(SUSPENSION_TRIGGERS.SUSPEND_ON_DATA_MISMATCH),
        DEFAULT_SUSPEND_DURATION_MS,
      );
    }
  }
}
