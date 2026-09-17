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

export type Period =
  | null
  | "q1"
  | "q2"
  | "q3"
  | "q4"
  | "ht"
  | "ft"
  | "et"
  | "pens"
  | "set1"
  | "set2"
  | "set3"
  | "set4"
  | "set5"
  | "inning1"
  | "inning2"
  | "inning3"
  | "inning4"
  | "inning5"
  | "inning6"
  | "inning7"
  | "inning8"
  | "inning9"
  | "period1"
  | "period2"
  | "period3"
  | "map1"
  | "map2"
  | "map3";

export type MatchStatusCode =
  | "scheduled"
  | "in_progress"
  | "halftime"
  | "final"
  | "postponed"
  | "cancelled"
  | "suspended"
  | "awarded"
  | "ns";

export interface Bet62Clock {
  minute: number | null;
  second: number | null;
  stoppage: number | null;
  periodName: string | null;
  period: Period;
  running: boolean;
  updatedAt: Date;
  source: "goal_api" | "propline" | "mock";
}

export interface FootballStats {
  possessionHome: number | null;
  possessionAway: number | null;
  shotsHome: number | null;
  shotsAway: number | null;
  shotsOnTargetHome: number | null;
  shotsOnTargetAway: number | null;
  cornersHome: number | null;
  cornersAway: number | null;
  foulsHome: number | null;
  foulsAway: number | null;
  offsidesHome: number | null;
  offsidesAway: number | null;
  yellowCardsHome: number | null;
  yellowCardsAway: number | null;
  redCardsHome: number | null;
  redCardsAway: number | null;
  savesHome: number | null;
  savesAway: number | null;
  xgHome: number | null;
  xgAway: number | null;
}

export type FootballLiveEventType =
  | "goal"
  | "own_goal"
  | "penalty_goal"
  | "penalty_missed"
  | "yellow_card"
  | "red_card"
  | "substitution"
  | "var_review"
  | "commentary";

export type PropLineEventType =
  | "odds_change"
  | "market_status"
  | "score_change"
  | "event_status";

export type Bet62LiveEventType = FootballLiveEventType | PropLineEventType;

export interface Bet62LiveEvent {
  id: string;
  provider: "goal_api" | "propline" | "mock";
  matchId: string;
  type: Bet62LiveEventType;
  timestamp: Date;
  sequence?: number | null;
  payload: Record<string, unknown>;
}

export interface Bet62Score {
  home: number | null;
  away: number | null;
  status: MatchStatusCode;
  updatedAt: Date;
}

export interface Bet62Bookmaker {
  id: number | string;
  name: string;
  code: string;
  priority: number;
  logoUrl?: string | null;
}

export interface Bet62Odd {
  selectionId: string;
  marketCode: string;
  bookmakerId: number | string;
  price: number;
  previousPrice?: number | null;
  trend: "up" | "down" | "flat";
  isBest: boolean;
  timestamp: Date;
  recordedAt?: Date | null;
  lastChangeAt?: Date | null;
}

export interface Bet62Selection {
  id: string;
  name: string;
  outcome: "home" | "draw" | "away" | "over" | "under" | "yes" | "no" | "void" | "win" | "loss";
  price: number;
  line?: number | null;
  handicap?: number | null;
  status: "active" | "suspended" | "settled" | "void";
}

export interface Bet62Market {
  id: string;
  code: string;
  group: string;
  label: string;
  period: Period;
  status: "active" | "suspended" | "settled" | "void";
  selections: Bet62Selection[];
  bestOdds: Bet62Odd[];
  bookmakerCount: number;
  updatedAt: Date;
  lineSpecifiers?: Record<string, number | string> | null;
}

export interface Bet62Match {
  id: string;
  sport: string;
  league: {
    id: string | number | null;
    name: string;
    logoUrl?: string | null;
    countryCode?: string | null;
  };
  homeTeam: {
    id: string | number | null;
    name: string;
    shortName?: string | null;
    logoUrl?: string | null;
    providerIds: Record<string, string | number>;
  };
  awayTeam: {
    id: string | number | null;
    name: string;
    shortName?: string | null;
    logoUrl?: string | null;
    providerIds: Record<string, string | number>;
  };
  kickoffAt: Date;
  score: Bet62Score;
  clock: Bet62Clock;
  providers: {
    goalApi?: {
      fixtureId: number | string;
      leagueId?: number | string | null;
      homeTeamId?: number | string | null;
      awayTeamId?: number | string | null;
    } | null;
    propline?: {
      eventId: string;
      sportKey: string;
      homeTeamKey: string;
      awayTeamKey: string;
      leagueKey?: string | null;
    } | null;
  };
  venue?: string | null;
  lastCommentary?: {
    id: string;
    minute: number | null;
    text: string;
    team?: "home" | "away" | "neutral" | null;
    zone?: string | null;
    timestamp: Date;
  } | null;
  updatedAt: Date;
  dataFreshness: string;
}

export interface DataFreshness {
  dataSource: "goal_api" | "propline" | "mock";
  scoreAgeMs: number | null;
  clockAgeMs: number | null;
  statsAgeMs: number | null;
  oddsAgeMs: Record<string, number>;
  stale: boolean;
}

export interface LiveMatchState {
  matchId: string;
  match: Bet62Match;
  stats: FootballStats | null;
  odds: Record<string, Bet62Market>;
  recentEvents: Bet62LiveEvent[];
  lastEventSequence: Record<string, number>;
  suspended: boolean;
  marketSuspension: Record<string, boolean>;
  suspensionReason: string | null;
  marketNextUpdate: Record<string, Date>;
  dataFreshness: DataFreshness;
  updatedAt: Date;
}
