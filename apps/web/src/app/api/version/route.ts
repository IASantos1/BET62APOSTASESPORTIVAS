// Versão publicada no servidor (a página compara-a com a sua para mostrar "Nova versão").
export const dynamic = 'force-dynamic';

export function GET() {
  return Response.json({ version: process.env.NEXT_PUBLIC_BUILD_ID ?? '' }, { headers: { 'cache-control': 'no-store' } });
}
