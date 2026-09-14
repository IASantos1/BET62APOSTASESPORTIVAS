
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

exports.Prisma.BetScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  walletId: 'walletId',
  transactionId: 'transactionId',
  externalId: 'externalId',
  betNumber: 'betNumber',
  betType: 'betType',
  systemType: 'systemType',
  status: 'status',
  selectionsCount: 'selectionsCount',
  winningSelectionsCount: 'winningSelectionsCount',
  stakeAmount: 'stakeAmount',
  stakeRealUsed: 'stakeRealUsed',
  stakeBonusUsed: 'stakeBonusUsed',
  stakeFreebetUsed: 'stakeFreebetUsed',
  totalOdds: 'totalOdds',
  oddsMultiplier: 'oddsMultiplier',
  potentialReturn: 'potentialReturn',
  potentialWin: 'potentialWin',
  maxWinCap: 'maxWinCap',
  bonusIdUsed: 'bonusIdUsed',
  freebetIdUsed: 'freebetIdUsed',
  acceptanceType: 'acceptanceType',
  acceptedOddsChangeMaxPercent: 'acceptedOddsChangeMaxPercent',
  actualOddsChangePercent: 'actualOddsChangePercent',
  cashoutAvailable: 'cashoutAvailable',
  cashoutValueCurrent: 'cashoutValueCurrent',
  cashoutValueMin: 'cashoutValueMin',
  cashoutValueMax: 'cashoutValueMax',
  cashoutEnabled: 'cashoutEnabled',
  autoCashoutValue: 'autoCashoutValue',
  autoCashoutTriggered: 'autoCashoutTriggered',
  autoCashoutAt: 'autoCashoutAt',
  partialCashoutRemainingStake: 'partialCashoutRemainingStake',
  partialCashoutTotalCashedOut: 'partialCashoutTotalCashedOut',
  placedAt: 'placedAt',
  placedIp: 'placedIp',
  placedDevice: 'placedDevice',
  placedLanguage: 'placedLanguage',
  settledAt: 'settledAt',
  settledBy: 'settledBy',
  settlementSource: 'settlementSource',
  settlementNote: 'settlementNote',
  actualReturn: 'actualReturn',
  actualWinNet: 'actualWinNet',
  actualTaxDeducted: 'actualTaxDeducted',
  oddsBoostAppliedId: 'oddsBoostAppliedId',
  combiBoostPercent: 'combiBoostPercent',
  accumulatorBonusPercent: 'accumulatorBonusPercent',
  riskFlagged: 'riskFlagged',
  riskFlags: 'riskFlags',
  riskReviewed: 'riskReviewed',
  riskReviewedAt: 'riskReviewedAt',
  riskReviewedBy: 'riskReviewedBy',
  cancelledReason: 'cancelledReason',
  cancelledAt: 'cancelledAt',
  cancelledBy: 'cancelledBy',
  correlationId: 'correlationId',
  expiresAt: 'expiresAt',
  metadata: 'metadata',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.BetSelectionScalarFieldEnum = {
  id: 'id',
  betId: 'betId',
  eventId: 'eventId',
  marketId: 'marketId',
  selectionId: 'selectionId',
  selectionName: 'selectionName',
  marketName: 'marketName',
  eventName: 'eventName',
  homeTeamName: 'homeTeamName',
  awayTeamName: 'awayTeamName',
  leagueName: 'leagueName',
  sportType: 'sportType',
  kickoffAt: 'kickoffAt',
  marketType: 'marketType',
  outcome: 'outcome',
  specifiers: 'specifiers',
  oddsAtPlacement: 'oddsAtPlacement',
  oddsDisplayAtPlacement: 'oddsDisplayAtPlacement',
  handicapValue: 'handicapValue',
  totalLineValue: 'totalLineValue',
  status: 'status',
  settledAt: 'settledAt',
  settledOdds: 'settledOdds',
  resultScore: 'resultScore',
  providerEventId: 'providerEventId',
  providerMarketId: 'providerMarketId',
  providerSelectionId: 'providerSelectionId',
  orderIndex: 'orderIndex',
  deletedAt: 'deletedAt'
};

exports.Prisma.CashoutRecordScalarFieldEnum = {
  id: 'id',
  betId: 'betId',
  userId: 'userId',
  walletId: 'walletId',
  transactionId: 'transactionId',
  cashoutType: 'cashoutType',
  status: 'status',
  stakeBefore: 'stakeBefore',
  stakeAfter: 'stakeAfter',
  stakeCashedOut: 'stakeCashedOut',
  amountRequested: 'amountRequested',
  amountFee: 'amountFee',
  amountNetToUser: 'amountNetToUser',
  oddsAtCashout: 'oddsAtCashout',
  probabilityImpliedAtCashout: 'probabilityImpliedAtCashout',
  houseEdgePercentApplied: 'houseEdgePercentApplied',
  confirmedAt: 'confirmedAt',
  failedReason: 'failedReason',
  failedAt: 'failedAt',
  rejectedReason: 'rejectedReason',
  rejectedAt: 'rejectedAt',
  cashoutSnapshot: 'cashoutSnapshot',
  correlationId: 'correlationId',
  requestIp: 'requestIp',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BetSettlementLogScalarFieldEnum = {
  id: 'id',
  betId: 'betId',
  statusBefore: 'statusBefore',
  statusAfter: 'statusAfter',
  settlementSource: 'settlementSource',
  settledBy: 'settledBy',
  actualReturnBefore: 'actualReturnBefore',
  actualReturnAfter: 'actualReturnAfter',
  selectionsResults: 'selectionsResults',
  reason: 'reason',
  note: 'note',
  correlationId: 'correlationId',
  createdAt: 'createdAt'
};

exports.Prisma.BetSlipDraftScalarFieldEnum = {
  id: 'id',
  sessionId: 'sessionId',
  userId: 'userId',
  selections: 'selections',
  stakeAmount: 'stakeAmount',
  stakeBonusUsed: 'stakeBonusUsed',
  acceptanceType: 'acceptanceType',
  cashoutEnabled: 'cashoutEnabled',
  promocode: 'promocode',
  bonusIdUsed: 'bonusIdUsed',
  freebetIdUsed: 'freebetIdUsed',
  expiresAt: 'expiresAt',
  updatedAt: 'updatedAt',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.BetType = exports.$Enums.BetType = {
  SINGLE: 'SINGLE',
  MULTIPLE: 'MULTIPLE',
  SYSTEM: 'SYSTEM',
  CHAIN: 'CHAIN'
};

exports.SystemBetType = exports.$Enums.SystemBetType = {
  T_2_OF_3: 'T_2_OF_3',
  T_2_OF_4: 'T_2_OF_4',
  T_3_OF_4: 'T_3_OF_4',
  T_2_OF_5: 'T_2_OF_5',
  T_3_OF_5: 'T_3_OF_5',
  T_4_OF_5: 'T_4_OF_5',
  T_2_OF_6: 'T_2_OF_6',
  T_3_OF_6: 'T_3_OF_6',
  T_4_OF_6: 'T_4_OF_6',
  T_5_OF_6: 'T_5_OF_6'
};

exports.BetStatus = exports.$Enums.BetStatus = {
  PENDING: 'PENDING',
  PLACED: 'PLACED',
  LIVE: 'LIVE',
  WON: 'WON',
  LOST: 'LOST',
  HALF_WON: 'HALF_WON',
  HALF_LOST: 'HALF_LOST',
  VOID: 'VOID',
  CASHOUT: 'CASHOUT',
  CASHOUT_PARTIAL: 'CASHOUT_PARTIAL',
  REJECTED: 'REJECTED',
  CANCELLED: 'CANCELLED',
  UNDER_REVIEW: 'UNDER_REVIEW'
};

exports.BetAcceptanceType = exports.$Enums.BetAcceptanceType = {
  ACCEPT_HIGHER_ODDS: 'ACCEPT_HIGHER_ODDS',
  ACCEPT_ANY_ODDS: 'ACCEPT_ANY_ODDS',
  ACCEPT_NO_CHANGE: 'ACCEPT_NO_CHANGE',
  ACCEPT_EQUAL_OR_HIGHER: 'ACCEPT_EQUAL_OR_HIGHER'
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

exports.CashoutType = exports.$Enums.CashoutType = {
  FULL: 'FULL',
  PARTIAL: 'PARTIAL',
  AUTO: 'AUTO'
};

exports.CashoutStatus = exports.$Enums.CashoutStatus = {
  REQUESTED: 'REQUESTED',
  PROCESSING: 'PROCESSING',
  CONFIRMED: 'CONFIRMED',
  FAILED: 'FAILED',
  REJECTED: 'REJECTED'
};

exports.Prisma.ModelName = {
  Bet: 'Bet',
  BetSelection: 'BetSelection',
  CashoutRecord: 'CashoutRecord',
  BetSettlementLog: 'BetSettlementLog',
  BetSlipDraft: 'BetSlipDraft'
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
