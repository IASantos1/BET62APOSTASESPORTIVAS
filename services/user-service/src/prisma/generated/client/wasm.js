
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

exports.Prisma.UserProfileScalarFieldEnum = {
  userId: 'userId',
  firstName: 'firstName',
  lastName: 'lastName',
  fullName: 'fullName',
  dateOfBirth: 'dateOfBirth',
  gender: 'gender',
  country: 'country',
  phoneNumber: 'phoneNumber',
  phoneVerifiedAt: 'phoneVerifiedAt',
  city: 'city',
  address: 'address',
  postalCode: 'postalCode',
  preferredLanguage: 'preferredLanguage',
  preferredCurrency: 'preferredCurrency',
  timezone: 'timezone',
  marketingOptIn: 'marketingOptIn',
  smsOptIn: 'smsOptIn',
  pushOptIn: 'pushOptIn',
  status: 'status',
  registeredFromIp: 'registeredFromIp',
  registeredLocation: 'registeredLocation',
  affiliateCode: 'affiliateCode',
  vipLevel: 'vipLevel',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.UserPreferencesScalarFieldEnum = {
  userId: 'userId',
  oddsFormat: 'oddsFormat',
  defaultStake: 'defaultStake',
  betAcceptanceType: 'betAcceptanceType',
  showLiveScores: 'showLiveScores',
  showFavoritesOnly: 'showFavoritesOnly',
  darkMode: 'darkMode',
  autoCashoutEnabled: 'autoCashoutEnabled',
  autoCashoutThreshold: 'autoCashoutThreshold',
  realityCheckEnabled: 'realityCheckEnabled',
  realityCheckIntervalMin: 'realityCheckIntervalMin',
  quickBetEnabled: 'quickBetEnabled',
  soundEnabled: 'soundEnabled',
  notificationSoundsEnabled: 'notificationSoundsEnabled',
  favoriteSports: 'favoriteSports',
  favoriteLeagues: 'favoriteLeagues',
  favoriteTeams: 'favoriteTeams',
  deletedAt: 'deletedAt'
};

exports.Prisma.UserLimitsScalarFieldEnum = {
  userId: 'userId',
  depositDailyLimit: 'depositDailyLimit',
  depositWeeklyLimit: 'depositWeeklyLimit',
  depositMonthlyLimit: 'depositMonthlyLimit',
  wagerDailyLimit: 'wagerDailyLimit',
  wagerWeeklyLimit: 'wagerWeeklyLimit',
  wagerMonthlyLimit: 'wagerMonthlyLimit',
  lossDailyLimit: 'lossDailyLimit',
  lossWeeklyLimit: 'lossWeeklyLimit',
  lossMonthlyLimit: 'lossMonthlyLimit',
  sessionTimeLimitMin: 'sessionTimeLimitMin',
  stakePerBetMax: 'stakePerBetMax',
  stakePerBetMin: 'stakePerBetMin',
  withdrawalDailyLimit: 'withdrawalDailyLimit',
  withdrawalMonthlyLimit: 'withdrawalMonthlyLimit',
  kycLevelApplied: 'kycLevelApplied',
  deletedAt: 'deletedAt'
};

exports.Prisma.SelfExclusionRecordScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  duration: 'duration',
  startedAt: 'startedAt',
  endsAt: 'endsAt',
  reason: 'reason',
  revokedAt: 'revokedAt',
  revokedBy: 'revokedBy',
  isActive: 'isActive'
};

exports.Prisma.RealityCheckLogScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  sessionId: 'sessionId',
  sessionStartAt: 'sessionStartAt',
  checkAt: 'checkAt',
  acknowledgedAt: 'acknowledgedAt',
  continuePlay: 'continuePlay',
  wageredDuringSession: 'wageredDuringSession',
  won: 'won',
  lost: 'lost',
  net: 'net'
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
exports.CountryCode = exports.$Enums.CountryCode = {
  PT: 'PT',
  ES: 'ES',
  FR: 'FR',
  DE: 'DE',
  IT: 'IT',
  NL: 'NL',
  MT: 'MT',
  GB: 'GB',
  BR: 'BR',
  OTHER: 'OTHER'
};

exports.LanguageCode = exports.$Enums.LanguageCode = {
  pt_PT: 'pt_PT',
  en_US: 'en_US',
  es_ES: 'es_ES'
};

exports.CurrencyCode = exports.$Enums.CurrencyCode = {
  EUR: 'EUR',
  USD: 'USD',
  GBP: 'GBP',
  BRL: 'BRL'
};

exports.UserStatus = exports.$Enums.UserStatus = {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  SUSPENDED: 'SUSPENDED',
  SELF_EXCLUDED: 'SELF_EXCLUDED',
  BANNED: 'BANNED',
  CLOSED: 'CLOSED'
};

exports.OddsFormat = exports.$Enums.OddsFormat = {
  decimal: 'decimal',
  fractional: 'fractional',
  american: 'american',
  hongkong: 'hongkong',
  indonesian: 'indonesian',
  malay: 'malay'
};

exports.SelfExcludeDuration = exports.$Enums.SelfExcludeDuration = {
  DAYS_7: 'DAYS_7',
  DAYS_30: 'DAYS_30',
  DAYS_90: 'DAYS_90',
  DAYS_180: 'DAYS_180',
  DAYS_365: 'DAYS_365',
  PERMANENT: 'PERMANENT'
};

exports.Prisma.ModelName = {
  UserProfile: 'UserProfile',
  UserPreferences: 'UserPreferences',
  UserLimits: 'UserLimits',
  SelfExclusionRecord: 'SelfExclusionRecord',
  RealityCheckLog: 'RealityCheckLog'
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
