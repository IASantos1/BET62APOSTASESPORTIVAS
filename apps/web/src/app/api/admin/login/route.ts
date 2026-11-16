import { NextResponse } from 'next/server';
import { ADMIN_COOKIE, adminPasswordMatches, adminToken, isAdminAuthorized } from '../../../../lib/admin-auth';

export const dynamic = 'force-dynamic';

// Indica se o navegador já tem sessão de admin.
export async function GET() {
  return isAdminAuthorized()
    ? NextResponse.json({ ok: true })
    : NextResponse.json({ ok: false }, { status: 401 });
}

export async function POST(request: Request) {
  const { password } = (await request.json().catch(() => ({}))) as { password?: string };
  if (!adminPasswordMatches(String(password ?? ''))) {
    return NextResponse.json({ ok: false, error: 'Senha incorreta.' }, { status: 401 });
  }
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, adminToken(process.env.ADMIN_PASSWORD ?? ''), {
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 12,
  });
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.delete(ADMIN_COOKIE);
  return res;
}
