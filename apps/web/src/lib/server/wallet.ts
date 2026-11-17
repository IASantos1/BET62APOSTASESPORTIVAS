import type { PoolClient } from 'pg';

export type TxType = 'deposit' | 'withdrawal' | 'withdrawal_refund' | 'bet' | 'payout' | 'refund' | 'admin_credit' | 'admin_debit';

export class InsufficientFunds extends Error {
  constructor() {
    super('Saldo insuficiente.');
  }
}

/**
 * Muda o saldo de um jogador e regista o movimento, dentro de uma transação já aberta (tx()).
 * A linha do jogador fica bloqueada (FOR UPDATE) até ao COMMIT: dois pedidos ao mesmo tempo
 * nunca gastam o mesmo saldo. `amountCents` positivo credita, negativo debita.
 */
export async function moveBalance(c: PoolClient, userId: string, type: TxType, amountCents: number, opts: { reference?: string | null; note?: string | null } = {}) {
  if (!Number.isInteger(amountCents) || amountCents === 0) throw new Error('Valor inválido.');
  const row = (await c.query<{ balance_cents: string }>('SELECT balance_cents FROM users WHERE id = $1 FOR UPDATE', [userId])).rows[0];
  if (!row) throw new Error('Jogador não encontrado.');
  const next = Number(row.balance_cents) + amountCents;
  if (next < 0) throw new InsufficientFunds();
  await c.query('UPDATE users SET balance_cents = $1 WHERE id = $2', [next, userId]);
  await c.query(
    'INSERT INTO transactions (user_id, type, amount_cents, balance_after_cents, reference, note) VALUES ($1, $2, $3, $4, $5, $6)',
    [userId, type, amountCents, next, opts.reference ?? null, opts.note ?? null],
  );
  return next;
}
