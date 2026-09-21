'use client';

import Link from 'next/link';
import * as React from 'react';
import { ArrowRight, CalendarDays, RefreshCw } from 'lucide-react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { apiClient } from '../../lib/api-client';

interface MatchItem {
  id: string;
  startTime: string;
  homeTeam?: { name?: string };
  awayTeam?: { name?: string };
  competition?: { name?: string };
}

export default function EventsPage() {
  const [matches, setMatches] = React.useState<MatchItem[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const loadMatches = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiClient.get<MatchItem[]>('/odds/events/prematch', { auth: false });
      setMatches(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Falha ao carregar agenda.');
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
            <h1 className="text-3xl md:text-4xl font-black tracking-tight">Próximos Jogos</h1>
            <p className="mt-2 text-white/60">Agenda de futebol alimentada por MrDoge.</p>
          </div>
          <Button variant="outline" onClick={() => void loadMatches()}>
            <RefreshCw size={16} />
            Atualizar
          </Button>
        </div>

        {loading ? (
          <Card>
            <CardContent className="p-8 text-white/60">A carregar agenda...</CardContent>
          </Card>
        ) : error ? (
          <Card>
            <CardContent className="p-8 text-bet62-danger">{error}</CardContent>
          </Card>
        ) : matches.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-white/60">Sem partidas próximas no momento.</CardContent>
          </Card>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {matches.map((match) => (
              <Card key={match.id}>
                <CardContent className="p-5 space-y-4">
                  <div className="inline-flex items-center gap-2 text-white/50 text-xs uppercase tracking-widest">
                    <CalendarDays size={12} />
                    {match.competition?.name ?? 'Competição'}
                  </div>
                  <p className="font-bold text-lg leading-tight">
                    {match.homeTeam?.name} vs {match.awayTeam?.name}
                  </p>
                  <p className="text-sm text-white/55">
                    {new Date(match.startTime).toLocaleString('pt-PT', {
                      dateStyle: 'short',
                      timeStyle: 'short',
                    })}
                  </p>
                  <Button variant="ghost" asChild>
                    <Link href={`/live/match/${match.id}`}>
                      Ver mercados
                      <ArrowRight size={15} />
                    </Link>
                  </Button>
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
