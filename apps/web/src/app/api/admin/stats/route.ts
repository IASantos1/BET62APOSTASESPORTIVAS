import { NextResponse } from 'next/server';
import { isAdminAuthorized } from '../../../../lib/admin-auth';
import { euros, json, route } from '../../../../lib/server/auth';
import { hasDatabase, one, query } from '../../../../lib/server/db';

export const dynamic = 'force-dynamic';

/** Visão geral do admin (modelo do Bet62Novo): jogadores, apostas, dinheiro e os últimos 7 dias. */
export const GET = route(async () => {
  if (!isAdminAuthorized()) return NextResponse.json({ error: 'Sem sessão de admin.' }, { status: 401 });
  if (!hasDatabase()) return json({ accounts: false });
  const users = await one<{ total: string; today: string; balance: string }>(
    `SELECT COUNT(*) AS total, COUNT(*) FILTER (WHERE created_at > now() - interval '1 day') AS today, COALESCE(SUM(balance_cents), 0) AS balance FROM users`,
  );
  const bets = await one<Record<string, string>>(
    `SELECT COUNT(*) AS total,
            COUNT(*) FILTER (WHERE status = 'open') AS open,
            COUNT(*) FILTER (WHERE status = 'review') AS review,
            COUNT(*) FILTER (WHERE status = 'won') AS won,
            COUNT(*) FILTER (WHERE status = 'lost') AS lost,
            COUNT(*) FILTER (WHERE status = 'cashout') AS cashout,
            COUNT(*) FILTER (WHERE status IN ('void', 'rejected')) AS void,
            COALESCE(SUM(stake_cents) FILTER (WHERE status <> 'rejected'), 0) AS staked,
            COALESCE(SUM(payout_cents) FILTER (WHERE status IN ('won', 'cashout', 'void')), 0) AS paid,
            COALESCE(SUM(stake_cents) FILTER (WHERE status IN ('open', 'review')), 0) AS in_play
       FROM bets`,
  );
  const money = await one<{ deposited: string; withdrawn: string }>(
    `SELECT COALESCE(SUM(amount_cents) FILTER (WHERE type IN ('deposit', 'admin_credit')), 0) AS deposited,
            COALESCE(-SUM(amount_cents) FILTER (WHERE type IN ('withdrawal', 'admin_debit')), 0) AS withdrawn FROM transactions`,
  );
  const chart = await query<{ day: string; bets: string; volume: string }>(
    `SELECT to_char(d, 'DD/MM') AS day, COUNT(b.id) AS bets, COALESCE(SUM(b.stake_cents), 0) AS volume
       FROM generate_series((now() - interval '6 days')::date, now()::date, interval '1 day') d
       LEFT JOIN bets b ON b.created_at::date = d::date AND b.status <> 'rejected'
      GROUP BY d ORDER BY d`,
  );
  const staked = Number(bets?.staked ?? 0);
  // Margem: o que ficou na casa das apostas já resolvidas.
  const settled = await one<{ stake: string; paid: string }>(
    `SELECT COALESCE(SUM(stake_cents), 0) AS stake, COALESCE(SUM(payout_cents), 0) AS paid FROM bets WHERE status IN ('won', 'lost', 'cashout', 'void')`,
  );
  const sStake = Number(settled?.stake ?? 0);
  const n = (k: string) => Number(bets?.[k] ?? 0);
  return json({
    accounts: true,
    users: { total: Number(users?.total ?? 0), today: Number(users?.today ?? 0), balance: euros(users?.balance ?? 0) },
    bets: { total: n('total'), open: n('open'), review: n('review'), won: n('won'), lost: n('lost'), cashout: n('cashout'), void: n('void') },
    financial: {
      staked: staked / 100,
      paid: euros(bets?.paid ?? 0),
      inPlay: euros(bets?.in_play ?? 0),
      deposited: euros(money?.deposited ?? 0),
      withdrawn: euros(money?.withdrawn ?? 0),
      margin: sStake ? Math.round(((sStake - Number(settled?.paid ?? 0)) / sStake) * 1000) / 10 : 0,
    },
    chart: chart.map((c) => ({ day: c.day, bets: Number(c.bets), volume: euros(c.volume) })),
  });
});
