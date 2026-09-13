export interface BET62BetConfig {
  stake: {
    minPerBet: number;
    maxPerBet: number;
    minPerSelection: number;
    maxPerSelection: number;
    minMultipleSelections: number;
    maxMultipleSelections: number;
  };
  slippage: {
    defaultAcceptance: "ACCEPT_EQUAL_OR_HIGHER";
    maxSlippagePercent: number;
    autoAcceptHigher: boolean;
    notifyOnChange: boolean;
  };
  cashout: {
    enabled: boolean;
    minStakePercent: number;
    maxStakePercent: number;
    houseEdgePercent: number;
    minCashoutValue: number;
    partialEnabled: boolean;
    minPartialPercent: number;
    maxPartialPercent: number;
    autoCashoutEnabled: boolean;
    liveOnly: boolean;
    betStatusBlocked: string[];
    marketTypesBlocked: string[];
  };
  settlement: {
    confirmDelayMs: number;
    autoSettleEnabled: boolean;
    manualReviewThresholdWin: number;
    manualReviewThresholdMultiplier: number;
    voidReasonOptions: string[];
  };
  maxWin: {
    singleBetPerDay: number;
    multipleBetPerDay: number;
    globalPerUserPerDay: number;
    globalPerUserPerMonth: number;
  };
  risk: {
    duplicateDetection: boolean;
    ipBlockSameAccount: boolean;
    samePaymentMethodBlock: boolean;
    highWinAutoReview: boolean;
    riskFlags: {
      arbitrageDetection: boolean;
      bonusAbuseDetection: boolean;
      gnomingDetection: boolean;
      suspiciousPatternDetection: boolean;
    };
  };
  oddsBoost: {
    enabled: boolean;
    multiBoost: {
      "3-folds": number;
      "5-folds": number;
      "8-folds": number;
      "10-folds-plus": number;
    };
  };
}

export const DEFAULT_BET_CONFIG: BET62BetConfig = {
  stake: {
    minPerBet: 0.1,
    maxPerBet: 10000,
    minPerSelection: 0.1,
    maxPerSelection: 10000,
    minMultipleSelections: 2,
    maxMultipleSelections: 20,
  },
  slippage: {
    defaultAcceptance: "ACCEPT_EQUAL_OR_HIGHER",
    maxSlippagePercent: 5,
    autoAcceptHigher: true,
    notifyOnChange: true,
  },
  cashout: {
    enabled: true,
    minStakePercent: 10,
    maxStakePercent: 100,
    houseEdgePercent: 2,
    minCashoutValue: 1,
    partialEnabled: true,
    minPartialPercent: 10,
    maxPartialPercent: 90,
    autoCashoutEnabled: true,
    liveOnly: false,
    betStatusBlocked: ["CASHOUT", "CANCELLED", "VOID"],
    marketTypesBlocked: ["CORRECT_SCORE_LATE", "PENALTY_SHOOTOUT"],
  },
  settlement: {
    confirmDelayMs: 15000,
    autoSettleEnabled: true,
    manualReviewThresholdWin: 10000,
    manualReviewThresholdMultiplier: 50,
    voidReasonOptions: [
      "EVENT_CANCELLED",
      "EVENT_POSTPONED",
      "EVENT_ABANDONED",
      "WRONG_ODDS_MANIFEST_ERROR",
      "WRONG_TEAM_OR_PLAYER",
      "START_TIME_ERROR",
      "INTEGRITY_CONCERN",
      "REGULATORY_REQUIREMENT",
      "TECHNICAL_ERROR",
      "PAYMENT_ISSUE",
    ],
  },
  maxWin: {
    singleBetPerDay: 100000,
    multipleBetPerDay: 250000,
    globalPerUserPerDay: 250000,
    globalPerUserPerMonth: 2000000,
  },
  risk: {
    duplicateDetection: true,
    ipBlockSameAccount: true,
    samePaymentMethodBlock: true,
    highWinAutoReview: true,
    riskFlags: {
      arbitrageDetection: true,
      bonusAbuseDetection: true,
      gnomingDetection: true,
      suspiciousPatternDetection: true,
    },
  },
  oddsBoost: {
    enabled: true,
    multiBoost: {
      "3-folds": 5,
      "5-folds": 10,
      "8-folds": 20,
      "10-folds-plus": 50,
    },
  },
};
