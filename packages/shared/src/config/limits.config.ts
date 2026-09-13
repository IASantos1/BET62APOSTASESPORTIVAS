export type AutoExclusionPeriod = "24h" | "7d" | "1m" | "6m" | "1y" | "SELF_EXCLUDE_PERMANENT";

export interface PlayerDepositLimits {
  daily: number;
  weekly: number;
  monthly: number;
  minDaily: number;
}

export interface PlayerBetLimits {
  MIN_BET: number;
  MAX_DEFAULT: number;
  dynamic: boolean;
}

export interface PlayerLossLimits {
  session?: number;
  daily?: number;
  weekly?: number;
}

export interface BET62LimitsConfig {
  user: {
    deposits: {
      dailyDefault: number;
      weeklyDefault: number;
      monthlyDefault: number;
      dailyAbsoluteMax: number;
      weeklyAbsoluteMax: number;
      monthlyAbsoluteMax: number;
      minDaily: number;
    };
    wagering: {
      dailyDefault: number;
      weeklyDefault: number;
      monthlyDefault: number;
      dailyAbsoluteMax: number;
    };
    losses: {
      dailyDefault: number;
      weeklyDefault: number;
      monthlyDefault: number;
      dailyAbsoluteMax: number;
    };
    withdrawal: {
      dailyDefault: number;
      weeklyDefault: number;
      monthlyDefault: number;
      dailyAbsoluteMax: number;
      weeklyAbsoluteMax: number;
      monthlyAbsoluteMax: number;
      minWithdrawal: number;
      manualApprovalAbove: number;
      kycL1RequiredAbove: number;
      kycL2RequiredAbove: number;
    };
    stake: {
      minPerBet: number;
      maxPerBetDefault: number;
      maxPerBetAbsolute: number;
      maxPerCombinationBet: number;
      maxSelectionsPerBet: number;
      maxActiveBetsPerUser: number;
    };
    session: {
      defaultTimeLimitMin: number;
      absoluteTimeLimitMin: number;
      inactivityLogoutSec: number;
      maxSessionsPerUser: number;
    };
  };
  PlayerDepositLimits: PlayerDepositLimits;
  PlayerBetLimits: PlayerBetLimits;
  PlayerLossLimits: PlayerLossLimits;
  AutoExclusionOptions: AutoExclusionPeriod[];
  system: {
    maxWinSingle: number;
    maxWinMultiple: number;
    maxWinPerUserPerDay: number;
    maxWinPerUserPerMonth: number;
    maxGgrPerMonth: number;
    payout: {
      minProcessingDays: number;
      maxProcessingDays: number;
      instantPayoutMaxAmount: number;
      instantPayoutProviders: string[];
    };
    pendingOps: {
      betReservationTimeoutSec: number;
      cashoutLockTimeoutSec: number;
      withdrawalHoldHours: number;
      reversalWindowHours: number;
    };
  };
  responsibleGambling: {
    mandatoryCoolingOffOptionsDays: number[];
    mandatorySelfExcludeOptionsDays: number[];
    allowPermanentSelfExclude: boolean;
    realityCheckMinIntervalMin: number;
    realityCheckDefaultIntervalMin: number;
    underageBlockStrict: boolean;
    restrictedCountries: string[];
    restrictedUsStates: string[];
  };
}

export const DEFAULT_LIMITS_CONFIG: BET62LimitsConfig = {
  user: {
    deposits: {
      dailyDefault: 5000,
      weeklyDefault: 15000,
      monthlyDefault: 50000,
      dailyAbsoluteMax: 100000,
      weeklyAbsoluteMax: 250000,
      monthlyAbsoluteMax: 1000000,
      minDaily: 10,
    },
    wagering: {
      dailyDefault: 10000,
      weeklyDefault: 30000,
      monthlyDefault: 100000,
      dailyAbsoluteMax: 500000,
    },
    losses: {
      dailyDefault: 2000,
      weeklyDefault: 6000,
      monthlyDefault: 20000,
      dailyAbsoluteMax: 100000,
    },
    withdrawal: {
      dailyDefault: 2500,
      weeklyDefault: 10000,
      monthlyDefault: 20000,
      dailyAbsoluteMax: 50000,
      weeklyAbsoluteMax: 200000,
      monthlyAbsoluteMax: 1000000,
      minWithdrawal: 20,
      manualApprovalAbove: 1000,
      kycL1RequiredAbove: 0,
      kycL2RequiredAbove: 10000,
    },
    stake: {
      minPerBet: 0.1,
      maxPerBetDefault: 10000,
      maxPerBetAbsolute: 50000,
      maxPerCombinationBet: 10000,
      maxSelectionsPerBet: 20,
      maxActiveBetsPerUser: 500,
    },
    session: {
      defaultTimeLimitMin: 0,
      absoluteTimeLimitMin: 1440,
      inactivityLogoutSec: 1800,
      maxSessionsPerUser: 10,
    },
  },
  PlayerDepositLimits: {
    daily: 5000,
    weekly: 15000,
    monthly: 50000,
    minDaily: 10,
  },
  PlayerBetLimits: {
    MIN_BET: 0.5,
    MAX_DEFAULT: 2000,
    dynamic: true,
  },
  PlayerLossLimits: {
    session: undefined,
    daily: undefined,
    weekly: undefined,
  },
  AutoExclusionOptions: ["24h", "7d", "1m", "6m", "1y", "SELF_EXCLUDE_PERMANENT"],
  system: {
    maxWinSingle: 100000,
    maxWinMultiple: 250000,
    maxWinPerUserPerDay: 250000,
    maxWinPerUserPerMonth: 2000000,
    maxGgrPerMonth: 10000000,
    payout: {
      minProcessingDays: 1,
      maxProcessingDays: 5,
      instantPayoutMaxAmount: 2500,
      instantPayoutProviders: ["STRIPE_CARD", "APPLE_PAY", "GOOGLE_PAY"],
    },
    pendingOps: {
      betReservationTimeoutSec: 60,
      cashoutLockTimeoutSec: 30,
      withdrawalHoldHours: 24,
      reversalWindowHours: 0,
    },
  },
  responsibleGambling: {
    mandatoryCoolingOffOptionsDays: [1, 7, 30],
    mandatorySelfExcludeOptionsDays: [30, 90, 180, 365],
    allowPermanentSelfExclude: true,
    realityCheckMinIntervalMin: 10,
    realityCheckDefaultIntervalMin: 60,
    underageBlockStrict: true,
    restrictedCountries: [
      "US",
      "CU",
      "IR",
      "KP",
      "SY",
      "RU",
      "AF",
      "FR-GP",
      "FR-MQ",
      "GF",
      "RE",
      "YT",
      "PF",
      "NC",
      "WF",
      "PM",
      "BL",
      "MF",
    ],
    restrictedUsStates: [],
  },
};
