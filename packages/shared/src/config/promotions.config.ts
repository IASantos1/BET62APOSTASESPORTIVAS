export type WageringBasis = "bonus" | "deposit" | "freebet" | "total";

export interface WageringConfig {
  multiplier: number;
  basis: WageringBasis;
}

export interface PromoTieredDeposit {
  minDeposit: number;
  freeBetAmount?: number;
  bonusAmount?: number;
  matchPercent?: number;
}

export interface PromoWelcome {
  enabled: boolean;
  code: string;
  name: string;
  percentage: number;
  minDeposit: number;
  maxBonus: number;
  wagering: WageringConfig;
  expiryDays: number;
  maxBetContributionPercent: number;
  eligibleMarkets: string[];
  minOdds: number;
}

export interface PromoDepositFreebet {
  enabled: boolean;
  code: string;
  name: string;
  tiered: PromoTieredDeposit[];
  wagering: WageringConfig;
  expiryDays: number;
  minOdds: number;
}

export interface PromoFirstBet {
  enabled: boolean;
  code: string;
  name: string;
  minBetAmount: number;
  minOdds: number;
  rewardFreeBetAmount: number;
  wageringMultiplier: number;
}

export interface PromoWeeklyReload {
  enabled: boolean;
  code: string;
  name: string;
  percentage: number;
  maxBonus: number;
  oncePerWeek: boolean;
  wageringMultiplier: number;
}

export interface PromoWeeklyCashback {
  enabled: boolean;
  code: string;
  name: string;
  percentage: number;
  maxAmountWeekly: number;
  wageringMultiplier: number;
}

export interface PromotionsRulesGeneral {
  MIN_DEPOSIT_EUR: number;
  MIN_WITHDRAWAL_EUR: number;
  KYC_MIN_LEVEL_WITHDRAWAL: string;
  ONE_PROMO_AT_A_TIME: boolean;
  FREEBET_MIN_ODDS: number;
}

export interface VIPLevel {
  name: string;
  turnoverRequired: number;
  cashbackPercent: number;
  reloadBonusPercent: number;
  maxBonusPerMonth: number;
}

export interface BET62PromotionsConfig {
  PROMO_WELCOME: PromoWelcome;
  PROMO_DEPOSIT_FREEBET_10: PromoDepositFreebet;
  PROMO_DEPOSIT_FREEBET_20: PromoDepositFreebet;
  PROMO_FIRST_BET: PromoFirstBet;
  PROMO_WEEKLY_RELOAD_25: PromoWeeklyReload;
  PROMO_WEEKLY_CASHBACK_5: PromoWeeklyCashback;
  RULES_GENERAL: PromotionsRulesGeneral;
  VIP_LEVELS: VIPLevel[];
}

export const PROMOTIONS_BET62: BET62PromotionsConfig = {
  PROMO_WELCOME: {
    enabled: true,
    code: "WELCOME100",
    name: "100% até €20",
    percentage: 100,
    minDeposit: 10,
    maxBonus: 20,
    wagering: {
      multiplier: 5,
      basis: "bonus",
    },
    expiryDays: 7,
    maxBetContributionPercent: 10,
    eligibleMarkets: ["SPORT", "LIVE"],
    minOdds: 1.5,
  },
  PROMO_DEPOSIT_FREEBET_10: {
    enabled: true,
    code: "FB5DEP10",
    name: "Depósito €10 → €5 FREEBET",
    tiered: [
      {
        minDeposit: 10,
        freeBetAmount: 5,
      },
    ],
    wagering: {
      multiplier: 5,
      basis: "freebet",
    },
    expiryDays: 7,
    minOdds: 1.5,
  },
  PROMO_DEPOSIT_FREEBET_20: {
    enabled: true,
    code: "FB10DEP20",
    name: "Depósito €20 → €10 FREEBET",
    tiered: [
      {
        minDeposit: 20,
        freeBetAmount: 10,
      },
    ],
    wagering: {
      multiplier: 5,
      basis: "freebet",
    },
    expiryDays: 7,
    minOdds: 1.5,
  },
  PROMO_FIRST_BET: {
    enabled: true,
    code: "FIRSTBET5",
    name: "Primeira Aposta",
    minBetAmount: 5,
    minOdds: 1.5,
    rewardFreeBetAmount: 5,
    wageringMultiplier: 3,
  },
  PROMO_WEEKLY_RELOAD_25: {
    enabled: true,
    code: "RELOAD25",
    name: "Recarga Semanal 25%",
    percentage: 25,
    maxBonus: 20,
    oncePerWeek: true,
    wageringMultiplier: 5,
  },
  PROMO_WEEKLY_CASHBACK_5: {
    enabled: true,
    code: "CASH5",
    name: "Cashback Semanal 5%",
    percentage: 5,
    maxAmountWeekly: 20,
    wageringMultiplier: 3,
  },
  RULES_GENERAL: {
    MIN_DEPOSIT_EUR: 10,
    MIN_WITHDRAWAL_EUR: 20,
    KYC_MIN_LEVEL_WITHDRAWAL: "L1_LIGHT",
    ONE_PROMO_AT_A_TIME: true,
    FREEBET_MIN_ODDS: 1.5,
  },
  VIP_LEVELS: [
    {
      name: "Bronze",
      turnoverRequired: 250,
      cashbackPercent: 1,
      reloadBonusPercent: 10,
      maxBonusPerMonth: 50,
    },
    {
      name: "Silver",
      turnoverRequired: 1000,
      cashbackPercent: 2,
      reloadBonusPercent: 15,
      maxBonusPerMonth: 150,
    },
    {
      name: "Gold",
      turnoverRequired: 5000,
      cashbackPercent: 3,
      reloadBonusPercent: 20,
      maxBonusPerMonth: 500,
    },
    {
      name: "Platinum",
      turnoverRequired: 10000,
      cashbackPercent: 5,
      reloadBonusPercent: 25,
      maxBonusPerMonth: 1000,
    },
  ],
};
