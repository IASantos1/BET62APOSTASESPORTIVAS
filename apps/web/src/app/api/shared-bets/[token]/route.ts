import { fail, json, route } from '../../../../lib/server/auth';
import { query } from '../../../../lib/server/db';
import { ticketsView } from '../../../../lib/server/tickets';

export const dynamic = 'force-dynamic';

/** Um bilhete partilhado (público): só o bilhete, sem dados da conta nem cash out. */
export const GET = route(async (_req: Request, { params }: { params: { token: string } }) => {
  const token = String(params.token).replace(/[^A-Za-z0-9_-]/g, '').slice(0, 40);
  const rows = await query<Parameters<typeof ticketsView>[0][number]>('SELECT * FROM bets WHERE share_token = $1', [token]);
  if (!rows.length) return fail('Este bilhete já não está disponível.', 404);
  const [ticket] = await ticketsView(rows, { withCashout: false });
  return json({ ticket: { ...ticket, id: null, cashout: null } });
});
