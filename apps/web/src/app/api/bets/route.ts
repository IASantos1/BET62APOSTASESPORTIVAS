import { fail, json, requireUser, route } from '../../../lib/server/auth';
import { ticketsView } from '../../../lib/server/tickets';
import { BetError, cleanLeg, placeBets } from '../../../lib/server/betting';
import { query } from '../../../lib/server/db';

export const dynamic = 'force-dynamic';

// Separadores: em aberto (inclui em análise), resolvidas (ganhas/perdidas), cash out, anuladas
// (anuladas e recusadas); "all" para todos (o painel conta-os por separador).
const STATUS_SQL: Record<string, string> = {
  open: "IN ('open', 'review')",
  settled: "IN ('won', 'lost')",
  cashout: "IN ('cashout')",
  void: "IN ('void', 'rejected')",
  all: "IS NOT NULL",
};

/** Bilhetes do jogador: ?status=open | settled | cashout | void | all. */
export const GET = route(async (req: Request) => {
  const u = await requireUser();
  if (u instanceof Response) return u;
  const which = new URL(req.url).searchParams.get('status') ?? 'open';
  const cond = STATUS_SQL[which] ?? STATUS_SQL.open;
  const bets = await query<Parameters<typeof ticketsView>[0][number]>(`SELECT * FROM bets WHERE user_id = $1 AND status ${cond} ORDER BY id DESC LIMIT 200`, [u.id]);
  return json({ bets: await ticketsView(bets) });
});

/** Fazer apostas: { kind: single|multiple|builder, stake (€ por bilhete), legs: [...] }. */
export const POST = route(async (req: Request) => {
  const u = await requireUser();
  if (u instanceof Response) return u;
  const b = (await req.json().catch(() => ({}))) as { kind?: string; stake?: number; legs?: Record<string, unknown>[] };
  const kind = b.kind === 'multiple' || b.kind === 'builder' ? b.kind : 'single';
  try {
    const legs = (Array.isArray(b.legs) ? b.legs : []).map(cleanLeg);
    const r = await placeBets(u, kind, Number(b.stake), legs);
    return json(r, 201);
  } catch (e) {
    if (e instanceof BetError) return fail(e.message);
    throw e;
  }
});
