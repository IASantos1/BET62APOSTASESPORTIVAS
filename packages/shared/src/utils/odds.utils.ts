import { roundAmount } from "./money.utils";

export const oddsDecimalToFractional = (decimal: number): string => {
  if (decimal <= 1) return "0/1";
  const frac = decimal - 1;
  return toFraction(frac);
};

export const oddsFractionalToDecimal = (fractional: string): number => {
  const [num, den] = fractional.split("/").map(Number);
  return roundAmount(num / den + 1);
};

export const oddsDecimalToAmerican = (decimal: number): number => {
  if (decimal >= 2) return Math.round((decimal - 1) * 100);
  return Math.round(-100 / (decimal - 1));
};

export const oddsAmericanToDecimal = (american: number): number => {
  if (american >= 0) return roundAmount(american / 100 + 1);
  return roundAmount(100 / Math.abs(american) + 1);
};

export const oddsToImpliedProbabilityPercent = (decimal: number): number => roundAmount((1 / decimal) * 100, 2);

export const trueProbabilityRemoveVig = (
  odds1: number,
  odds2: number,
  odds3?: number,
): { p1: number; p2: number; p3?: number; vig: number; market: number } => {
  const arr = odds3 ? [odds1, odds2, odds3] : [odds1, odds2];
  const imp = arr.map((o) => 1 / o);
  const total = imp.reduce((a, b) => a + b, 0);
  const trueP = imp.map((i) => i / total);
  return {
    p1: roundAmount(trueP[0] * 100, 2),
    p2: roundAmount(trueP[1] * 100, 2),
    p3: trueP[2] ? roundAmount(trueP[2] * 100, 2) : undefined,
    vig: roundAmount((total - 1) * 100, 2),
    market: roundAmount(total * 100, 2),
  };
};

export const calcPotentialReturn = (
  stake: number,
  odds: number[],
  boostPercent = 0,
): { stake: number; totalOdds: number; boostApplied: number; boostedOdds: number; potentialReturn: number; potentialWin: number } => {
  const totalOdds = odds.reduce((acc, o) => acc * o, 1);
  const boostApplied = (totalOdds * boostPercent) / 100;
  const boostedOdds = roundAmount(totalOdds + boostApplied);
  const potentialReturn = roundAmount(stake * boostedOdds);
  const potentialWin = roundAmount(potentialReturn - stake);
  return { stake, totalOdds, boostApplied, boostedOdds, potentialReturn, potentialWin };
};

export const calcCashoutValue = (
  originalPotentialReturn: number,
  currentImpliedWinProbability: number,
  houseEdgePercent = 2,
): number => {
  const rawValue = originalPotentialReturn * (currentImpliedWinProbability / 100);
  const fee = (rawValue * houseEdgePercent) / 100;
  return roundAmount(Math.max(0, rawValue - fee));
};

export const calcSlippagePercent = (oldOdds: number, newOdds: number): number =>
  roundAmount(((newOdds - oldOdds) / Math.abs(oldOdds)) * 100, 2);

function gcdFn(a: number, b: number): number {
  return !b ? a : gcdFn(b, a % b);
}

function gcdReduce(a: number, b: number): string {
  const common = gcdFn(a, b);
  return `${a / common}/${b / common}`;
}

function toFraction(decimal: number): string {
  for (let d = 1; d <= 1000; d++) {
    const n = Math.round(decimal * d);
    if (Math.abs(n / d - decimal) < 0.0001) {
      return gcdReduce(n, d);
    }
  }
  return `${Math.round(decimal * 100)}/100`;
}
