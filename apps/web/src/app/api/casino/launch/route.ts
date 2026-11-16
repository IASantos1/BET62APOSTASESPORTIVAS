import { NextResponse } from 'next/server';
import { launchDemo } from '../../../../lib/server/bigbang';

export const dynamic = 'force-dynamic';

// Abre um jogo em modo demo: { gameId } → { url }.
export async function POST(req: Request) {
  const { gameId } = (await req.json().catch(() => ({}))) as { gameId?: number };
  if (!Number.isInteger(Number(gameId))) return NextResponse.json({ error: 'gameId inválido' }, { status: 400 });
  try {
    const url = await launchDemo(Number(gameId), new URL('/casino', req.url).toString());
    return NextResponse.json({ url });
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : String(e) }, { status: 502 });
  }
}
