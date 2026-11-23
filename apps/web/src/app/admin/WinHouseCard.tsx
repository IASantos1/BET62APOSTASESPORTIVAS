'use client';

// Admin → WinHouse: configuração (variáveis WINHOUSE_*), o coletor do servidor (quem recolhe,
// cada rota, fuso, disponibilidade), jogos guardados e os testes: "Testar rotas", "Ver mercados de
// um jogo" e "Correr ciclo agora". Tudo é lido pelo servidor; o navegador nunca fala com o WinHouse.
import * as React from 'react';
import { Activity, CheckCircle2, Database, Loader2, Play, Radio, RefreshCw, Server, XCircle } from 'lucide-react';
import { cn } from '../../lib/utils';
import { setDiagnostics, useDiagnostics } from '../../lib/winhouse-board';

const panel = 'rounded-xl border border-bet62-border bg-bet62-surface';
const btn = 'inline-flex items-center gap-2 rounded-lg border border-bet62-border bg-bet62-surface-2 px-3 py-2 text-xs font-semibold transition-colors hover:border-bet62-primary/50 disabled:opacity-50';

type Json = Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any

const ROUTE_NAME: Record<string, string> = {
  live: 'Lista ao vivo',
  liveEvent: 'Página de jogo ao vivo',
  prematchMain: 'Pré-jogo (ligas principais)',
  prematchTop: 'Pré-jogo (top 10)',
  prematch24h: 'Pré-jogo (24 h)',
  prematchEvent: 'Página de jogo pré-jogo',
};
const routeName = (k: string) => ROUTE_NAME[k] ?? (k.startsWith('prematchBySport:') ? `Pré-jogo por desporto (${k.split(':')[1]})` : k);
const ago = (iso?: string | null) => {
  if (!iso) return '—';
  const s = Math.round((Date.now() - Date.parse(iso)) / 1000);
  return s < 60 ? `há ${s} s` : s < 3600 ? `há ${Math.round(s / 60)} min` : `há ${Math.round(s / 3600)} h`;
};

function Dot({ ok }: { ok: boolean | null | undefined }) {
  return <span className={cn('inline-block h-2 w-2 shrink-0 rounded-full', ok ? 'bg-emerald-500' : ok === false ? 'bg-bet62-primary' : 'bg-white/30')} />;
}

function Pre({ data }: { data: unknown }) {
  return <pre className="max-h-96 overflow-auto rounded-lg bg-black/30 p-3 text-[11px] leading-relaxed text-white/70">{JSON.stringify(data, null, 2)}</pre>;
}

async function post(body: Json) {
  const r = await fetch('/api/admin/winhouse', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  const j = await r.json().catch(() => ({ error: `HTTP ${r.status}` }));
  return r.ok ? j : { error: j.error ?? `HTTP ${r.status}` };
}

const MODES: { id: 'both' | 'winhouse' | 'betby'; label: string; note: string }[] = [
  { id: 'winhouse', label: 'Só WinHouse', note: 'Jogos, estatísticas ao vivo e mercados vêm do WinHouse. Goal API complementa os dados pré-jogo; BETBY está temporariamente desligada.' },
];

/** Fonte do site e modo diagnóstico (selos WH/BB nos jogos, mercados e boletim, só neste navegador). */
function SourceControls({ mode, configured, onChange }: { mode: string | undefined; configured: boolean; onChange: () => void }) {
  const diag = useDiagnostics();
  const [busy, setBusy] = React.useState(false);
  const [err, setErr] = React.useState<string | null>(null);
  const choose = async (m: string) => {
    setBusy(true);
    setErr(null);
    const r = await post({ action: 'mode', mode: m });
    if (r.error) setErr(r.error);
    setBusy(false);
    onChange();
  };
  return (
    <div className={cn(panel, 'p-5')}>
      <div className="mb-3 font-bold">Fonte dos jogos no site</div>
      <div className="grid gap-2">
        {MODES.map((m) => (
          <button
            key={m.id}
            disabled={busy || !configured}
            onClick={() => void choose(m.id)}
            className={cn(
              'rounded-lg border p-3 text-left transition-colors disabled:opacity-50',
              mode === m.id ? 'border-bet62-primary bg-bet62-primary/15' : 'border-bet62-border bg-bet62-surface-2 hover:border-bet62-primary/50',
            )}
          >
            <div className="flex items-center gap-2 text-sm font-bold">
              <span className={cn('h-3 w-3 rounded-full border-2', mode === m.id ? 'border-bet62-primary bg-bet62-primary' : 'border-white/40')} />
              {m.label}
            </div>
            <p className="mt-1 text-xs text-white/55">{m.note}</p>
          </button>
        ))}
      </div>
      <p className="mt-2 text-xs text-white/45">Se o WinHouse falhar, os jogos ficam indisponíveis até o coletor voltar; não há fallback para a BETBY.</p>
      {err && <p className="mt-2 text-xs text-bet62-primary">{err}</p>}
      <label className="mt-4 flex cursor-pointer items-start gap-3 rounded-lg border border-bet62-border bg-bet62-surface-2 p-3">
        <input type="checkbox" checked={diag} onChange={(e) => setDiagnostics(e.target.checked)} className="mt-0.5 h-4 w-4 accent-[var(--bet62-primary,#e11d48)]" />
        <span className="text-sm">
          <b>Modo diagnóstico</b> (só neste navegador)
          <span className="mt-0.5 block text-xs text-white/55">
            Mostra no site um selo em cada jogo, mercado e seleção do boletim:
            <span className="mx-1 rounded bg-sky-500/20 px-1 font-mono text-[10px] text-sky-400">WH</span> WinHouse,
            <span className="mx-1 rounded bg-sky-500/20 px-1 font-mono text-[10px] text-sky-400">WH</span> WinHouse. Os jogadores não veem.
          </span>
        </span>
      </label>
    </div>
  );
}

export function WinHouseCard() {
  const [s, setS] = React.useState<Json | null>(null);
  const [busy, setBusy] = React.useState<string | null>(null);
  const [out, setOut] = React.useState<{ kind: string; data: Json } | null>(null);
  const [gameId, setGameId] = React.useState('');

  const load = React.useCallback(async () => {
    const r = await fetch('/api/admin/winhouse', { cache: 'no-store' }).catch(() => null);
    setS(r?.ok ? await r.json() : { error: `HTTP ${r?.status ?? 'rede'}` });
  }, []);
  React.useEffect(() => {
    void load();
    const t = setInterval(() => void load(), 15_000);
    return () => clearInterval(t);
  }, [load]);

  const run = async (kind: string, body: Json) => {
    setBusy(kind);
    setOut(null);
    try {
      setOut({ kind, data: await post(body) });
      void load();
    } finally {
      setBusy(null);
    }
  };

  if (!s) return <div className={cn(panel, 'flex items-center gap-2 p-5 text-sm text-white/60')}><Loader2 size={16} className="animate-spin" /> A ler o estado do WinHouse…</div>;
  if (s.error) return <div className={cn(panel, 'p-5 text-sm text-bet62-primary')}>{s.error}</div>;

  const c = s.collector as Json | null;
  const ring: boolean[] = c?.liveRing ?? [];
  const avail = ring.length ? Math.round((ring.filter(Boolean).length / ring.length) * 100) : null;
  const totals: Record<string, number> = {};
  for (const x of (s.counts ?? []) as Json[]) totals[x.status] = (totals[x.status] ?? 0) + x.events;
  const pages = ((s.counts ?? []) as Json[]).reduce((n, x) => n + (x.withPage ?? 0), 0);
  const gid = gameId.trim();

  return (
    <div className="space-y-4">
      <SourceControls mode={s.mode} configured={!!s.configured && !!s.database} onChange={() => void load()} />
      {/* Configuração */}
      <div className={cn(panel, 'p-5')}>
        <div className="mb-3 flex items-center gap-2 font-bold"><Server size={16} className="text-bet62-primary" /> Ligação</div>
        {!s.configured ? (
          <div className="space-y-2 text-sm text-white/70">
            <p className="flex items-center gap-2 font-semibold text-amber-400"><XCircle size={16} /> WinHouse desligado</p>
            <p>
              Defina <code className="rounded bg-black/30 px-1">WINHOUSE_BASE_URL</code> (https://…) nas variáveis do serviço do site no Railway, as mesmas do outro projeto.
              Opcional: <code className="rounded bg-black/30 px-1">WINHOUSE_LANG</code>, <code className="rounded bg-black/30 px-1">WINHOUSE_TZ_OFFSET_MINUTES</code> e as rotas
              (<code className="rounded bg-black/30 px-1">WINHOUSE_LIVE</code>, <code className="rounded bg-black/30 px-1">WINHOUSE_PREMATCH_MAIN</code>…). O coletor arranca sozinho no próximo deploy.
            </p>
          </div>
        ) : (
          <div className="grid gap-2 text-sm sm:grid-cols-2">
            <div className="flex items-center gap-2"><Dot ok /> <span className="text-white/60">Endereço</span> <span className="truncate font-mono text-xs">{s.baseUrl}</span></div>
            <div className="flex items-center gap-2"><Dot ok={s.database} /> <span className="text-white/60">Base de dados</span> {s.database ? 'ligada' : 'falta DATABASE_URL'}</div>
            <div className="flex items-center gap-2">
              <Dot ok={s.lease?.active ?? null} /> <span className="text-white/60">Coletor</span>
              {s.lease?.active ? `a recolher (${s.thisProcess?.leader ? 'este servidor' : 'outra instância'})` : s.settings?.enabled === false ? 'desligado (WINHOUSE_FEED=off)' : 'parado'}
            </div>
            <div className="flex items-center gap-2"><Dot ok={c?.offset !== null && c?.offset !== undefined} /> <span className="text-white/60">Fuso do WinHouse</span>
              {c?.offset !== null && c?.offset !== undefined ? `UTC${c.offset >= 0 ? '+' : ''}${c.offset / 60} (${c.offsetSource})` : 'ainda por estimar'}
            </div>
            <div className="flex items-center gap-2"><Activity size={14} className="text-white/40" /> <span className="text-white/60">Disponibilidade</span> {avail === null ? '—' : `${avail}% das últimas ${ring.length} leituras`}</div>
            <div className="flex items-center gap-2"><Radio size={14} className="text-white/40" /> <span className="text-white/60">Página ao vivo</span>
              {c?.livePageRoute === 'live' ? 'rota ao vivo' : c?.livePageRoute === 'pre' ? 'página pré-jogo (a ao vivo deu 404)' : '—'}
            </div>
          </div>
        )}
      </div>

      {/* Rotas lidas pelo coletor */}
      {s.configured && (
        <div className={cn(panel, 'p-5')}>
          <div className="mb-3 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 font-bold"><Database size={16} className="text-bet62-primary" /> Coletor</div>
            <span className="text-xs text-white/40">estado gravado {ago(c?.savedAt)}</span>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-5">
            {[
              ['Ao vivo', totals.live ?? 0],
              ['Pré-jogo', totals.scheduled ?? 0],
              ['Com todos os mercados', pages],
              ['Acabados', totals.ended ?? 0],
              ['Fundidos / fora', (totals.merged ?? 0) + (totals.gone ?? 0)],
            ].map(([k, v]) => (
              <div key={k} className="rounded-lg bg-bet62-surface-2 p-3">
                <div className="font-mono text-xl font-black">{v}</div>
                <div className="text-[11px] text-white/50">{k}</div>
              </div>
            ))}
          </div>
          {c?.routes && Object.keys(c.routes).length ? (
            <div className="divide-y divide-bet62-border/60 text-sm">
              {Object.entries(c.routes as Record<string, Json>).map(([k, r]) => (
                <div key={k} className="flex flex-wrap items-center gap-x-3 gap-y-1 py-2">
                  <Dot ok={r.ok} />
                  <span className="min-w-[180px] flex-1">{routeName(k)}</span>
                  <span className="font-mono text-xs text-white/60">
                    {r.error ? r.error : k.endsWith('Event') ? `${r.events ?? 0} páginas lidas no último ciclo` : `HTTP ${r.status ?? '—'}${r.ms !== undefined ? ` · ${r.ms} ms` : ''}${r.events !== undefined ? ` · ${r.events} jogos` : ''}`}
                  </span>
                  <span className="text-xs text-white/40">{ago(r.at)}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-white/50">Ainda sem leituras. O coletor arranca uns segundos depois do servidor.</p>
          )}
          {c?.lastError && <p className="mt-3 text-xs text-amber-400">Último erro ({ago(c.lastError.at)}): {c.lastError.message}</p>}
        </div>
      )}

      {/* Testes */}
      {s.configured && (
        <div className={cn(panel, 'p-5')}>
          <div className="mb-3 font-bold">Testes</div>
          <div className="flex flex-wrap items-center gap-2">
            <button className={btn} disabled={!!busy} onClick={() => void run('health', { action: 'health', gameId: gid || undefined })}>
              {busy === 'health' ? <Loader2 size={14} className="animate-spin" /> : <CheckCircle2 size={14} />} Testar rotas
            </button>
            <input value={gameId} onChange={(e) => setGameId(e.target.value.replace(/\D/g, ''))} placeholder="id do jogo (opcional)" inputMode="numeric"
              className="w-44 rounded-lg border border-bet62-border bg-bet62-bg px-3 py-2 font-mono text-xs outline-none focus:border-bet62-primary/60" />
            <button className={btn} disabled={!!busy} onClick={() => void run('markets', { action: 'markets', gameId: gid || undefined })}>
              {busy === 'markets' ? <Loader2 size={14} className="animate-spin" /> : <Play size={14} />} Mercados (pré-jogo)
            </button>
            <button className={btn} disabled={!!busy} onClick={() => void run('marketsLive', { action: 'markets', live: true, gameId: gid || undefined })}>
              {busy === 'marketsLive' ? <Loader2 size={14} className="animate-spin" /> : <Radio size={14} />} Mercados (ao vivo)
            </button>
            <button className={btn} disabled={!!busy} onClick={() => void run('cycle', { action: 'cycle' })}>
              {busy === 'cycle' ? <Loader2 size={14} className="animate-spin" /> : <RefreshCw size={14} />} Correr ciclo agora
            </button>
          </div>
          {out && (
            <div className="mt-4 space-y-2">
              {out.data.error ? (
                <p className="text-sm text-bet62-primary">{out.data.error}</p>
              ) : out.kind === 'health' ? (
                <div className="divide-y divide-bet62-border/60 text-sm">
                  {(out.data.routes as Json[]).map((r) => (
                    <div key={r.route} className="flex flex-wrap items-center gap-x-3 gap-y-1 py-2">
                      <Dot ok={r.skipped ? null : r.ok && r.json} />
                      <span className="min-w-[180px] flex-1">{routeName(r.route)}</span>
                      <span className="font-mono text-xs text-white/60">
                        {r.skipped ?? r.error ?? `HTTP ${r.status} · ${r.ms} ms · ${r.json ? 'JSON' : 'não é JSON'}${r.events !== undefined ? ` · ${r.events} jogos` : ''} · ${r.odds} cotações · ${r.markets} mercados`}
                      </span>
                    </div>
                  ))}
                </div>
              ) : out.kind.startsWith('markets') ? (
                <div className="space-y-2">
                  <p className="text-sm">
                    Jogo <span className="font-mono">{out.data.gameId}</span> · {out.data.route} · HTTP {out.data.status} ·{' '}
                    <b>{out.data.marketCount}</b> mercados, {out.data.odds} cotações
                  </p>
                  <div className="max-h-96 divide-y divide-bet62-border/60 overflow-auto rounded-lg bg-black/20 text-xs">
                    {(out.data.markets as Json[]).map((m) => (
                      <div key={m.id} className="px-3 py-2">
                        <div className="font-semibold">
                          <span className="font-mono text-white/40">{m.id}</span> {m.name} {m.code && <span className="text-white/40">[{m.code}]</span>}
                          <span className="ml-2 text-white/40">{m.selections} seleções</span>
                        </div>
                        <div className="text-white/50">{(m.sample as string[]).join(' · ')}</div>
                      </div>
                    ))}
                  </div>
                  {out.data.bodyStart && <Pre data={out.data.bodyStart} />}
                </div>
              ) : (
                <Pre data={out.data} />
              )}
            </div>
          )}
        </div>
      )}

      {/* Exemplos do que está guardado */}
      {s.configured && s.samples && (
        <div className={cn(panel, 'p-5')}>
          <div className="mb-3 font-bold">Jogos guardados (exemplos)</div>
          {(['live', 'next'] as const).map((k) => (
            <div key={k} className="mb-4 last:mb-0">
              <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/40">{k === 'live' ? 'Ao vivo' : 'Próximos'}</div>
              {(s.samples[k] as Json[]).length ? (
                <div className="divide-y divide-bet62-border/60 text-sm">
                  {(s.samples[k] as Json[]).map((e) => (
                    <div key={e.id} className="flex flex-wrap items-center gap-x-3 gap-y-1 py-1.5">
                      <span className="w-20 shrink-0 font-mono text-xs text-white/40">{e.id}</span>
                      <span className="min-w-[160px] flex-1 truncate">{e.home} - {e.away}</span>
                      <span className="text-xs text-white/50">{e.sportName} · {e.competition}</span>
                      <span className="font-mono text-xs">
                        {e.live ? `${e.score?.home ?? 0}-${e.score?.away ?? 0} ${e.clock ?? ''}` : new Date(e.startTime).toLocaleString('pt-PT', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })}
                      </span>
                      <span className={cn('text-xs', e.suspended ? 'text-amber-400' : 'text-white/50')}>{e.suspended ? 'suspenso' : `${e.marketCount} mercados`}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-white/40">Nenhum.</p>
              )}
            </div>
          ))}
          {(s.samples.ended as Json[])?.length ? (
            <div>
              <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/40">Acabados (veredito)</div>
              <div className="divide-y divide-bet62-border/60 text-sm">
                {(s.samples.ended as Json[]).map((e) => (
                  <div key={e.id} className="flex flex-wrap items-center gap-x-3 py-1.5">
                    <span className="min-w-[160px] flex-1 truncate">{e.home} - {e.away}</span>
                    <span className={cn('text-xs', e.verdict?.review ? 'text-amber-400' : 'text-emerald-500')}>
                      {e.verdict?.review ? `operador: ${e.verdict.review}` : `final ${e.verdict?.home}-${e.verdict?.away}`}
                    </span>
                    <span className="text-xs text-white/40">{ago(e.ended_at)}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
