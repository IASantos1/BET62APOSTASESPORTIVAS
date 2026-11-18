'use client';

// Admin → Liquidação → "Liquidação automática pela BETBY".
// Enquanto o painel está aberto (em qualquer secção), a cada 30 s:
//   1. envia à conta demo da BETBY as seleções novas dos nossos bilhetes (bet/place, uma aposta
//      simples por seleção);
//   2. lê o my_bets/list dessa conta (e das contas anteriores com apostas por liquidar);
//   3. entrega ao servidor o que a BETBY respondeu: as seleções que ela liquidou são liquidadas
//      cá e os bilhetes pagos na nossa carteira.
// A BETBY só aceita estes pedidos de um navegador, por isso é aqui e não no servidor.
import * as React from 'react';
import { AlertTriangle, CheckCircle2, KeyRound, Loader2, RefreshCw } from 'lucide-react';
import { BETBY_CONFIG } from '../../lib/betby';
import { cn } from '../../lib/utils';

type Json = Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any
interface PlaceItem { leg_key: string; event_id: string; market_id: string; variant: string; outcome_id: string; odds: string }
interface Account { token: string; account: string | null; open: number; current: boolean }

const panel = 'rounded-xl border border-bet62-border bg-bet62-surface';
const CYCLE_MS = 30_000;

const requestId = (p: PlaceItem) => `${p.event_id}_${p.market_id}_${p.variant}_${p.outcome_id}`;
const odd = (v: string | number) => String(Math.round(Number(v) * 1000) / 1000);

async function betby(path: string, token: string, init?: RequestInit) {
  const r = await fetch(`${BETBY_CONFIG.baseUrl}${path}`, {
    ...init,
    headers: { accept: 'application/json', 'content-type': 'application/json', authorization: `Bearer ${token}`, ...(init?.headers ?? {}) },
    cache: 'no-store',
  });
  const text = await r.text();
  let body: unknown = null;
  try {
    body = JSON.parse(text);
  } catch {
    // não é JSON
  }
  return { status: r.status, ok: r.ok, body: body as Json | null, text };
}

/** Um ciclo: enviar o que falta e ler o que a BETBY já liquidou. */
async function cycle(): Promise<{ placed: number; rejected: number; read: number; decided: number; confirmed: number; error?: string }> {
  const st = (await (await fetch('/api/admin/betby-mirror', { cache: 'no-store' })).json()) as Json;
  if (!st.enabled || !st.token) return { placed: 0, rejected: 0, read: 0, decided: 0, confirmed: 0 };
  const token = String(st.token);
  const currency = st.tokenInfo?.currency || 'EUR';
  const out = { placed: 0, rejected: 0, read: 0, decided: 0, confirmed: 0, error: undefined as string | undefined };

  // 1. Enviar as seleções novas (uma aposta simples cada).
  const items = (st.place ?? []) as PlaceItem[];
  if (items.length) {
    const body = items.map((p) => ({
      type: '1/1',
      sum: String(st.stake ?? 1),
      k: odd(p.odds),
      global_id: null,
      bonus_id: null,
      bet_request_id: requestId(p),
      odds_change: 'any',
      selections: [{ event_id: p.event_id, market_id: p.market_id, specifiers: p.variant, outcome_id: p.outcome_id, k: odd(p.odds), promo_id: null, bonus_id: null, timestamp: Date.now() }],
    }));
    const r = await betby(`/api/v2/coupon/brand/${BETBY_CONFIG.brandId}/bet/place`, token, { method: 'POST', body: JSON.stringify(body) });
    if (r.status === 401 || r.status === 403) {
      out.error = `A BETBY recusou a chave (HTTP ${r.status}): faça login no demo e cole a chave nova.`;
    } else if (!r.ok || !r.body) {
      out.error = `bet/place: HTTP ${r.status} ${r.text.slice(0, 160)}`;
    } else {
      const acc = (Array.isArray(r.body.accepted) ? r.body.accepted : []) as Json[];
      const errs = (Array.isArray(r.body.error) ? r.body.error : []) as Json[];
      const accepted: { key: string; betId: string }[] = [];
      const rejected: { key: string; error: string }[] = [];
      items.forEach((p, i) => {
        const a = acc.find((x) => x.bet_request_id === requestId(p));
        if (a?.bet_id) accepted.push({ key: p.leg_key, betId: String(a.bet_id) });
        else {
          const e = errs.find((x) => x?.bet_request_id === requestId(p)) ?? (errs.length === items.length ? errs[i] : null);
          rejected.push({ key: p.leg_key, error: e ? JSON.stringify(e).slice(0, 300) : 'sem resposta para esta seleção' });
        }
      });
      await fetch('/api/admin/betby-mirror', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ action: 'placed', accepted, rejected }) });
      out.placed = accepted.length;
      out.rejected = rejected.length;
    }
  }

  // 2. Ler as apostas das contas com apostas por liquidar (até 10 páginas de 50).
  for (const a of (st.accounts ?? []) as Account[]) {
    if (!a.current && !a.open) continue;
    const results: Json[] = [];
    for (let page = 0; page < 10; page++) {
      const q = `currency=${encodeURIComponent(currency)}&lang=${encodeURIComponent(BETBY_CONFIG.locale)}&limit=50&skip=${page * 50}&status=&timestamp_from&timestamp_to`;
      const r = await betby(`/api/v1/my_bets/list?${q}`, a.token);
      if (!r.ok || !r.body) {
        if (a.current) out.error ??= `my_bets/list: HTTP ${r.status}`;
        break;
      }
      const list = (Array.isArray(r.body.results) ? r.body.results : []) as Json[];
      // Só o que o servidor usa (sem as descrições dos jogos).
      for (const b of list) {
        results.push({
          id: b.id,
          status: b.status,
          selections: (b.selections ?? []).map((s: Json) => ({ event_id: s.event_id, market_id: s.market_id, specifiers: s.specifiers, outcome_id: s.outcome_id, k: s.k, status: s.status })),
        });
      }
      if (list.length < 50 || results.length >= Number(r.body.count ?? 0)) break;
    }
    out.read += results.length;
    if (results.length) {
      const j = (await (await fetch('/api/admin/betby-mirror', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ action: 'mybets', results }) })).json()) as Json;
      out.decided += Number(j.decided ?? 0);
      out.confirmed += Number(j.confirmed ?? 0);
    }
  }
  return out;
}

/** Corre sempre que o painel está aberto (montado escondido nas outras secções). */
export function MirrorWorker({ onRun }: { onRun?: (r: Json) => void }) {
  React.useEffect(() => {
    let stop = false;
    let timer: ReturnType<typeof setTimeout>;
    const run = async () => {
      try {
        const r = await cycle();
        if (!stop) onRun?.({ ...r, at: new Date().toISOString() });
      } catch (e) {
        if (!stop) onRun?.({ error: (e as Error).message, at: new Date().toISOString() });
      }
      if (!stop) timer = setTimeout(run, CYCLE_MS);
    };
    timer = setTimeout(run, 3000);
    return () => {
      stop = true;
      clearTimeout(timer);
    };
  }, [onRun]);
  return null;
}

const STATUS: Record<string, [string, string]> = {
  pending: ['por enviar', 'text-white/60'],
  placed: ['na BETBY, à espera', 'text-sky-400'],
  settled: ['liquidada pela BETBY', 'text-emerald-500'],
  rejected: ['recusada (liquida o nosso motor)', 'text-amber-400'],
};

export function MirrorCard() {
  const [s, setS] = React.useState<Json | null>(null);
  const [last, setLast] = React.useState<Json | null>(null);
  const [token, setToken] = React.useState('');
  const [stake, setStake] = React.useState('');
  const [msg, setMsg] = React.useState<{ ok: boolean; text: string } | null>(null);
  const [busy, setBusy] = React.useState(false);

  const load = React.useCallback(async () => {
    const r = await fetch('/api/admin/betby-mirror', { cache: 'no-store' }).catch(() => null);
    if (r?.ok) setS(await r.json());
  }, []);
  React.useEffect(() => {
    void load();
    const t = setInterval(() => void load(), CYCLE_MS);
    return () => clearInterval(t);
  }, [load]);
  const onRun = React.useCallback((r: Json) => {
    setLast(r);
    void load();
  }, [load]);

  const save = async (patch: Json) => {
    setBusy(true);
    setMsg(null);
    const r = await fetch('/api/admin/betby-mirror', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ action: 'settings', ...patch }) });
    const j = await r.json().catch(() => ({}));
    setMsg(r.ok ? { ok: true, text: 'Guardado.' } : { ok: false, text: j.error ?? `HTTP ${r.status}` });
    if (r.ok) setToken('');
    setBusy(false);
    void load();
  };

  const info = s?.tokenInfo as Json | null;
  const daysLeft = info?.expiresAt ? (Date.parse(info.expiresAt) - Date.now()) / 86_400_000 : null;
  const c = (s?.summary?.counts ?? {}) as Record<string, number>;

  return (
    <div className={cn(panel, 'space-y-4 p-5')}>
      <MirrorWorker onRun={onRun} />
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="font-bold">Liquidação automática pela BETBY</div>
        <label className="flex cursor-pointer items-center gap-2 text-sm">
          <input type="checkbox" checked={!!s?.enabled} disabled={busy || !s?.database} onChange={(e) => void save({ enabled: e.target.checked })} className="h-4 w-4" />
          Ligada
        </label>
      </div>
      <p className="text-xs text-white/55">
        Cada seleção BETBY dos bilhetes é enviada à conta demo da BETBY. Quando a BETBY a liquida, o bilhete é liquidado e pago aqui. Funciona enquanto este painel estiver aberto.
        Seleções recusadas pela BETBY são liquidadas pelo nosso motor, como antes.
      </p>

      {/* Chave */}
      <div className="rounded-lg border border-bet62-border bg-bet62-surface-2 p-3 text-sm">
        <div className="mb-2 flex items-center gap-2 font-semibold"><KeyRound size={15} /> Chave da conta demo</div>
        {s?.hasToken && info ? (
          <p className={cn('mb-2 text-xs', info.expired || (daysLeft !== null && daysLeft < 1) ? 'text-bet62-primary' : daysLeft !== null && daysLeft < 2 ? 'text-amber-400' : 'text-white/60')}>
            Conta {info.account ?? '?'} · {info.expired ? 'EXPIRADA' : daysLeft !== null ? `válida mais ${daysLeft >= 1 ? `${Math.floor(daysLeft)} dias` : `${Math.max(0, Math.round(daysLeft * 24))} h`}` : 'validade desconhecida'}
            {info.expiresAt ? ` (até ${new Date(info.expiresAt).toLocaleString('pt-PT')})` : ''}
          </p>
        ) : (
          <p className="mb-2 text-xs text-amber-400">Sem chave. Sem ela nada é enviado à BETBY.</p>
        )}
        {(s?.oldAccounts ?? []).length > 0 && <p className="mb-2 text-xs text-white/45">Contas anteriores ainda lidas (apostas por liquidar): {(s?.oldAccounts as Json[]).map((a) => a?.account).join(', ')}</p>}
        <div className="flex flex-wrap gap-2">
          <input
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="cole aqui o valor de authorization (eyJ…)"
            className="min-w-0 flex-1 rounded-lg border border-bet62-border bg-bet62-bg px-3 py-2 font-mono text-xs outline-none focus:border-bet62-primary/60"
            type="password"
            autoComplete="off"
          />
          <button disabled={busy || !token.trim()} onClick={() => void save({ token })} className="rounded-lg bg-bet62-primary px-3 py-2 text-xs font-bold text-onbrand disabled:opacity-50">
            Guardar chave
          </button>
        </div>
        <p className="mt-2 text-[11px] text-white/45">
          Como obter: em demo.betby.com, F12 → Rede → faça uma aposta → pedido <code>bet/place</code> → Cabeçalhos → <code>authorization</code> (o texto a seguir a «Bearer»).
          Ao trocar de chave, a anterior continua a ser lida até as apostas feitas nela serem liquidadas.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2 text-sm">
        <span className="text-white/60">Valor de cada aposta na conta demo:</span>
        <input value={stake} onChange={(e) => setStake(e.target.value.replace(',', '.'))} placeholder={String(s?.stake ?? 1)} inputMode="decimal"
          className="w-20 rounded-lg border border-bet62-border bg-bet62-bg px-2 py-1.5 font-mono text-xs outline-none" />
        <span className="text-white/60">€</span>
        <button disabled={busy || !stake} onClick={() => void save({ stake: Number(stake) })} className="rounded-lg border border-bet62-border px-2 py-1.5 text-xs font-semibold disabled:opacity-50">Guardar</button>
        <span className="text-xs text-white/40">(só serve para a BETBY liquidar; o valor real do bilhete é o do jogador)</span>
      </div>
      {msg && <p className={cn('text-xs', msg.ok ? 'text-emerald-500' : 'text-bet62-primary')}>{msg.text}</p>}

      {/* Estado */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {(['pending', 'placed', 'settled', 'rejected'] as const).map((k) => (
          <div key={k} className="rounded-lg bg-bet62-surface-2 p-3">
            <div className="font-mono text-xl font-black">{c[k] ?? 0}</div>
            <div className={cn('text-[11px]', STATUS[k][1])}>{STATUS[k][0]}</div>
          </div>
        ))}
      </div>
      {last && (
        <p className={cn('flex items-center gap-2 text-xs', last.error ? 'text-amber-400' : 'text-white/55')}>
          {last.error ? <AlertTriangle size={14} /> : <CheckCircle2 size={14} className="text-emerald-500" />}
          Último ciclo {new Date(last.at).toLocaleTimeString('pt-PT')}: {last.placed ?? 0} enviadas, {last.rejected ?? 0} recusadas, {last.read ?? 0} lidas, {last.decided ?? 0} seleções liquidadas, {last.confirmed ?? 0} bilhetes com odds confirmadas
          {last.error ? ` · ${last.error}` : ''}
        </p>
      )}
      {!last && s?.enabled && <p className="flex items-center gap-2 text-xs text-white/50"><Loader2 size={14} className="animate-spin" /> À espera do primeiro ciclo…</p>}

      {(s?.summary?.recent ?? []).length > 0 && (
        <details className="text-xs">
          <summary className="cursor-pointer text-white/60"><RefreshCw size={12} className="mr-1 inline" />Últimas seleções</summary>
          <div className="mt-2 max-h-72 divide-y divide-bet62-border/60 overflow-auto rounded-lg bg-black/20">
            {(s!.summary.recent as Json[]).map((m) => (
              <div key={m.leg_key} className="flex flex-wrap gap-x-3 px-3 py-1.5">
                <span className="font-mono text-white/50">{m.leg_key}</span>
                <span className={STATUS[m.status]?.[1]}>{STATUS[m.status]?.[0] ?? m.status}</span>
                {m.betby_bet_id && <span className="font-mono text-white/40">BETBY {m.betby_bet_id}</span>}
                {m.betby_status && <span className="text-white/50">({m.betby_status})</span>}
                {m.error && <span className="text-amber-400">{String(m.error).slice(0, 120)}</span>}
              </div>
            ))}
          </div>
        </details>
      )}
    </div>
  );
}
