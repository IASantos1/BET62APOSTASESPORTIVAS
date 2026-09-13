import type {
  BonusStatus,
  BonusTrigger,
  BonusType,
  CampaignStatus,
} from "../enums";
import type { Identifiable, Timestamped } from "./common.interface";

export interface BonusCampaign extends Identifiable, Timestamped {
  code?: string | null;
  name: string;
  description?: string | null;
  translations?: Record<string, { name: string; description: string }> | null;
  bonusType: BonusType;
  trigger: BonusTrigger;
  status: CampaignStatus;
  bannerImageUrl?: string | null;
  featured: boolean;
  displayOrder: number;
  startsAt?: Date | null;
  endsAt?: Date | null;
  minDepositAmount?: number | null;
  minStakeAmount?: number | null;
  minOddsRequired?: number | null;
  maxUsesPerUser?: number | null;
  maxTotalBudget?: number | null;
  totalBudgetUsed?: number | null;
  matchPercent?: number | null;
  matchMaxAmount?: number | null;
  fixedAmount?: number | null;
  freeSpinsCount?: number | null;
  freeSpinsPerDay?: number | null;
  casinoGameIds?: string[] | null;
  rolloverRequirement: number;
  rolloverMinOdds?: number | null;
  rolloverIncludeLive?: boolean;
  rolloverIncludeCasino?: boolean;
  rolloverExpireDays: number;
  wageringContributionSportPercent: number;
  wageringContributionSlotsPercent: number;
  wageringContributionTablePercent: number;
  eligibleCountryCodes?: string[] | null;
  excludedUserIds?: string[] | null;
  eligibleKycLevelMin?: number | null;
  vipLevelMin?: number | null;
  priority: number;
  createdBy?: string | null;
  approvedBy?: string | null;
  approvedAt?: Date | null;
  termsAndConditions?: string | null;
  metadata?: unknown | null;
}

export interface UserBonus extends Identifiable, Timestamped {
  userId: string;
  walletId: string;
  campaignId?: string | null;
  bonusType: BonusType;
  status: BonusStatus;
  sourceTrigger: BonusTrigger;
  code?: string | null;
  grantedBy?: string | null;
  grantedReason?: string | null;
  grantedAt: Date;
  expiresAt?: Date | null;
  activatedAt?: Date | null;
  lockedBy?: string | null;
  lockedReason?: string | null;
  cancelledAt?: Date | null;
  cancelledBy?: string | null;
  cancellationReason?: string | null;
  releasedAt?: Date | null;
  expiredAt?: Date | null;
  originalAmount: number;
  remainingBalance: number;
  wageredSoFar: number;
  rolloverRequirement: number;
  rolloverProgress: number;
  rolloverPercent: number;
  rolloverMinOdds?: number | null;
  wageringContributionSportPercent: number;
  wageringContributionSlotsPercent: number;
  wageringContributionTablePercent: number;
  currency: string;
  relatedDepositId?: string | null;
  relatedBetId?: string | null;
  relatedReferralUserId?: string | null;
  termsSnapshotJson?: unknown | null;
  note?: string | null;
  correlationId?: string | null;
}

export interface RolloverProgressLog extends Identifiable, Timestamped {
  userId: string;
  userBonusId: string;
  betId?: string | null;
  casinoSessionId?: string | null;
  contributionSource: "SPORT_BET" | "CASINO_SLOT" | "CASINO_TABLE";
  stakeAmount: number;
  contributedAmount: number;
  contributionPercentApplied: number;
  rolloverProgressBefore: number;
  rolloverProgressAfter: number;
  rolloverPercentBefore: number;
  rolloverPercentAfter: number;
  oddAtBet?: number | null;
  minOddsRequired?: number | null;
  eligible: boolean;
  exclusionReason?: string | null;
}

export interface BetBonusUsage extends Identifiable, Timestamped {
  betId: string;
  userBonusId: string;
  amountUsed: number;
  realSpentRatio: number;
  bonusSpentRatio: number;
  returnedRealToWallet?: number | null;
  returnedBonusToWallet?: number | null;
}
