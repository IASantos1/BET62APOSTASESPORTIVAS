import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import type { OddsSnapshot } from '../../prisma/generated/client';
import { LiveMatchStateRedisService } from './live-match-state.redis';
import type { Bet62Market, Bet62Selection } from '@bet62/shared';

export const MAX_ODDS_AGE = {
  livePush: 8_000,
  livePolled: 120_000,
  prematchPush: 180_000,
  prematchPolled: 600_000,
} as const;

export const DEFAULT_MARGIN = 1.06;
export const MIN_ODDS = 1.01;
export const MAX_ODDS_VALUE = 1000;

export interface OddsPipelineResult {
  markets: Bet62Market[];
  snapshots: number;
  staleCount: number;
}

export interface OddsPipelineContext {
  eventId: string;
  mappingId?: string | null;
  sportCode?: string;
  matchStatus?: string;
  ingestionKind?: 'live_push' | 'live_polled' | 'prematch_push' | 'prematch_polled';
  provider?: 'GOAL_API' | 'PROPLINE' | 'GOALDIR' | 'SPORTSDB' | 'MOCK';
}

type SelectionWithBook = Bet62Selection & {
  bookId?: string | number;
  bookCode?: string;
  updatedAt?: Date;
};

@Injectable()
export class OddsEngine {
  constructor(
    private readonly prisma: PrismaService,
    private readonly liveState: LiveMatchStateRedisService,
  ) {}

  private resolveMaxAge(kind?: OddsPipelineContext['ingestionKind']): number {
    switch (kind) {
      case 'live_push':
        return MAX_ODDS_AGE.livePush;
      case 'live_polled':
        return MAX_ODDS_AGE.livePolled;
      case 'prematch_push':
        return MAX_ODDS_AGE.prematchPush;
      case 'prematch_polled':
      default:
        return MAX_ODDS_AGE.prematchPolled;
    }
  }

  private validateSelection(s: Bet62Selection): boolean {
    if (!s) return false;
    if (typeof s.price !== 'number' || isNaN(s.price)) return false;
    if (!s.outcome) return false;
    return true;
  }

  private applyMarginAndRound(price: number, margin: number = DEFAULT_MARGIN): {
    price: number;
    marginApplied: number;
    suspended: boolean;
    reason?: string;
  } {
    if (!isFinite(price) || price <= 0) {
      return { price: MIN_ODDS, marginApplied: margin, suspended: true, reason: 'invalid_price' };
    }
    const margined = price / margin;
    if (margin < 1.01) {
      return { price: Math.max(MIN_ODDS, margined), marginApplied: margin, suspended: true, reason: 'margin_below_1.01' };
    }
    const rounded = Math.max(MIN_ODDS, Math.min(MAX_ODDS_VALUE, Math.round(margined * 100) / 100));
    return { price: rounded, marginApplied: margin, suspended: false };
  }

  private dedupSelectionKey(
    marketCode: string,
    outcome: string,
    line: number | null | undefined,
    handicap: number | null | undefined,
    bookId: string | number | undefined,
  ): string {
    const l = line == null ? '' : String(line);
    const h = handicap == null ? '' : String(handicap);
    const b = bookId == null ? '' : String(bookId);
    return `${marketCode}::${outcome}::${l}::${h}::${b}`;
  }

  async runOddsEnginePipeline(
    eventId: string,
    markets: Bet62Market[],
    ctx?: OddsPipelineContext,
  ): Promise<OddsPipelineResult> {
    const maxAge = this.resolveMaxAge(ctx?.ingestionKind);
    const now = Date.now();
    const sportCode = ctx?.sportCode || 'FOOTBALL';
    const provider = ctx?.provider || 'PROPLINE';

    const snapshotBatch: Array<Partial<OddsSnapshot> & {
      selectionId: string;
      marketCode: string;
      outcome: string;
      price: number;
    }> = [];

    let staleCount = 0;

    const processedMarkets: Bet62Market[] = [];

    for (const market of markets) {
      if (!market || !market.code) continue;
      if (!Array.isArray(market.selections)) continue;

      const seenSelectionKeys = new Set<string>();
      const processedSelections: Bet62Selection[] = [];
      const marketUpdatedAt = market.updatedAt ? new Date(market.updatedAt) : new Date();

      for (const rawSel of market.selections) {
        if (!this.validateSelection(rawSel)) continue;

        const sel = rawSel as SelectionWithBook;
        const key = this.dedupSelectionKey(
          market.code,
          sel.outcome,
          sel.line,
          sel.handicap,
          sel.bookId,
        );
        if (seenSelectionKeys.has(key)) continue;
        seenSelectionKeys.add(key);

        const selUpdatedAt = sel.updatedAt || marketUpdatedAt;
        const ageMs = Math.max(0, now - new Date(selUpdatedAt).getTime());
        const isStale = ageMs > maxAge;
        if (isStale) staleCount++;

        const marginRes = this.applyMarginAndRound(sel.price, DEFAULT_MARGIN);
        const status: Bet62Selection['status'] =
          isStale || marginRes.suspended ? 'suspended' : sel.status === 'settled' ? 'settled' : sel.status === 'void' ? 'void' : 'active';

        const processedSel: Bet62Selection = {
          ...sel,
          price: marginRes.price,
          status,
        };
        processedSelections.push(processedSel);

        const bookCode = sel.bookCode || (sel.bookId ? String(sel.bookId) : 'default');
        snapshotBatch.push({
          bet62MatchId: eventId,
          mappingId: ctx?.mappingId || null,
          sportCode,
          marketCode: market.code,
          period: market.period as never,
          selectionId: sel.id,
          outcome: sel.outcome,
          line: sel.line as never,
          handicap: sel.handicap as never,
          provider,
          bookmakerId: sel.bookId ? String(sel.bookId) : null,
          bookmakerCode: bookCode,
          price: marginRes.price as never,
          pricePrevious: (sel.price === marginRes.price ? null : sel.price) as never,
          marginApplied: marginRes.marginApplied as never,
          isBestPrice: true,
          trend: 'flat',
          recordedAt: new Date(now),
          bookUpdatedAt: sel.updatedAt || marketUpdatedAt,
          lastChangeAt: sel.updatedAt || marketUpdatedAt,
          lastSeenAt: new Date(now),
          status: isStale ? 'STALE' : marginRes.suspended ? 'SUSPENDED' : 'ACTIVE',
          stale: isStale,
          staleReason: isStale ? `age_gt_${maxAge}ms` : marginRes.reason || null,
          ageMs,
        });
      }

      const allSuspended =
        processedSelections.length > 0 &&
        processedSelections.every(s => s.status === 'suspended');

      const processedMarket: Bet62Market = {
        ...market,
        selections: processedSelections,
        status: allSuspended ? 'suspended' : market.status,
        updatedAt: new Date(now),
      };
      processedMarkets.push(processedMarket);
    }

    const oddsRecord: Record<string, Bet62Market> = {};
    for (const m of processedMarkets) {
      oddsRecord[m.code] = m;
    }
    await this.liveState.setOdds(eventId, oddsRecord);

    let snapshotsInserted = 0;
    if (snapshotBatch.length > 0) {
      const BATCH_SIZE = 500;
      for (let i = 0; i < snapshotBatch.length; i += BATCH_SIZE) {
        const chunk = snapshotBatch.slice(i, i + BATCH_SIZE);
        await this.prisma.oddsSnapshot.createMany({
          data: chunk as never,
          skipDuplicates: true,
        });
        snapshotsInserted += chunk.length;
      }
    }

    await this.liveState.updatePartial(eventId, {
      odds: oddsRecord,
      dataFreshness: {
        dataSource: provider.toLowerCase() as never,
        scoreAgeMs: null,
        clockAgeMs: null,
        statsAgeMs: null,
        oddsAgeMs: Object.fromEntries(
          Object.entries(oddsRecord).map(([code, m]) => {
            const age = m.updatedAt
              ? Math.max(0, now - new Date(m.updatedAt).getTime())
              : 0;
            return [code, age];
          }),
        ),
        stale: staleCount > 0,
      },
    });

    return {
      markets: processedMarkets,
      snapshots: snapshotsInserted,
      staleCount,
    };
  }
}
