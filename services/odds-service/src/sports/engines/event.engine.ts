import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { createHash } from 'crypto';
import { PrismaService } from '../../prisma/prisma.service';
import { LiveMatchStateRedisService } from './live-match-state.redis';
import type { Bet62LiveEvent } from '@bet62/shared';

export type ProviderName = 'GOAL_API' | 'PROPLINE' | 'GOALDIR' | 'SPORTSDB' | 'MOCK';

export interface RawProviderEvent {
  provider: ProviderName;
  providerEventId: string;
  sequence?: number | null;
  eventType: string;
  matchId?: string | null;
  mappingId?: string | null;
  sportCode: string;
  leagueKey?: string | null;
  homeKey?: string | null;
  awayKey?: string | null;
  kickoffAt?: Date | null;
  payloadRaw: Record<string, unknown>;
  payloadNormalised?: Record<string, unknown> | null;
  ingestSource?: string;
  receivedAt?: Date;
  timestampProvider?: Date | null;
}

const SUSPEND_TRIGGER_TYPES = new Set([
  'goal',
  'own_goal',
  'penalty_goal',
  'penalty_missed',
  'penalty_miss',
  'var_review',
  'red_card',
  'second_yellow',
  'status_change',
  'event_status',
  'half_time',
  'match_end',
  'score_change',
  'odds_change',
]);

@Injectable()
export class LiveEventEngine {
  constructor(
    private readonly prisma: PrismaService,
    private readonly liveState: LiveMatchStateRedisService,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  private makeDedupKey(
    provider: string,
    providerEventId: string,
    sequence: number | null | undefined,
  ): string {
    const base = `${provider}:${providerEventId}:${sequence ?? 0}`;
    return createHash('sha256').update(base).digest('hex');
  }

  private shouldTriggerSuspension(eventType: string): boolean {
    const t = eventType.toLowerCase();
    for (const trigger of SUSPEND_TRIGGER_TYPES) {
      if (t.includes(trigger)) return true;
    }
    if (t.includes('half_time') || t.includes('ht_') || t === 'ht') return true;
    if (t.includes('full_time') || t.includes('ft_') || t === 'ft') return true;
    if (t.includes('status') && t.includes('change')) return true;
    return false;
  }

  async processEvent(
    raw: RawProviderEvent,
    normalised: Bet62LiveEvent,
  ): Promise<boolean> {
    const dedupKey = this.makeDedupKey(raw.provider, raw.providerEventId, raw.sequence);

    const existing = await this.prisma.providerEvent.findUnique({
      where: {
        provider_providerEventId_sequence: {
          provider: raw.provider,
          providerEventId: raw.providerEventId,
          sequence: raw.sequence ?? 0,
        },
      },
      select: { id: true, processingStatus: true },
    });

    if (existing) {
      if (existing.processingStatus !== 'SKIPPED') {
        await this.prisma.providerEvent.update({
          where: { id: existing.id },
          data: { processingStatus: 'SKIPPED' },
        });
      }
      return true;
    }

    const now = new Date();
    await this.prisma.providerEvent.create({
      data: {
        provider: raw.provider,
        providerEventId: raw.providerEventId,
        sequence: raw.sequence ?? 0,
        eventType: raw.eventType,
        matchId: raw.matchId || normalised.matchId,
        mappingId: raw.mappingId,
        sportCode: raw.sportCode,
        leagueKey: raw.leagueKey,
        homeKey: raw.homeKey,
        awayKey: raw.awayKey,
        kickoffAt: raw.kickoffAt,
        payloadRaw: raw.payloadRaw as unknown as never,
        payloadNormalised: (raw.payloadNormalised ?? normalised.payload) as unknown as never,
        ingestSource: raw.ingestSource || 'REST',
        receivedAt: raw.receivedAt || now,
        timestampProvider: raw.timestampProvider,
        deduplicationKey: dedupKey,
        processingStatus: 'PROCESSED',
        processedAt: now,
        retries: 0,
      },
    });

    const matchId = raw.matchId || normalised.matchId;
    if (matchId) {
      const current = await this.liveState.get(matchId);
      if (current) {
        const recent = [...(current.recentEvents || []), normalised];
        while (recent.length > 20) recent.shift();
        const lastSeq = { ...(current.lastEventSequence || {}) };
        if (normalised.sequence) {
          lastSeq[normalised.provider] = Number(normalised.sequence);
        }
        await this.liveState.updatePartial(matchId, {
          recentEvents: recent,
          lastEventSequence: lastSeq,
        });
      } else {
        await this.liveState.pushEvent(matchId, normalised);
      }
    }

    if (this.shouldTriggerSuspension(raw.eventType)) {
      this.eventEmitter.emit('suspend_markets', {
        matchId,
        eventType: raw.eventType,
        eventId: raw.providerEventId,
        reason: `trigger:${raw.eventType}`,
        normalisedType: normalised.type,
      });
    }

    return true;
  }
}
