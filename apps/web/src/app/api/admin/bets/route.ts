import { NextResponse } from 'next/server';
import { isAdminAuthorized } from '../../../../lib/admin-auth';
import { euros, json, route } from '../../../../lib/server/auth';
import { hasDatabase, query } from '../../../../lib/server/db';
import { ticketRef } from '../../../../lib/server/tickets';

export const dynamic = 'force-dynamic';

const FILTER: Record<string, string> = {
  all: "b.status IS NOT NULL",
  open: "b.status IN ('open', 'review')",
  won: "b.status = 'won'",
  lost: "b.status = 'lost'",
  cashout: "b.status = 'cashout'",
  void: "b.status IN ('void', 'rejected')",
};

/** Apostas de todos os jogadores (últimas 200), com filtro por estado e pesquisa por e-mail/referência. */
export const GET = route(async (req: Request) => {
  if (!isAdminAuthorized()) return NextResponse.json({ error: 'Sem sessão de admin.' }, { status: 401 });
  if (!hasDatabase()) return json({ accounts: false, bets: [] });
  const url = new URL(req.url);
  const cond = FILTER[url.searchParams.get('status') ?? 'all'] ?? FILTER.all;
  const q = (url.searchParams.get('q') ?? '').trim().toLowerCase().slice(0, 100);
  const id = q.replace(/^b62-0*/, '').replace(/^#/, '');
  const rows = await query<Record<string, string | Date | null>>(
    `SELECT b.id, b.kind, b.status, b.stake_cents, b.odds, b.potential_cents, b.payout_cents, b.created_at, b.odds_check, u.email,
            (SELECT string_agg(l.event_name || ' · ' || l.outcome_name, ' | ' ORDER BY l.id) FROM bet_legs l WHERE l.bet_id = b.id) AS legs
       FROM bets b JOIN users u ON u.id = b.user_id
      WHERE ${cond} AND ($1 = '' OR lower(u.email) LIKE '%' || $1 || '%' OR b.id::text = $2)
      ORDER BY b.id DESC LIMIT 200`,
    [q, /^\d+$/.test(id) ? id : '-1'],
  );
  return json({
    accounts: true,
    bets: rows.map((r) => ({
      id: String(r.id),
      ref: ticketRef(String(r.id)),
      kind: r.kind,
      status: r.status,
      email: r.email,
      stake: euros(String(r.stake_cents)),
      odds: Number(r.odds),
      potential: euros(String(r.potential_cents)),
      payout: euros(String(r.payout_cents)),
      oddsCheck: r.odds_check,
      legs: r.legs,
      createdAt: new Date(r.created_at as Date).toISOString(),
    })),
  });
});
