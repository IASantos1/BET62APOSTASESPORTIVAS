export interface BonusWelcomeConfig {
  enabled: boolean;
  matchPercent: number;
  maxAmount: number;
  minDeposit: number;
  maxDeposits: number;
  rolloverRequirement: number;
  rolloverMinOdds: number;
  rolloverDays: number;
  excludeCountries: string[];
  paymentMethodBlacklist: string[];
  wageringContribution: {
    SPORT_LIVE: number;
    SPORT_PREMATCH: number;
    CASINO_SLOTS: number;
    CASINO_TABLE: number;
    CASINO_LIVE_DEALER: number;
    CASINO_PROGRESSIVE: number;
  };
}

export interface BonusFreebetConfig {
  minStake: number;
  maxStake: number;
  minOdds: number;
  rolloverRequirement: number;
  rolloverMinOdds: number;
  rolloverDays: number;
  maxReturnMultiplier: number;
  allowCombination: boolean;
  allowCashout: boolean;
  refundAsFreebet: boolean;
}

export interface BonusCashbackConfig {
  enabled: boolean;
  weeklyLossPercent: number;
  weeklyMaxAmount: number;
  minLossForCashback: number;
  rolloverRequirement: number;
  rolloverMinOdds: number;
  rolloverDays: number;
  excludeTypes: string[];
}

export interface BET62BonusConfig {
  welcome: BonusWelcomeConfig;
  freebet: BonusFreebetConfig;
  cashback: BonusCashbackConfig;
  general: {
    balancePriority: "BONUS_FIRST" | "REAL_FIRST" | "PROPORTIONAL";
    fifoBonnusOrder: boolean;
    expireCheckCron: string;
    maxActiveBonusesPerUser: number;
    voidOnSuspicious: boolean;
    manualRequiresApproval: boolean;
    codeMaxLength: number;
  };
  campaigns: {
    createDefaultWelcome: boolean;
    welcomeCampaignCode: string;
  };
}

export const DEFAULT_BONUS_CONFIG: BET62BonusConfig = {
  welcome: {
    enabled: true,
    matchPercent: 100,
    maxAmount: 200,
    minDeposit: 20,
    maxDeposits: 1,
    rolloverRequirement: 8,
    rolloverMinOdds: 1.5,
    rolloverDays: 30,
    excludeCountries: [],
    paymentMethodBlacklist: ["SKRILL", "NETELLER"],
    wageringContribution: {
      SPORT_LIVE: 100,
      SPORT_PREMATCH: 100,
      CASINO_SLOTS: 100,
      CASINO_TABLE: 10,
      CASINO_LIVE_DEALER: 10,
      CASINO_PROGRESSIVE: 0,
    },
  },
  freebet: {
    minStake: 1,
    maxStake: 200,
    minOdds: 1.8,
    rolloverRequirement: 1,
    rolloverMinOdds: 1.5,
    rolloverDays: 7,
    maxReturnMultiplier: 10,
    allowCombination: true,
    allowCashout: false,
    refundAsFreebet: false,
  },
  cashback: {
    enabled: true,
    weeklyLossPercent: 10,
    weeklyMaxAmount: 500,
    minLossForCashback: 100,
    rolloverRequirement: 1,
    rolloverMinOdds: 1.5,
    rolloverDays: 14,
    excludeTypes: ["VOID", "CASHOUT"],
  },
  general: {
    balancePriority: "BONUS_FIRST",
    fifoBonnusOrder: true,
    expireCheckCron: "0 5 * * *",
    maxActiveBonusesPerUser: 10,
    voidOnSuspicious: true,
    manualRequiresApproval: true,
    codeMaxLength: 32,
  },
  campaigns: {
    createDefaultWelcome: true,
    welcomeCampaignCode: "WELCOME100",
  },
};
