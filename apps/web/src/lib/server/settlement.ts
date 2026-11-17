import type { PoolClient } from 'pg';
import { query, tx } from './db';
import { moveBalance } from './wallet';

// Motor de liquidação (a partir do motor do repositório bet), com os resultados da BETBY que a
// página Liquidação do admin envia. Mercados pelos ids Betradar que a BETBY usa.
//
//  - Jogo terminado: cada seleção em aberto é decidida pelo resultado (tempo regulamentar no
//    futebol; com prolongamento só nos mercados "vencedor").
//  - Ao vivo: linhas de golos já decididas (um "mais de" ultrapassado, ambas marcam já cumprido)
//    e os mercados da 1.ª parte depois do intervalo — sempre com o resultado parado há 60 s (VAR).
//  - Jogo cancelado/abandonado: seleções anuladas (valor devolvido).
//  - Mercados que o resultado não decide (cartões, cantos, marcadores…): ficam para o operador.
//  - Sem resultado 72 h depois do início: anulada.

/** Resultado novo que contradiz bilhetes já liquidados. */
export class ResultConflict extends Error {}

export type LegStatus = 'won' | 'lost' | 'void' | 'half_won' | 'half_lost';
export interface Period { number: number; home: number; away: number }
export interface EventResult {
  eventId: string;
  sport: string | null;
  status: 'live' | 'finished' | 'cancelled';
  matchStatus: number | null;
  home: number | null;
  away: number | null;
  periods: Period[];
  scoreAt: Date | null;
}

const VAR_DELAY_MS = 60_000;
export const NO_RESULT_VOID_HOURS = 72;

function specs(variant: string) {
  const out: Record<string, string> = {};
  for (const part of (variant || '').split('|')) {
    const i = part.indexOf('=');
    if (i > 0) out[part.slice(0, i)] = part.slice(i + 1);
  }
  return out;
}

/** Resultado de uma linha simples (diferença > 0 ganha, < 0 perde, 0 anula). */
const plain = (d: number): LegStatus => (d > 1e-9 ? 'won' : d < -1e-9 ? 'lost' : 'void');

/** Linha asiática: x.25 / x.75 dividem a aposta em duas linhas. `diff(line)` dá a margem a favor. */
function asian(line: number, diff: (l: number) => number): LegStatus {
  const quarter = Math.abs((line * 4) % 2) === 1;
  if (!quarter) return plain(diff(line));
  const a = plain(diff(line - 0.25));
  const b = plain(diff(line + 0.25));
  if (a === b) return a;
  const set = new Set([a, b]);
  if (set.has('won') && set.has('void')) return 'half_won';
  if (set.has('lost') && set.has('void')) return 'half_lost';
  return 'void';
}

const isFootball = (r: EventResult, sportId: string | null, sport: string) => sportId === '1' || sport === 'futebol' || r.sport === 'futebol';

function scores(r: EventResult, football: boolean) {
  const p = (n: number) => r.periods.find((x) => x.number === n);
  const p1 = p(1);
  const p2 = p(2);
  // Futebol: tempo regulamentar = 1.ª + 2.ª parte (sem prolongamento) quando a BETBY dá as partes.
  const regular = football && p1 && p2 ? { home: p1.home + p2.home, away: p1.away + p2.away } : r.home !== null && r.away !== null ? { home: r.home, away: r.away } : null;
  const overtime = r.matchStatus === 110 || r.matchStatus === 120 || r.periods.some((x) => x.number > (football ? 2 : 99));
  return { regular, final: r.home !== null && r.away !== null ? { home: r.home, away: r.away } : null, first: p1 ? { home: p1.home, away: p1.away } : null, overtime };
}

const winner3 = (s: { home: number; away: number }, outcome: string): LegStatus | null => {
  const res = s.home > s.away ? '1' : s.home < s.away ? '3' : '2';
  return ['1', '2', '3'].includes(outcome) ? (outcome === res ? 'won' : 'lost') : null;
};

/** Golos a contar numa linha de total. */
function goalsFor(who: 'all' | 'home' | 'away', s: { home: number; away: number }) {
  return who === 'home' ? s.home : who === 'away' ? s.away : s.home + s.away;
}

const TOTALS: Record<string, { who: 'all' | 'home' | 'away'; part: 'regular' | 'first' | 'second' }> = {
  '18': { who: 'all', part: 'regular' },
  '19': { who: 'home', part: 'regular' },
  '20': { who: 'away', part: 'regular' },
  '68': { who: 'all', part: 'first' },
  '69': { who: 'home', part: 'first' },
  '70': { who: 'away', part: 'first' },
  '90': { who: 'all', part: 'second' },
};

export interface LegRow {
  id: string;
  bet_id: string;
  event_id: string;
  sport: string;
  sport_id: string | null;
  market_id: string;
  variant: string;
  outcome_id: string;
  market_name: string;
  outcome_name: string;
  odds: string;
}

/**
 * Decide uma seleção. `final`: jogo terminado. Ao vivo só decide o que já não pode mudar.
 * Devolve null quando o resultado não chega (fica para o operador ou para mais tarde).
 */
export function decideLeg(leg: LegRow, r: EventResult, now = Date.now()): LegStatus | null {
  if (r.status === 'cancelled') return 'void';
  const football = isFootball(r, leg.sport_id, leg.sport);
  const s = scores(r, football);
  const sp = specs(leg.variant);
  const m = leg.market_id;
  const o = leg.outcome_id;
  const final = r.status === 'finished';
  // Jogo terminado: o resultado é final. Ao vivo: o resultado tem de estar parado há 60 s (VAR).
  const settled = final || !r.scoreAt || now - r.scoreAt.getTime() >= VAR_DELAY_MS;
  const secondHalf = s.regular && s.first ? { home: s.regular.home - s.first.home, away: s.regular.away - s.first.away } : null;
  // 1.ª parte terminada: intervalo (31), 2.ª parte (7) ou já há resultado da 2.ª parte.
  const firstHalfDone = final || r.matchStatus === 31 || r.matchStatus === 7 || r.periods.some((x) => x.number === 2);

  if (football && TOTALS[m] && sp.total !== undefined) {
    const t = TOTALS[m];
    const line = Number(sp.total);
    const part = t.part === 'regular' ? s.regular : t.part === 'first' ? s.first : secondHalf;
    if (!part || !Number.isFinite(line)) return null;
    const goals = goalsFor(t.who, part);
    const over = o === '12';
    const under = o === '13';
    if (!over && !under) return null;
    const partDone = t.part === 'first' ? firstHalfDone : final;
    if (partDone && settled) return asian(line, (l) => (over ? goals - l : l - goals));
    // Ao vivo: os golos só sobem — um "mais de" ultrapassado já ganhou, um "menos de" já perdeu.
    const top = Math.abs((line * 4) % 2) === 1 ? line + 0.25 : line;
    if (settled && goals > top) return over ? 'won' : 'lost';
    return null;
  }

  if (football && m === '29' && s.regular) {
    const both = s.regular.home > 0 && s.regular.away > 0;
    if (both && settled) return o === '74' ? 'won' : o === '76' ? 'lost' : null;
    if (final && settled) return o === '74' ? 'lost' : o === '76' ? 'won' : null;
    return null;
  }

  if (football && (m === '60' || m === '83')) {
    const part = m === '60' ? s.first : secondHalf;
    const done = m === '60' ? firstHalfDone : final;
    return part && done && settled ? winner3(part, o) : null;
  }

  if (!final || !settled) return null;

  // Daqui para baixo só com o jogo terminado.
  if (m === '1') {
    if (!football && s.overtime) return null; // 1X2 de tempo regulamentar noutros desportos: operador
    return s.regular ? winner3(s.regular, o) : null;
  }
  if (football && m === '10' && s.regular) {
    const res = s.regular.home > s.regular.away ? '1' : s.regular.home < s.regular.away ? '3' : '2';
    const covers: Record<string, string[]> = { '9': ['1', '2'], '10': ['1', '3'], '11': ['2', '3'] };
    return covers[o] ? (covers[o].includes(res) ? 'won' : 'lost') : null;
  }
  if (football && m === '11' && s.regular) {
    if (s.regular.home === s.regular.away) return 'void';
    const homeWins = s.regular.home > s.regular.away;
    return o === '4' ? (homeWins ? 'won' : 'lost') : o === '5' ? (homeWins ? 'lost' : 'won') : null;
  }
  if (football && m === '16' && s.regular && sp.hcp !== undefined) {
    const h = Number(sp.hcp);
    if (!Number.isFinite(h)) return null;
    const margin = s.regular.home - s.regular.away;
    // O handicap é dado à casa; a seleção de fora tem o handicap simétrico.
    if (o === '1714') return asian(h, (l) => margin + l);
    if (o === '1715') return asian(-h, (l) => -margin + l);
    return null;
  }
  if (football && m === '14' && s.regular && sp.hcp) {
    const [a, b] = sp.hcp.split(':').map(Number);
    if (!Number.isFinite(a) || !Number.isFinite(b)) return null;
    const adj = { home: s.regular.home + a, away: s.regular.away + b };
    const map: Record<string, string> = { '1711': '1', '1712': '2', '1713': '3' };
    return map[o] ? winner3(adj, map[o]) : null;
  }
  if (['186', '219', '340', '406'].includes(m) && s.final) {
    if (s.final.home === s.final.away) return 'void';
    const homeWins = s.final.home > s.final.away;
    return o === '4' ? (homeWins ? 'won' : 'lost') : o === '5' ? (homeWins ? 'lost' : 'won') : null;
  }
  // Resultado exato (futebol): a seleção é "2:1"; "outro" fica para o operador.
  if (football && s.regular && /resultado exato|correct score/i.test(leg.market_name) && !/parte|half/i.test(leg.market_name)) {
    const mm = /^\s*(\d+)\s*[:\-]\s*(\d+)\s*$/.exec(leg.outcome_name);
    if (!mm) return null;
    return Number(mm[1]) === s.regular.home && Number(mm[2]) === s.regular.away ? 'won' : 'lost';
  }
  return null;
}

const FACTOR: Record<LegStatus, (odds: number) => number> = {
  won: (k) => k,
  lost: () => 0,
  void: () => 1,
  half_won: (k) => (1 + k) / 2,
  half_lost: () => 0.5,
};

async function log(c: PoolClient, row: { betId?: string | null; legId?: string | null; eventId?: string | null; action: string; detail?: string | null; source: string }) {
  await c.query('INSERT INTO settlements (bet_id, leg_id, event_id, action, detail, source) VALUES ($1, $2, $3, $4, $5, $6)', [
    row.betId ?? null,
    row.legId ?? null,
    row.eventId ?? null,
    row.action,
    row.detail ?? null,
    row.source,
  ]);
}

/** Fecha o bilhete quando já se sabe o resultado (todas as seleções decididas, ou uma perdida). */
export async function finalizeBet(c: PoolClient, betId: string, source: string) {
  const bet = (await c.query<{ id: string; user_id: string; status: string; stake_cents: string; odds_check: string }>('SELECT id, user_id, status, stake_cents, odds_check FROM bets WHERE id = $1 FOR UPDATE', [betId])).rows[0];
  if (!bet || bet.status !== 'open') return false;
  const legs = (await c.query<{ status: string; odds: string }>('SELECT status, odds FROM bet_legs WHERE bet_id = $1', [betId])).rows;
  const anyLost = legs.some((l) => l.status === 'lost');
  if (!anyLost && legs.some((l) => l.status === 'open')) return false;
  let factor = 1;
  for (const l of legs) factor *= l.status === 'open' ? 0 : FACTOR[l.status as LegStatus](Number(l.odds));
  const stake = Number(bet.stake_cents);
  const payout = anyLost ? 0 : Math.floor(stake * factor);
  const status = anyLost || payout === 0 ? 'lost' : legs.every((l) => l.status === 'void') ? 'void' : 'won';
  // A odd veio do navegador: um bilhete ganho cujas odds não foram confirmadas com a BETBY não é
  // pago sozinho — fica Em análise para o operador (Liquidação → aprovar paga, recusar devolve).
  if (status === 'won' && bet.odds_check !== 'ok') {
    await c.query("UPDATE bets SET status = 'review', note = $2 WHERE id = $1", [betId, bet.odds_check === 'mismatch' ? 'Ganha, mas a odd não coincide com a BETBY' : 'Ganha, com as odds por confirmar']);
    await log(c, { betId, action: 'bet_review', detail: `ganha por confirmar odds (${bet.odds_check})`, source });
    return true;
  }
  await c.query('UPDATE bets SET status = $2, payout_cents = $3, settled_at = now() WHERE id = $1', [betId, status, payout]);
  if (payout > 0) await moveBalance(c, bet.user_id, status === 'void' ? 'refund' : 'payout', payout, { reference: `#${betId}` });
  await log(c, { betId, action: `bet_${status}`, detail: `pago ${(payout / 100).toFixed(2)} €`, source });
  return true;
}

export async function setLeg(c: PoolClient, leg: { id: string; bet_id: string; event_id: string }, status: LegStatus, source: string, note?: string) {
  const r = await c.query("UPDATE bet_legs SET status = $2, settled_at = now(), result_note = $3 WHERE id = $1 AND status = 'open'", [leg.id, status, note ?? null]);
  if (!r.rowCount) return false;
  await log(c, { betId: leg.bet_id, legId: leg.id, eventId: leg.event_id, action: `leg_${status}`, detail: note ?? null, source });
  await finalizeBet(c, leg.bet_id, source);
  return true;
}

export function rowToResult(r: { event_id: string; sport: string | null; status: string; match_status: number | null; home_score: number | null; away_score: number | null; periods: Period[] | null; score_at: Date | null }): EventResult {
  return {
    eventId: r.event_id,
    sport: r.sport,
    status: r.status as EventResult['status'],
    matchStatus: r.match_status,
    home: r.home_score,
    away: r.away_score,
    periods: Array.isArray(r.periods) ? r.periods : [],
    scoreAt: r.score_at ? new Date(r.score_at) : null,
  };
}

/** Liquida o que for possível num jogo. Devolve quantas seleções foram decididas. */
export async function settleEvent(eventId: string, source: string) {
  return tx(async (c) => {
    const row = (await c.query('SELECT * FROM event_results WHERE event_id = $1', [eventId])).rows[0];
    if (!row) return 0;
    const r = rowToResult(row);
    const legs = (await c.query<LegRow>("SELECT * FROM bet_legs WHERE event_id = $1 AND status = 'open' ORDER BY id FOR UPDATE", [eventId])).rows;
    let n = 0;
    for (const leg of legs) {
      const st = decideLeg(leg, r);
      if (st && (await setLeg(c, leg, st, source, r.status === 'cancelled' ? 'Jogo cancelado' : `${r.home ?? '?'}-${r.away ?? '?'}`))) n += 1;
    }
    return n;
  });
}

/** Anula seleções sem resultado 72 h depois do início do jogo. */
export async function voidStale(source = 'engine') {
  return tx(async (c) => {
    const legs = (
      await c.query<LegRow>(
        `SELECT l.* FROM bet_legs l LEFT JOIN event_results r ON r.event_id = l.event_id
          WHERE l.status = 'open' AND l.start_time < now() - make_interval(hours => $1)
            AND (r.status IS NULL OR r.status <> 'finished') FOR UPDATE OF l`,
        [NO_RESULT_VOID_HOURS],
      )
    ).rows;
    for (const leg of legs) await setLeg(c, leg, 'void', source, `Sem resultado ${NO_RESULT_VOID_HOURS} h após o início`);
    return legs.length;
  });
}

/** Guarda um resultado vindo da BETBY (página do admin) e liquida o que der. */
export async function ingestResult(input: Omit<EventResult, 'scoreAt'> & { clock?: string | null }, source: string) {
  const prev = (await query<{ home_score: number | null; away_score: number | null; status: string; score_at: Date | null }>('SELECT home_score, away_score, status, score_at FROM event_results WHERE event_id = $1', [input.eventId]))[0];
  // Um jogo terminado não volta a "ao vivo" (só o operador corrige).
  if (prev?.status === 'finished' && input.status !== 'finished') return 0;
  const changed = !prev || prev.home_score !== input.home || prev.away_score !== input.away;
  // Resultado que muda depois de já haver seleções liquidadas com ele (final corrigido, golo
  // anulado): não se aplica sozinho — fica registado para o operador corrigir os bilhetes à mão.
  if (prev && changed) {
    const lowered = (input.home ?? 0) < (prev.home_score ?? 0) || (input.away ?? 0) < (prev.away_score ?? 0);
    const finalChanged = prev.status === 'finished';
    if (lowered || finalChanged) {
      const settled = await query("SELECT 1 FROM bet_legs WHERE event_id = $1 AND status <> 'open' LIMIT 1", [input.eventId]);
      if (settled.length) {
        await query('INSERT INTO settlements (event_id, action, detail, source) VALUES ($1, $2, $3, $4)', [
          input.eventId,
          'result_conflict',
          `${prev.home_score ?? '?'}-${prev.away_score ?? '?'} → ${input.home ?? '?'}-${input.away ?? '?'} (já liquidado; não aplicado)`,
          source,
        ]);
        throw new ResultConflict(`O resultado deste jogo já liquidou bilhetes (${prev.home_score}-${prev.away_score}). Uma correção tem de ser feita bilhete a bilhete.`);
      }
    }
  }
  await query(
    `INSERT INTO event_results (event_id, sport, status, match_status, home_score, away_score, periods, clock, score_at, source, updated_at)
     VALUES ($1, $2, $3, $4, $5, $6, $7::jsonb, $8, $9, $10, now())
     ON CONFLICT (event_id) DO UPDATE SET sport = COALESCE(EXCLUDED.sport, event_results.sport), status = EXCLUDED.status,
       match_status = EXCLUDED.match_status, home_score = EXCLUDED.home_score, away_score = EXCLUDED.away_score,
       periods = EXCLUDED.periods, clock = EXCLUDED.clock, score_at = $9, source = EXCLUDED.source, updated_at = now()`,
    [input.eventId, input.sport, input.status, input.matchStatus, input.home, input.away, JSON.stringify(input.periods), input.clock ?? null, changed ? new Date() : prev?.score_at ?? new Date(), source],
  );
  return settleEvent(input.eventId, source);
}
