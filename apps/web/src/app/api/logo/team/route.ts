import { NextResponse } from 'next/server';
import { teamLogo } from '../../../../lib/server/apisports';
import { cachedLogoImage } from '../../../../lib/server/logo-images';

export const dynamic = 'force-dynamic';

// Responde com o ficheiro local guardado; só consulta a API de equipas quando o URL ainda não existe.
export async function GET(req: Request) {
  const u = new URL(req.url);
  const league = Number(u.searchParams.get('l')) || undefined;
  const sport = (u.searchParams.get('s') || '').slice(0, 32);
  const name = (u.searchParams.get('n') || '').slice(0, 80);
  const logo = await teamLogo(sport, name, league).catch(() => null);
  if (!logo) return new NextResponse(null, { status: 404, headers: { 'cache-control': 'public, max-age=60' } });

  try {
    const image = await cachedLogoImage(logo);
    if (image) {
      return new NextResponse(image.bytes, {
        status: 200,
        headers: {
          'content-type': image.contentType,
          'cache-control': 'public, max-age=31536000, immutable',
          'x-logo-cache': image.cached ? 'HIT' : 'MISS',
        },
      });
    }
  } catch {
    // Se o armazenamento local estiver indisponível, mantém o fallback remoto.
  }
  return NextResponse.redirect(logo, { status: 302, headers: { 'cache-control': 'public, max-age=86400' } });
}
