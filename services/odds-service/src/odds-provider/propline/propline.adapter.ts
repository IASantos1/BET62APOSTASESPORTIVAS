import { Injectable, Logger } from '@nestjs/common';
import { MarketStatus } from '@bet62/shared';
import type {
  Bet62Market,
  Bet62Odd,
  Bet62Selection,
  EventStatus,
} from '@bet62/shared';
import { roundAmount } from '@bet62/shared';
import type {
  ProplineBookmaker,
  ProplineMarket,
  ProplineOddsResponse,
  ProplineOddsSelection,
} from './propline.types';
import {
  PROPLINE_BOOKMAKER_BY_CODE,
  resolveBookmaker,
  getPushBasedBookmakers,
} from './propline.bookmakers';
import {
  buildBookmakersMap,
  buildSelectionDedupeKey,
  marketToBet62Market,
  oddsResponseToMarkets,
} from './propline.mapper';

const LIVE_PUSH_MAX_AGE_MS = 8 * 1000;
const LIVE_POLLED_MAX_AGE_MS = 2 * 60 * 1000;
const PREMATCH_PUSH_MAX_AGE_MS = 3 * 60 * 1000;
const PREMATCH_POLLED_MAX_AGE_MS = 10 * 60 * 1000;

const MARGIN_DIVISOR = 1.06;
const MINIMUM_ODDS = 1.01;
const MAXIMUM_ODDS = 1000;

export interface OddSnapshot {
  marketId: string;
  selectionId: string;
  price: number;
  rawPrice: number;
  stale: boolean;
  staleReason: string | null;
  ageMs: number;
  isLive: boolean;
  sourceMode: 'push' | 'polled';
  bookmakerId: number | string | null;
  bookmakerCode: string | null;
  recordedAt: Date | null;
  lastChangeAt: Date | null;
  status: MarketStatus;
  previousPrice?: number | null;
}

export interface AdapterPipelineOpts {
  now?: Date;
  isLive?: boolean;
  forceMode?: 'push' | 'polled';
  skipMargin?: boolean;
  skipStaleCheck?: boolean;
}

function dateDiffMs(a: Date | string | null | undefined, now: Date): number {
  if (!a) return Number.MAX_SAFE_INTEGER;
  try {
    const d = typeof a === 'string' ? new Date(a) : a;
    if (!d || isNaN(d.getTime())) return Number.MAX_SAFE_INTEGER;
    const ms = now.getTime() - d.getTime();
    return Math.max(0, ms);
  } catch {
    return Number.MAX_SAFE_INTEGER;
  }
}

export function pickMaxAge(isLive: boolean, mode: 'push' | 'polled'): number {
  if (isLive) {
    return mode === 'push' ? LIVE_PUSH_MAX_AGE_MS : LIVE_POLLED_MAX_AGE_MS;
  }
  return mode === 'push' ? PREMATCH_PUSH_MAX_AGE_MS : PREMATCH_POLLED_MAX_AGE_MS;
}

function describeAgeType(isLive: boolean, mode: 'push' | 'polled'): string {
  const base = isLive ? 'live' : 'prematch';
  return `${base}_${mode}`;
}

export function applyMarginAndRound(rawPrice: number): {
  price: number;
  belowMinimum: boolean;
} {
  try {
    if (!isFinite(rawPrice) || rawPrice <= 0) {
      return { price: MINIMUM_ODDS, belowMinimum: true };
    }
    const adjusted = rawPrice / MARGIN_DIVISOR;
    const rounded = Math.max(MINIMUM_ODDS, roundAmount(adjusted, 2));
    if (!isFinite(rounded)) {
      return { price: MINIMUM_ODDS, belowMinimum: true };
    }
    if (rounded > MAXIMUM_ODDS) {
      return { price: MAXIMUM_ODDS, belowMinimum: false };
    }
    return { price: rounded, belowMinimum: rounded < MINIMUM_ODDS + 0.0001 };
  } catch {
    return { price: MINIMUM_ODDS, belowMinimum: true };
  }
}

export function determineSourceMode(
  bookCodeOrId: number | string | null | undefined,
  override?: 'push' | 'polled',
): 'push' | 'polled' {
  if (override) return override;
  if (bookCodeOrId === null || bookCodeOrId === undefined) return 'polled';
  const book = resolveBookmaker(bookCodeOrId);
  if (book) return book.isPushBased ? 'push' : 'polled';
  return 'polled';
}

export function validateSelection(sel: ProplineOddsSelection | null | undefined): sel is ProplineOddsSelection {
  if (!sel || typeof sel !== 'object') return false;
  if (typeof sel.price !== 'number' || !isFinite(sel.price)) return false;
  if (sel.price <= 1) return false;
  if (!sel.outcome || typeof sel.outcome !== 'string') return false;
  return true;
}

export function validateMarket(pm: ProplineMarket | null | undefined): pm is ProplineMarket {
  if (!pm || typeof pm !== 'object') return false;
  if (!pm.market_code || typeof pm.market_code !== 'string') return false;
  return Array.isArray(pm.selections);
}

export function computeSelectionDedupKey(
  marketCode: string,
  outcome: string,
  line: number | null | undefined,
  handicap: number | null | undefined,
  bookCode: string | number | null | undefined,
): string {
  const base = buildSelectionDedupeKey(outcome, line, handicap);
  const bk = bookCode !== undefined && bookCode !== null && bookCode !== ''
    ? String(bookCode).toLowerCase()
    : 'x';
  return `${marketCode}::${base}::${bk}`;
}

function cloneMarketsForMutation(list: Bet62Market[]): Bet62Market[] {
  const out: Bet62Market[] = [];
  for (const m of list) {
    out.push({
      ...m,
      selections: m.selections.map((s) => ({ ...s })),
      bestOdds: m.bestOdds.map((o) => ({ ...o })),
    });
  }
  return out;
}

@Injectable()
export class ProplineDataAdapter {
  private readonly logger = new Logger(ProplineDataAdapter.name);

  getLatencyConfig() {
    return {
      LIVE_PUSH_MAX_AGE_MS,
      LIVE_POLLED_MAX_AGE_MS,
      PREMATCH_PUSH_MAX_AGE_MS,
      PREMATCH_POLLED_MAX_AGE_MS,
      MARGIN_DIVISOR,
      MINIMUM_ODDS,
    };
  }

  private snapshotForOdd(
    odd: Bet62Odd,
    selection: Bet62Selection | undefined,
    opts: AdapterPipelineOpts,
    now: Date,
  ): OddSnapshot | null {
    try {
      if (!odd) return null;
      const recordedAt = odd.recordedAt ?? odd.timestamp;
      const lastChangeAt = odd.lastChangeAt ?? null;
      const ageMs = dateDiffMs(lastChangeAt ?? recordedAt, now);
      const mode = determineSourceMode(odd.bookmakerId, opts.forceMode);
      const maxAge = pickMaxAge(Boolean(opts.isLive), mode);
      const { price, belowMinimum } = opts.skipMargin
        ? { price: odd.price, belowMinimum: odd.price < MINIMUM_ODDS }
        : applyMarginAndRound(odd.price);
      let stale = false;
      let staleReason: string | null = null;
      const lowerStatus: Bet62Market['status'] = odd.isBest && selection && selection.status === 'active'
        ? 'active'
        : selection?.status === 'suspended' ? 'suspended'
        : selection?.status === 'settled' ? 'settled'
        : selection?.status === 'void' ? 'void'
        : odd.isBest ? 'active' : 'active';
      let status: MarketStatus = lowerStatus === 'active' ? MarketStatus.ACTIVE
        : lowerStatus === 'suspended' ? MarketStatus.SUSPENDED
        : lowerStatus === 'settled' ? MarketStatus.SETTLED
        : MarketStatus.CLOSED;
      if (!opts.skipStaleCheck) {
        if (ageMs > maxAge) {
          stale = true;
          staleReason = `exceeded_${describeAgeType(Boolean(opts.isLive), mode)}_max_age_${maxAge}ms`;
          status = MarketStatus.SUSPENDED;
        }
      }
      if (belowMinimum) {
        stale = true;
        staleReason = 'below_minimum_odds';
        status = MarketStatus.SUSPENDED;
      }
      return {
        marketId: odd.marketCode,
        selectionId: odd.selectionId,
        price,
        rawPrice: odd.price,
        stale,
        staleReason,
        ageMs,
        isLive: Boolean(opts.isLive),
        sourceMode: mode,
        bookmakerId: odd.bookmakerId,
        bookmakerCode: String(odd.bookmakerId ?? ''),
        recordedAt: recordedAt ?? null,
        lastChangeAt: lastChangeAt ?? null,
        status,
        previousPrice: odd.previousPrice ?? null,
      };
    } catch (err) {
      this.logger.verbose(`snapshotForOdd erro: ${err instanceof Error ? err.message : String(err)}`);
      return null;
    }
  }

  runOddsPipeline(
    resp: ProplineOddsResponse | null | undefined,
    opts: AdapterPipelineOpts = {},
  ): {
    markets: Bet62Market[];
    snapshots: OddSnapshot[];
    bookmakerCount: number;
    staleCount: number;
    belowMinimumCount: number;
    dedupApplied: number;
  } {
    try {
      const now = opts.now ?? new Date();
      const empty = {
        markets: [] as Bet62Market[],
        snapshots: [] as OddSnapshot[],
        bookmakerCount: 0,
        staleCount: 0,
        belowMinimumCount: 0,
        dedupApplied: 0,
      };
      if (!resp) return empty;
      const bookiesMap = buildBookmakersMap(resp.bookmakers ?? null);
      const dedupKeysSeen = new Set<string>();
      let dedupApplied = 0;
      const validatedMarkets: ProplineMarket[] = [];
      for (const rawM of resp.markets ?? []) {
        if (!validateMarket(rawM)) continue;
        const filteredSelections: ProplineOddsSelection[] = [];
        for (const rawS of rawM.selections ?? []) {
          if (!validateSelection(rawS)) continue;
          const dk = computeSelectionDedupKey(
            rawM.market_code,
            rawS.outcome,
            rawS.line,
            rawS.handicap,
            rawS.book_code ?? rawS.book_id,
          );
          if (dedupKeysSeen.has(dk)) {
            dedupApplied++;
            continue;
          }
          dedupKeysSeen.add(dk);
          filteredSelections.push(rawS);
        }
        validatedMarkets.push({ ...rawM, selections: filteredSelections });
      }
      const validatedResp: ProplineOddsResponse = {
        ...resp,
        markets: validatedMarkets,
      };
      const { markets: mappedMarkets, bookmakersCount } = oddsResponseToMarkets(validatedResp, now);
      const markets = cloneMarketsForMutation(mappedMarkets);
      const snapshots: OddSnapshot[] = [];
      let staleCount = 0;
      let belowMinimumCount = 0;
      const finalMarkets: Bet62Market[] = [];
      for (const market of markets) {
        const newSelections: Bet62Selection[] = [];
        const newBestOdds: Bet62Odd[] = [];
        for (const sel of market.selections) {
          let newStatus: Bet62Selection['status'] = sel.status;
          let newPrice = sel.price;
          const relatedOdds = market.bestOdds.filter((o) => o.selectionId === sel.id);
          for (const odd of relatedOdds) {
            const snap = this.snapshotForOdd(odd, sel, opts, now);
            if (!snap) continue;
            snapshots.push(snap);
            if (snap.stale) staleCount++;
            if (snap.staleReason === 'below_minimum_odds') belowMinimumCount++;
            const newOdd: Bet62Odd = {
              ...odd,
              price: snap.price,
              previousPrice: odd.previousPrice ?? (snap.previousPrice && snap.previousPrice !== snap.rawPrice ? snap.previousPrice : (snap.rawPrice !== snap.price ? snap.rawPrice : null)),
            };
            if (snap.status === 'SUSPENDED' && !snap.staleReason?.includes('max_age')) {
              newStatus = 'suspended';
            } else if (snap.stale && snap.staleReason?.includes('max_age')) {
              newStatus = 'suspended';
            }
            if (odd.isBest) {
              newPrice = snap.price;
              if (snap.status === 'SUSPENDED') newStatus = 'suspended';
            }
            newBestOdds.push(newOdd);
          }
          newSelections.push({
            ...sel,
            price: newPrice,
            status: newStatus,
          });
        }
        const anySelectionActive = newSelections.some((s) => s.status === 'active');
        const marketStatus: Bet62Market['status'] = anySelectionActive
          ? (market.status === 'active' ? 'active' : 'suspended')
          : (market.status === 'settled' ? 'settled' : market.status === 'void' ? 'void' : 'suspended');
        finalMarkets.push({
          ...market,
          status: marketStatus,
          selections: newSelections,
          bestOdds: newBestOdds,
        });
      }
      return {
        markets: finalMarkets,
        snapshots,
        bookmakerCount: bookmakersCount,
        staleCount,
        belowMinimumCount,
        dedupApplied,
      };
    } catch (err) {
      this.logger.warn(`runOddsPipeline top-level erro: ${err instanceof Error ? err.message : String(err)}`);
      return {
        markets: [],
        snapshots: [],
        bookmakerCount: 0,
        staleCount: 0,
        belowMinimumCount: 0,
        dedupApplied: 0,
      };
    }
  }

  runSingleMarketPipeline(
    pm: ProplineMarket,
    eventId: string,
    bookiesMap: ReadonlyMap<string, ProplineBookmaker>,
    opts: AdapterPipelineOpts = {},
  ): Bet62Market | null {
    try {
      const now = opts.now ?? new Date();
      if (!validateMarket(pm)) return null;
      const dedupSeen = new Set<string>();
      const filtered: ProplineOddsSelection[] = [];
      for (const s of pm.selections ?? []) {
        if (!validateSelection(s)) continue;
        const dk = computeSelectionDedupKey(pm.market_code, s.outcome, s.line, s.handicap, s.book_code ?? s.book_id);
        if (dedupSeen.has(dk)) continue;
        dedupSeen.add(dk);
        filtered.push(s);
      }
      const pmFiltered: ProplineMarket = { ...pm, selections: filtered };
      const mapped = marketToBet62Market(pmFiltered, eventId, bookiesMap, now);
      if (!mapped) return null;
      const resp: ProplineOddsResponse = {
        id: eventId,
        event_id: eventId,
        sport_key: 'unknown',
        home_team: 'Home',
        away_team: 'Away',
        commence_time: now.toISOString(),
        markets: [pmFiltered],
      };
      const { markets } = this.runOddsPipeline(resp, opts);
      return markets[0] ?? mapped;
    } catch (err) {
      this.logger.verbose(`runSingleMarketPipeline erro: ${err instanceof Error ? err.message : String(err)}`);
      return null;
    }
  }
}
