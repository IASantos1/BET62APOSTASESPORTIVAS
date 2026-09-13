'use client';

import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { cn } from '../../lib/utils';

export const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & {
    glow?: 'primary' | 'secondary' | 'accent' | 'none';
  }
>(({ className, glow = 'none', ...props }, ref) => {
  const ring =
    glow === 'primary'
      ? 'ring-2 ring-bet62-primary/60 shadow-[0_0_20px_rgba(0,255,157,0.35)]'
      : glow === 'secondary'
        ? 'ring-2 ring-bet62-secondary/60 shadow-[0_0_20px_rgba(255,0,234,0.35)]'
        : glow === 'accent'
          ? 'ring-2 ring-bet62-accent/60 shadow-[0_0_20px_rgba(0,212,255,0.35)]'
          : 'ring-1 ring-bet62-border';
  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn('relative inline-flex h-10 w-10 shrink-0 overflow-hidden rounded-full', ring, className)}
      {...props}
    />
  );
});
Avatar.displayName = AvatarPrimitive.Root.displayName;

export const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn('aspect-square h-full w-full object-cover', className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

export const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-bet62-primary/20 via-bet62-accent/20 to-bet62-secondary/20 text-sm font-bold text-bet62-primary',
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
