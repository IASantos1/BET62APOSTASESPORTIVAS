
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

exports.Prisma.AdminUserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  passwordHash: 'passwordHash',
  name: 'name',
  role: 'role',
  twoFactorType: 'twoFactorType',
  twoFactorSecret: 'twoFactorSecret',
  twoFactorRecoveryCodes: 'twoFactorRecoveryCodes',
  lastLoginAt: 'lastLoginAt',
  lastLoginIp: 'lastLoginIp',
  mustChangePassword: 'mustChangePassword',
  disabled: 'disabled',
  disabledReason: 'disabledReason',
  disabledBy: 'disabledBy',
  disabledAt: 'disabledAt',
  passwordChangedAt: 'passwordChangedAt',
  createdBy: 'createdBy',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.AdminSessionScalarFieldEnum = {
  id: 'id',
  adminUserId: 'adminUserId',
  tokenHash: 'tokenHash',
  ipAddress: 'ipAddress',
  userAgent: 'userAgent',
  location: 'location',
  deviceFingerprint: 'deviceFingerprint',
  createdAt: 'createdAt',
  expiresAt: 'expiresAt',
  revokedAt: 'revokedAt',
  revokedReason: 'revokedReason',
  lastActivityAt: 'lastActivityAt'
};

exports.Prisma.AdminAuditLogScalarFieldEnum = {
  id: 'id',
  adminUserId: 'adminUserId',
  userAffectedId: 'userAffectedId',
  action: 'action',
  entityType: 'entityType',
  entityId: 'entityId',
  severity: 'severity',
  details: 'details',
  ipAddress: 'ipAddress',
  userAgent: 'userAgent',
  requestId: 'requestId',
  correlationId: 'correlationId',
  metadata: 'metadata',
  createdAt: 'createdAt'
};

exports.Prisma.RolePermissionScalarFieldEnum = {
  id: 'id',
  role: 'role',
  permissionKey: 'permissionKey',
  allowed: 'allowed',
  scope: 'scope',
  conditions: 'conditions',
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
exports.AdminRole = exports.$Enums.AdminRole = {
  SUPER_ADMIN: 'SUPER_ADMIN',
  FINANCE: 'FINANCE',
  FINANCE_MANAGER: 'FINANCE_MANAGER',
  RISK: 'RISK',
  RISK_MANAGER: 'RISK_MANAGER',
  OPERATOR: 'OPERATOR',
  SUPPORT: 'SUPPORT',
  SUPPORT_MANAGER: 'SUPPORT_MANAGER',
  MARKETING: 'MARKETING',
  COMPLIANCE: 'COMPLIANCE',
  KYC_OFFICER: 'KYC_OFFICER',
  AUDITOR: 'AUDITOR',
  ODD_TRADER: 'ODD_TRADER',
  VIEW_ONLY: 'VIEW_ONLY'
};

exports.TwoFactorType = exports.$Enums.TwoFactorType = {
  NONE: 'NONE',
  TOTP: 'TOTP',
  SMS: 'SMS',
  EMAIL: 'EMAIL'
};

exports.AuditAction = exports.$Enums.AuditAction = {
  CREATED: 'CREATED',
  UPDATED: 'UPDATED',
  DELETED: 'DELETED',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  SUSPENDED: 'SUSPENDED',
  BANNED: 'BANNED',
  UNBANNED: 'UNBANNED',
  LOCKED: 'LOCKED',
  UNLOCKED: 'UNLOCKED',
  RESET: 'RESET',
  EXPORTED: 'EXPORTED',
  VIEWED: 'VIEWED',
  SIGNED_IN: 'SIGNED_IN',
  SIGNED_OUT: 'SIGNED_OUT',
  IMPERSONATED: 'IMPERSONATED',
  FORCE_PASSWORD: 'FORCE_PASSWORD',
  LIQUIDATED: 'LIQUIDATED',
  OVERRIDDEN: 'OVERRIDDEN',
  MANUAL_ADJUSTMENT: 'MANUAL_ADJUSTMENT',
  MANUAL_BONUS_GRANT: 'MANUAL_BONUS_GRANT'
};

exports.AuditEntityType = exports.$Enums.AuditEntityType = {
  ADMIN_USER: 'ADMIN_USER',
  USER: 'USER',
  BET: 'BET',
  EVENT: 'EVENT',
  MARKET: 'MARKET',
  SELECTION: 'SELECTION',
  WITHDRAWAL: 'WITHDRAWAL',
  DEPOSIT: 'DEPOSIT',
  KYC_SUBMISSION: 'KYC_SUBMISSION',
  BONUS: 'BONUS',
  CAMPAIGN: 'CAMPAIGN',
  USER_LIMITS: 'USER_LIMITS',
  WALLET_ADJUSTMENT: 'WALLET_ADJUSTMENT',
  CASINO_GAME: 'CASINO_GAME',
  ROLE_PERMISSION: 'ROLE_PERMISSION',
  CONFIG_SETTING: 'CONFIG_SETTING',
  SELF_EXCLUSION: 'SELF_EXCLUSION'
};

exports.AuditLogSeverity = exports.$Enums.AuditLogSeverity = {
  INFO: 'INFO',
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

exports.Prisma.ModelName = {
  AdminUser: 'AdminUser',
  AdminSession: 'AdminSession',
  AdminAuditLog: 'AdminAuditLog',
  RolePermission: 'RolePermission'
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
      "value": "C:\\Users\\israe\\Desktop\\BET62APOSTAS\\services\\admin-service\\src\\prisma\\generated\\client",
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
    "sourceFilePath": "C:\\Users\\israe\\Desktop\\BET62APOSTAS\\services\\admin-service\\prisma\\schema.prisma",
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
  "inlineSchema": "generator client {\n  provider        = \"prisma-client-js\"\n  output          = \"../src/prisma/generated/client\"\n  previewFeatures = [\"multiSchema\"]\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n  schemas  = [\"admins\"]\n}\n\nenum AdminRole {\n  SUPER_ADMIN\n  FINANCE\n  FINANCE_MANAGER\n  RISK\n  RISK_MANAGER\n  OPERATOR\n  SUPPORT\n  SUPPORT_MANAGER\n  MARKETING\n  COMPLIANCE\n  KYC_OFFICER\n  AUDITOR\n  ODD_TRADER\n  VIEW_ONLY\n\n  @@schema(\"admins\")\n}\n\nenum TwoFactorType {\n  NONE\n  TOTP\n  SMS\n  EMAIL\n\n  @@schema(\"admins\")\n}\n\nenum AuditAction {\n  CREATED\n  UPDATED\n  DELETED\n  APPROVED\n  REJECTED\n  SUSPENDED\n  BANNED\n  UNBANNED\n  LOCKED\n  UNLOCKED\n  RESET\n  EXPORTED\n  VIEWED\n  SIGNED_IN\n  SIGNED_OUT\n  IMPERSONATED\n  FORCE_PASSWORD\n  LIQUIDATED\n  OVERRIDDEN\n  MANUAL_ADJUSTMENT\n  MANUAL_BONUS_GRANT\n\n  @@schema(\"admins\")\n}\n\nenum AuditEntityType {\n  ADMIN_USER\n  USER\n  BET\n  EVENT\n  MARKET\n  SELECTION\n  WITHDRAWAL\n  DEPOSIT\n  KYC_SUBMISSION\n  BONUS\n  CAMPAIGN\n  USER_LIMITS\n  WALLET_ADJUSTMENT\n  CASINO_GAME\n  ROLE_PERMISSION\n  CONFIG_SETTING\n  SELF_EXCLUSION\n\n  @@schema(\"admins\")\n}\n\nenum AuditLogSeverity {\n  INFO\n  LOW\n  MEDIUM\n  HIGH\n  CRITICAL\n\n  @@schema(\"admins\")\n}\n\nmodel AdminUser {\n  id                     String        @id @default(uuid())\n  email                  String        @unique\n  passwordHash           String\n  name                   String\n  role                   AdminRole\n  twoFactorType          TwoFactorType @default(NONE)\n  twoFactorSecret        String?\n  twoFactorRecoveryCodes String[]\n  lastLoginAt            DateTime?\n  lastLoginIp            String?\n  mustChangePassword     Boolean       @default(true)\n  disabled               Boolean       @default(false)\n  disabledReason         String?\n  disabledBy             String?\n  disabledAt             DateTime?\n  passwordChangedAt      DateTime?\n  createdBy              String?\n  createdAt              DateTime      @default(now())\n  updatedAt              DateTime      @updatedAt\n  deletedAt              DateTime?\n\n  sessions  AdminSession[]\n  auditLogs AdminAuditLog[]\n\n  @@index([role, disabled])\n  @@index([email])\n  @@schema(\"admins\")\n}\n\nmodel AdminSession {\n  id                String    @id @default(uuid())\n  adminUserId       String\n  tokenHash         String    @unique\n  ipAddress         String?\n  userAgent         String?\n  location          Json?\n  deviceFingerprint String?\n  createdAt         DateTime  @default(now())\n  expiresAt         DateTime\n  revokedAt         DateTime?\n  revokedReason     String?\n  lastActivityAt    DateTime  @default(now())\n\n  adminUser AdminUser @relation(fields: [adminUserId], references: [id], onDelete: Cascade)\n\n  @@index([adminUserId, createdAt])\n  @@index([expiresAt])\n  @@index([revokedAt])\n  @@schema(\"admins\")\n}\n\nmodel AdminAuditLog {\n  id             String           @id @default(uuid())\n  adminUserId    String?\n  userAffectedId String?\n  action         AuditAction\n  entityType     AuditEntityType\n  entityId       String?\n  severity       AuditLogSeverity @default(INFO)\n  details        Json?\n  ipAddress      String?\n  userAgent      String?\n  requestId      String           @unique\n  correlationId  String?\n  metadata       Json?\n  createdAt      DateTime         @default(now())\n\n  adminUser AdminUser? @relation(fields: [adminUserId], references: [id], onDelete: SetNull)\n\n  @@index([adminUserId, createdAt])\n  @@index([entityType, entityId])\n  @@index([action, severity, createdAt])\n  @@index([userAffectedId])\n  @@schema(\"admins\")\n}\n\nmodel RolePermission {\n  id            String    @id @default(uuid())\n  role          AdminRole\n  permissionKey String\n  allowed       Boolean   @default(true)\n  scope         String?\n  conditions    Json?\n  createdAt     DateTime  @default(now())\n  updatedAt     DateTime  @updatedAt\n\n  @@unique([role, permissionKey])\n  @@index([role])\n  @@schema(\"admins\")\n}\n",
  "inlineSchemaHash": "fc4132b1dc8fc63dd84872108c2cb424945a8af8bd21250a5b2765f7db3c4889",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"AdminUser\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passwordHash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AdminRole\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"twoFactorType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"TwoFactorType\",\"default\":\"NONE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"twoFactorSecret\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"twoFactorRecoveryCodes\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastLoginAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastLoginIp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mustChangePassword\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disabledReason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disabledBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disabledAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passwordChangedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sessions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AdminSession\",\"relationName\":\"AdminSessionToAdminUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"auditLogs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AdminAuditLog\",\"relationName\":\"AdminAuditLogToAdminUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"AdminSession\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"adminUserId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tokenHash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ipAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userAgent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"location\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deviceFingerprint\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expiresAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"revokedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"revokedReason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastActivityAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"adminUser\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AdminUser\",\"relationName\":\"AdminSessionToAdminUser\",\"relationFromFields\":[\"adminUserId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"AdminAuditLog\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"adminUserId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userAffectedId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"action\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AuditAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entityType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AuditEntityType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entityId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"severity\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"AuditLogSeverity\",\"default\":\"INFO\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"details\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ipAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userAgent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"requestId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"correlationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metadata\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"adminUser\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AdminUser\",\"relationName\":\"AdminAuditLogToAdminUser\",\"relationFromFields\":[\"adminUserId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"SetNull\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"RolePermission\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AdminRole\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"permissionKey\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"allowed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"scope\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"conditions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[[\"role\",\"permissionKey\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"role\",\"permissionKey\"]}],\"isGenerated\":false}},\"enums\":{\"AdminRole\":{\"values\":[{\"name\":\"SUPER_ADMIN\",\"dbName\":null},{\"name\":\"FINANCE\",\"dbName\":null},{\"name\":\"FINANCE_MANAGER\",\"dbName\":null},{\"name\":\"RISK\",\"dbName\":null},{\"name\":\"RISK_MANAGER\",\"dbName\":null},{\"name\":\"OPERATOR\",\"dbName\":null},{\"name\":\"SUPPORT\",\"dbName\":null},{\"name\":\"SUPPORT_MANAGER\",\"dbName\":null},{\"name\":\"MARKETING\",\"dbName\":null},{\"name\":\"COMPLIANCE\",\"dbName\":null},{\"name\":\"KYC_OFFICER\",\"dbName\":null},{\"name\":\"AUDITOR\",\"dbName\":null},{\"name\":\"ODD_TRADER\",\"dbName\":null},{\"name\":\"VIEW_ONLY\",\"dbName\":null}],\"dbName\":null},\"TwoFactorType\":{\"values\":[{\"name\":\"NONE\",\"dbName\":null},{\"name\":\"TOTP\",\"dbName\":null},{\"name\":\"SMS\",\"dbName\":null},{\"name\":\"EMAIL\",\"dbName\":null}],\"dbName\":null},\"AuditAction\":{\"values\":[{\"name\":\"CREATED\",\"dbName\":null},{\"name\":\"UPDATED\",\"dbName\":null},{\"name\":\"DELETED\",\"dbName\":null},{\"name\":\"APPROVED\",\"dbName\":null},{\"name\":\"REJECTED\",\"dbName\":null},{\"name\":\"SUSPENDED\",\"dbName\":null},{\"name\":\"BANNED\",\"dbName\":null},{\"name\":\"UNBANNED\",\"dbName\":null},{\"name\":\"LOCKED\",\"dbName\":null},{\"name\":\"UNLOCKED\",\"dbName\":null},{\"name\":\"RESET\",\"dbName\":null},{\"name\":\"EXPORTED\",\"dbName\":null},{\"name\":\"VIEWED\",\"dbName\":null},{\"name\":\"SIGNED_IN\",\"dbName\":null},{\"name\":\"SIGNED_OUT\",\"dbName\":null},{\"name\":\"IMPERSONATED\",\"dbName\":null},{\"name\":\"FORCE_PASSWORD\",\"dbName\":null},{\"name\":\"LIQUIDATED\",\"dbName\":null},{\"name\":\"OVERRIDDEN\",\"dbName\":null},{\"name\":\"MANUAL_ADJUSTMENT\",\"dbName\":null},{\"name\":\"MANUAL_BONUS_GRANT\",\"dbName\":null}],\"dbName\":null},\"AuditEntityType\":{\"values\":[{\"name\":\"ADMIN_USER\",\"dbName\":null},{\"name\":\"USER\",\"dbName\":null},{\"name\":\"BET\",\"dbName\":null},{\"name\":\"EVENT\",\"dbName\":null},{\"name\":\"MARKET\",\"dbName\":null},{\"name\":\"SELECTION\",\"dbName\":null},{\"name\":\"WITHDRAWAL\",\"dbName\":null},{\"name\":\"DEPOSIT\",\"dbName\":null},{\"name\":\"KYC_SUBMISSION\",\"dbName\":null},{\"name\":\"BONUS\",\"dbName\":null},{\"name\":\"CAMPAIGN\",\"dbName\":null},{\"name\":\"USER_LIMITS\",\"dbName\":null},{\"name\":\"WALLET_ADJUSTMENT\",\"dbName\":null},{\"name\":\"CASINO_GAME\",\"dbName\":null},{\"name\":\"ROLE_PERMISSION\",\"dbName\":null},{\"name\":\"CONFIG_SETTING\",\"dbName\":null},{\"name\":\"SELF_EXCLUSION\",\"dbName\":null}],\"dbName\":null},\"AuditLogSeverity\":{\"values\":[{\"name\":\"INFO\",\"dbName\":null},{\"name\":\"LOW\",\"dbName\":null},{\"name\":\"MEDIUM\",\"dbName\":null},{\"name\":\"HIGH\",\"dbName\":null},{\"name\":\"CRITICAL\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
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

