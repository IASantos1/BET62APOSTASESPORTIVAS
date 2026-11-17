'use client';

// Ícone de bilhete no menu superior (onde estava o botão do tema): abre "Minhas apostas" com
// Em aberto · Resolvidas · Cash out · Anuladas. Painel à direita no PC, ecrã inteiro no telemóvel.
import * as React from 'react';
import Link from 'next/link';
import { createPortal } from 'react-dom';
import { usePathname, useRouter } from 'next/navigation';
import { Ticket, X } from 'lucide-react';
import { useAuthStore } from '../../stores/auth.store';
import { BetsSection } from '../account/BetsSection';

/** Avisar o cabeçalho de que os bilhetes mudaram (ex.: depois de apostar). */
export const BETS_CHANGED = 'bet62:bets-changed';

export function MyBetsButton() {
  const router = useRouter();
  const pathname = usePathname();
  const user = useAuthStore((s) => s.user);
  const [open, setOpen] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const [ready, setReady] = React.useState(false);
  React.useEffect(() => setReady(true), []);

  const loadCount = React.useCallback(() => {
    if (!user) return setCount(0);
    fetch('/api/bets?status=open', { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : { bets: [] }))
      .then((j: { bets?: unknown[] }) => setCount(j.bets?.length ?? 0))
      .catch(() => undefined);
  }, [user]);
  React.useEffect(() => {
    loadCount();
    window.addEventListener(BETS_CHANGED, loadCount);
    return () => window.removeEventListener(BETS_CHANGED, loadCount);
  }, [loadCount]);
  // Fechar ao mudar de página e com a tecla Esc; sem scroll da página por trás.
  React.useEffect(() => setOpen(false), [pathname]);
  React.useEffect(() => {
    if (!open) return;
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', esc);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', esc);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const click = () => {
    if (!user) {
      router.push(`/login?next=${encodeURIComponent(pathname)}`);
      return;
    }
    setOpen(true);
    loadCount();
  };

  return (
    <>
      <button
        type="button"
        onClick={click}
        aria-label="Minhas apostas"
        title="Minhas apostas"
        className="relative grid h-9 w-9 place-items-center rounded-xl border border-bet62-border text-white/80 hover:text-white"
      >
        <Ticket size={17} />
        {count > 0 && (
          <span className="absolute -right-1.5 -top-1.5 grid h-[18px] min-w-[18px] place-items-center rounded-full bg-white px-1 text-[10px] font-black text-[#c8102e]">
            {count > 99 ? '99+' : count}
          </span>
        )}
      </button>
      {ready &&
        open &&
        createPortal(
          <div className="fixed inset-0 z-[70] flex justify-end bg-black/60" onClick={() => setOpen(false)}>
            <div
              role="dialog"
              aria-label="Minhas apostas"
              className="flex h-full w-full flex-col border-l border-bet62-border bg-bet62-bg sm:max-w-md"
              style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-bet62-border px-4 py-3">
                <p className="flex items-center gap-2 font-black"><Ticket size={18} /> Minhas apostas</p>
                <button onClick={() => setOpen(false)} aria-label="Fechar" className="grid h-10 w-10 place-items-center rounded-xl hover:bg-white/5">
                  <X size={20} />
                </button>
              </div>
              <div className="min-h-0 flex-1 overflow-y-auto p-4">
                <BetsSection compact onNavigate={() => setOpen(false)} />
              </div>
              <div className="border-t border-bet62-border p-3 text-center">
                <Link href="/conta/apostas" onClick={() => setOpen(false)} className="text-sm font-semibold text-bet62-primary hover:underline">
                  Ver todas no perfil
                </Link>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
