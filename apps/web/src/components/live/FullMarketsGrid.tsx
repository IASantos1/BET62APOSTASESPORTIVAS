'use client';

import * as React from 'react';
import { Badge } from '../ui/Badge';
import { cn } from '../../lib/utils';

interface FullMarketsGridProps {
  matchId: string;
}

interface OddItem {
  name: string;
  price: number;
  suspended?: boolean;
}

interface MarketCategory {
  name: string;
  odds: OddItem[];
}

const MOCK_CATEGORIES: MarketCategory[] = [
  {
    name: 'Principais',
    odds: [
      { name: 'Benfica', price: 1.85 },
      { name: 'Empate', price: 3.40 },
      { name: 'Sporting', price: 4.20 },
      { name: 'Benfica ou Empate', price: 1.22 },
      { name: 'Sporting ou Empate', price: 1.95, suspended: true },
      { name: 'Benfica ou Sporting', price: 1.35 },
    ],
  },
  {
    name: 'Totais',
    odds: [
      { name: 'Mais de 0.5 Golos', price: 1.05 },
      { name: 'Menos de 0.5 Golos', price: 12.5 },
      { name: 'Mais de 1.5 Golos', price: 1.28 },
      { name: 'Menos de 1.5 Golos', price: 3.75 },
      { name: 'Mais de 2.5 Golos', price: 1.90 },
      { name: 'Menos de 2.5 Golos', price: 1.90 },
      { name: 'Mais de 3.5 Golos', price: 3.20 },
      { name: 'Menos de 3.5 Golos', price: 1.35 },
    ],
  },
  {
    name: 'Ambos Marcam',
    odds: [
      { name: 'Sim', price: 1.65 },
      { name: 'Não', price: 2.20 },
    ],
  },
  {
    name: 'Intervalo',
    odds: [
      { name: 'Benfica (1ºT)', price: 2.25 },
      { name: 'Empate (1ºT)', price: 2.10 },
      { name: 'Sporting (1ºT)', price: 3.60 },
      { name: 'Mais de 0.5 (1ºT)', price: 1.55 },
      { name: 'Menos de 0.5 (1ºT)', price: 2.40 },
    ],
  },
  {
    name: 'Handicap',
    odds: [
      { name: 'Benfica -1', price: 2.65 },
      { name: 'Empate -1', price: 3.30 },
      { name: 'Sporting -1', price: 2.55 },
      { name: 'Benfica +0.5', price: 1.40 },
      { name: 'Sporting +0.5', price: 2.95 },
    ],
  },
  {
    name: 'Resultados Exatos',
    odds: [
      { name: '1-0', price: 6.5 },
      { name: '2-0', price: 9.0 },
      { name: '2-1', price: 8.0 },
      { name: '1-1', price: 6.0 },
      { name: '0-1', price: 10.5 },
      { name: '1-2', price: 13.0 },
      { name: '0-0', price: 8.5, suspended: true },
      { name: '2-2', price: 15.0 },
    ],
  },
  {
    name: 'Cantos',
    odds: [
      { name: 'Mais de 8.5 Cantos', price: 1.85 },
      { name: 'Menos de 8.5 Cantos', price: 1.95 },
      { name: 'Mais de 10.5 Cantos', price: 2.50 },
      { name: 'Menos de 10.5 Cantos', price: 1.50 },
    ],
  },
  {
    name: 'Cartões',
    odds: [
      { name: 'Mais de 4.5 Cartões', price: 1.80 },
      { name: 'Menos de 4.5 Cartões', price: 2.00 },
      { name: 'Mais de 1 Cartão Amarelo Benfica', price: 1.60 },
      { name: 'Mais de 1 Cartão Amarelo Sporting', price: 1.70 },
    ],
  },
  {
    name: 'Jogadores',
    odds: [
      { name: 'Di María marca', price: 3.20 },
      { name: 'Gyokeres marca', price: 2.90 },
      { name: 'R. Silva marca', price: 4.50 },
      { name: 'P. Gonçalves marca', price: 5.25 },
    ],
  },
];

function formatOdds(v: number): string {
  return v.toFixed(2).replace('.', ',');
}

export function FullMarketsGrid({ matchId }: FullMarketsGridProps) {
  const [categories, setCategories] = React.useState<MarketCategory[]>([]);

  React.useEffect(() => {
    setCategories(MOCK_CATEGORIES);
  }, [matchId]);

  const list = categories.length > 0 ? categories : MOCK_CATEGORIES;

  return (
    <div className="space-y-4">
      {list.map((cat) => (
        <details key={cat.name} open className="group rounded-2xl border border-bet62-border bg-bet62-surface/30 overflow-hidden">
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
                  key={i}
                  type="button"
                  disabled={odd.suspended}
                  className={cn(
                    'h-16 rounded-xl border text-left px-3 py-2 flex flex-col justify-between transition-all relative',
                    odd.suspended
                      ? 'bg-gray-700/30 border-gray-600/50 text-gray-400 cursor-not-allowed'
                      : 'border-gray-200/30 hover:bg-red-50/10 hover:border-bet62-primary/40 bg-bet62-bg/40',
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
