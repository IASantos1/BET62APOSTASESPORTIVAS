// Arranque do servidor (Next.js): liga o coletor do WinHouse quando WINHOUSE_BASE_URL está definido.
// O import fica dentro do if (forma pedida pelo Next): na compilação "edge" o bloco desaparece.
export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { startWinHouseFeed } = await import('./lib/server/winhouse/feed');
    startWinHouseFeed();
    // Liquidação automática pela BETBY a partir do servidor (se a BETBY não o bloquear).
    const { startServerMirror } = await import('./lib/server/mirror');
    startServerMirror();
  }
}
