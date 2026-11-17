import { endSession, json, route, withSessionCookie } from '../../../../lib/server/auth';

export const dynamic = 'force-dynamic';

export const POST = route(async () => {
  await endSession();
  return withSessionCookie(json({ ok: true }), null);
});
