'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Radio } from 'lucide-react';
import { formatOdds } from '../../lib/utils';
import { Badge } from '../ui/Badge';

export interface MarketsModalSelection {
  id: string;
  name: string;
  odds: number;
  status?: string;
}

export interface MarketsModalMarket {
  id: string;
  name: string;
  type?: string;
  status?: string;
  selections: MarketsModalSelection[];
}

export interface MarketsEvent {
  id: string;
  home: string;
  away: string;
  league: string;
  minute?: number;
  period?: string;
  live?: boolean;
  markets: MarketsModalMarket[];
}

interface EventMarketsModalProps {
  event: MarketsEvent | null;
  score?: [number | null | undefined, number | null | undefined];
  onClose: () => void;
  onSelect: (opts: { marketId: string; marketName: string; selectionId: string; selectionName: string; odds: number }) => void;
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
                  {score && (score[0] !== null && score[0] !== undefined) ? (
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
              {event.markets.length === 0 ? (
                <p className="text-sm text-white/50 text-center py-8">Sem mercados disponíveis para este evento neste momento.</p>
              ) : (
                event.markets.map((market) => (
                  <div key={market.id}>
                    <p className="text-xs uppercase tracking-wider text-white/50 font-semibold mb-2">{market.name}</p>
                    <div className={market.selections.length === 2 ? 'grid grid-cols-2 gap-2' : 'grid grid-cols-3 gap-2'}>
                      {market.selections.map((sel) => {
                        const disabled = sel.status === 'suspended' || !sel.odds || sel.odds < 1.01;
                        return (
                          <button
                            key={sel.id}
                            type="button"
                            disabled={disabled}
                            onClick={() => onSelect({ marketId: market.id, marketName: market.name, selectionId: sel.id, selectionName: sel.name, odds: sel.odds })}
                            className="rounded-xl py-3 px-2 border border-bet62-border hover:border-bet62-primary hover:bg-bet62-primary/8 transition-all group disabled:opacity-40 disabled:pointer-events-none"
                          >
                            <p className="text-[10px] uppercase text-white/50 truncate">{sel.name}</p>
                            <p className="font-mono font-bold text-bet62-primary group-hover:bg-bet62-primary group-hover:text-bet62-bg inline-block px-2 rounded-md mt-0.5 transition-all">
                              {disabled ? '—' : formatOdds(sel.odds)}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
