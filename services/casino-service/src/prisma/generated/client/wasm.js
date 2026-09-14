
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

exports.Prisma.CasinoGameScalarFieldEnum = {
  id: 'id',
  providerId: 'providerId',
  providerGameId: 'providerGameId',
  name: 'name',
  slug: 'slug',
  category: 'category',
  provider: 'provider',
  status: 'status',
  rtp: 'rtp',
  volatility: 'volatility',
  minBet: 'minBet',
  maxBet: 'maxBet',
  maxWinMultiplier: 'maxWinMultiplier',
  lines: 'lines',
  reels: 'reels',
  hasFreeSpins: 'hasFreeSpins',
  hasJackpot: 'hasJackpot',
  hasBonusBuy: 'hasBonusBuy',
  hasLiveDealer: 'hasLiveDealer',
  gameConfig: 'gameConfig',
  thumbUrl: 'thumbUrl',
  bannerUrl: 'bannerUrl',
  lobbyTags: 'lobbyTags',
  languages: 'languages',
  countriesBlocked: 'countriesBlocked',
  isNew: 'isNew',
  isHot: 'isHot',
  isFeatured: 'isFeatured',
  popularTrendScore: 'popularTrendScore',
  totalRoundsPlayed: 'totalRoundsPlayed',
  totalWagered: 'totalWagered',
  totalPayout: 'totalPayout',
  lastWinAt: 'lastWinAt',
  seededHouseEdgePercent: 'seededHouseEdgePercent',
  providerUrlDeepLink: 'providerUrlDeepLink',
  createdBy: 'createdBy',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.CasinoGameFavoriteScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  gameId: 'gameId',
  favoritedAt: 'favoritedAt'
};

exports.Prisma.CasinoSessionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  gameId: 'gameId',
  playerToken: 'playerToken',
  sessionStatus: 'sessionStatus',
  providerSessionReference: 'providerSessionReference',
  walletId: 'walletId',
  currency: 'currency',
  startedAt: 'startedAt',
  endedAt: 'endedAt',
  totalRounds: 'totalRounds',
  totalWagered: 'totalWagered',
  totalPayout: 'totalPayout',
  maxWinDuringSession: 'maxWinDuringSession',
  ipAddress: 'ipAddress',
  device: 'device',
  userAgent: 'userAgent',
  geoCountry: 'geoCountry',
  closedReason: 'closedReason',
  closedBy: 'closedBy',
  correlationId: 'correlationId',
  playerBalanceSnapshots: 'playerBalanceSnapshots'
};

exports.Prisma.CasinoBetScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  sessionId: 'sessionId',
  gameId: 'gameId',
  providerRef: 'providerRef',
  roundRef: 'roundRef',
  status: 'status',
  wageredAmount: 'wageredAmount',
  wageredCurrency: 'wageredCurrency',
  linesBet: 'linesBet',
  stakePerLine: 'stakePerLine',
  payoutAmount: 'payoutAmount',
  netResult: 'netResult',
  betType: 'betType',
  jackpotContribution: 'jackpotContribution',
  jackpotWin: 'jackpotWin',
  placedAt: 'placedAt',
  settledAt: 'settledAt',
  settledBy: 'settledBy',
  initialSeed: 'initialSeed',
  resultSeed: 'resultSeed',
  finalRevealSnapshot: 'finalRevealSnapshot',
  resultSymbols: 'resultSymbols',
  winningLines: 'winningLines',
  freeSpinsTriggered: 'freeSpinsTriggered',
  bonusRoundTriggered: 'bonusRoundTriggered',
  gambleFeatureUsed: 'gambleFeatureUsed',
  gambleResult: 'gambleResult',
  correlationId: 'correlationId',
  providerRawRequest: 'providerRawRequest',
  providerRawResponse: 'providerRawResponse',
  deletedAt: 'deletedAt'
};

exports.Prisma.CasinoJackpotScalarFieldEnum = {
  id: 'id',
  type: 'type',
  name: 'name',
  currency: 'currency',
  currentAmount: 'currentAmount',
  seedAmount: 'seedAmount',
  maxCapAmount: 'maxCapAmount',
  contributionPercentOfBet: 'contributionPercentOfBet',
  triggerAmount: 'triggerAmount',
  lastWinAt: 'lastWinAt',
  lastWinAmount: 'lastWinAmount',
  lastWinnerId: 'lastWinnerId',
  triggerChancePerMillion: 'triggerChancePerMillion',
  enabled: 'enabled',
  gameIds: 'gameIds',
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

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.CasinoGameCategory = exports.$Enums.CasinoGameCategory = {
  SLOTS: 'SLOTS',
  ROULETTE: 'ROULETTE',
  BLACKJACK: 'BLACKJACK',
  BACCARAT: 'BACCARAT',
  POKER: 'POKER',
  CRAPS: 'CRAPS',
  KENO: 'KENO',
  SCRATCH_CARDS: 'SCRATCH_CARDS',
  BINGO: 'BINGO',
  LIVE_DEALER: 'LIVE_DEALER',
  LIVE_ROULETTE: 'LIVE_ROULETTE',
  LIVE_BLACKJACK: 'LIVE_BLACKJACK',
  LIVE_BACCARAT: 'LIVE_BACCARAT',
  GAME_SHOW: 'GAME_SHOW',
  VIRTUAL_SPORTS: 'VIRTUAL_SPORTS',
  JACKPOT: 'JACKPOT',
  MEGA_WAYS: 'MEGA_WAYS'
};

exports.CasinoProvider = exports.$Enums.CasinoProvider = {
  MOCK: 'MOCK',
  PGSOFT: 'PGSOFT',
  EVOLUTION: 'EVOLUTION',
  PRAGMATIC: 'PRAGMATIC',
  NETENT: 'NETENT',
  MICROGAMING: 'MICROGAMING',
  PLAYTECH: 'PLAYTECH',
  YGGDRASIL: 'YGGDRASIL',
  QUICKSPIN: 'QUICKSPIN',
  RED_TIGER: 'RED_TIGER',
  PLAY_N_GO: 'PLAY_N_GO',
  HABANERO: 'HABANERO',
  BOOMING: 'BOOMING'
};

exports.CasinoGameStatus = exports.$Enums.CasinoGameStatus = {
  ACTIVE: 'ACTIVE',
  MAINTENANCE: 'MAINTENANCE',
  DISABLED: 'DISABLED',
  COMING_SOON: 'COMING_SOON'
};

exports.CasinoSessionStatus = exports.$Enums.CasinoSessionStatus = {
  INITIATED: 'INITIATED',
  ACTIVE: 'ACTIVE',
  CLOSED: 'CLOSED',
  TIMED_OUT: 'TIMED_OUT',
  ERROR: 'ERROR',
  KYC_REQUIRED: 'KYC_REQUIRED',
  SELF_EXCLUDED: 'SELF_EXCLUDED'
};

exports.CasinoBetStatus = exports.$Enums.CasinoBetStatus = {
  PLACED: 'PLACED',
  WON: 'WON',
  LOST: 'LOST',
  PUSH: 'PUSH',
  VOID: 'VOID',
  FREE_SPIN: 'FREE_SPIN',
  BONUS_GAME: 'BONUS_GAME'
};

exports.CasinoJackpotType = exports.$Enums.CasinoJackpotType = {
  PROGRESSIVE: 'PROGRESSIVE',
  LOCAL: 'LOCAL',
  NETWORK: 'NETWORK',
  DAILY_DROP: 'DAILY_DROP'
};

exports.Prisma.ModelName = {
  CasinoGame: 'CasinoGame',
  CasinoGameFavorite: 'CasinoGameFavorite',
  CasinoSession: 'CasinoSession',
  CasinoBet: 'CasinoBet',
  CasinoJackpot: 'CasinoJackpot'
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
