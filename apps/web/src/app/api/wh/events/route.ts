import { json, route } from '../../../../lib/server/auth';
import { hasDatabase } from '../../../../lib/server/db';
import { listEvents } from '../../../../lib/server/winhouse/view';

export const dynamic = 'force-dynamic';

/** Jogos do WinHouse (recolhidos pelo servidor): ?live=1 só ao vivo, ?live=0 só próximos, ?sport=futebol, ?hours=72. */
export const GET = route(async (req: Request) => {
  if (!process.env.WINHOUSE_BASE_URL || !hasDatabase()) return json({ enabled: false, events: [] });
  const u = new URL(req.url);
  const l = u.searchParams.get('live');
  const sport = u.searchParams.get('sport');
  const events = await listEvents({
    live: l === '1' ? true : l === '0' ? false : null,
    sport: sport && /^[a-z]{2,20}$/.test(sport) ? sport : null,
    hours: Number(u.searchParams.get('hours')) || 72,
  });
  return json({ enabled: true, at: new Date().toISOString(), events });
});
