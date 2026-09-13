'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Target,
  CircleDot,
  Swords,
  Gauge,
  Trophy,
  Flame,
  Bike,
  Dumbbell,
  Boxes,
  Gamepad2,
  BadgePercent,
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { Badge } from '../ui/Badge';

const SPORTS = [
  { label: 'Futebol', icon: CircleDot, live: 12, count: 387, href: '/events?sport=football' },
  { label: 'Basquete', icon: CircleDot, live: 5, count: 142, href: '/events?sport=basketball' },
  { label: 'Tênis', icon: Target, live: 3, count: 91, href: '/events?sport=tennis' },
  { label: 'Voleibol', icon: CircleDot, live: 2, count: 67, href: '/events?sport=volleyball' },
  { label: 'Hóquei em Gelo', icon: CircleDot, live: 2, count: 48, href: '/events?sport=hockey' },
  { label: 'UFC / MMA', icon: Swords, live: 1, count: 22, href: '/events?sport=mma' },
  { label: 'Fórmula 1', icon: Gauge, live: 0, count: 11, href: '/events?sport=f1' },
  { label: 'Dardos', icon: Trophy, live: 1, count: 33, href: '/events?sport=darts' },
  { label: 'Crickete', icon: Flame, live: 2, count: 41, href: '/events?sport=cricket' },
  { label: 'Ciclismo', icon: Bike, live: 0, count: 18, href: '/events?sport=cycling' },
  { label: 'eSports', icon: Gamepad2, live: 6, count: 124, href: '/events?sport=esports' },
  { label: 'Boxe', icon: Dumbbell, live: 0, count: 9, href: '/events?sport=boxing' },
  { label: 'Outros', icon: Boxes, live: 0, count: 76, href: '/events?sport=others' },
];

interface SidebarProps {
  compact?: boolean;
  className?: string;
}

export function Sidebar({ compact = false, className }: SidebarProps) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = React.useState(false);

  const active = pathname.startsWith('/events');

  return (
    <aside
      className={cn(
        'relative shrink-0 border-r border-bet62-border bg-bet62-bg/60 backdrop-blur-xl overflow-hidden',
        compact ? 'hidden xl:block w-64' : 'w-full max-w-xs mx-auto',
        className,
      )}
    >
      <div className="p-4 flex items-center justify-between border-b border-bet62-border/60">
        <div className="flex items-center gap-2">
          <BadgePercent size={16} className="text-bet62-secondary" />
          <h3 className="font-bold text-sm tracking-wide uppercase">Esportes</h3>
        </div>
        <button
          onClick={() => setCollapsed((v) => !v)}
          className="text-xs text-white/50 hover:text-bet62-primary transition px-2 py-1 rounded-lg hover:bg-white/5"
          aria-label="Colapsar sidebar"
        >
          {collapsed ? '+' : '−'}
        </button>
      </div>
      <nav className={cn('p-2 space-y-0.5 transition-all', collapsed ? 'max-h-40 overflow-hidden' : '')}>
        {SPORTS.map((s) => {
          const isLive = s.live > 0;
          return (
            <Link
              key={s.label}
              href={s.href}
              className={cn(
                'group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all',
                active
                  ? 'bg-white/5 text-white'
                  : 'text-white/75 hover:text-white hover:bg-white/5',
              )}
            >
              <s.icon
                size={18}
                className={cn(
                  'transition-colors',
                  isLive ? 'text-bet62-primary' : 'text-white/60 group-hover:text-bet62-primary',
                )}
              />
              <span className="flex-1 font-medium">{s.label}</span>
              <span className="flex items-center gap-1.5">
                {isLive ? (
                  <Badge variant="green" dot className="py-0 text-[10px]">
                    {s.live}
                  </Badge>
                ) : null}
                <span className="text-xs font-mono text-white/40 w-8 text-right">{s.count}</span>
              </span>
            </Link>
          );
        })}
        {collapsed ? (
          <div className="relative pt-1 pb-2 px-3 text-center">
            <div className="absolute inset-x-0 -top-8 h-8 bg-gradient-to-b from-transparent to-bet62-bg pointer-events-none" />
            <button
              onClick={() => setCollapsed(false)}
              className="text-xs text-bet62-primary hover:underline underline-offset-2"
            >
              Mostrar todos
            </button>
          </div>
        ) : null}
      </nav>
      <div className="p-4 border-t border-bet62-border/60 space-y-3">
        <div className="rounded-2xl p-4 bg-gradient-to-br from-bet62-secondary/15 via-bet62-bg to-bet62-primary/10 border border-bet62-border">
          <div className="flex items-center gap-2 text-bet62-secondary font-bold text-sm">
            <Flame size={16} className="animate-pulse-slow" /> APENAS HOJE
          </div>
          <p className="mt-1.5 text-sm font-semibold">200% até €500 em Recarga</p>
          <p className="text-xs text-white/60 mt-1">Deposite hoje e receba o dobro em bónus.</p>
          <button className="mt-3 w-full py-2 rounded-xl text-xs font-bold text-bet62-bg bg-bet62-primary hover:brightness-110 transition">
            QUERO O BÓNUS
          </button>
        </div>
      </div>
    </aside>
  );
}
