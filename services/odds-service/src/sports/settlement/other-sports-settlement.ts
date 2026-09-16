import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import {
  ProplineHttpClient,
  ProplineOddsProviderService,
} from '../../odds-provider/propline';
import type {
  ProplineEvent,
  ProplineEventScores,
  ProplineEventStatus,
} from '../../odds-provider/propline/propline.types';
import { MarketType, SelectionOutcome } from '@bet62/shared';

type OtherSportResult =
  | 'HOME'
  | 'DRAW'
  | 'AWAY'
  | 'CANCELLED'
  | 'POSTPONED'
  | 'PENDING';

type SelectionResult = 'WON' | 'LOST' | 'VOID';

interface SettledSelection {
  selectionId: string;
  outcome: SelectionResult;
}

interface SettledMarket {
  marketCode: string;
  settledSelections: SettledSelection[];
}

interface OtherSportSettlementOutcome {
  result: OtherSportResult;
  settledBy: 'PROPLINE';
  settledAt: Date;
  finalScore: { home: number; away: number } | null;
  markets: SettledMarket[];
}

function n(v: unknown): number {
  if (v === null || v === undefined) return 0;
  if (typeof v === 'number') return Number.isFinite(v) ? v : 0;
  const num = Number(String(v));
  return Number.isFinite(num) ? num : 0;
}

function extractFinalScore(scores: ProplineEventScores | null | undefined): {
  home: number;
  away: number;
} {
  if (!scores) return { home: 0, away: 0 };
  if (
    (n(scores.home) > 0 || n(scores.away) > 0) &&
    scores.home !== undefined &&
    scores.away !== undefined
  ) {
    return { home: n(scores.home), away: n(scores.away) };
  }
  return {
    home: n(scores.current_period_home),
    away: n(scores.current_period_away),
  };
}

function isTennisOrVolley(sportKey: string): boolean {
  const s = String(sportKey).toUpperCase();
  return (
    s.includes('TENNIS') ||
    s.includes('TENIS') ||
    s.includes('VOLLEY') ||
    s.includes('VOLEI')
  );
}

function isNoDrawSport(sportKey: string): boolean {
  const s = String(sportKey).toUpperCase();
  return (
    s.includes('TENNIS') ||
    s.includes('TENIS') ||
    s.includes('VOLLEY') ||
    s.includes('VOLEI') ||
    s.includes('BASEBALL') ||
    s.includes('BASEBOL') ||
    s.includes('UFC') ||
    s.includes('MMA') ||
    s.includes('GOLF') ||
    s.includes('GOLFE') ||
    s.includes('DARTS') ||
    s.includes('DARDOS') ||
    s.includes('TABLE') ||
    s.includes('MESA') ||
    s.includes('F1') ||
    s.includes('FORMULA') ||
    s.includes('ESPORT')
  );
}

function matchResultGeneric(
  home: number,
  away: number,
  status: ProplineEventStatus,
  sportKey: string,
): OtherSportResult {
  if (status === 'cancelled') return 'CANCELLED';
  if (status === 'postponed' || status === 'suspended') return 'POSTPONED';
  if (status !== 'final' && status !== 'ended' && status !== 'awarded') {
    return 'PENDING';
  }
  if (home > away) return 'HOME';
  if (away > home) return 'AWAY';
  if (isNoDrawSport(sportKey)) {
    return home >= away ? 'HOME' : 'AWAY';
  }
  return 'DRAW';
}

function settleMoneyline(
  result: OtherSportResult,
  noDraw: boolean,
): SettledMarket {
  const voided = result === 'CANCELLED' || result === 'POSTPONED';
  const homeWon = result === 'HOME';
  const awayWon = result === 'AWAY';
  const drawWon = result === 'DRAW' && !noDraw;
  const selections: SettledSelection[] = [
    {
      selectionId: 'HOME',
      outcome: voided ? 'VOID' : homeWon ? 'WON' : 'LOST',
    },
  ];
  if (!noDraw) {
    selections.push({
      selectionId: 'DRAW',
      outcome: voided ? 'VOID' : drawWon ? 'WON' : 'LOST',
    });
  }
  selections.push({
    selectionId: 'AWAY',
    outcome: voided ? 'VOID' : awayWon ? 'WON' : 'LOST',
  });
  return {
    marketCode: MarketType.MONEYLINE,
    settledSelections: selections,
  };
}

function settleMatchWinner12(result: OtherSportResult): SettledMarket {
  const voided = result === 'CANCELLED' || result === 'POSTPONED';
  const homeWon = result === 'HOME';
  const awayWon = result === 'AWAY';
  return {
    marketCode: MarketType.MATCH_WINNER_12,
    settledSelections: [
      {
        selectionId: 'HOME',
        outcome: voided ? 'VOID' : homeWon ? 'WON' : 'LOST',
      },
      {
        selectionId: 'AWAY',
        outcome: voided ? 'VOID' : awayWon ? 'WON' : 'LOST',
      },
    ],
  };
}

function settleSpread(
  home: number,
  away: number,
  spreadHome: number,
  voided: boolean,
): SettledMarket {
  const homeWithSpread = home + spreadHome;
  let homeOut: SelectionResult = 'LOST';
  let awayOut: SelectionResult = 'LOST';
  if (voided) {
    homeOut = 'VOID';
    awayOut = 'VOID';
  } else if (homeWithSpread > away) {
    homeOut = 'WON';
  } else if (homeWithSpread < away) {
    awayOut = 'WON';
  } else {
    homeOut = 'VOID';
    awayOut = 'VOID';
  }
  const spStr = String(spreadHome).replace('.', '_').replace('-', 'neg_');
  return {
    marketCode: `${MarketType.SPREAD}_${spStr}`,
    settledSelections: [
      { selectionId: 'HOME', outcome: homeOut },
      { selectionId: 'AWAY', outcome: awayOut },
    ],
  };
}

function settleTotal(
  home: number,
  away: number,
  line: number,
  voided: boolean,
): SettledMarket {
  const total = home + away;
  const lineStr = String(line).replace('.', '_');
  return {
    marketCode: `${MarketType.TOTAL}_${lineStr}`,
    settledSelections: [
      {
        selectionId: 'OVER',
        outcome: voided ? 'VOID' : total > line ? 'WON' : total === line ? 'VOID' : 'LOST',
      },
      {
        selectionId: 'UNDER',
        outcome: voided ? 'VOID' : total < line ? 'WON' : total === line ? 'VOID' : 'LOST',
      },
    ],
  };
}

function settleSetWinner(
  sets: (number | null)[] | null | undefined,
  setIndex: number,
  voided: boolean,
): SettledMarket {
  const setsArr = sets ?? [];
  const homeSets = setsArr[setIndex] ?? null;
  const awaySets = setsArr[setIndex + 10] ?? null;
  let result: 'HOME' | 'AWAY' | null = null;
  if (homeSets !== null && awaySets !== null) {
    if (homeSets > awaySets) result = 'HOME';
    else if (awaySets > homeSets) result = 'AWAY';
  }
  const mk = `${MarketType.SET_WINNER}_S${setIndex + 1}`;
  return {
    marketCode: mk,
    settledSelections: [
      {
        selectionId: 'HOME',
        outcome: voided || result === null ? 'VOID' : result === 'HOME' ? 'WON' : 'LOST',
      },
      {
        selectionId: 'AWAY',
        outcome: voided || result === null ? 'VOID' : result === 'AWAY' ? 'WON' : 'LOST',
      },
    ],
  };
}

function settleGameWinner(
  voided: boolean,
): SettledMarket {
  return {
    marketCode: MarketType.GAME_WINNER,
    settledSelections: [
      { selectionId: 'HOME', outcome: voided ? 'VOID' : 'LOST' },
      { selectionId: 'AWAY', outcome: voided ? 'VOID' : 'LOST' },
    ],
  };
}

function settleTennisSets(
  scores: ProplineEventScores | null | undefined,
  voided: boolean,
): SettledMarket[] {
  const out: SettledMarket[] = [];
  const homeSets = (scores as unknown as { sets_score_home?: (number | null)[] })
    ?.sets_score_home;
  const awaySets = (scores as unknown as { sets_score_away?: (number | null)[] })
    ?.sets_score_away;
  const maxSets = Math.max(
    homeSets?.length ?? 0,
    awaySets?.length ?? 0,
    5,
  );
  for (let i = 0; i < maxSets; i++) {
    const sArr: (number | null)[] = [];
    if (homeSets?.[i] !== undefined) sArr[i] = homeSets[i];
    if (awaySets?.[i] !== undefined) sArr[i + 10] = awaySets[i];
    out.push(settleSetWinner(sArr, i, voided));
  }
  return out;
}

@Injectable()
export class OtherSportsSettlementService {
  private readonly logger = new Logger(OtherSportsSettlementService.name);

  constructor(
    private readonly propline: ProplineOddsProviderService,
    private readonly proplineHttp: ProplineHttpClient,
    private readonly prisma: PrismaService,
  ) {}

  private extractEventId(
    eventId: string,
    sportKey?: string,
  ): { rawId: string; sport: string } {
    const colon = eventId.indexOf(':');
    if (colon > 0) {
      return {
        sport: eventId.slice(0, colon).toUpperCase(),
        rawId: eventId.slice(colon + 1),
      };
    }
    return {
      rawId: eventId,
      sport: (sportKey ?? 'OTHER').toUpperCase(),
    };
  }

  async resolveSettlement(
    sportKey: string,
    eventId: string,
  ): Promise<OtherSportSettlementOutcome> {
    const { rawId, sport } = this.extractEventId(eventId, sportKey);
    const pending: OtherSportSettlementOutcome = {
      result: 'PENDING',
      settledBy: 'PROPLINE',
      settledAt: new Date(),
      finalScore: null,
      markets: [],
    };

    try {
      const ev: ProplineEvent | null = await this.proplineHttp.getEventById(rawId);
      if (!ev) {
        this.logger.verbose(
          `resolveSettlement: event ${rawId} (sport=${sport}) não encontrado -> PENDING`,
        );
        return pending;
      }

      const status: ProplineEventStatus = ev.status;
      if (
        status === 'scheduled' ||
        status === 'in_progress' ||
        status === 'halftime'
      ) {
        this.logger.verbose(
          `resolveSettlement: event ${rawId} status=${status} ainda em progresso -> PENDING`,
        );
        return pending;
      }

      const settledAtRaw = ev.last_updated_at ?? ev.start_date ?? undefined;
      let settledAt: Date;
      try {
        settledAt =
          settledAtRaw && !Number.isNaN(new Date(settledAtRaw).getTime())
            ? new Date(settledAtRaw)
            : new Date();
      } catch {
        settledAt = new Date();
      }

      const finalScore = extractFinalScore(ev.scores);
      const result = matchResultGeneric(
        finalScore.home,
        finalScore.away,
        status,
        sport,
      );
      const voided = result === 'CANCELLED' || result === 'POSTPONED';
      const noDraw = isNoDrawSport(sport);

      const markets: SettledMarket[] = [
        settleMoneyline(result, noDraw),
        settleMatchWinner12(result),
      ];

      const commonLines = [
        0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 10, 20, 50, 100, 150, 200,
      ];
      for (const line of commonLines) {
        markets.push(settleTotal(finalScore.home, finalScore.away, line, voided));
      }

      const commonSpreads = [-10, -5, -3, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 3, 5, 10];
      for (const sp of commonSpreads) {
        markets.push(settleSpread(finalScore.home, finalScore.away, sp, voided));
      }

      if (isTennisOrVolley(sport)) {
        markets.push(settleGameWinner(voided));
        const tennisSets = settleTennisSets(ev.scores, voided);
        markets.push(...tennisSets);
      }

      return {
        result: voided ? result : result,
        settledBy: 'PROPLINE',
        settledAt,
        finalScore: voided ? null : finalScore,
        markets,
      };
    } catch (err) {
      this.logger.warn(
        `resolveSettlement(${sport}, ${rawId}) erro: ${err instanceof Error ? err.message : String(err)}`,
      );
      return pending;
    }
  }

  async batchResolveSettlements(
    events: Array<{ sportKey: string; eventId: string }>,
  ): Promise<number> {
    if (events.length === 0) return 0;
    let settledCount = 0;
    for (const e of events) {
      try {
        const outcome = await this.resolveSettlement(e.sportKey, e.eventId);
        if (outcome.result !== 'PENDING') settledCount++;
      } catch {
        // nunca propagar
      }
    }
    this.logger.log(
      `batchResolveSettlements: ${settledCount}/${events.length} liquidados via PropLine`,
    );
    return settledCount;
  }

  async batchFinalStatusCount(
    events: Array<{ eventId: string; sportKey?: string }>,
  ): Promise<number> {
    if (events.length === 0) return 0;
    let count = 0;
    for (const e of events) {
      try {
        const { rawId } = this.extractEventId(e.eventId, e.sportKey);
        const ev = await this.proplineHttp.getEventById(rawId);
        if (
          ev &&
          (ev.status === 'final' || ev.status === 'ended' || ev.status === 'awarded')
        ) {
          count++;
        }
      } catch {
        // nunca propagar
      }
    }
    return count;
  }
}

export type { OtherSportSettlementOutcome, SettledMarket, SettledSelection };
