'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRightLeft, Shield, Radio } from 'lucide-react';
import { cn, formatOdds } from '../../lib/utils';
import { Badge } from '../ui/Badge';

export interface MarketsEvent {
  id: string;
  home: string;
  away: string;
  league: string;
  minute?: number;
  period?: string;
  live?: boolean;
  odds: {
    o1?: number;
    oX?: number;
    o2?: number;
    ou?: [number, number];
    btts?: [number, number];
    dc?: [number, number, number];
  };
}

interface EventMarketsModalProps {
  event: MarketsEvent | null;
  score?: [number, number];
  onClose: () => void;
  onSelect: (opts: { market: string; sel: string; odds: number; selName: string; marketName: string }) => void;
}

export function EventMarketsModal({ event, score, onClose, onSelect }: EventMarketsModalProps) {
  return (
    <AnimatePresence>
      {event ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm z-[80]"
          />
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed inset-x-0 bottom-0 md:inset-x-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-[81] w-full md:w-[560px] max-h-[88vh] md:max-h-[80vh] flex flex-col rounded-t-3xl md:rounded-3xl border border-bet62-border bg-bet62-surface/98 backdrop-blur-xl shadow-glass overflow-hidden"
          >
            <div className="shrink-0 p-4 md:p-5 border-b border-bet62-border pt-[max(1rem,env(safe-area-inset-top))] md:pt-5">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-xs">
                    <Badge variant="outline" className="py-0">{event.league}</Badge>
                    {event.live ? (
                      <Badge variant="green" dot className="py-0 px-2">
                        <Radio size={10} /> LIVE · {event.period || `${event.minute}'`}
                      </Badge>
                    ) : null}
                  </div>
                  <h2 className="mt-2 text-lg md:text-xl font-black tracking-tight truncate">
                    {event.home} <span className="text-white/40 font-normal">vs</span> {event.away}
                  </h2>
                  {score ? (
                    <p className="mt-0.5 font-mono font-bold text-bet62-primary text-sm">{score[0]} – {score[1]}</p>
                  ) : null}
                </div>
                <button
                  onClick={onClose}
                  className="shrink-0 p-2 rounded-xl hover:bg-white/5 text-white/60 hover:text-white transition"
                  aria-label="Fechar mercados"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 md:p-5 space-y-5">
              <div>
                <p className="text-xs uppercase tracking-wider text-white/50 font-semibold mb-2">Resultado Final (1X2)</p>
                <div className="grid grid-cols-3 gap-2">
                  {([
                    ['1', event.home, event.odds.o1],
                    ['X', 'Empate', event.odds.oX],
                    ['2', event.away, event.odds.o2],
                  ] as const).map(([key, selName, v]) =>
                    v === undefined ? null : (
                      <button
                        key={key}
                        onClick={() => onSelect({ market: '1x2', sel: key, odds: v, selName, marketName: 'Resultado Final' })}
                        className="rounded-xl py-3 border border-bet62-border hover:border-bet62-primary hover:bg-bet62-primary/8 transition-all group"
                      >
                        <p className="text-[10px] uppercase text-white/50">{key}</p>
                        <p className="font-mono font-bold text-bet62-primary group-hover:bg-bet62-primary group-hover:text-bet62-bg inline-block px-2 rounded-md mt-0.5 transition-all">
                          {formatOdds(v)}
                        </p>
                      </button>
                    ),
                  )}
                </div>
              </div>

              {event.odds.dc ? (
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/50 font-semibold mb-2">Dupla Hipótese</p>
                  <div className="grid grid-cols-3 gap-2">
                    {([
                      ['1X', `${event.home} ou Empate`, event.odds.dc[0]],
                      ['12', `${event.home} ou ${event.away}`, event.odds.dc[1]],
                      ['X2', `Empate ou ${event.away}`, event.odds.dc[2]],
                    ] as const).map(([key, selName, v]) => (
                      <button
                        key={key}
                        onClick={() => onSelect({ market: 'dc', sel: key, odds: v, selName, marketName: 'Dupla Hipótese' })}
                        className="rounded-xl py-3 border border-bet62-border hover:border-bet62-accent hover:bg-bet62-accent/8 transition-all group"
                      >
                        <p className="text-[10px] uppercase text-white/50">{key}</p>
                        <p className="font-mono font-bold text-bet62-accent group-hover:bg-bet62-accent group-hover:text-bet62-bg inline-block px-2 rounded-md mt-0.5 transition-all">
                          {formatOdds(v)}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}

              {event.odds.ou ? (
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/50 font-semibold mb-2">Mais/Menos 2.5 Golos</p>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelect({ market: 'ou', sel: 'over', odds: event.odds.ou![0], selName: 'Mais de 2.5', marketName: 'Mais/Menos 2.5 Golos' })}
                      className="rounded-xl py-2.5 border border-bet62-border hover:border-bet62-accent hover:bg-bet62-accent/8 transition text-sm"
                    >
                      <span className="text-white/60 text-xs">+2.5 </span>
                      <span className="font-mono font-bold text-bet62-accent">{formatOdds(event.odds.ou[0])}</span>
                    </button>
                    <button
                      onClick={() => onSelect({ market: 'ou', sel: 'under', odds: event.odds.ou![1], selName: 'Menos de 2.5', marketName: 'Mais/Menos 2.5 Golos' })}
                      className="rounded-xl py-2.5 border border-bet62-border hover:border-bet62-accent hover:bg-bet62-accent/8 transition text-sm"
                    >
                      <span className="text-white/60 text-xs">-2.5 </span>
                      <span className="font-mono font-bold text-bet62-accent">{formatOdds(event.odds.ou[1])}</span>
                    </button>
                  </div>
                </div>
              ) : null}

              {event.odds.btts ? (
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/50 font-semibold mb-2">Ambas as Equipas Marcam</p>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelect({ market: 'btts', sel: 'yes', odds: event.odds.btts![0], selName: 'Sim', marketName: 'Ambas Marcam' })}
                      className={cn('rounded-xl py-2.5 border border-bet62-border hover:border-bet62-secondary hover:bg-bet62-secondary/8 transition text-sm flex items-center justify-center gap-2')}
                    >
                      <ArrowRightLeft size={13} className="text-bet62-secondary" />
                      <span className="font-mono font-bold text-bet62-secondary">Sim {formatOdds(event.odds.btts[0])}</span>
                    </button>
                    <button
                      onClick={() => onSelect({ market: 'btts', sel: 'no', odds: event.odds.btts![1], selName: 'Não', marketName: 'Ambas Marcam' })}
                      className="rounded-xl py-2.5 border border-bet62-border hover:border-bet62-secondary hover:bg-bet62-secondary/8 transition text-sm flex items-center justify-center gap-2"
                    >
                      <Shield size={13} className="text-white/60" />
                      <span className="font-mono font-bold text-white/75">Não {formatOdds(event.odds.btts[1])}</span>
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
