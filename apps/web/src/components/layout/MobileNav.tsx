'use client';

// Menu do rodapé no telemóvel e na app instalada (como no outro projeto):
// Início, Desporto, Ao Vivo, Casino, Promoções.
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Activity, Dices, Gift, Home, LayoutGrid } from 'lucide-react';
import { useBoard } from '../../lib/board';
import { cn } from '../../lib/utils';

const ITEMS = [
  { href: '/', label: 'Início', icon: Home, match: (p: string) => p === '/' },
  { href: '/desporto', label: 'Desporto', icon: LayoutGrid, match: (p: string) => p.startsWith('/desporto') },
  { href: '/live', label: 'Ao Vivo', icon: Activity, match: (p: string) => p.startsWith('/live') },
  { href: '/casino', label: 'Casino', icon: Dices, match: (p: string) => p.startsWith('/casino') },
  { href: '/promocoes', label: 'Promoções', icon: Gift, match: (p: string) => p.startsWith('/promocoes') },
];

export function MobileNav() {
  const pathname = usePathname() || '/';
  const { events } = useBoard();
  const live = events.filter((e) => e.status === 'live').length;
  if (pathname.startsWith('/admin')) return null;
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-bet62-border bg-bet62-bg/95 backdrop-blur lg:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      aria-label="Menu principal"
    >
      <ul className="grid h-16 grid-cols-5">
        {ITEMS.map((it) => {
          const active = it.match(pathname);
          const Icon = it.icon;
          return (
            <li key={it.href}>
              <Link
                href={it.href}
                className={cn(
                  'relative flex h-full flex-col items-center justify-center gap-1 text-[10px] font-semibold',
                  active ? 'text-bet62-primary' : 'text-white/55',
                )}
              >
                {active && <span className="absolute inset-x-5 top-0 h-0.5 rounded-b bg-bet62-primary" />}
                <span className="relative">
                  <Icon size={20} />
                  {it.href === '/live' && live > 0 && (
                    <span className="absolute -right-3 -top-1.5 rounded-full bg-bet62-primary px-1 text-[9px] font-bold leading-4 text-onbrand">{live}</span>
                  )}
                </span>
                {it.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
