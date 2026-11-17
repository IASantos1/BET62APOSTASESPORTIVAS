import { NextResponse } from 'next/server';
import { isAdminAuthorized } from '../../../../../lib/admin-auth';
import { fail, json, route } from '../../../../../lib/server/auth';
import { tx } from '../../../../../lib/server/db';
import { moveBalance } from '../../../../../lib/server/wallet';
import { ResultConflict, finalizeBet, ingestResult, setLeg, type LegRow, type LegStatus } from '../../../../../lib/server/settlement';

export const dynamic = 'force-dynamic';

const LEG: LegStatus[] = ['won', 'lost', 'void', 'half_won', 'half_lost'];

/**
 * Decisões do operador na página Liquidação:
 *  { type: 'leg', legId, status }              — seleção que o resultado não decide (cartões, cantos…)
 *  { type: 'bet', betId, action: approve|reject } — bilhete em análise (recusar devolve o valor)
 *  { type: 'final', eventId, home, away, ht? }    — resultado final escrito pelo operador
 *  { type: 'cancel', eventId }                    — jogo cancelado: anula as seleções
 */
export const POST = route(async (req: Request) => {
  try {
    return await act(req);
  } catch (e) {
    if (e instanceof ResultConflict) return fail(e.message, 409);
    throw e;
  }
});

async function act(req: Request) {
  if (!isAdminAuthorized()) return NextResponse.json({ error: 'Sem sessão de admin.' }, { status: 401 });
  const b = (await req.json().catch(() => ({}))) as Record<string, unknown>;
  if (b.type === 'leg') {
    const status = String(b.status) as LegStatus;
    if (!LEG.includes(status)) return fail('Estado inválido.');
    const ok = await tx(async (c) => {
      const leg = (await c.query<LegRow>("SELECT * FROM bet_legs WHERE id = $1 AND status = 'open' FOR UPDATE", [String(b.legId)])).rows[0];
      return leg ? setLeg(c, leg, status, 'admin', 'Decisão do operador') : false;
    });
    return ok ? json({ ok: true }) : fail('Seleção já decidida ou inexistente.');
  }
  if (b.type === 'bet') {
    const approve = b.action === 'approve';
    const ok = await tx(async (c) => {
      const bet = (await c.query<{ id: string; user_id: string; stake_cents: string }>("SELECT id, user_id, stake_cents FROM bets WHERE id = $1 AND status = 'review' FOR UPDATE", [String(b.betId)])).rows[0];
      if (!bet) return false;
      if (approve) {
        // Aprovar confirma também as odds (decisão do operador).
        await c.query("UPDATE bets SET status = 'open', odds_check = 'ok', note = 'Aprovada pelo operador' WHERE id = $1", [bet.id]);
        await finalizeBet(c, bet.id, 'admin'); // as seleções podem já estar decididas
      } else {
        await c.query("UPDATE bets SET status = 'rejected', settled_at = now(), note = 'Recusada pelo operador' WHERE id = $1", [bet.id]);
        await moveBalance(c, bet.user_id, 'refund', Number(bet.stake_cents), { reference: `#${bet.id}`, note: 'Aposta recusada' });
      }
      await c.query('INSERT INTO settlements (bet_id, action, source) VALUES ($1, $2, $3)', [bet.id, approve ? 'bet_approved' : 'bet_rejected', 'admin']);
      return true;
    });
    return ok ? json({ ok: true }) : fail('Bilhete já decidido ou inexistente.');
  }
  if (b.type === 'final' || b.type === 'cancel') {
    const eventId = String(b.eventId ?? '');
    if (!/^(wh)?\d{3,30}$/.test(eventId)) return fail('Jogo inválido.');
    if (b.type === 'cancel') {
      const n = await ingestResult({ eventId, sport: null, status: 'cancelled', matchStatus: null, home: null, away: null, periods: [] }, 'admin');
      return json({ ok: true, decided: n });
    }
    const home = Number(b.home);
    const away = Number(b.away);
    if (![home, away].every((v) => Number.isInteger(v) && v >= 0 && v < 1000)) return fail('Resultado inválido.');
    const ht = Array.isArray(b.ht) ? (b.ht as unknown[]).map(Number) : null;
    const periods =
      ht && ht.length === 2 && ht.every((v) => Number.isInteger(v) && v >= 0) && ht[0] <= home && ht[1] <= away
        ? [{ number: 1, home: ht[0], away: ht[1] }, { number: 2, home: home - ht[0], away: away - ht[1] }]
        : [];
    const n = await ingestResult({ eventId, sport: null, status: 'finished', matchStatus: 100, home, away, periods }, 'admin');
    return json({ ok: true, decided: n });
  }
  return fail('Ação desconhecida.');
}
