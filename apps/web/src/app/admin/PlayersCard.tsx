'use client';

// Admin: jogadores (pesquisa) e ajuste manual de saldo, sempre com motivo (fica no registo).
import * as React from 'react';
import { Search } from 'lucide-react';
import { cn, formatCurrencyEUR } from '../../lib/utils';

interface Player {
  id: string;
  email: string;
  name: string;
  status: string;
  balance: number;
  openBets: number;
  excludedUntil: string | null;
  createdAt: string;
}

const input = 'rounded-lg border border-bet62-border bg-bet62-bg px-2.5 py-1.5 text-sm outline-none focus:border-bet62-primary';

function Adjust({ p, onDone }: { p: Player; onDone: () => void }) {
  const [amount, setAmount] = React.useState('');
  const [note, setNote] = React.useState('');
  const [msg, setMsg] = React.useState<{ ok: boolean; text: string } | null>(null);
  const send = async (sign: 1 | -1) => {
    setMsg(null);
    const r = await fetch('/api/admin/players', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ userId: p.id, amount: sign * Number(amount.replace(',', '.')), note }),
    });
    const j = await r.json().catch(() => ({}));
    if (!r.ok) return setMsg({ ok: false, text: j.error || `Erro ${r.status}` });
    setMsg({ ok: true, text: `Novo saldo: ${formatCurrencyEUR(j.balance)}` });
    setAmount('');
    setNote('');
    onDone();
  };
  return (
    <div className="flex flex-wrap items-center gap-2 pt-2">
      <input className={cn(input, 'w-24')} inputMode="decimal" placeholder="€" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <input className={cn(input, 'min-w-[160px] flex-1')} placeholder="Motivo (obrigatório)" value={note} onChange={(e) => setNote(e.target.value)} />
      <button className="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white" onClick={() => void send(1)}>Creditar</button>
      <button className="rounded-lg bg-rose-600 px-3 py-1.5 text-xs font-bold text-white" onClick={() => void send(-1)}>Debitar</button>
      {msg && <span className={cn('text-xs', msg.ok ? 'text-emerald-400' : 'text-rose-400')}>{msg.text}</span>}
    </div>
  );
}

export function PlayersCard() {
  const [q, setQ] = React.useState('');
  const [players, setPlayers] = React.useState<Player[] | null>(null);
  const [accounts, setAccounts] = React.useState(true);
  const [open, setOpen] = React.useState<string | null>(null);
  const load = React.useCallback(async (query: string) => {
    const r = await fetch(`/api/admin/players?q=${encodeURIComponent(query)}`, { cache: 'no-store' });
    const j = await r.json().catch(() => ({}));
    setAccounts(j.accounts !== false);
    setPlayers(j.players ?? []);
  }, []);
  React.useEffect(() => {
    void load('');
  }, [load]);
  return (
    <section className="space-y-3 rounded-2xl border border-bet62-border bg-bet62-surface/50 p-5 text-sm">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-lg font-black">Jogadores</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            void load(q);
          }}
          className="flex items-center gap-2"
        >
          <input className={input} placeholder="E-mail ou nome" value={q} onChange={(e) => setQ(e.target.value)} />
          <button className="rounded-lg border border-bet62-border p-2" aria-label="Pesquisar"><Search size={14} /></button>
        </form>
      </div>
      {!accounts ? (
        <p className="text-amber-300">Base de dados não configurada (DATABASE_URL).</p>
      ) : players === null ? (
        <p className="text-white/55">A carregar…</p>
      ) : players.length === 0 ? (
        <p className="text-white/55">Sem jogadores.</p>
      ) : (
        <div className="divide-y divide-bet62-border/60">
          {players.map((p) => (
            <div key={p.id} className="py-2.5">
              <button className="flex w-full items-center justify-between gap-3 text-left" onClick={() => setOpen(open === p.id ? null : p.id)}>
                <span className="min-w-0">
                  <b className="block truncate">{p.name || p.email}</b>
                  <span className="block truncate text-xs text-white/55">
                    #{p.id} · {p.email} · desde {new Date(p.createdAt).toLocaleDateString('pt-PT')}
                    {p.excludedUntil && new Date(p.excludedUntil) > new Date() ? ` · autoexcluído até ${new Date(p.excludedUntil).toLocaleDateString('pt-PT')}` : ''}
                    {p.status !== 'active' ? ' · bloqueado' : ''}
                  </span>
                </span>
                <span className="shrink-0 text-right">
                  <b className="block font-mono">{formatCurrencyEUR(p.balance)}</b>
                  <span className="text-xs text-white/55">{p.openBets} em aberto</span>
                </span>
              </button>
              {open === p.id && <Adjust p={p} onDone={() => void load(q)} />}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
