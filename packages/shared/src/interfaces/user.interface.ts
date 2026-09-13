import type {
  CountryCode,
  CurrencyCode,
  LanguageCode,
  SelfExcludeDuration,
  UserStatus,
} from "../enums";
import type { Identifiable, Timestamped, GeoLocation } from "./common.interface";

export interface UserProfile extends Identifiable, Timestamped {
  userId: string;
  firstName?: string | null;
  lastName?: string | null;
  fullName?: string | null;
  dateOfBirth?: Date | null;
  gender?: "M" | "F" | "OTHER" | null;
  country: CountryCode;
  phoneNumber?: string | null;
  phoneVerifiedAt?: Date | null;
  city?: string | null;
  address?: string | null;
  postalCode?: string | null;
  preferredLanguage: LanguageCode;
  preferredCurrency: CurrencyCode;
  timezone?: string | null;
  marketingOptIn: boolean;
  smsOptIn: boolean;
  pushOptIn: boolean;
  status: UserStatus;
  registeredFromIp?: string | null;
  registeredLocation?: GeoLocation | null;
  affiliateCode?: string | null;
  vipLevel?: number | null;
}

export interface UserPreferences extends Identifiable, Timestamped {
  userId: string;
  oddsFormat: "decimal" | "fractional" | "american" | "hongkong" | "indonesian" | "malay";
  defaultStake?: number | null;
  betAcceptanceType: string;
  showLiveScores: boolean;
  showFavoritesOnly: boolean;
  darkMode: boolean;
  autoCashoutEnabled: boolean;
  autoCashoutThreshold?: number | null;
  realityCheckEnabled: boolean;
  realityCheckIntervalMin: number;
  quickBetEnabled: boolean;
  soundEnabled: boolean;
  notificationSoundsEnabled: boolean;
  favoriteSports?: string[] | null;
  favoriteLeagues?: string[] | null;
  favoriteTeams?: string[] | null;
}

export interface UserLimits extends Identifiable, Timestamped {
  userId: string;
  depositDailyLimit?: number | null;
  depositWeeklyLimit?: number | null;
  depositMonthlyLimit?: number | null;
  wagerDailyLimit?: number | null;
  wagerWeeklyLimit?: number | null;
  wagerMonthlyLimit?: number | null;
  lossDailyLimit?: number | null;
  lossWeeklyLimit?: number | null;
  lossMonthlyLimit?: number | null;
  sessionTimeLimitMin?: number | null;
  stakePerBetMax?: number | null;
  stakePerBetMin: number;
  withdrawalDailyLimit?: number | null;
  withdrawalMonthlyLimit?: number | null;
  kycLevelApplied: number;
}

export interface SelfExclusionRecord extends Identifiable, Timestamped {
  userId: string;
  duration: SelfExcludeDuration;
  startedAt: Date;
  endsAt: Date | null;
  reason?: string | null;
  revokedAt?: Date | null;
  revokedBy?: string | null;
  isActive: boolean;
}

export interface RealityCheckLog extends Identifiable, Timestamped {
  userId: string;
  sessionId: string;
  sessionStartAt: Date;
  checkAt: Date;
  acknowledgedAt?: Date | null;
  continuePlay: boolean | null;
  wageredDuringSession: number;
  wonDuringSession: number;
  lostDuringSession: number;
  netDuringSession: number;
}
