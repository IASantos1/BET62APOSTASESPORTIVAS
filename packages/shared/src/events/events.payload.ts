import type {
  AuthRole,
  BetStatus,
  KYCLevel,
  KYCStatus,
  PaymentProvider,
  PaymentStatus,
  TransactionType,
  UserStatus,
} from "../enums";
import type { Money } from "../interfaces";

export interface Bet62EventEnvelope<TPayload = unknown> {
  id: string;
  event: string;
  aggregateType: string;
  aggregateId?: string;
  correlationId?: string;
  causationId?: string;
  timestamp: string;
  version: number;
  producer: string;
  payload: TPayload;
  metadata?: Record<string, unknown>;
}

export const createEnvelope = <TPayload>(input: {
  event: string;
  aggregateType: string;
  aggregateId?: string;
  payload: TPayload;
  correlationId?: string;
  causationId?: string;
  producer: string;
  metadata?: Record<string, unknown>;
}): Bet62EventEnvelope<TPayload> => ({
  id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
  event: input.event,
  aggregateType: input.aggregateType,
  aggregateId: input.aggregateId,
  correlationId: input.correlationId,
  causationId: input.causationId,
  timestamp: new Date().toISOString(),
  version: 1,
  producer: input.producer,
  payload: input.payload,
  metadata: input.metadata,
});

export interface UserCreatedPayload {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  country: string;
  preferredLanguage: string;
  currency: string;
  registeredAt: string;
  referralCode?: string;
  affiliateCode?: string;
  kycLevel: KYCLevel;
  initialStatus: UserStatus;
}

export interface UserLoggedInPayload {
  userId: string;
  email: string;
  sessionId: string;
  ip?: string;
  userAgent?: string;
  timestamp: string;
  isNewDevice: boolean;
  twoFactorUsed: boolean;
}

export interface KycAmlHitDetectedPayload {
  userId: string;
  requestId?: string;
  totalHits: number;
  score?: number;
  timestamp: string;
}

export interface KycLevelUpdatedPayload {
  userId: string;
  oldLevel: KYCLevel;
  newLevel: KYCLevel;
  status: KYCStatus;
  applicantId?: string;
  timestamp: string;
  limitsApplied: {
    depositDaily: number;
    depositWeekly: number;
    depositMonthly: number;
    withdrawalDaily: number;
    withdrawalMonthly: number;
    stakeMax: number;
  };
}

export interface WalletDepositCompletedPayload {
  userId: string;
  walletId: string;
  depositId: string;
  transactionId: string;
  provider: PaymentProvider;
  providerId?: string;
  amount: Money;
  fee?: Money;
  netAmount: Money;
  balanceAfter: {
    real: number;
    bonus: number;
    pendingDeposits: number;
  };
  appliedBonusId?: string;
  timestamp: string;
}

export interface WalletWithdrawalRequestedPayload {
  userId: string;
  walletId: string;
  withdrawalId: string;
  transactionId: string;
  provider: PaymentProvider;
  amount: Money;
  fee?: Money;
  netAmount: Money;
  balanceBefore: { real: number; bonus: number };
  kycLevelAtRequest: number;
  requestedAt: string;
  requiresManualApproval: boolean;
}

export interface WalletBalanceUpdatedPayload {
  userId: string;
  walletId: string;
  transactionType: TransactionType;
  referenceId?: string;
  delta: { real: number; bonus: number };
  balanceAfter: {
    real: number;
    bonus: number;
    pendingDeposits: number;
    pendingWithdrawals: number;
    reservedBets: number;
  };
  currency: string;
  timestamp: string;
}

export interface BetPlacedPayload {
  betId: string;
  betNumber?: string;
  userId: string;
  walletId: string;
  betType: string;
  selectionsCount: number;
  stakeAmount: number;
  stakeRealUsed: number;
  stakeBonusUsed: number;
  totalOdds: number;
  potentialReturn: number;
  acceptanceType: string;
  placedAt: string;
  selections: Array<{
    selectionId: string;
    eventId: string;
    marketId: string;
    marketType: string;
    outcome: string;
    odds: number;
    kickoffAt: string;
    eventName: string;
  }>;
  bonusUsedId?: string;
  ipAddress?: string;
  riskFlagged: boolean;
}

export interface BetSettledPayload {
  betId: string;
  userId: string;
  walletId: string;
  transactionId?: string;
  statusBefore: BetStatus;
  statusAfter: BetStatus;
  settlementSource: string;
  stakeAmount: number;
  actualReturn: number;
  actualWinNet: number;
  settledBy?: string;
  settledAt: string;
  results: Array<{
    selectionId: string;
    outcomeBefore: string;
    outcomeAfter: string;
    oddsAtSettlement?: number;
  }>;
  note?: string;
}

export interface OddsLiveUpdatedPayload {
  eventId: string;
  providerEventId?: string;
  status: string;
  currentPeriodMinute?: number;
  currentPeriodName?: string;
  scoreCurrent: { home: number; away: number };
  updatedAt: string;
  changes?: Array<{ field: string; old: unknown; new: unknown }>;
}

export interface OddsOddChangedPayload {
  selectionId: string;
  marketId: string;
  eventId: string;
  oldOdds: number;
  newOdds: number;
  trend: "UP" | "DOWN" | "STABLE";
  changePercent: number;
  source: "SYNC" | "LIVEWS" | "MANUAL" | "WEBHOOK";
  updatedAt: string;
}

export interface BonusGrantedPayload {
  userBonusId: string;
  userId: string;
  campaignId?: string;
  bonusType: string;
  sourceTrigger: string;
  originalAmount: number;
  remainingBalance: number;
  rolloverRequirement: number;
  rolloverProgress: number;
  expiresAt?: string;
  currency: string;
  grantedAt: string;
  relatedDepositId?: string;
}

export interface CasinoBetSettledPayload {
  betId: string;
  userId: string;
  walletId: string;
  transactionId?: string;
  gameId: string;
  gameName: string;
  provider: string;
  stake: number;
  win: number;
  netResult: number;
  status: string;
  jackpotWon: boolean;
  jackpotAmount?: number;
  settledAt: string;
  sessionId?: string;
}

export interface NotificationQueuePayload {
  notificationId: string;
  userId: string;
  channel: "IN_APP" | "EMAIL" | "PUSH" | "SMS";
  category: string;
  priority: "LOW" | "NORMAL" | "HIGH" | "URGENT";
  templateCode?: string;
  title: string;
  body: string;
  templateVars?: Record<string, unknown>;
  deepLinkUrl?: string;
  imageUrl?: string;
  language: string;
  delivery?: {
    email?: { to: string; from?: string };
    push?: { endpoint?: string };
    sms?: { to: string };
  };
  scheduledAt?: string;
  correlationId?: string;
}

export interface AdminAuditPayload {
  auditLogId: string;
  timestamp: string;
  adminUserId?: string;
  adminEmail?: string;
  action: string;
  entityType: string;
  entityId?: string;
  before?: unknown;
  after?: unknown;
  ipAddress?: string;
  severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  correlationId?: string;
}
