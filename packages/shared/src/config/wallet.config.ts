export interface BET62WalletConfig {
  currency: string;
  decimalPlaces: number;
  roundingMode: "HALF_UP" | "HALF_DOWN" | "HALF_EVEN";
  minDeposit: number;
  maxDeposit: number;
  minWithdrawal: number;
  maxWithdrawal: number;
  paymentFees: {
    deposit: {
      STRIPE_CARD: number;
      SEPA: number;
      APPLE_PAY: number;
      GOOGLE_PAY: number;
      BANK_TRANSFER: number;
    };
    withdrawal: {
      SEPA: number;
      BANK_TRANSFER: number;
      SKRILL: number;
      NETELLER: number;
    };
  };
  processingTimes: {
    depositInstant: string[];
    withdrawalInstant: string[];
    withdrawalManualApprovalAbove: number;
  };
  wallet: {
    balancePriority: "BONUS_FIRST" | "PROPORTIONAL" | "REAL_FIRST";
    bonusWageringContribution: {
      SPORTS_MIN_ODDS: number;
      SLOTS_PERCENT: number;
      TABLE_PERCENT: number;
      LIVE_DEALER_PERCENT: number;
      PROGRESSIVE_PERCENT: number;
    };
    freezeOnSuspicion: boolean;
    negativeBalanceProtection: boolean;
    dailyStatementEmail: boolean;
    monthlyStatementEmail: boolean;
  };
  stripe: {
    enabled: boolean;
    allowedPaymentMethods: string[];
    payoutSchedule: "MANUAL" | "AUTOMATIC_DAILY" | "AUTOMATIC_WEEKLY";
    statementDescriptor: string;
    metadataKeys: string[];
    webhookSigningEnabled: boolean;
  };
}

export const DEFAULT_WALLET_CONFIG: BET62WalletConfig = {
  currency: "EUR",
  decimalPlaces: 2,
  roundingMode: "HALF_UP",
  minDeposit: 10,
  maxDeposit: 25000,
  minWithdrawal: 20,
  maxWithdrawal: 100000,
  paymentFees: {
    deposit: {
      STRIPE_CARD: 1.4,
      SEPA: 0,
      APPLE_PAY: 1.4,
      GOOGLE_PAY: 1.4,
      BANK_TRANSFER: 0,
    },
    withdrawal: {
      SEPA: 0,
      BANK_TRANSFER: 15,
      SKRILL: 1.9,
      NETELLER: 1.9,
    },
  },
  processingTimes: {
    depositInstant: ["STRIPE_CARD", "APPLE_PAY", "GOOGLE_PAY"],
    withdrawalInstant: [],
    withdrawalManualApprovalAbove: 1000,
  },
  wallet: {
    balancePriority: "BONUS_FIRST",
    bonusWageringContribution: {
      SPORTS_MIN_ODDS: 1.5,
      SLOTS_PERCENT: 100,
      TABLE_PERCENT: 10,
      LIVE_DEALER_PERCENT: 10,
      PROGRESSIVE_PERCENT: 0,
    },
    freezeOnSuspicion: true,
    negativeBalanceProtection: true,
    dailyStatementEmail: false,
    monthlyStatementEmail: true,
  },
  stripe: {
    enabled: true,
    allowedPaymentMethods: ["card", "sepa_debit", "apple_pay", "google_pay", "sepa_credit_transfer"],
    payoutSchedule: "MANUAL",
    statementDescriptor: "BET62*APOSTAS",
    metadataKeys: ["userId", "walletId", "correlationId", "origin"],
    webhookSigningEnabled: true,
  },
};
