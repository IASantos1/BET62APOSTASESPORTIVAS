import type {
  EventStatus,
  LiveEventType,
  MarketStatus,
  MarketType,
  OddsTrend,
  SelectionOutcome,
  SportType,
} from "../enums";
import type { Identifiable, Timestamped, PaginationResult } from "./common.interface";

export interface Sport extends Identifiable, Timestamped {
  slug: string;
  name: string;
  nameTranslations?: Record<string, string> | null;
  sportType: SportType;
  providerSportId?: string | null;
  active: boolean;
  featured: boolean;
  displayOrder: number;
  iconUrl?: string | null;
  colorHex?: string | null;
  totalLiveEvents: number;
  totalPrematchEvents: number;
  metadata?: unknown | null;
}

export interface League extends Identifiable, Timestamped {
  sportId: string;
  providerLeagueId?: string | null;
  externalId?: string | null;
  name: string;
  nameTranslations?: Record<string, string> | null;
  slug: string;
  countryCode?: string | null;
  tier?: string | null;
  season?: string | null;
  logoUrl?: string | null;
  active: boolean;
  featured: boolean;
  displayOrder: number;
  totalLiveEvents: number;
  totalPrematchEvents: number;
  metadata?: unknown | null;
}

export interface Team extends Identifiable, Timestamped {
  providerTeamId?: string | null;
  name: string;
  nameTranslations?: Record<string, string> | null;
  shortName?: string | null;
  slug: string;
  countryCode?: string | null;
  sportType: SportType;
  logoUrl?: string | null;
  foundedYear?: number | null;
  stadiumName?: string | null;
  stadiumCapacity?: number | null;
  active: boolean;
  metadata?: unknown | null;
}

export interface TeamScore {
  home: number;
  away: number;
}

export interface SportEvent extends Identifiable, Timestamped {
  sportId: string;
  leagueId: string;
  providerEventId?: string | null;
  externalId?: string | null;
  homeTeamId?: string | null;
  awayTeamId?: string | null;
  homeTeamName: string;
  awayTeamName: string;
  homeTeamLogoUrl?: string | null;
  awayTeamLogoUrl?: string | null;
  slug: string;
  status: EventStatus;
  isLive: boolean;
  kickoffAt: Date;
  actualKickoffAt?: Date | null;
  endsAt?: Date | null;
  currentPeriodMinute?: number | null;
  currentPeriodName?: string | null;
  scoreCurrent?: TeamScore | null;
  scoreRegularTime?: TeamScore | null;
  scoreHalfTime?: TeamScore | null;
  scoreFullTime?: TeamScore | null;
  scoreExtraTime?: TeamScore | null;
  scorePenalties?: TeamScore | null;
  cornerKicks?: TeamScore | null;
  yellowCards?: TeamScore | null;
  redCards?: TeamScore | null;
  substitutions?: TeamScore | null;
  possessionHome?: number | null;
  shotsOnTargetHome?: number | null;
  shotsOnTargetAway?: number | null;
  featured: boolean;
  displayOdds1?: number | null;
  displayOddsX?: number | null;
  displayOdds2?: number | null;
  homeRotationNumber?: number | null;
  awayRotationNumber?: number | null;
  venueName?: string | null;
  venueCity?: string | null;
  refereeName?: string | null;
  roundName?: string | null;
  metadata?: unknown | null;
  providerRawData?: unknown | null;
  lastOddsSyncAt?: Date | null;
  lastScoreSyncAt?: Date | null;
}

export interface Market extends Identifiable, Timestamped {
  eventId: string;
  providerMarketId?: string | null;
  externalId?: string | null;
  name: string;
  nameTranslations?: Record<string, string> | null;
  marketType: MarketType;
  specifiers?: Record<string, string | number> | null;
  status: MarketStatus;
  displayOrder: number;
  groupName?: string | null;
  isMain: boolean;
  templateCode?: string | null;
  settledAt?: Date | null;
  metadata?: unknown | null;
}

export interface Selection extends Identifiable, Timestamped {
  marketId: string;
  eventId: string;
  providerSelectionId?: string | null;
  externalId?: string | null;
  name: string;
  nameTranslations?: Record<string, string> | null;
  outcome: SelectionOutcome;
  specifiers?: Record<string, string | number> | null;
  odds: number;
  oddsDisplay?: string | null;
  previousOdds?: number | null;
  oddsTrend: OddsTrend;
  probabilityImplied?: number | null;
  trueProbability?: number | null;
  handicapValue?: number | null;
  totalLineValue?: number | null;
  status: MarketStatus;
  displayOrder: number;
  isSettled: boolean;
  settledOutcome?: SelectionOutcome | null;
  settledAt?: Date | null;
  lastOddsChangeAt?: Date | null;
}

export interface OddHistoryEntry extends Identifiable, Timestamped {
  selectionId: string;
  marketId: string;
  eventId: string;
  odds: number;
  previousOdds?: number | null;
  oddsTrend: OddsTrend;
  sourceType: "SYNC" | "LIVEWS" | "MANUAL" | "WEBHOOK";
  sourceRequestId?: string | null;
  overrideReason?: string | null;
  overrideBy?: string | null;
  suspensionReason?: string | null;
}

export interface LiveEvent extends Identifiable, Timestamped {
  eventId: string;
  providerEventId?: string | null;
  status: EventStatus;
  currentPeriodMinute: number;
  currentPeriodName: string;
  scoreCurrent: TeamScore;
  possessionHome?: number | null;
  shotsOnTarget?: TeamScore | null;
  shots?: TeamScore | null;
  cornerKicks?: TeamScore | null;
  yellowCards?: TeamScore | null;
  redCards?: TeamScore | null;
  substitutions?: TeamScore | null;
  attacks?: TeamScore | null;
  dangerousAttacks?: TeamScore | null;
  lastEventType?: LiveEventType | null;
  lastEventMinute?: number | null;
  lastEventPlayerName?: string | null;
  lastEventTeam?: "home" | "away" | null;
  commentaryJson?: unknown | null;
  lastLiveSyncAt?: Date | null;
}

export interface LiveEventUpdate extends Identifiable {
  eventId: string;
  timestamp: Date;
  eventType: LiveEventType;
  minute?: number | null;
  team?: "home" | "away" | "neutral" | null;
  playerName?: string | null;
  playerNumber?: number | null;
  assistPlayerName?: string | null;
  description?: string | null;
  scoreAfter?: TeamScore | null;
  periodName?: string | null;
  metadata?: unknown | null;
}

export interface ProviderSyncLog extends Identifiable, Timestamped {
  providerName: string;
  syncType:
    | "SPORTS"
    | "LEAGUES"
    | "TEAMS"
    | "PREMATCH_EVENTS"
    | "LIVE_EVENTS"
    | "ODDS_PREMATCH"
    | "ODDS_LIVE"
    | "LIVE_SCORES"
    | "SETTLEMENTS";
  entityCount: number;
  successCount: number;
  failedCount: number;
  startedAt: Date;
  finishedAt: Date;
  durationMs: number;
  success: boolean;
  errorMessage?: string | null;
  requestId?: string | null;
  externalTraceId?: string | null;
}

export interface OddsProviderEventsResult {
  events: SportEvent[];
  markets: Market[];
  selections: Selection[];
  leagues?: League[] | null;
  teams?: Team[] | null;
  pagination?: PaginationResult<never>;
}
