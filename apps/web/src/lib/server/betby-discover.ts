// Admin: descobrir como o demo da BETBY cria a chave (token) da conta. Só leitura: o servidor abre
// demo.betby.com e os scripts que a página carrega (do próprio site e dos domínios da BETBY) e
// procura os endereços de login / sessão / token e o código à volta de "Bearer", "jwt", "token".

const START = process.env.BETBY_DEMO_SITE || 'https://demo.betby.com/';
// Domínios cujos scripts vale a pena ler (o resto — analytics, fontes — fica de fora).
const ALLOWED = /(^|\.)(betby\.com|invisiblesport\.com|sptpub\.com|betby\.io)$/i;
const ROUTE = /["'`]((?:https?:\/\/[a-z0-9.-]+)?\/[a-z0-9_\-/.{}$:]*?(?:token|auth|login|logout|session|guest|signin|sign_in|signup|register|player|jwt|refresh|demo_user|demo-user|anonymous)[a-z0-9_\-/.{}$:?=&]*)["'`]/gi;
const KEYWORDS = /Bearer|jwt|access_token|accessToken|refresh_token|refreshToken|\btoken\b|setToken|getToken|authorization|x-session-id|demo_user|guest/gi;

export interface DiscoverResult {
  at: string;
  start: string;
  visited: { url: string; status: number | null; bytes: number; error?: string }[];
  routes: { route: string; where: string[] }[];
  hits: { where: string; match: string; around: string }[];
  storage: { where: string; around: string }[];
  /** o HTML da página inicial (para ver o que ela carrega) */
  startHtml: string;
  /** scripts, iframes e links que cada página/script referencia (seguidos ou não) */
  refs: { from: string; kind: string; url: string; followed: boolean }[];
}

async function get(url: string) {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), 15_000);
  try {
    const r = await fetch(url, { headers: { accept: '*/*', 'user-agent': 'Mozilla/5.0 (BET62 admin; leitura)' }, signal: ctl.signal, cache: 'no-store' });
    const text = (await r.text()).slice(0, 6_000_000);
    return { status: r.status, text };
  } catch (e) {
    return { status: null, text: '', error: (e as Error).name === 'AbortError' ? 'sem resposta em 15 s' : (e as Error).message };
  } finally {
    clearTimeout(t);
  }
}

export async function discoverBetbyToken({ maxScripts = 40 } = {}): Promise<DiscoverResult> {
  const out: DiscoverResult = { at: new Date().toISOString(), start: START, visited: [], routes: [], hits: [], storage: [], startHtml: '', refs: [] };
  const routes = new Map<string, Set<string>>();
  const queue: string[] = [START];
  const seen = new Set<string>();
  const allowed = (u: URL) => ALLOWED.test(u.hostname);
  const shortName = (u: string) => {
    try {
      const x = new URL(u);
      return x.hostname + x.pathname.slice(0, 80);
    } catch {
      return u.slice(0, 100);
    }
  };
  let scripts = 0;
  while (queue.length && scripts < maxScripts) {
    const url = queue.shift()!;
    if (seen.has(url)) continue;
    seen.add(url);
    const r = await get(url);
    out.visited.push({ url: shortName(url), status: r.status, bytes: r.text.length, error: r.error });
    if (url !== START) scripts += 1;
    if (!r.text) continue;
    const where = shortName(url);
    const isPage = url === START || /<html|<!doctype/i.test(r.text.slice(0, 500));
    if (url === START) out.startHtml = r.text.slice(0, 6000);
    // O que a página / o script carrega. Da página inicial (e das páginas em iframe) segue-se tudo;
    // dos scripts, só os dos domínios da BETBY (o resto é analytics, fontes…).
    const add = (ref: string, kind: string, page = false) => {
      try {
        const u = new URL(ref, url);
        if (!/^https?:$/.test(u.protocol)) return;
        const js = /\.m?js(\?|$)/.test(u.pathname + u.search) || kind === 'script';
        const follow = (page && (js || kind === 'iframe')) || (allowed(u) && js);
        if (out.refs.length < 200) out.refs.push({ from: where, kind, url: u.href.slice(0, 200), followed: follow && !seen.has(u.href) });
        if (follow && !seen.has(u.href)) kind === 'iframe' ? queue.unshift(u.href) : queue.push(u.href);
      } catch {
        // endereço inválido
      }
    };
    for (const m of r.text.matchAll(/<script[^>]+src=["']([^"']+)["']/gi)) add(m[1], 'script', isPage);
    for (const m of r.text.matchAll(/<link[^>]+href=["']([^"']+)["'][^>]*>/gi)) if (/\.m?js|modulepreload|preload/i.test(m[0])) add(m[1], 'link', isPage);
    for (const m of r.text.matchAll(/<(?:iframe|frame)[^>]+src=["']([^"']+)["']/gi)) add(m[1], 'iframe', true);
    for (const m of r.text.matchAll(/(?:location(?:\.href)?\s*=|window\.open\()\s*["'`](https?:\/\/[^"'`]+)["'`]/gi)) add(m[1], 'iframe', true);
    for (const m of r.text.matchAll(/["'`]((?:https?:\/\/[a-z0-9.-]+)?(?:\.{0,2}\/)[a-z0-9_\-./]+\.m?js)["'`]/gi)) add(m[1], 'script', isPage);
    // Rotas de login / sessão / token.
    for (const m of r.text.matchAll(ROUTE)) {
      const route = m[1];
      if (/\.(png|jpe?g|svg|webp|gif|css|woff2?)$/i.test(route) || route.length < 4) continue;
      if (!routes.has(route)) routes.set(route, new Set());
      if (routes.get(route)!.size < 3) routes.get(route)!.add(where);
    }
    // O código à volta das palavras-chave (como o token é pedido e guardado).
    for (const m of r.text.matchAll(KEYWORDS)) {
      if (out.hits.length >= 80) break;
      const around = r.text.slice(Math.max(0, m.index! - 220), m.index! + 320).replace(/\s+/g, ' ');
      if (!out.hits.some((h) => h.around === around)) out.hits.push({ where, match: m[0], around });
    }
    for (const m of r.text.matchAll(/localStorage\.setItem\(|sessionStorage\.setItem\(|document\.cookie\s*=/g)) {
      if (out.storage.length >= 30) break;
      out.storage.push({ where, around: r.text.slice(Math.max(0, m.index! - 150), m.index! + 250).replace(/\s+/g, ' ') });
    }
  }
  out.routes = [...routes.entries()]
    .map(([route, where]) => ({ route, where: [...where] }))
    // Primeiro as que parecem criar a sessão / o token.
    .sort((a, b) => Number(/token|session|guest|auth|login/i.test(b.route)) - Number(/token|session|guest|auth|login/i.test(a.route)) || a.route.localeCompare(b.route))
    .slice(0, 200);
  // Palavras mais prováveis primeiro (Bearer / token).
  out.hits.sort((a, b) => Number(/Bearer|token/i.test(b.match)) - Number(/Bearer|token/i.test(a.match)));
  return out;
}
