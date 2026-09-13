'use client';

import * as React from 'react';
import { cn } from '../../lib/utils';

interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string;
  glow?: 'primary' | 'secondary' | 'accent';
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, glow = 'primary', checked, disabled, onChange, id, ...props }, ref) => {
    const switchId = id || React.useId();
    const glowShadow =
      glow === 'primary'
        ? 'shadow-[0_0_16px_rgba(0,255,157,0.5)]'
        : glow === 'secondary'
          ? 'shadow-[0_0_16px_rgba(255,0,234,0.5)]'
          : 'shadow-[0_0_16px_rgba(0,212,255,0.5)]';
    const trackColor =
      glow === 'primary'
        ? 'bg-bet62-primary'
        : glow === 'secondary'
          ? 'bg-bet62-secondary'
          : 'bg-bet62-accent';
    const thumbGlow = checked ? glowShadow : '';
    return (
      <label
        htmlFor={switchId}
        className={cn(
          'inline-flex items-center gap-2.5 cursor-pointer select-none',
          disabled && 'opacity-50 cursor-not-allowed',
          className,
        )}
      >
        <span className="relative inline-flex h-6 w-11 shrink-0 items-center rounded-full bg-bet62-surface border border-bet62-border transition-colors duration-300">
          <input
            id={switchId}
            ref={ref}
            type="checkbox"
            className="peer sr-only"
            checked={checked}
            disabled={disabled}
            onChange={onChange}
            {...props}
          />
          <span
            className={cn(
              'absolute left-0.5 h-5 w-5 transform rounded-full bg-white transition-all duration-300',
              'peer-checked:translate-x-5',
              thumbGlow,
              `peer-checked:${trackColor.replace('bg-', '!bg-')}`,
              checked ? `${trackColor} ${glowShadow}` : '',
            )}
          />
          <span
            aria-hidden
            className={cn(
              'pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity peer-checked:opacity-100 blur-sm',
              trackColor,
            )}
          />
        </span>
        {label ? <span className="text-sm text-white/80">{label}</span> : null}
      </label>
    );
  },
);
Switch.displayName = 'Switch';
