import type { KYCLevel, KYCStatus, KYCRejectionReason } from "../enums";
import type { Identifiable, Timestamped } from "./common.interface";

export interface UserKYC extends Identifiable, Timestamped {
  userId: string;
  level: KYCLevel;
  status: KYCStatus;
  externalApplicantId?: string | null;
  externalInspectionId?: string | null;
  firstSubmittedAt?: Date | null;
  lastSubmittedAt?: Date | null;
  reviewedAt?: Date | null;
  reviewerNote?: string | null;
  rejectionReason?: KYCRejectionReason | null;
  rejectionDetails?: string | null;
  providerRawResponse?: unknown | null;
  isActive: boolean;
  expiresAt?: Date | null;
  riskScore?: number | null;
}

export interface KYCWebhookLog extends Identifiable, Timestamped {
  provider: string;
  eventType: string;
  externalApplicantId?: string | null;
  correlationId?: string | null;
  headersJson?: unknown | null;
  payloadJson: unknown;
  signatureValid: boolean;
  processed: boolean;
  processedAt?: Date | null;
  processingError?: string | null;
  userId?: string | null;
}

export interface KYCRequirementChecklist {
  emailVerified: boolean;
  phoneVerified: boolean;
  identityDocumentVerified: boolean;
  selfieVerified: boolean;
  proofOfAddressVerified: boolean;
  sourceOfFundsVerified: boolean;
  pepSanctionsCheck: boolean;
}

export interface KYCLimitPolicy {
  level: KYCLevel;
  depositDailyLimit: number;
  depositWeeklyLimit: number;
  depositMonthlyLimit: number;
  withdrawalDailyLimit: number;
  withdrawalMonthlyLimit: number;
  stakePerBetMax: number;
  cumulativeBalanceMax: number;
  withdrawalAllowed: boolean;
  liveBettingAllowed: boolean;
  casinoAllowed: boolean;
}
