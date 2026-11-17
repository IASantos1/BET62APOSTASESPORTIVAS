'use client';

// Admin → Liquidação. Enquanto esta página está aberta, o navegador do admin lê a BETBY (o servidor
// não consegue) e envia ao servidor o estado e o resultado dos jogos com apostas em aberto; o
// servidor liquida. Aqui também se aprovam bilhetes em análise e se decidem as seleções que o
// resultado não resolve (cartões, cantos, marcadores…).
import * as React from 'react';
import { CheckCircle2, RefreshCw } from 'lucide-react';
import { useBetbyFeed, type BetbyEvent } from '../../lib/betby';
import { cn, formatCurrencyEUR } from '../../lib/utils';

interface Result {
  status: string;
  matchStatus: number | null;
  home: number | null;
  away: number | null;
  clock: string | null;
  updatedAt: string;
}
interface OpenEvent {
  eventId: string;
  event: string;
  sport: string;
  startTime: string | null;
  legs: number;
  bets: number;
  stake: number;
  result: Result | null;
}
interface ReviewLeg { eventId: string; event: string; marketId: string; variant: string; outcomeId: string; market: string; outcome: string; odds: string | number }
interface ReviewBet { id: string; kind: string; email: string; stake: number; odds: number; potential: number; createdAt: string; note: string | null; oddsCheck: string; legs: ReviewLeg[] }
interface ManualLeg { id: string; betId: string; eventId: string; event: string; market: string; outcome: string; odds: number; score: string }
interface Data {
  accounts: boolean;
  voided?: number;
  events?: OpenEvent[];
  review?: ReviewBet[];
  manual?: ManualLeg[];
  log?: { bet_id: string | null; action: string; detail: string | null; source: string; created_at: string }[];
  legs?: { eventId: string; marketId: string; variant: string; outcomeId: string }[];
  checks?: { id: string; legs: { eventId: string; marketId: string; variant: string; outcomeId: string; odds: string | number }[] }[];
}

/** Tolerância: a odd do bilhete pode estar até 2% acima da atual (a odd mexeu entre o clique e a leitura). */
const ODDS_TOLERANCE = 1.02;

const box = 'space-y-3 rounded-2xl border border-bet62-border bg-bet62-surface/50 p-5 text-sm';
const btn = 'rounded-lg border border-bet62-border px-2.5 py-1 text-xs font-bold hover:bg-white/5 disabled:opacity-50';
const input = 'w-14 rounded-lg border border-bet62-border bg-bet62-bg px-2 py-1 text-center font-mono text-xs';

/** Estado e resultado de um jogo, como a BETBY o envia (códigos Betradar). */
function resultOf(raw: BetbyEvent) {
  const ms = raw.state?.match_status ?? null;
  const st = raw.state?.status ?? null;
  const cancelled = ms === 70 || (ms !== null && ms >= 90 && ms < 100) || st === 5 || st === 9;
  const finished = !cancelled && ((ms !== null && ms >= 100) || st === 3 || st === 4);
  const num = (v: unknown) => (v === undefined || v === null || v === '' || !Number.isFinite(Number(v)) ? null : Number(v));
  return {
    eventId: raw.id,
    status: cancelled ? 'cancelled' : finished ? 'finished' : 'live',
    matchStatus: ms,
    home: num(raw.score?.home_score),
    away: num(raw.score?.away_score),
    periods: (raw.score?.period_scores ?? []).map((p) => ({ number: p.number, home: Number(p.home_score), away: Number(p.away_score) })),
    clock: raw.state?.clock?.match_time ?? null,
  };
}

function FinalForm({ e, onDone }: { e: OpenEvent; onDone: () => void }) {
  const [home, setHome] = React.useState(String(e.result?.home ?? ''));
  const [away, setAway] = React.useState(String(e.result?.away ?? ''));
  const [hh, setHh] = React.useState('');
  const [ha, setHa] = React.useState('');
  const [msg, setMsg] = React.useState<string | null>(null);
  const send = async (body: Record<string, unknown>, confirmText: string) => {
    if (!window.confirm(confirmText)) return;
    const r = await fetch('/api/admin/settlement/action', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) });
    const j = await r.json().catch(() => ({}));
    setMsg(r.ok ? `Feito: ${j.decided ?? 0} seleções decididas.` : j.error || `Erro ${r.status}`);
    if (r.ok) onDone();
  };
  return (
    <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
      <span className="text-white/55">Final</span>
      <input className={input} value={home} onChange={(x) => setHome(x.target.value)} inputMode="numeric" aria-label="Golos casa" />
      <span>-</span>
      <input className={input} value={away} onChange={(x) => setAway(x.target.value)} inputMode="numeric" aria-label="Golos fora" />
      <span className="text-white/55">Intervalo (opcional)</span>
      <input className={input} value={hh} onChange={(x) => setHh(x.target.value)} inputMode="numeric" aria-label="Intervalo casa" />
      <span>-</span>
      <input className={input} value={ha} onChange={(x) => setHa(x.target.value)} inputMode="numeric" aria-label="Intervalo fora" />
      <button
        className={btn}
        onClick={() =>
          void send(
            { type: 'final', eventId: e.eventId, home: Number(home), away: Number(away), ht: hh !== '' && ha !== '' ? [Number(hh), Number(ha)] : undefined },
            `Confirmar resultado final ${home}-${away} em ${e.event}? As apostas serão liquidadas.`,
          )
        }
      >
        Liquidar com este resultado
      </button>
      <button className={cn(btn, 'text-rose-300')} onClick={() => void send({ type: 'cancel', eventId: e.eventId }, `Anular ${e.event}? Todas as seleções deste jogo são devolvidas.`)}>
        Jogo cancelado
      </button>
      {msg && <span className="text-white/70">{msg}</span>}
    </div>
  );
}

export function SettlementCard() {
  const live = useBetbyFeed('live', 20000);
  const pre = useBetbyFeed('prematch', 60000);
  const [data, setData] = React.useState<Data | null>(null);
  const [open, setOpen] = React.useState<string | null>(null);
  const [sync, setSync] = React.useState<{ at: Date; sent: number; decided: number; prices: number } | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const load = React.useCallback(async () => {
    try {
      const r = await fetch('/api/admin/settlement', { cache: 'no-store' });
      const j = (await r.json()) as Data & { error?: string };
      if (!r.ok) throw new Error(j.error || `HTTP ${r.status}`);
      setData(j);
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  }, []);
  React.useEffect(() => {
    void load();
    const t = setInterval(() => void load(), 30_000);
    return () => clearInterval(t);
  }, [load]);

  // A cada leitura da BETBY: enviar o estado dos jogos com apostas em aberto e as odds atuais das
  // seleções em aberto (o servidor usa-as no cash out; sem preço recente, o cash out fica suspenso).
  const needed = React.useMemo(() => new Set((data?.events ?? []).map((e) => e.eventId)), [data]);
  React.useEffect(() => {
    if ((!needed.size && !data?.legs?.length) || !live.updatedAt) return;
    const results = live.events.filter((e) => needed.has(e.id) && e.score).map(resultOf);
    const prices = (data?.legs ?? []).flatMap((l) => {
      const ev = live.events.find((e) => e.id === l.eventId) ?? pre.events.find((e) => e.id === l.eventId);
      if (!ev) return [];
      const o = ev.markets[l.marketId]?.[l.variant]?.[l.outcomeId];
      return [{ ...l, odds: o ? Number(o.k) : null, active: !!o && o.b !== 1 && Number(o.k) > 1 }];
    });
    // Odds dos bilhetes novos (últimos 15 min): confirmadas se nenhuma estiver acima da BETBY.
    const checks = (data?.checks ?? []).flatMap((ch) => {
      const now: { k: number; taken: number; label: string }[] = [];
      for (const l of ch.legs) {
        const ev = live.events.find((e) => e.id === l.eventId) ?? pre.events.find((e) => e.id === l.eventId);
        const k = Number(ev?.markets[l.marketId]?.[l.variant]?.[l.outcomeId]?.k);
        if (!(k > 1)) return []; // sem preço agora: fica por confirmar (se ganhar, vai a análise)
        now.push({ k, taken: Number(l.odds), label: `${l.marketId}/${l.outcomeId}` });
      }
      const bad = now.filter((x) => x.taken > x.k * ODDS_TOLERANCE + 0.005);
      return [{ betId: ch.id, ok: !bad.length, detail: bad.map((x) => `${x.label}: apostada ${x.taken.toFixed(2)}, BETBY ${x.k.toFixed(2)}`).join('; ') }];
    });
    if (!results.length && !prices.length && !checks.length) return;
    let stop = false;
    void (async () => {
      const r = await fetch('/api/admin/settlement', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ results, prices, checks }) });
      const j = await r.json().catch(() => ({}));
      if (stop) return;
      setSync({ at: new Date(), sent: results.length, decided: Number(j.decided ?? 0), prices: prices.length });
      if (Number(j.decided ?? 0) > 0 || checks.length) void load();
    })();
    return () => {
      stop = true;
    };
  }, [live.updatedAt, live.events, pre.events, needed, data, load]);

  const currentOdds = (l: ReviewLeg) => {
    const ev = live.events.find((e) => e.id === l.eventId) ?? pre.events.find((e) => e.id === l.eventId);
    const k = Number(ev?.markets[l.marketId]?.[l.variant]?.[l.outcomeId]?.k);
    return k > 1 ? k : null;
  };
  const act = async (body: Record<string, unknown>) => {
    const r = await fetch('/api/admin/settlement/action', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) });
    if (!r.ok) window.alert((await r.json().catch(() => ({}))).error || `Erro ${r.status}`);
    void load();
  };

  if (data && !data.accounts) return null;
  const events = data?.events ?? [];
  const now = Date.now();
  return (
    <section className={box}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-lg font-black">Liquidação</h2>
        <button className={btn} onClick={() => void load()}><RefreshCw size={12} className="inline" /> Atualizar</button>
      </div>
      <p className="text-xs text-white/55">
        Enquanto esta página estiver aberta, os resultados da BETBY são lidos aqui e enviados ao servidor, que liquida as apostas. Feche-a e os bilhetes esperam (nada se perde).
      </p>
      <div className="flex flex-wrap gap-3 text-xs">
        <span className={cn('inline-flex items-center gap-1', live.error ? 'text-rose-300' : 'text-emerald-300')}>
          <CheckCircle2 size={13} /> BETBY: {live.error ? `erro (${live.error.slice(0, 60)})` : live.updatedAt ? `lida às ${live.updatedAt.toLocaleTimeString('pt-PT')}` : 'a ligar…'}
        </span>
        {sync && <span className="text-white/60">Último envio {sync.at.toLocaleTimeString('pt-PT')}: {sync.sent} jogos, {sync.decided} seleções decididas, {sync.prices} odds para o cash out</span>}
        {!!data?.voided && <span className="text-amber-300">{data.voided} seleções anuladas por falta de resultado (72 h)</span>}
        {error && <span className="text-rose-300">{error}</span>}
      </div>

      <h3 className="pt-2 font-bold">Jogos com apostas em aberto ({events.length})</h3>
      {!events.length ? (
        <p className="text-white/55">Nenhum.</p>
      ) : (
        <div className="divide-y divide-bet62-border/60 rounded-xl border border-bet62-border">
          {events.map((e) => {
            const inFeed = live.events.some((x) => x.id === e.eventId);
            const started = e.startTime && new Date(e.startTime).getTime() < now;
            const r = e.result;
            const stale = started && !inFeed && (!r || r.status === 'live');
            return (
              <div key={e.eventId} className="p-3">
                <button className="flex w-full flex-wrap items-center justify-between gap-2 text-left" onClick={() => setOpen(open === e.eventId ? null : e.eventId)}>
                  <span className="min-w-0">
                    <b className="block truncate">{e.event}</b>
                    <small className="text-white/55">
                      {e.startTime ? new Date(e.startTime).toLocaleString('pt-PT') : '—'} · {e.bets} bilhetes · {e.legs} seleções · {formatCurrencyEUR(e.stake)}
                    </small>
                  </span>
                  <span className="text-right text-xs">
                    {r ? (
                      <b className={cn('font-mono', r.status === 'finished' ? 'text-emerald-300' : r.status === 'cancelled' ? 'text-rose-300' : 'text-sky-300')}>
                        {r.status === 'cancelled' ? 'Cancelado' : `${r.home ?? '?'}-${r.away ?? '?'}`} {r.status === 'live' ? `· ${r.clock ?? 'ao vivo'}` : r.status === 'finished' ? '· final' : ''}
                      </b>
                    ) : (
                      <span className="text-white/50">{started ? 'sem resultado' : 'por começar'}</span>
                    )}
                    {stale && <span className="block text-amber-300">A BETBY já não envia este jogo: confirme o resultado</span>}
                  </span>
                </button>
                {(open === e.eventId || stale) && <FinalForm e={e} onDone={() => void load()} />}
              </div>
            );
          })}
        </div>
      )}

      <h3 className="pt-2 font-bold">Bilhetes em análise ({data?.review?.length ?? 0})</h3>
      {!data?.review?.length ? (
        <p className="text-white/55">Nenhum.</p>
      ) : (
        <div className="space-y-2">
          {data.review.map((b) => (
            <div key={b.id} className="rounded-xl border border-amber-400/40 p-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span>
                  <b>#{b.id}</b> · {b.email} · {formatCurrencyEUR(b.stake)} × {b.odds.toFixed(2)} = <b>{formatCurrencyEUR(b.potential)}</b>
                  {b.note && <span className={cn('block text-xs', b.oddsCheck === 'mismatch' ? 'text-rose-300' : 'text-amber-300')}>{b.note}</span>}
                </span>
                <span className="flex gap-2">
                  <button className={cn(btn, 'text-emerald-300')} onClick={() => void act({ type: 'bet', betId: b.id, action: 'approve' })}>Aprovar</button>
                  <button className={cn(btn, 'text-rose-300')} onClick={() => window.confirm(`Recusar #${b.id}? O valor é devolvido.`) && void act({ type: 'bet', betId: b.id, action: 'reject' })}>Recusar</button>
                </span>
              </div>
              <ul className="mt-2 space-y-1 text-xs">
                {b.legs.map((l, i) => {
                  const k = currentOdds(l);
                  const diff = k !== null && Math.abs(k - Number(l.odds)) > 0.001;
                  return (
                    <li key={i}>
                      {l.event} · {l.market}: <b>{l.outcome}</b> @ <b className="font-mono">{Number(l.odds).toFixed(2)}</b>{' '}
                      <span className={cn('font-mono', k === null ? 'text-white/40' : diff ? 'text-amber-300' : 'text-emerald-300')}>
                        (BETBY agora: {k === null ? 'indisponível' : k.toFixed(2)})
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      )}

      <h3 className="pt-2 font-bold">Seleções à espera de decisão ({data?.manual?.length ?? 0})</h3>
      <p className="text-xs text-white/50">Jogos terminados em mercados que o resultado não decide (cartões, cantos, marcadores, resultado exato "outro"…).</p>
      {!data?.manual?.length ? (
        <p className="text-white/55">Nenhuma.</p>
      ) : (
        <div className="divide-y divide-bet62-border/60 rounded-xl border border-bet62-border">
          {data.manual.map((l) => (
            <div key={l.id} className="flex flex-wrap items-center justify-between gap-2 p-3">
              <span className="min-w-0 text-xs">
                <b className="block truncate text-sm">{l.event} ({l.score})</b>
                {l.market}: <b>{l.outcome}</b> @ {l.odds.toFixed(2)} · bilhete #{l.betId}
              </span>
              <span className="flex flex-wrap gap-1.5">
                {([['won', 'Ganha'], ['lost', 'Perdida'], ['void', 'Anulada'], ['half_won', '½ ganha'], ['half_lost', '½ perdida']] as const).map(([st, label]) => (
                  <button key={st} className={btn} onClick={() => void act({ type: 'leg', legId: l.id, status: st })}>{label}</button>
                ))}
              </span>
            </div>
          ))}
        </div>
      )}

      {!!data?.log?.length && (
        <details className="pt-2">
          <summary className="cursor-pointer font-bold">Registo recente</summary>
          <ul className="mt-2 space-y-1 font-mono text-[11px] text-white/60">
            {data.log.map((l, i) => (
              <li key={i}>
                {new Date(l.created_at).toLocaleString('pt-PT')} · {l.source} · {l.action}
                {l.bet_id ? ` · #${l.bet_id}` : ''}
                {l.detail ? ` · ${l.detail}` : ''}
              </li>
            ))}
          </ul>
        </details>
      )}
    </section>
  );
}
