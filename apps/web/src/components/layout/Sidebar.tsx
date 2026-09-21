'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  CircleHelp,
  Dices,
  Gift,
  ShieldCheck,
  Wallet,
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { Badge } from '../ui/Badge';

const QUICK_LINKS = [
  { label: 'Cassino', icon: Dices, href: '/casino', hint: 'Jogos e provedores' },
  { label: 'Promoções', icon: Gift, href: '/promocoes', hint: 'Campanhas ativas', badge: '5' },
  { label: 'Carteira', icon: Wallet, href: '/carteira', hint: 'Depósitos e levantamentos' },
  { label: 'Ajuda', icon: CircleHelp, href: '/ajuda', hint: 'Suporte e documentação' },
];

interface SidebarProps {
  compact?: boolean;
  className?: string;
}

export function Sidebar({ compact = false, className }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        'relative shrink-0 border-r border-bet62-border bg-bet62-bg/60 backdrop-blur-xl overflow-hidden',
        compact ? 'hidden xl:block w-64' : 'w-full max-w-xs mx-auto',
        className,
      )}
    >
      <div className="p-4 border-b border-bet62-border/60">
        <div className="rounded-2xl border border-bet62-border bg-bet62-surface/50 p-4">
          <div className="flex items-center gap-2 text-bet62-primary font-bold text-sm">
            <ShieldCheck size={16} />
            Plataforma sem feeds esportivos
          </div>
          <p className="mt-2 text-xs text-white/60 leading-relaxed">
            A navegação lateral foi reduzida aos módulos que continuam ativos após a remoção das integrações de odds.
          </p>
        </div>
      </div>

      <div className="p-4 border-b border-bet62-border/60">
        <h3 className="font-bold text-sm tracking-wide uppercase text-white/70">Acessos Rápidos</h3>
      </div>

      <nav className="p-2 space-y-1">
        {QUICK_LINKS.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'group flex items-center gap-3 px-3 py-3 rounded-xl text-sm transition-all',
                active
                  ? 'bg-white/5 text-white border border-bet62-primary/20'
                  : 'text-white/75 hover:text-white hover:bg-white/5',
              )}
            >
              <item.icon
                size={18}
                className={cn(active ? 'text-bet62-primary' : 'text-white/55 group-hover:text-bet62-primary')}
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{item.label}</span>
                  {item.badge ? (
                    <Badge variant="pink" className="py-0 text-[10px]">
                      {item.badge}
                    </Badge>
                  ) : null}
                </div>
                <p className="text-[11px] text-white/45 truncate mt-0.5">{item.hint}</p>
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-bet62-border/60">
        <div className="rounded-2xl p-4 bg-gradient-to-br from-bet62-secondary/15 via-bet62-bg to-bet62-primary/10 border border-bet62-border">
          <div className="flex items-center gap-2 text-bet62-secondary font-bold text-sm">
            <Gift size={16} />
            Campanha ativa
          </div>
          <p className="mt-1.5 text-sm font-semibold">Bónus de recarga e cashback</p>
          <p className="text-xs text-white/60 mt-1">A operação comercial continua disponível sem dependências do módulo esportivo.</p>
        </div>
      </div>
    </aside>
  );
}
