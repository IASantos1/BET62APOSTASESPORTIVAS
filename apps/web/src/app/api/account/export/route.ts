import { NextResponse } from 'next/server';
import { publicUser, requireUser, route } from '../../../../lib/server/auth';
import { query } from '../../../../lib/server/db';

export const dynamic = 'force-dynamic';

/** RGPD: o jogador descarrega todos os seus dados (conta, movimentos, apostas, limites, sessões). */
export const GET = route(async () => {
  const u = await requireUser();
  if (u instanceof Response) return u;
  const [transactions, bets, legs, limits, sessions] = await Promise.all([
    query('SELECT type, amount_cents, balance_after_cents, reference, note, created_at FROM transactions WHERE user_id = $1 ORDER BY id', [u.id]),
    query('SELECT id, kind, stake_cents, odds, potential_cents, status, payout_cents, created_at, settled_at FROM bets WHERE user_id = $1 ORDER BY id', [u.id]),
    query('SELECT l.* FROM bet_legs l JOIN bets b ON b.id = l.bet_id WHERE b.user_id = $1 ORDER BY l.id', [u.id]),
    query('SELECT deposit_day, deposit_week, deposit_month, pending, pending_at, updated_at FROM user_limits WHERE user_id = $1', [u.id]),
    query('SELECT created_at, expires_at, user_agent, ip FROM sessions WHERE user_id = $1 ORDER BY created_at', [u.id]),
  ]);
  const body = JSON.stringify({ exportedAt: new Date().toISOString(), account: publicUser(u), transactions, bets, legs, limits, sessions }, null, 2);
  return new NextResponse(body, {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'content-disposition': `attachment; filename="bet62-dados-${publicUser(u).memberId}.json"`,
      'cache-control': 'no-store',
    },
  });
});
