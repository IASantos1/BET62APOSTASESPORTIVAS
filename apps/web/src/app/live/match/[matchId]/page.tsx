'use client';

// Detalhe do jogo: placar, estatísticas ao vivo (cartões, cantos…) e todos os mercados,
// cada odd clicável para o boletim.
import Link from 'next/link';
import * as React from 'react';
import { Activity, ArrowLeft, BarChart3, Clock3, MonitorPlay } from 'lucide-react';
import { SportsShell } from '../../../../components/sports/SportsShell';
import { EmptyPanel } from '../../../../components/sports/blocks';
import { LeagueLogo, TeamLogo, leagueApiId } from '../../../../components/sports/Logos';
import { OddArrow } from '../../../../components/sports/blocks';
import { fmtWhen } from '../../../../components/sports/links';
import { fetchBetDistribution, fetchDescriptions, type BetbyDescriptions, type BetbyDistribution } from '../../../../lib/betby';
import { pickOf, useBoard, type BoardEvent } from '../../../../lib/board';
import { SPORT_BY_KEY, countryLabel } from '../../../../lib/sports/catalog';
import { useSlip } from '../../../../stores/slip.store';
import { cn } from '../../../../lib/utils';
import { fillTemplate, useSiteConfig } from '../../../../lib/site-config';
import { trackerFor } from '../../../../lib/tracker';
import { BETBY_CONFIG, type BetbyMarkets } from '../../../../lib/betby';
import { useSportsTracker } from '../../../../components/sports/SportsTrackerContext';

// Nomes dos mercados mais comuns (ids Betradar usados pela BETBY). O nome da BETBY
// (/api/v3/descriptions) tem prioridade; depois estes; senão o id.
const MARKET_NAMES: Record<string, string> = {
  '1': 'Resultado final', '8': 'Próximo golo', '10': 'Dupla hipótese', '11': 'Empate anula aposta', '14': 'Handicap europeu',
  '16': 'Handicap', '18': 'Total de golos', '19': 'Total de golos (casa)', '20': 'Total de golos (fora)', '26': 'Par / Ímpar',
  '29': 'Ambas as equipas marcam', '35': 'Resultado e ambas marcam', '37': 'Resultado e total de golos', '45': 'Resultado exato',
  '47': 'Intervalo / Final', '60': 'Resultado 1.ª parte', '63': 'Dupla hipótese 1.ª parte', '66': 'Handicap 1.ª parte',
  '68': 'Total de golos 1.ª parte', '69': 'Total 1.ª parte (casa)', '70': 'Total 1.ª parte (fora)', '74': 'Ambas marcam 1.ª parte',
  '75': 'Ambas marcam 2.ª parte', '81': 'Resultado exato 1.ª parte', '83': 'Resultado 2.ª parte', '186': 'Vencedor',
  '187': 'Handicap de jogos', '189': 'Total de jogos', '199': 'Resultado exato (sets)', '202': 'Vencedor do set',
  '219': 'Vencedor (incl. prolongamento)', '223': 'Handicap (incl. prolongamento)', '225': 'Total (incl. prolongamento)',
  '340': 'Vencedor', '406': 'Vencedor (incl. prolongamento)',
};
const OUTCOME_NAMES: Record<string, string> = {
  '2': 'Empate', '9': '1X', '10': '12', '11': 'X2', '12': 'Mais', '13': 'Menos', '70': 'Ímpar', '72': 'Par', '74': 'Sim', '76': 'Não',
  '78': '1 e Sim', '80': '1 e Não', '82': 'X e Sim', '84': 'X e Não', '86': '2 e Sim', '88': '2 e Não',
  '794': '1 e Menos', '796': '1 e Mais', '798': 'X e Menos', '800': 'X e Mais', '802': '2 e Menos', '804': '2 e Mais',
};
const STAT_NAMES: Record<string, string> = {
  corners: 'Cantos', yellow_cards: 'Cartões amarelos', red_cards: 'Cartões vermelhos', yellow_red_cards: 'Segundo amarelo',
};
// Categorias como no outro projeto (só aparecem as que têm mercados neste jogo).
const CATS: [string, string][] = [
  ['todos', 'Todos'], ['principais', 'Principais'], ['golos', 'Golos'], ['handicap', 'Handicap'], ['equipa', 'Equipa'],
  ['combinadas', 'Combinadas'], ['resultados', 'Resultados'], ['periodos', 'Períodos'], ['marcadores', 'Marcadores'],
  ['cantos', 'Cantos e cartões'], ['especiais', 'Especiais'],
];
const CAT_BY_ID: Record<string, string> = {
  '1': 'principais', '10': 'principais', '11': 'principais', '186': 'principais', '219': 'principais', '340': 'principais', '406': 'principais',
  '8': 'golos', '18': 'golos', '26': 'golos', '29': 'golos', '225': 'golos', '189': 'golos',
  '19': 'equipa', '20': 'equipa', '69': 'periodos', '70': 'periodos',
  '14': 'handicap', '16': 'handicap', '187': 'handicap', '223': 'handicap',
  '35': 'combinadas', '36': 'combinadas', '37': 'combinadas',
  '45': 'resultados', '47': 'resultados', '199': 'resultados',
  '60': 'periodos', '63': 'periodos', '66': 'periodos', '68': 'periodos', '74': 'periodos', '75': 'periodos', '81': 'periodos', '83': 'periodos', '202': 'periodos',
};
const CAT_BY_NAME: [string, RegExp][] = [
  ['cantos', /corner|card|booking|canto|cart[aã]o/i],
  ['marcadores', /scorer|player|marcador|jogador/i],
  ['periodos', /\b(half|quarter|period|set|innings?)\b|intervalo|parte\b|per[ií]odo|quarto/i],
  ['combinadas', /&|\band\b|\be\b.*(total|golos|ambas)/i],
  ['handicap', /handicap|spread/i],
  ['equipa', /\b(team [12]|home team|away team)\b|\(casa\)|\(fora\)|equipa/i],
  ['golos', /goal|total|both|golo|odd|even|par|ímpar|marcam/i],
  ['resultados', /result|score|exact|margin|exato|resultado/i],
];
const catOf = (id: string, name: string) => CAT_BY_ID[id] ?? CAT_BY_NAME.find(([, re]) => re.test(name))?.[0] ?? 'especiais';

// Mercados principais primeiro, depois pelo id.
const ORDER = ['1', '186', '219', '340', '406', '10', '18', '29', '16', '11', '60', '68', '37', '35', '45'];
const marketRank = (id: string) => (ORDER.includes(id) ? ORDER.indexOf(id) : 100 + Number(id) / 1e6);

function variantLabel(variant: string) {
  // "variant=..." são ids internos (as seleções já trazem o nome); o resto são linhas como "total=2.5".
  if (!variant || variant.startsWith('variant=') || variant === 'type=general') return '';
  return variant
    .split('|')
    .map((part) =>
      part
        .replace(/^total=/, 'Linha ')
        .replace(/^hcp=/, 'Handicap ')
        .replace(/^setnr=/, 'Set ')
        .replace(/^gamenr=/, 'Jogo ')
        .replace(/^(quarternr|periodnr)=/, 'Período ')
        .replace(/^goalnr=/, 'Golo n.º ')
        .replace(/=/g, ' '),
    )
    .join(' · ');
}

/** Ordena linhas de totais/handicaps pelo valor numérico, nunca pela ordem de chegada do JSON. */
function variantLineValue(variant: string): number | null {
  const match = variant.match(/(?:^|[|;])(?:total|hcp|handicap|spread|line)=(-?\d+(?:\.\d+)?)/i);
  return match ? Number(match[1]) : null;
}

function compareVariants(a: string, b: string): number {
  const av = variantLineValue(a);
  const bv = variantLineValue(b);
  if (av !== null && bv !== null && av !== bv) return av - bv;
  if (av !== null && bv === null) return -1;
  if (av === null && bv !== null) return 1;
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
}

const num = (v: unknown) => (typeof v === 'number' ? v : Number(v));
function statRows(stats: BoardEvent['statistics']) {
  return Object.entries(stats ?? {})
    .filter(([, v]) => v && typeof v === 'object' && Number.isFinite(num(v.home)) && Number.isFinite(num(v.away)))
    .map(([k, v]) => ({ key: k, name: STAT_NAMES[k] ?? k.replace(/_/g, ' '), home: num(v.home), away: num(v.away) }));
}

interface Cell {
  id: string;
  moveKey: string;
  label: string;
  price: string;
  blocked: boolean;
  suspended: boolean;
  selected: boolean;
  pct?: number;
  onClick: () => void;
}

/** Uma odd: nome à esquerda, preço à direita (ou só o preço, nas linhas com cabeçalho). */
function OddCell({ c, priceOnly }: { c: Cell; priceOnly?: boolean }) {
  return (
    <button
      type="button"
      disabled={c.blocked}
      title={c.suspended ? `${c.label} - Suspenso` : c.label}
      onClick={c.onClick}
      className={cn(
        'flex min-w-0 items-center gap-2 rounded-lg px-3 py-2.5 text-sm transition',
        priceOnly ? 'justify-center' : 'justify-between',
        c.selected ? 'bg-bet62-primary text-onbrand' : 'bg-bet62-odd hover:bg-bet62-odd-hover',
        c.blocked && 'cursor-not-allowed opacity-40',
      )}
    >
      {!priceOnly && (
        <span className={cn('min-w-0 truncate text-xs font-semibold', c.selected ? 'text-onbrand/85' : 'text-white/70')}>
          {c.label}
          {c.pct !== undefined && <span className="ml-1 font-normal opacity-60">{c.pct}%</span>}
        </span>
      )}
      <span className="flex shrink-0 items-center gap-1">
        <OddArrow moveKey={c.moveKey} />
        <b className={cn('font-mono', c.suspended && 'text-[10px] leading-tight', c.selected ? 'text-onbrand' : 'text-bet62-odd-price')}>
          {c.suspended ? 'Suspenso' : c.blocked ? '—' : c.price}
        </b>
      </span>
    </button>
  );
}

const colsClass = (n: number) => (n <= 1 ? 'grid-cols-1' : n === 2 ? 'grid-cols-2' : 'grid-cols-3');

/**
 * Um mercado como no outro projeto: sem linhas, as seleções lado a lado (até 3 por fila);
 * com linhas (total 2.5, handicap -1…), uma fila por linha: a linha à esquerda e as odds ao lado,
 * com os nomes das seleções (Mais / Menos, equipas) no cabeçalho.
 */
function MarketBlock({ title, rows }: { title: string; rows: { variant: string; label: string; cells: Cell[] }[] }) {
  const lined = rows.some((r) => r.label);
  const head = rows[0]?.cells.map((c) => c.label) ?? [];
  const sameHead = lined && rows.every((r) => r.cells.length === head.length && r.cells.every((c, i) => c.label === head[i])) && head.length <= 3;
  return (
    <div className="rounded-xl border border-bet62-border bg-bet62-surface/50 p-3">
      <p className="mb-2.5 text-xs font-extrabold uppercase tracking-wide text-white/60">{title}</p>
      {sameHead ? (
        <div className="space-y-1.5">
          <div className="grid grid-cols-[5.5rem_1fr] gap-2 md:grid-cols-[7rem_1fr]">
            <span />
            <div className={cn('grid gap-1.5 text-center text-[11px] font-semibold text-white/45', colsClass(head.length))}>
              {head.map((h) => (
                <span key={h} className="truncate">{h}</span>
              ))}
            </div>
          </div>
          {rows.map((r) => (
            <div key={r.variant} className="grid grid-cols-[5.5rem_1fr] items-center gap-2 md:grid-cols-[7rem_1fr]">
              <span className="truncate text-xs font-bold text-white/55">{r.label.replace(/^Linha /, '')}</span>
              <div className={cn('grid gap-1.5', colsClass(r.cells.length))}>
                {r.cells.map((c) => (
                  <OddCell key={c.id} c={c} priceOnly />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-2">
          {rows.map((r) => (
            <div key={r.variant} className="space-y-1.5">
              {r.label && <p className="text-[11px] font-semibold text-white/45">{r.label}</p>}
              <div className={cn('grid gap-1.5', colsClass(r.cells.length))}>
                {r.cells.map((c) => (
                  <OddCell key={c.id} c={c} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/** Extrai mercados mesmo quando a BETBY envolve o evento em response/result/payload/data. */
function extractMarkets(payload: unknown, eventId: string): BetbyMarkets | null {
  const seen = new Set<object>();
  const preferred = ['markets', eventId, 'events', 'event', 'response', 'result', 'payload', 'data', 'body'];
  const visit = (value: unknown, depth = 0): BetbyMarkets | null => {
    if (!value || typeof value !== 'object' || depth > 8 || seen.has(value as object)) return null;
    seen.add(value as object);
    if (Array.isArray(value)) {
      for (const item of value) { const found = visit(item, depth + 1); if (found) return found; }
      return null;
    }
    const obj = value as Record<string, unknown>;
    if (obj.markets && typeof obj.markets === 'object' && !Array.isArray(obj.markets)) {
      return obj.markets as BetbyMarkets;
    }
    for (const key of preferred) {
      if (key === 'markets') continue;
      if (key in obj) { const found = visit(obj[key], depth + 1); if (found) return found; }
    }
    for (const [key, child] of Object.entries(obj)) {
      if (preferred.includes(key) || key === 'markets') continue;
      const found = visit(child, depth + 1);
      if (found) return found;
    }
    return null;
  };
  return visit(payload);
}

/** Une mercados por id, variante e seleção; não descarta variantes já recebidas no feed live. */
function mergeMarkets(base: BetbyMarkets, extra: BetbyMarkets | null): BetbyMarkets {
  if (!extra) return base;
  const merged: BetbyMarkets = {};
  for (const [marketId, variants] of Object.entries(base)) {
    merged[marketId] = {};
    for (const [variant, outcomes] of Object.entries(variants ?? {})) merged[marketId][variant] = { ...outcomes };
  }
  for (const [marketId, variants] of Object.entries(extra)) {
    const current = merged[marketId] ?? (merged[marketId] = {});
    for (const [variant, outcomes] of Object.entries(variants ?? {})) {
      current[variant] = { ...(current[variant] ?? {}), ...(outcomes ?? {}) };
    }
  }
  return merged;
}

/** Os mercados completos do jogo, quando o admin indicou o endereço da BETBY que os traz. */
// Endereços possíveis da BETBY com todos os mercados de um jogo. Sem endereço fixado no admin, a
// página testa-os uma vez (no navegador, a BETBY bloqueia servidores) e guarda o que trouxer mais
// mercados do que a lista; nenhum serve → volta a tentar daqui a 6 h.
const EVENT_CANDIDATES = [
  '{base}/api/v4/{feed}/brand/{brand}/{locale}/event/{id}',
  '{base}/api/v4/{feed}/brand/{brand}/{locale}/events/{id}',
  '{base}/api/v4/{feed}/brand/{brand}/{locale}/match/{id}',
  '{base}/api/v4/event/brand/{brand}/{locale}/{id}',
  '{base}/api/v3/{feed}/brand/{brand}/{locale}/event/{id}',
  '{base}/api/v2/{feed}/brand/{brand}/{locale}/event/{id}',
  '{base}/api/v1/events/brand/{brand}/event/{id}/{locale}',
];
const DISCOVERY_KEY = 'bet62-event-endpoint';

function useEventEndpoint(id: string, feed: 'live' | 'prematch', configured: string | null | undefined, ready: boolean, baseCount: number) {
  const [tpl, setTpl] = React.useState<string | null>(null);
  React.useEffect(() => {
    if (configured) {
      setTpl(configured);
      return;
    }
    if (!ready) return;
    let saved: { tpl: string | null; at: number } | null = null;
    try {
      saved = JSON.parse(localStorage.getItem(DISCOVERY_KEY) || 'null');
    } catch {}
    if (saved?.tpl) {
      setTpl(saved.tpl);
      return;
    }
    if (saved && Date.now() - saved.at < 6 * 3600_000) return;
    let stop = false;
    void (async () => {
      for (const c of EVENT_CANDIDATES) {
        try {
          const r = await fetch(fillTemplate(c, id, feed), { cache: 'no-store' });
          if (!r.ok) {
            if (id === '2733659201518837788') console.info('[BET62 MARKET AUDIT]', { stage: 'event-endpoint-candidate-http-error', candidate: c, httpStatus: r.status });
            continue;
          }
          const found = extractMarkets(await r.json(), id);
          if (id === '2733659201518837788') console.info('[BET62 MARKET AUDIT]', { stage: 'event-endpoint-candidate', candidate: c, httpStatus: r.status, marketCount: found ? Object.keys(found).length : 0, marketIds: found ? Object.keys(found) : [] });
          if (found && Object.keys(found).length > baseCount) {
            try {
              localStorage.setItem(DISCOVERY_KEY, JSON.stringify({ tpl: c, at: Date.now() }));
            } catch {}
            if (!stop) setTpl(c);
            return;
          }
        } catch (error) {
          if (id === '2733659201518837788') console.info('[BET62 MARKET AUDIT]', { stage: 'event-endpoint-candidate-error', candidate: c, error: error instanceof Error ? error.message : String(error) });
          // bloqueado, 404 ou não JSON: o seguinte
        }
      }
      try {
        localStorage.setItem(DISCOVERY_KEY, JSON.stringify({ tpl: null, at: Date.now() }));
      } catch {}
    })();
    return () => {
      stop = true;
    };
  }, [id, feed, configured, ready, baseCount]);
  return tpl;
}

function useFullMarkets(id: string, feed: 'live' | 'prematch', tpl: string | null | undefined) {
  const [markets, setMarkets] = React.useState<BetbyMarkets | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  React.useEffect(() => {
    if (!tpl) { setMarkets(null); setError(null); return; }
    let stop = false;
    const load = async () => {
      try {
        const r = await fetch(fillTemplate(tpl, id, feed), { cache: 'no-store' });
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        const j = await r.json();
        const found = extractMarkets(j, id);
        if (!found || !Object.keys(found).length) throw new Error('Resposta sem mercados reconhecidos (verifique o formato do endpoint BETBY).');
        if (id === '2733659201518837788') console.info('[BET62 MARKET AUDIT]', { stage: 'full-markets-loaded', marketCount: Object.keys(found).length, marketIds: Object.keys(found) });
        if (!stop) { setMarkets(found); setError(null); }
      } catch (e) {
        if (!stop) setError(e instanceof Error ? e.message : String(e));
      }
    };
    void load();
    const t = window.setInterval(load, feed === 'live' ? 15_000 : 60_000);
    return () => { stop = true; window.clearInterval(t); };
  }, [id, feed, tpl]);
  return { markets, error };
}

/** Estatísticas da BETBY (endereço indicado no admin): qualquer par casa/fora vira uma barra. */
function useBetbyStats(id: string, feed: 'live' | 'prematch', tpl: string | null | undefined, on: boolean) {
  const [data, setData] = React.useState<unknown>(null);
  const [error, setError] = React.useState<string | null>(null);
  React.useEffect(() => {
    if (!tpl) { setData(null); setError(null); return; }
    if (!on) return;
    setData(null);
    setError(null);
    let stop = false;
    const load = () =>
      fetch(fillTemplate(tpl, id, feed), { cache: 'no-store' })
        .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`))))
        .then((j) => !stop && (setData(j), setError(null)))
        .catch((e) => !stop && setError(e instanceof Error ? e.message : String(e)));
    void load();
    const t = window.setInterval(load, feed === 'live' ? 20_000 : 5 * 60_000);
    return () => {
      stop = true;
      window.clearInterval(t);
    };
  }, [id, feed, tpl, on]);
  return { data, error };
}

function pairsOf(v: unknown, prefix = '', out: { key: string; home: number; away: number }[] = [], depth = 0) {
  if (!v || typeof v !== 'object' || depth > 8) return out;
  const o = v as Record<string, unknown>;
  const h = o.home ?? o.home_value ?? o.homeValue ?? o.team1 ?? o['1'];
  const a = o.away ?? o.away_value ?? o.awayValue ?? o.team2 ?? o['2'];
  if (h !== undefined && a !== undefined && Number.isFinite(Number(String(h).replace('%', '').replace(',', '.'))) && Number.isFinite(Number(String(a).replace('%', '').replace(',', '.')))) {
    out.push({ key: String(o.name ?? o.title ?? o.type ?? prefix), home: Number(String(h).replace('%', '').replace(',', '.')), away: Number(String(a).replace('%', '').replace(',', '.')) });
    return out;
  }
  if (o.home && o.away && typeof o.home === 'object' && typeof o.away === 'object') {
    const home = o.home as Record<string, unknown>;
    const away = o.away as Record<string, unknown>;
    for (const metric of new Set([...Object.keys(home), ...Object.keys(away)])) {
      const hv = Number(String(home[metric]).replace('%', '').replace(',', '.'));
      const av = Number(String(away[metric]).replace('%', '').replace(',', '.'));
      if (Number.isFinite(hv) && Number.isFinite(av)) out.push({ key: metric, home: hv, away: av });
    }
    return out;
  }
  for (const [k, x] of Object.entries(o)) pairsOf(x, k, out, depth + 1);
  return out;
}

const STAT_LABEL: Record<string, string> = {
  ...STAT_NAMES,
  possession: 'Posse de bola', ball_possession: 'Posse de bola', xg: 'Golos esperados (xG)', expected_goals: 'Golos esperados (xG)',
  aces: 'Aces', double_faults: 'Duplas faltas', first_serve: 'Primeiro serviço', break_points: 'Pontos de break',
  rebounds: 'Ressaltos', assists: 'Assistências', turnovers: 'Perdas de bola', steals: 'Roubos de bola', blocks: 'Desarmes / blocos', three_pointers: 'Triplos',
  shots: 'Remates', shots_total: 'Remates', shots_on_target: 'Remates à baliza', shots_off_target: 'Remates fora',
  attacks: 'Ataques', dangerous_attacks: 'Ataques perigosos', fouls: 'Faltas', offsides: 'Foras de jogo', free_kicks: 'Livres',
  goal_kicks: 'Pontapés de baliza', throw_ins: 'Lançamentos', saves: 'Defesas', penalties: 'Penáltis', substitutions: 'Substituições',
};
const statLabel = (k: string) => STAT_LABEL[k.toLowerCase()] ?? k.replace(/_/g, ' ').replace(/^\w/, (c) => c.toUpperCase());

function StatBars({ rows }: { rows: { key: string; home: number; away: number }[] }) {
  return (
    <div className="space-y-3">
      {rows.map((s) => {
        const total = s.home + s.away;
        return (
          <div key={s.key} className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <b className="font-mono">{s.home}</b>
              <span className="text-xs text-white/60">{statLabel(s.key)}</span>
              <b className="font-mono">{s.away}</b>
            </div>
            <div className="flex h-1.5 gap-1">
              <span className="flex flex-1 justify-end overflow-hidden rounded-full bg-white/10">
                <span className="rounded-full bg-bet62-primary" style={{ width: `${total ? (s.home / total) * 100 : 0}%` }} />
              </span>
              <span className="flex flex-1 overflow-hidden rounded-full bg-white/10">
                <span className="rounded-full bg-white/60" style={{ width: `${total ? (s.away / total) * 100 : 0}%` }} />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

type View = 'mercados' | 'tracker' | 'live' | 'estatisticas';

function Inner({ id }: { id: string }) {
  const { events, loading, widgets, broadcasts } = useBoard();
  const e = events.find((x) => x.id === id);
  const picks = useSlip((s) => s.picks);
  const toggle = useSlip((s) => s.toggle);
  const cfg = useSiteConfig();
  const { setTracker } = useSportsTracker();
  const live = e?.status === 'live';
  const feed = live ? 'live' : 'prematch';
  const [descriptions, setDescriptions] = React.useState<BetbyDescriptions>({});
  const [distribution, setDistribution] = React.useState<BetbyDistribution>({});
  const [cat, setCat] = React.useState('todos');
  const [view, setView] = React.useState<View>('mercados');
  const [desktopTracker, setDesktopTracker] = React.useState(false);
  const endpoint = useEventEndpoint(id, feed, cfg?.eventEndpoint, cfg !== null && !!e, e ? Object.keys(e.markets).length : 0);
  const fullMarketState = useFullMarkets(id, feed, endpoint);
  const fullMarkets = fullMarketState.markets;
  const betbyStats = useBetbyStats(id, feed, cfg?.statsEndpoint, view === 'estatisticas');
  const sideWidgets = widgets.get(id);
  const tracker = live && e ? trackerFor(e.raw, e.betbySport, cfg?.trackerField, sideWidgets, true) : null;
  React.useEffect(() => {
    const media = window.matchMedia('(min-width: 1280px)');
    const update = () => setDesktopTracker(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  React.useEffect(() => {
    const active = view === 'tracker' && !!live && desktopTracker;
    setTracker(active ? tracker : null, active);
    return () => setTracker(null, false);
  }, [desktopTracker, live, setTracker, tracker, view]);
  React.useEffect(() => {
    fetchDescriptions(id).then(setDescriptions).catch(() => setDescriptions({}));
    fetchBetDistribution(id).then(setDistribution).catch(() => setDistribution({}));
  }, [id]);

  if (!e) return <EmptyPanel>{loading ? 'A carregar…' : 'Jogo não encontrado (pode já ter terminado).'}</EmptyPanel>;

  // A BETBY identifica mercados e seleções por IDs numéricos. As descrições oficiais
  // são a fonte principal; normalizamos as chaves porque algumas respostas podem usar números.
  const marketDescription = (marketId: string) => {
    const all = descriptions.markets ?? {};
    if (all[marketId]) return all[marketId];
    const normalized = String(Number(marketId));
    const key = Object.keys(all).find((candidate) => /^\\d+$/.test(candidate) && String(Number(candidate)) === normalized);
    return key ? all[key] : undefined;
  };
  const variantDescription = (marketId: string, variantId: string) => {
    const variants = marketDescription(marketId)?.variants;
    if (!variants) return undefined;
    if (variants[variantId]) return variants[variantId][0];
    const normalized = (value: string) => value.trim().replace(/^variant=/i, '').toLowerCase();
    const match = Object.entries(variants).find(([key]) => normalized(key) === normalized(variantId));
    if (match?.[1]?.length) return match[1][0];
    // Só usamos a única descrição disponível quando não há ambiguidade.
    const entries = Object.values(variants).flat();
    return entries.length === 1 ? entries[0] : undefined;
  };
  const marketName = (m: string) => {
    const official = marketDescription(m)?.name?.trim();
    return official || MARKET_NAMES[m] || `Mercado ${m}`;
  };
  const outcomeName = (m: string, variant: string, o: string) => {
    const described = variantDescription(m, variant)?.outcomes.find((x) => String(x.id) === String(o))?.name;
    if (described?.trim()) return described.trim();
    if (o === '1' || o === '4' || o === '1714') return e.home;
    if (o === '3' || o === '5' || o === '1715') return e.away;
    return OUTCOME_NAMES[o] ?? `Seleção ${o}`;
  };
  const share = (m: string, o: string) =>
    distribution.markets?.find((x) => String(x.market_id) === m)?.outcomes.find((x) => String(x.outcome_id) === o)?.percentage;
  const allMarkets: BetbyMarkets = mergeMarkets(e.markets, fullMarkets);
  if (id === '2733659201518837788') console.info('[BET62 MARKET AUDIT]', { stage: 'match-page-final', feedMarketCount: Object.keys(e.markets).length, feedMarketIds: Object.keys(e.markets), additionalMarketCount: fullMarkets ? Object.keys(fullMarkets).length : 0, mergedMarketCount: Object.keys(allMarkets).length, mergedMarketIds: Object.keys(allMarkets) });
  const ev = { ...e, markets: allMarkets };
  const markets = Object.entries(allMarkets).sort((a, b) => marketRank(a[0]) - marketRank(b[0]));
  const stats = statRows(e.statistics);
  const counts = new Map<string, number>();
  for (const [m] of markets) counts.set(catOf(m, marketName(m)), (counts.get(catOf(m, marketName(m))) ?? 0) + 1);
  const activeCat = cat !== 'todos' && counts.has(cat) ? cat : 'todos';
  const shown = activeCat === 'todos' ? markets : markets.filter(([m]) => catOf(m, marketName(m)) === activeCat);
  if (id === '2733659201518837788') console.info('[BET62 MARKET AUDIT]', { stage: 'match-page-visible', activeCategory: activeCat, visibleMarketCount: shown.length, visibleMarketIds: shown.map(([marketId]) => marketId) });
  const broadcast = broadcasts.get(id)?.find((b) => b.url)?.url;
  // Estatísticas: o widget do side feed que traz um endereço próprio (Oddin/Betgenius), senão a
  // página de estatísticas da BETBY (ui.invisiblesport.com/stats.html), que só existe para jogos
  // com fornecedor de estatísticas associado (os que têm widgets no side feed).
  const statsWidget = sideWidgets?.find((w) => w.url && /statistic/i.test(w.type))?.url;
  const statsFrame =
    statsWidget ??
    (sideWidgets?.length
      ? `https://ui.invisiblesport.com/stats.html?brandId=${encodeURIComponent(BETBY_CONFIG.brandId)}&eventId=${encodeURIComponent(id)}&lang=${encodeURIComponent(BETBY_CONFIG.locale)}`
      : null);
  const league = leagueApiId(e.sport, e.league, e.country);
  const extraStats = pairsOf(betbyStats.data);
  const distRows = (distribution.markets ?? [])
    .filter((m) => String(m.market_id) in allMarkets)
    .slice(0, 4);

  // Ao vivo: Tracker e Live. Pré-jogo: Estatísticas (não há tracker nem transmissão).
  const views: [View, string, React.ReactNode][] = live
    ? [['tracker', 'Tracker', <Activity key="t" size={15} />], ['live', 'Live', <MonitorPlay key="l" size={15} />]]
    : [['estatisticas', 'Estatísticas', <BarChart3 key="s" size={15} />]];

  return (
    <>
      <Link href={live ? '/live' : '/desporto'} className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white">
        <ArrowLeft size={16} /> Voltar
      </Link>

      {/* Cabeçalho + mídia (minicampo/transmissão) juntos, para o minicampo aparecer colado ao placar. */}
      <div className="space-y-3">
        <section className="match-glow rounded-2xl border border-bet62-border p-3 md:p-4">
          <p className="flex items-center justify-center gap-2 text-center text-[11px] font-semibold uppercase tracking-widest text-white/50">
            <LeagueLogo sport={e.sport} league={e.league} country={e.country} />
            {countryLabel(e.country)} · {e.league}
          </p>
          <div className="mt-3 grid grid-cols-[1fr_auto_1fr] items-center gap-2 md:gap-3">
            <div className="flex flex-col items-center gap-1.5 text-center">
              <TeamLogo sport={e.sport} name={e.home} photoUrl={e.homePhoto} league={league} size={44} />
              <p className="text-xs font-black md:text-base">{e.home}</p>
            </div>
            <div className="text-center">
              {live ? (
                <>
                  <p className="font-mono text-2xl font-black md:text-3xl">{e.score ? `${e.score.home} - ${e.score.away}` : '0 - 0'}</p>
                  <p className="mt-0.5 text-xs font-semibold text-bet62-primary">● {e.clock || 'Ao vivo'}</p>
                </>
              ) : (
                <>
                  <p className="flex items-center justify-center gap-1.5 text-base font-black">
                    <Clock3 size={15} /> {e.startTime ? new Date(e.startTime).toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' }) : '—'}
                  </p>
                  <p className="mt-0.5 text-[11px] text-white/55">{fmtWhen(e.startTime)}</p>
                </>
              )}
            </div>
            <div className="flex flex-col items-center gap-1.5 text-center">
              <TeamLogo sport={e.sport} name={e.away} photoUrl={e.awayPhoto} league={league} size={44} />
              <p className="text-xs font-black md:text-base">{e.away}</p>
            </div>
          </div>
        </section>

        {/* Minicampo / transmissão logo abaixo do cabeçalho (juntos). */}
        {view === 'tracker' && !desktopTracker && (
          <div className="fixed left-1/2 top-[calc(env(safe-area-inset-top)+4rem+0.75rem)] z-[60] w-[min(92vw,420px)] -translate-x-1/2 overflow-hidden rounded-2xl border border-bet62-border bg-bet62-surface/95 shadow-2xl backdrop-blur-sm xl:hidden">
            {tracker ? (
              <iframe
                src={tracker}
                title="Tracker do jogo"
                className={`mx-auto block ${cfg?.trackerMobileWidthPx ? '' : 'w-full'} ${cfg?.trackerMobileHeightPx ? '' : 'h-[min(48dvh,368px)] min-h-[260px] sm:h-[min(53dvh,468px)] sm:min-h-[340px]'}`}
                style={{
                  ...(cfg?.trackerMobileWidthPx ? { width: `${cfg.trackerMobileWidthPx}px`, maxWidth: '100%' } : {}),
                  ...(cfg?.trackerMobileHeightPx ? { height: `${cfg.trackerMobileHeightPx}px` } : {}),
                }}
                allow="fullscreen"
              />
            ) : (
              <p className="p-6 text-sm text-white/60">
                Minicampo não disponível: a BETBY não associou a este jogo um widget de tracking (Statscore/Oddin/Betgenius) no side feed.
              </p>
            )}
          </div>
        )}

        {view === 'live' && (
          broadcast ? (
            <div className="overflow-hidden rounded-2xl border border-bet62-border bg-black/40">
              <iframe src={broadcast} title="Transmissão do jogo" className="block aspect-video w-full" allow="fullscreen; autoplay; encrypted-media" allowFullScreen />
            </div>
          ) : (
            <div className="grid aspect-video place-items-center rounded-2xl border border-bet62-border bg-black/40 p-6 text-center text-sm text-white/60">
              <div>
                <MonitorPlay size={32} className="mx-auto mb-2 text-white/40" />
                Transmissão ao vivo indisponível para este jogo.
              </div>
            </div>
          )
        )}
      </div>

      {/* Botões de view abaixo do minicampo. */}
      <div className="flex gap-2">
        {views.map(([k, label, icon]) => (
          <button
            key={k}
            type="button"
            onClick={() => setView(view === k ? 'mercados' : k)}
            className={cn(
              'flex flex-1 items-center justify-center gap-2 rounded-xl border px-3 py-2 text-sm font-bold sm:flex-none',
              view === k ? 'border-bet62-primary bg-bet62-primary text-onbrand' : 'border-bet62-border bg-bet62-surface/60 text-white/75 hover:text-white',
            )}
          >
            {icon}
            {label}
          </button>
        ))}
      </div>

      {view === 'estatisticas' && (
        <section className="space-y-3">
          <button onClick={() => setView('mercados')} className="text-sm text-white/60 hover:text-white">
            ‹ Voltar aos mercados
          </button>
          {stats.length > 0 && (
            <div className="rounded-2xl border border-bet62-border bg-bet62-surface/50 p-4">
              <h3 className="mb-3 text-sm font-extrabold uppercase tracking-wide text-white/60">{live ? 'Ao vivo' : 'Jogo'}</h3>
              <StatBars rows={stats} />
              {e.periods && e.periods.length > 0 && <p className="mt-3 text-center text-xs text-white/45">Parciais: {e.periods.map((p) => `${p.home_score}-${p.away_score}`).join(' · ')}</p>}
            </div>
          )}
          {statsFrame && (
            <div className="overflow-hidden rounded-2xl border border-bet62-border bg-bet62-surface/50">
              <iframe src={statsFrame} title="Estatísticas do jogo" className="block h-[420px] w-full md:h-[520px]" allow="fullscreen" />
            </div>
          )}
          {extraStats.length > 0 && (
            <div className="rounded-2xl border border-bet62-border bg-bet62-surface/50 p-4">
              <h3 className="mb-3 text-sm font-extrabold uppercase tracking-wide text-white/60">Estatísticas</h3>
              <StatBars rows={extraStats} />
            </div>
          )}
          {distRows.length > 0 && (
            <div className="rounded-2xl border border-bet62-border bg-bet62-surface/50 p-4">
              <h3 className="mb-3 text-sm font-extrabold uppercase tracking-wide text-white/60">Apostas dos jogadores</h3>
              <div className="space-y-3">
                {distRows.map((m) => (
                  <div key={m.market_id}>
                    <p className="mb-1 text-xs text-white/55">{marketName(String(m.market_id))}</p>
                    <div className="flex h-7 overflow-hidden rounded-lg text-[11px] font-bold">
                      {m.outcomes.map((o, i) => (
                        <span
                          key={o.outcome_id}
                          title={outcomeName(String(m.market_id), '', String(o.outcome_id))}
                          className={cn('flex items-center justify-center truncate px-1', i === 0 ? 'bg-bet62-primary text-onbrand' : i === 1 ? 'bg-white/20' : 'bg-white/10')}
                          style={{ width: `${Math.max(o.percentage, 8)}%` }}
                        >
                          {o.percentage}%
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {betbyStats.error && <EmptyPanel>Estatísticas da BETBY indisponíveis: {betbyStats.error}</EmptyPanel>}
          {!stats.length && !extraStats.length && !distRows.length && !statsFrame && !betbyStats.error && (
            <EmptyPanel>{live ? 'A BETBY não enviou estatísticas para este evento.' : cfg?.statsEndpoint ? 'A fonte configurada não devolveu estatísticas pré-jogo para este evento.' : 'Sem fonte de estatísticas pré-jogo configurada. O feed de odds da BETBY não inclui, por si só, forma, confrontos diretos ou estatísticas históricas.'}</EmptyPanel>
          )}
        </section>
      )}

      {view !== 'estatisticas' && (
        <>
          <section id="match-markets" className="space-y-3 scroll-mt-20">
            <h2 className="text-lg font-black">
              Mercados <span className="text-sm font-normal text-white/40">{markets.length}</span>
            </h2>
            {cfg?.eventEndpoint && fullMarketState.error && (
              <p className="text-xs text-amber-300/80">Mercados adicionais BETBY: {fullMarketState.error}. Os mercados do feed principal continuam disponíveis.</p>
            )}
            {markets.length === 0 ? (
              <EmptyPanel>{live ? 'Mercados suspensos de momento.' : 'Sem odds disponíveis para este jogo.'}</EmptyPanel>
            ) : (
              <>
                <div className="-mx-1 flex gap-1.5 overflow-x-auto px-1 pb-1 [scrollbar-width:none]">
                  {CATS.filter(([k]) => k === 'todos' || counts.has(k)).map(([k, l]) => (
                    <button
                      key={k}
                      type="button"
                      onClick={() => setCat(k)}
                      className={cn(
                        'flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-bold',
                        activeCat === k ? 'border-bet62-primary bg-bet62-primary text-onbrand' : 'border-bet62-border bg-bet62-surface/60 text-white/70 hover:text-white',
                      )}
                    >
                      {l}
                      <small className={activeCat === k ? 'text-onbrand/70' : 'text-white/40'}>{k === 'todos' ? markets.length : counts.get(k)}</small>
                    </button>
                  ))}
                </div>
                <div className="space-y-2.5">
                  {shown.map(([m, variants]) => (
                    <MarketBlock
                      key={m}
                      title={marketName(m)}
                      rows={Object.entries(variants).map(([variant, outcomes]) => ({
                        variant,
                        label: variantLabel(variant),
                        cells: Object.entries(outcomes).map(([o, v]) => {
                          const label = outcomeName(m, variant, o);
                          const vl = variantLabel(variant);
                          const key = `${e.id}|${m}|${variant}|${o}`;
                          return {
                            id: o,
                            moveKey: key,
                            label,
                            price: v.k,
                            suspended: v.b === 1,
                            blocked: v.b === 1 || !(Number(v.k) > 1),
                            selected: picks.some((p) => p.key === key),
                            pct: share(m, o),
                            onClick: () => {
                              const pick = pickOf(ev, m, variant, o, vl ? `${marketName(m)} (${vl})` : marketName(m), label);
                              if (pick) toggle(pick);
                            },
                          };
                        }),
                      })).sort((a, b) => compareVariants(a.variant, b.variant))}
                    />
                  ))}
                </div>
              </>
            )}
          </section>

        </>
      )}
    </>
  );
}

export default function MatchPage({ params }: { params: { matchId: string } }) {
  return (
    <SportsShell>
      <Inner id={params.matchId} />
    </SportsShell>
  );
}
