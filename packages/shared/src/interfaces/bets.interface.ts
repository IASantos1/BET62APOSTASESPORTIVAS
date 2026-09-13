import {
  BetAcceptanceType,
  BetStatus,
  BetType,
  CashoutType,
  SelectionOutcome,
  SystemBetType,
} from "../enums";
import type { Identifiable, Timestamped } from "./common.interface";

export interface BetSelection {
  id: string;
  betId: string;
  eventId: string;
  marketId: string;
  selectionId: string;
  selectionName: string;
  marketName: string;
  eventName: string;
  homeTeamName?: string | null;
  awayTeamName?: string | null;
  leagueName?: string | null;
  sportType?: string | null;
  kickoffAt: Date;
  marketType: string;
  outcome: SelectionOutcome;
  specifiers?: Record<string, string | number> | null;
  oddsAtPlacement: number;
  oddsDisplayAtPlacement?: string | null;
  handicapValue?: number | null;
  totalLineValue?: number | null;
  status: SelectionOutcome;
  settledAt?: Date | null;
  settledOdds?: number | null;
  resultScoreJson?: unknown | null;
  providerEventId?: string | null;
  providerMarketId?: string | null;
  providerSelectionId?: string | null;
  orderIndex: number;
}

export interface Bet extends Identifiable, Timestamped {
  userId: string;
  walletId: string;
  transactionId?: string | null;
  externalId?: string | null;
  betType: BetType;
  systemType?: SystemBetType | null;
  betNumber?: string | null;
  status: BetStatus;
  selections: BetSelection[];
  selectionsCount: number;
  winningSelectionsCount?: number | null;
  stakeAmount: number;
  stakeRealUsed: number;
  stakeBonusUsed: number;
  stakeFreebetUsed: number;
  totalOdds: number;
  oddsMultiplier: number;
  potentialReturn: number;
  potentialWin: number;
  maxWinCap?: number | null;
  bonusIdUsed?: string | null;
  freebetIdUsed?: string | null;
  acceptanceType: BetAcceptanceType;
  acceptedOddsChangeMaxPercent?: number | null;
  actualOddsChangePercent?: number | null;
  cashoutAvailable: boolean;
  cashoutValueCurrent?: number | null;
  cashoutValueMin?: number | null;
  cashoutValueMax?: number | null;
  cashoutEnabled: boolean;
  autoCashoutValue?: number | null;
  autoCashoutTriggered?: boolean | null;
  autoCashoutAt?: Date | null;
  partialCashoutRemainingStake?: number | null;
  partialCashoutTotalCashedOut?: number | null;
  placedAt: Date;
  placedIp?: string | null;
  placedDevice?: string | null;
  placedLanguage?: string | null;
  settledAt?: Date | null;
  settledBy?: string | null;
  settlementSource?: "AUTO_PROVIDER" | "AUTO_CALC" | "MANUAL_ADMIN" | "MANUAL_RISK" | "VOID_OPERATOR";
  settlementNote?: string | null;
  actualReturn?: number | null;
  actualWinNet?: number | null;
  actualTaxDeducted?: number | null;
  oddsBoostAppliedId?: string | null;
  combiBoostPercent?: number | null;
  accumulatorBonusPercent?: number | null;
  riskFlagged: boolean;
  riskFlags?: string[] | null;
  riskReviewed?: boolean | null;
  riskReviewedAt?: Date | null;
  riskReviewedBy?: string | null;
  cancelledReason?: string | null;
  cancelledAt?: Date | null;
  cancelledBy?: string | null;
  correlationId?: string | null;
  expiresAt?: Date | null;
  metadata?: unknown | null;
}

export interface CashoutRecord extends Identifiable, Timestamped {
  betId: string;
  userId: string;
  walletId: string;
  transactionId?: string | null;
  cashoutType: CashoutType;
  status: "PENDING" | "CONFIRMED" | "FAILED" | "REJECTED";
  stakeBefore: number;
  stakeAfter?: number | null;
  stakeCashedOut?: number | null;
  amountRequested: number;
  amountFee: number;
  amountNetToUser: number;
  oddsAtCashout: number;
  probabilityImpliedAtCashout?: number | null;
  houseEdgePercentApplied: number;
  confirmedAt?: Date | null;
  failedReason?: string | null;
  failedAt?: Date | null;
  rejectedReason?: string | null;
  rejectedAt?: Date | null;
  cashoutValueSnapshotAtRequest?: unknown | null;
  correlationId?: string | null;
  requestIp?: string | null;
}

export interface BetSettlementLog extends Identifiable, Timestamped {
  betId: string;
  statusBefore: BetStatus;
  statusAfter: BetStatus;
  settlementSource: string;
  settledBy?: string | null;
  actualReturnBefore?: number | null;
  actualReturnAfter?: number | null;
  selectionsResultsJson?: unknown | null;
  reason?: string | null;
  note?: string | null;
  correlationId?: string | null;
}

export interface BetSlipSelectionDraft {
  eventId: string;
  marketId: string;
  selectionId: string;
  odds: number;
  selectionName: string;
  marketName: string;
  eventName: string;
  kickoffAt: Date;
  marketType: string;
  outcome: SelectionOutcome;
  specifiers?: Record<string, string | number> | null;
  handicapValue?: number | null;
  totalLineValue?: number | null;
}

export interface BetValidationResult {
  valid: boolean;
  errorCode?: string | null;
  errorMessage?: string | null;
  slippage?: {
    selectionId: string;
    oldOdds: number;
    newOdds: number;
    changePercent: number;
  }[];
  suspensions?: {
    marketId: string;
    reason?: string;
  }[];
  currentOddsTotal?: number;
  warnings?: string[] | null;
}
