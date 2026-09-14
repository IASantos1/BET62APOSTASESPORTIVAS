
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

exports.Prisma.NotificationTemplateScalarFieldEnum = {
  id: 'id',
  name: 'name',
  category: 'category',
  locale: 'locale',
  channel: 'channel',
  subject: 'subject',
  titleTemplate: 'titleTemplate',
  bodyTemplate: 'bodyTemplate',
  htmlTemplate: 'htmlTemplate',
  variablesDescription: 'variablesDescription',
  isActive: 'isActive',
  priority: 'priority',
  createdBy: 'createdBy',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.NotificationScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  correlationId: 'correlationId',
  providerMessageId: 'providerMessageId',
  channel: 'channel',
  category: 'category',
  title: 'title',
  body: 'body',
  htmlBody: 'htmlBody',
  imageUrl: 'imageUrl',
  deepLink: 'deepLink',
  payload: 'payload',
  status: 'status',
  attempts: 'attempts',
  lastAttemptAt: 'lastAttemptAt',
  lastError: 'lastError',
  sentAt: 'sentAt',
  deliveredAt: 'deliveredAt',
  readAt: 'readAt',
  suppressedReason: 'suppressedReason',
  language: 'language',
  timezone: 'timezone',
  priority: 'priority',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.DeviceTokenScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  token: 'token',
  platform: 'platform',
  deviceId: 'deviceId',
  deviceModel: 'deviceModel',
  osVersion: 'osVersion',
  appVersion: 'appVersion',
  locale: 'locale',
  enabledNotifications: 'enabledNotifications',
  isSandbox: 'isSandbox',
  lastUsedAt: 'lastUsedAt',
  subscribedAt: 'subscribedAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.NotificationPreferenceScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  scope: 'scope',
  category: 'category',
  channel: 'channel',
  eventKey: 'eventKey',
  enabled: 'enabled',
  updatedAt: 'updatedAt',
  createdAt: 'createdAt'
};

exports.Prisma.EmailQueueScalarFieldEnum = {
  id: 'id',
  toEmail: 'toEmail',
  fromName: 'fromName',
  replyTo: 'replyTo',
  subject: 'subject',
  textBody: 'textBody',
  htmlBody: 'htmlBody',
  templateVars: 'templateVars',
  attachmentUrls: 'attachmentUrls',
  status: 'status',
  attempts: 'attempts',
  lastError: 'lastError',
  scheduledAt: 'scheduledAt',
  sentAt: 'sentAt',
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
exports.NotificationCategory = exports.$Enums.NotificationCategory = {
  GENERAL: 'GENERAL',
  BET_PLACED: 'BET_PLACED',
  BET_WON: 'BET_WON',
  BET_LOST: 'BET_LOST',
  BET_SETTLED: 'BET_SETTLED',
  CASHOUT_COMPLETED: 'CASHOUT_COMPLETED',
  DEPOSIT_PENDING: 'DEPOSIT_PENDING',
  DEPOSIT_COMPLETED: 'DEPOSIT_COMPLETED',
  DEPOSIT_FAILED: 'DEPOSIT_FAILED',
  WITHDRAWAL_REQUESTED: 'WITHDRAWAL_REQUESTED',
  WITHDRAWAL_COMPLETED: 'WITHDRAWAL_COMPLETED',
  WITHDRAWAL_REJECTED: 'WITHDRAWAL_REJECTED',
  KYC_STATUS_CHANGED: 'KYC_STATUS_CHANGED',
  KYC_REVIEW_REQUESTED: 'KYC_REVIEW_REQUESTED',
  BONUS_GRANTED: 'BONUS_GRANTED',
  BONUS_EXPIRING: 'BONUS_EXPIRING',
  BONUS_ROLLOVER_COMPLETE: 'BONUS_ROLLOVER_COMPLETE',
  PROMOTIONAL: 'PROMOTIONAL',
  CASINO_BIG_WIN: 'CASINO_BIG_WIN',
  LIVE_EVENT_STARTED: 'LIVE_EVENT_STARTED',
  FAVORITE_TEAM_SCORED: 'FAVORITE_TEAM_SCORED',
  SECURITY_LOGIN: 'SECURITY_LOGIN',
  SECURITY_PASSWORD_CHANGED: 'SECURITY_PASSWORD_CHANGED',
  SECURITY_2FA_CHANGED: 'SECURITY_2FA_CHANGED',
  SUPPORT_REPLY: 'SUPPORT_REPLY',
  RESPONSIBLE_GAMING_ALERT: 'RESPONSIBLE_GAMING_ALERT',
  SYSTEM_MAINTENANCE: 'SYSTEM_MAINTENANCE'
};

exports.NotificationChannel = exports.$Enums.NotificationChannel = {
  IN_APP: 'IN_APP',
  EMAIL: 'EMAIL',
  SMS: 'SMS',
  PUSH_WEB: 'PUSH_WEB',
  PUSH_FCM: 'PUSH_FCM',
  PUSH_APNS: 'PUSH_APNS',
  WHATSAPP: 'WHATSAPP',
  TELEGRAM: 'TELEGRAM'
};

exports.NotificationStatus = exports.$Enums.NotificationStatus = {
  PENDING: 'PENDING',
  QUEUED: 'QUEUED',
  SENDING: 'SENDING',
  SENT: 'SENT',
  DELIVERED: 'DELIVERED',
  READ: 'READ',
  FAILED: 'FAILED',
  EXPIRED: 'EXPIRED',
  CANCELLED: 'CANCELLED',
  SUPPRESSED: 'SUPPRESSED',
  OPTED_OUT: 'OPTED_OUT'
};

exports.NotificationPreferenceScope = exports.$Enums.NotificationPreferenceScope = {
  GLOBAL: 'GLOBAL',
  CATEGORY: 'CATEGORY',
  CHANNEL: 'CHANNEL',
  EVENT: 'EVENT'
};

exports.Prisma.ModelName = {
  NotificationTemplate: 'NotificationTemplate',
  Notification: 'Notification',
  DeviceToken: 'DeviceToken',
  NotificationPreference: 'NotificationPreference',
  EmailQueue: 'EmailQueue'
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
