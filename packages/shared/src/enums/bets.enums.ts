export enum BetType {
  SINGLE = "SINGLE",
  MULTIPLE = "MULTIPLE",
  SYSTEM = "SYSTEM",
  CHAIN = "CHAIN",
}

export enum BetStatus {
  PENDING = "PENDING",
  PLACED = "PLACED",
  LIVE = "LIVE",
  WON = "WON",
  LOST = "LOST",
  HALF_WON = "HALF_WON",
  HALF_LOST = "HALF_LOST",
  VOID = "VOID",
  CASHOUT = "CASHOUT",
  CASHOUT_PARTIAL = "CASHOUT_PARTIAL",
  REJECTED = "REJECTED",
  CANCELLED = "CANCELLED",
  UNDER_REVIEW = "UNDER_REVIEW",
}

export enum BetAcceptanceType {
  ACCEPT_HIGHER_ODDS = "ACCEPT_HIGHER_ODDS",
  ACCEPT_ANY_ODDS = "ACCEPT_ANY_ODDS",
  ACCEPT_NO_CHANGE = "ACCEPT_NO_CHANGE",
  ACCEPT_EQUAL_OR_HIGHER = "ACCEPT_EQUAL_OR_HIGHER",
}

export enum CashoutType {
  FULL = "FULL",
  PARTIAL = "PARTIAL",
  AUTO = "AUTO",
}

export enum SystemBetType {
  T_2_3 = "2_OF_3",
  T_2_4 = "2_OF_4",
  T_3_4 = "3_OF_4",
  T_2_5 = "2_OF_5",
  T_3_5 = "3_OF_5",
  T_4_5 = "4_OF_5",
  T_2_6 = "2_OF_6",
  T_3_6 = "3_OF_6",
  T_4_6 = "4_OF_6",
  T_5_6 = "5_OF_6",
}
