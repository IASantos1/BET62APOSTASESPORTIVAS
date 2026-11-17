import { randomBytes } from 'node:crypto';
import { headers } from 'next/headers';
import { fail, json, requireUser, route } from '../../../../../lib/server/auth';
import { one } from '../../../../../lib/server/db';

export const dynamic = 'force-dynamic';

/** Cria (ou reutiliza) o link público só deste bilhete: /b/<token>. */
export const POST = route(async (_req: Request, { params }: { params: { id: string } }) => {
  const u = await requireUser();
  if (u instanceof Response) return u;
  const id = String(params.id).replace(/\D/g, '');
  const bet = await one<{ id: string; share_token: string | null }>('SELECT id, share_token FROM bets WHERE id = $1 AND user_id = $2', [id, u.id]);
  if (!bet) return fail('Aposta não encontrada.', 404);
  let token = bet.share_token;
  if (!token) {
    const r = await one<{ share_token: string }>(
      'UPDATE bets SET share_token = COALESCE(share_token, $2) WHERE id = $1 RETURNING share_token',
      [bet.id, randomBytes(9).toString('base64url')],
    );
    token = r!.share_token;
  }
  const h = headers();
  const host = h.get('x-forwarded-host') ?? h.get('host') ?? 'localhost';
  const proto = h.get('x-forwarded-proto') ?? (host.startsWith('localhost') ? 'http' : 'https');
  return json({ token, url: `${proto}://${host}/b/${token}` });
});
