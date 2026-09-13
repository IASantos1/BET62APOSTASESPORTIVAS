import type {
  CasinoBetStatus,
  CasinoGameCategory,
  CasinoGameStatus,
  CasinoProvider,
} from "../enums";
import type { Identifiable, Timestamped } from "./common.interface";

export interface CasinoGame extends Identifiable, Timestamped {
  providerGameId?: string | null;
  externalId?: string | null;
  provider: CasinoProvider;
  name: string;
  nameTranslations?: Record<string, string> | null;
  slug: string;
  description?: string | null;
  shortDescription?: string | null;
  categories: CasinoGameCategory[];
  tags?: string[] | null;
  rtpPercent?: number | null;
  volatility?: "LOW" | "MEDIUM" | "HIGH" | "EXTREME" | null;
  minBetAmount?: number | null;
  maxBetAmount?: number | null;
  maxWinMultiplier?: number | null;
  jackpotAvailable: boolean;
  jackpotId?: string | null;
  featured: boolean;
  newGame: boolean;
  hotGame?: boolean | null;
  comingSoon: boolean;
  status: CasinoGameStatus;
  demoAvailable: boolean;
  realPlayEnabled: boolean;
  logoUrl?: string | null;
  backgroundImageUrl?: string | null;
  thumbnailUrls?: Record<string, string> | null;
  videoUrl?: string | null;
  countryRestrictions?: string[] | null;
  jurisdictionRestrictions?: string[] | null;
  eligibleKycLevelMin?: number | null;
  hasFreeSpinsSupport: boolean;
  linesCount?: number | null;
  reelsCount?: number | null;
  displayOrder: number;
  releaseDate?: Date | null;
  lastSyncAt?: Date | null;
  providerRawData?: unknown | null;
  metadata?: unknown | null;
}

export interface CasinoGameSession extends Identifiable, Timestamped {
  userId: string;
  walletId: string;
  gameId: string;
  externalSessionId?: string | null;
  provider: CasinoProvider;
  currency: string;
  status: "STARTED" | "ACTIVE" | "ENDED" | "EXPIRED" | "ERROR";
  startedAt: Date;
  endedAt?: Date | null;
  durationSec?: number | null;
  ipAddress?: string | null;
  userAgent?: string | null;
  deviceType?: string | null;
  language?: string | null;
  totalBets: number;
  totalWins: number;
  totalLosses: number;
  netResult: number;
  bonusUsedId?: string | null;
  freeSpinsUsed: number;
  freeSpinsRemaining: number;
  lastPlayedAt?: Date | null;
  errorCode?: string | null;
  errorMessage?: string | null;
  providerRawData?: unknown | null;
  metadata?: unknown | null;
}

export interface CasinoBet extends Identifiable, Timestamped {
  userId: string;
  walletId: string;
  transactionId?: string | null;
  gameSessionId?: string | null;
  gameId: string;
  provider: CasinoProvider;
  externalBetId?: string | null;
  externalRoundId?: string | null;
  status: CasinoBetStatus;
  currency: string;
  stakeAmount: number;
  stakeRealUsed: number;
  stakeBonusUsed: number;
  freeSpinUsed: boolean;
  betType?: string | null;
  betCode?: string | null;
  lineNumber?: number | null;
  selectionJson?: unknown | null;
  oddsAtStake?: number | null;
  winAmount?: number | null;
  netResult: number;
  jackpotWon: boolean;
  jackpotAmount?: number | null;
  bonusGameTriggered: boolean;
  freeSpinsWon?: number | null;
  placedAt: Date;
  settledAt?: Date | null;
  placedIp?: string | null;
  placedDevice?: string | null;
  casinoReturnToPlayer?: number | null;
  placedRoundIndex?: number | null;
  rolloverEligible: boolean;
  rolloverContributionAmount?: number | null;
  rolloverContributionPercent?: number | null;
  providerRawRequest?: unknown | null;
  providerRawResponse?: unknown | null;
  riskFlagged?: boolean | null;
  correlationId?: string | null;
  metadata?: unknown | null;
}

export interface CasinoCategory extends Identifiable, Timestamped {
  slug: string;
  name: string;
  nameTranslations?: Record<string, string> | null;
  categoryType: CasinoGameCategory;
  iconUrl?: string | null;
  bannerUrl?: string | null;
  description?: string | null;
  active: boolean;
  featured: boolean;
  displayOrder: number;
  gamesCount?: number | null;
  metadata?: unknown | null;
}

export interface CasinoProviderIntegration extends Identifiable, Timestamped {
  provider: CasinoProvider;
  name: string;
  description?: string | null;
  logoUrl?: string | null;
  active: boolean;
  baseApiUrl?: string | null;
  apiKey?: string | null;
  apiSecret?: string | null;
  operatorId?: string | null;
  currency: string;
  supportedLanguages?: string[] | null;
  supportedCountries?: string[] | null;
  gamesCount?: number | null;
  lastSyncAt?: Date | null;
  settingsJson?: unknown | null;
}
