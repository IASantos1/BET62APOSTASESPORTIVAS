'use client';

import * as React from 'react';
import { cn } from '../../lib/utils';

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  variant?: 'primary' | 'secondary' | 'accent' | 'danger' | 'warning' | 'success';
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

export function Progress({
  value,
  max = 100,
  variant = 'primary',
  showLabel = false,
  size = 'md',
  animated = true,
  className,
  ...props
}: ProgressProps) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  const heights = { sm: 'h-1.5', md: 'h-2.5', lg: 'h-4' };
  const gradients: Record<NonNullable<ProgressProps['variant']>, string> = {
    primary: 'bg-gradient-to-r from-bet62-primary to-bet62-accent shadow-[0_0_10px_rgba(0,255,157,0.45)]',
    secondary: 'bg-gradient-to-r from-bet62-secondary to-bet62-accent shadow-[0_0_10px_rgba(255,0,234,0.45)]',
    accent: 'bg-gradient-to-r from-bet62-accent to-bet62-primary shadow-[0_0_10px_rgba(0,212,255,0.45)]',
    danger: 'bg-gradient-to-r from-red-500 to-red-700',
    warning: 'bg-gradient-to-r from-amber-400 to-orange-500',
    success: 'bg-gradient-to-r from-emerald-400 to-teal-500',
  };
  return (
    <div className={cn('w-full', className)} {...props}>
      <div
        className={cn(
          'relative w-full overflow-hidden rounded-full bg-bet62-surface border border-bet62-border',
          heights[size],
        )}
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={cn(
            'h-full rounded-full transition-[width] duration-700 ease-out',
            gradients[variant],
            animated ? 'animate-pulse-slow' : '',
          )}
          style={{ width: `${pct}%` }}
        />
      </div>
      {showLabel ? (
        <div className="flex justify-between mt-1.5 text-xs text-white/60 font-mono">
          <span>{value.toFixed(0)}</span>
          <span>{pct.toFixed(0)}%</span>
        </div>
      ) : null}
    </div>
  );
}
