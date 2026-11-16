'use client';

import Link from 'next/link';
import * as React from 'react';
import { Activity, ArrowRight, RefreshCw } from 'lucide-react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { eventLabel, eventTitle, mainOdds, useBetbyFeed, type BetbyEvent } from '../../lib/betby';

// Jogos com placar/relógio primeiro, depois os que têm odds.
function rank(e: BetbyEvent) {
  return (e.desc?.competitors ? 0 : 8) + (e.score ? 0 : 2) + (e.state?.clock ? 0 : 1) + (Object.keys(e.markets).length ? 0 : 4);
}

export default function LivePage() {
  const { events, dictionaries, loading, error, updatedAt, reload } = useBetbyFeed('live');
  const matches = React.useMemo(() => [...events].sort((a, b) => rank(a) - rank(b)), [events]);

  return (
    <div className="min-h-screen bg-bet62-bg">
      <Header />
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-10 space-y-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight">Ao Vivo</h1>
            <p className="mt-2 text-white/60">
              Partidas em tempo real.
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
            <CardContent className="p-8 text-white/60">A carregar partidas ao vivo...</CardContent>
          </Card>
        ) : error && matches.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-bet62-danger">Não foi possível obter os jogos: {error}</CardContent>
          </Card>
        ) : matches.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-white/60">Não há partidas ao vivo neste momento.</CardContent>
          </Card>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {matches.map((match) => {
              const odds = mainOdds(match);
              return (
                <Card key={match.id}>
                  <CardContent className="p-5 space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-white/40">
                          {eventLabel(match, dictionaries) || `${Object.keys(match.markets).length} mercados`}
                        </p>
                        <p className="mt-2 font-bold text-lg leading-tight">{eventTitle(match)}</p>
                      </div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-bet62-primary/30 bg-bet62-primary/10 px-3 py-1 text-xs text-bet62-primary">
                        <Activity size={12} />
                        {match.state?.clock?.match_time ?? 'LIVE'}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-bet62-border bg-bet62-surface/40 p-4 flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm text-white/50">Placar</p>
                        <p className="text-3xl font-black">
                          {match.score ? `${match.score.home_score ?? 0} - ${match.score.away_score ?? 0}` : '—'}
                        </p>
                      </div>
                      <Button variant="ghost" asChild>
                        <Link href={`/live/match/${match.id}`}>
                          Ver detalhe
                          <ArrowRight size={15} />
                        </Link>
                      </Button>
                    </div>

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
