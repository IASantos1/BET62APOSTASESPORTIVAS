export interface BET62AppConfig {
  appName: string;
  appVersion: string;
  appBaseUrl: string;
  environment: "development" | "staging" | "production";
  timezone: string;
  defaultCurrency: string;
  defaultCountry: string;
  defaultLanguage: string;
  supportedLanguages: string[];
  supportedCountries: string[];
  supportedCurrencies: string[];
  responsibleGambling: {
    enabled: boolean;
    realityCheckDefaultMinutes: number;
    selfExclusionDurationsDays: number[];
    underageBlock: boolean;
    ageRequirement: number;
  };
  security: {
    passwordPolicy: {
      minLength: number;
      requireUppercase: boolean;
      requireLowercase: boolean;
      requireNumber: boolean;
      requireSymbol: boolean;
      expireDays: number;
    };
    twoFactorRequiredFor: {
      adminLogin: boolean;
      withdrawals: boolean;
      sensitiveChanges: boolean;
    };
    session: {
      inactivityTimeoutSec: number;
      refreshTokenExpireDays: number;
      maxSessionsPerUser: number;
    };
  };
  branding: {
    companyLegalName: string;
    companyAddress: string;
    companyVatNumber: string;
    licenseNumber: string;
    licenseAuthority: string;
    logoPrimary: string;
    supportEmail: string;
    supportPhone: string;
    responsibleGamblingUrl: string;
    termsUrl: string;
    privacyUrl: string;
  };
  api: {
    rateLimit: {
      anonymousPerMin: number;
      authenticatedPerMin: number;
      loginPerMin: number;
      adminPerMin: number;
    };
    corsOrigins: string[];
    swaggerEnabled: boolean;
  };
}

export const DEFAULT_APP_CONFIG: BET62AppConfig = {
  appName: "BET62 Apostas Esportivas",
  appVersion: "1.0.0",
  appBaseUrl: "https://bet62.pt",
  environment: "development",
  timezone: "Europe/Lisbon",
  defaultCurrency: "EUR",
  defaultCountry: "PT",
  defaultLanguage: "pt-PT",
  supportedLanguages: ["pt-PT", "en-US", "es-ES"],
  supportedCountries: ["PT", "MT", "ES", "FR", "DE", "IT", "NL", "GB", "BR"],
  supportedCurrencies: ["EUR", "USD", "GBP", "BRL"],
  responsibleGambling: {
    enabled: true,
    realityCheckDefaultMinutes: 60,
    selfExclusionDurationsDays: [7, 30, 90, 180, 365, 99999],
    underageBlock: true,
    ageRequirement: 18,
  },
  security: {
    passwordPolicy: {
      minLength: 8,
      requireUppercase: true,
      requireLowercase: true,
      requireNumber: true,
      requireSymbol: false,
      expireDays: 90,
    },
    twoFactorRequiredFor: {
      adminLogin: true,
      withdrawals: false,
      sensitiveChanges: true,
    },
    session: {
      inactivityTimeoutSec: 1800,
      refreshTokenExpireDays: 7,
      maxSessionsPerUser: 10,
    },
  },
  branding: {
    companyLegalName: "BET62 Gaming N.V.",
    companyAddress: "123, St. Julians Street, Sliema, Malta",
    companyVatNumber: "MT12345678",
    licenseNumber: "MGA/B2C/123/2026",
    licenseAuthority: "Malta Gaming Authority",
    logoPrimary: "/logo-bet62.svg",
    supportEmail: "support@bet62.pt",
    supportPhone: "+356 2000 1234",
    responsibleGamblingUrl: "/responsible-gambling",
    termsUrl: "/terms",
    privacyUrl: "/privacy",
  },
  api: {
    rateLimit: {
      anonymousPerMin: 60,
      authenticatedPerMin: 300,
      loginPerMin: 5,
      adminPerMin: 120,
    },
    corsOrigins: ["http://localhost:3080", "http://localhost:3000", "https://staging.bet62.pt"],
    swaggerEnabled: true,
  },
};
