import { fail, json, publicUser, requireUser, route, type UserRow } from '../../../../lib/server/auth';
import { one } from '../../../../lib/server/db';

export const dynamic = 'force-dynamic';

// Preferências (notificações e privacidade): só estas chaves, só valores sim/não.
const PREF_KEYS = ['notifyResults', 'notifyPromos', 'notifySms', 'notifyPush', 'cookiesAnalytics', 'cookiesMarketing', 'shareData'] as const;

export const POST = route(async (req: Request) => {
  const u = await requireUser();
  if (u instanceof Response) return u;
  const b = (await req.json().catch(() => ({}))) as Record<string, unknown>;
  const patch: Record<string, boolean> = {};
  for (const [k, v] of Object.entries(b)) {
    if (!(PREF_KEYS as readonly string[]).includes(k) || typeof v !== 'boolean') return fail('Preferência inválida.');
    patch[k] = v;
  }
  const next = await one<UserRow>('UPDATE users SET prefs = prefs || $2::jsonb WHERE id = $1 RETURNING *', [u.id, JSON.stringify(patch)]);
  return json({ user: publicUser(next!) });
});
