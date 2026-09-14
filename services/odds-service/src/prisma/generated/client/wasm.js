
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


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

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
