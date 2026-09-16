import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import {
  GoalApiHttpClient,
  GoalApiOddsProviderService,
} from '../../odds-provider/goalapi';
import type {
  GoalApiFixture,
  GoalApiFixtureStatus,
  GoalApiScore,
} from '../../odds-provider/goalapi/goalapi.types';
import { MarketType, SelectionOutcome } from '@bet62/shared';

type SettlementMatchResult =
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

interface FootballSettlementOutcome {
  result: SettlementMatchResult;
  settledBy: 'GOAL_API';
  settledAt: Date;
  finalScore: { home: number; away: number } | null;
  halfTimeScore?: { home: number; away: number } | null;
  markets: SettledMarket[];
}

const FINAL_STATUSES: readonly GoalApiFixtureStatus[] = ['FT', 'AET', 'PEN'];
const IN_PROGRESS_STATUSES: readonly GoalApiFixtureStatus[] = [
  '1H',
  'HT',
  '2H',
  'LIVE',
  'ET',
  'BT',
];

function n(v: unknown): number {
  if (v === null || v === undefined) return 0;
  if (typeof v === 'number') return Number.isFinite(v) ? v : 0;
  const n = Number(String(v));
  return Number.isFinite(n) ? n : 0;
}

function extractFinalScore(
  score: GoalApiScore | undefined,
  status: GoalApiFixtureStatus | string,
): { home: number; away: number } {
  if (!score) return { home: 0, away: 0 };
  if (status === 'PEN' && score.penalty) {
    const ph = n(score.penalty.home);
    const pa = n(score.penalty.away);
    if (ph > 0 || pa > 0) return { home: ph, away: pa };
  }
  if (status === 'AET' && score.extratime) {
    const eh = n(score.extratime.home);
    const ea = n(score.extratime.away);
    if (eh > 0 || ea > 0) return { home: eh, away: ea };
  }
  if (score.fulltime) {
    const fh = n(score.fulltime.home);
    const fa = n(score.fulltime.away);
    if (fh > 0 || fa > 0) return { home: fh, away: fa };
  }
  if (score.total) {
    return { home: n(score.total.home), away: n(score.total.away) };
  }
  if (score.current) {
    return { home: n(score.current.home), away: n(score.current.away) };
  }
  return { home: 0, away: 0 };
}

function extractHalfTimeScore(
  score: GoalApiScore | undefined,
): { home: number; away: number } | null {
  if (!score?.halftime) return null;
  const h = n(score.halftime.home);
  const a = n(score.halftime.away);
  if (h === 0 && a === 0) return { home: 0, away: 0 };
  return { home: h, away: a };
}

function matchResult(
  home: number,
  away: number,
  status: GoalApiFixtureStatus | string,
): SettlementMatchResult {
  if (status === 'CANC') return 'CANCELLED';
  if (status === 'PST' || status === 'INT' || status === 'TBD') return 'POSTPONED';
  if (!FINAL_STATUSES.includes(status as GoalApiFixtureStatus)) return 'PENDING';
  if (home > away) return 'HOME';
  if (away > home) return 'AWAY';
  return 'DRAW';
}

function settleMatchWinner1X2(
  result: SettlementMatchResult,
): SettledMarket {
  const homeWon = result === 'HOME';
  const drawWon = result === 'DRAW';
  const awayWon = result === 'AWAY';
  const voided = result === 'CANCELLED' || result === 'POSTPONED';
  return {
    marketCode: MarketType.MATCH_WINNER_1X2,
    settledSelections: [
      {
        selectionId: 'HOME',
        outcome: voided ? 'VOID' : homeWon ? 'WON' : 'LOST',
      },
      {
        selectionId: 'DRAW',
        outcome: voided ? 'VOID' : drawWon ? 'WON' : 'LOST',
      },
      {
        selectionId: 'AWAY',
        outcome: voided ? 'VOID' : awayWon ? 'WON' : 'LOST',
      },
    ],
  };
}

function settleOverUnderTotal(
  home: number,
  away: number,
  line: number,
  voided: boolean,
): SettledMarket {
  const total = home + away;
  const lineStr = String(line).replace('.', '_');
  return {
    marketCode: `${MarketType.OVER_UNDER_TOTAL}_${lineStr}`,
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

function settleBtts(home: number, away: number, voided: boolean): SettledMarket {
  const bothScored = home > 0 && away > 0;
  return {
    marketCode: MarketType.BTTS_YES_NO,
    settledSelections: [
      {
        selectionId: 'YES',
        outcome: voided ? 'VOID' : bothScored ? 'WON' : 'LOST',
      },
      {
        selectionId: 'NO',
        outcome: voided ? 'VOID' : !bothScored ? 'WON' : 'LOST',
      },
    ],
  };
}

function settleDoubleChance(
  result: SettlementMatchResult,
): SettledMarket {
  const homeWon = result === 'HOME';
  const drawWon = result === 'DRAW';
  const awayWon = result === 'AWAY';
  const voided = result === 'CANCELLED' || result === 'POSTPONED';
  return {
    marketCode: MarketType.DOUBLE_CHANCE,
    settledSelections: [
      {
        selectionId: '1X',
        outcome: voided ? 'VOID' : homeWon || drawWon ? 'WON' : 'LOST',
      },
      {
        selectionId: '12',
        outcome: voided ? 'VOID' : homeWon || awayWon ? 'WON' : 'LOST',
      },
      {
        selectionId: 'X2',
        outcome: voided ? 'VOID' : drawWon || awayWon ? 'WON' : 'LOST',
      },
    ],
  };
}

function settleHandicap(
  home: number,
  away: number,
  handicapHome: number,
  voided: boolean,
): SettledMarket {
  const homeWithHc = home + handicapHome;
  const awayRaw = away;
  const result =
    homeWithHc > awayRaw
      ? 'HOME'
      : homeWithHc < awayRaw
        ? 'AWAY'
        : 'DRAW';
  const hcStr = String(handicapHome).replace('.', '_').replace('-', 'neg_');
  return {
    marketCode: `${MarketType.EUROPEAN_HANDICAP}_${hcStr}`,
    settledSelections: [
      {
        selectionId: 'HOME',
        outcome: voided ? 'VOID' : result === 'HOME' ? 'WON' : 'LOST',
      },
      {
        selectionId: 'DRAW',
        outcome: voided ? 'VOID' : result === 'DRAW' ? 'VOID' : 'LOST',
      },
      {
        selectionId: 'AWAY',
        outcome: voided ? 'VOID' : result === 'AWAY' ? 'WON' : 'LOST',
      },
    ],
  };
}

function settleAsianHandicap(
  home: number,
  away: number,
  handicapHome: number,
  voided: boolean,
): SettledMarket {
  const homeWithHc = home + handicapHome;
  const diff = homeWithHc - away;
  const hcStr = String(handicapHome).replace('.', '_').replace('-', 'neg_');
  let homeOutcome: SelectionResult = 'LOST';
  let awayOutcome: SelectionResult = 'LOST';
  if (!voided) {
    if (diff > 0.25) {
      homeOutcome = 'WON';
    } else if (Math.abs(diff) <= 0.25) {
      homeOutcome = 'VOID';
      awayOutcome = 'VOID';
    } else if (diff < -0.25) {
      awayOutcome = 'WON';
    } else {
      if (diff > 0) {
        homeOutcome = 'WON';
      } else if (diff < 0) {
        awayOutcome = 'WON';
      } else {
        homeOutcome = 'VOID';
        awayOutcome = 'VOID';
      }
    }
  } else {
    homeOutcome = 'VOID';
    awayOutcome = 'VOID';
  }
  return {
    marketCode: `${MarketType.ASIAN_HANDICAP}_${hcStr}`,
    settledSelections: [
      { selectionId: 'HOME', outcome: homeOutcome },
      { selectionId: 'AWAY', outcome: awayOutcome },
    ],
  };
}

function settleCorrectScore(
  home: number,
  away: number,
  voided: boolean,
): SettledMarket {
  return {
    marketCode: MarketType.CORRECT_SCORE,
    settledSelections: [
      {
        selectionId: `${home}-${away}`,
        outcome: voided ? 'VOID' : 'WON',
      },
    ],
  };
}

function settleHalfTimeResult(
  ht: { home: number; away: number } | null,
  voided: boolean,
): SettledMarket {
  let result: SettlementMatchResult = 'PENDING';
  if (ht) {
    result =
      ht.home > ht.away
        ? 'HOME'
        : ht.away > ht.home
          ? 'AWAY'
          : 'DRAW';
  }
  return {
    marketCode: MarketType.HALF_TIME_RESULT,
    settledSelections: [
      {
        selectionId: 'HOME',
        outcome: voided || !ht ? 'VOID' : result === 'HOME' ? 'WON' : 'LOST',
      },
      {
        selectionId: 'DRAW',
        outcome: voided || !ht ? 'VOID' : result === 'DRAW' ? 'WON' : 'LOST',
      },
      {
        selectionId: 'AWAY',
        outcome: voided || !ht ? 'VOID' : result === 'AWAY' ? 'WON' : 'LOST',
      },
    ],
  };
}

@Injectable()
export class FootballSettlementService {
  private readonly logger = new Logger(FootballSettlementService.name);

  constructor(
    private readonly goalApi: GoalApiOddsProviderService,
    private readonly goalHttp: GoalApiHttpClient,
    private readonly prisma: PrismaService,
  ) {}

  private extractFixtureId(matchId: string, mappingId?: string): string {
    if (mappingId && mappingId.trim() !== '') return mappingId.trim();
    if (matchId.startsWith('goal:')) return matchId.slice(5);
    const colon = matchId.indexOf(':');
    if (colon > 0) return matchId.slice(colon + 1);
    return matchId;
  }

  async resolveSettlement(
    matchId: string,
    mappingId?: string,
  ): Promise<FootballSettlementOutcome> {
    const fixtureId = this.extractFixtureId(matchId, mappingId);
    const pending: FootballSettlementOutcome = {
      result: 'PENDING',
      settledBy: 'GOAL_API',
      settledAt: new Date(),
      finalScore: null,
      markets: [],
    };

    try {
      const fixturePromise = this.goalHttp.getFixtureById(fixtureId);
      const eventsPromise = this.goalHttp.getEventsByFixture(fixtureId);
      const lineupsPromise = this.goalHttp.getLineupsByFixture(fixtureId);

      const [fixture] = await Promise.all([
        fixturePromise,
        eventsPromise.catch(() => []),
        lineupsPromise.catch(() => null),
      ]);

      if (!fixture) {
        this.logger.verbose(`resolveSettlement: fixture ${fixtureId} não encontrada -> PENDING`);
        return pending;
      }

      const status = (fixture.status ?? 'NS') as GoalApiFixtureStatus;
      const isInProgress = IN_PROGRESS_STATUSES.includes(status) || status === 'NS';
      if (isInProgress) {
        this.logger.verbose(
          `resolveSettlement: fixture ${fixtureId} status=${status} ainda em progresso -> PENDING`,
        );
        return pending;
      }

      const settledAtRaw =
        (fixture.last_updated_at as string) ||
        (fixture.date as string) ||
        undefined;
      let settledAt: Date;
      try {
        settledAt = settledAtRaw && !Number.isNaN(new Date(settledAtRaw).getTime())
          ? new Date(settledAtRaw)
          : new Date();
      } catch {
        settledAt = new Date();
      }

      const finalScore = extractFinalScore(fixture.score, status);
      const halfTimeScore = extractHalfTimeScore(fixture.score);
      const result = matchResult(finalScore.home, finalScore.away, status);

      const voided = result === 'CANCELLED' || result === 'POSTPONED';

      const markets: SettledMarket[] = [
        settleMatchWinner1X2(result),
        settleDoubleChance(result),
        settleBtts(finalScore.home, finalScore.away, voided),
        settleCorrectScore(finalScore.home, finalScore.away, voided),
        settleHalfTimeResult(halfTimeScore, voided),
      ];

      const commonLines = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
      for (const line of commonLines) {
        markets.push(settleOverUnderTotal(finalScore.home, finalScore.away, line, voided));
      }

      const commonHandicaps = [-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2];
      for (const hc of commonHandicaps) {
        markets.push(settleHandicap(finalScore.home, finalScore.away, hc, voided));
        markets.push(settleAsianHandicap(finalScore.home, finalScore.away, hc, voided));
      }

      return {
        result,
        settledBy: 'GOAL_API',
        settledAt,
        finalScore: voided ? null : finalScore,
        halfTimeScore,
        markets,
      };
    } catch (err) {
      this.logger.warn(
        `resolveSettlement(${fixtureId}) erro: ${err instanceof Error ? err.message : String(err)}`,
      );
      return pending;
    }
  }

  async batchResolveSettlements(fixtureIds: string[]): Promise<number> {
    if (fixtureIds.length === 0) return 0;
    let settledCount = 0;
    for (const id of fixtureIds) {
      try {
        const outcome = await this.resolveSettlement(id);
        if (outcome.result !== 'PENDING') {
          settledCount++;
        }
      } catch {
        // nunca propagar
      }
    }
    this.logger.log(
      `batchResolveSettlements: ${settledCount}/${fixtureIds.length} marcados FT via Goal API`,
    );
    return settledCount;
  }

  async batchFinalStatusCount(fixtureIds: string[]): Promise<number> {
    if (fixtureIds.length === 0) return 0;
    let ftCount = 0;
    for (const id of fixtureIds) {
      try {
        const fid = this.extractFixtureId(id);
        const f = await this.goalHttp.getFixtureById(fid);
        if (f && FINAL_STATUSES.includes(f.status as GoalApiFixtureStatus)) {
          ftCount++;
        }
      } catch {
        // nunca propagar
      }
    }
    return ftCount;
  }
}

export type { FootballSettlementOutcome, SettledMarket, SettledSelection };
