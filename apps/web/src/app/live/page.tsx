'use client';

import Link from 'next/link';
import * as React from 'react';
import { Activity, ArrowRight, RefreshCw } from 'lucide-react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { apiClient } from '../../lib/api-client';

interface MatchItem {
  id: string;
  startTime: string;
  status: string;
  homeTeam?: { name?: string };
  awayTeam?: { name?: string };
  competition?: { name?: string };
  stats?: {
    homeScore?: number;
    awayScore?: number;
    clock?: { display?: string };
  } | null;
}

export default function LivePage() {
  const [matches, setMatches] = React.useState<MatchItem[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const loadMatches = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiClient.get<MatchItem[]>('/odds/events/live', { auth: false });
      setMatches(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Falha ao carregar partidas ao vivo.');
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    void loadMatches();
  }, [loadMatches]);

  return (
    <div className="min-h-screen bg-bet62-bg">
      <Header />
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-10 space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight">Futebol Ao Vivo</h1>
            <p className="mt-2 text-white/60">Feed em tempo real alimentado por MrDoge no backend.</p>
          </div>
          <Button variant="outline" onClick={() => void loadMatches()}>
            <RefreshCw size={16} />
            Atualizar
          </Button>
        </div>

        {loading ? (
          <Card>
            <CardContent className="p-8 text-white/60">A carregar partidas ao vivo...</CardContent>
          </Card>
        ) : error ? (
          <Card>
            <CardContent className="p-8 text-bet62-danger">{error}</CardContent>
          </Card>
        ) : matches.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-white/60">Não há partidas de futebol ao vivo neste momento.</CardContent>
          </Card>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {matches.map((match) => (
              <Card key={match.id}>
                <CardContent className="p-5 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/40">
                        {match.competition?.name ?? 'Competição'}
                      </p>
                      <p className="mt-2 font-bold text-lg leading-tight">
                        {match.homeTeam?.name} vs {match.awayTeam?.name}
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-bet62-primary/30 bg-bet62-primary/10 px-3 py-1 text-xs text-bet62-primary">
                      <Activity size={12} />
                      {match.stats?.clock?.display ?? 'LIVE'}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-bet62-border bg-bet62-surface/40 p-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-white/50">Placar</p>
                      <p className="text-3xl font-black">
                        {match.stats?.homeScore ?? 0} - {match.stats?.awayScore ?? 0}
                      </p>
                    </div>
                    <Button variant="ghost" asChild>
                      <Link href={`/live/match/${match.id}`}>
                        Ver detalhe
                        <ArrowRight size={15} />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
