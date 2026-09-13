import type { LiveEventType, MarketStatus, MarketType, SelectionOutcome, SportType } from '@bet62/shared';

export interface PrematchEventsQuery {
  sports?: SportType[];
  leagueIds?: string[];
  searchTerm?: string;
  period?: string;
  fromDate?: Date;
  toDate?: Date;
  topEventsOnly?: boolean;
  onlyWithLiveStream?: boolean;
  page?: number;
  limit?: number;
}

export interface LiveEventsQuery {
  sports?: SportType[];
  leagueIds?: string[];
  onlyWithActiveMarkets?: boolean;
  onlyWithLiveStream?: boolean;
  page?: number;
  limit?: number;
}

export interface ProviderLeague {
  id: string;
  providerLeagueId: string;
  name: string;
  sportCode: string;
  countryCode?: string;
  tier?: number;
  isTop?: boolean;
}

export interface ProviderTeam {
  id: string;
  providerTeamId: string;
  name: string;
  shortName?: string;
  logoUrl?: string;
  sportCode: string;
  countryCode?: string;
}

export interface ProviderMarketSelection {
  id: string;
  providerSelectionId: string;
  name: string;
  outcome: SelectionOutcome;
  odds: number;
  oddsDisplay?: string;
  status?: MarketStatus;
  probabilityPercent?: number;
  handicapValue?: number;
  totalLineValue?: number;
  isTrendingUp?: boolean;
}

export interface ProviderMarket {
  id: string;
  providerMarketId: string;
  eventId: string;
  type: MarketType;
  name: string;
  specifiers?: Record<string, string | number>;
  handicapValue?: number;
  totalLineValue?: number;
  period?: string;
  status?: MarketStatus;
  displayedName?: string;
  cashoutAvailable?: boolean;
  selections: ProviderMarketSelection[];
}

export interface ProviderEvent {
  id: string;
  providerEventId: string;
  name: string;
  sportCode: string;
  leagueId: string;
  leagueName: string;
  homeTeamId?: string;
  awayTeamId?: string;
  homeTeamName?: string;
  awayTeamName?: string;
  homeScore?: number;
  awayScore?: number;
  homeHalfScore?: number;
  awayHalfScore?: number;
  status: 'PRE_MATCH' | 'PRE_LIVE' | 'LIVE' | 'HALF_TIME' | 'ENDED' | 'FINISHED' | 'SUSPENDED' | 'POSTPONED' | 'CANCELLED';
  kickoffAt: Date;
  liveStartedAt?: Date;
  liveUpdatedAt?: Date;
  minuteOfMatch?: number;
  injuryMinutes?: number;
  liveCoverageAvailable?: boolean;
  liveStreamAvailable?: boolean;
  streamUrl?: string;
  isTop?: boolean;
  isFeatured?: boolean;
  slug?: string;
  marketsCount?: number;
  markets?: ProviderMarket[];
}

export interface ProviderEventDetail extends ProviderEvent {
  markets: ProviderMarket[];
}

export interface IncrementalSyncResult {
  updatedEvents: string[];
  updatedMarketIds: string[];
  updatedSelectionIds: string[];
  removedEventIds: string[];
  lastChangeId?: string;
  syncedAt: Date;
}

export interface OddsChangeNotification {
  selectionId: string;
  marketId: string;
  eventId: string;
  oldOdds: number;
  newOdds: number;
  status?: MarketStatus;
  changedAt: Date;
  providerChangeId?: string;
}

export type OddsChangeCallback = (changes: OddsChangeNotification[]) => void | Promise<void>;

export interface OddsProvider {
  readonly providerName: string;

  getPrematchEvents(query: PrematchEventsQuery): Promise<{ events: ProviderEvent[]; total: number }>;
  getLiveEvents(query: LiveEventsQuery): Promise<{ events: ProviderEvent[]; total: number }>;
  getEventDetail(eventId: string, includeMarkets?: boolean): Promise<ProviderEventDetail | null>;
  getActiveLeagues(sport?: SportType): Promise<ProviderLeague[]>;
  syncIncremental(since?: Date): Promise<IncrementalSyncResult>;
  subscribeOddsChanges?(callback: OddsChangeCallback): () => void;
}
