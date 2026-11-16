import { FileCache } from './store';

// Cassino Big Bang (API REST /api/v1, chave BIGBANG_API_KEY). A chave nunca vai para o navegador:
// a lista de jogos e o endereço de cada jogo (modo demo) são pedidos daqui, como no outro projeto.
// Jogar a dinheiro real precisa da carteira (contas e saldo) — ainda não existe neste site.

export const BB_KEY = () => (process.env.BIGBANG_API_KEY || '').trim();
const ROOT = () => (process.env.BIGBANG_API_URL || 'https://api.bigbangcasino.bet/api/v1').trim().replace(/\/+$/, '');

export interface CasinoGame {
  id: number;
  name: string;
  provider: string;
  image: string | null;
  type: string;
  category: string;
  demo: boolean;
}

const TYPE_LABEL: Record<string, string> = { slot: 'Slots', live: 'Ao Vivo', crash: 'Crash' };
let lastError: string | null = null;
let lastOkAt: string | null = null;

async function call<T = Record<string, unknown>>(method: 'GET' | 'POST', path: string, body?: unknown): Promise<T> {
  if (!BB_KEY()) throw new Error('BIGBANG_API_KEY não está definida.');
  const res = await fetch(`${ROOT()}${path}`, {
    method,
    headers: { 'X-API-Key': BB_KEY(), Accept: 'application/json', ...(body ? { 'Content-Type': 'application/json' } : {}) },
    body: body ? JSON.stringify(body) : undefined,
    signal: AbortSignal.timeout(20_000),
    cache: 'no-store',
  });
  const data = (await res.json().catch(() => null)) as (T & { success?: boolean; error?: { message?: string }; message?: string }) | null;
  if (!res.ok || !data || data.success === false) {
    lastError = data?.error?.message || data?.message || `HTTP ${res.status}`;
    throw new Error(`Big Bang: ${lastError}`);
  }
  lastOkAt = new Date().toISOString();
  return data;
}

export function bigBangStatus() {
  return { configured: !!BB_KEY(), sandbox: BB_KEY().startsWith('ek_test_'), baseUrl: ROOT(), lastError, lastOkAt };
}

const catalog = new FileCache<CasinoGame[]>('casino-games');
let loading: Promise<CasinoGame[]> | null = null;

interface RawGame {
  id: number;
  name: string;
  title?: string;
  category_title?: string;
  provider?: string;
  category?: string;
  thumbnail?: string;
  game_type?: string;
  is_premium?: boolean;
}

export async function casinoGames(): Promise<CasinoGame[]> {
  const hit = catalog.get('all', 30 * 60_000);
  if (hit && hit.length) return hit;
  loading ??= (async () => {
    const out: CasinoGame[] = [];
    for (let offset = 0; offset < 50_000; ) {
      const page = await call<{ data?: RawGame[]; pagination?: { total?: number } }>('GET', `/games?limit=5000&offset=${offset}`);
      const list = Array.isArray(page.data) ? page.data : [];
      for (const g of list) {
        out.push({
          id: g.id,
          name: g.title || g.name,
          provider: g.category_title || g.provider || g.category || '',
          image: g.thumbnail || null,
          type: g.game_type || 'slot',
          category: TYPE_LABEL[g.game_type || 'slot'] || 'Slots',
          demo: !g.is_premium && g.game_type !== 'live',
        });
      }
      offset += list.length;
      if (!list.length || offset >= (Number(page.pagination?.total) || 0)) break;
    }
    // Um exemplar de cada jogo por fornecedor (o que tem imagem primeiro); os Sportsbooks ficam de fora.
    const best = new Map<string, CasinoGame>();
    for (const g of out) {
      if (/sportsbook|sports$|esports/i.test(g.name)) continue;
      const k = `${g.provider.toLowerCase()}|${g.name.toLowerCase().replace(/\s*\((premium|standard)\)\s*/g, '').trim()}`;
      const cur = best.get(k);
      // A cópia Standard (com demo) primeiro; depois a que tem imagem.
      const better = !cur || (g.demo && !cur.demo) || (g.demo === cur.demo && !cur.image && !!g.image);
      if (better) best.set(k, g);
    }
    const games = [...best.values()];
    if (games.length) catalog.set('all', games);
    return games;
  })().finally(() => {
    loading = null;
  });
  return loading;
}

const demoUrls = new Map<string, { url: string; at: number }>();

/** Endereço de um jogo em modo demo (dinheiro virtual, sem conta). */
export async function launchDemo(gameId: number, returnUrl: string) {
  const k = `${gameId}|${returnUrl}`;
  const hit = demoUrls.get(k);
  if (hit && Date.now() - hit.at < 30 * 60_000) return hit.url;
  const r = await call<{ game_url?: string }>('POST', '/games/launch', { game_id: gameId, language: 'pt', return_url: returnUrl || undefined, demo: true });
  if (!r.game_url) throw new Error('O Big Bang não devolveu o endereço do jogo.');
  if (demoUrls.size > 2000) demoUrls.clear();
  demoUrls.set(k, { url: r.game_url, at: Date.now() });
  return r.game_url;
}
