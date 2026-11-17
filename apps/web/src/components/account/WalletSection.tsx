'use client';

// Carteira: saldo verdadeiro (servidor) e o registo de todos os movimentos.
import * as React from 'react';
import Link from 'next/link';
import { ArrowDownCircle, ArrowUpCircle, Loader2 } from 'lucide-react';
import { Panel } from './ui';
import { api, useAuthStore } from '../../stores/auth.store';
import { cn, formatCurrencyEUR } from '../../lib/utils';

interface Tx {
  id: string;
  type: string;
  label: string;
  amount: number;
  balanceAfter: number;
  reference: string | null;
  note: string | null;
  createdAt: string;
}

export function WalletSection() {
  const refresh = useAuthStore((s) => s.refresh);
  const [data, setData] = React.useState<{ balance: number; inPlay: number; transactions: Tx[] } | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  React.useEffect(() => {
    api<{ balance: number; inPlay: number; transactions: Tx[] }>('/api/wallet')
      .then((r) => {
        setData(r);
        void refresh();
      })
      .catch((e) => setError(e instanceof Error ? e.message : 'Erro ao carregar.'));
  }, [refresh]);
  if (error) return <p className="text-sm text-rose-400">{error}</p>;
  if (!data) return <div className="grid place-items-center py-16 text-white/60"><Loader2 className="animate-spin" /></div>;
  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-bet62-border bg-bet62-surface/50 p-5">
          <p className="text-sm text-white/60">Saldo disponível</p>
          <p className="font-mono text-3xl font-black">{formatCurrencyEUR(data.balance)}</p>
          <div className="mt-4 flex gap-2">
            <Link href="/carteira/deposito" className="inline-flex items-center gap-1.5 rounded-xl bg-bet62-primary px-4 py-2 text-sm font-bold text-onbrand">
              <ArrowDownCircle size={16} /> Depositar
            </Link>
            <Link href="/carteira/levantamento" className="inline-flex items-center gap-1.5 rounded-xl border border-bet62-border px-4 py-2 text-sm font-bold">
              <ArrowUpCircle size={16} /> Levantar
            </Link>
          </div>
        </div>
        <div className="rounded-2xl border border-bet62-border bg-bet62-surface/50 p-5">
          <p className="text-sm text-white/60">Em apostas abertas</p>
          <p className="font-mono text-3xl font-black">{formatCurrencyEUR(data.inPlay)}</p>
          <Link href="/conta/apostas" className="mt-4 inline-block text-sm font-semibold text-bet62-primary hover:underline">Ver as minhas apostas</Link>
        </div>
      </div>
      <Panel title="Movimentos">
        {data.transactions.length === 0 ? (
          <p className="text-sm text-white/60">Ainda não há movimentos na sua conta.</p>
        ) : (
          <div className="divide-y divide-bet62-border/60">
            {data.transactions.map((t) => (
              <div key={t.id} className="flex items-center justify-between gap-3 py-2.5 text-sm">
                <div className="min-w-0">
                  <p className="font-semibold">{t.label}</p>
                  <p className="truncate text-xs text-white/55">
                    {new Date(t.createdAt).toLocaleString('pt-PT')}
                    {t.note ? ` · ${t.note}` : ''}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <p className={cn('font-mono font-bold', t.amount >= 0 ? 'text-emerald-400' : 'text-rose-400')}>
                    {t.amount >= 0 ? '+' : ''}{formatCurrencyEUR(t.amount)}
                  </p>
                  <p className="font-mono text-xs text-white/45">{formatCurrencyEUR(t.balanceAfter)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </Panel>
    </>
  );
}
