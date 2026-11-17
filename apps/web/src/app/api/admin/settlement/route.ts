import { NextResponse } from 'next/server';
import { isAdminAuthorized } from '../../../../lib/admin-auth';
import { euros, fail, json, route } from '../../../../lib/server/auth';
import { hasDatabase, query } from '../../../../lib/server/db';
import { ResultConflict, ingestResult, voidStale, type Period } from '../../../../lib/server/settlement';

export const dynamic = 'force-dynamic';

const denied = () => NextResponse.json({ error: 'Sem sessão de admin.' }, { status: 401 });

/**
 * O que a página Liquidação precisa: jogos com seleções em aberto (para o navegador do admin ir
 * buscar o resultado à BETBY), bilhetes em análise, seleções à espera de decisão manual e o registo.
 */
export const GET = route(async () => {
  if (!isAdminAuthorized()) return denied();
  if (!hasDatabase()) return json({ accounts: false });
  const voided = await voidStale('engine');
  const events = await query<Record<string, unknown>>(
    `SELECT l.event_id, MIN(l.event_name) AS event_name, MIN(l.sport) AS sport, MIN(l.sport_id) AS sport_id, MIN(l.start_time) AS start_time,
            COUNT(*) AS legs, COUNT(DISTINCT l.bet_id) AS bets, SUM(b.stake_cents) AS stake,
            r.status AS r_status, r.match_status, r.home_score, r.away_score, r.periods, r.clock, r.updated_at AS r_updated
       FROM bet_legs l JOIN bets b ON b.id = l.bet_id LEFT JOIN event_results r ON r.event_id = l.event_id
      WHERE l.status = 'open' AND b.status IN ('open', 'review')
      GROUP BY l.event_id, r.status, r.match_status, r.home_score, r.away_score, r.periods, r.clock, r.updated_at
      ORDER BY MIN(l.start_time) NULLS LAST LIMIT 300`,
  );
  const review = await query<Record<string, unknown>>(
    `SELECT b.id, b.kind, b.stake_cents, b.odds, b.potential_cents, b.created_at, b.note, b.odds_check, u.email,
            json_agg(json_build_object('eventId', l.event_id, 'event', l.event_name, 'marketId', l.market_id, 'variant', l.variant,
              'outcomeId', l.outcome_id, 'market', l.market_name, 'outcome', l.outcome_name, 'odds', l.odds) ORDER BY l.id) AS legs
       FROM bets b JOIN users u ON u.id = b.user_id JOIN bet_legs l ON l.bet_id = b.id
      WHERE b.status = 'review' GROUP BY b.id, u.email, b.note, b.odds_check ORDER BY b.id LIMIT 100`,
  );
  const manual = await query<Record<string, unknown>>(
    `SELECT l.id, l.bet_id, l.event_id, l.event_name, l.market_name, l.outcome_name, l.odds, r.home_score, r.away_score, r.status AS r_status
       FROM bet_legs l JOIN event_results r ON r.event_id = l.event_id
      WHERE l.status = 'open' AND r.status = 'finished' ORDER BY l.id LIMIT 200`,
  );
  const log = await query<Record<string, unknown>>('SELECT bet_id, leg_id, event_id, action, detail, source, created_at FROM settlements ORDER BY id DESC LIMIT 40');
  // Seleções em aberto: o navegador do admin envia as odds atuais delas (cash out).
  const openLegs = await query<{ event_id: string; market_id: string; variant: string; outcome_id: string }>(
    `SELECT DISTINCT l.event_id, l.market_id, l.variant, l.outcome_id FROM bet_legs l JOIN bets b ON b.id = l.bet_id
      WHERE l.status = 'open' AND b.status = 'open' LIMIT 2000`,
  );
  // Bilhetes recentes com as odds por confirmar: o navegador do admin compara-as com a BETBY.
  const checks = await query<{ id: string; legs: { eventId: string; marketId: string; variant: string; outcomeId: string; odds: string }[] }>(
    `SELECT b.id, json_agg(json_build_object('eventId', l.event_id, 'marketId', l.market_id, 'variant', l.variant, 'outcomeId', l.outcome_id, 'odds', l.odds)) AS legs
       FROM bets b JOIN bet_legs l ON l.bet_id = b.id
      WHERE b.odds_check = 'pending' AND b.status IN ('open', 'review') AND b.created_at > now() - interval '15 minutes'
      GROUP BY b.id LIMIT 200`,
  );
  return json({
    accounts: true,
    checks: checks.map((c) => ({ id: String(c.id), legs: c.legs })),
    voided,
    events: events.map((e) => ({
      eventId: e.event_id,
      event: e.event_name,
      sport: e.sport,
      sportId: e.sport_id,
      startTime: e.start_time ? new Date(e.start_time as string).toISOString() : null,
      legs: Number(e.legs),
      bets: Number(e.bets),
      stake: euros(e.stake as string),
      result: e.r_status
        ? { status: e.r_status, matchStatus: e.match_status, home: e.home_score, away: e.away_score, periods: e.periods, clock: e.clock, updatedAt: e.r_updated }
        : null,
    })),
    review: review.map((b) => ({
      id: String(b.id),
      kind: b.kind,
      email: b.email,
      stake: euros(b.stake_cents as string),
      odds: Number(b.odds),
      potential: euros(b.potential_cents as string),
      createdAt: b.created_at,
      note: b.note,
      oddsCheck: b.odds_check,
      legs: b.legs,
    })),
    manual: manual.map((l) => ({
      id: String(l.id),
      betId: String(l.bet_id),
      eventId: l.event_id,
      event: l.event_name,
      market: l.market_name,
      outcome: l.outcome_name,
      odds: Number(l.odds),
      score: `${l.home_score ?? '?'}-${l.away_score ?? '?'}`,
    })),
    log,
    legs: openLegs.map((l) => ({ eventId: l.event_id, marketId: l.market_id, variant: l.variant, outcomeId: l.outcome_id })),
  });
});

const int = (v: unknown) => (v === null || v === undefined || v === '' ? null : Number.isInteger(Number(v)) ? Number(v) : null);

/** Resultados lidos da BETBY pelo navegador do admin: { results: [{ eventId, status, matchStatus, home, away, periods, clock, sport }] }. */
export const POST = route(async (req: Request) => {
  if (!isAdminAuthorized()) return denied();
  const b = (await req.json().catch(() => ({}))) as { results?: Record<string, unknown>[]; prices?: Record<string, unknown>[]; checks?: Record<string, unknown>[] };
  // Confirmação das odds dos bilhetes novos: ok, ou não coincide (o bilhete vai a análise).
  for (const ch of Array.isArray(b.checks) ? b.checks.slice(0, 200) : []) {
    const id = String(ch.betId ?? '').replace(/\D/g, '');
    if (!id) continue;
    const ok = ch.ok === true;
    const note = String(ch.detail ?? '').slice(0, 300) || null;
    await query("UPDATE bets SET odds_check = $2, odds_check_note = $3 WHERE id = $1 AND odds_check = 'pending'", [id, ok ? 'ok' : 'mismatch', note]);
    if (!ok) {
      await query("UPDATE bets SET status = 'review', note = 'Odd acima da BETBY ao apostar' WHERE id = $1 AND status = 'open'", [id]);
      await query('INSERT INTO settlements (bet_id, action, detail, source) VALUES ($1, $2, $3, $4)', [id, 'odds_mismatch', note, 'betby-admin']);
    }
  }
  // Odds atuais da BETBY das seleções em aberto (para o cash out).
  const prices = (Array.isArray(b.prices) ? b.prices.slice(0, 2000) : []).filter(
    (p) => /^\d{3,30}$/.test(String(p.eventId)) && /^\d{1,10}$/.test(String(p.marketId)) && typeof p.outcomeId === 'string',
  );
  if (prices.length) {
    await query(
      `INSERT INTO leg_prices (event_id, market_id, variant, outcome_id, odds, active, at)
       SELECT * , now() FROM UNNEST($1::text[], $2::text[], $3::text[], $4::text[], $5::numeric[], $6::boolean[])
       ON CONFLICT (event_id, market_id, variant, outcome_id) DO UPDATE SET odds = EXCLUDED.odds, active = EXCLUDED.active, at = now()`,
      [
        prices.map((p) => String(p.eventId)),
        prices.map((p) => String(p.marketId)),
        prices.map((p) => String(p.variant ?? '').slice(0, 120)),
        prices.map((p) => String(p.outcomeId).slice(0, 60)),
        prices.map((p) => (Number(p.odds) > 1 && Number(p.odds) < 10000 ? Number(p.odds) : null)),
        prices.map((p) => p.active === true && Number(p.odds) > 1),
      ],
    );
  }
  const list = Array.isArray(b.results) ? b.results.slice(0, 300) : [];
  let decided = 0;
  for (const r of list) {
    const eventId = String(r.eventId ?? '');
    const status = r.status === 'finished' || r.status === 'cancelled' ? r.status : r.status === 'live' ? 'live' : null;
    if (!/^\d{3,30}$/.test(eventId) || !status) return fail('Resultado inválido.');
    const periods: Period[] = (Array.isArray(r.periods) ? r.periods : [])
      .map((p) => p as Record<string, unknown>)
      .map((p) => ({ number: Number(p.number), home: Number(p.home), away: Number(p.away) }))
      .filter((p) => [p.number, p.home, p.away].every(Number.isInteger));
    try {
      decided += await ingestResult(
      {
        eventId,
        sport: r.sport ? String(r.sport).slice(0, 30) : null,
        status,
        matchStatus: int(r.matchStatus),
        home: int(r.home),
        away: int(r.away),
        periods,
        clock: r.clock ? String(r.clock).slice(0, 20) : null,
      },
      'betby-admin',
      );
    } catch (e) {
      if (!(e instanceof ResultConflict)) throw e; // fica no registo; o operador decide
    }
  }
  return json({ ok: true, decided });
});
