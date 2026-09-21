'use client';

import Link from 'next/link';
import * as React from 'react';
import { ArrowLeft, Clock3, RefreshCw } from 'lucide-react';
import { Header } from '../../../../components/layout/Header';
import { Footer } from '../../../../components/layout/Footer';
import { Card, CardContent } from '../../../../components/ui/Card';
import { Button } from '../../../../components/ui/Button';
import { apiClient } from '../../../../lib/api-client';

interface LiveMatchPageProps {
  params: { matchId: string };
}

interface MarketLine {
  id: string;
  code: string;
  caption: string | null;
  price: number;
  isAvailable: boolean;
}

interface Market {
  id: string;
  betType: string;
  lines: MarketLine[];
}

export default function LiveMatchPage({ params }: LiveMatchPageProps) {
  const [match, setMatch] = React.useState<any>(null);
  const [markets, setMarkets] = React.useState<Market[]>([]);
  const [timeline, setTimeline] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const loadData = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [matchData, marketData, timelineData] = await Promise.all([
        apiClient.get(`/odds/events/${params.matchId}`, { auth: false }),
        apiClient.get<Market[]>(`/odds/events/${params.matchId}/markets`, { auth: false }),
        apiClient.get<any[]>(`/odds/events/${params.matchId}/timeline`, { auth: false }),
      ]);
      setMatch(matchData);
      setMarkets(Array.isArray(marketData) ? marketData : []);
      setTimeline(Array.isArray(timelineData) ? timelineData : []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Falha ao carregar detalhe da partida.');
    } finally {
      setLoading(false);
    }
  }, [params.matchId]);

  React.useEffect(() => {
    void loadData();
  }, [loadData]);

  return (
    <div className="min-h-screen bg-bet62-bg">
      <Header />
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-10 space-y-6">
        <div className="flex items-center justify-between gap-3">
          <Button variant="outline" asChild>
            <Link href="/live">
              <ArrowLeft size={16} />
              Voltar
            </Link>
          </Button>
          <Button variant="outline" onClick={() => void loadData()}>
            <RefreshCw size={16} />
            Atualizar
          </Button>
        </div>

        {loading ? (
          <Card>
            <CardContent className="p-8 text-white/60">A carregar detalhe da partida...</CardContent>
          </Card>
        ) : error || !match ? (
          <Card>
            <CardContent className="p-8 text-bet62-danger">{error ?? 'Partida não encontrada.'}</CardContent>
          </Card>
        ) : (
          <>
            <Card>
              <CardContent className="p-6 md:p-8">
                <p className="text-xs uppercase tracking-widest text-white/40">
                  {match.competition?.name ?? 'Competição'}
                </p>
                <h1 className="mt-3 text-3xl md:text-4xl font-black tracking-tight">
                  {match.homeTeam?.name} vs {match.awayTeam?.name}
                </h1>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-white/60">
                  <div className="inline-flex items-center gap-2">
                    <Clock3 size={14} />
                    {match.stats?.clock?.display ?? new Date(match.startTime).toLocaleString('pt-PT')}
                  </div>
                  <div className="font-mono text-xl text-white">
                    {match.stats?.homeScore ?? 0} - {match.stats?.awayScore ?? 0}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-bold">Mercados</h2>
                  {markets.length === 0 ? (
                    <p className="text-white/55">Sem odds disponíveis para esta partida.</p>
                  ) : (
                    <div className="space-y-4">
                      {markets.map((market) => (
                        <div key={market.id} className="rounded-2xl border border-bet62-border bg-bet62-surface/40 p-4">
                          <p className="text-sm font-semibold text-white/85">{market.betType}</p>
                          <div className="mt-3 grid gap-2">
                            {market.lines.map((line) => (
                              <div
                                key={line.id}
                                className="flex items-center justify-between rounded-xl border border-bet62-border/70 bg-bet62-bg/40 px-3 py-2 text-sm"
                              >
                                <span className="text-white/70">{line.caption ?? line.code}</span>
                                <span className="font-mono font-bold text-bet62-primary">{line.price?.toFixed?.(2) ?? line.price}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-bold">Timeline</h2>
                  {timeline.length === 0 ? (
                    <p className="text-white/55">Sem eventos cronológicos disponíveis.</p>
                  ) : (
                    <div className="space-y-3">
                      {timeline.slice(0, 12).map((event, index) => (
                        <div key={`${event.type}-${index}`} className="rounded-xl border border-bet62-border/70 bg-bet62-surface/30 p-3">
                          <p className="text-xs uppercase tracking-widest text-white/40">{event.type}</p>
                          <p className="mt-1 text-sm text-white/75">{Array.isArray(event.captions) ? event.captions.join(' · ') : ''}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
