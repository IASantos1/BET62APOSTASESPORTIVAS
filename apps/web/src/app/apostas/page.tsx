'use client';

// Minhas Apostas: bilhetes em aberto e liquidados do jogador (servidor: /api/bets).
import * as React from 'react';
import Link from 'next/link';
import { Loader2, Ticket } from 'lucide-react';
import { AccountShell, Panel } from '../../components/account/AccountShell';
import { api } from '../../stores/auth.store';
import { cn, formatCurrencyEUR } from '../../lib/utils';

interface Leg {
  eventId: string;
  event: string;
  live: boolean;
  startTime: string | null;
  market: string;
  outcome: string;
  odds: number;
  status: string;
}
interface Bet {
  id: string;
  kind: 'single' | 'multiple';
  stake: number;
  odds: number;
  potential: number;
  status: string;
  payout: number;
  createdAt: string;
  settledAt: string | null;
  legs: Leg[];
}

const STATUS: Record<string, [string, string]> = {
  open: ['Em aberto', 'bg-sky-500/15 text-sky-300'],
  review: ['Em análise', 'bg-amber-500/15 text-amber-300'],
  won: ['Ganha', 'bg-emerald-500/15 text-emerald-300'],
  lost: ['Perdida', 'bg-rose-500/15 text-rose-300'],
  void: ['Anulada', 'bg-white/10 text-white/70'],
  cashout: ['Cash out', 'bg-violet-500/15 text-violet-300'],
  rejected: ['Recusada', 'bg-white/10 text-white/70'],
  half_won: ['Meio ganha', 'bg-emerald-500/15 text-emerald-300'],
  half_lost: ['Meio perdida', 'bg-rose-500/15 text-rose-300'],
};

function Status({ s }: { s: string }) {
  const [label, cls] = STATUS[s] ?? [s, 'bg-white/10'];
  return <span className={cn('rounded-full px-2 py-0.5 text-xs font-bold', cls)}>{label}</span>;
}

function BetCard({ b }: { b: Bet }) {
  return (
    <div className="space-y-3 rounded-2xl border border-bet62-border bg-bet62-surface/50 p-4">
      <div className="flex items-center justify-between gap-2 text-xs text-white/55">
        <span>
          #{b.id} · {b.kind === 'single' ? 'Simples' : `Múltipla (${b.legs.length})`} · {new Date(b.createdAt).toLocaleString('pt-PT')}
        </span>
        <Status s={b.status} />
      </div>
      <div className="space-y-2">
        {b.legs.map((l, i) => (
          <div key={i} className="flex items-start justify-between gap-3 border-b border-bet62-border/50 pb-2 text-sm last:border-0 last:pb-0">
            <div className="min-w-0">
              <Link href={`/live/match/${l.eventId}`} className="block truncate font-semibold hover:underline">{l.event}</Link>
              <p className="truncate text-xs text-white/60">{l.market}: <b className="text-white/85">{l.outcome}</b>{l.live && ' · ao vivo'}</p>
            </div>
            <div className="flex shrink-0 flex-col items-end gap-1">
              <span className="font-mono font-bold">{l.odds.toFixed(2)}</span>
              {b.legs.length > 1 && <Status s={l.status} />}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2 text-center text-xs">
        <div><p className="text-white/55">Valor</p><p className="font-mono font-bold">{formatCurrencyEUR(b.stake)}</p></div>
        <div><p className="text-white/55">Cotação</p><p className="font-mono font-bold">{b.odds.toFixed(2)}</p></div>
        <div>
          <p className="text-white/55">{b.status === 'open' || b.status === 'review' ? 'Retorno potencial' : 'Pago'}</p>
          <p className="font-mono font-bold text-emerald-400">{formatCurrencyEUR(b.status === 'open' || b.status === 'review' ? b.potential : b.payout)}</p>
        </div>
      </div>
    </div>
  );
}

export default function ApostasPage() {
  const [tab, setTab] = React.useState<'open' | 'settled'>('open');
  const [bets, setBets] = React.useState<Bet[] | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  React.useEffect(() => {
    setBets(null);
    setError(null);
    api<{ bets: Bet[] }>(`/api/bets?status=${tab}`)
      .then((r) => setBets(r.bets))
      .catch((e) => setError(e instanceof Error ? e.message : 'Erro ao carregar.'));
  }, [tab]);
  return (
    <AccountShell title="Minhas Apostas">
      {() => (
        <>
          <div className="flex gap-2">
            {(['open', 'settled'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={cn('rounded-full border px-4 py-1.5 text-sm font-bold', tab === t ? 'border-bet62-primary bg-bet62-primary text-onbrand' : 'border-bet62-border')}
              >
                {t === 'open' ? 'Em aberto' : 'Liquidadas'}
              </button>
            ))}
          </div>
          {error ? (
            <p className="text-sm text-rose-400">{error}</p>
          ) : bets === null ? (
            <div className="grid place-items-center py-16 text-white/60"><Loader2 className="animate-spin" /></div>
          ) : bets.length === 0 ? (
            <Panel title={tab === 'open' ? 'Sem apostas em aberto' : 'Sem apostas liquidadas'}>
              <p className="flex items-center gap-2 text-sm text-white/60">
                <Ticket size={16} /> Os seus bilhetes aparecem aqui. <Link href="/desporto" className="font-semibold text-bet62-primary hover:underline">Ver jogos</Link>
              </p>
            </Panel>
          ) : (
            <div className="grid gap-3 md:grid-cols-2">{bets.map((b) => <BetCard key={b.id} b={b} />)}</div>
          )}
        </>
      )}
    </AccountShell>
  );
}
