// Service worker da app instalada (PWA): torna o BET62 instalável e abre-o sem ligação.
// - Páginas: sempre da rede; a última cópia só quando não há rede.
// - /_next/static (ficheiros com hash, nunca mudam): da cache, depois da rede.
// - Odds (BETBY), /api e /admin: nunca passam pela cache.
// Uma nova versão do site instala um novo service worker; a página avisa e recarrega (UpdateNotice).
const CACHE = 'bet62-v1';
const SHELL = ['/', '/manifest.json', '/icons/icon-192x192.png', '/icons/icon-512x512.png'];
const SKIP = /^\/(api|admin)(\/|$)/;

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).catch(() => {}));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()),
  );
});

// A página pede para a nova versão tomar conta já (botão "Atualizar").
self.addEventListener('message', (e) => {
  if (e.data === 'skip-waiting') self.skipWaiting();
});

const OFFLINE = `<!doctype html><html lang="pt-PT"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>BET62</title></head>
<body style="margin:0;min-height:100vh;display:grid;place-items:center;background:#0a0e17;color:#fff;font-family:system-ui,sans-serif;text-align:center">
<div><p style="font-size:28px;font-weight:900;margin:0">BET<span style="color:#e11d48">62</span></p><p>Sem ligação à internet.</p><p style="opacity:.7">Volte a tentar quando estiver ligado.</p></div></body></html>`;

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin || SKIP.test(url.pathname)) return;

  if (url.pathname.startsWith('/_next/static/') || url.pathname.startsWith('/icons/')) {
    e.respondWith(
      caches.match(req).then(
        (hit) =>
          hit ||
          fetch(req).then((res) => {
            if (res.ok) {
              const copy = res.clone();
              caches.open(CACHE).then((c) => c.put(req, copy));
            }
            return res;
          }),
      ),
    );
    return;
  }

  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then((res) => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(async () => (await caches.match(req)) || (await caches.match('/')) || new Response(OFFLINE, { headers: { 'content-type': 'text/html; charset=utf-8' } })),
    );
  }
});
