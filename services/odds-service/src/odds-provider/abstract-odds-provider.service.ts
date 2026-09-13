import { Logger } from '@nestjs/common';
import type { Sport, League } from '@bet62/shared';

export interface LiveOddsSelection {
  id: string;
  name: string;
  odds: number;
  outcome?: string;
  status?: 'ACTIVE' | 'SUSPENDED' | 'SETTLED';
}

export interface LiveOddsMarket {
  id: string;
  type: string;
  name: string;
  selections: LiveOddsSelection[];
}

export interface LiveOddsEvent {
  id: string;
  providerEventId?: string;
  name: string;
  sport?: string;
  leagueId?: string;
  leagueName?: string;
  homeTeamName?: string;
  awayTeamName?: string;
  homeScore?: number;
  awayScore?: number;
  minute?: number;
  status: 'LIVE' | 'HALF_TIME' | 'SUSPENDED';
  kickoffAt?: Date;
  markets?: LiveOddsMarket[];
  updatedAt?: Date;
}

export interface UpcomingEvent {
  id: string;
  providerEventId?: string;
  name: string;
  sport?: string;
  leagueId?: string;
  leagueName?: string;
  homeTeamName?: string;
  awayTeamName?: string;
  kickoffAt: Date;
  status: 'PRE_MATCH' | 'PRE_LIVE';
  isTop?: boolean;
  isFeatured?: boolean;
  markets?: LiveOddsMarket[];
}

export type SettlementResult = 'WIN' | 'LOSE' | 'DRAW' | 'VOID' | 'PENDING';

export interface OddsSettlementOutcome {
  eventId: string;
  selectionId: string;
  result: SettlementResult;
  settledAt?: Date;
  finalScore?: { home: number; away: number };
  voidReason?: string;
}

export abstract class AbstractOddsProvider {
  abstract readonly providerName: string;
  protected readonly logger: Logger;

  constructor() {
    this.logger = new Logger(this.constructor.name);
  }

  abstract fetchLiveOdds(sport?: string, league?: string): Promise<LiveOddsEvent[]>;

  abstract fetchUpcomingEvents(
    sport?: string,
    league?: string,
    from?: Date,
    to?: Date,
  ): Promise<UpcomingEvent[]>;

  abstract fetchSettlementOutcome(
    eventId: string,
    selectionId: string,
  ): Promise<OddsSettlementOutcome>;

  abstract getSports(): Promise<Sport[]>;

  abstract getLeagues(sport: string): Promise<League[]>;
}
