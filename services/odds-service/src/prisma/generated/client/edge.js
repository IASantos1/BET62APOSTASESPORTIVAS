
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.SportScalarFieldEnum = {
  id: 'id',
  code: 'code',
  name: 'name',
  active: 'active',
  orderIndex: 'orderIndex',
  iconUrl: 'iconUrl',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.CountryScalarFieldEnum = {
  id: 'id',
  code: 'code',
  name: 'name',
  flag: 'flag'
};

exports.Prisma.LeagueScalarFieldEnum = {
  id: 'id',
  providerLeagueId: 'providerLeagueId',
  name: 'name',
  sportId: 'sportId',
  countryId: 'countryId',
  tier: 'tier',
  active: 'active',
  isTop: 'isTop',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.TeamScalarFieldEnum = {
  id: 'id',
  providerTeamId: 'providerTeamId',
  name: 'name',
  shortName: 'shortName',
  logoUrl: 'logoUrl',
  sportId: 'sportId',
  countryId: 'countryId',
  aliases: 'aliases'
};

exports.Prisma.EventScalarFieldEnum = {
  id: 'id',
  providerEventId: 'providerEventId',
  name: 'name',
  sportId: 'sportId',
  leagueId: 'leagueId',
  homeTeamId: 'homeTeamId',
  awayTeamId: 'awayTeamId',
  homeTeamName: 'homeTeamName',
  awayTeamName: 'awayTeamName',
  homeScore: 'homeScore',
  awayScore: 'awayScore',
  homeHalfScore: 'homeHalfScore',
  awayHalfScore: 'awayHalfScore',
  extraTimeScore: 'extraTimeScore',
  penaltyScore: 'penaltyScore',
  status: 'status',
  kickoffAt: 'kickoffAt',
  liveStartedAt: 'liveStartedAt',
  liveUpdatedAt: 'liveUpdatedAt',
  firstHalfStart: 'firstHalfStart',
  secondHalfStart: 'secondHalfStart',
  minuteOfMatch: 'minuteOfMatch',
  injuryMinutes: 'injuryMinutes',
  liveCoverageAvailable: 'liveCoverageAvailable',
  liveStreamAvailable: 'liveStreamAvailable',
  streamUrl: 'streamUrl',
  eventMeta: 'eventMeta',
  isTop: 'isTop',
  isFeatured: 'isFeatured',
  oddsLastCheckedAt: 'oddsLastCheckedAt',
  marketsCount: 'marketsCount',
  activeBetCount: 'activeBetCount',
  settledAt: 'settledAt',
  winner: 'winner',
  slug: 'slug',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.MarketScalarFieldEnum = {
  id: 'id',
  providerMarketId: 'providerMarketId',
  eventId: 'eventId',
  type: 'type',
  name: 'name',
  specifiers: 'specifiers',
  handicapValue: 'handicapValue',
  totalLineValue: 'totalLineValue',
  period: 'period',
  status: 'status',
  displayedName: 'displayedName',
  cashoutAvailable: 'cashoutAvailable',
  firstCashoutAt: 'firstCashoutAt',
  lastSuspendedAt: 'lastSuspendedAt',
  suspendedReason: 'suspendedReason',
  source: 'source',
  openDate: 'openDate',
  closeDate: 'closeDate',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.MarketSelectionScalarFieldEnum = {
  id: 'id',
  providerSelectionId: 'providerSelectionId',
  marketId: 'marketId',
  name: 'name',
  outcome: 'outcome',
  odds: 'odds',
  oddsDisplay: 'oddsDisplay',
  status: 'status',
  probabilityPercent: 'probabilityPercent',
  handicapValue: 'handicapValue',
  totalLineValue: 'totalLineValue',
  originalOdds: 'originalOdds',
  lastChangedAt: 'lastChangedAt',
  lastChangedBy: 'lastChangedBy',
  isTrendingUp: 'isTrendingUp',
  isBestOffered: 'isBestOffered',
  meta: 'meta'
};

exports.Prisma.LiveMatchUpdateScalarFieldEnum = {
  id: 'id',
  eventId: 'eventId',
  type: 'type',
  minute: 'minute',
  homeScore: 'homeScore',
  awayScore: 'awayScore',
  homeHalfScore: 'homeHalfScore',
  awayHalfScore: 'awayHalfScore',
  period: 'period',
  incidentData: 'incidentData',
  playerName: 'playerName',
  teamSide: 'teamSide',
  clockMinutes: 'clockMinutes',
  stoppageMinutes: 'stoppageMinutes',
  extraTime: 'extraTime',
  matchStatusAfter: 'matchStatusAfter',
  createdAt: 'createdAt'
};

exports.Prisma.ProviderSyncStateScalarFieldEnum = {
  id: 'id',
  provider: 'provider',
  lastFullSyncAt: 'lastFullSyncAt',
  lastIncrementalSyncAt: 'lastIncrementalSyncAt',
  nextSyncAt: 'nextSyncAt',
  eventsCreated: 'eventsCreated',
  marketsCreated: 'marketsCreated',
  oddsUpdatedCount: 'oddsUpdatedCount',
  lastEventId: 'lastEventId',
  lastChangeId: 'lastChangeId',
  state: 'state',
  syncErrors: 'syncErrors',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.EventStatus = exports.$Enums.EventStatus = {
  PRE_MATCH: 'PRE_MATCH',
  PRE_LIVE: 'PRE_LIVE',
  LIVE: 'LIVE',
  HALF_TIME: 'HALF_TIME',
  ENDED: 'ENDED',
  FINISHED: 'FINISHED',
  SUSPENDED: 'SUSPENDED',
  POSTPONED: 'POSTPONED',
  CANCELLED: 'CANCELLED',
  ABANDONED: 'ABANDONED',
  INTERRUPTED: 'INTERRUPTED',
  WALKOVER: 'WALKOVER'
};

exports.MarketType = exports.$Enums.MarketType = {
  MATCH_WINNER_1X2: 'MATCH_WINNER_1X2',
  MATCH_WINNER_12: 'MATCH_WINNER_12',
  OVER_UNDER_TOTAL: 'OVER_UNDER_TOTAL',
  OVER_UNDER_HOME: 'OVER_UNDER_HOME',
  OVER_UNDER_AWAY: 'OVER_UNDER_AWAY',
  BTTS_YES_NO: 'BTTS_YES_NO',
  CORRECT_SCORE: 'CORRECT_SCORE',
  HALF_TIME_RESULT: 'HALF_TIME_RESULT',
  HALF_TIME_FULL_TIME: 'HALF_TIME_FULL_TIME',
  DOUBLE_CHANCE: 'DOUBLE_CHANCE',
  ASIAN_HANDICAP: 'ASIAN_HANDICAP',
  EUROPEAN_HANDICAP: 'EUROPEAN_HANDICAP',
  FIRST_GOAL_SCORER: 'FIRST_GOAL_SCORER',
  ANYTIME_GOAL_SCORER: 'ANYTIME_GOAL_SCORER',
  EXACT_GOALS: 'EXACT_GOALS',
  MATCH_RESULT_BOTH_TEAMS_TO_SCORE: 'MATCH_RESULT_BOTH_TEAMS_TO_SCORE',
  DRAW_NO_BET: 'DRAW_NO_BET',
  TOTAL_CORNERS: 'TOTAL_CORNERS',
  TOTAL_CARDS: 'TOTAL_CARDS',
  NEXT_GOAL: 'NEXT_GOAL',
  WINNING_MARGIN: 'WINNING_MARGIN',
  SET_WINNER: 'SET_WINNER',
  GAME_WINNER: 'GAME_WINNER',
  TIE_NO_BET: 'TIE_NO_BET',
  TOTAL_POINTS: 'TOTAL_POINTS',
  MONEYLINE: 'MONEYLINE',
  SPREAD: 'SPREAD',
  TOTAL: 'TOTAL'
};

exports.MarketStatus = exports.$Enums.MarketStatus = {
  ACTIVE: 'ACTIVE',
  SUSPENDED: 'SUSPENDED',
  CLOSED: 'CLOSED',
  SETTLED: 'SETTLED'
};

exports.SelectionOutcome = exports.$Enums.SelectionOutcome = {
  HOME: 'HOME',
  DRAW: 'DRAW',
  AWAY: 'AWAY',
  OVER: 'OVER',
  UNDER: 'UNDER',
  YES: 'YES',
  NO: 'NO',
  WON: 'WON',
  LOST: 'LOST',
  VOID: 'VOID',
  PENDING: 'PENDING',
  HALF_WON: 'HALF_WON',
  HALF_LOST: 'HALF_LOST'
};

exports.LiveEventType = exports.$Enums.LiveEventType = {
  GOAL_HOME: 'GOAL_HOME',
  GOAL_AWAY: 'GOAL_AWAY',
  OWN_GOAL_HOME: 'OWN_GOAL_HOME',
  OWN_GOAL_AWAY: 'OWN_GOAL_AWAY',
  YELLOW_CARD: 'YELLOW_CARD',
  RED_CARD: 'RED_CARD',
  SECOND_YELLOW: 'SECOND_YELLOW',
  SUBSTITUTION: 'SUBSTITUTION',
  PENALTY_MISSED: 'PENALTY_MISSED',
  PENALTY_SCORED: 'PENALTY_SCORED',
  KICK_OFF: 'KICK_OFF',
  HALF_TIME_BEGIN: 'HALF_TIME_BEGIN',
  HALF_TIME_END: 'HALF_TIME_END',
  END_OF_REGULATION: 'END_OF_REGULATION',
  EXTRA_TIME_BEGIN: 'EXTRA_TIME_BEGIN',
  PENALTY_SHOOTOUT_BEGIN: 'PENALTY_SHOOTOUT_BEGIN',
  MATCH_ENDED: 'MATCH_ENDED',
  MATCH_SUSPENDED: 'MATCH_SUSPENDED',
  MATCH_POSTPONED: 'MATCH_POSTPONED',
  INJURY: 'INJURY',
  VAR_REVIEW: 'VAR_REVIEW',
  GAME_SCORE: 'GAME_SCORE',
  SET_WON: 'SET_WON',
  MATCH_WON: 'MATCH_WON',
  TIMEOUT: 'TIMEOUT'
};

exports.Prisma.ModelName = {
  Sport: 'Sport',
  Country: 'Country',
  League: 'League',
  Team: 'Team',
  Event: 'Event',
  Market: 'Market',
  MarketSelection: 'MarketSelection',
  LiveMatchUpdate: 'LiveMatchUpdate',
  ProviderSyncState: 'ProviderSyncState'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\israe\\Desktop\\BET62APOSTAS\\services\\odds-service\\src\\prisma\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [
      "multiSchema"
    ],
    "sourceFilePath": "C:\\Users\\israe\\Desktop\\BET62APOSTAS\\services\\odds-service\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null
  },
  "relativePath": "../../../../prisma",
  "clientVersion": "5.22.0",
  "engineVersion": "605197351a3c8bdd595af2d2a9bc3025bca48ea2",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider        = \"prisma-client-js\"\n  output          = \"../src/prisma/generated/client\"\n  previewFeatures = [\"multiSchema\"]\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n  schemas  = [\"odds\"]\n}\n\nenum EventStatus {\n  PRE_MATCH\n  PRE_LIVE\n  LIVE\n  HALF_TIME\n  ENDED\n  FINISHED\n  SUSPENDED\n  POSTPONED\n  CANCELLED\n  ABANDONED\n  INTERRUPTED\n  WALKOVER\n\n  @@schema(\"odds\")\n}\n\nenum MarketType {\n  MATCH_WINNER_1X2\n  MATCH_WINNER_12\n  OVER_UNDER_TOTAL\n  OVER_UNDER_HOME\n  OVER_UNDER_AWAY\n  BTTS_YES_NO\n  CORRECT_SCORE\n  HALF_TIME_RESULT\n  HALF_TIME_FULL_TIME\n  DOUBLE_CHANCE\n  ASIAN_HANDICAP\n  EUROPEAN_HANDICAP\n  FIRST_GOAL_SCORER\n  ANYTIME_GOAL_SCORER\n  EXACT_GOALS\n  MATCH_RESULT_BOTH_TEAMS_TO_SCORE\n  DRAW_NO_BET\n  TOTAL_CORNERS\n  TOTAL_CARDS\n  NEXT_GOAL\n  WINNING_MARGIN\n  SET_WINNER\n  GAME_WINNER\n  TIE_NO_BET\n  TOTAL_POINTS\n  MONEYLINE\n  SPREAD\n  TOTAL\n\n  @@schema(\"odds\")\n}\n\nenum MarketStatus {\n  ACTIVE\n  SUSPENDED\n  CLOSED\n  SETTLED\n\n  @@schema(\"odds\")\n}\n\nenum SelectionOutcome {\n  HOME\n  DRAW\n  AWAY\n  OVER\n  UNDER\n  YES\n  NO\n  WON\n  LOST\n  VOID\n  PENDING\n  HALF_WON\n  HALF_LOST\n\n  @@schema(\"odds\")\n}\n\nenum LiveEventType {\n  GOAL_HOME\n  GOAL_AWAY\n  OWN_GOAL_HOME\n  OWN_GOAL_AWAY\n  YELLOW_CARD\n  RED_CARD\n  SECOND_YELLOW\n  SUBSTITUTION\n  PENALTY_MISSED\n  PENALTY_SCORED\n  KICK_OFF\n  HALF_TIME_BEGIN\n  HALF_TIME_END\n  END_OF_REGULATION\n  EXTRA_TIME_BEGIN\n  PENALTY_SHOOTOUT_BEGIN\n  MATCH_ENDED\n  MATCH_SUSPENDED\n  MATCH_POSTPONED\n  INJURY\n  VAR_REVIEW\n  GAME_SCORE\n  SET_WON\n  MATCH_WON\n  TIMEOUT\n\n  @@schema(\"odds\")\n}\n\nmodel Sport {\n  id         String  @id @default(uuid())\n  code       String  @unique\n  name       String\n  active     Boolean @default(true)\n  orderIndex Int     @default(0)\n  iconUrl    String?\n\n  leagues League[]\n  teams   Team[]\n  events  Event[]\n\n  createdAt DateTime  @default(now())\n  updatedAt DateTime  @updatedAt\n  deletedAt DateTime? @db.Timestamptz\n\n  @@index([code])\n  @@index([active, orderIndex])\n  @@map(\"sport\")\n  @@schema(\"odds\")\n}\n\nmodel Country {\n  id   String  @id @default(uuid())\n  code String  @unique\n  name String\n  flag String?\n\n  leagues League[]\n  teams   Team[]\n\n  @@map(\"country\")\n  @@schema(\"odds\")\n}\n\nmodel League {\n  id               String  @id @default(uuid())\n  providerLeagueId String  @unique\n  name             String\n  sportId          String\n  countryId        String?\n  tier             Int?\n  active           Boolean @default(true)\n  isTop            Boolean @default(false)\n\n  sport   Sport    @relation(fields: [sportId], references: [id], onDelete: Cascade)\n  country Country? @relation(fields: [countryId], references: [id], onDelete: SetNull)\n  events  Event[]\n\n  createdAt DateTime  @default(now())\n  updatedAt DateTime  @updatedAt\n  deletedAt DateTime?\n\n  @@index([sportId])\n  @@index([countryId])\n  @@index([sportId, active, isTop])\n  @@map(\"league\")\n  @@schema(\"odds\")\n}\n\nmodel Team {\n  id             String   @id @default(uuid())\n  providerTeamId String   @unique\n  name           String\n  shortName      String?\n  logoUrl        String?\n  sportId        String\n  countryId      String?\n  aliases        String[]\n\n  sport   Sport    @relation(fields: [sportId], references: [id], onDelete: Cascade)\n  country Country? @relation(fields: [countryId], references: [id], onDelete: SetNull)\n\n  homeEvents Event[] @relation(\"HomeTeam\")\n  awayEvents Event[] @relation(\"AwayTeam\")\n\n  @@index([sportId])\n  @@map(\"team\")\n  @@schema(\"odds\")\n}\n\nmodel Event {\n  id                    String      @id @default(uuid())\n  providerEventId       String      @unique\n  name                  String\n  sportId               String\n  leagueId              String\n  homeTeamId            String?\n  awayTeamId            String?\n  homeTeamName          String?\n  awayTeamName          String?\n  homeScore             Int?\n  awayScore             Int?\n  homeHalfScore         Int?\n  awayHalfScore         Int?\n  extraTimeScore        String?\n  penaltyScore          String?\n  status                EventStatus @default(PRE_MATCH)\n  kickoffAt             DateTime\n  liveStartedAt         DateTime?\n  liveUpdatedAt         DateTime?\n  firstHalfStart        DateTime?\n  secondHalfStart       DateTime?\n  minuteOfMatch         Int?\n  injuryMinutes         Int?\n  liveCoverageAvailable Boolean?    @default(false)\n  liveStreamAvailable   Boolean?    @default(false)\n  streamUrl             String?\n  eventMeta             Json?\n  isTop                 Boolean?    @default(false)\n  isFeatured            Boolean?    @default(false)\n  oddsLastCheckedAt     DateTime?\n  marketsCount          Int         @default(0)\n  activeBetCount        Int         @default(0)\n  settledAt             DateTime?\n  winner                String?\n  slug                  String?     @unique\n\n  sport    Sport  @relation(fields: [sportId], references: [id], onDelete: Cascade)\n  league   League @relation(fields: [leagueId], references: [id], onDelete: Cascade)\n  homeTeam Team?  @relation(\"HomeTeam\", fields: [homeTeamId], references: [id], onDelete: SetNull)\n  awayTeam Team?  @relation(\"AwayTeam\", fields: [awayTeamId], references: [id], onDelete: SetNull)\n\n  markets     Market[]\n  liveUpdates LiveMatchUpdate[]\n\n  createdAt DateTime  @default(now())\n  updatedAt DateTime  @updatedAt\n  deletedAt DateTime?\n\n  @@index([sportId])\n  @@index([leagueId])\n  @@index([status])\n  @@index([kickoffAt])\n  @@index([providerEventId])\n  @@index([sportId, status, kickoffAt])\n  @@index([status, kickoffAt])\n  @@map(\"event\")\n  @@schema(\"odds\")\n}\n\nmodel Market {\n  id               String       @id @default(uuid())\n  providerMarketId String       @unique\n  eventId          String\n  type             MarketType\n  name             String\n  specifiers       Json?\n  handicapValue    Decimal?\n  totalLineValue   Decimal?\n  period           String?\n  status           MarketStatus @default(ACTIVE)\n  displayedName    String?\n  cashoutAvailable Boolean      @default(true)\n  firstCashoutAt   DateTime?\n  lastSuspendedAt  DateTime?\n  suspendedReason  String?\n  source           String?\n  openDate         DateTime?\n  closeDate        DateTime?\n\n  event      Event             @relation(fields: [eventId], references: [id], onDelete: Cascade)\n  selections MarketSelection[]\n\n  createdAt DateTime  @default(now())\n  updatedAt DateTime  @updatedAt\n  deletedAt DateTime?\n\n  @@index([eventId])\n  @@index([eventId, status])\n  @@index([eventId, type])\n  @@map(\"market\")\n  @@schema(\"odds\")\n}\n\nmodel MarketSelection {\n  id                  String           @id @default(uuid())\n  providerSelectionId String           @unique\n  marketId            String\n  name                String\n  outcome             SelectionOutcome\n  odds                Decimal\n  oddsDisplay         String?\n  status              MarketStatus     @default(ACTIVE)\n  probabilityPercent  Decimal?\n  handicapValue       Decimal?\n  totalLineValue      Decimal?\n  originalOdds        Decimal?\n  lastChangedAt       DateTime?\n  lastChangedBy       String?\n  isTrendingUp        Boolean          @default(false)\n  isBestOffered       Boolean          @default(true)\n  meta                Json?\n\n  market Market @relation(fields: [marketId], references: [id], onDelete: Cascade)\n\n  @@index([marketId])\n  @@index([marketId, status])\n  @@index([providerSelectionId])\n  @@map(\"market_selection\")\n  @@schema(\"odds\")\n}\n\nmodel LiveMatchUpdate {\n  id               String        @id @default(uuid())\n  eventId          String\n  type             LiveEventType\n  minute           Int?\n  homeScore        Int?\n  awayScore        Int?\n  homeHalfScore    Int?\n  awayHalfScore    Int?\n  period           String?\n  incidentData     Json?\n  playerName       String?\n  teamSide         String?\n  clockMinutes     Int?\n  stoppageMinutes  Int?\n  extraTime        Boolean?\n  matchStatusAfter EventStatus?\n\n  event Event @relation(fields: [eventId], references: [id], onDelete: Cascade)\n\n  createdAt DateTime @default(now())\n\n  @@index([eventId])\n  @@index([eventId, createdAt])\n  @@index([type])\n  @@map(\"live_match_update\")\n  @@schema(\"odds\")\n}\n\nmodel ProviderSyncState {\n  id                    String    @id @default(uuid())\n  provider              String    @unique\n  lastFullSyncAt        DateTime?\n  lastIncrementalSyncAt DateTime?\n  nextSyncAt            DateTime?\n  eventsCreated         Int       @default(0)\n  marketsCreated        Int       @default(0)\n  oddsUpdatedCount      Int       @default(0)\n  lastEventId           String?\n  lastChangeId          String?\n  state                 Json?\n  syncErrors            Int       @default(0)\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@map(\"provider_sync_state\")\n  @@schema(\"odds\")\n}\n",
  "inlineSchemaHash": "5dfcb7dd3f4dec5776a72443a31cc9518fd216386afbe47a16d795ec7efc95c6",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Sport\":{\"dbName\":\"sport\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orderIndex\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"iconUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"leagues\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"League\",\"relationName\":\"LeagueToSport\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"teams\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Team\",\"relationName\":\"SportToTeam\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"events\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Event\",\"relationName\":\"EventToSport\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Country\":{\"dbName\":\"country\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"flag\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"leagues\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"League\",\"relationName\":\"CountryToLeague\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"teams\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Team\",\"relationName\":\"CountryToTeam\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"League\":{\"dbName\":\"league\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerLeagueId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sportId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"countryId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isTop\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sport\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Sport\",\"relationName\":\"LeagueToSport\",\"relationFromFields\":[\"sportId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Country\",\"relationName\":\"CountryToLeague\",\"relationFromFields\":[\"countryId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"SetNull\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"events\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Event\",\"relationName\":\"EventToLeague\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Team\":{\"dbName\":\"team\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerTeamId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shortName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logoUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sportId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"countryId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"aliases\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sport\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Sport\",\"relationName\":\"SportToTeam\",\"relationFromFields\":[\"sportId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Country\",\"relationName\":\"CountryToTeam\",\"relationFromFields\":[\"countryId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"SetNull\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"homeEvents\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Event\",\"relationName\":\"HomeTeam\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"awayEvents\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Event\",\"relationName\":\"AwayTeam\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Event\":{\"dbName\":\"event\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerEventId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sportId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"leagueId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"homeTeamId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"awayTeamId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"homeTeamName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"awayTeamName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"homeScore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"awayScore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"homeHalfScore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"awayHalfScore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"extraTimeScore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"penaltyScore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"EventStatus\",\"default\":\"PRE_MATCH\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kickoffAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"liveStartedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"liveUpdatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"firstHalfStart\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"secondHalfStart\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"minuteOfMatch\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"injuryMinutes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"liveCoverageAvailable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"liveStreamAvailable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"streamUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eventMeta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isTop\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isFeatured\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oddsLastCheckedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"marketsCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"activeBetCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"settledAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"winner\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"slug\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sport\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Sport\",\"relationName\":\"EventToSport\",\"relationFromFields\":[\"sportId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"league\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"League\",\"relationName\":\"EventToLeague\",\"relationFromFields\":[\"leagueId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"homeTeam\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Team\",\"relationName\":\"HomeTeam\",\"relationFromFields\":[\"homeTeamId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"SetNull\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"awayTeam\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Team\",\"relationName\":\"AwayTeam\",\"relationFromFields\":[\"awayTeamId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"SetNull\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"markets\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Market\",\"relationName\":\"EventToMarket\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"liveUpdates\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"LiveMatchUpdate\",\"relationName\":\"EventToLiveMatchUpdate\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Market\":{\"dbName\":\"market\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerMarketId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eventId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MarketType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"specifiers\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"handicapValue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalLineValue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"period\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"MarketStatus\",\"default\":\"ACTIVE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"displayedName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cashoutAvailable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"firstCashoutAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastSuspendedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"suspendedReason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"source\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"openDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"closeDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"event\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Event\",\"relationName\":\"EventToMarket\",\"relationFromFields\":[\"eventId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"selections\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MarketSelection\",\"relationName\":\"MarketToMarketSelection\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MarketSelection\":{\"dbName\":\"market_selection\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerSelectionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"marketId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"outcome\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SelectionOutcome\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"odds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oddsDisplay\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"MarketStatus\",\"default\":\"ACTIVE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"probabilityPercent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"handicapValue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalLineValue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"originalOdds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastChangedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastChangedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isTrendingUp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isBestOffered\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"meta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"market\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Market\",\"relationName\":\"MarketToMarketSelection\",\"relationFromFields\":[\"marketId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"LiveMatchUpdate\":{\"dbName\":\"live_match_update\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eventId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"LiveEventType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"minute\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"homeScore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"awayScore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"homeHalfScore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"awayHalfScore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"period\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"incidentData\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"playerName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"teamSide\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clockMinutes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stoppageMinutes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"extraTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"matchStatusAfter\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EventStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"event\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Event\",\"relationName\":\"EventToLiveMatchUpdate\",\"relationFromFields\":[\"eventId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProviderSyncState\":{\"dbName\":\"provider_sync_state\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"provider\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastFullSyncAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastIncrementalSyncAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nextSyncAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eventsCreated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"marketsCreated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oddsUpdatedCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastEventId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastChangeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"state\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"syncErrors\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"EventStatus\":{\"values\":[{\"name\":\"PRE_MATCH\",\"dbName\":null},{\"name\":\"PRE_LIVE\",\"dbName\":null},{\"name\":\"LIVE\",\"dbName\":null},{\"name\":\"HALF_TIME\",\"dbName\":null},{\"name\":\"ENDED\",\"dbName\":null},{\"name\":\"FINISHED\",\"dbName\":null},{\"name\":\"SUSPENDED\",\"dbName\":null},{\"name\":\"POSTPONED\",\"dbName\":null},{\"name\":\"CANCELLED\",\"dbName\":null},{\"name\":\"ABANDONED\",\"dbName\":null},{\"name\":\"INTERRUPTED\",\"dbName\":null},{\"name\":\"WALKOVER\",\"dbName\":null}],\"dbName\":null},\"MarketType\":{\"values\":[{\"name\":\"MATCH_WINNER_1X2\",\"dbName\":null},{\"name\":\"MATCH_WINNER_12\",\"dbName\":null},{\"name\":\"OVER_UNDER_TOTAL\",\"dbName\":null},{\"name\":\"OVER_UNDER_HOME\",\"dbName\":null},{\"name\":\"OVER_UNDER_AWAY\",\"dbName\":null},{\"name\":\"BTTS_YES_NO\",\"dbName\":null},{\"name\":\"CORRECT_SCORE\",\"dbName\":null},{\"name\":\"HALF_TIME_RESULT\",\"dbName\":null},{\"name\":\"HALF_TIME_FULL_TIME\",\"dbName\":null},{\"name\":\"DOUBLE_CHANCE\",\"dbName\":null},{\"name\":\"ASIAN_HANDICAP\",\"dbName\":null},{\"name\":\"EUROPEAN_HANDICAP\",\"dbName\":null},{\"name\":\"FIRST_GOAL_SCORER\",\"dbName\":null},{\"name\":\"ANYTIME_GOAL_SCORER\",\"dbName\":null},{\"name\":\"EXACT_GOALS\",\"dbName\":null},{\"name\":\"MATCH_RESULT_BOTH_TEAMS_TO_SCORE\",\"dbName\":null},{\"name\":\"DRAW_NO_BET\",\"dbName\":null},{\"name\":\"TOTAL_CORNERS\",\"dbName\":null},{\"name\":\"TOTAL_CARDS\",\"dbName\":null},{\"name\":\"NEXT_GOAL\",\"dbName\":null},{\"name\":\"WINNING_MARGIN\",\"dbName\":null},{\"name\":\"SET_WINNER\",\"dbName\":null},{\"name\":\"GAME_WINNER\",\"dbName\":null},{\"name\":\"TIE_NO_BET\",\"dbName\":null},{\"name\":\"TOTAL_POINTS\",\"dbName\":null},{\"name\":\"MONEYLINE\",\"dbName\":null},{\"name\":\"SPREAD\",\"dbName\":null},{\"name\":\"TOTAL\",\"dbName\":null}],\"dbName\":null},\"MarketStatus\":{\"values\":[{\"name\":\"ACTIVE\",\"dbName\":null},{\"name\":\"SUSPENDED\",\"dbName\":null},{\"name\":\"CLOSED\",\"dbName\":null},{\"name\":\"SETTLED\",\"dbName\":null}],\"dbName\":null},\"SelectionOutcome\":{\"values\":[{\"name\":\"HOME\",\"dbName\":null},{\"name\":\"DRAW\",\"dbName\":null},{\"name\":\"AWAY\",\"dbName\":null},{\"name\":\"OVER\",\"dbName\":null},{\"name\":\"UNDER\",\"dbName\":null},{\"name\":\"YES\",\"dbName\":null},{\"name\":\"NO\",\"dbName\":null},{\"name\":\"WON\",\"dbName\":null},{\"name\":\"LOST\",\"dbName\":null},{\"name\":\"VOID\",\"dbName\":null},{\"name\":\"PENDING\",\"dbName\":null},{\"name\":\"HALF_WON\",\"dbName\":null},{\"name\":\"HALF_LOST\",\"dbName\":null}],\"dbName\":null},\"LiveEventType\":{\"values\":[{\"name\":\"GOAL_HOME\",\"dbName\":null},{\"name\":\"GOAL_AWAY\",\"dbName\":null},{\"name\":\"OWN_GOAL_HOME\",\"dbName\":null},{\"name\":\"OWN_GOAL_AWAY\",\"dbName\":null},{\"name\":\"YELLOW_CARD\",\"dbName\":null},{\"name\":\"RED_CARD\",\"dbName\":null},{\"name\":\"SECOND_YELLOW\",\"dbName\":null},{\"name\":\"SUBSTITUTION\",\"dbName\":null},{\"name\":\"PENALTY_MISSED\",\"dbName\":null},{\"name\":\"PENALTY_SCORED\",\"dbName\":null},{\"name\":\"KICK_OFF\",\"dbName\":null},{\"name\":\"HALF_TIME_BEGIN\",\"dbName\":null},{\"name\":\"HALF_TIME_END\",\"dbName\":null},{\"name\":\"END_OF_REGULATION\",\"dbName\":null},{\"name\":\"EXTRA_TIME_BEGIN\",\"dbName\":null},{\"name\":\"PENALTY_SHOOTOUT_BEGIN\",\"dbName\":null},{\"name\":\"MATCH_ENDED\",\"dbName\":null},{\"name\":\"MATCH_SUSPENDED\",\"dbName\":null},{\"name\":\"MATCH_POSTPONED\",\"dbName\":null},{\"name\":\"INJURY\",\"dbName\":null},{\"name\":\"VAR_REVIEW\",\"dbName\":null},{\"name\":\"GAME_SCORE\",\"dbName\":null},{\"name\":\"SET_WON\",\"dbName\":null},{\"name\":\"MATCH_WON\",\"dbName\":null},{\"name\":\"TIMEOUT\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

