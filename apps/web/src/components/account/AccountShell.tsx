'use client';

// Esqueleto das páginas da conta (perfil, apostas, carteira): exige sessão e mostra o menu da conta.
import * as React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { History, Loader2, LogOut, User, Wallet } from 'lucide-react';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { useAuthStore, type AuthUser } from '../../stores/auth.store';
import { cn, formatCurrencyEUR } from '../../lib/utils';

const NAV = [
  { href: '/conta', label: 'Perfil', icon: User },
  { href: '/apostas', label: 'Minhas Apostas', icon: History },
  { href: '/carteira', label: 'Carteira', icon: Wallet },
];

export function AccountShell({ title, children }: { title: string; children: (user: AuthUser) => React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, refresh, logout, accountsAvailable } = useAuthStore();
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    let alive = true;
    refresh().then((u) => {
      if (!alive) return;
      setChecked(true);
      if (!u) router.replace(`/login?next=${encodeURIComponent(pathname)}`);
    });
    return () => {
      alive = false;
    };
  }, [pathname, refresh, router]);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-[1100px] px-3 py-6 sm:px-4 lg:px-6">
        {!accountsAvailable ? (
          <p className="rounded-2xl border border-amber-400/40 bg-amber-400/10 p-5 text-sm">
            As contas ainda não estão disponíveis: falta ligar a base de dados ao servidor.
          </p>
        ) : !checked || !user ? (
          <div className="grid place-items-center py-24 text-white/60">
            <Loader2 className="animate-spin" />
          </div>
        ) : (
          <div className="grid gap-5 lg:grid-cols-[220px_1fr]">
            <aside className="min-w-0 space-y-3">
              <div className="rounded-2xl border border-bet62-border bg-bet62-surface/50 p-4">
                <p className="truncate font-bold">{`${user.firstName ?? ''} ${user.lastName ?? ''}`.trim() || user.email}</p>
                <p className="truncate text-xs text-white/55">{user.email}</p>
                <p className="mt-3 text-xs text-white/55">Saldo</p>
                <p className="font-mono text-xl font-black">{formatCurrencyEUR(user.balance ?? 0)}</p>
              </div>
              <nav className="flex gap-2 overflow-x-auto lg:flex-col">
                {NAV.map(({ href, label, icon: Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    className={cn(
                      'flex shrink-0 items-center gap-2 rounded-xl border px-3 py-2.5 text-sm font-semibold',
                      pathname === href ? 'border-bet62-primary bg-bet62-primary text-onbrand' : 'border-bet62-border hover:bg-white/5',
                    )}
                  >
                    <Icon size={16} /> {label}
                  </Link>
                ))}
                <button
                  onClick={async () => {
                    await logout();
                    router.push('/');
                  }}
                  className="flex shrink-0 items-center gap-2 rounded-xl border border-bet62-border px-3 py-2.5 text-sm font-semibold text-white/70 hover:bg-white/5"
                >
                  <LogOut size={16} /> Terminar sessão
                </button>
              </nav>
            </aside>
            <section className="min-w-0 space-y-5">
              <h1 className="text-2xl font-black">{title}</h1>
              {children(user)}
            </section>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

/** Cartão simples das páginas da conta. */
export function Panel({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('space-y-4 rounded-2xl border border-bet62-border bg-bet62-surface/50 p-5', className)}>
      <h2 className="text-lg font-black">{title}</h2>
      {children}
    </div>
  );
}

export function Notice({ msg }: { msg: { ok: boolean; text: string } | null }) {
  if (!msg) return null;
  return <p className={cn('text-sm', msg.ok ? 'text-emerald-400' : 'text-rose-400')} role="status">{msg.text}</p>;
}

export const field = 'w-full rounded-xl border border-bet62-border bg-bet62-bg px-3 py-2.5 text-sm outline-none focus:border-bet62-primary';
