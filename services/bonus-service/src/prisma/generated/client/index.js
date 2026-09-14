
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

exports.Prisma.BonusCampaignScalarFieldEnum = {
  id: 'id',
  name: 'name',
  code: 'code',
  bonusType: 'bonusType',
  trigger: 'trigger',
  status: 'status',
  matchPercent: 'matchPercent',
  maxAmount: 'maxAmount',
  minDepositAmount: 'minDepositAmount',
  minOddsRequirement: 'minOddsRequirement',
  rolloverMultiplier: 'rolloverMultiplier',
  rolloverContributionCategory: 'rolloverContributionCategory',
  startsAt: 'startsAt',
  expiresAt: 'expiresAt',
  validityDays: 'validityDays',
  freeSpinsCount: 'freeSpinsCount',
  freeSpinsGameId: 'freeSpinsGameId',
  eligibleCountries: 'eligibleCountries',
  eligibleSports: 'eligibleSports',
  sportMinOdds: 'sportMinOdds',
  maxBonusPerUser: 'maxBonusPerUser',
  wageringSportAllowed: 'wageringSportAllowed',
  wageringCasinoAllowed: 'wageringCasinoAllowed',
  description: 'description',
  termsHtml: 'termsHtml',
  metadata: 'metadata',
  isPromo: 'isPromo',
  createdBy: 'createdBy',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.UserBonusScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  campaignId: 'campaignId',
  bonusType: 'bonusType',
  status: 'status',
  grantedAmount: 'grantedAmount',
  grantedCurrency: 'grantedCurrency',
  maxAmount: 'maxAmount',
  usedAmount: 'usedAmount',
  releasedAmount: 'releasedAmount',
  minOddsRequirement: 'minOddsRequirement',
  rolloverMultiplier: 'rolloverMultiplier',
  rolloverContributionCategory: 'rolloverContributionCategory',
  rolloverRequiredTotal: 'rolloverRequiredTotal',
  rolloverCompletedReal: 'rolloverCompletedReal',
  rolloverCompletedWeighted: 'rolloverCompletedWeighted',
  rolloverPercent: 'rolloverPercent',
  rolloverStatus: 'rolloverStatus',
  grantedAt: 'grantedAt',
  activatedAt: 'activatedAt',
  expiresAt: 'expiresAt',
  lastContributionAt: 'lastContributionAt',
  releasedAt: 'releasedAt',
  cancelledAt: 'cancelledAt',
  cancelledReason: 'cancelledReason',
  referenceDepositId: 'referenceDepositId',
  promocodeUsed: 'promocodeUsed',
  freebetIdExternal: 'freebetIdExternal',
  description: 'description',
  noteAdmin: 'noteAdmin',
  createdByAdminId: 'createdByAdminId',
  metadata: 'metadata',
  walletId: 'walletId'
};

exports.Prisma.RolloverLedgerEntryScalarFieldEnum = {
  id: 'id',
  userBonusId: 'userBonusId',
  transactionDate: 'transactionDate',
  betId: 'betId',
  casinoRoundId: 'casinoRoundId',
  wageredAmount: 'wageredAmount',
  sourceType: 'sourceType',
  sportType: 'sportType',
  casinoCategory: 'casinoCategory',
  contributionPercent: 'contributionPercent',
  weightedContributionAmount: 'weightedContributionAmount',
  oddsAtBet: 'oddsAtBet',
  winningAmount: 'winningAmount',
  selectionCount: 'selectionCount',
  referenceCorrelationId: 'referenceCorrelationId'
};

exports.Prisma.FreeBetScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  campaignId: 'campaignId',
  bonusId: 'bonusId',
  status: 'status',
  amount: 'amount',
  minOddsRequirement: 'minOddsRequirement',
  rolloverMultiplier: 'rolloverMultiplier',
  sportTypeRestriction: 'sportTypeRestriction',
  leagueRestriction: 'leagueRestriction',
  startsAt: 'startsAt',
  expiresAt: 'expiresAt',
  usedAt: 'usedAt',
  usedBetId: 'usedBetId',
  remainingAmount: 'remainingAmount',
  grantedBy: 'grantedBy',
  correlationId: 'correlationId',
  deletedAt: 'deletedAt'
};

exports.Prisma.CasinoFreeSpinScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  campaignId: 'campaignId',
  bonusId: 'bonusId',
  gameId: 'gameId',
  gameProvider: 'gameProvider',
  countTotal: 'countTotal',
  countUsed: 'countUsed',
  status: 'status',
  betAmountPerSpin: 'betAmountPerSpin',
  expiresAt: 'expiresAt',
  usedAt: 'usedAt',
  correlationId: 'correlationId'
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
exports.BonusType = exports.$Enums.BonusType = {
  WELCOME_MATCH: 'WELCOME_MATCH',
  RELOAD_MATCH: 'RELOAD_MATCH',
  FREEBET: 'FREEBET',
  FREE_SPINS: 'FREE_SPINS',
  CASHBACK_LOSS: 'CASHBACK_LOSS',
  CASHBACK_DEPOSIT: 'CASHBACK_DEPOSIT',
  RISK_FREE_BET: 'RISK_FREE_BET',
  REFERRAL: 'REFERRAL',
  LOYALTY: 'LOYALTY',
  COMP_POINTS: 'COMP_POINTS',
  NO_DEPOSIT: 'NO_DEPOSIT',
  PERSONALIZED: 'PERSONALIZED'
};

exports.BonusTrigger = exports.$Enums.BonusTrigger = {
  MANUAL: 'MANUAL',
  FIRST_DEPOSIT: 'FIRST_DEPOSIT',
  DEPOSIT: 'DEPOSIT',
  SIGNUP: 'SIGNUP',
  BET_WON: 'BET_WON',
  BET_LOST: 'BET_LOST',
  LOYALTY_LEVEL: 'LOYALTY_LEVEL',
  REFERRAL_SIGNUP: 'REFERRAL_SIGNUP',
  REFERRAL_DEPOSIT: 'REFERRAL_DEPOSIT',
  WEEKLY_SCHEDULED: 'WEEKLY_SCHEDULED',
  MONTHLY_SCHEDULED: 'MONTHLY_SCHEDULED',
  CAMPAIGN_CODE: 'CAMPAIGN_CODE',
  BIRTHDAY: 'BIRTHDAY'
};

exports.CampaignStatus = exports.$Enums.CampaignStatus = {
  DRAFT: 'DRAFT',
  ACTIVE: 'ACTIVE',
  PAUSED: 'PAUSED',
  EXPIRED: 'EXPIRED',
  ARCHIVED: 'ARCHIVED'
};

exports.CasinoContributionCategory = exports.$Enums.CasinoContributionCategory = {
  SLOTS_ONLY: 'SLOTS_ONLY',
  STANDARD_MIX: 'STANDARD_MIX',
  TABLES_ONLY: 'TABLES_ONLY',
  LIVE_DEALER_EXCLUDED: 'LIVE_DEALER_EXCLUDED',
  SPORTS_ONLY: 'SPORTS_ONLY'
};

exports.BonusStatus = exports.$Enums.BonusStatus = {
  AVAILABLE: 'AVAILABLE',
  ACTIVE: 'ACTIVE',
  LOCKED: 'LOCKED',
  ROLLOVER_COMPLETE: 'ROLLOVER_COMPLETE',
  RELEASED: 'RELEASED',
  EXPIRED: 'EXPIRED',
  CANCELLED: 'CANCELLED',
  USED: 'USED',
  VOID: 'VOID'
};

exports.RolloverStatus = exports.$Enums.RolloverStatus = {
  NOT_STARTED: 'NOT_STARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETE: 'COMPLETE',
  EXPIRED: 'EXPIRED',
  FORFEITED: 'FORFEITED',
  RELEASED: 'RELEASED'
};

exports.Prisma.ModelName = {
  BonusCampaign: 'BonusCampaign',
  UserBonus: 'UserBonus',
  RolloverLedgerEntry: 'RolloverLedgerEntry',
  FreeBet: 'FreeBet',
  CasinoFreeSpin: 'CasinoFreeSpin'
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
      "value": "C:\\Users\\israe\\Desktop\\BET62APOSTAS\\services\\bonus-service\\src\\prisma\\generated\\client",
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
    "sourceFilePath": "C:\\Users\\israe\\Desktop\\BET62APOSTAS\\services\\bonus-service\\prisma\\schema.prisma",
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
  "inlineSchema": "generator client {\n  provider        = \"prisma-client-js\"\n  output          = \"../src/prisma/generated/client\"\n  previewFeatures = [\"multiSchema\"]\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n  schemas  = [\"bonus\"]\n}\n\nenum BonusType {\n  WELCOME_MATCH\n  RELOAD_MATCH\n  FREEBET\n  FREE_SPINS\n  CASHBACK_LOSS\n  CASHBACK_DEPOSIT\n  RISK_FREE_BET\n  REFERRAL\n  LOYALTY\n  COMP_POINTS\n  NO_DEPOSIT\n  PERSONALIZED\n\n  @@schema(\"bonus\")\n}\n\nenum BonusStatus {\n  AVAILABLE\n  ACTIVE\n  LOCKED\n  ROLLOVER_COMPLETE\n  RELEASED\n  EXPIRED\n  CANCELLED\n  USED\n  VOID\n\n  @@schema(\"bonus\")\n}\n\nenum BonusTrigger {\n  MANUAL\n  FIRST_DEPOSIT\n  DEPOSIT\n  SIGNUP\n  BET_WON\n  BET_LOST\n  LOYALTY_LEVEL\n  REFERRAL_SIGNUP\n  REFERRAL_DEPOSIT\n  WEEKLY_SCHEDULED\n  MONTHLY_SCHEDULED\n  CAMPAIGN_CODE\n  BIRTHDAY\n\n  @@schema(\"bonus\")\n}\n\nenum CampaignStatus {\n  DRAFT\n  ACTIVE\n  PAUSED\n  EXPIRED\n  ARCHIVED\n\n  @@schema(\"bonus\")\n}\n\nenum CasinoContributionCategory {\n  SLOTS_ONLY\n  STANDARD_MIX\n  TABLES_ONLY\n  LIVE_DEALER_EXCLUDED\n  SPORTS_ONLY\n\n  @@schema(\"bonus\")\n}\n\nenum RolloverStatus {\n  NOT_STARTED\n  IN_PROGRESS\n  COMPLETE\n  EXPIRED\n  FORFEITED\n  RELEASED\n\n  @@schema(\"bonus\")\n}\n\nmodel BonusCampaign {\n  id                           String                      @id @default(uuid())\n  name                         String                      @unique @db.VarChar(128)\n  code                         String?                     @unique\n  bonusType                    BonusType\n  trigger                      BonusTrigger\n  status                       CampaignStatus              @default(DRAFT)\n  matchPercent                 Decimal?                    @db.Decimal(5, 2)\n  maxAmount                    Decimal?                    @db.Decimal(14, 2)\n  minDepositAmount             Decimal?                    @db.Decimal(14, 2)\n  minOddsRequirement           Decimal?                    @db.Decimal(5, 2)\n  rolloverMultiplier           Decimal?                    @default(1) @db.Decimal(5, 2)\n  rolloverContributionCategory CasinoContributionCategory?\n  startsAt                     DateTime?\n  expiresAt                    DateTime?\n  validityDays                 Int?\n  freeSpinsCount               Int?\n  freeSpinsGameId              String?\n  eligibleCountries            String[]                    @default([])\n  eligibleSports               String[]                    @default([])\n  sportMinOdds                 Decimal?                    @db.Decimal(5, 2)\n  maxBonusPerUser              Decimal?                    @db.Decimal(14, 2)\n  wageringSportAllowed         Boolean                     @default(true)\n  wageringCasinoAllowed        Boolean                     @default(true)\n  description                  String?\n  termsHtml                    String?                     @db.Text\n  metadata                     Json?\n  isPromo                      Boolean                     @default(false)\n  createdBy                    String?\n  createdAt                    DateTime                    @default(now())\n  updatedAt                    DateTime                    @updatedAt\n  deletedAt                    DateTime?\n\n  userBonuses     UserBonus[]\n  freeBets        FreeBet[]\n  casinoFreeSpins CasinoFreeSpin[]\n\n  @@index([status, trigger, bonusType])\n  @@index([code])\n  @@index([expiresAt])\n  @@map(\"bonus_campaign\")\n  @@schema(\"bonus\")\n}\n\nmodel UserBonus {\n  id                           String                      @id @default(uuid())\n  userId                       String\n  campaignId                   String?\n  bonusType                    BonusType\n  status                       BonusStatus                 @default(ACTIVE)\n  grantedAmount                Decimal                     @db.Decimal(14, 2)\n  grantedCurrency              String                      @default(\"EUR\") @db.VarChar(8)\n  maxAmount                    Decimal?                    @db.Decimal(14, 2)\n  usedAmount                   Decimal?                    @default(0) @db.Decimal(14, 2)\n  releasedAmount               Decimal?                    @default(0) @db.Decimal(14, 2)\n  minOddsRequirement           Decimal?                    @db.Decimal(5, 2)\n  rolloverMultiplier           Decimal?                    @default(1) @db.Decimal(5, 2)\n  rolloverContributionCategory CasinoContributionCategory?\n  rolloverRequiredTotal        Decimal                     @db.Decimal(14, 2)\n  rolloverCompletedReal        Decimal                     @default(0) @db.Decimal(14, 2)\n  rolloverCompletedWeighted    Decimal                     @default(0) @db.Decimal(14, 2)\n  rolloverPercent              Decimal?                    @db.Decimal(5, 2)\n  rolloverStatus               RolloverStatus              @default(NOT_STARTED)\n  grantedAt                    DateTime                    @default(now())\n  activatedAt                  DateTime?\n  expiresAt                    DateTime?\n  lastContributionAt           DateTime?\n  releasedAt                   DateTime?\n  cancelledAt                  DateTime?\n  cancelledReason              String?\n  referenceDepositId           String?\n  promocodeUsed                String?\n  freebetIdExternal            String?\n  description                  String?\n  noteAdmin                    String?\n  createdByAdminId             String?\n  metadata                     Json?\n  walletId                     String?\n\n  campaign              BonusCampaign?        @relation(fields: [campaignId], references: [id])\n  rolloverLedgerEntries RolloverLedgerEntry[]\n\n  @@index([userId, status])\n  @@index([userId, campaignId])\n  @@index([userId, expiresAt])\n  @@index([rolloverStatus])\n  @@map(\"user_bonus\")\n  @@schema(\"bonus\")\n}\n\nmodel RolloverLedgerEntry {\n  id                         String   @id @default(uuid())\n  userBonusId                String\n  transactionDate            DateTime @default(now())\n  betId                      String?\n  casinoRoundId              String?\n  wageredAmount              Decimal  @db.Decimal(12, 2)\n  sourceType                 String   @db.VarChar(32)\n  sportType                  String?\n  casinoCategory             String?\n  contributionPercent        Decimal? @db.Decimal(5, 2)\n  weightedContributionAmount Decimal? @db.Decimal(12, 2)\n  oddsAtBet                  Decimal? @db.Decimal(7, 3)\n  winningAmount              Decimal? @db.Decimal(12, 2)\n  selectionCount             Int?\n  referenceCorrelationId     String?\n\n  userBonus UserBonus @relation(fields: [userBonusId], references: [id], onDelete: Cascade)\n\n  @@index([userBonusId, transactionDate])\n  @@index([betId])\n  @@index([casinoRoundId])\n  @@map(\"rollover_ledger_entry\")\n  @@schema(\"bonus\")\n}\n\nmodel FreeBet {\n  id                   String      @id @default(uuid())\n  userId               String\n  campaignId           String?\n  bonusId              String?\n  status               BonusStatus @default(ACTIVE)\n  amount               Decimal     @db.Decimal(14, 2)\n  minOddsRequirement   Decimal     @default(1.5) @db.Decimal(5, 2)\n  rolloverMultiplier   Decimal?    @default(1) @db.Decimal(5, 2)\n  sportTypeRestriction String?\n  leagueRestriction    String?\n  startsAt             DateTime?\n  expiresAt            DateTime?\n  usedAt               DateTime?\n  usedBetId            String?\n  remainingAmount      Decimal?    @db.Decimal(14, 2)\n  grantedBy            String?\n  correlationId        String?\n  deletedAt            DateTime?   @db.Timestamptz\n\n  campaign BonusCampaign? @relation(fields: [campaignId], references: [id])\n\n  @@index([userId, status])\n  @@index([userId, expiresAt])\n  @@map(\"free_bet\")\n  @@schema(\"bonus\")\n}\n\nmodel CasinoFreeSpin {\n  id               String      @id @default(uuid())\n  userId           String\n  campaignId       String?\n  bonusId          String?\n  gameId           String\n  gameProvider     String      @db.VarChar(64)\n  countTotal       Int\n  countUsed        Int         @default(0)\n  status           BonusStatus @default(ACTIVE)\n  betAmountPerSpin Decimal?    @db.Decimal(10, 4)\n  expiresAt        DateTime?\n  usedAt           DateTime?\n  correlationId    String?\n\n  campaign BonusCampaign? @relation(fields: [campaignId], references: [id])\n\n  @@index([userId, status])\n  @@index([userId, expiresAt])\n  @@index([userId, gameId])\n  @@map(\"casino_free_spin\")\n  @@schema(\"bonus\")\n}\n",
  "inlineSchemaHash": "6443c0547bfda9a764189a918e371dcddaab04211495b6e0b1efd66c8ee78fed",
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

config.runtimeDataModel = JSON.parse("{\"models\":{\"BonusCampaign\":{\"dbName\":\"bonus_campaign\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bonusType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BonusType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trigger\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BonusTrigger\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"CampaignStatus\",\"default\":\"DRAFT\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"matchPercent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maxAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"minDepositAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"minOddsRequirement\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rolloverMultiplier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rolloverContributionCategory\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CasinoContributionCategory\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startsAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expiresAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"validityDays\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"freeSpinsCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"freeSpinsGameId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eligibleCountries\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eligibleSports\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sportMinOdds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maxBonusPerUser\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wageringSportAllowed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wageringCasinoAllowed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"termsHtml\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metadata\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isPromo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userBonuses\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserBonus\",\"relationName\":\"BonusCampaignToUserBonus\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"freeBets\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FreeBet\",\"relationName\":\"BonusCampaignToFreeBet\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"casinoFreeSpins\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CasinoFreeSpin\",\"relationName\":\"BonusCampaignToCasinoFreeSpin\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserBonus\":{\"dbName\":\"user_bonus\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"campaignId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bonusType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BonusType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BonusStatus\",\"default\":\"ACTIVE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"grantedAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"grantedCurrency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"EUR\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maxAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usedAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"releasedAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"minOddsRequirement\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rolloverMultiplier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rolloverContributionCategory\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CasinoContributionCategory\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rolloverRequiredTotal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rolloverCompletedReal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rolloverCompletedWeighted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rolloverPercent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rolloverStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"RolloverStatus\",\"default\":\"NOT_STARTED\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"grantedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"activatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expiresAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastContributionAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"releasedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cancelledAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cancelledReason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"referenceDepositId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"promocodeUsed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"freebetIdExternal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"noteAdmin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdByAdminId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metadata\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"walletId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"campaign\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BonusCampaign\",\"relationName\":\"BonusCampaignToUserBonus\",\"relationFromFields\":[\"campaignId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rolloverLedgerEntries\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RolloverLedgerEntry\",\"relationName\":\"RolloverLedgerEntryToUserBonus\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"RolloverLedgerEntry\":{\"dbName\":\"rollover_ledger_entry\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userBonusId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactionDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"betId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"casinoRoundId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wageredAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sourceType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sportType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"casinoCategory\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contributionPercent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"weightedContributionAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oddsAtBet\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"winningAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"selectionCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"referenceCorrelationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userBonus\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserBonus\",\"relationName\":\"RolloverLedgerEntryToUserBonus\",\"relationFromFields\":[\"userBonusId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"FreeBet\":{\"dbName\":\"free_bet\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"campaignId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bonusId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BonusStatus\",\"default\":\"ACTIVE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"minOddsRequirement\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":1.5,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rolloverMultiplier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sportTypeRestriction\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"leagueRestriction\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startsAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expiresAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usedBetId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remainingAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"grantedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"correlationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"campaign\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BonusCampaign\",\"relationName\":\"BonusCampaignToFreeBet\",\"relationFromFields\":[\"campaignId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CasinoFreeSpin\":{\"dbName\":\"casino_free_spin\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"campaignId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bonusId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gameId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gameProvider\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"countTotal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"countUsed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BonusStatus\",\"default\":\"ACTIVE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"betAmountPerSpin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expiresAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"correlationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"campaign\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BonusCampaign\",\"relationName\":\"BonusCampaignToCasinoFreeSpin\",\"relationFromFields\":[\"campaignId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"BonusType\":{\"values\":[{\"name\":\"WELCOME_MATCH\",\"dbName\":null},{\"name\":\"RELOAD_MATCH\",\"dbName\":null},{\"name\":\"FREEBET\",\"dbName\":null},{\"name\":\"FREE_SPINS\",\"dbName\":null},{\"name\":\"CASHBACK_LOSS\",\"dbName\":null},{\"name\":\"CASHBACK_DEPOSIT\",\"dbName\":null},{\"name\":\"RISK_FREE_BET\",\"dbName\":null},{\"name\":\"REFERRAL\",\"dbName\":null},{\"name\":\"LOYALTY\",\"dbName\":null},{\"name\":\"COMP_POINTS\",\"dbName\":null},{\"name\":\"NO_DEPOSIT\",\"dbName\":null},{\"name\":\"PERSONALIZED\",\"dbName\":null}],\"dbName\":null},\"BonusStatus\":{\"values\":[{\"name\":\"AVAILABLE\",\"dbName\":null},{\"name\":\"ACTIVE\",\"dbName\":null},{\"name\":\"LOCKED\",\"dbName\":null},{\"name\":\"ROLLOVER_COMPLETE\",\"dbName\":null},{\"name\":\"RELEASED\",\"dbName\":null},{\"name\":\"EXPIRED\",\"dbName\":null},{\"name\":\"CANCELLED\",\"dbName\":null},{\"name\":\"USED\",\"dbName\":null},{\"name\":\"VOID\",\"dbName\":null}],\"dbName\":null},\"BonusTrigger\":{\"values\":[{\"name\":\"MANUAL\",\"dbName\":null},{\"name\":\"FIRST_DEPOSIT\",\"dbName\":null},{\"name\":\"DEPOSIT\",\"dbName\":null},{\"name\":\"SIGNUP\",\"dbName\":null},{\"name\":\"BET_WON\",\"dbName\":null},{\"name\":\"BET_LOST\",\"dbName\":null},{\"name\":\"LOYALTY_LEVEL\",\"dbName\":null},{\"name\":\"REFERRAL_SIGNUP\",\"dbName\":null},{\"name\":\"REFERRAL_DEPOSIT\",\"dbName\":null},{\"name\":\"WEEKLY_SCHEDULED\",\"dbName\":null},{\"name\":\"MONTHLY_SCHEDULED\",\"dbName\":null},{\"name\":\"CAMPAIGN_CODE\",\"dbName\":null},{\"name\":\"BIRTHDAY\",\"dbName\":null}],\"dbName\":null},\"CampaignStatus\":{\"values\":[{\"name\":\"DRAFT\",\"dbName\":null},{\"name\":\"ACTIVE\",\"dbName\":null},{\"name\":\"PAUSED\",\"dbName\":null},{\"name\":\"EXPIRED\",\"dbName\":null},{\"name\":\"ARCHIVED\",\"dbName\":null}],\"dbName\":null},\"CasinoContributionCategory\":{\"values\":[{\"name\":\"SLOTS_ONLY\",\"dbName\":null},{\"name\":\"STANDARD_MIX\",\"dbName\":null},{\"name\":\"TABLES_ONLY\",\"dbName\":null},{\"name\":\"LIVE_DEALER_EXCLUDED\",\"dbName\":null},{\"name\":\"SPORTS_ONLY\",\"dbName\":null}],\"dbName\":null},\"RolloverStatus\":{\"values\":[{\"name\":\"NOT_STARTED\",\"dbName\":null},{\"name\":\"IN_PROGRESS\",\"dbName\":null},{\"name\":\"COMPLETE\",\"dbName\":null},{\"name\":\"EXPIRED\",\"dbName\":null},{\"name\":\"FORFEITED\",\"dbName\":null},{\"name\":\"RELEASED\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
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
