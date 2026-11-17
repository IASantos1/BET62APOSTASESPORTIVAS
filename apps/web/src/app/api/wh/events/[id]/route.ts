import { fail, json, route } from '../../../../../lib/server/auth';
import { hasDatabase } from '../../../../../lib/server/db';
import { eventDetail } from '../../../../../lib/server/winhouse/view';

export const dynamic = 'force-dynamic';

/** Um jogo do WinHouse com todos os mercados. */
export const GET = route(async (_req: Request, { params }: { params: { id: string } }) => {
  if (!process.env.WINHOUSE_BASE_URL || !hasDatabase()) return fail('WinHouse desligado.', 404);
  if (!/^\d{1,20}$/.test(params.id)) return fail('Jogo inválido.', 400);
  const ev = await eventDetail(params.id);
  return ev ? json({ event: ev }) : fail('Jogo não encontrado.', 404);
});
