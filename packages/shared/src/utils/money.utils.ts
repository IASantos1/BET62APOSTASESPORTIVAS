const EUR_SCALE = 100;

export const roundAmount = (amount: number, decimals = 2): number =>
  Math.round((amount + Number.EPSILON) * 10 ** decimals) / 10 ** decimals;

export const eurToCents = (eur: number): number => Math.round(eur * EUR_SCALE);

export const centsToEur = (cents: number): number => roundAmount(cents / EUR_SCALE);

export const formatMoney = (amount: number, currency = "EUR", locale = "pt-PT"): string =>
  new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);

export const formatCompactMoney = (amount: number, currency = "EUR", locale = "pt-PT"): string =>
  new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(amount);

export const addMoney = (a: number, b: number): number => roundAmount(roundAmount(a) + roundAmount(b));

export const subMoney = (a: number, b: number): number => roundAmount(roundAmount(a) - roundAmount(b));

export const mulMoney = (amount: number, factor: number): number => roundAmount(roundAmount(amount) * factor);

export const percentOf = (amount: number, percent: number): number => roundAmount((amount * percent) / 100);

export const feeDeduct = (amount: number, feePercent: number): { net: number; fee: number; gross: number } => {
  const fee = percentOf(amount, feePercent);
  const net = subMoney(amount, fee);
  return { gross: amount, fee, net };
};

export const feeAddToNet = (netAmount: number, feePercent: number): { gross: number; fee: number; net: number } => {
  const gross = roundAmount(netAmount / (1 - feePercent / 100));
  const fee = subMoney(gross, netAmount);
  return { gross, fee, net: netAmount };
};
