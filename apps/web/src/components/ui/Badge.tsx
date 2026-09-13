'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors select-none',
  {
    variants: {
      variant: {
        green:
          'border-bet62-primary/40 bg-bet62-primary/10 text-bet62-primary shadow-[0_0_12px_rgba(0,255,157,0.15)]',
        pink:
          'border-bet62-secondary/40 bg-bet62-secondary/10 text-bet62-secondary shadow-[0_0_12px_rgba(255,0,234,0.15)]',
        blue:
          'border-bet62-accent/40 bg-bet62-accent/10 text-bet62-accent shadow-[0_0_12px_rgba(0,212,255,0.15)]',
        amber:
          'border-bet62-warning/40 bg-bet62-warning/10 text-bet62-warning shadow-[0_0_12px_rgba(251,191,36,0.15)]',
        outline:
          'border-bet62-border bg-transparent text-white/80',
        default:
          'border-bet62-border bg-bet62-surface text-white',
        danger:
          'border-bet62-danger/40 bg-bet62-danger/10 text-bet62-danger',
      },
      dot: {
        true: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean;
}

export function Badge({ className, variant, dot, ...props }: BadgeProps) {
  const dotColor =
    variant === 'green'
      ? 'bg-bet62-primary'
      : variant === 'pink'
        ? 'bg-bet62-secondary'
        : variant === 'blue'
          ? 'bg-bet62-accent'
          : variant === 'amber'
            ? 'bg-bet62-warning'
            : variant === 'danger'
              ? 'bg-bet62-danger'
              : 'bg-white/70';
  return (
    <div className={cn(badgeVariants({ variant, className }))} {...props}>
      {dot ? (
        <span
          className={cn(
            'h-1.5 w-1.5 rounded-full animate-pulse',
            dotColor,
          )}
        />
      ) : null}
      {props.children}
    </div>
  );
}
