'use client';

// Minhas apostas (modelo do repositório bet): separadores Em aberto · Resolvidas · Cash Out ·
// Anuladas com o número de bilhetes, e os bilhetes completos (ao vivo, cash out, partilhar).
import * as React from 'react';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';
import { api } from '../../stores/auth.store';
import { cn } from '../../lib/utils';
import { TicketCard, type TicketData } from './Ticket';

const TABS = [
  ['open', 'Em aberto', 'Sem apostas em aberto.'],
  ['settled', 'Resolvidas', 'Sem apostas resolvidas.'],
  ['cashout', 'Cash Out', 'Sem apostas com cash out.'],
  ['void', 'Anuladas', 'Sem apostas anuladas.'],
] as const;
type Tab = (typeof TABS)[number][0];
const inTab = (b: TicketData, t: Tab) =>
  t === 'open' ? b.status === 'open' || b.status === 'review' : t === 'cashout' ? b.status === 'cashout' : t === 'void' ? b.status === 'void' || b.status === 'rejected' : b.status === 'won' || b.status === 'lost';

/** `compact`: uma coluna (painel do cabeçalho). */
export function BetsSection({ compact = false, onNavigate }: { compact?: boolean; onNavigate?: () => void }) {
  const [tab, setTab] = React.useState<Tab>('open');
  const [bets, setBets] = React.useState<TicketData[] | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const load = React.useCallback(() => {
    api<{ bets: TicketData[] }>('/api/bets?status=all')
      .then((r) => {
        setBets(r.bets);
        setError(null);
      })
      .catch((e) => setError(e instanceof Error ? e.message : 'Erro ao carregar.'));
  }, []);
  // Bilhetes em aberto: atualizar o estado dos jogos e o cash out a cada 20 s.
  React.useEffect(() => {
    load();
    const t = setInterval(() => {
      if (document.visibilityState === 'visible') load();
    }, 20_000);
    window.addEventListener('bet62:bets-changed', load);
    return () => {
      clearInterval(t);
      window.removeEventListener('bet62:bets-changed', load);
    };
  }, [load]);
  const list = (bets ?? []).filter((b) => inTab(b, tab));
  const empty = TABS.find(([t]) => t === tab)![2];
  return (
    <div className="space-y-4">
      <div className="flex gap-0.5 overflow-x-auto border-b border-bet62-border [scrollbar-width:none]">
        {TABS.map(([t, label]) => {
          const n = (bets ?? []).filter((b) => inTab(b, t)).length;
          return (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={cn(
                'inline-flex shrink-0 items-center gap-1.5 border-b-2 px-3.5 py-2.5 text-[13.5px] font-extrabold',
                tab === t ? 'border-bet62-primary text-white' : 'border-transparent text-white/55 hover:text-white',
              )}
            >
              {label}
              {n > 0 && <b className="grid h-5 min-w-5 place-items-center rounded-full bg-bet62-primary px-1.5 text-[11px] text-onbrand">{n}</b>}
            </button>
          );
        })}
      </div>
      {error ? (
        <p className="text-sm text-rose-400">{error}</p>
      ) : bets === null ? (
        <div className="grid place-items-center py-16 text-white/60"><Loader2 className="animate-spin" /></div>
      ) : list.length === 0 ? (
        <div className="rounded-[14px] border border-bet62-border bg-bet62-surface-2 px-4 py-12 text-center text-white/55">
          <div className="text-[44px] opacity-40">🎟️</div>
          <p className="my-2">{empty}</p>
          {tab === 'open' && (
            <Link href="/desporto" onClick={onNavigate} className="inline-block rounded-xl border border-bet62-border px-4 py-2 text-sm font-bold text-white hover:bg-white/5">
              Escolher um jogo
            </Link>
          )}
        </div>
      ) : (
        <div className={cn('grid gap-3.5', !compact && 'lg:grid-cols-2')}>
          {list.map((b) => (
            <TicketCard key={b.id} b={b} onChanged={load} />
          ))}
        </div>
      )}
    </div>
  );
}
