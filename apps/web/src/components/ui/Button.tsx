'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bet62-primary/60 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] select-none',
  {
    variants: {
      variant: {
        primary:
          'bg-bet62-primary text-bet62-bg shadow-md hover:brightness-110',
        secondary:
          'border border-bet62-secondary/60 text-bet62-secondary hover:bg-bet62-secondary/10 hover:border-bet62-secondary',
        ghost:
          'text-white/80 hover:text-white hover:bg-white/5 border border-transparent hover:border-bet62-border',
        glow:
          'bg-bet62-primary text-bet62-bg font-bold hover:brightness-110',
        outline:
          'border border-bet62-border bg-bet62-surface/50 text-white hover:border-bet62-primary/60 hover:text-bet62-primary hover:bg-bet62-primary/5',
        danger:
          'bg-bet62-danger/90 text-white hover:bg-bet62-danger',
      },
      size: {
        xs: 'h-7 px-2.5 text-xs rounded-lg',
        sm: 'h-9 px-3 text-sm',
        md: 'h-11 px-5 text-sm',
        lg: 'h-14 px-7 text-base',
        xl: 'h-16 px-10 text-lg',
        icon: 'h-10 w-10 rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  loadingText?: string;
  icon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading, loadingText, icon, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            {loadingText ? <span>{loadingText}</span> : null}
          </>
        ) : (
          <>
            {icon ? <span className="shrink-0">{icon}</span> : null}
            {children}
          </>
        )}
      </Comp>
    );
  },
);
Button.displayName = 'Button';
export { buttonVariants };
