import { json, route } from '../../../../lib/server/auth';
import { hasDatabase, one } from '../../../../lib/server/db';
import { getMode } from '../../../../lib/server/winhouse/mode';
import { listEvents } from '../../../../lib/server/winhouse/view';

export const dynamic = 'force-dynamic';

/** Jogos do WinHouse (recolhidos pelo servidor): ?live=1 só ao vivo, ?live=0 só próximos, ?sport=futebol, ?hours=72. */
export const GET = route(async (req: Request) => {
  if (!process.env.WINHOUSE_BASE_URL || !hasDatabase()) return json({ enabled: false, mode: 'betby', events: [] });
  const u = new URL(req.url);
  const l = u.searchParams.get('live');
  const sport = u.searchParams.get('sport');
  const events = await listEvents({
    live: l === '1' ? true : l === '0' ? false : null,
    sport: sport && /^[a-z]{2,20}$/.test(sport) ? sport : null,
    hours: Number(u.searchParams.get('hours')) || 72,
  });
  const mode = await getMode();
  // Só BETBY: o site não precisa dos jogos do WinHouse.
  if (mode === 'betby') return json({ enabled: true, mode, at: new Date().toISOString(), events: [] });
  // WinHouse em baixo (a última leitura boa da lista ao vivo tem mais de 2 min) ou coletor parado:
  // o site usa a BETBY como reserva até o WinHouse voltar a responder.
  const st = await one<{ value: { routes?: { live?: { ok?: boolean; at?: string } }; lastLiveOkAt?: string } }>(`SELECT value FROM wh_state WHERE key = 'status'`);
  const okAt = Date.parse(st?.value?.lastLiveOkAt ?? '');
  const healthy = Number.isFinite(okAt) && Date.now() - okAt < 120_000;
  return json({ enabled: true, mode, healthy, at: new Date().toISOString(), events: healthy ? events : [] });
});
