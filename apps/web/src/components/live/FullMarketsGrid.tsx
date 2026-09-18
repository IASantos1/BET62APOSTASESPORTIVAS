'use client';

import * as React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { cn } from '../../lib/utils';

export interface OddItem {
  name: string;
  price: number;
  suspended?: boolean;
  selectionId?: string;
  outcome?: string;
  trend?: 'up' | 'down' | null;
}

export interface MarketCategory {
  name: string;
  code?: string;
  odds: OddItem[];
  group?: string;
}

interface FullMarketsGridProps {
  matchId: string;
  categories?: MarketCategory[] | null;
  loading?: boolean;
  onSelectionClick?: (market: MarketCategory, odd: OddItem, index: number) => void;
}

function formatOdds(v: number): string {
  return v.toFixed(2).replace('.', ',');
}

export function FullMarketsGrid({ matchId, categories, loading, onSelectionClick }: FullMarketsGridProps) {
  const [list, setList] = React.useState<MarketCategory[]>([]);

  React.useEffect(() => {
    if (categories !== undefined) {
      setList(categories ?? []);
    }
  }, [matchId, categories]);

  const display = (categories ?? list) || [];

  if (loading && display.length === 0) {
    return (
      <div className="space-y-4">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="animate-pulse rounded-2xl border border-bet62-border bg-bet62-surface/20 h-28"
          />
        ))}
      </div>
    );
  }

  if (display.length === 0) {
    return (
      <div className="rounded-2xl border border-bet62-border bg-bet62-surface/20 p-8 text-center text-white/40">
        <p className="text-sm font-semibold mb-1">Sem mercados disponíveis</p>
        <p className="text-xs">Os mercados para esta partida serão publicados em breve.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {display.map((cat) => (
        <details key={cat.code || cat.name} open className="group rounded-2xl border border-bet62-border bg-bet62-surface/30 overflow-hidden">
          <summary className="font-bold text-bet62-primary cursor-pointer list-none px-4 py-3 flex items-center justify-between hover:bg-white/[0.02] transition select-none">
            <span className="flex items-center gap-2">
              {cat.name}
              <Badge variant="outline" className="py-0 px-2 text-[11px]">
                {cat.odds.length}
              </Badge>
            </span>
            <span className="text-white/50 text-sm group-open:rotate-90 transition-transform">›</span>
          </summary>
          <div className="px-4 pb-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {cat.odds.map((odd, i) => (
                <button
                  key={`${odd.selectionId || cat.code || cat.name}-${i}`}
                  type="button"
                  disabled={odd.suspended}
                  onClick={() => onSelectionClick?.(cat, odd, i)}
                  className={cn(
                    'h-11 rounded-lg border text-left px-2.5 py-1 flex flex-col items-start justify-center gap-0.5 transition-all relative',
                    odd.suspended
                      ? 'bg-gray-700/30 border-gray-600/50 text-gray-400 cursor-not-allowed'
                      : 'border-gray-200/30 hover:bg-red-50/10 hover:border-bet62-primary/40 bg-bet62-bg/40 active:scale-[0.98]',
                  )}
                >
                  {odd.suspended ? (
                    <Badge variant="danger" className="absolute top-1/2 right-1.5 -translate-y-1/2 py-0 px-1.5 text-[8px]">
                      Suspenso
                    </Badge>
                  ) : null}
                  <span
                    className={cn(
                      'text-[10px] leading-tight truncate max-w-full',
                      odd.suspended ? 'text-gray-400 pr-12' : 'text-white/70',
                    )}
                  >
                    {odd.name}
                  </span>
                  <span
                    className={cn(
                      'flex items-center gap-0.5 text-sm font-bold font-mono leading-none',
                      odd.suspended ? 'text-gray-500' : 'text-bet62-primary',
                    )}
                  >
                    {formatOdds(odd.price)}
                    {!odd.suspended && odd.trend === 'up' ? <ArrowUp size={11} className="text-emerald-400 shrink-0" /> : null}
                    {!odd.suspended && odd.trend === 'down' ? <ArrowDown size={11} className="text-red-400 shrink-0" /> : null}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
