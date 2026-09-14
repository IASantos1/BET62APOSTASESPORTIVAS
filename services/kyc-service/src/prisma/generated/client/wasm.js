
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

exports.Prisma.UserKYCScalarFieldEnum = {
  userId: 'userId',
  level: 'level',
  status: 'status',
  externalApplicantId: 'externalApplicantId',
  externalInspectionId: 'externalInspectionId',
  firstSubmittedAt: 'firstSubmittedAt',
  lastSubmittedAt: 'lastSubmittedAt',
  reviewedAt: 'reviewedAt',
  reviewerNote: 'reviewerNote',
  rejectionReason: 'rejectionReason',
  rejectionDetails: 'rejectionDetails',
  providerRawResponse: 'providerRawResponse',
  isActive: 'isActive',
  expiresAt: 'expiresAt',
  riskScore: 'riskScore',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.KYCAmlScreeningScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  requestId: 'requestId',
  status: 'status',
  totalHits: 'totalHits',
  score: 'score',
  hitsJson: 'hitsJson',
  screenedAt: 'screenedAt'
};

exports.Prisma.KYCWebhookLogScalarFieldEnum = {
  id: 'id',
  provider: 'provider',
  eventType: 'eventType',
  externalApplicantId: 'externalApplicantId',
  correlationId: 'correlationId',
  headersJson: 'headersJson',
  payloadJson: 'payloadJson',
  signatureValid: 'signatureValid',
  processed: 'processed',
  processedAt: 'processedAt',
  processingError: 'processingError',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.KYCDocumentScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  kycLevel: 'kycLevel',
  documentType: 'documentType',
  fileName: 'fileName',
  fileHash: 'fileHash',
  fileSizeKb: 'fileSizeKb',
  documentStatus: 'documentStatus',
  submittedAt: 'submittedAt',
  verifiedAt: 'verifiedAt',
  rejectedReason: 'rejectedReason',
  countryOfIssue: 'countryOfIssue',
  numberMasked: 'numberMasked',
  expiresAt: 'expiresAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.KYCLevelPolicyScalarFieldEnum = {
  level: 'level',
  label: 'label',
  description: 'description',
  depositDaily: 'depositDaily',
  depositWeekly: 'depositWeekly',
  depositMonthly: 'depositMonthly',
  withdrawalDaily: 'withdrawalDaily',
  withdrawalMonthly: 'withdrawalMonthly',
  stakePerBetMax: 'stakePerBetMax',
  cumulativeBalanceMax: 'cumulativeBalanceMax',
  withdrawalAllowed: 'withdrawalAllowed',
  liveBetAllowed: 'liveBetAllowed',
  casinoAllowed: 'casinoAllowed',
  requiredChecks: 'requiredChecks',
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
exports.KYCStatus = exports.$Enums.KYCStatus = {
  NOT_STARTED: 'NOT_STARTED',
  INITIATED: 'INITIATED',
  PENDING: 'PENDING',
  VERIFIED: 'VERIFIED',
  REJECTED: 'REJECTED',
  EXPIRED: 'EXPIRED',
  RETRY: 'RETRY'
};

exports.KYCRejectionReason = exports.$Enums.KYCRejectionReason = {
  INVALID_DOCUMENT: 'INVALID_DOCUMENT',
  EXPIRED_DOCUMENT: 'EXPIRED_DOCUMENT',
  POOR_IMAGE_QUALITY: 'POOR_IMAGE_QUALITY',
  SELFIE_MISMATCH: 'SELFIE_MISMATCH',
  MISMATCH_NAME: 'MISMATCH_NAME',
  MISMATCH_ADDRESS: 'MISMATCH_ADDRESS',
  AGE_RESTRICTION: 'AGE_RESTRICTION',
  JURISDICTION_RESTRICTION: 'JURISDICTION_RESTRICTION',
  OTHER: 'OTHER'
};

exports.KYCDocumentType = exports.$Enums.KYCDocumentType = {
  ID_CARD_FRONT: 'ID_CARD_FRONT',
  ID_CARD_BACK: 'ID_CARD_BACK',
  PASSPORT: 'PASSPORT',
  DRIVER_LICENSE_FRONT: 'DRIVER_LICENSE_FRONT',
  DRIVER_LICENSE_BACK: 'DRIVER_LICENSE_BACK',
  SELFIE: 'SELFIE',
  PROOF_OF_ADDRESS: 'PROOF_OF_ADDRESS',
  BANK_STATEMENT: 'BANK_STATEMENT',
  UTILITY_BILL: 'UTILITY_BILL'
};

exports.KYCDocumentStatus = exports.$Enums.KYCDocumentStatus = {
  PENDING: 'PENDING',
  VERIFIED: 'VERIFIED',
  REJECTED: 'REJECTED'
};

exports.Prisma.ModelName = {
  UserKYC: 'UserKYC',
  KYCAmlScreening: 'KYCAmlScreening',
  KYCWebhookLog: 'KYCWebhookLog',
  KYCDocument: 'KYCDocument',
  KYCLevelPolicy: 'KYCLevelPolicy'
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
