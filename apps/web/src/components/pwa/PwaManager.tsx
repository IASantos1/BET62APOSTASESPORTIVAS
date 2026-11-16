'use client';

// App instalável e atualizações (como no outro projeto):
// - regista o service worker (/sw.js) em produção;
// - "Instale a app": botão do próprio navegador (Android / Chrome) ou instruções no iPhone (Safari);
// - "Nova versão disponível": quando o site é publicado de novo, avisa e recarrega com um toque.
import * as React from 'react';
import { Download, RefreshCw, X } from 'lucide-react';

const MINE = process.env.NEXT_PUBLIC_BUILD_ID ?? '';
const HIDE_KEY = 'bet62-install-hide';

interface InstallPrompt extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const hiddenUntil = () => {
  try {
    return Number(localStorage.getItem(HIDE_KEY) || 0);
  } catch {
    return 0;
  }
};
const hideFor = (days: number) => {
  try {
    localStorage.setItem(HIDE_KEY, String(Date.now() + days * 86_400_000));
  } catch {}
};

export function PwaManager() {
  const [update, setUpdate] = React.useState(false);
  const [install, setInstall] = React.useState<'native' | 'ios' | null>(null);
  const promptRef = React.useRef<InstallPrompt | null>(null);
  const waitingRef = React.useRef<ServiceWorker | null>(null);

  // Service worker + nova versão.
  React.useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return;
    let reg: ServiceWorkerRegistration | undefined;
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((r) => {
          reg = r;
          const watch = (w: ServiceWorker | null) => {
            if (!w) return;
            w.addEventListener('statechange', () => {
              if (w.state === 'installed' && navigator.serviceWorker.controller) {
                waitingRef.current = w;
                setUpdate(true);
              }
            });
          };
          if (r.waiting && navigator.serviceWorker.controller) {
            waitingRef.current = r.waiting;
            setUpdate(true);
          }
          r.addEventListener('updatefound', () => watch(r.installing));
        })
        .catch(() => {});
      let reloaded = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (reloaded) return;
        reloaded = true;
        window.location.reload();
      });
    }
    const check = async () => {
      try {
        const r = await fetch('/api/version', { cache: 'no-store' });
        const { version } = (await r.json()) as { version?: string };
        if (version && MINE && version !== MINE) {
          setUpdate(true);
          reg?.update().catch(() => {});
        }
      } catch {}
    };
    const t = window.setInterval(check, 60_000);
    const onVisible = () => document.visibilityState === 'visible' && check();
    document.addEventListener('visibilitychange', onVisible);
    return () => {
      window.clearInterval(t);
      document.removeEventListener('visibilitychange', onVisible);
    };
  }, []);

  // Instalação.
  React.useEffect(() => {
    const nav = navigator as Navigator & { standalone?: boolean };
    if (matchMedia('(display-mode: standalone)').matches || nav.standalone) return;
    if (Date.now() < hiddenUntil()) return;
    const ua = navigator.userAgent;
    const ios = /iphone|ipad|ipod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const iosSafari = ios && /safari/i.test(ua) && !/crios|fxios|edgios|opios|instagram|fban|fbav|gsa\//i.test(ua);
    let timer: number | undefined;
    const onPrompt = (e: Event) => {
      e.preventDefault();
      promptRef.current = e as InstallPrompt;
      timer = window.setTimeout(() => setInstall('native'), 8000);
    };
    window.addEventListener('beforeinstallprompt', onPrompt);
    const onInstalled = () => {
      hideFor(365);
      setInstall(null);
    };
    window.addEventListener('appinstalled', onInstalled);
    if (iosSafari) timer = window.setTimeout(() => setInstall('ios'), 8000);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('beforeinstallprompt', onPrompt);
      window.removeEventListener('appinstalled', onInstalled);
    };
  }, []);

  const applyUpdate = () => {
    const w = waitingRef.current;
    if (w) w.postMessage('skip-waiting');
    else window.location.reload();
    // Sem service worker a assumir em 3 s, recarrega na mesma.
    window.setTimeout(() => window.location.reload(), 3000);
  };

  const doInstall = async () => {
    const p = promptRef.current;
    if (!p) return;
    await p.prompt();
    const { outcome } = await p.userChoice.catch(() => ({ outcome: 'dismissed' as const }));
    promptRef.current = null;
    hideFor(outcome === 'accepted' ? 365 : 14);
    setInstall(null);
  };

  return (
    <>
      {update && (
        <div className="fixed inset-x-3 top-3 z-[100] mx-auto flex max-w-md items-center gap-3 rounded-2xl border border-bet62-border bg-bet62-surface p-3 shadow-glass">
          <RefreshCw size={18} className="shrink-0 text-bet62-primary" />
          <p className="flex-1 text-sm">
            <b>Nova versão disponível.</b> <span className="text-white/60">Atualize para ver as novidades.</span>
          </p>
          <button onClick={applyUpdate} className="rounded-xl bg-bet62-primary px-3 py-2 text-xs font-bold text-onbrand">
            Atualizar
          </button>
        </div>
      )}
      {install && !update && (
        <div className="fixed inset-x-3 bottom-20 z-[90] mx-auto flex max-w-md items-center gap-3 rounded-2xl border border-bet62-border bg-bet62-surface p-3 shadow-glass xl:bottom-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/icon-192x192.png" alt="" width={40} height={40} className="rounded-xl" />
          <div className="flex-1 text-sm">
            <b>Instale a app BET62</b>
            <p className="text-xs text-white/60">
              {install === 'native' ? 'Acesso direto no ecrã inicial, em ecrã inteiro.' : 'Toque em Partilhar e depois em “Adicionar ao ecrã principal”.'}
            </p>
          </div>
          {install === 'native' && (
            <button onClick={doInstall} className="flex items-center gap-1 rounded-xl bg-bet62-primary px-3 py-2 text-xs font-bold text-onbrand">
              <Download size={14} /> Instalar
            </button>
          )}
          <button
            aria-label="Fechar"
            onClick={() => {
              hideFor(14);
              setInstall(null);
            }}
            className="text-white/50 hover:text-white"
          >
            <X size={16} />
          </button>
        </div>
      )}
    </>
  );
}
