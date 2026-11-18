'use client';

// O quadro de jogos do site: ao vivo e pré-jogo da BETBY (lidos no navegador), já filtrados pelos
// desportos e ligas do catálogo e normalizados para as páginas (Destaques, Desporto, Ao Vivo,
// Próximos, liga). Um único provider faz as leituras; as páginas só leem o resultado.
import * as React from 'react';
import { closeDecidedMarkets, isEventFinished } from './lifecycle';
import { useBetbyFeed, useBetbySide, type BetbyDictionaries, type BetbyEvent, type BetbyMarkets, type BetbySideItem } from './betby';
import { SPORT_BY_KEY, classifyLeague, isBigTeam, sportKeyOf, sportRank, type SportKey } from './sports/catalog';
import { linkEvents, mergeLinked, useWinHouseFeed, whToBoard, type OddsMode } from './winhouse-board';

export interface BoardEvent {
  id: string;
  status: 'live' | 'scheduled';
  sport: SportKey;
  sportName: string;
  /** "England. Premier League" */
  competition: string;
  country: string;
  league: string;
  tier: number;
  home: string;
  away: string;
  /** Retratos fornecidos diretamente no descriptor BETBY (sobretudo jogadores de ténis). */
  homePhoto?: string;
  awayPhoto?: string;
  startTime: number | null;
  clock?: string;
  /** Relógio da BETBY parado (intervalo, paragem)? */
  clockStopped?: boolean;
  /** Momento (ms) a que o `clock` se refere, quando a BETBY o envia. */
  clockAt?: number;
  score?: { home: string; away: string };
  /** Pontos correntes do game no ténis (15/30/40/AD), separados dos sets. */
  gameScore?: { home: string; away: string };
  /** Ao vivo: cartões, cantos… ({ home, away } por estatística). */
  statistics?: Record<string, { home: number; away: number }>;
  /** Parciais (tempos, sets, períodos). */
  periods?: { number: number; home_score: number; away_score: number }[];
  markets: BetbyMarkets;
  /** Id do desporto na BETBY (para o tracker). */
  betbySport?: string;
  /** O evento tal como a BETBY o envia (explorador do admin, tracker). */
  raw?: BetbyEvent;
  /** De onde vem o jogo: WinHouse (recolhido pelo servidor) ou BETBY (lido no navegador). */
  source?: 'winhouse' | 'betby';
  /** Jogo WinHouse: o id no WinHouse (o id do site é "wh" + este). */
  whId?: string;
  /** Jogo WinHouse ligado ao mesmo jogo da BETBY (minicampo, estatísticas, mercados extra). */
  betbyId?: string;
  /** De onde vem cada mercado (wh = WinHouse, bb = BETBY). */
  marketSource?: Record<string, 'wh' | 'bb'>;
  /** Nomes dos mercados/seleções do WinHouse sem equivalente BETBY ("wh…"). */
  marketNames?: Record<string, string>;
  outcomeNames?: Record<string, string>;
  /** Total de mercados do jogo (o quadro só traz os principais). */
  marketCount?: number;
  /** A liga passou nas regras do catálogo (senão só entra ligada a um jogo BETBY). */
  leagueKnown?: boolean;
}

/** Id BETBY de um jogo (para minicampo, side feed, descrições): o próprio, ou o ligado. */
export const betbyIdOf = (e: Pick<BoardEvent, 'id' | 'source' | 'betbyId'>) => (e.source === 'winhouse' ? e.betbyId ?? null : e.id);

export interface LeagueNode {
  sport: SportKey;
  country: string;
  competition: string;
  label: string;
  count: number;
  live: number;
}

export interface BetPick {
  key: string;
  eventId: string;
  /** Fonte da odd (e de quem liquida): WinHouse ou BETBY. */
  source?: 'winhouse' | 'betby';
  marketId: string;
  variant: string;
  outcomeId: string;
  match: string;
  marketName: string;
  label: string;
  odds: number;
  sport: SportKey;
  startTime: number | null;
}

export interface Acca {
  legs: BetPick[];
  odds: number;
  big: boolean;
  lastStart: number | null;
}

export interface Builder {
  eventId: string;
  match: string;
  competition: string;
  startTime: number | null;
  legs: BetPick[];
  odds: number;
}

interface BoardState {
  events: BoardEvent[];
  leagues: LeagueNode[];
  loading: boolean;
  error: string | null;
  updatedAt: Date | null;
  /** Widgets por jogo (minicampo e estatísticas) do side feed da BETBY, por id de evento. */
  widgets: Map<string, BetbySideItem[]>;
  /** Transmissões por jogo, por id de evento. */
  broadcasts: Map<string, BetbySideItem[]>;
  /** Fonte em uso agora (o modo do admin, ou "betby" se o WinHouse falhar). */
  mode: OddsMode;
  /** O modo escolhido no admin (pode diferir de `mode` quando o WinHouse está em baixo). */
  chosenMode: OddsMode;
  reload: () => void;
}

const BoardContext = React.createContext<BoardState | null>(null);

// Odds que mudaram na última leitura (seta verde a subir / vermelha a descer, como no outro projeto).
export interface OddMove {
  dir: 'up' | 'down';
  at: number;
}
const MovesContext = React.createContext<Map<string, OddMove>>(new Map());
const MOVE_SHOW_MS = 8000;

/** Mudança recente desta odd (chave `${evento}|${mercado}|${variante}|${seleção}`), ou null. */
export function useOddMove(key: string): OddMove | null {
  const m = React.useContext(MovesContext).get(key);
  return m && Date.now() - m.at < MOVE_SHOW_MS ? m : null;
}

function useOddMoves(events: BoardEvent[]) {
  const prev = React.useRef(new Map<string, number>());
  const moves = React.useRef(new Map<string, OddMove>());
  const [snapshot, setSnapshot] = React.useState(() => new Map<string, OddMove>());
  React.useEffect(() => {
    const now = Date.now();
    const seen = new Map<string, number>();
    let changed = false;
    for (const e of events) {
      for (const [m, variants] of Object.entries(e.markets)) {
        for (const [v, outcomes] of Object.entries(variants)) {
          for (const [o, x] of Object.entries(outcomes)) {
            const k = Number(x.k);
            if (!(k > 1)) continue;
            const key = `${e.id}|${m}|${v}|${o}`;
            seen.set(key, k);
            const before = prev.current.get(key);
            if (before !== undefined && before !== k) {
              moves.current.set(key, { dir: k > before ? 'up' : 'down', at: now });
              changed = true;
            }
          }
        }
      }
    }
    prev.current = seen;
    for (const [k, mv] of moves.current) if (now - mv.at > MOVE_SHOW_MS) {
      moves.current.delete(k);
      changed = true;
    }
    if (changed) setSnapshot(new Map(moves.current));
  }, [events]);
  return snapshot;
}

// Mercados principais (ids Betradar usados pela BETBY): 1 = 1X2; 186/219/340 = vencedor (com prolongamento).
export const MAIN_MARKETS: { id: string; name: string; labels: Record<string, string> }[] = [
  { id: '1', name: 'Resultado final', labels: { '1': '1', '2': 'X', '3': '2' } },
  { id: '186', name: 'Vencedor', labels: { '4': '1', '5': '2' } },
  { id: '219', name: 'Vencedor (incl. prolongamento)', labels: { '4': '1', '5': '2' } },
  { id: '340', name: 'Vencedor', labels: { '4': '1', '5': '2' } },
  { id: '406', name: 'Vencedor (incl. prolongamento)', labels: { '4': '1', '5': '2' } },
];

export interface MainOdd {
  label: string;
  outcomeId: string;
  marketId: string;
  odds: number;
  blocked: boolean;
}

export function mainOddsOf(e: BoardEvent): MainOdd[] {
  let fallback: MainOdd[] = [];
  for (const m of MAIN_MARKETS) {
    const outcomes = e.markets[m.id]?.[''];
    if (!outcomes) continue;
    const rows = Object.keys(m.labels)
      .filter((o) => outcomes[o])
      .map((o) => {
        const odds = Number(outcomes[o].k) || 0;
        return { label: m.labels[o], outcomeId: o, marketId: m.id, odds, blocked: outcomes[o].b === 1 || odds <= 1 };
      });
    if (!rows.length) continue;
    if (!fallback.length) fallback = rows;
    if (rows.some((row) => !row.blocked)) return rows;
  }
  return fallback;
}

function hasActiveSelection(variants: BetbyMarkets[string]) {
  return Object.values(variants).some((outcomes) =>
    Object.values(outcomes).some((outcome) => outcome.b !== 1 && Number(outcome.k) > 1),
  );
}

/** Em futebol ao vivo, encaminha para o jogo se o 1X2 estiver fechado, incompleto ou sem valor. */
export function shouldShowBetNow(e: BoardEvent) {
  if (e.status !== 'live' || e.sport !== 'futebol') return false;

  const outcomes = e.markets['1']?.[''] ?? {};
  const main = ['1', '2', '3']
    .map((id) => outcomes[id])
    .filter((outcome): outcome is NonNullable<typeof outcome> => Boolean(outcome));
  const active = main.filter((outcome) => outcome.b !== 1 && Number(outcome.k) > 1);
  const mainUnavailable = active.length < 3 || active.some((outcome) => Number(outcome.k) <= 1.05);
  if (!mainUnavailable) return false;

  return Object.entries(e.markets).some(([marketId, variants]) => marketId !== '1' && hasActiveSelection(variants));
}

export const matchName = (e: Pick<BoardEvent, 'home' | 'away'>) => `${e.home} - ${e.away}`;

export function pickOf(e: BoardEvent, marketId: string, variant: string, outcomeId: string, marketName: string, label: string): BetPick | null {
  const o = e.markets[marketId]?.[variant]?.[outcomeId];
  const odds = Number(o?.k);
  if (!o || o.b === 1 || !odds || odds <= 1) return null;
  // Mercado BETBY num jogo WinHouse: a aposta é no jogo BETBY (liquidado pelos resultados da BETBY).
  const fromBetby = e.source === 'winhouse' && e.marketSource?.[marketId] === 'bb' && !!e.betbyId;
  return {
    key: `${e.id}|${marketId}|${variant}|${outcomeId}`,
    eventId: fromBetby ? e.betbyId! : e.id,
    source: e.source === 'winhouse' && !fromBetby ? 'winhouse' : 'betby',
    marketId,
    variant,
    outcomeId,
    match: matchName(e),
    marketName,
    label,
    odds,
    sport: e.sport,
    startTime: e.startTime,
  };
}

function numericStat(value: unknown): number | null {
  if (typeof value !== 'number' && typeof value !== 'string') return null;
  const n = Number(String(value).replace('%', '').replace(',', '.').trim());
  return Number.isFinite(n) ? n : null;
}

/** Normaliza estatísticas de equipa de formatos BETBY distintos sem inventar valores. */
function extractStatistics(raw: BetbyEvent): BoardEvent['statistics'] {
  const root = raw as unknown as Record<string, unknown>;
  const score = root.score && typeof root.score === 'object' ? root.score as Record<string, unknown> : {};
  const sources = [score.statistics, score.stats, root.statistics, root.stats, root.match_statistics];
  const result: NonNullable<BoardEvent['statistics']> = {};
  const add = (key: string, home: unknown, away: unknown) => {
    const h = numericStat(home);
    const a = numericStat(away);
    if (key && h !== null && a !== null) result[key] = { home: h, away: a };
  };
  const visit = (value: unknown, key = '', depth = 0) => {
    if (!value || typeof value !== 'object' || depth > 8) return;
    if (Array.isArray(value)) {
      value.forEach((item, index) => visit(item, key || String(index), depth + 1));
      return;
    }
    const node = value as Record<string, unknown>;
    const name = String(node.name ?? node.label ?? node.title ?? node.type ?? key);
    const home = node.home ?? node.home_value ?? node.homeValue ?? node.team1 ?? node['1'];
    const away = node.away ?? node.away_value ?? node.awayValue ?? node.team2 ?? node['2'];
    if (home !== undefined && away !== undefined && numericStat(home) !== null && numericStat(away) !== null) {
      add(name, home, away);
      return;
    }
    // Alguns fornecedores agrupam todas as métricas em home{} e away{}.
    if (node.home && node.away && typeof node.home === 'object' && typeof node.away === 'object') {
      const h = node.home as Record<string, unknown>;
      const a = node.away as Record<string, unknown>;
      for (const metric of new Set([...Object.keys(h), ...Object.keys(a)])) add(metric, h[metric], a[metric]);
    }
    for (const [childKey, child] of Object.entries(node)) {
      if (childKey !== 'home' && childKey !== 'away') visit(child, childKey, depth + 1);
    }
  };
  for (const source of sources) visit(source);
  return Object.keys(result).length ? result : undefined;
}

function competitorPhoto(value: unknown): string | undefined {
  if (!value || typeof value !== 'object') return undefined;
  const node = value as Record<string, unknown>;
  const candidate = node.photo ?? node.photo_url ?? node.photoUrl ?? node.image ?? node.image_url ?? node.imageUrl ?? node.avatar ?? node.avatar_url ?? node.logo ?? node.picture;
  if (typeof candidate !== 'string') return undefined;
  try {
    const url = new URL(candidate);
    return url.protocol === 'https:' || url.protocol === 'http:' ? url.toString() : undefined;
  } catch {
    return undefined;
  }
}

function formatTennisPoint(value: string | number | undefined) {
  if (value === undefined) return '0';
  const point = String(value).toUpperCase();
  return point === '50' || point === 'A' ? 'AD' : point;
}

/** O timestamp do relógio da BETBY em ms (vem em segundos ou ms); fora do razoável, ignorado. */
function clockTimestamp(ts: unknown) {
  const n = Number(ts);
  if (!Number.isFinite(n) || n <= 0) return undefined;
  const ms = n > 1e12 ? n : n * 1000;
  return Math.abs(Date.now() - ms) < 6 * 3600_000 ? ms : undefined;
}

function toBoardEvent(raw: BetbyEvent, status: 'live' | 'scheduled', dict: BetbyDictionaries): BoardEvent | null {
  const d = raw.desc;
  if (!d || d.virtual || !d.competitors || d.competitors.length < 2) return null;
  const sportInfo = d.sport ? dict.sports[d.sport] : undefined;
  const sport = sportKeyOf(sportInfo as { name?: string; slug?: string } | undefined);
  if (!sport) return null;
  const category = d.category ? dict.categories[d.category]?.name ?? '' : '';
  const tournament = d.tournament ? dict.tournaments[d.tournament]?.name ?? '' : '';
  // No live mostramos todas as ligas de futebol reais; as exclusões de juvenis/femininas/virtual
  // continuam aplicadas antes deste fallback. No pré-jogo mantemos a seleção curada de ligas.
  const league = classifyLeague(sport, category, tournament, status === 'live' && sport === 'futebol');
  if (!league) return null;
  // Jogos ao vivo sem mercados continuam visíveis no quadro; os cartões indicam odds suspensas.
  if (!Object.keys(raw.markets).length && status !== 'live') return null;
  const score = raw.score && raw.score.home_score !== undefined ? { home: String(raw.score.home_score), away: String(raw.score.away_score ?? 0) } : undefined;
  const hasTennisPoints = sport === 'tenis'
    && raw.score
    && (raw.score.home_gamescore !== undefined || raw.score.away_gamescore !== undefined);
  const gameScore = hasTennisPoints
    ? {
        home: formatTennisPoint(raw.score?.home_gamescore),
        away: formatTennisPoint(raw.score?.away_gamescore),
      }
    : undefined;
  return {
    id: raw.id,
    status,
    sport,
    sportName: SPORT_BY_KEY[sport].name,
    competition: league.fullName,
    country: league.country,
    league: league.label,
    tier: league.tier,
    home: d.competitors[0].name,
    away: d.competitors[1].name,
    homePhoto: competitorPhoto(d.competitors[0]),
    awayPhoto: competitorPhoto(d.competitors[1]),
    startTime: d.scheduled ? d.scheduled * 1000 : null,
    clock: raw.state?.clock?.match_time,
    clockStopped: raw.state?.clock?.stopped,
    clockAt: clockTimestamp(raw.state?.clock?.timestamp),
    score,
    gameScore,
    statistics: extractStatistics(raw),
    periods: raw.score?.period_scores,
    // Futebol ao vivo: sem as linhas que o resultado atual já decidiu (lib/lifecycle.ts).
    markets: status === 'live' && sport === 'futebol' ? closeDecidedMarkets(raw.markets, raw.score) : raw.markets,
    betbySport: d.sport,
    raw,
    source: 'betby',
  };
}

const SOCCER_FEED_SILENCE_MS = 5 * 60_000;

function isBetbyEventEnded(raw: BetbyEvent) {
  // Códigos de fim (terminado, cancelado, abandonado…): ver lib/lifecycle.ts.
  return isEventFinished(raw.state);
}

function isSoccerFeedSilentAfterRegulation(
  raw: BetbyEvent,
  sport: SportKey,
  lastEventUpdates: Map<string, number>,
  now: number,
) {
  if (sport !== 'futebol') return false;
  const clock = raw.state?.clock?.match_time;
  const match = clock?.match(/^(\d{1,3}):(\d{2})$/);
  const seconds = match ? Number(match[1]) * 60 + Number(match[2]) : 0;
  const hasExtraPeriod = raw.score?.period_scores?.some((period) => period.number > 2);
  const lastUpdate = lastEventUpdates.get(raw.id);
  return Boolean(
    match
    && seconds >= 89 * 60
    && seconds <= 130 * 60
    && !hasExtraPeriod
    && lastUpdate
    && now - lastUpdate >= SOCCER_FEED_SILENCE_MS,
  );
}

/** Em destaque primeiro as grandes ligas (tier), depois os que começam mais cedo. */
export const byPriority = (a: BoardEvent, b: BoardEvent) => a.tier - b.tier || (a.startTime ?? 0) - (b.startTime ?? 0);

export function BoardProvider({ children }: { children: React.ReactNode }) {
  const live = useBetbyFeed('live', 15000);
  const pre = useBetbyFeed('prematch', 30000);
  const side = useBetbySide(20000);
  const wh = useWinHouseFeed(10000);

  const value = React.useMemo<BoardState>(() => {
    const byId = new Map<string, BoardEvent>();
    const now = Date.now();
    const liveFeedHealthy = Boolean(
      live.updatedAt
      && !live.error
      && now - live.updatedAt.getTime() < 45_000,
    );
    for (const raw of pre.events) {
      if (isBetbyEventEnded(raw)) continue;
      const e = toBoardEvent(raw, 'scheduled', pre.dictionaries);
      // Um jogo pré-jogo cujo início já passou sai da lista (entra no ao vivo).
      if (e && (!e.startTime || e.startTime > now - 5 * 60_000)) byId.set(e.id, e);
    }
    for (const raw of live.events) {
      // Não remover apenas porque status deixou de ser 1: a BETBY pode usar estados
      // intermédios (por exemplo HT/intervalo). Só os códigos de fim confirmam (lib/lifecycle.ts).
      if (isBetbyEventEnded(raw)) {
        byId.delete(raw.id);
        continue;
      }
      const sportInfo = raw.desc?.sport ? live.dictionaries.sports[raw.desc.sport] : undefined;
      const sport = sportKeyOf(sportInfo as { name?: string; slug?: string } | undefined);
      if (
        liveFeedHealthy
        && sport
        && isSoccerFeedSilentAfterRegulation(raw, sport, live.lastEventUpdates, now)
      ) {
        byId.delete(raw.id);
        continue;
      }
      const e = toBoardEvent(raw, 'live', live.dictionaries);
      if (e) byId.set(e.id, e);
    }
    // WinHouse (modo do admin): os jogos dele mandam; a BETBY liga-se a eles e completa. Sem
    // WinHouse (desligado, coletor parado ou lista vazia) o site fica só com a BETBY.
    // "Só WinHouse" mostra só o WinHouse mesmo sem jogos naquele momento; a BETBY só entra
    // como reserva quando o WinHouse está desligado ou em baixo (healthy = falso).
    const mode: OddsMode = wh.enabled && wh.healthy ? wh.mode : 'betby';
    // Até o WinHouse responder pela 1.ª vez (máx. 4 s) o quadro espera: sem isto via-se a BETBY
    // e logo a seguir os mesmos jogos trocados pelos do WinHouse.
    let list = wh.ready ? [...byId.values()] : [];
    if (mode !== 'betby') {
      const whEvents = wh.events.map(whToBoard).filter((e): e is BoardEvent => !!e);
      const links = linkEvents(whEvents, list);
      const linked = new Set(links.values());
      const merged: BoardEvent[] = [];
      for (const w of whEvents) {
        const b = links.has(w.id) ? byId.get(links.get(w.id)!) : undefined;
        const e = b ? mergeLinked(w, b, mode === 'both') : w;
        if (e.leagueKnown) merged.push(e);
      }
      list = mode === 'both' ? [...merged, ...list.filter((b) => !linked.has(b.id))] : merged;
    }
    const events = list.sort((a, b) => sportRank(a.sport) - sportRank(b.sport) || byPriority(a, b));
    const leagueMap = new Map<string, LeagueNode>();
    for (const e of events) {
      const k = `${e.sport}|${e.competition}`;
      const node = leagueMap.get(k) ?? { sport: e.sport, country: e.country, competition: e.competition, label: e.league, count: 0, live: 0 };
      node.count += 1;
      if (e.status === 'live') node.live += 1;
      leagueMap.set(k, node);
    }
    return {
      events,
      leagues: [...leagueMap.values()],
      loading: !wh.ready || (live.loading && pre.loading && !(mode !== 'betby' && list.length)),
      error: live.error && pre.error ? live.error : null,
      updatedAt: live.updatedAt ?? pre.updatedAt,
      widgets: side.widgets,
      broadcasts: side.broadcasts,
      mode,
      chosenMode: wh.enabled ? wh.mode : 'betby',
      reload: () => {
        void live.reload();
        void pre.reload();
      },
    };
  }, [live.events, live.lastEventUpdates, live.dictionaries, live.loading, live.error, live.updatedAt, pre.events, pre.dictionaries, pre.loading, pre.error, pre.updatedAt, side.widgets, side.broadcasts, wh.events, wh.mode, wh.enabled, wh.healthy, wh.ready]); // eslint-disable-line react-hooks/exhaustive-deps

  const moves = useOddMoves(value.events);
  return (
    <BoardContext.Provider value={value}>
      <MovesContext.Provider value={moves}>{children}</MovesContext.Provider>
    </BoardContext.Provider>
  );
}

export function useBoard() {
  const ctx = React.useContext(BoardContext);
  if (!ctx) throw new Error('useBoard fora do BoardProvider');
  return ctx;
}

// ---------- apostas prontas (como no outro projeto) ----------

const FIVE = 5;
const DAY = 86_400_000;

/**
 * "Apostas vencedoras": múltiplas de 5 favoritos de jogos diferentes (resultado final / vencedor),
 * odds de 1.15 a 1.95 (um grande clube a vencer a partir de 1.08). Na página inicial (`top`), por
 * prioridade: grandes clubes, grandes ligas, segundas ligas conhecidas; as outras nunca. Cada cartão é
 * de um só desporto e cada jogo entra num só cartão; no máximo 6 cartões.
 */
export function drawAccas(events: BoardEvent[], { top = false } = {}): Acca[] {
  const now = Date.now();
  const pool = events
    .filter((e) => e.status === 'scheduled' && e.startTime && e.startTime > now + 10 * 60_000 && e.startTime < now + 4 * DAY)
    .map((e) => {
      const odds = mainOddsOf(e).filter((o) => o.label !== 'X' && !o.blocked);
      const bigSide = (o: MainOdd) => e.sport === 'futebol' && (o.label === '1' ? isBigTeam(e.home) : isBigTeam(e.away));
      const best = odds.filter((o) => o.odds >= (top && bigSide(o) ? 1.08 : 1.15) && o.odds <= 1.95).sort((a, b) => a.odds - b.odds)[0];
      if (!best) return null;
      const rank = !top ? 0 : bigSide(best) ? 3 : e.tier === 1 ? 2 : e.tier === 2 ? 1 : 0;
      if (top && !rank) return null;
      const market = MAIN_MARKETS.find((m) => m.id === best.marketId)!;
      const team = best.label === '1' ? e.home : e.away;
      const pick = pickOf(e, best.marketId, '', best.outcomeId, market.name, team);
      return pick ? { pick, rank, sport: e.sport, start: e.startTime! } : null;
    })
    .filter((x): x is NonNullable<typeof x> => !!x)
    .sort((a, b) => b.rank - a.rank || a.start - b.start);
  const cards: Acca[] = [];
  const sports = [...new Set(pool.map((p) => p.sport))].sort((a, b) => sportRank(a) - sportRank(b));
  for (const sport of sports) {
    const list = pool.filter((p) => p.sport === sport);
    while (cards.length < 6 && list.length >= FIVE) {
      const legs = list.splice(0, FIVE);
      cards.push({
        legs: legs.map((l) => l.pick),
        odds: Math.round(legs.reduce((p, l) => p * l.pick.odds, 1) * 100) / 100,
        big: top && legs.some((l) => l.rank === 3),
        lastStart: Math.max(...legs.map((l) => l.start)),
      });
    }
  }
  return cards;
}

const BUILDER_FACTOR = 0.9;

/**
 * "Construa o seu ganho": um jogo de futebol, três seleções no mesmo jogo: o resultado final, mais um
 * mercado (dupla hipótese que cobre o resultado, ou ambas marcam) e golos mais/menos de 2.5.
 * Preço: o produto das odds (a dupla hipótese que cobre o resultado conta 1.00) × 0.9 pela correlação.
 */
export function drawBuilders(events: BoardEvent[], max = 6): Builder[] {
  const now = Date.now();
  const out: Builder[] = [];
  const pool = events
    .filter((e) => e.sport === 'futebol' && e.status === 'scheduled' && e.startTime && e.startTime > now + 10 * 60_000)
    .sort(byPriority);
  for (const e of pool) {
    if (out.length >= max) break;
    const result = mainOddsOf(e).filter((o) => o.marketId === '1' && o.label !== 'X' && !o.blocked).sort((a, b) => a.odds - b.odds)[0];
    if (!result || result.odds > 2.6) continue;
    const resultPick = pickOf(e, '1', '', result.outcomeId, 'Resultado final', result.label === '1' ? e.home : e.away);
    const over = pickOf(e, '18', 'total=2.5', '12', 'Total de golos', 'Mais de 2.5');
    const under = pickOf(e, '18', 'total=2.5', '13', 'Total de golos', 'Menos de 2.5');
    const goals = over && under ? (over.odds <= under.odds ? over : under) : over ?? under;
    if (!resultPick || !goals) continue;
    const bttsYes = pickOf(e, '29', '', '74', 'Ambas as equipas marcam', 'Sim');
    const bttsNo = pickOf(e, '29', '', '76', 'Ambas as equipas marcam', 'Não');
    const dc = pickOf(e, '10', '', result.label === '1' ? '9' : '11', 'Dupla hipótese', result.label === '1' ? '1X' : 'X2');
    const second = goals.outcomeId === '12' ? bttsYes ?? dc : bttsNo ?? dc;
    if (!second) continue;
    const legs = [resultPick, second, goals];
    const odds = legs.reduce((p, l) => p * (l.marketId === '10' ? 1 : l.odds), 1) * BUILDER_FACTOR;
    out.push({ eventId: e.id, match: matchName(e), competition: e.league, startTime: e.startTime, legs, odds: Math.round(odds * 100) / 100 });
  }
  return out;
}

/** Destaques: futebol das grandes ligas primeiro, depois o melhor jogo de cada outro desporto. */
export function pickHighlights(events: BoardEvent[], limit = 12): BoardEvent[] {
  const out: BoardEvent[] = [];
  const add = (e?: BoardEvent) => {
    if (e && out.length < limit && !out.includes(e)) out.push(e);
  };
  const pool = [...events].sort(byPriority);
  const football = pool.filter((e) => e.sport === 'futebol');
  const bigFootball = football.filter((e) => e.tier <= 2);
  (bigFootball.length ? bigFootball : football.slice(0, 3)).forEach(add);
  const others = [...new Set(pool.map((e) => e.sport))].filter((s) => s !== 'futebol').sort((a, b) => sportRank(a) - sportRank(b));
  for (const sp of others) add(pool.find((e) => e.sport === sp));
  pool.filter((e) => e.tier <= 2).forEach(add);
  return out;
}
