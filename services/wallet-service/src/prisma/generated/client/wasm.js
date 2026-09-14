
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

exports.Prisma.WalletScalarFieldEnum = {
  userId: 'userId',
  currency: 'currency',
  realBalance: 'realBalance',
  bonusBalance: 'bonusBalance',
  withdrawableBalance: 'withdrawableBalance',
  pendingDeposits: 'pendingDeposits',
  pendingWithdrawals: 'pendingWithdrawals',
  reservedBets: 'reservedBets',
  reservedCashouts: 'reservedCashouts',
  lastDepositAt: 'lastDepositAt',
  totalDeposited: 'totalDeposited',
  totalWithdrawn: 'totalWithdrawn',
  totalTurnover: 'totalTurnover',
  totalWagered: 'totalWagered',
  totalWon: 'totalWon',
  totalLost: 'totalLost',
  totalBonusGranted: 'totalBonusGranted',
  totalBonusWagered: 'totalBonusWagered',
  totalBonusReleased: 'totalBonusReleased',
  isFrozen: 'isFrozen',
  frozenReason: 'frozenReason',
  frozenAt: 'frozenAt',
  frozenBy: 'frozenBy',
  kycLevelApplied: 'kycLevelApplied',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.WalletLedgerEntryScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  walletId: 'walletId',
  walletCurrency: 'walletCurrency',
  entryType: 'entryType',
  accountType: 'accountType',
  amount: 'amount',
  currency: 'currency',
  runningBalanceAfter: 'runningBalanceAfter',
  transactionType: 'transactionType',
  referenceId: 'referenceId',
  referenceType: 'referenceType',
  externalReferenceId: 'externalReferenceId',
  note: 'note',
  metadata: 'metadata',
  operatedBy: 'operatedBy',
  correlationId: 'correlationId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TransactionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  walletId: 'walletId',
  walletCurrency: 'walletCurrency',
  type: 'type',
  amountAmount: 'amountAmount',
  amountCurrency: 'amountCurrency',
  feeAmount: 'feeAmount',
  feeCurrency: 'feeCurrency',
  netAmountAmount: 'netAmountAmount',
  netAmountCurrency: 'netAmountCurrency',
  status: 'status',
  provider: 'provider',
  externalId: 'externalId',
  referenceId: 'referenceId',
  referenceType: 'referenceType',
  initiatedBy: 'initiatedBy',
  processedAt: 'processedAt',
  failureReason: 'failureReason',
  note: 'note',
  metadata: 'metadata',
  riskScore: 'riskScore',
  kycLevelAtTime: 'kycLevelAtTime',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DepositScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  walletId: 'walletId',
  walletCurrency: 'walletCurrency',
  transactionId: 'transactionId',
  amountAmount: 'amountAmount',
  amountCurrency: 'amountCurrency',
  feeAmount: 'feeAmount',
  feeCurrency: 'feeCurrency',
  netAmountAmount: 'netAmountAmount',
  netAmountCurrency: 'netAmountCurrency',
  provider: 'provider',
  providerTransactionId: 'providerTransactionId',
  status: 'status',
  paymentMethodType: 'paymentMethodType',
  paymentMethodLast4: 'paymentMethodLast4',
  paymentMethodBrand: 'paymentMethodBrand',
  returnUrl: 'returnUrl',
  providerRawRequest: 'providerRawRequest',
  providerRawResponse: 'providerRawResponse',
  confirmedAt: 'confirmedAt',
  failedAt: 'failedAt',
  failureReason: 'failureReason',
  ipAddress: 'ipAddress',
  riskCheckBypassed: 'riskCheckBypassed',
  appliedBonusId: 'appliedBonusId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.WithdrawalScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  walletId: 'walletId',
  walletCurrency: 'walletCurrency',
  transactionId: 'transactionId',
  amountAmount: 'amountAmount',
  amountCurrency: 'amountCurrency',
  provider: 'provider',
  providerPayoutId: 'providerPayoutId',
  status: 'status',
  beneficiaryAccountJson: 'beneficiaryAccountJson',
  requestedAt: 'requestedAt',
  approvedAt: 'approvedAt',
  approvedBy: 'approvedBy',
  rejectedAt: 'rejectedAt',
  rejectedBy: 'rejectedBy',
  rejectionReason: 'rejectionReason',
  processedAt: 'processedAt',
  failedAt: 'failedAt',
  kycLevelAtRequest: 'kycLevelAtRequest',
  pendingDocumentIds: 'pendingDocumentIds',
  riskScore: 'riskScore',
  correlationId: 'correlationId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.PendingWalletOperationScalarFieldEnum = {
  id: 'id',
  walletId: 'walletId',
  walletCurrency: 'walletCurrency',
  userId: 'userId',
  operationType: 'operationType',
  amountAmount: 'amountAmount',
  amountCurrency: 'amountCurrency',
  reservationType: 'reservationType',
  lockedAt: 'lockedAt',
  lockExpiresAt: 'lockExpiresAt',
  releasedAt: 'releasedAt',
  appliedAt: 'appliedAt',
  referenceId: 'referenceId',
  referenceType: 'referenceType',
  correlationId: 'correlationId',
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

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.LedgerEntryType = exports.$Enums.LedgerEntryType = {
  DEBIT: 'DEBIT',
  CREDIT: 'CREDIT'
};

exports.LedgerAccountType = exports.$Enums.LedgerAccountType = {
  USER_REAL_BALANCE: 'USER_REAL_BALANCE',
  USER_BONUS_BALANCE: 'USER_BONUS_BALANCE',
  HOUSE_BALANCE: 'HOUSE_BALANCE',
  HOUSE_RESERVE: 'HOUSE_RESERVE',
  PENDING_DEPOSITS: 'PENDING_DEPOSITS',
  PENDING_WITHDRAWALS: 'PENDING_WITHDRAWALS',
  PENDING_BETS: 'PENDING_BETS',
  BONUS_EXPENSE: 'BONUS_EXPENSE',
  CASINO_WINS_EXPENSE: 'CASINO_WINS_EXPENSE',
  FEES_INCOME: 'FEES_INCOME',
  CASHOUT_PAYMENTS: 'CASHOUT_PAYMENTS'
};

exports.TransactionType = exports.$Enums.TransactionType = {
  DEPOSIT: 'DEPOSIT',
  WITHDRAWAL: 'WITHDRAWAL',
  BET_PLACED: 'BET_PLACED',
  BET_SETTLED_WON: 'BET_SETTLED_WON',
  BET_SETTLED_LOST: 'BET_SETTLED_LOST',
  BET_SETTLED_HALF_WON: 'BET_SETTLED_HALF_WON',
  BET_SETTLED_HALF_LOST: 'BET_SETTLED_HALF_LOST',
  BET_SETTLED_VOID: 'BET_SETTLED_VOID',
  BET_CASHOUT: 'BET_CASHOUT',
  BONUS_GRANTED: 'BONUS_GRANTED',
  BONUS_RELEASED: 'BONUS_RELEASED',
  BONUS_EXPIRED: 'BONUS_EXPIRED',
  FREEBET_GRANTED: 'FREEBET_GRANTED',
  CASHOUT_FEE: 'CASHOUT_FEE',
  WITHDRAWAL_FEE: 'WITHDRAWAL_FEE',
  CASINO_BET: 'CASINO_BET',
  CASINO_WIN: 'CASINO_WIN',
  MANUAL_ADJUSTMENT: 'MANUAL_ADJUSTMENT',
  AFFILIATE_PAYMENT: 'AFFILIATE_PAYMENT'
};

exports.PaymentStatus = exports.$Enums.PaymentStatus = {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED',
  REFUNDED: 'REFUNDED',
  REQUIRES_ACTION: 'REQUIRES_ACTION',
  UNDER_REVIEW: 'UNDER_REVIEW'
};

exports.PaymentProvider = exports.$Enums.PaymentProvider = {
  STRIPE: 'STRIPE',
  SKRILL: 'SKRILL',
  NETELLER: 'NETELLER',
  BANK_TRANSFER: 'BANK_TRANSFER',
  PAYPAL: 'PAYPAL',
  PAYSAFE_CARD: 'PAYSAFE_CARD',
  APPLE_PAY: 'APPLE_PAY',
  GOOGLE_PAY: 'GOOGLE_PAY',
  MB_WAY: 'MB_WAY',
  MULTIBANCO: 'MULTIBANCO'
};

exports.PendingOperationType = exports.$Enums.PendingOperationType = {
  DEBIT: 'DEBIT',
  CREDIT: 'CREDIT',
  LOCK: 'LOCK',
  UNLOCK: 'UNLOCK'
};

exports.ReservationType = exports.$Enums.ReservationType = {
  BET_PLACEMENT: 'BET_PLACEMENT',
  CASHOUT: 'CASHOUT',
  WITHDRAWAL_HOLD: 'WITHDRAWAL_HOLD',
  BONUS_HOLD: 'BONUS_HOLD'
};

exports.Prisma.ModelName = {
  Wallet: 'Wallet',
  WalletLedgerEntry: 'WalletLedgerEntry',
  Transaction: 'Transaction',
  Deposit: 'Deposit',
  Withdrawal: 'Withdrawal',
  PendingWalletOperation: 'PendingWalletOperation'
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
