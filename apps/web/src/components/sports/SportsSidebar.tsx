'use client';

// Menu do lado esquerdo, como no outro projeto: DESPORTOS (com contagem) que abrem país → ligas,
// e EXPLORAR com os atalhos.
import Link from 'next/link';
import * as React from 'react';
import { usePathname } from 'next/navigation';
import { ChevronDown, ChevronRight, Calendar, Dices, Gift, ShieldCheck, Activity } from 'lucide-react';
import { useBoard } from '../../lib/board';
import { SPORTS, countryLabel, type SportKey } from '../../lib/sports/catalog';
import { cn } from '../../lib/utils';
import { leagueHref } from './links';

export function SportsSidebar({ className }: { className?: string }) {
  const { events, leagues } = useBoard();
  const pathname = usePathname();
  const [open, setOpen] = React.useState<Record<string, boolean>>({});
  const counts = React.useMemo(() => {
    const c: Record<string, number> = {};
    for (const e of events) c[e.sport] = (c[e.sport] || 0) + 1;
    return c;
  }, [events]);
  const liveCount = events.filter((e) => e.status === 'live').length;
  const toggle = (k: string) => setOpen((o) => ({ ...o, [k]: !o[k] }));

  const tree = (sport: SportKey) => {
    const byCountry = new Map<string, typeof leagues>();
    for (const l of leagues.filter((x) => x.sport === sport)) byCountry.set(l.country, [...(byCountry.get(l.country) ?? []), l]);
    return [...byCountry.entries()].sort((a, b) => countryLabel(a[0]).localeCompare(countryLabel(b[0]), 'pt'));
  };

  return (
    <aside className={cn('w-60 shrink-0 border-r border-bet62-border bg-bet62-bg/60', className)}>
      <div className="sticky top-16 max-h-[calc(100vh-4rem)] overflow-y-auto p-3 space-y-1 text-sm">
        <p className="px-2 pt-1 pb-2 text-[11px] font-bold uppercase tracking-widest text-white/45">Desportos</p>
        {SPORTS.filter((s) => counts[s.key]).map((s) => {
          const isOpen = !!open[s.key];
          return (
            <div key={s.key}>
              <button
                className="w-full flex items-center gap-2 rounded-lg px-2 py-2 text-white/80 hover:bg-white/5 hover:text-white"
                onClick={() => toggle(s.key)}
              >
                <span className="w-5 text-center">{s.icon}</span>
                <span className="flex-1 text-left">{s.name}</span>
                <b className="text-xs text-white/40 font-normal">{counts[s.key]}</b>
                {isOpen ? <ChevronDown size={14} className="text-white/40" /> : <ChevronRight size={14} className="text-white/40" />}
              </button>
              {isOpen && (
                <div className="ml-4 border-l border-bet62-border pl-2 pb-1">
                  <Link href={`/desporto?sport=${s.key}`} className="block rounded-md px-2 py-1.5 text-xs text-bet62-primary hover:bg-white/5">
                    Todos os jogos
                  </Link>
                  {tree(s.key).map(([country, list]) => {
                    const ck = `${s.key}|${country}`;
                    const cOpen = !!open[ck];
                    return (
                      <div key={ck}>
                        <button
                          className="w-full flex items-center gap-1.5 rounded-md px-2 py-1.5 text-xs text-white/70 hover:bg-white/5"
                          onClick={() => toggle(ck)}
                        >
                          {cOpen ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                          <span className="flex-1 text-left truncate">{countryLabel(country)}</span>
                          <b className="font-normal text-white/35">{list.reduce((n, l) => n + l.count, 0)}</b>
                        </button>
                        {cOpen &&
                          list.map((l) => {
                            const href = leagueHref(l.sport, l.competition);
                            return (
                              <Link
                                key={l.competition}
                                href={href}
                                className={cn(
                                  'ml-4 flex items-center gap-2 rounded-md px-2 py-1.5 text-xs hover:bg-white/5',
                                  pathname === href.split('?')[0] ? 'text-white' : 'text-white/60',
                                )}
                              >
                                <span className="flex-1 truncate">{l.label}</span>
                                <b className="font-normal text-white/35">{l.count}</b>
                              </Link>
                            );
                          })}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
        {!events.length && <p className="px-2 py-2 text-xs text-white/40">A carregar desportos…</p>}

        <div className="my-3 border-t border-bet62-border" />
        <p className="px-2 pb-2 text-[11px] font-bold uppercase tracking-widest text-white/45">Explorar</p>
        {[
          { href: '/live', label: 'Ao Vivo', icon: Activity, badge: liveCount || undefined },
          { href: '/events', label: 'Próximos', icon: Calendar },
          { href: '/casino', label: 'Cassino', icon: Dices },
          { href: '/promocoes', label: 'Promoções', icon: Gift },
          { href: '/jogo-responsavel', label: 'Jogo responsável', icon: ShieldCheck },
        ].map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={cn(
              'flex items-center gap-2 rounded-lg px-2 py-2 hover:bg-white/5',
              pathname === l.href ? 'text-white bg-white/5' : 'text-white/75',
            )}
          >
            <l.icon size={16} className="text-bet62-primary" />
            <span className="flex-1">{l.label}</span>
            {l.badge ? <b className="text-xs font-normal text-white/40">{l.badge}</b> : null}
          </Link>
        ))}
      </div>
    </aside>
  );
}
