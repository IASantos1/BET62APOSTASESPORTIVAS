
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
