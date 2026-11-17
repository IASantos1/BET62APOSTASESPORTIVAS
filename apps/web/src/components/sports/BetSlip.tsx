'use client';

// Boletim do lado direito (como no outro projeto): Simples / Múltipla, ou um criador de apostas.
// Ainda só no navegador: o botão de apostar avisa que o registo de apostas não está ligado.
import * as React from 'react';
import { TrackerFrame } from './TrackerFrame';
import { Ticket, X, Trash2 } from 'lucide-react';
import { useBoard } from '../../lib/board';
import { useSlip } from '../../stores/slip.store';
import { cn } from '../../lib/utils';
import { fmtOdds } from './links';

function SlipBody() {
  const { picks, builder, mode, stake, setMode, setStake, remove, clear, setOpen } = useSlip();
  const { events } = useBoard();
  const [notice, setNotice] = React.useState<string | null>(null);
  const unavailable = React.useMemo(() => {
    const result = new Map<string, string>();
    const legs = builder?.legs ?? picks;
    for (const pick of legs) {
      const event = events.find((item) => item.id === pick.eventId);
      const outcome = event?.markets[pick.marketId]?.[pick.variant]?.[pick.outcomeId];
      if (outcome?.b === 1) result.set(pick.key, 'Suspenso');
      else if (outcome && Number(outcome.k) <= 1) result.set(pick.key, 'Indisponível');
    }
    return result;
  }, [builder, events, picks]);
  const count = builder ? builder.legs.length : picks.length;
  const total = builder ? builder.odds : mode === 'multiple' ? picks.reduce((p, x) => p * x.odds, 1) : 0;
  const totalStake = builder || mode === 'multiple' ? stake : stake * picks.length;
  const ret = builder || mode === 'multiple' ? stake * total : picks.reduce((s, p) => s + stake * p.odds, 0);

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-bet62-border px-4 py-3">
        <div>
          <p className="text-sm font-black tracking-wide">BOLETIM</p>
          <p className="text-xs text-white/50">{count} {count === 1 ? 'seleção' : 'seleções'}</p>
        </div>
        <div className="flex items-center gap-1">
          {count > 0 && (
            <button onClick={clear} className="rounded-md p-2 text-white/50 hover:text-white" aria-label="Limpar">
              <Trash2 size={16} />
            </button>
          )}
          <button onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center rounded-lg bg-white/5 text-white/70 hover:text-white xl:hidden" aria-label="Fechar boletim">
            <X size={20} />
          </button>
        </div>
      </div>
      {!builder && (
        <div className="grid grid-cols-2 gap-1 p-2">
          {(['single', 'multiple'] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={cn('rounded-lg py-2 text-xs font-semibold', mode === m ? 'bg-bet62-primary text-onbrand' : 'bg-white/5 text-white/60')}
            >
              {m === 'single' ? 'Simples' : 'Múltipla'}
            </button>
          ))}
        </div>
      )}
      <div className="flex-1 overflow-y-auto px-2 space-y-2">
        {builder ? (
          <div className="rounded-xl border border-bet62-border bg-bet62-surface/60 p-3 text-sm">
            <p className="text-[11px] uppercase tracking-widest text-bet62-primary">Criador de apostas</p>
            <p className="mt-1 font-semibold">{builder.match}</p>
            <ul className="mt-2 space-y-1 text-xs text-white/70">
              {builder.legs.map((l) => (
                <li key={l.key}>
                  {l.marketName}: <b className="text-white">{l.label}</b>
                  {unavailable.has(l.key) && <span className="ml-2 font-semibold text-amber-300">{unavailable.get(l.key)}</span>}
                </li>
              ))}
            </ul>
          </div>
        ) : picks.length === 0 ? (
          <div className="py-10 text-center text-sm text-white/45">
            <Ticket className="mx-auto mb-2 text-white/25" />
            Escolha uma odd para começar.
          </div>
        ) : (
          picks.map((p) => (
            <div key={p.key} className="rounded-xl border border-bet62-border bg-bet62-surface/60 p-3 text-sm">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="font-semibold truncate">{p.label}</p>
                  <p className="text-xs text-white/50 truncate">{p.marketName}</p>
                  <p className="text-xs text-white/40 truncate">{p.match}</p>
                  {unavailable.has(p.key) && <p className="mt-1 text-xs font-semibold text-amber-300">{unavailable.get(p.key)} no feed atual</p>}
                </div>
                <div className="flex items-center gap-2">
                  <b className="font-mono text-bet62-primary">{fmtOdds(p.odds)}</b>
                  <button onClick={() => remove(p.key)} className="text-white/40 hover:text-white" aria-label="Remover">
                    <X size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {count > 0 && (
        <div className="space-y-2 border-t border-bet62-border p-3 text-sm">
          {(builder || mode === 'multiple') && (
            <div className="flex justify-between">
              <span className="text-white/60">Cotação total</span>
              <b className="font-mono">{fmtOdds(total)}</b>
            </div>
          )}
          <label className="flex items-center justify-between gap-2">
            <span className="text-white/60">{builder || mode === 'multiple' ? 'Valor' : 'Valor por aposta'}</span>
            <StakeInput value={stake} onChange={setStake} />
          </label>
          <div className="grid grid-cols-4 gap-1.5">
            {[5, 10, 20, 50].map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setStake(v)}
                className={cn('rounded-lg border py-1.5 text-xs font-bold', stake === v ? 'border-bet62-primary text-bet62-primary' : 'border-bet62-border text-white/70 hover:text-white')}
              >
                {v} €
              </button>
            ))}
          </div>
          <div className="flex justify-between text-xs text-white/50">
            <span>Total apostado</span>
            <span className="font-mono">{totalStake.toFixed(2)} €</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/60">Retorno potencial</span>
            <b className="font-mono text-emerald-400">{ret.toFixed(2)} €</b>
          </div>
          <button
            disabled={unavailable.size > 0}
            onClick={() => setNotice('O registo de apostas ainda não está ligado.')}
            className={cn(
              'w-full rounded-xl bg-bet62-primary py-2.5 font-bold text-onbrand hover:bg-bet62-primary-600',
              unavailable.size > 0 && 'cursor-not-allowed opacity-50',
            )}
          >
            Apostar
          </button>
          {unavailable.size > 0 && <p className="text-xs text-amber-300">Remova ou aguarde a reabertura das seleções indisponíveis.</p>}
          {notice && <p className="text-xs text-amber-300">{notice}</p>}
        </div>
      )}
    </div>
  );
}

/**
 * Valor livre: o campo começa vazio (sem o 0 a atrapalhar), aceita só números e vírgula/ponto,
 * nunca valores negativos.
 */
function StakeInput({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  const [text, setText] = React.useState(value > 0 ? String(value).replace('.', ',') : '');
  React.useEffect(() => {
    const parsed = Number(text.replace(',', '.'));
    if (value !== parsed && !(value === 0 && text === '')) setText(value > 0 ? String(value).replace('.', ',') : '');
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="flex items-center gap-1 rounded-lg border border-bet62-border bg-bet62-bg px-2 focus-within:border-bet62-primary">
      <input
        type="text"
        inputMode="decimal"
        autoComplete="off"
        placeholder="0,00"
        value={text}
        onFocus={(e) => e.currentTarget.select()}
        onChange={(e) => {
          const clean = e.target.value.replace(/[^0-9.,]/g, '').replace('.', ',').replace(/,(?=.*,)/g, '');
          const [int, dec] = clean.split(',');
          const next = dec !== undefined ? `${int.slice(0, 7)},${dec.slice(0, 2)}` : int.slice(0, 7);
          setText(next);
          const n = Number(next.replace(',', '.'));
          onChange(Number.isFinite(n) && n > 0 ? n : 0);
        }}
        className="w-20 bg-transparent py-1.5 text-right font-mono outline-none"
        aria-label="Valor da aposta"
      />
      <span className="text-xs text-white/50">€</span>
    </div>
  );
}

export function BetSlip({
  trackerUrl,
  trackerActive,
  trackerWidthPx,
  trackerHeightPx,
  trackerScalePct,
}: {
  trackerUrl?: string | null;
  trackerActive?: boolean;
  trackerWidthPx?: number | null;
  trackerHeightPx?: number | null;
  trackerScalePct?: number | null;
}) {
  const { open, setOpen, picks, builder } = useSlip();
  const count = builder ? builder.legs.length : picks.length;
  const [ready, setReady] = React.useState(false);
  React.useEffect(() => setReady(true), []);
  return (
    <>
      <aside
        id="bet-slip"
        className="hidden w-80 shrink-0 border-l border-bet62-border bg-bet62-bg/60 xl:block"
        style={trackerActive ? { width: `${trackerWidthPx ?? 360}px`, maxWidth: '60vw' } : undefined}
      >
        <div className="sticky top-16 flex h-[calc(100vh-4rem)] flex-col">
          {/* PC: o minicampo fica no topo da coluna, entre o menu superior e o boletim. */}
          {ready && trackerActive && (
            <div className="shrink-0 border-b border-bet62-border bg-bet62-bg">
              {trackerUrl ? (
                <TrackerFrame src={trackerUrl} title="Minicampo do jogo" mode="desktop" heightPx={trackerHeightPx} scalePct={trackerScalePct} />
              ) : (
                <p className="p-3 text-xs text-white/60">Minicampo não disponível para este jogo.</p>
              )}
            </div>
          )}
          <div className="min-h-0 flex-1">{ready && <SlipBody />}</div>
        </div>
      </aside>
      {/* Telemóvel / tablet: botão flutuante e gaveta */}
      {ready && count > 0 && !open && (
        <button
          onClick={() => setOpen(true)}
          className="xl:hidden fixed bottom-[calc(76px+env(safe-area-inset-bottom))] lg:bottom-4 right-4 z-40 flex items-center gap-2 rounded-full bg-bet62-primary px-4 py-3 font-bold text-onbrand shadow-lg"
        >
          <Ticket size={18} /> Boletim <span className="rounded-full bg-white/20 px-2 text-xs">{count}</span>
        </button>
      )}
      {ready && open && (
        <div className="xl:hidden fixed inset-0 z-[60] flex justify-end bg-black/60" onClick={() => setOpen(false)}>
          <div
            className="h-full w-full max-w-sm border-l border-bet62-border bg-bet62-bg"
            style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <SlipBody />
          </div>
        </div>
      )}
    </>
  );
}
