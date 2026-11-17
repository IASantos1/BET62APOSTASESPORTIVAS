import { euros, json, requireUser, route } from '../../../lib/server/auth';
import { query } from '../../../lib/server/db';

export const dynamic = 'force-dynamic';

const LABELS: Record<string, string> = {
  deposit: 'Depósito',
  withdrawal: 'Levantamento',
  withdrawal_refund: 'Levantamento devolvido',
  bet: 'Aposta',
  payout: 'Prémio',
  refund: 'Aposta anulada',
  admin_credit: 'Crédito (apoio)',
  admin_debit: 'Débito (apoio)',
};

/** Saldo e últimos movimentos da carteira. */
export const GET = route(async () => {
  const u = await requireUser();
  if (u instanceof Response) return u;
  const rows = await query<{ id: string; type: string; amount_cents: string; balance_after_cents: string; reference: string | null; note: string | null; created_at: Date }>(
    'SELECT id, type, amount_cents, balance_after_cents, reference, note, created_at FROM transactions WHERE user_id = $1 ORDER BY id DESC LIMIT 100',
    [u.id],
  );
  const open = await query<{ s: string }>(`SELECT COALESCE(SUM(stake_cents), 0) AS s FROM bets WHERE user_id = $1 AND status IN ('open', 'review')`, [u.id]);
  return json({
    balance: euros(u.balance_cents),
    inPlay: euros(open[0]?.s ?? 0),
    transactions: rows.map((t) => ({
      id: String(t.id),
      type: t.type,
      label: LABELS[t.type] ?? t.type,
      amount: euros(t.amount_cents),
      balanceAfter: euros(t.balance_after_cents),
      reference: t.reference,
      note: t.note,
      createdAt: new Date(t.created_at).toISOString(),
    })),
  });
});
