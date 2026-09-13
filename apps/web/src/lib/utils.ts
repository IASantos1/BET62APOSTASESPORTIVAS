import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrencyEUR(value: number): string {
  return new Intl.NumberFormat('pt-PT', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 2,
  }).format(value || 0);
}

export function formatNumber(value: number, maximumFractionDigits = 0): string {
  return new Intl.NumberFormat('pt-PT', { maximumFractionDigits }).format(value || 0);
}

export function formatOdds(value: number): string {
  return (Math.round((value || 0) * 100) / 100).toFixed(2);
}

export function relativeTime(date: Date | string | number): string {
  const d = new Date(date).getTime();
  const diffSec = Math.round((d - Date.now()) / 1000);
  const abs = Math.abs(diffSec);
  const suffix = diffSec >= 0 ? '' : ' atrás';
  const prefix = diffSec >= 0 ? 'em ' : '';
  if (abs < 60) return `${prefix}${abs}s${suffix}`;
  if (abs < 3600) return `${prefix}${Math.floor(abs / 60)}m${suffix}`;
  if (abs < 86400) return `${prefix}${Math.floor(abs / 3600)}h${suffix}`;
  return `${prefix}${Math.floor(abs / 86400)}d${suffix}`;
}
