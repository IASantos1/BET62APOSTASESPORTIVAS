'use client';

// WinHouse no quadro do site: lê /api/wh/events (o servidor recolhe do WinHouse), transforma cada
// jogo num BoardEvent e liga-o ao mesmo jogo da BETBY (equipas + hora + desporto), para:
//   • o minicampo, as estatísticas e a transmissão (vêm da BETBY, pelo id BETBY);
//   • os mercados que o WinHouse não tem (ex.: marcadores), no modo "ambos".
// O relógio, o placar e os mercados do WinHouse mandam; a BETBY completa.
import * as React from 'react';
import type { BetbyMarkets } from './betby';
import type { BoardEvent } from './board';
import { SPORT_BY_KEY, classifyLeague, type SportKey } from './sports/catalog';
import { closeTeam, sameTeam, teamKey } from './server/winhouse/parse';

export type OddsMode = 'both' | 'winhouse' | 'betby';

export interface WhApiEvent {
  id: string;
  sport: string;
  competition: string;
  country: string | null;
  home: string;
  away: string;
  homeLogo: string | null;
  awayLogo: string | null;
  startTime: string;
  status: string;
  live: boolean;
  score: { home: number | null; away: number | null } | null;
  clock: string | null;
  clockMmss: string | null;
  clockStopped: boolean;
  clockAt: string | null;
  suspended: boolean;
  marketCount: number;
  markets: BetbyMarkets;
  /** Estatísticas normalizadas do tracker WinHouse (lidas no servidor e atualizadas com cache). */
  statistics?: Record<string, { home: number; away: number }> | null;
  /** Dados de contexto pré-jogo associados à fixture da Goal API. */
  goalApi?: {
    configured?: boolean;
    linked?: boolean;
    error?: string | null;
    fixture?: { id: string; home: string; away: string; competition?: string | null } | null;
    h2h?: { date?: string | null; home: string; away: string; homeScore: number; awayScore: number; competition?: string | null }[] | null;
    standings?: { position: number; team: string; played?: number; won?: number; drawn?: number; lost?: number; goalsFor?: number; goalsAgainst?: number; points?: number }[] | null;
    form?: { home?: { date?: string | null; opponent?: string | null; score?: string; result?: string; league?: string | null }[]; away?: { date?: string | null; opponent?: string | null; score?: string; result?: string; league?: string | null }[] } | null;
    lineups?: unknown;
  } | null;
  names?: Record<string, string>;
  outcomes?: Record<string, string>;
}

export interface WhFeed {
  /** Já houve a primeira resposta (ou falha, ou passaram 4 s): o quadro pode ser mostrado. */
  ready: boolean;
  enabled: boolean;
  mode: OddsMode;
  healthy: boolean;
  events: WhApiEvent[];
  updatedAt: number | null;
  error: string | null;
}

/** Id do site de um jogo WinHouse (os da BETBY são só números; estes começam por "wh"). */
export const whSiteId = (id: string) => `wh${id}`;
export const isWhId = (id: string) => id.startsWith('wh');

/** Lista do WinHouse a cada 10 s (ao vivo e próximos, mercados principais). */
export function useWinHouseFeed(intervalMs = 10_000): WhFeed {
  const [s, setS] = React.useState<WhFeed>({ ready: false, enabled: false, mode: 'betby', healthy: false, events: [], updatedAt: null, error: null });
  React.useEffect(() => {
    let stop = false;
    let timer: ReturnType<typeof setTimeout>;
    const run = async () => {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 12_000);
      try {
        const r = await fetch('/api/wh/events?hours=72', { cache: 'no-store', signal: controller.signal });
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        const j = await r.json();
        if (!stop) setS({ ready: true, enabled: !!j.enabled, mode: j.mode ?? 'betby', healthy: !!j.healthy, events: Array.isArray(j.events) ? j.events : [], updatedAt: Date.now(), error: null });
      } catch (e) {
        // Keep WinHouse as the only source and make a stalled database request visible.
        const error = (e as Error).name === 'AbortError'
          ? 'O servidor de dados WinHouse não respondeu em 12 s.'
          : (e as Error).message;
        if (!stop) setS((p) => ({ ...p, ready: true, error, ...(p.updatedAt && Date.now() - p.updatedAt > 60_000 ? { events: [], healthy: false } : {}) }));
      } finally {
        clearTimeout(timeout);
      }
      if (!stop) timer = setTimeout(run, document.hidden ? intervalMs * 3 : intervalMs);
    };
    void run();
    // O WinHouse demora a responder: ao fim de 4 s o site mostra o que tiver (BETBY).
    const giveUp = setTimeout(() => !stop && setS((p) => (p.ready ? p : { ...p, ready: true })), 4000);
    return () => {
      stop = true;
      clearTimeout(timer);
      clearTimeout(giveUp);
    };
  }, [intervalMs]);
  return s;
}

/** Um jogo WinHouse (todos os mercados) — a página do jogo, a cada 5 s ao vivo / 30 s antes. */
export function useWinHouseEvent(siteId: string | null, live: boolean) {
  const [ev, setEv] = React.useState<WhApiEvent | null>(null);
  React.useEffect(() => {
    if (!siteId || !isWhId(siteId)) {
      setEv(null);
      return;
    }
    let stop = false;
    let timer: ReturnType<typeof setTimeout>;
    const run = async () => {
      try {
        const r = await fetch(`/api/wh/events/${siteId.slice(2)}`, { cache: 'no-store' });
        if (r.ok && !stop) setEv((await r.json()).event ?? null);
      } catch {
        // tenta outra vez no próximo ciclo
      }
      if (!stop) timer = setTimeout(run, live ? 5_000 : 30_000);
    };
    void run();
    return () => {
      stop = true;
      clearTimeout(timer);
    };
  }, [siteId, live]);
  return ev;
}

/** "Spain. Segunda Division" → ['Spain', 'Segunda Division']. */
function splitLeague(c: string): [string, string] {
  const i = c.indexOf('. ');
  return i > 0 ? [c.slice(0, i), c.slice(i + 2)] : ['', c];
}

/** Um jogo do WinHouse → BoardEvent (null se o desporto ou a liga não são mostrados no site). */
export function whToBoard(w: WhApiEvent): BoardEvent | null {
  const sport = (w.sport in SPORT_BY_KEY ? w.sport : null) as SportKey | null;
  if (!sport) return null;
  const [country, tournament] = splitLeague(w.competition);
  const league = classifyLeague(sport, country, tournament, w.live && sport === 'futebol');
  if (!league) return null;
  const markets = w.markets ?? {};
  return {
    id: whSiteId(w.id),
    source: 'winhouse',
    whId: w.id,
    status: w.live ? 'live' : 'scheduled',
    sport,
    sportName: SPORT_BY_KEY[sport].name,
    competition: league.fullName,
    country: league.country,
    league: league.label,
    tier: league.tier,
    leagueKnown: true,
    home: w.home,
    away: w.away,
    homePhoto: w.homeLogo ?? undefined,
    awayPhoto: w.awayLogo ?? undefined,
    startTime: Date.parse(w.startTime) || null,
    clock: w.live ? w.clockMmss ?? w.clock ?? undefined : undefined,
    clockStopped: w.clockStopped,
    clockAt: w.clockMmss && w.clockAt ? Date.parse(w.clockAt) : undefined,
    score: w.score && w.live ? { home: String(w.score.home ?? 0), away: String(w.score.away ?? 0) } : undefined,
    statistics: w.statistics ?? undefined,
    markets,
    marketSource: Object.fromEntries(Object.keys(markets).map((m) => [m, 'wh' as const])),
    marketNames: w.names,
    outcomeNames: w.outcomes,
    marketCount: w.marketCount,
  };
}

const LINK_WINDOW_MS = 3 * 3_600_000;

/**
 * Liga cada jogo do WinHouse a um jogo da BETBY: mesmo desporto, equipas iguais ou parecidas,
 * início a menos de 3 h, e um só candidato (na dúvida, não liga). Devolve whSiteId → id BETBY.
 */
export function linkEvents(wh: BoardEvent[], bb: BoardEvent[]) {
  const bySport = new Map<string, BoardEvent[]>();
  for (const e of bb) {
    const list = bySport.get(e.sport) ?? [];
    list.push(e);
    bySport.set(e.sport, list);
  }
  const links = new Map<string, string>();
  const taken = new Map<string, number>();
  for (const w of wh) {
    const cands = (bySport.get(w.sport) ?? []).filter((b) => {
      if (w.startTime && b.startTime && Math.abs(w.startTime - b.startTime) > LINK_WINDOW_MS) return false;
      return (sameTeam(w.home, b.home) && closeTeam(w.away, b.away)) || (closeTeam(w.home, b.home) && sameTeam(w.away, b.away)) || (closeTeam(w.home, b.home) && closeTeam(w.away, b.away));
    });
    // Mais do que um: fica o de equipas exatamente iguais, se for só um.
    const exact = cands.length > 1 ? cands.filter((b) => teamKey(b.home) === teamKey(w.home) && teamKey(b.away) === teamKey(w.away)) : cands;
    if (exact.length !== 1) continue;
    links.set(w.id, exact[0].id);
    taken.set(exact[0].id, (taken.get(exact[0].id) ?? 0) + 1);
  }
  // Um jogo BETBY ligado a dois do WinHouse: nenhuma das ligações vale.
  for (const [w, b] of [...links]) if ((taken.get(b) ?? 0) > 1) links.delete(w);
  return links;
}

/**
 * O jogo WinHouse com o que a BETBY completa: minicampo/estatísticas (raw, betbySport, statistics,
 * pontos do ténis) e, em `withMarkets`, os mercados BETBY que o WinHouse não tem.
 */
export function mergeLinked(w: BoardEvent, b: BoardEvent, withMarkets: boolean): BoardEvent {
  const markets: BetbyMarkets = { ...w.markets };
  const marketSource = { ...(w.marketSource ?? {}) };
  if (withMarkets) {
    for (const [m, v] of Object.entries(b.markets)) {
      if (markets[m]) continue;
      markets[m] = v;
      marketSource[m] = 'bb';
    }
  }
  return {
    ...w,
    // Liga conhecida pela BETBY (o WinHouse escreve-a de outra forma): usa a da BETBY.
    ...(w.leagueKnown ? {} : { competition: b.competition, country: b.country, league: b.league, tier: b.tier, leagueKnown: true }),
    betbyId: b.id,
    betbySport: b.betbySport,
    raw: b.raw,
    statistics: w.statistics ?? b.statistics,
    periods: b.periods,
    gameScore: b.gameScore,
    homePhoto: w.homePhoto ?? b.homePhoto,
    awayPhoto: w.awayPhoto ?? b.awayPhoto,
    // Sem relógio do WinHouse (basquetebol, hóquei…): o da BETBY.
    ...(!w.clock && b.clock ? { clock: b.clock, clockStopped: b.clockStopped, clockAt: b.clockAt } : {}),
    markets,
    marketSource,
  };
}

/** Diagnóstico (admin): selos WH/BB nos jogos e mercados. Ligado em Admin → WinHouse, por navegador. */
const DIAG_KEY = 'bet62-diag-source';
export function useDiagnostics() {
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    const read = () => {
      try {
        setOn(localStorage.getItem(DIAG_KEY) === '1');
      } catch {
        setOn(false);
      }
    };
    read();
    window.addEventListener('storage', read);
    window.addEventListener('bet62-diag', read);
    return () => {
      window.removeEventListener('storage', read);
      window.removeEventListener('bet62-diag', read);
    };
  }, []);
  return on;
}
export function setDiagnostics(on: boolean) {
  try {
    if (on) localStorage.setItem(DIAG_KEY, '1');
    else localStorage.removeItem(DIAG_KEY);
  } catch {
    // sem armazenamento: fica desligado
  }
  window.dispatchEvent(new Event('bet62-diag'));
}
