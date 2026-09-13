export interface KYCLevelLimits {
  level: number;
  label: string;
  description: string;
  depositDaily: number;
  depositWeekly: number;
  depositMonthly: number;
  withdrawalDaily: number;
  withdrawalMonthly: number;
  stakePerBetMax: number;
  cumulativeBalanceMax: number;
  withdrawalAllowed: boolean;
  liveBetAllowed: boolean;
  casinoAllowed: boolean;
  requiredChecks: string[];
}

export const KYC_LEVEL_LIMITS: Record<number, KYCLevelLimits> = {
  0: {
    level: 0,
    label: "L0 - Básico",
    description: "Usuário recém registrado. Apenas email verificado.",
    depositDaily: 500,
    depositWeekly: 2000,
    depositMonthly: 5000,
    withdrawalDaily: 0,
    withdrawalMonthly: 0,
    stakePerBetMax: 100,
    cumulativeBalanceMax: 5000,
    withdrawalAllowed: false,
    liveBetAllowed: false,
    casinoAllowed: false,
    requiredChecks: ["EMAIL_VERIFIED", "AGE_ACCEPTED"],
  },
  1: {
    level: 1,
    label: "L1 - Intermediário",
    description: "Documento de identificação verificado. Apostas e saques liberados.",
    depositDaily: 5000,
    depositWeekly: 15000,
    depositMonthly: 50000,
    withdrawalDaily: 2500,
    withdrawalMonthly: 20000,
    stakePerBetMax: 2500,
    cumulativeBalanceMax: 50000,
    withdrawalAllowed: true,
    liveBetAllowed: true,
    casinoAllowed: true,
    requiredChecks: ["EMAIL_VERIFIED", "PHONE_VERIFIED", "ID_DOCUMENT_VERIFIED", "SELFIE_MATCH"],
  },
  2: {
    level: 2,
    label: "L2 - Avançado",
    description: "Prova de endereço e identidade avançada. Limites elevados.",
    depositDaily: 25000,
    depositWeekly: 75000,
    depositMonthly: 250000,
    withdrawalDaily: 15000,
    withdrawalMonthly: 100000,
    stakePerBetMax: 10000,
    cumulativeBalanceMax: 250000,
    withdrawalAllowed: true,
    liveBetAllowed: true,
    casinoAllowed: true,
    requiredChecks: [
      "EMAIL_VERIFIED",
      "PHONE_VERIFIED",
      "ID_DOCUMENT_VERIFIED",
      "SELFIE_MATCH",
      "PROOF_OF_ADDRESS",
      "PEP_SANCTIONS_CLEAR",
    ],
  },
  3: {
    level: 3,
    label: "L3 - VIP / Corporativo",
    description: "Verificação completa + fonte de fundos. Limites sob consulta.",
    depositDaily: 0,
    depositWeekly: 0,
    depositMonthly: 0,
    withdrawalDaily: 0,
    withdrawalMonthly: 0,
    stakePerBetMax: 0,
    cumulativeBalanceMax: 0,
    withdrawalAllowed: true,
    liveBetAllowed: true,
    casinoAllowed: true,
    requiredChecks: [
      "EMAIL_VERIFIED",
      "PHONE_VERIFIED",
      "ID_DOCUMENT_VERIFIED",
      "SELFIE_MATCH",
      "PROOF_OF_ADDRESS",
      "PEP_SANCTIONS_CLEAR",
      "SOURCE_OF_FUNDS",
      "SOURCE_OF_WEALTH",
    ],
  },
};

export const KYC_DEFAULT_POLICY = {
  allowedWithoutKYC: {
    maxDepositsBeforeVerification: 1500,
    maxCumulativeBalanceBeforeVerification: 5000,
    maxDaysBeforeForcedL1: 30,
  },
  autoApproveL0: true,
  autoApproveL1: false,
  autoApproveL2: false,
  manualReviewL2Always: true,
  pepSanctionsEnabled: true,
  adverseMediaEnabled: true,
  livenessRequired: true,
  documentExpiryWarnDays: 60,
  rejectedCooldownHours: 24,
  maxSubmissionsPerLevel: 3,
};
