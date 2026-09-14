
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
} = require('./runtime/library.js')


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




  const path = require('path')

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
      "value": "C:\\Users\\israe\\Desktop\\BET62APOSTAS\\services\\bets-service\\src\\prisma\\generated\\client",
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
    "sourceFilePath": "C:\\Users\\israe\\Desktop\\BET62APOSTAS\\services\\bets-service\\prisma\\schema.prisma",
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
  "inlineSchema": "generator client {\n  provider        = \"prisma-client-js\"\n  output          = \"../src/prisma/generated/client\"\n  previewFeatures = [\"multiSchema\"]\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n  schemas  = [\"bets\"]\n}\n\nenum BetType {\n  SINGLE\n  MULTIPLE\n  SYSTEM\n  CHAIN\n\n  @@schema(\"bets\")\n}\n\nenum BetStatus {\n  PENDING\n  PLACED\n  LIVE\n  WON\n  LOST\n  HALF_WON\n  HALF_LOST\n  VOID\n  CASHOUT\n  CASHOUT_PARTIAL\n  REJECTED\n  CANCELLED\n  UNDER_REVIEW\n\n  @@schema(\"bets\")\n}\n\nenum BetAcceptanceType {\n  ACCEPT_HIGHER_ODDS\n  ACCEPT_ANY_ODDS\n  ACCEPT_NO_CHANGE\n  ACCEPT_EQUAL_OR_HIGHER\n\n  @@schema(\"bets\")\n}\n\nenum CashoutType {\n  FULL\n  PARTIAL\n  AUTO\n\n  @@schema(\"bets\")\n}\n\nenum SystemBetType {\n  T_2_OF_3\n  T_2_OF_4\n  T_3_OF_4\n  T_2_OF_5\n  T_3_OF_5\n  T_4_OF_5\n  T_2_OF_6\n  T_3_OF_6\n  T_4_OF_6\n  T_5_OF_6\n\n  @@schema(\"bets\")\n}\n\nenum SelectionOutcome {\n  HOME\n  DRAW\n  AWAY\n  OVER\n  UNDER\n  YES\n  NO\n  WON\n  LOST\n  VOID\n  PENDING\n  HALF_WON\n  HALF_LOST\n\n  @@schema(\"bets\")\n}\n\nenum MarketType {\n  MATCH_WINNER_1X2\n  MATCH_WINNER_12\n  OVER_UNDER_TOTAL\n  OVER_UNDER_HOME\n  OVER_UNDER_AWAY\n  BTTS_YES_NO\n  CORRECT_SCORE\n  HALF_TIME_RESULT\n  HALF_TIME_FULL_TIME\n  DOUBLE_CHANCE\n  ASIAN_HANDICAP\n  EUROPEAN_HANDICAP\n  FIRST_GOAL_SCORER\n  ANYTIME_GOAL_SCORER\n  EXACT_GOALS\n  MATCH_RESULT_BOTH_TEAMS_TO_SCORE\n  DRAW_NO_BET\n  TOTAL_CORNERS\n  TOTAL_CARDS\n  NEXT_GOAL\n  WINNING_MARGIN\n  SET_WINNER\n  GAME_WINNER\n  TIE_NO_BET\n  TOTAL_POINTS\n  MONEYLINE\n  SPREAD\n  TOTAL\n\n  @@schema(\"bets\")\n}\n\nenum MarketStatus {\n  ACTIVE\n  SUSPENDED\n  CLOSED\n  SETTLED\n\n  @@schema(\"bets\")\n}\n\nenum CashoutStatus {\n  REQUESTED\n  PROCESSING\n  CONFIRMED\n  FAILED\n  REJECTED\n\n  @@schema(\"bets\")\n}\n\nmodel Bet {\n  id                           String            @id @default(uuid())\n  userId                       String\n  walletId                     String\n  transactionId                String?\n  externalId                   String?\n  betNumber                    String?           @unique\n  betType                      BetType\n  systemType                   SystemBetType?\n  status                       BetStatus         @default(PENDING)\n  selectionsCount              Int\n  winningSelectionsCount       Int?\n  stakeAmount                  Decimal\n  stakeRealUsed                Decimal           @default(0)\n  stakeBonusUsed               Decimal           @default(0)\n  stakeFreebetUsed             Decimal           @default(0)\n  totalOdds                    Decimal\n  oddsMultiplier               Decimal?\n  potentialReturn              Decimal\n  potentialWin                 Decimal\n  maxWinCap                    Decimal?\n  bonusIdUsed                  String?\n  freebetIdUsed                String?\n  acceptanceType               BetAcceptanceType\n  acceptedOddsChangeMaxPercent Decimal?\n  actualOddsChangePercent      Decimal?\n  cashoutAvailable             Boolean           @default(true)\n  cashoutValueCurrent          Decimal?\n  cashoutValueMin              Decimal?\n  cashoutValueMax              Decimal?\n  cashoutEnabled               Boolean           @default(true)\n  autoCashoutValue             Decimal?\n  autoCashoutTriggered         Boolean?\n  autoCashoutAt                DateTime?\n  partialCashoutRemainingStake Decimal?\n  partialCashoutTotalCashedOut Decimal?\n  placedAt                     DateTime\n  placedIp                     String?\n  placedDevice                 String?\n  placedLanguage               String?\n  settledAt                    DateTime?\n  settledBy                    String?\n  settlementSource             String?\n  settlementNote               String?\n  actualReturn                 Decimal?\n  actualWinNet                 Decimal?\n  actualTaxDeducted            Decimal?\n  oddsBoostAppliedId           String?\n  combiBoostPercent            Decimal?\n  accumulatorBonusPercent      Decimal?\n  riskFlagged                  Boolean           @default(false)\n  riskFlags                    String[]          @default([])\n  riskReviewed                 Boolean?\n  riskReviewedAt               DateTime?\n  riskReviewedBy               String?\n  cancelledReason              String?\n  cancelledAt                  DateTime?\n  cancelledBy                  String?\n  correlationId                String?\n  expiresAt                    DateTime?\n  metadata                     Json?\n  createdAt                    DateTime          @default(now())\n  updatedAt                    DateTime          @updatedAt\n  deletedAt                    DateTime?\n\n  selections     BetSelection[]\n  cashoutRecords CashoutRecord[]\n  settlementLogs BetSettlementLog[]\n\n  @@index([userId])\n  @@index([status])\n  @@index([walletId])\n  @@index([placedAt])\n  @@index([betNumber])\n  @@index([betType])\n  @@index([userId, status, placedAt])\n  @@index([userId, betType])\n  @@map(\"bet\")\n  @@schema(\"bets\")\n}\n\nmodel BetSelection {\n  id                     String           @id @default(uuid())\n  betId                  String\n  eventId                String\n  marketId               String\n  selectionId            String\n  selectionName          String\n  marketName             String\n  eventName              String\n  homeTeamName           String?\n  awayTeamName           String?\n  leagueName             String?\n  sportType              String?\n  kickoffAt              DateTime\n  marketType             MarketType\n  outcome                SelectionOutcome\n  specifiers             Json?\n  oddsAtPlacement        Decimal\n  oddsDisplayAtPlacement String?\n  handicapValue          Decimal?\n  totalLineValue         Decimal?\n  status                 SelectionOutcome @default(PENDING)\n  settledAt              DateTime?\n  settledOdds            Decimal?\n  resultScore            Json?\n  providerEventId        String?\n  providerMarketId       String?\n  providerSelectionId    String?\n  orderIndex             Int\n  deletedAt              DateTime?        @db.Timestamptz\n\n  bet Bet @relation(fields: [betId], references: [id], onDelete: Cascade)\n\n  @@unique([betId, orderIndex])\n  @@index([eventId])\n  @@index([betId, status])\n  @@index([selectionId])\n  @@map(\"bet_selection\")\n  @@schema(\"bets\")\n}\n\nmodel CashoutRecord {\n  id                          String        @id @default(uuid())\n  betId                       String\n  userId                      String\n  walletId                    String\n  transactionId               String?\n  cashoutType                 CashoutType\n  status                      CashoutStatus @default(REQUESTED)\n  stakeBefore                 Decimal\n  stakeAfter                  Decimal?\n  stakeCashedOut              Decimal?\n  amountRequested             Decimal\n  amountFee                   Decimal       @default(0)\n  amountNetToUser             Decimal\n  oddsAtCashout               Decimal?\n  probabilityImpliedAtCashout Decimal?\n  houseEdgePercentApplied     Decimal       @default(0)\n  confirmedAt                 DateTime?\n  failedReason                String?\n  failedAt                    DateTime?\n  rejectedReason              String?\n  rejectedAt                  DateTime?\n  cashoutSnapshot             Json?\n  correlationId               String?\n  requestIp                   String?\n  createdAt                   DateTime      @default(now())\n  updatedAt                   DateTime      @updatedAt\n\n  bet Bet @relation(fields: [betId], references: [id], onDelete: Cascade)\n\n  @@index([betId])\n  @@index([userId])\n  @@index([walletId])\n  @@index([status, createdAt])\n  @@map(\"cashout_record\")\n  @@schema(\"bets\")\n}\n\nmodel BetSettlementLog {\n  id                 String    @id @default(uuid())\n  betId              String\n  statusBefore       BetStatus\n  statusAfter        BetStatus\n  settlementSource   String\n  settledBy          String?\n  actualReturnBefore Decimal?\n  actualReturnAfter  Decimal?\n  selectionsResults  Json?\n  reason             String?\n  note               String?\n  correlationId      String?\n  createdAt          DateTime  @default(now())\n\n  bet Bet @relation(fields: [betId], references: [id], onDelete: Cascade)\n\n  @@index([betId])\n  @@index([settlementSource, createdAt])\n  @@map(\"bet_settlement_log\")\n  @@schema(\"bets\")\n}\n\nmodel BetSlipDraft {\n  id             String    @id @default(uuid())\n  sessionId      String    @unique\n  userId         String?\n  selections     Json      @default(\"[]\")\n  stakeAmount    Decimal?\n  stakeBonusUsed Decimal?\n  acceptanceType String?\n  cashoutEnabled Boolean?\n  promocode      String?\n  bonusIdUsed    String?\n  freebetIdUsed  String?\n  expiresAt      DateTime?\n  updatedAt      DateTime?\n  createdAt      DateTime  @default(now())\n\n  @@index([userId])\n  @@index([sessionId])\n  @@map(\"bet_slip_draft\")\n  @@schema(\"bets\")\n}\n",
  "inlineSchemaHash": "b61517e1ca541f819bfb2661c2cd42f1b0f95bee6481a4dfef3250735d521fa4",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/prisma/generated/client",
    "prisma/generated/client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Bet\":{\"dbName\":\"bet\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"walletId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"externalId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"betNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"betType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BetType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"systemType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SystemBetType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BetStatus\",\"default\":\"PENDING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"selectionsCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"winningSelectionsCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stakeAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stakeRealUsed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stakeBonusUsed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stakeFreebetUsed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalOdds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oddsMultiplier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"potentialReturn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"potentialWin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maxWinCap\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bonusIdUsed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"freebetIdUsed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"acceptanceType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BetAcceptanceType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"acceptedOddsChangeMaxPercent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"actualOddsChangePercent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cashoutAvailable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cashoutValueCurrent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cashoutValueMin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cashoutValueMax\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cashoutEnabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"autoCashoutValue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"autoCashoutTriggered\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"autoCashoutAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"partialCashoutRemainingStake\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"partialCashoutTotalCashedOut\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"placedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"placedIp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"placedDevice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"placedLanguage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"settledAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"settledBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"settlementSource\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"settlementNote\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"actualReturn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"actualWinNet\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"actualTaxDeducted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oddsBoostAppliedId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"combiBoostPercent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accumulatorBonusPercent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"riskFlagged\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"riskFlags\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"riskReviewed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"riskReviewedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"riskReviewedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cancelledReason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cancelledAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cancelledBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"correlationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expiresAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metadata\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"selections\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BetSelection\",\"relationName\":\"BetToBetSelection\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cashoutRecords\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CashoutRecord\",\"relationName\":\"BetToCashoutRecord\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"settlementLogs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BetSettlementLog\",\"relationName\":\"BetToBetSettlementLog\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BetSelection\":{\"dbName\":\"bet_selection\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"betId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eventId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"marketId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"selectionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"selectionName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"marketName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eventName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"homeTeamName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"awayTeamName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"leagueName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sportType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kickoffAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"marketType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MarketType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"outcome\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SelectionOutcome\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"specifiers\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oddsAtPlacement\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oddsDisplayAtPlacement\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"handicapValue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalLineValue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"SelectionOutcome\",\"default\":\"PENDING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"settledAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"settledOdds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resultScore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerEventId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerMarketId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerSelectionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orderIndex\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bet\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bet\",\"relationName\":\"BetToBetSelection\",\"relationFromFields\":[\"betId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"betId\",\"orderIndex\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"betId\",\"orderIndex\"]}],\"isGenerated\":false},\"CashoutRecord\":{\"dbName\":\"cashout_record\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"betId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"walletId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cashoutType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CashoutType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"CashoutStatus\",\"default\":\"REQUESTED\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stakeBefore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stakeAfter\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stakeCashedOut\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amountRequested\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amountFee\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amountNetToUser\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oddsAtCashout\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"probabilityImpliedAtCashout\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"houseEdgePercentApplied\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"confirmedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"failedReason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"failedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rejectedReason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rejectedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cashoutSnapshot\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"correlationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"requestIp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"bet\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bet\",\"relationName\":\"BetToCashoutRecord\",\"relationFromFields\":[\"betId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BetSettlementLog\":{\"dbName\":\"bet_settlement_log\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"betId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statusBefore\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BetStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statusAfter\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BetStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"settlementSource\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"settledBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"actualReturnBefore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"actualReturnAfter\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"selectionsResults\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"note\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"correlationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bet\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bet\",\"relationName\":\"BetToBetSettlementLog\",\"relationFromFields\":[\"betId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BetSlipDraft\":{\"dbName\":\"bet_slip_draft\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sessionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"selections\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Json\",\"default\":\"[]\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stakeAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stakeBonusUsed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"acceptanceType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cashoutEnabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"promocode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bonusIdUsed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"freebetIdUsed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expiresAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"BetType\":{\"values\":[{\"name\":\"SINGLE\",\"dbName\":null},{\"name\":\"MULTIPLE\",\"dbName\":null},{\"name\":\"SYSTEM\",\"dbName\":null},{\"name\":\"CHAIN\",\"dbName\":null}],\"dbName\":null},\"BetStatus\":{\"values\":[{\"name\":\"PENDING\",\"dbName\":null},{\"name\":\"PLACED\",\"dbName\":null},{\"name\":\"LIVE\",\"dbName\":null},{\"name\":\"WON\",\"dbName\":null},{\"name\":\"LOST\",\"dbName\":null},{\"name\":\"HALF_WON\",\"dbName\":null},{\"name\":\"HALF_LOST\",\"dbName\":null},{\"name\":\"VOID\",\"dbName\":null},{\"name\":\"CASHOUT\",\"dbName\":null},{\"name\":\"CASHOUT_PARTIAL\",\"dbName\":null},{\"name\":\"REJECTED\",\"dbName\":null},{\"name\":\"CANCELLED\",\"dbName\":null},{\"name\":\"UNDER_REVIEW\",\"dbName\":null}],\"dbName\":null},\"BetAcceptanceType\":{\"values\":[{\"name\":\"ACCEPT_HIGHER_ODDS\",\"dbName\":null},{\"name\":\"ACCEPT_ANY_ODDS\",\"dbName\":null},{\"name\":\"ACCEPT_NO_CHANGE\",\"dbName\":null},{\"name\":\"ACCEPT_EQUAL_OR_HIGHER\",\"dbName\":null}],\"dbName\":null},\"CashoutType\":{\"values\":[{\"name\":\"FULL\",\"dbName\":null},{\"name\":\"PARTIAL\",\"dbName\":null},{\"name\":\"AUTO\",\"dbName\":null}],\"dbName\":null},\"SystemBetType\":{\"values\":[{\"name\":\"T_2_OF_3\",\"dbName\":null},{\"name\":\"T_2_OF_4\",\"dbName\":null},{\"name\":\"T_3_OF_4\",\"dbName\":null},{\"name\":\"T_2_OF_5\",\"dbName\":null},{\"name\":\"T_3_OF_5\",\"dbName\":null},{\"name\":\"T_4_OF_5\",\"dbName\":null},{\"name\":\"T_2_OF_6\",\"dbName\":null},{\"name\":\"T_3_OF_6\",\"dbName\":null},{\"name\":\"T_4_OF_6\",\"dbName\":null},{\"name\":\"T_5_OF_6\",\"dbName\":null}],\"dbName\":null},\"SelectionOutcome\":{\"values\":[{\"name\":\"HOME\",\"dbName\":null},{\"name\":\"DRAW\",\"dbName\":null},{\"name\":\"AWAY\",\"dbName\":null},{\"name\":\"OVER\",\"dbName\":null},{\"name\":\"UNDER\",\"dbName\":null},{\"name\":\"YES\",\"dbName\":null},{\"name\":\"NO\",\"dbName\":null},{\"name\":\"WON\",\"dbName\":null},{\"name\":\"LOST\",\"dbName\":null},{\"name\":\"VOID\",\"dbName\":null},{\"name\":\"PENDING\",\"dbName\":null},{\"name\":\"HALF_WON\",\"dbName\":null},{\"name\":\"HALF_LOST\",\"dbName\":null}],\"dbName\":null},\"MarketType\":{\"values\":[{\"name\":\"MATCH_WINNER_1X2\",\"dbName\":null},{\"name\":\"MATCH_WINNER_12\",\"dbName\":null},{\"name\":\"OVER_UNDER_TOTAL\",\"dbName\":null},{\"name\":\"OVER_UNDER_HOME\",\"dbName\":null},{\"name\":\"OVER_UNDER_AWAY\",\"dbName\":null},{\"name\":\"BTTS_YES_NO\",\"dbName\":null},{\"name\":\"CORRECT_SCORE\",\"dbName\":null},{\"name\":\"HALF_TIME_RESULT\",\"dbName\":null},{\"name\":\"HALF_TIME_FULL_TIME\",\"dbName\":null},{\"name\":\"DOUBLE_CHANCE\",\"dbName\":null},{\"name\":\"ASIAN_HANDICAP\",\"dbName\":null},{\"name\":\"EUROPEAN_HANDICAP\",\"dbName\":null},{\"name\":\"FIRST_GOAL_SCORER\",\"dbName\":null},{\"name\":\"ANYTIME_GOAL_SCORER\",\"dbName\":null},{\"name\":\"EXACT_GOALS\",\"dbName\":null},{\"name\":\"MATCH_RESULT_BOTH_TEAMS_TO_SCORE\",\"dbName\":null},{\"name\":\"DRAW_NO_BET\",\"dbName\":null},{\"name\":\"TOTAL_CORNERS\",\"dbName\":null},{\"name\":\"TOTAL_CARDS\",\"dbName\":null},{\"name\":\"NEXT_GOAL\",\"dbName\":null},{\"name\":\"WINNING_MARGIN\",\"dbName\":null},{\"name\":\"SET_WINNER\",\"dbName\":null},{\"name\":\"GAME_WINNER\",\"dbName\":null},{\"name\":\"TIE_NO_BET\",\"dbName\":null},{\"name\":\"TOTAL_POINTS\",\"dbName\":null},{\"name\":\"MONEYLINE\",\"dbName\":null},{\"name\":\"SPREAD\",\"dbName\":null},{\"name\":\"TOTAL\",\"dbName\":null}],\"dbName\":null},\"MarketStatus\":{\"values\":[{\"name\":\"ACTIVE\",\"dbName\":null},{\"name\":\"SUSPENDED\",\"dbName\":null},{\"name\":\"CLOSED\",\"dbName\":null},{\"name\":\"SETTLED\",\"dbName\":null}],\"dbName\":null},\"CashoutStatus\":{\"values\":[{\"name\":\"REQUESTED\",\"dbName\":null},{\"name\":\"PROCESSING\",\"dbName\":null},{\"name\":\"CONFIRMED\",\"dbName\":null},{\"name\":\"FAILED\",\"dbName\":null},{\"name\":\"REJECTED\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "src/prisma/generated/client/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/prisma/generated/client/schema.prisma")
