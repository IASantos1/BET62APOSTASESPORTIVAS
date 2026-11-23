import { fail, json, route } from '../../../../../lib/server/auth';
import { hasDatabase } from '../../../../../lib/server/db';
import { createWinHouseClient, envOptions } from '../../../../../lib/server/winhouse/client';
import { readWinHouseStats } from '../../../../../lib/server/winhouse/tracker';
import { eventDetail } from '../../../../../lib/server/winhouse/view';
import { goalApiMatch } from '../../../../../lib/server/goal-api';

export const dynamic = 'force-dynamic';

/** Um jogo do WinHouse com todos os mercados. */
export const GET = route(async (_req: Request, { params }: { params: { id: string } }) => {
  if (!process.env.WINHOUSE_BASE_URL || !hasDatabase()) return fail('WinHouse desligado.', 404);
  if (!/^\d{1,20}$/.test(params.id)) return fail('Jogo inválido.', 400);
  const ev = await eventDetail(params.id);
  if (!ev) return fail('Jogo não encontrado.', 404);
  const statistics = ev.status === 'live' ? await readWinHouseStats(createWinHouseClient(envOptions()), params.id) : null;
  const goalApi = ev.status === 'scheduled'
    ? await goalApiMatch({ id: ev.id, home: ev.home, away: ev.away, startTime: ev.startTime, sport: ev.sport, competition: ev.competition })
    : null;
  return json({ event: { ...ev, statistics: statistics && Object.keys(statistics).length ? statistics : goalApi?.statistics ?? null, goalApi } });
});
