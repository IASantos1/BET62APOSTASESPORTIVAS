'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Header } from '../../../../components/layout/Header';
import { Footer } from '../../../../components/layout/Footer';
import { MatchHeaderCard } from '../../../../components/live/MatchHeaderCard';
import { FullMarketsGrid } from '../../../../components/live/FullMarketsGrid';
import MiniFootballPitch, { commentaryToBallPosition, type FootballZone } from '../../../../components/live/MiniFootballPitch';
import { apiClient } from '../../../../lib/api-client';
import { eventToUiMarketCategories, eventToUiMatchPreview } from '../../../../lib/odds-adapters';

type LiveScore = { home?: number | null; away?: number | null };
type LiveEventDetail = {
  id: string;
  name: string;
  homeTeamName?: string;
  awayTeamName?: string;
  leagueName?: string;
  sportType: string;
  status: string;
  liveScoreJson?: LiveScore | null;
  liveClockJson?: unknown;
  markets?: Array<{
    id: string;
    type?: string;
    name: string;
    status?: string;
    selections: Array<{
      id: string;
      name: string;
      odds: number;
      status?: string;
      outcome?: string;
    }>;
  }>;
};

interface LiveMatchPageProps {
  params: { matchId: string };
}

export default function LiveMatchPage({ params }: LiveMatchPageProps) {
  const router = useRouter();
  const { matchId } = params;
  const decodedMatchId = decodeURIComponent(matchId);

  const [ballPosition, setBallPosition] = React.useState<{ x: number; y: number; zone: FootballZone }>({ x: 52.5, y: 34, zone: 'center' });
  const [demoCommentary, setDemoCommentary] = React.useState('Bola no meio campo');
  const [detail, setDetail] = React.useState<LiveEventDetail | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const demoCycle = [
      'Bola no meio campo',
      'Canto de escanteio esquerdo Benfica',
      'Bola em circulação no meio campo',
      'Ataque Sporting na área',
      'Bola recuperada em defesa do Benfica',
      'Golo! Benfica marca aos 74 minutos',
    ];
    let idx = 0;
    const t = setInterval(() => {
      const next = demoCycle[idx % demoCycle.length];
      setDemoCommentary(next);
      setBallPosition(commentaryToBallPosition(next, 67, 52));
      idx += 1;
    }, 3200);
    return () => clearInterval(t);
  }, [decodedMatchId]);

  React.useEffect(() => {
    let cancelled = false;
    const load = async () => {
      setLoading(true);
      try {
        const res = await apiClient.get<LiveEventDetail>(`/odds/events/${encodeURIComponent(decodedMatchId)}`, {
          auth: false,
        });
        if (!cancelled) setDetail(res);
      } catch {
        if (!cancelled) setDetail(null);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    void load();
    const timer = window.setInterval(load, 15000);
    return () => {
      cancelled = true;
      window.clearInterval(timer);
    };
  }, [decodedMatchId]);

  return (
    <div className="min-h-screen bg-bet62-bg">
      <Header />
      <main className="relative">
        <div className="absolute inset-x-0 top-0 h-[320px] bg-gradient-to-b from-bet62-primary/10 via-bet62-accent/5 to-transparent pointer-events-none" />
        <div className="relative max-w-[1700px] mx-auto px-4 lg:px-8 py-6">
          <div className="mb-5">
            <button
              type="button"
              onClick={() => router.back()}
              className="inline-flex items-center gap-2 text-sm text-white/75 hover:text-bet62-primary hover:underline underline-offset-2 transition"
            >
              <ArrowLeft size={16} />
              Voltar ao vivo
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            <div className="md:col-span-8 order-2 md:order-1">
              <FullMarketsGrid
                matchId={decodedMatchId}
                loading={loading}
                categories={detail ? eventToUiMarketCategories(detail) : []}
              />
            </div>

            <div className="md:col-span-4 order-1 md:order-2 space-y-5">
              <MatchHeaderCard
                matchId={decodedMatchId}
                match={detail ? eventToUiMatchPreview(detail) : null}
              />

              <div
                className="rounded-xl border overflow-hidden"
                style={{ borderColor: 'rgba(30, 86, 49, 0.25)', backgroundColor: 'rgba(30, 86, 49, 0.04)' }}
              >
                <div className="px-4 py-2 border-b border-[#1e5631]/20 flex items-center justify-between">
                  <div className="text-xs font-semibold text-[#1e5631] tracking-wide">CAMPO AO VIVO</div>
                  <div className="text-[11px] text-white/60 max-w-[70%] truncate" title={demoCommentary}>
                    {demoCommentary}
                  </div>
                </div>
                <div className="p-3">
                  <MiniFootballPitch
                    ballX={ballPosition.x}
                    ballY={ballPosition.y}
                    ballZone={ballPosition.zone}
                    yellowHome={1}
                    yellowAway={0}
                    redHome={0}
                    redAway={1}
                    cornersHome={4}
                    cornersAway={3}
                    substitutionsHome={2}
                    substitutionsAway={3}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
