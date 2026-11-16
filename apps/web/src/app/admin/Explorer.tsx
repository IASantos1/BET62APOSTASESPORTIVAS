'use client';

// Ferramentas do admin: estado das integrações do servidor (API-Football, Big Bang) e o Explorador
// BETBY — corre no navegador (a BETBY bloqueia servidores) e serve para descobrir o que mais a BETBY
// fornece: o evento em bruto, campos com id de tracker (minicampo), e endereços com todos os
// mercados ou estatísticas. O que funcionar fica guardado no servidor (/api/config) para todos.
import * as React from 'react';
import { CheckCircle2, AlertTriangle, Play, Save, Trash2 } from 'lucide-react';
import { useBoard, type BoardEvent } from '../../lib/board';
import { fillTemplate, loadSiteConfig, type SiteConfig } from '../../lib/site-config';
import { trackerCandidates, trackerFromWidgets, trackerUrl } from '../../lib/tracker';
import { cn } from '../../lib/utils';

const box = 'rounded-2xl border border-bet62-border bg-bet62-surface/50 p-5 space-y-3 text-sm';
const btn = 'inline-flex items-center gap-1.5 rounded-lg border border-bet62-border px-3 py-1.5 text-xs font-bold hover:border-bet62-primary/60';
const input = 'w-full rounded-lg border border-bet62-border bg-bet62-bg px-3 py-2 font-mono text-xs';

const CANDIDATES = [
  '{base}/api/v4/{feed}/brand/{brand}/{locale}/event/{id}',
  '{base}/api/v4/{feed}/brand/{brand}/{locale}/events/{id}',
  '{base}/api/v4/{feed}/brand/{brand}/{locale}/match/{id}',
  '{base}/api/v4/event/brand/{brand}/{locale}/{id}',
  '{base}/api/v3/{feed}/brand/{brand}/{locale}/event/{id}',
  '{base}/api/v2/{feed}/brand/{brand}/{locale}/event/{id}',
  '{base}/api/v1/events/brand/{brand}/event/{id}/{locale}',
  '{base}/api/v1/statistics/brand/{brand}/event/{id}',
  '{base}/api/v1/statistics/brand/{brand}/event/{id}/{locale}',
  '{base}/api/v1/stats/brand/{brand}/event/{id}/{locale}',
  '{base}/api/v1/scoreboard/brand/{brand}/event/{id}',
  '{base}/api/v1/match-tracker/brand/{brand}/event/{id}',
  '{base}/api/v1/tracker/brand/{brand}/event/{id}',
  '{base}/api/v3/descriptions/brand/{brand}/event/{id}/{locale}',
  '{base}/api/v1/betdistribution/brand/{brand}/event/{id}',
  '{base}/api/v1/bet-builder/brand/{brand}/sport/{sport}',
  '{base}/web/playtracker/gp-esoccer/api/events/availability?platform_id={id}',
];

interface Probe {
  tpl: string;
  url: string;
  status: string;
  ok: boolean;
  size?: number;
  keys?: string[];
  markets?: number;
  body?: string;
}

function countMarkets(j: unknown, id: string): number {
  const seen = new Set<object>();
  const visit = (value: unknown, depth = 0): number => {
    if (!value || typeof value !== 'object' || depth > 8 || seen.has(value as object)) return 0;
    seen.add(value as object);
    if (Array.isArray(value)) {
      for (const item of value) { const n = visit(item, depth + 1); if (n) return n; }
      return 0;
    }
    const o = value as Record<string, unknown>;
    if (o.markets && typeof o.markets === 'object' && !Array.isArray(o.markets)) return Object.keys(o.markets).length;
    const keys = [id, 'events', 'event', 'response', 'result', 'payload', 'data', 'body'];
    for (const key of keys) if (key in o) { const n = visit(o[key], depth + 1); if (n) return n; }
    for (const [key, child] of Object.entries(o)) if (!keys.includes(key) && key !== 'markets') {
      const n = visit(child, depth + 1); if (n) return n;
    }
    return 0;
  };
  return visit(j);
}

async function saveConfig(patch: SiteConfig) {
  const r = await fetch('/api/config', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(patch) });
  const j = await r.json();
  if (!r.ok) throw new Error(j.error || `HTTP ${r.status}`);
  await loadSiteConfig(true);
  return j as SiteConfig;
}

export function IntegrationsCard() {
  const [data, setData] = React.useState<Record<string, unknown> | null>(null);
  const [busy, setBusy] = React.useState(false);
  const load = async (test: boolean) => {
    setBusy(true);
    try {
      const r = await fetch(`/api/admin/status${test ? '?test=1' : ''}`, { cache: 'no-store' });
      setData(await r.json());
    } finally {
      setBusy(false);
    }
  };
  React.useEffect(() => {
    void load(false);
  }, []);
  const af = data?.apiFootball as Record<string, unknown> | undefined;
  const bb = data?.bigBang as Record<string, unknown> | undefined;
  const Row = ({ name, conf, test }: { name: string; conf: boolean; test?: { ok: boolean; error?: string } & Record<string, unknown> }) => (
    <div className="flex flex-wrap items-center gap-2">
      {conf && (!test || test.ok) ? <CheckCircle2 size={16} className="text-emerald-400" /> : <AlertTriangle size={16} className="text-bet62-danger" />}
      <b>{name}</b>
      <span className="text-white/55">{conf ? 'chave definida' : 'chave em falta'}</span>
      {test && <span className={cn('font-mono text-xs', test.ok ? 'text-emerald-400' : 'text-bet62-danger')}>{test.ok ? 'teste ok' : `teste falhou: ${test.error}`}</span>}
    </div>
  );
  return (
    <div className={box}>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-black">Integrações do servidor</h2>
        <button className={btn} onClick={() => void load(true)} disabled={busy}>
          <Play size={12} /> {busy ? 'A testar…' : 'Testar ligações'}
        </button>
      </div>
      {!data ? (
        <p className="text-white/55">A ler…</p>
      ) : (
        <>
          <Row name="API-Football (emblemas)" conf={!!af?.configured} test={af?.test as never} />
          <p className="text-xs text-white/50">
            Pedidos hoje: {String(af?.usedToday ?? 0)}/{String(af?.dailyLimit ?? '')}
            {af?.remaining !== null && af?.remaining !== undefined ? ` · restantes na conta: ${String(af.remaining)}` : ''}
            {af?.lastError ? ` · último erro: ${String(af.lastError)}` : ''}
          </p>
          {af?.logos ? (
            <p className="text-xs text-white/50">
              Emblemas: {String((af.logos as { leaguesLoaded: number }).leaguesLoaded)}/{String((af.logos as { leaguesTotal: number }).leaguesTotal)} ligas
              descarregadas
              {(af.logos as { warming: boolean }).warming ? ' · a descarregar…' : ''}
            </p>
          ) : null}
          <Row name="Big Bang Casino" conf={!!bb?.configured} test={bb?.test as never} />
          <p className="text-xs text-white/50">
            {bb?.sandbox ? 'chave de teste (sandbox) · ' : ''}
            {String(bb?.baseUrl ?? '')}
            {bb?.test && (bb.test as { games?: number }).games !== undefined ? ` · ${(bb.test as { games: number }).games} jogos` : ''}
            {bb?.lastError ? ` · último erro: ${String(bb.lastError)}` : ''}
          </p>
          <details>
            <summary className="cursor-pointer text-xs text-white/50">Variáveis</summary>
            <pre className="mt-2 whitespace-pre-wrap font-mono text-xs text-white/60">{JSON.stringify(data.env, null, 1)}</pre>
          </details>
        </>
      )}
    </div>
  );
}

export function BetbyExplorer() {
  const { events, widgets, broadcasts } = useBoard();
  const [id, setId] = React.useState('');
  const [cfg, setCfg] = React.useState<SiteConfig>({});
  const [probes, setProbes] = React.useState<Probe[]>([]);
  const [running, setRunning] = React.useState(false);
  const [custom, setCustom] = React.useState('');
  const [trk, setTrk] = React.useState<{ provider: string; eventId: string } | null>(null);
  const [broadcast, setBroadcast] = React.useState<string | null>(null);
  const [msg, setMsg] = React.useState<string | null>(null);
  const [needle, setNeedle] = React.useState('');
  const hits = React.useMemo(() => {
    const n = needle.trim();
    if (n.length < 4) return [];
    const out: { ev: BoardEvent; where: string }[] = [];
    for (const ev of events) {
      const text = JSON.stringify(ev.raw ?? {});
      const i = text.indexOf(n);
      if (i >= 0) out.push({ ev, where: text.slice(Math.max(0, i - 80), i + n.length + 40) });
      if (out.length >= 10) break;
    }
    return out;
  }, [needle, events]);
  React.useEffect(() => {
    loadSiteConfig(true).then(setCfg);
  }, []);
  const list = React.useMemo(
    () => [...events].sort((a, b) => Number(b.status === 'live') - Number(a.status === 'live') || a.tier - b.tier).slice(0, 300),
    [events],
  );
  const e: BoardEvent | undefined = events.find((x) => x.id === id) ?? list[0];
  const feed = e?.status === 'live' ? 'live' : 'prematch';
  const fill = (tpl: string) => (e ? fillTemplate(tpl, e.id, feed).replace(/\{sport\}/g, e.betbySport ?? '1') : tpl);
  const cands = e ? trackerCandidates(e.raw) : [];
  const sideWidgets = e ? widgets.get(e.id) ?? [] : [];
  const sideCasts = e ? broadcasts.get(e.id) ?? [] : [];
  const sideTracker = e ? trackerFromWidgets(sideWidgets, e.betbySport ?? '1') : null;
  const { markets: _m, ...rawNoMarkets } = (e?.raw ?? {}) as Record<string, unknown>;

  const run = async (tpls: string[]) => {
    if (!e) return;
    setRunning(true);
    const out: Probe[] = [];
    for (const tpl of tpls) {
      const url = fill(tpl);
      try {
        const r = await fetch(url, { cache: 'no-store' });
        const text = await r.text();
        let j: unknown = null;
        try {
          j = JSON.parse(text);
        } catch {
          // não JSON
        }
        out.push({
          tpl,
          url,
          ok: r.ok,
          status: `${r.status}${r.headers.get('bb-rsn') ? ` (${r.headers.get('bb-rsn')})` : ''}`,
          size: text.length,
          keys: j && typeof j === 'object' ? Object.keys(j as object).slice(0, 12) : undefined,
          markets: countMarkets(j, e.id),
          body: text.slice(0, 4000),
        });
      } catch (err) {
        out.push({ tpl, url, ok: false, status: err instanceof Error ? err.message : String(err) });
      }
      setProbes([...out]);
    }
    setRunning(false);
  };

  const save = async (patch: SiteConfig, label: string) => {
    try {
      setCfg(await saveConfig(patch));
      setMsg(`Guardado: ${label}`);
    } catch (err) {
      setMsg(`Erro: ${err instanceof Error ? err.message : String(err)}`);
    }
  };

  return (
    <div className={box}>
      <h2 className="text-lg font-black">Explorador BETBY</h2>
      <p className="text-xs text-white/55">
        Corre no seu navegador. Escolha um jogo (os ao vivo primeiro), veja o evento em bruto, procure o id do minicampo e teste endereços
        para os mercados completos e as estatísticas. O que escolher fica guardado no servidor para todos os visitantes.
      </p>

      <div className="rounded-xl border border-bet62-border p-3 text-xs">
        <b>Configuração atual</b>
        <p className="mt-1 font-mono text-white/60 break-all">mercados completos: {cfg.eventEndpoint || '—'}</p>
        <p className="font-mono text-white/60 break-all">estatísticas: {cfg.statsEndpoint || '—'}</p>
        <p className="font-mono text-white/60 break-all">tracker: {cfg.trackerField ? `${cfg.trackerField.provider} ← ${cfg.trackerField.path}` : 'automático'}</p>
        <button className={cn(btn, 'mt-2')} onClick={() => void save({ eventEndpoint: null, statsEndpoint: null, trackerField: null }, 'configuração limpa')}>
          <Trash2 size={12} /> Limpar
        </button>
      </div>
      {msg && <p className="text-xs text-bet62-primary">{msg}</p>}

      <div className="space-y-2 rounded-xl border border-bet62-border p-3">
        <b className="text-xs">Procurar um número em todos os jogos (ex.: o id do statscore 6541376)</b>
        <input value={needle} onChange={(ev) => setNeedle(ev.target.value)} placeholder="número ou texto" className={input} />
        {needle.trim().length >= 4 && (
          <p className="text-xs text-white/55">{hits.length ? `${hits.length} jogo(s) com este valor:` : 'Não aparece nos dados que a BETBY envia na lista.'}</p>
        )}
        {hits.map((h) => (
          <button key={h.ev.id} onClick={() => setId(h.ev.id)} className="block w-full rounded-lg bg-bet62-bg p-2 text-left font-mono text-[11px] text-white/70">
            {h.ev.home} - {h.ev.away}: …{h.where}…
          </button>
        ))}
      </div>

      <select value={e?.id ?? ''} onChange={(ev) => setId(ev.target.value)} className={input}>
        {list.map((x) => (
          <option key={x.id} value={x.id}>
            {x.status === 'live' ? '● ' : ''}
            {x.sportName} · {x.home} - {x.away} · {x.league}
          </option>
        ))}
      </select>

      {e && (
        <>
          <p className="font-mono text-xs text-white/55">
            id {e.id} · desporto BETBY {e.betbySport} · {Object.keys(e.markets).length} mercados na lista
          </p>
          <details>
            <summary className="cursor-pointer text-xs font-bold">Evento em bruto (sem mercados)</summary>
            <pre className="mt-2 max-h-80 overflow-auto whitespace-pre-wrap break-all rounded-lg bg-bet62-bg p-2 font-mono text-[11px] text-white/70">
              {JSON.stringify(rawNoMarkets, null, 1)}
            </pre>
          </details>

          <div className="space-y-2 rounded-xl border border-bet62-border p-3">
            <b className="text-xs">Side feed (widgets do jogo)</b>
            <p className="text-xs text-white/55">
              O feed de odds não traz o id do minicampo. Ele vem no side feed <code>api/v1/side/brand/…</code> ({sideWidgets.length} widget(s),{' '}
              {sideCasts.length} transmissão(ões)).
            </p>
            {sideWidgets.length ? (
              sideWidgets.map((w, i) => (
                <div key={`${w.id}-${w.type}-${i}`} className="break-all font-mono text-[11px] text-white/70">
                  {w.id}:{w.type}
                  {w.event_id !== undefined ? ` · event_id = ${w.event_id}` : ''}
                  {w.url ? ` · ${w.url}` : ''}
                </div>
              ))
            ) : (
              <p className="text-xs text-white/55">Sem widgets no side feed para este jogo.</p>
            )}
            {sideTracker && (
              <>
                <p className="break-all font-mono text-[11px] text-white/45">{sideTracker}</p>
                <iframe src={sideTracker} title="Minicampo do side feed" className="h-80 w-full rounded-lg border border-bet62-border" />
              </>
            )}
            {sideCasts.filter((b) => b.url).map((b, i) => (
              <button key={`cast-${i}`} className={btn} onClick={() => setBroadcast(b.url!)}>
                <Play size={12} /> Testar transmissão {b.id}
              </button>
            ))}
            {broadcast && (
              <iframe src={broadcast} title="Transmissão de teste" className="aspect-video w-full rounded-lg border border-bet62-border" allowFullScreen />
            )}
          </div>

          <div className="space-y-2 rounded-xl border border-bet62-border p-3">
            <b className="text-xs">Minicampo (tracker)</b>
            {cands.length ? (
              cands.map((c) => (
                <div key={c.path} className="flex flex-wrap items-center gap-2 font-mono text-xs">
                  <span>
                    {c.path} = {c.value} ({c.provider})
                  </span>
                  <button className={btn} onClick={() => setTrk({ provider: c.provider, eventId: c.value })}>
                    Testar
                  </button>
                  <button className={btn} onClick={() => void save({ trackerField: { path: c.path, provider: c.provider } }, `tracker ${c.path}`)}>
                    <Save size={12} /> Usar
                  </button>
                </div>
              ))
            ) : (
              <p className="text-xs text-white/55">
                O evento em bruto do feed não tem id de tracking. O caminho normal é o side feed acima; aqui só se quiseres fixar um campo
                concreto do evento (STATSCORE, Sportradar/BetRadar, LMT).
              </p>
            )}
            <form
              className="flex flex-wrap gap-2"
              onSubmit={(ev) => {
                ev.preventDefault();
                const f = new FormData(ev.currentTarget);
                setTrk({ provider: String(f.get('p') || 'statscore'), eventId: String(f.get('i') || '') });
              }}
            >
              <input name="p" defaultValue="statscore" className={cn(input, 'w-32')} aria-label="Fornecedor" />
              <input name="i" placeholder="id do jogo no fornecedor (ex.: 6390437)" className={cn(input, 'flex-1')} aria-label="Id" />
              <button className={btn}>Testar</button>
            </form>
            {trk && (
              <>
                <p className="break-all font-mono text-[11px] text-white/45">{trackerUrl(trk.provider, e.betbySport ?? '1', trk.eventId)}</p>
                <iframe src={trackerUrl(trk.provider, e.betbySport ?? '1', trk.eventId)} title="Teste do tracker" className="h-80 w-full rounded-lg border border-bet62-border" />
              </>
            )}
          </div>

          <div className="space-y-2 rounded-xl border border-bet62-border p-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <b className="text-xs">Endereços da BETBY para este jogo</b>
              <button className={btn} onClick={() => void run(CANDIDATES)} disabled={running}>
                <Play size={12} /> {running ? 'A testar…' : `Testar ${CANDIDATES.length} endereços`}
              </button>
            </div>
            <form
              className="flex gap-2"
              onSubmit={(ev) => {
                ev.preventDefault();
                if (custom.trim()) void run([custom.trim()]);
              }}
            >
              <input
                value={custom}
                onChange={(ev) => setCustom(ev.target.value)}
                placeholder="Outro endereço: {base} {brand} {locale} {feed} {id} {sport}"
                className={cn(input, 'flex-1')}
              />
              <button className={btn}>Testar</button>
            </form>
            {probes.map((p) => (
              <details key={p.url} className={cn('rounded-lg border p-2', p.ok ? 'border-emerald-500/40' : 'border-bet62-border')}>
                <summary className="cursor-pointer font-mono text-[11px]">
                  <span className={p.ok ? 'text-emerald-400' : 'text-white/45'}>{p.status}</span> {p.tpl}
                  {p.ok && ` · ${p.size} bytes${p.markets ? ` · ${p.markets} mercados` : ''}`}
                </summary>
                <p className="mt-1 break-all font-mono text-[11px] text-white/45">{p.url}</p>
                {p.keys && <p className="font-mono text-[11px] text-white/60">chaves: {p.keys.join(', ')}</p>}
                {p.ok && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {!!p.markets && (
                      <button className={btn} onClick={() => void save({ eventEndpoint: p.tpl }, 'mercados completos')}>
                        <Save size={12} /> Usar para os mercados
                      </button>
                    )}
                    <button className={btn} onClick={() => void save({ statsEndpoint: p.tpl }, 'estatísticas')}>
                      <Save size={12} /> Usar para as estatísticas
                    </button>
                  </div>
                )}
                {p.body && (
                  <pre className="mt-2 max-h-60 overflow-auto whitespace-pre-wrap break-all rounded bg-bet62-bg p-2 font-mono text-[10px] text-white/60">{p.body}</pre>
                )}
              </details>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
