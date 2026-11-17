import { NextResponse } from 'next/server';
import { isAdminAuthorized } from '../../../lib/admin-auth';
import { readConfig, writeConfig, type SiteConfig } from '../../../lib/server/config';

export const dynamic = 'force-dynamic';

export function GET() {
  return NextResponse.json(readConfig(), { headers: { 'cache-control': 'public, max-age=60' } });
}

// Só o admin muda; dimensões do tracker são inteiros em pixels (null repõe o padrão).
export async function POST(req: Request) {
  if (!isAdminAuthorized()) return NextResponse.json({ error: 'Sem sessão de admin.' }, { status: 401 });
  const body = (await req.json().catch(() => ({}))) as SiteConfig;
  const patch: SiteConfig = {};
  const tpl = (v: unknown) => (v === null ? null : typeof v === 'string' && /^(https:\/\/|\{base\})[^\s<>"']+$/.test(v) && v.length < 400 ? v : undefined);
  if ('eventEndpoint' in body) patch.eventEndpoint = tpl(body.eventEndpoint) ?? null;
  if ('statsEndpoint' in body) patch.statsEndpoint = tpl(body.statsEndpoint) ?? null;
  if ('trackerField' in body) {
    const t = body.trackerField;
    patch.trackerField = t && typeof t.path === 'string' && /^[\w.]{1,120}$/.test(t.path) ? { path: t.path, provider: String(t.provider || 'statscore').replace(/[^\w-]/g, '').slice(0, 30) } : null;
  }
  const dimensions = [
    ['trackerMobileWidthPx', 240, 1200],
    ['trackerMobileHeightPx', 220, 1000],
    ['trackerDesktopWidthPx', 240, 900],
    ['trackerDesktopHeightPx', 220, 1000],
    ['trackerMobileScalePct', 50, 200],
    ['trackerDesktopScalePct', 50, 200],
  ] as const;
  for (const [key, min, max] of dimensions) {
    if (!(key in body)) continue;
    const value = body[key];
    if (value === null) {
      patch[key] = null;
    } else if (typeof value === 'number' && Number.isInteger(value) && value >= min && value <= max) {
      patch[key] = value;
    } else {
      return NextResponse.json({ error: `${key} deve ser um inteiro entre ${min} e ${max}, ou null.` }, { status: 400 });
    }
  }
  try {
    return NextResponse.json(writeConfig(patch));
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : String(e) }, { status: 500 });
  }
}
