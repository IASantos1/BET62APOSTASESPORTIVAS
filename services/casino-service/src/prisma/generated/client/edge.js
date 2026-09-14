
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
      "value": "C:\\Users\\israe\\Desktop\\BET62APOSTAS\\services\\casino-service\\src\\prisma\\generated\\client",
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
    "sourceFilePath": "C:\\Users\\israe\\Desktop\\BET62APOSTAS\\services\\casino-service\\prisma\\schema.prisma",
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
  "inlineSchema": "generator client {\n  provider        = \"prisma-client-js\"\n  output          = \"../src/prisma/generated/client\"\n  previewFeatures = [\"multiSchema\"]\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n  schemas  = [\"casino\"]\n}\n\nenum CasinoGameCategory {\n  SLOTS\n  ROULETTE\n  BLACKJACK\n  BACCARAT\n  POKER\n  CRAPS\n  KENO\n  SCRATCH_CARDS\n  BINGO\n  LIVE_DEALER\n  LIVE_ROULETTE\n  LIVE_BLACKJACK\n  LIVE_BACCARAT\n  GAME_SHOW\n  VIRTUAL_SPORTS\n  JACKPOT\n  MEGA_WAYS\n\n  @@schema(\"casino\")\n}\n\nenum CasinoGameStatus {\n  ACTIVE\n  MAINTENANCE\n  DISABLED\n  COMING_SOON\n\n  @@schema(\"casino\")\n}\n\nenum CasinoBetStatus {\n  PLACED\n  WON\n  LOST\n  PUSH\n  VOID\n  FREE_SPIN\n  BONUS_GAME\n\n  @@schema(\"casino\")\n}\n\nenum CasinoProvider {\n  MOCK\n  PGSOFT\n  EVOLUTION\n  PRAGMATIC\n  NETENT\n  MICROGAMING\n  PLAYTECH\n  YGGDRASIL\n  QUICKSPIN\n  RED_TIGER\n  PLAY_N_GO\n  HABANERO\n  BOOMING\n\n  @@schema(\"casino\")\n}\n\nenum CasinoSessionStatus {\n  INITIATED\n  ACTIVE\n  CLOSED\n  TIMED_OUT\n  ERROR\n  KYC_REQUIRED\n  SELF_EXCLUDED\n\n  @@schema(\"casino\")\n}\n\nenum CasinoJackpotType {\n  PROGRESSIVE\n  LOCAL\n  NETWORK\n  DAILY_DROP\n\n  @@schema(\"casino\")\n}\n\nmodel CasinoGame {\n  id                     String             @id @default(uuid())\n  providerId             String\n  providerGameId         String\n  name                   String\n  slug                   String             @unique\n  category               CasinoGameCategory\n  provider               CasinoProvider\n  status                 CasinoGameStatus   @default(ACTIVE)\n  rtp                    Decimal            @db.Decimal(5, 2)\n  volatility             String?            @db.VarChar(16)\n  minBet                 Decimal            @default(0.10) @db.Decimal(12, 2)\n  maxBet                 Decimal            @default(5000) @db.Decimal(12, 2)\n  maxWinMultiplier       Decimal?           @db.Decimal(10, 2)\n  lines                  Int?\n  reels                  Int?\n  hasFreeSpins           Boolean            @default(false)\n  hasJackpot             Boolean            @default(false)\n  hasBonusBuy            Boolean            @default(false)\n  hasLiveDealer          Boolean            @default(false)\n  gameConfig             Json?\n  thumbUrl               String?\n  bannerUrl              String?\n  lobbyTags              String[]           @default([])\n  languages              String[]           @default([])\n  countriesBlocked       String[]           @default([])\n  isNew                  Boolean            @default(false)\n  isHot                  Boolean            @default(false)\n  isFeatured             Boolean            @default(false)\n  popularTrendScore      Int?\n  totalRoundsPlayed      BigInt             @default(0)\n  totalWagered           Decimal            @default(0) @db.Decimal(18, 2)\n  totalPayout            Decimal            @default(0) @db.Decimal(18, 2)\n  lastWinAt              DateTime?\n  seededHouseEdgePercent Decimal?           @db.Decimal(5, 4)\n  providerUrlDeepLink    String?\n  createdBy              String?\n  createdAt              DateTime           @default(now())\n  updatedAt              DateTime           @updatedAt\n  deletedAt              DateTime?\n\n  favorites CasinoGameFavorite[]\n  sessions  CasinoSession[]\n  bets      CasinoBet[]\n\n  @@unique([providerId, providerGameId])\n  @@index([category, status])\n  @@index([provider, status])\n  @@index([isFeatured, status])\n  @@index([isHot, status])\n  @@index([isNew, status])\n  @@index([slug])\n  @@map(\"casino_game\")\n  @@schema(\"casino\")\n}\n\nmodel CasinoGameFavorite {\n  id          String   @id @default(uuid())\n  userId      String\n  gameId      String\n  favoritedAt DateTime @default(now())\n\n  game CasinoGame @relation(fields: [gameId], references: [id], onDelete: Cascade)\n\n  @@unique([userId, gameId])\n  @@index([userId])\n  @@map(\"casino_game_favorite\")\n  @@schema(\"casino\")\n}\n\nmodel CasinoSession {\n  id                       String              @id @default(uuid())\n  userId                   String\n  gameId                   String\n  playerToken              String?             @unique\n  sessionStatus            CasinoSessionStatus @default(INITIATED)\n  providerSessionReference String?\n  walletId                 String?\n  currency                 String              @default(\"EUR\") @db.VarChar(8)\n  startedAt                DateTime            @default(now())\n  endedAt                  DateTime?\n  totalRounds              Int                 @default(0)\n  totalWagered             Decimal             @default(0) @db.Decimal(14, 2)\n  totalPayout              Decimal             @default(0) @db.Decimal(14, 2)\n  maxWinDuringSession      Decimal?            @db.Decimal(14, 2)\n  ipAddress                String?\n  device                   String?\n  userAgent                String?\n  geoCountry               String?\n  closedReason             String?\n  closedBy                 String?\n  correlationId            String?\n  playerBalanceSnapshots   Json?\n\n  game CasinoGame  @relation(fields: [gameId], references: [id])\n  bets CasinoBet[]\n\n  @@index([userId, sessionStatus])\n  @@index([userId, endedAt])\n  @@index([gameId, sessionStatus])\n  @@map(\"casino_session\")\n  @@schema(\"casino\")\n}\n\nmodel CasinoBet {\n  id                  String          @id @default(uuid())\n  userId              String\n  sessionId           String?\n  gameId              String\n  providerRef         String?         @unique\n  roundRef            String?\n  status              CasinoBetStatus @default(PLACED)\n  wageredAmount       Decimal         @db.Decimal(14, 2)\n  wageredCurrency     String          @default(\"EUR\") @db.VarChar(8)\n  linesBet            Int?\n  stakePerLine        Decimal?        @db.Decimal(12, 4)\n  payoutAmount        Decimal?        @db.Decimal(14, 2)\n  netResult           Decimal?        @db.Decimal(14, 2)\n  betType             String?\n  jackpotContribution Decimal?        @db.Decimal(14, 4)\n  jackpotWin          Decimal?        @db.Decimal(16, 2)\n  placedAt            DateTime        @default(now())\n  settledAt           DateTime?\n  settledBy           String?\n  initialSeed         String?\n  resultSeed          String?\n  finalRevealSnapshot Json?\n  resultSymbols       Json?\n  winningLines        Json?\n  freeSpinsTriggered  Int?\n  bonusRoundTriggered Boolean?        @default(false)\n  gambleFeatureUsed   Boolean?        @default(false)\n  gambleResult        String?\n  correlationId       String?\n  providerRawRequest  Json?\n  providerRawResponse Json?\n  deletedAt           DateTime?       @db.Timestamptz\n\n  session CasinoSession? @relation(fields: [sessionId], references: [id])\n  game    CasinoGame     @relation(fields: [gameId], references: [id])\n\n  @@index([userId, status])\n  @@index([userId, placedAt])\n  @@index([sessionId])\n  @@index([gameId, status])\n  @@index([roundRef])\n  @@map(\"casino_bet\")\n  @@schema(\"casino\")\n}\n\nmodel CasinoJackpot {\n  id                       String            @id @default(uuid())\n  type                     CasinoJackpotType\n  name                     String\n  currency                 String            @default(\"EUR\") @db.VarChar(8)\n  currentAmount            Decimal           @db.Decimal(16, 2)\n  seedAmount               Decimal           @db.Decimal(16, 2)\n  maxCapAmount             Decimal?          @db.Decimal(16, 2)\n  contributionPercentOfBet Decimal           @default(0.02) @db.Decimal(5, 4)\n  triggerAmount            Decimal?          @db.Decimal(16, 2)\n  lastWinAt                DateTime?\n  lastWinAmount            Decimal?          @db.Decimal(16, 2)\n  lastWinnerId             String?\n  triggerChancePerMillion  Int?\n  enabled                  Boolean           @default(true)\n  gameIds                  String[]          @default([])\n  createdAt                DateTime          @default(now())\n  updatedAt                DateTime          @updatedAt\n\n  @@index([type, enabled])\n  @@index([enabled])\n  @@map(\"casino_jackpot\")\n  @@schema(\"casino\")\n}\n",
  "inlineSchemaHash": "06e242bc1d6fb6353c1576eac09d636ce05df3b4fabbce9e297304a3514e6cdd",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"CasinoGame\":{\"dbName\":\"casino_game\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerGameId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"slug\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CasinoGameCategory\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"provider\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CasinoProvider\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"CasinoGameStatus\",\"default\":\"ACTIVE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rtp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"volatility\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"minBet\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0.1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maxBet\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":5000,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maxWinMultiplier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lines\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reels\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hasFreeSpins\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hasJackpot\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hasBonusBuy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hasLiveDealer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gameConfig\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thumbUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bannerUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lobbyTags\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"languages\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"countriesBlocked\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isNew\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isHot\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isFeatured\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"popularTrendScore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalRoundsPlayed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalWagered\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalPayout\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastWinAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"seededHouseEdgePercent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerUrlDeepLink\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"favorites\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CasinoGameFavorite\",\"relationName\":\"CasinoGameToCasinoGameFavorite\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sessions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CasinoSession\",\"relationName\":\"CasinoGameToCasinoSession\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bets\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CasinoBet\",\"relationName\":\"CasinoBetToCasinoGame\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"providerId\",\"providerGameId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"providerId\",\"providerGameId\"]}],\"isGenerated\":false},\"CasinoGameFavorite\":{\"dbName\":\"casino_game_favorite\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gameId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"favoritedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"game\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CasinoGame\",\"relationName\":\"CasinoGameToCasinoGameFavorite\",\"relationFromFields\":[\"gameId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"userId\",\"gameId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"userId\",\"gameId\"]}],\"isGenerated\":false},\"CasinoSession\":{\"dbName\":\"casino_session\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gameId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"playerToken\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sessionStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"CasinoSessionStatus\",\"default\":\"INITIATED\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerSessionReference\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"walletId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"EUR\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalRounds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalWagered\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalPayout\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maxWinDuringSession\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ipAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"device\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userAgent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"geoCountry\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"closedReason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"closedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"correlationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"playerBalanceSnapshots\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"game\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CasinoGame\",\"relationName\":\"CasinoGameToCasinoSession\",\"relationFromFields\":[\"gameId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bets\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CasinoBet\",\"relationName\":\"CasinoBetToCasinoSession\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CasinoBet\":{\"dbName\":\"casino_bet\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sessionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gameId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerRef\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roundRef\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"CasinoBetStatus\",\"default\":\"PLACED\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wageredAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wageredCurrency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"EUR\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"linesBet\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stakePerLine\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payoutAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"netResult\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"betType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jackpotContribution\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jackpotWin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"placedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"settledAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"settledBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"initialSeed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resultSeed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"finalRevealSnapshot\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resultSymbols\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"winningLines\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"freeSpinsTriggered\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bonusRoundTriggered\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gambleFeatureUsed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gambleResult\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"correlationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerRawRequest\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerRawResponse\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"session\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CasinoSession\",\"relationName\":\"CasinoBetToCasinoSession\",\"relationFromFields\":[\"sessionId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"game\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CasinoGame\",\"relationName\":\"CasinoBetToCasinoGame\",\"relationFromFields\":[\"gameId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CasinoJackpot\":{\"dbName\":\"casino_jackpot\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CasinoJackpotType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"EUR\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"seedAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maxCapAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contributionPercentOfBet\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0.02,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"triggerAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastWinAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastWinAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastWinnerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"triggerChancePerMillion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gameIds\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"CasinoGameCategory\":{\"values\":[{\"name\":\"SLOTS\",\"dbName\":null},{\"name\":\"ROULETTE\",\"dbName\":null},{\"name\":\"BLACKJACK\",\"dbName\":null},{\"name\":\"BACCARAT\",\"dbName\":null},{\"name\":\"POKER\",\"dbName\":null},{\"name\":\"CRAPS\",\"dbName\":null},{\"name\":\"KENO\",\"dbName\":null},{\"name\":\"SCRATCH_CARDS\",\"dbName\":null},{\"name\":\"BINGO\",\"dbName\":null},{\"name\":\"LIVE_DEALER\",\"dbName\":null},{\"name\":\"LIVE_ROULETTE\",\"dbName\":null},{\"name\":\"LIVE_BLACKJACK\",\"dbName\":null},{\"name\":\"LIVE_BACCARAT\",\"dbName\":null},{\"name\":\"GAME_SHOW\",\"dbName\":null},{\"name\":\"VIRTUAL_SPORTS\",\"dbName\":null},{\"name\":\"JACKPOT\",\"dbName\":null},{\"name\":\"MEGA_WAYS\",\"dbName\":null}],\"dbName\":null},\"CasinoGameStatus\":{\"values\":[{\"name\":\"ACTIVE\",\"dbName\":null},{\"name\":\"MAINTENANCE\",\"dbName\":null},{\"name\":\"DISABLED\",\"dbName\":null},{\"name\":\"COMING_SOON\",\"dbName\":null}],\"dbName\":null},\"CasinoBetStatus\":{\"values\":[{\"name\":\"PLACED\",\"dbName\":null},{\"name\":\"WON\",\"dbName\":null},{\"name\":\"LOST\",\"dbName\":null},{\"name\":\"PUSH\",\"dbName\":null},{\"name\":\"VOID\",\"dbName\":null},{\"name\":\"FREE_SPIN\",\"dbName\":null},{\"name\":\"BONUS_GAME\",\"dbName\":null}],\"dbName\":null},\"CasinoProvider\":{\"values\":[{\"name\":\"MOCK\",\"dbName\":null},{\"name\":\"PGSOFT\",\"dbName\":null},{\"name\":\"EVOLUTION\",\"dbName\":null},{\"name\":\"PRAGMATIC\",\"dbName\":null},{\"name\":\"NETENT\",\"dbName\":null},{\"name\":\"MICROGAMING\",\"dbName\":null},{\"name\":\"PLAYTECH\",\"dbName\":null},{\"name\":\"YGGDRASIL\",\"dbName\":null},{\"name\":\"QUICKSPIN\",\"dbName\":null},{\"name\":\"RED_TIGER\",\"dbName\":null},{\"name\":\"PLAY_N_GO\",\"dbName\":null},{\"name\":\"HABANERO\",\"dbName\":null},{\"name\":\"BOOMING\",\"dbName\":null}],\"dbName\":null},\"CasinoSessionStatus\":{\"values\":[{\"name\":\"INITIATED\",\"dbName\":null},{\"name\":\"ACTIVE\",\"dbName\":null},{\"name\":\"CLOSED\",\"dbName\":null},{\"name\":\"TIMED_OUT\",\"dbName\":null},{\"name\":\"ERROR\",\"dbName\":null},{\"name\":\"KYC_REQUIRED\",\"dbName\":null},{\"name\":\"SELF_EXCLUDED\",\"dbName\":null}],\"dbName\":null},\"CasinoJackpotType\":{\"values\":[{\"name\":\"PROGRESSIVE\",\"dbName\":null},{\"name\":\"LOCAL\",\"dbName\":null},{\"name\":\"NETWORK\",\"dbName\":null},{\"name\":\"DAILY_DROP\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
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

