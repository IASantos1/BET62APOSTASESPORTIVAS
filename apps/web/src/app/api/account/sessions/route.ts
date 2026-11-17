import { currentSessionHash, fail, json, requireUser, route } from '../../../../lib/server/auth';
import { query } from '../../../../lib/server/db';

export const dynamic = 'force-dynamic';

/** Sessões ativas do jogador (dispositivos). O id é um prefixo do hash, nunca o token. */
export const GET = route(async () => {
  const u = await requireUser();
  if (u instanceof Response) return u;
  const mine = currentSessionHash();
  const rows = await query<{ token_hash: string; created_at: Date; expires_at: Date; user_agent: string | null; ip: string | null }>(
    'SELECT token_hash, created_at, expires_at, user_agent, ip FROM sessions WHERE user_id = $1 AND expires_at > now() ORDER BY created_at DESC',
    [u.id],
  );
  return json({
    sessions: rows.map((r) => ({
      id: r.token_hash.slice(0, 16),
      current: r.token_hash === mine,
      createdAt: new Date(r.created_at).toISOString(),
      expiresAt: new Date(r.expires_at).toISOString(),
      userAgent: r.user_agent,
      ip: r.ip,
    })),
  });
});

/** Termina uma sessão (?id=…) ou todas as outras (?all=1). */
export const DELETE = route(async (req: Request) => {
  const u = await requireUser();
  if (u instanceof Response) return u;
  const url = new URL(req.url);
  const mine = currentSessionHash() ?? '';
  if (url.searchParams.get('all') === '1') {
    await query('DELETE FROM sessions WHERE user_id = $1 AND token_hash <> $2', [u.id, mine]);
    return json({ ok: true });
  }
  const id = (url.searchParams.get('id') ?? '').replace(/[^0-9a-f]/g, '');
  if (id.length !== 16) return fail('Sessão inválida.');
  await query("DELETE FROM sessions WHERE user_id = $1 AND token_hash LIKE $2 || '%' AND token_hash <> $3", [u.id, id, mine]);
  return json({ ok: true });
});
