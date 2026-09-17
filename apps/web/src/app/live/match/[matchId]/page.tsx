'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, PlayCircle, BarChart3, Swords, ListOrdered } from 'lucide-react';
import { Header } from '../../../../components/layout/Header';
import { Footer } from '../../../../components/layout/Footer';
import { Sidebar } from '../../../../components/layout/Sidebar';
import { Betslip, FloatingBetslipToggle } from '../../../../components/layout/Betslip';
import { MatchHeaderCard } from '../../../../components/live/MatchHeaderCard';
import { FullMarketsGrid, type MarketCategory, type OddItem } from '../../../../components/live/FullMarketsGrid';
import MiniFootballPitch, { commentaryToBallPosition, type FootballZone } from '../../../../components/live/MiniFootballPitch';
import { Card, CardContent } from '../../../../components/ui/Card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../../../components/ui/Tabs';
import { apiClient } from '../../../../lib/api-client';
import { eventToUiMarketCategories, eventToUiMatchPreview } from '../../../../lib/odds-adapters';
import { useBetslipStore, type BetslipSelection } from '../../../../stores/betslip.store';

type LiveScore = { home?: number | null; away?: number | null };
type LiveEventDetail = {
  id: string;
  name: string;
  homeTeamName?: string;
  awayTeamName?: string;
  leagueName?: string;
  sportType: string;
  status: string;
  kickoffAt?: string | Date;
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

function ComingSoonPanel({ title, description }: { title: string; description: string }) {
  return (
    <Card>
      <CardContent className="p-8 text-center">
        <p className="font-semibold text-white/80">{title}</p>
        <p className="text-sm text-white/50 mt-1.5">{description}</p>
      </CardContent>
    </Card>
  );
}

export default function LiveMatchPage({ params }: LiveMatchPageProps) {
  const router = useRouter();
  const { matchId } = params;
  const decodedMatchId = decodeURIComponent(matchId);
  const addSelection = useBetslipStore((s) => s.addSelection);
  const [betslipOpen, setBetslipOpen] = React.useState(false);

  const [ballPosition, setBallPosition] = React.useState<{ x: number; y: number; zone: FootballZone }>({ x: 52.5, y: 34, zone: 'center' });
  const [demoCommentary, setDemoCommentary] = React.useState('Bola no meio campo');
  const [detail, setDetail] = React.useState<LiveEventDetail | null>(null);
  const [loading, setLoading] = React.useState(true);

  const isFootball = (detail?.sportType ?? '').toUpperCase() === 'FOOTBALL';
  const isLive = detail?.status === 'LIVE' || detail?.status === 'HALF_TIME';

  React.useEffect(() => {
    if (!isFootball || !isLive) return undefined;
    const demoCycle = [
      'Bola no meio campo',
      'Canto de escanteio esquerdo',
      'Bola em circulação no meio campo',
      'Ataque na área',
      'Bola recuperada em defesa',
    ];
    let idx = 0;
    const t = setInterval(() => {
      const next = demoCycle[idx % demoCycle.length];
      setDemoCommentary(next);
      setBallPosition(commentaryToBallPosition(next, 67, 52));
      idx += 1;
    }, 3200);
    return () => clearInterval(t);
  }, [decodedMatchId, isFootball, isLive]);

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

  const handleSelect = (market: MarketCategory, odd: OddItem) => {
    if (!detail) return;
    const homeName = detail.homeTeamName ?? detail.name.split(' vs ')[0] ?? 'Casa';
    const awayName = detail.awayTeamName ?? detail.name.split(' vs ')[1] ?? 'Fora';
    const marketKey = market.code ?? market.name;
    const selKey = odd.selectionId ?? odd.name;
    const sel: BetslipSelection = {
      id: `${detail.id}-${marketKey}-${selKey}`,
      eventId: detail.id,
      marketId: `${detail.id}-${marketKey}`,
      selectionId: `${detail.id}-${marketKey}-${selKey}`,
      selectionName: odd.name,
      marketName: market.name,
      eventName: `${homeName} vs ${awayName} · ${detail.leagueName ?? detail.sportType}`,
      kickoffAt: detail.kickoffAt ? new Date(detail.kickoffAt).toISOString() : new Date().toISOString(),
      odds: odd.price,
      marketType: '1X2',
      outcome: odd.outcome ?? selKey,
    };
    addSelection(sel);
    setBetslipOpen(true);
  };

  return (
    <div className="min-h-screen bg-bet62-bg">
      <Header />
      <div className="flex">
        <Sidebar compact />
        <main className="relative flex-1 min-w-0">
          <div className="absolute inset-x-0 top-0 h-[320px] bg-gradient-to-b from-bet62-primary/10 via-bet62-accent/5 to-transparent pointer-events-none" />
          <div className="relative max-w-[1500px] mx-auto px-4 lg:px-8 py-6">
            <div className="mb-5">
              <button
                type="button"
                onClick={() => router.back()}
                className="inline-flex items-center gap-2 text-sm text-white/75 hover:text-bet62-primary hover:underline underline-offset-2 transition"
              >
                <ArrowLeft size={16} />
                Voltar
              </button>
            </div>

            <div className="mb-5">
              <MatchHeaderCard
                matchId={decodedMatchId}
                match={detail ? eventToUiMatchPreview(detail) : null}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              <div className="lg:col-span-7 xl:col-span-8 min-w-0">
                <FullMarketsGrid
                  matchId={decodedMatchId}
                  loading={loading}
                  categories={detail ? eventToUiMarketCategories(detail) : []}
                  onSelectionClick={(market, odd) => handleSelect(market, odd)}
                />
              </div>

              <div className="lg:col-span-5 xl:col-span-4 min-w-0">
                <Tabs defaultValue="tracker">
                  <TabsList className="w-full h-auto flex flex-wrap gap-1 p-1">
                    <TabsTrigger value="tracker" className="shrink-0 px-2.5 py-1.5 text-xs">
                      <span className="inline-flex items-center gap-1">
                        <PlayCircle size={13} /> Match Tracker
                      </span>
                    </TabsTrigger>
                    <TabsTrigger value="stats" className="shrink-0 px-2.5 py-1.5 text-xs">
                      <span className="inline-flex items-center gap-1">
                        <BarChart3 size={13} /> Estatísticas
                      </span>
                    </TabsTrigger>
                    <TabsTrigger value="h2h" className="shrink-0 px-2.5 py-1.5 text-xs">
                      <span className="inline-flex items-center gap-1">
                        <Swords size={13} /> H2H
                      </span>
                    </TabsTrigger>
                    <TabsTrigger value="standings" className="shrink-0 px-2.5 py-1.5 text-xs">
                      <span className="inline-flex items-center gap-1">
                        <ListOrdered size={13} /> Classificação
                      </span>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="tracker">
                    {isFootball ? (
                      <div
                        className="rounded-xl border overflow-hidden"
                        style={{ borderColor: 'rgba(30, 86, 49, 0.25)', backgroundColor: 'rgba(30, 86, 49, 0.04)' }}
                      >
                        <div className="px-4 py-2 border-b border-[#1e5631]/20 flex items-center justify-between gap-2">
                          <div className="text-xs font-semibold text-[#1e5631] tracking-wide shrink-0">CAMPO AO VIVO</div>
                          {isLive ? (
                            <div className="text-[11px] text-white/60 max-w-[70%] truncate" title={demoCommentary}>
                              {demoCommentary}
                            </div>
                          ) : null}
                        </div>
                        <div className="p-3">
                          {isLive ? (
                            <MiniFootballPitch
                              ballX={ballPosition.x}
                              ballY={ballPosition.y}
                              ballZone={ballPosition.zone}
                            />
                          ) : (
                            <div className="py-10 text-center text-sm text-white/50">
                              O match tracker fica disponível assim que o jogo começar.
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <ComingSoonPanel
                        title="Match Tracker indisponível para esta modalidade"
                        description="O acompanhamento visual em campo está disponível apenas para futebol, por agora."
                      />
                    )}
                  </TabsContent>

                  <TabsContent value="stats">
                    <ComingSoonPanel
                      title="Estatísticas em breve"
                      description="As estatísticas detalhadas da partida (posse de bola, remates, cantos, cartões) estão a ser ligadas aos dados em tempo real dos provedores."
                    />
                  </TabsContent>

                  <TabsContent value="h2h">
                    <ComingSoonPanel
                      title="Confrontos diretos em breve"
                      description="O histórico de confrontos diretos entre as duas equipas será apresentado aqui assim que a integração estiver concluída."
                    />
                  </TabsContent>

                  <TabsContent value="standings">
                    <ComingSoonPanel
                      title="Classificação em breve"
                      description="A tabela classificativa da competição será apresentada aqui assim que a integração estiver concluída."
                    />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </div>
      <Betslip open={betslipOpen} onClose={() => setBetslipOpen(false)} />
      <FloatingBetslipToggle onClick={() => setBetslipOpen(true)} open={betslipOpen} />
    </div>
  );
}
