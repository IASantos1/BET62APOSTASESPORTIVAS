import type {
  LedgerAccountType,
  LedgerEntryType,
  PaymentProvider,
  PaymentStatus,
  TransactionType,
} from "../enums";
import type { Identifiable, Timestamped, Money } from "./common.interface";

export interface Wallet extends Identifiable, Timestamped {
  userId: string;
  currency: string;
  realBalance: number;
  bonusBalance: number;
  pendingDeposits: number;
  pendingWithdrawals: number;
  reservedBets: number;
  reservedCashouts: number;
  totalDeposited: number;
  totalWithdrawn: number;
  totalWagered: number;
  totalWon: number;
  totalLost: number;
  totalBonusGranted: number;
  totalBonusWagered: number;
  totalBonusReleased: number;
  isFrozen: boolean;
  frozenReason?: string | null;
  frozenAt?: Date | null;
  frozenBy?: string | null;
  kycLevelApplied: number;
}

export interface WalletLedgerEntry extends Identifiable, Timestamped {
  userId: string;
  walletId: string;
  entryType: LedgerEntryType;
  accountType: LedgerAccountType;
  amount: number;
  currency: string;
  runningBalanceAfter: number;
  transactionType: TransactionType;
  referenceId: string;
  referenceType: string;
  externalReferenceId?: string | null;
  note?: string | null;
  metadata?: unknown | null;
  operatedBy?: string | null;
  correlationId?: string | null;
}

export interface Transaction extends Identifiable, Timestamped {
  userId: string;
  walletId: string;
  type: TransactionType;
  amount: Money;
  fee?: Money | null;
  netAmount?: Money | null;
  status: PaymentStatus;
  provider?: PaymentProvider | null;
  externalId?: string | null;
  referenceId?: string | null;
  referenceType?: string | null;
  initiatedBy?: string | null;
  processedAt?: Date | null;
  failureReason?: string | null;
  note?: string | null;
  metadata?: unknown | null;
  riskScore?: number | null;
  kycLevelAtTime: number;
}

export interface Deposit extends Identifiable, Timestamped {
  userId: string;
  walletId: string;
  transactionId: string;
  amount: Money;
  fee?: Money | null;
  netAmount?: Money | null;
  provider: PaymentProvider;
  providerTransactionId?: string | null;
  status: PaymentStatus;
  paymentMethodType?: string | null;
  paymentMethodLast4?: string | null;
  paymentMethodBrand?: string | null;
  paymentMethodExpiry?: string | null;
  returnUrl?: string | null;
  callbackUrl?: string | null;
  providerRawRequest?: unknown | null;
  providerRawResponse?: unknown | null;
  confirmedAt?: Date | null;
  failedAt?: Date | null;
  failureReason?: string | null;
  ipAddress?: string | null;
  riskCheckBypassed?: boolean;
  appliedBonusId?: string | null;
  correlationId?: string | null;
}

export interface Withdrawal extends Identifiable, Timestamped {
  userId: string;
  walletId: string;
  transactionId: string;
  amount: Money;
  fee?: Money | null;
  netAmount?: Money | null;
  provider: PaymentProvider;
  providerPayoutId?: string | null;
  status: PaymentStatus;
  beneficiaryAccountJson: unknown;
  requestedAt: Date;
  approvedAt?: Date | null;
  approvedBy?: string | null;
  rejectedAt?: Date | null;
  rejectedBy?: string | null;
  rejectionReason?: string | null;
  processedAt?: Date | null;
  failedAt?: Date | null;
  failureReason?: string | null;
  providerRawRequest?: unknown | null;
  providerRawResponse?: unknown | null;
  kycLevelAtRequest: number;
  pendingDocumentIds?: string[] | null;
  riskScore?: number | null;
  correlationId?: string | null;
}

export interface PendingWalletOperation extends Identifiable, Timestamped {
  walletId: string;
  userId: string;
  operationType: "DEBIT" | "CREDIT" | "LOCK" | "UNLOCK";
  amount: Money;
  reservationType: "BET_PLACEMENT" | "CASHOUT" | "WITHDRAWAL_HOLD" | "BONUS_HOLD";
  lockedAt?: Date | null;
  lockExpiresAt?: Date | null;
  releasedAt?: Date | null;
  appliedAt?: Date | null;
  referenceId?: string | null;
  referenceType?: string | null;
  correlationId?: string | null;
}
