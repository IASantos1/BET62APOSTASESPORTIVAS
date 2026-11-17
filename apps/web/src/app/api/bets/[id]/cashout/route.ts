import { euros, fail, json, publicUser, requireUser, route, type UserRow } from '../../../../../lib/server/auth';
import { one, tx } from '../../../../../lib/server/db';
import { CASHOUT, CashoutError, cashOut, computeOffer, offerContext, type BetForOffer, type LegForOffer } from '../../../../../lib/server/cashout';
import { query } from '../../../../../lib/server/db';

export const dynamic = 'force-dynamic';

// Um pedido de cash out por aposta de cada vez (memória do processo).
const pending = new Set<string>();

const offerView = (o: ReturnType<typeof computeOffer>) => ({ status: o.status, value: o.valueCents ? o.valueCents / 100 : null, reason: o.reason ?? null, live: !!o.live });

/** Cash out: { value } = o valor que o jogador viu e aceitou. Ao vivo espera 8 s e confirma de novo. */
export const POST = route(async (req: Request, { params }: { params: { id: string } }) => {
  const u = await requireUser();
  if (u instanceof Response) return u;
  const id = String(params.id).replace(/\D/g, '');
  if (!id) return fail('Aposta inválida.');
  if (pending.has(id)) return fail('Já há um pedido de cash out em curso para esta aposta.', 409);
  const seen = Math.round(Number(((await req.json().catch(() => ({}))) as { value?: number }).value) * 100);
  pending.add(id);
  try {
    // Primeira verificação, antes da espera.
    const bet = await one<BetForOffer>('SELECT * FROM bets WHERE id = $1 AND user_id = $2', [id, u.id]);
    if (!bet) return fail('Aposta não encontrada.', 404);
    const legs = await query<LegForOffer>('SELECT * FROM bet_legs WHERE bet_id = $1', [id]);
    const ctx = await offerContext(legs);
    const offer = computeOffer(bet, legs, ctx.prices, ctx.results);
    if (offer.status !== 'available') return json({ error: `Cash out ${offer.status === 'suspended' ? 'suspenso' : 'indisponível'}: ${offer.reason}.`, cashout: offerView(offer) }, 409);
    if (offer.live) await new Promise((ok) => setTimeout(ok, CASHOUT.liveDelaySeconds * 1000));
    const r = await tx((c) => cashOut(c, u.id, id, seen));
    const fresh = await one<UserRow>('SELECT * FROM users WHERE id = $1', [u.id]);
    return json({ value: r.valueCents / 100, balance: euros(r.balance), user: fresh ? publicUser(fresh) : null });
  } catch (e) {
    if (e instanceof CashoutError) return json({ error: e.message, cashout: e.offer ? offerView(e.offer) : null }, 409);
    throw e;
  } finally {
    pending.delete(id);
  }
});
