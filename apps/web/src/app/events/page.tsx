'use client';

import Link from 'next/link';
import * as React from 'react';
import { ArrowRight, CalendarDays, RefreshCw } from 'lucide-react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { eventLabel, eventStart, eventTitle, mainOdds, useBetbyFeed } from '../../lib/betby';

export default function EventsPage() {
  const { events, dictionaries, loading, error, updatedAt, reload } = useBetbyFeed('prematch', 30000);
  const matches = React.useMemo(
    () =>
      [...events].sort(
        (a, b) =>
          (eventStart(a)?.getTime() ?? Infinity) - (eventStart(b)?.getTime() ?? Infinity) ||
          Object.keys(b.markets).length - Object.keys(a.markets).length,
      ),
    [events],
  );

  return (
    <div className="min-h-screen bg-bet62-bg">
      <Header />
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-10 space-y-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight">Próximos Jogos</h1>
            <p className="mt-2 text-white/60">
              Agenda de partidas.
              {updatedAt && <span className="text-white/40"> · atualizado às {updatedAt.toLocaleTimeString('pt-PT')}</span>}
            </p>
          </div>
          <Button variant="outline" onClick={() => void reload()}>
            <RefreshCw size={16} />
            Atualizar
          </Button>
        </div>

        {loading ? (
          <Card>
            <CardContent className="p-8 text-white/60">A carregar agenda...</CardContent>
          </Card>
        ) : error && matches.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-bet62-danger">Não foi possível obter os jogos: {error}</CardContent>
          </Card>
        ) : matches.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-white/60">Sem partidas próximas no momento.</CardContent>
          </Card>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {matches.map((match) => {
              const odds = mainOdds(match);
              return (
                <Card key={match.id}>
                  <CardContent className="p-5 space-y-4">
                    <div className="inline-flex items-center gap-2 text-white/50 text-xs uppercase tracking-widest">
                      <CalendarDays size={12} />
                      {eventLabel(match, dictionaries) || `${Object.keys(match.markets).length} mercados`}
                    </div>
                    <p className="font-bold text-lg leading-tight">{eventTitle(match)}</p>
                    {eventStart(match) && (
                      <p className="text-sm text-white/55">
                        {eventStart(match)!.toLocaleString('pt-PT', { dateStyle: 'short', timeStyle: 'short' })}
                      </p>
                    )}
                    {odds.length > 0 && (
                      <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${odds.length}, minmax(0, 1fr))` }}>
                        {odds.map((o) => (
                          <div
                            key={o.label}
                            className="rounded-xl border border-bet62-border/70 bg-bet62-bg/40 px-3 py-2 text-sm flex items-center justify-between"
                          >
                            <span className="text-white/60">{o.label}</span>
                            <span className={o.blocked ? 'font-mono text-white/30 line-through' : 'font-mono font-bold text-bet62-primary'}>
                              {o.odd}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                    <Button variant="ghost" asChild>
                      <Link href={`/live/match/${match.id}?feed=prematch`}>
                        Ver mercados
                        <ArrowRight size={15} />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
