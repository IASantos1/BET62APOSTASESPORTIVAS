import { euros, json, requireUser, route } from '../../../../lib/server/auth';
import { one } from '../../../../lib/server/db';

export const dynamic = 'force-dynamic';

/** Histórico de atividade: totais das apostas e da carteira. */
export const GET = route(async () => {
  const u = await requireUser();
  if (u instanceof Response) return u;
  const b = await one<Record<string, string>>(
    `SELECT COUNT(*) AS total,
            COUNT(*) FILTER (WHERE status IN ('open', 'review')) AS open,
            COUNT(*) FILTER (WHERE status = 'won') AS won,
            COUNT(*) FILTER (WHERE status = 'lost') AS lost,
            COUNT(*) FILTER (WHERE status = 'void') AS void,
            COALESCE(SUM(stake_cents) FILTER (WHERE status NOT IN ('rejected')), 0) AS staked,
            COALESCE(SUM(payout_cents), 0) AS returned,
            COALESCE(MAX(odds) FILTER (WHERE status = 'won'), 0) AS best_odds
       FROM bets WHERE user_id = $1`,
    [u.id],
  );
  const t = await one<Record<string, string>>(
    `SELECT COALESCE(SUM(amount_cents) FILTER (WHERE type = 'deposit'), 0) AS deposited,
            COALESCE(-SUM(amount_cents) FILTER (WHERE type = 'withdrawal'), 0) AS withdrawn
       FROM transactions WHERE user_id = $1`,
    [u.id],
  );
  const settled = Number(b?.won ?? 0) + Number(b?.lost ?? 0);
  return json({
    bets: {
      total: Number(b?.total ?? 0),
      open: Number(b?.open ?? 0),
      won: Number(b?.won ?? 0),
      lost: Number(b?.lost ?? 0),
      void: Number(b?.void ?? 0),
      winRate: settled ? Math.round((Number(b?.won ?? 0) / settled) * 100) : 0,
      staked: euros(b?.staked ?? 0),
      returned: euros(b?.returned ?? 0),
      bestOdds: Number(b?.best_odds ?? 0),
    },
    wallet: { deposited: euros(t?.deposited ?? 0), withdrawn: euros(t?.withdrawn ?? 0) },
  });
});
