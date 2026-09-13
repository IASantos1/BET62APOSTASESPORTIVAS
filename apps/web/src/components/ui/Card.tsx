'use client';

import * as React from 'react';
import { cn } from '../../lib/utils';

export const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { glow?: 'primary' | 'secondary' | 'accent' | 'none' }
>(({ className, glow = 'none', ...props }, ref) => {
  const shadow =
    glow === 'primary'
      ? 'shadow-[0_4px_16px_rgba(0,0,0,0.28)] ring-1 ring-bet62-primary/20'
      : glow === 'secondary'
        ? 'shadow-[0_4px_16px_rgba(0,0,0,0.28)] ring-1 ring-bet62-secondary/20'
        : glow === 'accent'
          ? 'shadow-[0_4px_16px_rgba(0,0,0,0.28)] ring-1 ring-bet62-accent/20'
          : 'shadow-glass';
  return (
    <div
      ref={ref}
      className={cn(
        'rounded-2xl border border-bet62-border bg-bet62-glass backdrop-blur-xl',
        shadow,
        className,
      )}
      {...props}
    />
  );
});
Card.displayName = 'Card';

export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-5 border-b border-bet62-border/50', className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

export const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('text-lg font-bold tracking-tight text-white', className)}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-white/60', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-5 pt-5', className)} {...props} />
));
CardContent.displayName = 'CardContent';

export const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-5 pt-0 border-t border-bet62-border/50 mt-4', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';
