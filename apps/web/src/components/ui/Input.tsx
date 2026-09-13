'use client';

import * as React from 'react';
import { cn } from '../../lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, leftIcon, rightIcon, ...props }, ref) => {
    return (
      <div className="relative w-full group">
        {leftIcon ? (
          <div className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-bet62-primary transition-colors">
            {leftIcon}
          </div>
        ) : null}
        <input
          type={type}
          ref={ref}
          className={cn(
            'flex h-11 w-full rounded-xl border border-bet62-border bg-bet62-surface/60 px-4 text-sm text-white placeholder:text-white/40 transition-all duration-200',
            'focus-visible:outline-none focus-visible:border-bet62-primary focus-visible:bg-bet62-surface focus-visible:ring-2 focus-visible:ring-bet62-primary/30 focus-visible:shadow-[0_0_20px_rgba(0,255,157,0.15)]',
            'file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-white',
            'disabled:cursor-not-allowed disabled:opacity-50',
            leftIcon ? 'pl-11' : '',
            rightIcon ? 'pr-11' : '',
            className,
          )}
          {...props}
        />
        {rightIcon ? (
          <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-bet62-primary transition-colors">
            {rightIcon}
          </div>
        ) : null}
      </div>
    );
  },
);
Input.displayName = 'Input';

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      'flex min-h-[90px] w-full rounded-xl border border-bet62-border bg-bet62-surface/60 px-4 py-3 text-sm text-white placeholder:text-white/40 transition-all duration-200',
      'focus-visible:outline-none focus-visible:border-bet62-primary focus-visible:bg-bet62-surface focus-visible:ring-2 focus-visible:ring-bet62-primary/30 focus-visible:shadow-[0_0_20px_rgba(0,255,157,0.15)]',
      'disabled:cursor-not-allowed disabled:opacity-50',
      className,
    )}
    {...props}
  />
));
Textarea.displayName = 'Textarea';
