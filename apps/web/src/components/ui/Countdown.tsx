'use client';

import * as React from 'react';
import { cn } from '../../lib/utils';

export function useCountdown(targetDate: Date | string | number | null) {
  // `now` so a este de "null" ate o primeiro efeito rodar (so no cliente, pos-
  // hidratacao) — inicializar com Date.now() direto no useState causaria
  // mismatch garantido de hidratacao, pois o render do servidor e o primeiro
  // render do cliente acontecem em instantes diferentes.
  const [now, setNow] = React.useState<number | null>(null);

  React.useEffect(() => {
    setNow(Date.now());
    if (!targetDate) return;
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, [targetDate]);

  if (!targetDate || now === null) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0, expired: false };
  }
  const t = new Date(targetDate).getTime() - now;
  const total = Math.max(0, t);
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / 1000 / 60 / 60) % 24);
  const days = Math.floor(total / 1000 / 60 / 60 / 24);
  return { days, hours, minutes, seconds, total, expired: total <= 0 };
}

const pad2 = (n: number) => n.toString().padStart(2, '0');

interface CountdownProps extends React.HTMLAttributes<HTMLDivElement> {
  target: Date | string | number | null;
  showDays?: boolean;
  variant?: 'neon' | 'minimal';
  size?: 'sm' | 'md' | 'lg';
}

export function Countdown({
  target,
  showDays = true,
  variant = 'neon',
  size = 'md',
  className,
  ...props
}: CountdownProps) {
  const { days, hours, minutes, seconds, expired } = useCountdown(target);
  const sizes = {
    sm: { cell: 'px-1.5 py-1 text-[11px]', sep: 'text-sm px-1' },
    md: { cell: 'px-2.5 py-1.5 text-sm', sep: 'text-base px-1.5' },
    lg: { cell: 'px-3.5 py-2.5 text-lg', sep: 'text-xl px-2' },
  };
  const s = sizes[size];

  if (expired) {
    return (
      <span className={cn('text-bet62-secondary font-semibold', className)}>
        AO VIVO
      </span>
    );
  }

  const unit = (val: number, label: string) => {
    if (variant === 'neon') {
      return (
        <div className="flex flex-col items-center">
          <span
            className={cn(
              'font-mono font-bold rounded-lg bg-bet62-surface/80 border border-bet62-primary/30 text-bet62-primary min-w-[2.2ch] text-center',
              s.cell,
            )}
          >
            {pad2(val)}
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-wider text-white/50">{label}</span>
        </div>
      );
    }
    return (
      <span className={cn('font-mono font-semibold text-white/90', s.cell)}>
        {pad2(val)}
        <span className="ml-1 text-[10px] uppercase tracking-wider text-white/40">{label}</span>
      </span>
    );
  };

  return (
    <div
      className={cn(
        'inline-flex items-center gap-0 tabular-nums',
        variant === 'minimal' ? 'gap-0' : 'gap-1',
        className,
      )}
      {...props}
    >
      {showDays ? (
        <>
          {unit(days, 'd')}
          <span className={cn('text-bet62-primary/60 font-bold', s.sep)}>:</span>
        </>
      ) : null}
      {unit(hours, 'h')}
      <span className={cn('text-bet62-primary/60 font-bold', s.sep)}>:</span>
      {unit(minutes, 'm')}
      <span className={cn('text-bet62-primary/60 font-bold', s.sep)}>:</span>
      {unit(seconds, 's')}
    </div>
  );
}
