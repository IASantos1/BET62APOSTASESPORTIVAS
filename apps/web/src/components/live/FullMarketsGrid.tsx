'use client';

import * as React from 'react';
import { Badge } from '../ui/Badge';
import { cn } from '../../lib/utils';

export interface OddItem {
  name: string;
  price: number;
  suspended?: boolean;
  selectionId?: string;
  outcome?: string;
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {cat.odds.map((odd, i) => (
                <button
                  key={`${odd.selectionId || cat.code || cat.name}-${i}`}
                  type="button"
                  disabled={odd.suspended}
                  onClick={() => onSelectionClick?.(cat, odd, i)}
                  className={cn(
                    'h-16 rounded-xl border text-left px-3 py-2 flex flex-col justify-between transition-all relative',
                    odd.suspended
                      ? 'bg-gray-700/30 border-gray-600/50 text-gray-400 cursor-not-allowed'
                      : 'border-gray-200/30 hover:bg-red-50/10 hover:border-bet62-primary/40 bg-bet62-bg/40 active:scale-[0.98]',
                  )}
                >
                  {odd.suspended ? (
                    <Badge variant="danger" className="absolute top-1.5 right-1.5 py-0 px-1.5 text-[9px]">
                      Suspenso
                    </Badge>
                  ) : null}
                  <span className={cn('text-sm truncate pr-10', odd.suspended ? 'text-gray-400' : 'text-white/90')}>
                    {odd.name}
                  </span>
                  <span
                    className={cn(
                      'text-2xl font-bold font-mono leading-none',
                      odd.suspended ? 'text-gray-500' : 'text-bet62-primary',
                    )}
                  >
                    {formatOdds(odd.price)}
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
