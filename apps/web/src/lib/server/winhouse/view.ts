import { query } from '../db';
import { feedSettings } from './feed';
import { toBoardMarkets } from '../../winhouse-markets';
import { SPORT_LABEL, clockText, mergeOdds, type WhOdd } from './parse';

// WinHouse — o que o site lê: jogos (cartões) e todos os mercados de um jogo. Só dados públicos
// (equipas, hora, placar, cotações); nada de chaves nem endereços do WinHouse.

export interface WhRow {
  id: string;
  sport: string;
  sport_id: number;
  competition: string;
  country: string | null;
  home: string;
  away: string;
  home_logo: string | null;
  away_logo: string | null;
  start_time: Date;
  status: string;
  home_score: number | null;
  away_score: number | null;
  minutes: string | null;
  clock_raw: string | null;
  clock_since: Date | null;
  score_since: Date | null;
  missing_since: Date | null;
  list_odds: WhOdd[];
  list_at: Date | null;
  page_odds: WhOdd[];
  page_at: Date | null;
  betby_id: string | null;
  verdict: unknown;
  end_reason: string | null;
}

const ms = (d: Date | null) => (d ? new Date(d).getTime() : 0);
const COUNT_UP = new Set(['futebol', 'futsal', 'andebol', 'raguebi']);
const mmss = (minutes: number) => {
  const t = Math.max(0, Math.round(minutes * 60));
  return `${String(Math.floor(t / 60)).padStart(2, '0')}:${String(t % 60).padStart(2, '0')}`;
};

/**
 * As cotações que valem agora: ao vivo, a lista tem de ter sido lida há pouco e ter preços abertos
 * (lista sem preços = jogo suspenso), e a página só conta se for mais recente do que o último golo.
 */
export function currentOdds(r: WhRow, now = Date.now()) {
  const s = feedSettings();
  if (r.status === 'live') {
    const listFresh = now - ms(r.list_at) < Math.max(90_000, s.liveSeconds * 4000);
    const suspended = !listFresh || !r.list_odds.length || !!r.missing_since;
    const pageFresh = now - ms(r.page_at) < Math.max(90_000, s.liveDetailSeconds * 3000) && ms(r.page_at) >= ms(r.score_since);
    return { odds: mergeOdds(pageFresh ? r.page_odds : [], r.list_odds), suspended };
  }
  if (r.status === 'scheduled') {
    const pageFresh = now - ms(r.page_at) < s.detailRefreshMinutes * 3 * 60_000;
    return { odds: mergeOdds(pageFresh ? r.page_odds : [], r.list_odds), suspended: false };
  }
  return { odds: [] as WhOdd[], suspended: true };
}

export function eventView(r: WhRow, { full = false, now = Date.now() } = {}) {
  const { odds, suspended } = currentOdds(r, now);
  const conv = toBoardMarkets(odds, r.sport, r.home, r.away, suspended);
  // Lista (cartões): só os mercados principais; o jogo aberto traz todos.
  const markets = full ? conv.markets : Object.fromEntries(Object.entries(conv.markets).filter(([m]) => !m.startsWith('wh')));
  const minutes = r.minutes === null ? null : Number(r.minutes);
  return {
    id: r.id,
    source: 'winhouse' as const,
    sport: r.sport,
    sportName: SPORT_LABEL[r.sport] ?? r.sport,
    competition: r.competition,
    country: r.country,
    home: r.home,
    away: r.away,
    homeLogo: r.home_logo,
    awayLogo: r.away_logo,
    startTime: new Date(r.start_time).toISOString(),
    status: r.status,
    live: r.status === 'live',
    score: r.status === 'scheduled' ? null : { home: r.home_score, away: r.away_score },
    clock: r.status === 'live' ? clockText(r.sport, minutes, r.clock_raw, r.competition) : null,
    // Desportos com relógio a contar para a frente: "mm:ss" (o site fá-lo andar ao segundo).
    clockMmss: r.status === 'live' && minutes !== null && COUNT_UP.has(r.sport) ? mmss(minutes) : null,
    // Relógio sem mexer há mais de 1 min (intervalo, paragem).
    clockStopped: r.status === 'live' && !!r.clock_since && now - ms(r.clock_since) > 60_000,
    minutes,
    // Quando o relógio foi lido (o site faz o relógio andar a partir daqui).
    clockAt: r.status === 'live' && r.list_at ? new Date(r.list_at).toISOString() : null,
    suspended,
    betbyId: r.betby_id,
    marketCount: Object.keys(conv.markets).length,
    markets,
    names: full ? conv.names : undefined,
    outcomes: full ? conv.outcomes : undefined,
    ...(full && r.status === 'ended' ? { verdict: r.verdict, endReason: r.end_reason } : {}),
  };
}
export type WhEventView = ReturnType<typeof eventView>;

/** Jogos para o site: ao vivo e/ou próximos (por hora), opcionalmente de um desporto. */
export async function listEvents({ live = null as boolean | null, sport = null as string | null, hours = 72, limit = 500 } = {}) {
  const rows = await query<WhRow>(
    `SELECT * FROM wh_events
      WHERE ((status = 'live' AND $1::boolean IS DISTINCT FROM false)
         OR (status = 'scheduled' AND $1::boolean IS DISTINCT FROM true AND start_time > now() - interval '5 minutes' AND start_time < now() + make_interval(hours => $3::int)))
        AND ($2::text IS NULL OR sport = $2)
      ORDER BY status = 'live' DESC, start_time, id LIMIT $4::int`,
    [live, sport, Math.min(24 * 30, Math.max(1, hours)), Math.min(2000, Math.max(1, limit))],
  );
  const now = Date.now();
  return rows.map((r) => eventView(r, { now }));
}

/** Um jogo com todos os mercados. Marca-o como "aberto por alguém": a página dele é lida mais vezes. */
export async function eventDetail(id: string) {
  const rows = await query<WhRow>(
    `UPDATE wh_events SET watched_at = now() WHERE id = (
        SELECT COALESCE(CASE WHEN status = 'merged' THEN merged_into END, id) FROM wh_events WHERE id = $1)
     RETURNING *`,
    [id],
  );
  return rows[0] ? eventView(rows[0], { full: true }) : null;
}

/**
 * A odd atual de uma seleção de um jogo WinHouse (para validar a aposta no servidor): o preço, ou
 * null se o jogo/seleção já não existe ou está suspenso. eventId sem o prefixo "wh".
 */
export async function currentPrice(eventId: string, marketId: string, variant: string, outcomeId: string) {
  const r = (await query<WhRow>(
    `SELECT * FROM wh_events WHERE id = (SELECT COALESCE(CASE WHEN status = 'merged' THEN merged_into END, id) FROM wh_events WHERE id = $1)`,
    [eventId],
  ))[0];
  if (!r || (r.status !== 'live' && r.status !== 'scheduled')) return { row: r ?? null, price: null as number | null };
  const { odds, suspended } = currentOdds(r);
  const o = toBoardMarkets(odds, r.sport, r.home, r.away, suspended).markets[marketId]?.[variant]?.[outcomeId];
  return { row: r, price: o && o.b !== 1 && Number(o.k) > 1 ? Number(o.k) : null };
}
