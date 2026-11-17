import { query } from '../db';
import { ResultConflict, ingestResult } from '../settlement';
import { toBoardMarkets } from '../../winhouse-markets';
import { currentOdds, type WhRow } from './view';

// Bilhetes em jogos do WinHouse, liquidados pelo servidor (sem o navegador do admin):
//  • ao vivo: o placar vai para event_results (linhas de golos já decididas, como com a BETBY);
//  • fim: veredito claro (jogo acabado) → resultado final; duvidoso → fica para o operador
//    (Liquidação → resultado final à mão);
//  • odds atuais das seleções em aberto → leg_prices (cash out).
// As seleções guardam "wh" + id; um jogo que mudou de id ao passar a ao vivo segue merged_into.

type Verdict = { home?: number; away?: number; review?: string } | null;

export async function settleWinHouse(log: (m: string) => void = () => {}) {
  const legs = await query<{ event_id: string; market_id: string; variant: string; outcome_id: string; bet_open: boolean }>(
    `SELECT DISTINCT l.event_id, l.market_id, l.variant, l.outcome_id, (b.status = 'open') AS bet_open
       FROM bet_legs l JOIN bets b ON b.id = l.bet_id
      WHERE l.status = 'open' AND b.status IN ('open', 'review') AND l.event_id LIKE 'wh%' LIMIT 5000`,
  );
  if (!legs.length) return { events: 0, decided: 0 };
  const ids = [...new Set(legs.map((l) => l.event_id.slice(2)))];
  // O jogo de cada id (seguindo merged_into até 3 vezes).
  const rows = new Map<string, WhRow>();
  let want = ids;
  for (let hop = 0; hop < 4 && want.length; hop++) {
    const got = await query<WhRow & { merged_into: string | null }>('SELECT * FROM wh_events WHERE id = ANY($1)', [want]);
    for (const r of got) rows.set(r.id, r);
    want = got.filter((r) => r.status === 'merged' && r.merged_into && !rows.has(r.merged_into)).map((r) => r.merged_into!);
  }
  const resolve = (id: string) => {
    let r = rows.get(id);
    for (let i = 0; i < 4 && r?.status === 'merged' && (r as WhRow & { merged_into: string | null }).merged_into; i++) {
      r = rows.get((r as WhRow & { merged_into: string | null }).merged_into!);
    }
    return r ?? null;
  };

  let decided = 0;
  const prices: { e: string; m: string; v: string; o: string; k: number | null; a: boolean }[] = [];
  const conv = new Map<string, ReturnType<typeof toBoardMarkets> | null>();
  for (const id of ids) {
    const r = resolve(id);
    if (!r) continue;
    const eventId = `wh${id}`;
    try {
      if (r.status === 'live' && r.home_score !== null && r.away_score !== null) {
        decided += await ingestResult({ eventId, sport: r.sport, status: 'live', matchStatus: null, home: r.home_score, away: r.away_score, periods: [], clock: r.clock_raw }, 'winhouse');
      } else if (r.status === 'ended') {
        const v = r.verdict as Verdict;
        if (v && typeof v.home === 'number' && typeof v.away === 'number') {
          decided += await ingestResult({ eventId, sport: r.sport, status: 'finished', matchStatus: 100, home: v.home, away: v.away, periods: [] }, 'winhouse');
        }
      }
    } catch (e) {
      if (!(e instanceof ResultConflict)) throw e;
      log(`WinHouse: ${r.home} - ${r.away}: ${e.message}`);
    }
    if (r.status === 'live' || r.status === 'scheduled') {
      const { odds, suspended } = currentOdds(r);
      conv.set(id, toBoardMarkets(odds, r.sport, r.home, r.away, suspended));
    } else conv.set(id, null);
  }
  for (const l of legs) {
    if (!l.bet_open) continue;
    const c = conv.get(l.event_id.slice(2));
    if (c === undefined) continue;
    const o = c?.markets[l.market_id]?.[l.variant]?.[l.outcome_id];
    const k = o && Number(o.k) > 1 ? Number(o.k) : null;
    prices.push({ e: l.event_id, m: l.market_id, v: l.variant, o: l.outcome_id, k, a: !!o && o.b !== 1 && k !== null });
  }
  if (prices.length) {
    await query(
      `INSERT INTO leg_prices (event_id, market_id, variant, outcome_id, odds, active, at)
       SELECT *, now() FROM UNNEST($1::text[], $2::text[], $3::text[], $4::text[], $5::numeric[], $6::boolean[])
       ON CONFLICT (event_id, market_id, variant, outcome_id) DO UPDATE SET odds = COALESCE(EXCLUDED.odds, leg_prices.odds), active = EXCLUDED.active, at = now()`,
      [prices.map((p) => p.e), prices.map((p) => p.m), prices.map((p) => p.v), prices.map((p) => p.o), prices.map((p) => p.k), prices.map((p) => p.a)],
    );
  }
  return { events: ids.length, decided };
}
