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
import { cn } from '../../../../lib/utils';

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

type FootballStats = {
  possessionHome: number | null;
  possessionAway: number | null;
  shotsHome: number | null;
  shotsAway: number | null;
  shotsOnTargetHome: number | null;
  shotsOnTargetAway: number | null;
  cornersHome: number | null;
  cornersAway: number | null;
  foulsHome: number | null;
  foulsAway: number | null;
  offsidesHome: number | null;
  offsidesAway: number | null;
  yellowCardsHome: number | null;
  yellowCardsAway: number | null;
  redCardsHome: number | null;
  redCardsAway: number | null;
  savesHome: number | null;
  savesAway: number | null;
  xgHome: number | null;
  xgAway: number | null;
};

type H2hTeam = { id?: string | number; name?: string };
type H2hFixture = {
  fixture_id?: string | number;
  home?: H2hTeam;
  away?: H2hTeam;
  score?: { home?: { current?: number | null } | number | null; away?: { current?: number | null } | number | null };
  date?: string | null;
};
type H2hResponse = {
  teamA?: H2hTeam;
  teamB?: H2hTeam;
  h2h?: H2hFixture[];
};

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

function StatRow({ label, home, away }: { label: string; home: number | null; away: number | null }) {
  const h = home ?? 0;
  const a = away ?? 0;
  const total = h + a || 1;
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-xs">
        <span className="font-mono font-bold text-white/80">{home ?? '-'}</span>
        <span className="text-white/50 uppercase tracking-wide text-[10px]">{label}</span>
        <span className="font-mono font-bold text-white/80">{away ?? '-'}</span>
      </div>
      <div className="flex h-1.5 rounded-full overflow-hidden bg-bet62-bg/60">
        <div className="bg-bet62-primary" style={{ width: `${(h / total) * 100}%` }} />
        <div className="bg-bet62-secondary" style={{ width: `${(a / total) * 100}%` }} />
      </div>
    </div>
  );
}

function StatisticsPanel({ stats, homeName, awayName }: { stats: FootballStats; homeName: string; awayName: string }) {
  return (
    <Card>
      <CardContent className="p-5 space-y-4">
        <div className="flex items-center justify-between text-[11px] font-semibold text-white/60 uppercase tracking-wide">
          <span className="truncate max-w-[40%]">{homeName}</span>
          <span>Estatísticas</span>
          <span className="truncate max-w-[40%] text-right">{awayName}</span>
        </div>
        <StatRow label="Posse de Bola %" home={stats.possessionHome} away={stats.possessionAway} />
        <StatRow label="Remates" home={stats.shotsHome} away={stats.shotsAway} />
        <StatRow label="Remates à Baliza" home={stats.shotsOnTargetHome} away={stats.shotsOnTargetAway} />
        <StatRow label="xG" home={stats.xgHome} away={stats.xgAway} />
        <StatRow label="Cantos" home={stats.cornersHome} away={stats.cornersAway} />
        <StatRow label="Faltas" home={stats.foulsHome} away={stats.foulsAway} />
        <StatRow label="Fora de Jogo" home={stats.offsidesHome} away={stats.offsidesAway} />
        <StatRow label="Cartões Amarelos" home={stats.yellowCardsHome} away={stats.yellowCardsAway} />
        <StatRow label="Cartões Vermelhos" home={stats.redCardsHome} away={stats.redCardsAway} />
        <StatRow label="Defesas" home={stats.savesHome} away={stats.savesAway} />
      </CardContent>
    </Card>
  );
}

function H2hPanel({ h2h }: { h2h: H2hResponse }) {
  const fixtures = h2h.h2h ?? [];
  if (fixtures.length === 0) {
    return (
      <ComingSoonPanel
        title="Sem histórico de confrontos"
        description="Não há registos de confrontos diretos anteriores entre estas duas equipas."
      />
    );
  }
  return (
    <Card>
      <CardContent className="p-5 space-y-3">
        <p className="text-[11px] font-semibold text-white/60 uppercase tracking-wide mb-2">Confrontos Diretos</p>
        {fixtures.slice(0, 8).map((fx, i) => {
          const home = typeof fx.score?.home === 'object' ? fx.score?.home?.current : fx.score?.home;
          const away = typeof fx.score?.away === 'object' ? fx.score?.away?.current : fx.score?.away;
          return (
            <div
              key={fx.fixture_id ?? i}
              className="flex items-center justify-between gap-3 rounded-xl border border-bet62-border/60 bg-bet62-bg/40 px-3 py-2 text-sm"
            >
              <span className="truncate flex-1 text-left">{fx.home?.name ?? 'Casa'}</span>
              <span className="font-mono font-bold text-bet62-primary shrink-0">
                {home ?? '-'} - {away ?? '-'}
              </span>
              <span className="truncate flex-1 text-right">{fx.away?.name ?? 'Fora'}</span>
            </div>
          );
        })}
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
  const [activeTab, setActiveTab] = React.useState('tracker');
  const [stats, setStats] = React.useState<FootballStats | null>(null);
  const [statsLoading, setStatsLoading] = React.useState(false);
  const [h2h, setH2h] = React.useState<H2hResponse | null>(null);
  const [h2hLoading, setH2hLoading] = React.useState(false);
  const statsFetchedRef = React.useRef(false);
  const h2hFetchedRef = React.useRef(false);

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

  React.useEffect(() => {
    if (activeTab !== 'stats' || statsFetchedRef.current) return;
    statsFetchedRef.current = true;
    setStatsLoading(true);
    apiClient
      .get<FootballStats>(`/odds/events/${encodeURIComponent(decodedMatchId)}/statistics`, { auth: false })
      .then((res) => setStats(res))
      .catch(() => setStats(null))
      .finally(() => setStatsLoading(false));
  }, [activeTab, decodedMatchId]);

  React.useEffect(() => {
    if (activeTab !== 'h2h' || h2hFetchedRef.current) return;
    h2hFetchedRef.current = true;
    setH2hLoading(true);
    apiClient
      .get<H2hResponse>(`/odds/events/${encodeURIComponent(decodedMatchId)}/h2h`, { auth: false })
      .then((res) => setH2h(res))
      .catch(() => setH2h(null))
      .finally(() => setH2hLoading(false));
  }, [activeTab, decodedMatchId]);

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
              {/* Em mobile (coluna unica) as tabs vem antes dos mercados —
                  ordem invertida so no desktop via order-*, onde ficam lado
                  a lado (mercados a esquerda, tabs a direita). Enquanto uma
                  tab que nao seja Match Tracker estiver ativa, os mercados
                  ficam ocultos SO em mobile (lg:block forca a exibicao
                  sempre no desktop) para a tab ocupar a tela toda, em vez
                  de aparecer escondida no fim da pagina depois de todos os
                  mercados. */}
              <div
                className={cn(
                  'order-2 lg:order-1 lg:col-span-7 xl:col-span-8 min-w-0',
                  activeTab !== 'tracker' && 'hidden lg:block',
                )}
              >
                <FullMarketsGrid
                  matchId={decodedMatchId}
                  loading={loading}
                  categories={detail ? eventToUiMarketCategories(detail) : []}
                  onSelectionClick={(market, odd) => handleSelect(market, odd)}
                />
              </div>

              <div className="order-1 lg:order-2 lg:col-span-5 xl:col-span-4 min-w-0">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="w-full h-auto grid grid-cols-4 gap-1 p-1 sm:flex sm:flex-wrap">
                    <TabsTrigger
                      value="tracker"
                      className="px-1 sm:px-2.5 py-2 sm:py-1.5 text-[10px] sm:text-xs leading-tight"
                    >
                      <span className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 w-full">
                        <PlayCircle size={17} className="sm:hidden" />
                        <PlayCircle size={13} className="hidden sm:inline" />
                        <span className="truncate max-w-full">Match Tracker</span>
                      </span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="stats"
                      className="px-1 sm:px-2.5 py-2 sm:py-1.5 text-[10px] sm:text-xs leading-tight"
                    >
                      <span className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 w-full">
                        <BarChart3 size={17} className="sm:hidden" />
                        <BarChart3 size={13} className="hidden sm:inline" />
                        <span className="truncate max-w-full">Estatísticas</span>
                      </span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="h2h"
                      className="px-1 sm:px-2.5 py-2 sm:py-1.5 text-[10px] sm:text-xs leading-tight"
                    >
                      <span className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 w-full">
                        <Swords size={17} className="sm:hidden" />
                        <Swords size={13} className="hidden sm:inline" />
                        <span className="truncate max-w-full">H2H</span>
                      </span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="standings"
                      className="px-1 sm:px-2.5 py-2 sm:py-1.5 text-[10px] sm:text-xs leading-tight"
                    >
                      <span className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 w-full">
                        <ListOrdered size={17} className="sm:hidden" />
                        <ListOrdered size={13} className="hidden sm:inline" />
                        <span className="truncate max-w-full">Classificação</span>
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
                    {!isFootball ? (
                      <ComingSoonPanel
                        title="Estatísticas em breve"
                        description="As estatísticas detalhadas para esta modalidade estão a ser ligadas aos dados da PropLine."
                      />
                    ) : statsLoading ? (
                      <ComingSoonPanel title="A carregar estatísticas..." description="" />
                    ) : stats ? (
                      <StatisticsPanel
                        stats={stats}
                        homeName={detail?.homeTeamName ?? detail?.name.split(' vs ')[0] ?? 'Casa'}
                        awayName={detail?.awayTeamName ?? detail?.name.split(' vs ')[1] ?? 'Fora'}
                      />
                    ) : (
                      <ComingSoonPanel
                        title="Estatísticas indisponíveis"
                        description="Ainda não há estatísticas publicadas pela Goal API para esta partida."
                      />
                    )}
                  </TabsContent>

                  <TabsContent value="h2h">
                    {!isFootball ? (
                      <ComingSoonPanel
                        title="H2H indisponível para esta modalidade"
                        description="O histórico de confrontos diretos está disponível apenas para futebol, por agora."
                      />
                    ) : h2hLoading ? (
                      <ComingSoonPanel title="A carregar confrontos diretos..." description="" />
                    ) : h2h ? (
                      <H2hPanel h2h={h2h} />
                    ) : (
                      <ComingSoonPanel
                        title="Confrontos diretos indisponíveis"
                        description="Não foi possível obter o histórico de confrontos diretos para esta partida."
                      />
                    )}
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
