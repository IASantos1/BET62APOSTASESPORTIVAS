'use client';

import * as React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { cn } from '../../lib/utils';

export type OddsTrend = 'up' | 'down' | null;

export interface OddsButtonProps {
  label: string;
  price: number | null;
  placeholder?: string;
  disabled?: boolean;
  trend?: OddsTrend;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

function formatPrice(v: number): string {
  return v.toFixed(2).replace('.', ',');
}

/**
 * Botao de odd padronizado (altura + tamanho de fonte fixos) usado em todos
 * os cartoes de evento (home, /live, mercado completo) para evitar que o
 * nome da selecao/equipa "vaze" para fora do botao e para manter o mesmo
 * tamanho em todas as paginas.
 */
export const OddsButton = React.forwardRef<HTMLButtonElement, OddsButtonProps>(
  ({ label, price, placeholder = '—', disabled, trend, onClick, className }, ref) => {
    const hasPrice = price !== null && Number.isFinite(price) && price > 1;
    return (
      <button
        ref={ref}
        type="button"
        onClick={onClick}
        disabled={disabled || !hasPrice}
        className={cn(
          'h-11 w-full rounded-lg border px-2 py-1 flex flex-col items-center justify-center gap-0.5 text-center transition',
          disabled || !hasPrice
            ? 'bg-bet62-bg/40 border-bet62-border/40 opacity-60 cursor-not-allowed'
            : 'bg-bet62-bg/60 border-bet62-border/60 hover:border-bet62-primary/50 hover:bg-bet62-primary/10 active:scale-[0.98]',
          className,
        )}
      >
        <span className="text-[10px] leading-tight uppercase tracking-wide text-white/50 truncate max-w-full">
          {label}
        </span>
        <span
          className={cn(
            'flex items-center gap-0.5 font-mono text-sm font-bold leading-none max-w-full',
            hasPrice ? 'text-bet62-primary' : 'text-white/30 text-[9px] normal-case tracking-normal font-semibold truncate',
          )}
        >
          {hasPrice ? formatPrice(price as number) : placeholder}
          {hasPrice && trend === 'up' ? <ArrowUp size={11} className="text-emerald-400 shrink-0" /> : null}
          {hasPrice && trend === 'down' ? <ArrowDown size={11} className="text-red-400 shrink-0" /> : null}
        </span>
      </button>
    );
  },
);
OddsButton.displayName = 'OddsButton';
