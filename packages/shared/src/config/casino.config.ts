export interface BET62CasinoConfig {
  enabled: boolean;
  defaultProvider: string;
  providers: Array<{
    provider: string;
    enabled: boolean;
    priority: number;
    baseApiUrl: string;
    operatorId: string;
    apiKey: string;
    currency: string;
    languages: string[];
    supportedCategories: string[];
    rtpOverridePercent?: number;
    maxWinMultiplier?: number;
    maxBetAmount?: number;
    minBetAmount?: number;
    freeRoundsSupported: boolean;
    demoModeSupported: boolean;
  }>;
  general: {
    currency: string;
    minBet: number;
    maxBet: number;
    defaultRtpPercent: number;
    maxWinPerDay: number;
    maxWinPerGame: number;
    bonusWageringContribution: {
      SLOTS: number;
      ROULETTE: number;
      BLACKJACK: number;
      BACCARAT: number;
      POKER: number;
      LIVE_DEALER: number;
      JACKPOT: number;
      OTHER: number;
    };
  };
  responsibleGambling: {
    sessionTimeoutMinutes: number;
    lossLimitPerSession: number;
    lossLimitPerDay: number;
    betLimitPerSpin?: number;
    realityCheckIntervalMin: number;
    selfExcludeBlockCasino: boolean;
    kycLevelRequired: number;
  };
  freeSpins: {
    defaultSpinsPerCampaign: number;
    defaultBetPerSpin: number;
    defaultGameIds: string[];
    maxPerUserPerMonth: number;
    expireDays: number;
    winningsSubjectToRollover: boolean;
    rolloverRequirement: number;
    rolloverDays: number;
    maxWinPerSpins: number;
  };
  jackpots: {
    enabled: boolean;
    globalSeedAmount: number;
    growthPercentPerBet: number;
    triggerProbability: number;
    minBetQualify: number;
    maxJackpotDisplay: number;
  };
  mock: {
    enabled: boolean;
    gamesCount: 50;
    slotCount: 30;
    tableCount: 15;
    liveCount: 5;
    categories: string[];
    createMockProviders: boolean;
    defaultRtp: number;
  };
}

export const DEFAULT_CASINO_CONFIG: BET62CasinoConfig = {
  enabled: true,
  defaultProvider: process.env.CASINO_DEFAULT_PROVIDER ?? "MOCK",
  providers: [
    {
      provider: "BIGBANG",
      enabled: process.env.BIGBANG_ENABLED === "true",
      priority: 1,
      baseApiUrl: process.env.BIGBANG_BASE_URL ?? "https://api.bigbangcasino.bet/api/v1",
      operatorId: process.env.BIGBANG_OPERATOR_ID ?? "BET62",
      apiKey: process.env.BIGBANG_API_KEY ?? "replace_bigbang_api_key",
      currency: process.env.BIGBANG_DEFAULT_CURRENCY ?? "EUR",
      languages: ["pt", "en", "es"],
      supportedCategories: [
        "SLOTS",
        "ROULETTE",
        "BLACKJACK",
        "BACCARAT",
        "POKER",
        "LIVE_DEALER",
        "GAME_SHOW",
      ],
      demoModeSupported: true,
      freeRoundsSupported: false,
      maxWinMultiplier: 100000,
    },
    {
      provider: "MOCK",
      enabled: true,
      priority: 99,
      baseApiUrl: "http://localhost:3008/mock-provider",
      operatorId: "BET62_MOCK",
      apiKey: "mock_api_key_replace",
      currency: "EUR",
      languages: ["pt-PT", "en-US", "es-ES"],
      supportedCategories: [
        "SLOTS",
        "ROULETTE",
        "BLACKJACK",
        "BACCARAT",
        "POKER",
        "LIVE_ROULETTE",
        "LIVE_BLACKJACK",
        "LIVE_BACCARAT",
        "JACKPOT",
        "MEGA_WAYS",
      ],
      demoModeSupported: true,
      freeRoundsSupported: true,
      maxWinMultiplier: 10000,
    },
  ],
  general: {
    currency: "EUR",
    minBet: 0.1,
    maxBet: 500,
    defaultRtpPercent: 96,
    maxWinPerDay: 100000,
    maxWinPerGame: 250000,
    bonusWageringContribution: {
      SLOTS: 100,
      ROULETTE: 10,
      BLACKJACK: 10,
      BACCARAT: 10,
      POKER: 20,
      LIVE_DEALER: 10,
      JACKPOT: 0,
      OTHER: 50,
    },
  },
  responsibleGambling: {
    sessionTimeoutMinutes: 180,
    lossLimitPerSession: 1000,
    lossLimitPerDay: 5000,
    realityCheckIntervalMin: 60,
    selfExcludeBlockCasino: true,
    kycLevelRequired: 1,
  },
  freeSpins: {
    defaultSpinsPerCampaign: 50,
    defaultBetPerSpin: 0.2,
    defaultGameIds: ["mock-slot-1", "mock-slot-2", "mock-slot-jackpot-1"],
    maxPerUserPerMonth: 500,
    expireDays: 7,
    winningsSubjectToRollover: true,
    rolloverRequirement: 20,
    rolloverDays: 14,
    maxWinPerSpins: 200,
  },
  jackpots: {
    enabled: true,
    globalSeedAmount: 10000,
    growthPercentPerBet: 0.02,
    triggerProbability: 0.000001,
    minBetQualify: 0.2,
    maxJackpotDisplay: 1000000,
  },
  mock: {
    enabled: true,
    gamesCount: 50,
    slotCount: 30,
    tableCount: 15,
    liveCount: 5,
    categories: ["SLOTS", "ROULETTE", "BLACKJACK", "BACCARAT", "LIVE_DEALER", "JACKPOT", "GAME_SHOW"],
    createMockProviders: true,
    defaultRtp: 96,
  },
};
