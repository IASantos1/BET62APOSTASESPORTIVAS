'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Plus,
  Minus,
  Trash2,
  AlertCircle,
  Zap,
  ChevronRight,
  Ticket,
} from 'lucide-react';
import { cn, formatCurrencyEUR, formatOdds } from '../../lib/utils';
import { useBetslipStore, type BetslipSelection } from '../../stores/betslip.store';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/Tabs';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Switch } from '../ui/Switch';
import { Countdown } from '../ui/Countdown';

const QUICK_STAKES = [5, 10, 25, 50, 100];

function SelectionCard({ sel }: { sel: BetslipSelection }) {
  const remove = useBetslipStore((s) => s.removeSelection);
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 40 }}
      className="group relative rounded-xl border border-bet62-border bg-bet62-surface/60 p-3 space-y-2 hover:border-bet62-primary/40 transition"
    >
      <div className="flex items-start gap-2">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-mono text-white/50 truncate">{sel.eventName}</p>
          <p className="text-sm font-semibold truncate mt-0.5">{sel.selectionName}</p>
          <p className="text-[11px] text-white/50 mt-0.5">{sel.marketName}
            {sel.handicapValue !== undefined ? ` (${sel.handicapValue > 0 ? '+' : ''}${sel.handicapValue})` : ''}
            {sel.totalLineValue !== undefined ? ` (${sel.totalLineValue})` : ''}
          </p>
        </div>
        <div className="text-right shrink-0">
          <Badge variant="green" className="font-mono font-bold text-xs">
            @ {formatOdds(sel.odds)}
          </Badge>
        </div>
        <button
          onClick={() => remove(sel.id)}
          className="p-1.5 rounded-lg text-white/40 hover:text-bet62-danger hover:bg-bet62-danger/10 transition"
          aria-label="Remover seleção"
        >
          <X size={14} />
        </button>
      </div>
      <div className="flex items-center justify-between text-[11px]">
        <span className="inline-flex items-center gap-1.5 text-white/50">
          <Countdown target={sel.kickoffAt} size="sm" showDays={false} />
        </span>
      </div>
    </motion.div>
  );
}

interface BetslipProps {
  open?: boolean;
  onClose?: () => void;
  floating?: boolean;
}

export function Betslip({ open = true, onClose, floating = true }: BetslipProps) {
  const {
    selections,
    stakeAmount,
    totalOdds,
    potentialWin,
    acceptanceType,
    cashoutEnabled,
    setStake,
    clearSelections,
    setAcceptanceType,
    toggleCashoutEnabled,
  } = useBetslipStore();

  const [tab, setTab] = React.useState<'single' | 'multi'>(selections.length > 1 ? 'multi' : 'single');
  const [placing, setPlacing] = React.useState(false);
  const multiOdds = selections.reduce((a, s) => a * (Number(s.odds) || 1), 1);

  const active = tab === 'multi'
    ? { count: selections.length, odds: multiOdds, label: 'Múltipla' }
    : { count: Math.min(1, selections.length), odds: selections[0]?.odds ?? 1, label: 'Simples' };

  const effectiveOdds = active.odds;
  const potential = (stakeAmount ?? 0) * effectiveOdds;

  return (
    <AnimatePresence>
      {open ? (
        <motion.section
          initial={floating ? { x: '100%' } : { opacity: 0 }}
          animate={floating ? { x: 0 } : { opacity: 1 }}
          exit={floating ? { x: '100%' } : { opacity: 0 }}
          transition={floating ? { type: 'spring', damping: 32, stiffness: 280 } : { duration: 0.2 }}
          className={cn(
            'relative flex flex-col h-full bg-bet62-bg/95 backdrop-blur-xl border-l border-bet62-border',
            floating ? 'fixed right-0 top-0 h-screen w-[min(92vw,380px)] z-[70] shadow-[-12px_0_40px_rgba(0,0,0,0.4)]' : 'w-full h-full',
          )}
        >
          <header className="h-16 px-4 flex items-center justify-between border-b border-bet62-border shrink-0">
            <div className="flex items-center gap-2">
              <Ticket className="text-bet62-primary" size={18} />
              <h3 className="font-bold">Apostas</h3>
              <Badge variant="blue" className="ml-1 py-0">
                {selections.length}
              </Badge>
            </div>
            <div className="flex items-center gap-1">
              {selections.length > 0 ? (
                <button
                  onClick={() => clearSelections()}
                  className="p-2 rounded-lg text-xs text-white/50 hover:text-bet62-danger hover:bg-bet62-danger/10 transition inline-flex items-center gap-1"
                >
                  <Trash2 size={14} /> Limpar
                </button>
              ) : null}
              {floating && onClose ? (
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-white/5 text-white/70"
                  aria-label="Fechar boletim"
                >
                  <X size={18} />
                </button>
              ) : null}
            </div>
          </header>

          {selections.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
              <div className="h-20 w-20 rounded-2xl border border-dashed border-bet62-primary/30 bg-bet62-primary/5 inline-flex items-center justify-center mb-4">
                <Zap className="text-bet62-primary animate-pulse-slow" size={32} />
              </div>
              <h4 className="font-semibold text-lg">O teu boletim está vazio</h4>
              <p className="mt-1 text-sm text-white/60 max-w-xs">
                Clica nas odds dos eventos para adicionar seleções e cria a tua aposta.
              </p>
            </div>
          ) : (
            <>
              <Tabs value={tab} onValueChange={(v) => setTab(v as 'single' | 'multi')} className="p-3 border-b border-bet62-border/60 shrink-0">
                <TabsList className="w-full">
                  <TabsTrigger value="single" className="flex-1">
                    Simples {selections.length ? `(${Math.min(1, selections.length)})` : ''}
                  </TabsTrigger>
                  <TabsTrigger value="multi" className="flex-1">
                    Múltipla ({selections.length})
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2">
                <AnimatePresence initial={false}>
                  {(tab === 'single' && selections[0]
                    ? [selections[0]]
                    : selections
                  ).map((s) => (
                    <SelectionCard key={s.id} sel={s} />
                  ))}
                </AnimatePresence>
              </div>

              <div className="border-t border-bet62-border/60 p-4 shrink-0 space-y-3 bg-bet62-surface/40">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/60">Total Odds ({active.label})</span>
                  <span className="font-mono font-bold text-bet62-primary">{formatOdds(effectiveOdds)}</span>
                </div>

                <div>
                  <label className="text-xs text-white/60 mb-1.5 block">Valor da Aposta (€)</label>
                  <div className="flex items-stretch gap-2">
                    <div className="flex-1 relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 font-mono text-sm">€</span>
                      <input
                        type="number"
                        step="0.01"
                        min={0}
                        value={stakeAmount ?? ''}
                        onChange={(e) =>
                          setStake(
                            e.target.value === '' ? null : Math.max(0, Number(e.target.value)),
                          )
                        }
                        className="w-full h-11 pl-8 pr-3 rounded-xl bg-bet62-bg border border-bet62-border focus:border-bet62-primary focus:ring-2 focus:ring-bet62-primary/20 outline-none font-mono text-sm"
                        placeholder="0.00"
                      />
                    </div>
                    <button
                      onClick={() => setStake((stakeAmount ?? 0) - 5 < 0 ? 0 : (stakeAmount ?? 0) - 5)}
                      className="w-11 rounded-xl border border-bet62-border hover:border-bet62-primary/40 hover:bg-white/5 transition inline-flex items-center justify-center text-white/70"
                      aria-label="Diminuir"
                    >
                      <Minus size={14} />
                    </button>
                    <button
                      onClick={() => setStake((stakeAmount ?? 0) + 5)}
                      className="w-11 rounded-xl border border-bet62-border hover:border-bet62-primary/40 hover:bg-white/5 transition inline-flex items-center justify-center text-white/70"
                      aria-label="Aumentar"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <div className="mt-2 grid grid-cols-5 gap-1.5">
                    {QUICK_STAKES.map((q) => (
                      <button
                        key={q}
                        onClick={() => setStake(q)}
                        className={cn(
                          'h-8 rounded-lg text-xs font-mono font-semibold border transition',
                          stakeAmount === q
                            ? 'bg-bet62-primary/15 border-bet62-primary/50 text-bet62-primary'
                            : 'border-bet62-border bg-bet62-bg text-white/70 hover:border-bet62-primary/30 hover:text-white',
                        )}
                      >
                        €{q}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div>
                    <p className="text-xs text-white/60">Retorno Potencial</p>
                    <p className="text-xl font-mono font-bold text-bet62-primary">
                      {formatCurrencyEUR(potential)}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-xs text-white/50">Lucro Potencial</p>
                      <p className="text-sm font-mono font-semibold">
                        {formatCurrencyEUR(Math.max(0, potential - (stakeAmount ?? 0)))}
                      </p>
                    </div>
                    <ChevronRight className="text-white/40" size={16} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div>
                    <p className="text-xs text-white/60 mb-1.5">Aceitação</p>
                    <select
                      value={acceptanceType}
                      onChange={(e) => setAcceptanceType(e.target.value as never)}
                      className="w-full h-9 px-3 rounded-lg bg-bet62-bg border border-bet62-border text-sm outline-none focus:border-bet62-primary/50"
                    >
                      <option value="ACCEPT_ALL">Todas as odds</option>
                      <option value="ACCEPT_HIGHER">Apenas superiores</option>
                      <option value="ACCEPT_ANY">Qualquer alteração</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-end">
                    <Switch
                      label="Cash-out"
                      checked={cashoutEnabled}
                      onChange={(e) => toggleCashoutEnabled()}
                    />
                  </div>
                </div>

                {(stakeAmount ?? 0) < 0.1 && stakeAmount !== null ? (
                  <div className="flex items-start gap-2 text-xs text-bet62-warning bg-bet62-warning/10 border border-bet62-warning/20 rounded-xl p-2.5">
                    <AlertCircle size={14} className="shrink-0 mt-0.5" />
                    <span>Aposta mínima de €0,10. Adiciona um valor maior para continuar.</span>
                  </div>
                ) : null}

                <Button
                  variant="glow"
                  size="lg"
                  loading={placing}
                  disabled={(stakeAmount ?? 0) < 0.1 || active.count < 1}
                  onClick={async () => {
                    setPlacing(true);
                    await new Promise((r) => setTimeout(r, 900));
                    setPlacing(false);
                  }}
                  className="w-full"
                >
                  <Zap size={16} />
                  Confirmar Aposta
                </Button>
                <p className="text-[10px] text-white/40 text-center leading-relaxed">
                  Ao confirmar aceitas os Termos e Regras de Apostas da BET62. Aposta só é válida após confirmação no sistema.
                </p>
              </div>
            </>
          )}
        </motion.section>
      ) : null}
    </AnimatePresence>
  );
}

export function FloatingBetslipToggle({ onClick, open }: { onClick: () => void; open: boolean }) {
  const count = useBetslipStore((s) => s.selections.length);
  if (open) return null;
  return (
    <button
      onClick={onClick}
      className="fixed bottom-5 right-5 z-[65] h-14 w-14 rounded-full bg-bet62-primary text-bet62-bg shadow-lg inline-flex items-center justify-center hover:brightness-110 transition"
      aria-label="Abrir boletim"
    >
      <Ticket size={22} />
      {count > 0 ? (
        <span className="absolute -top-1 -right-1 h-6 min-w-[24px] px-1.5 rounded-full bg-bet62-danger text-white text-[11px] font-bold inline-flex items-center justify-center border-2 border-bet62-bg">
          {count}
        </span>
      ) : null}
    </button>
  );
}
