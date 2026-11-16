'use client';

import Link from 'next/link';
import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft, Clock3, RefreshCw } from 'lucide-react';
import { Header } from '../../../../components/layout/Header';
import { Footer } from '../../../../components/layout/Footer';
import { Card, CardContent } from '../../../../components/ui/Card';
import { Button } from '../../../../components/ui/Button';
import {
  eventLabel,
  eventStart,
  eventTitle,
  fetchBetDistribution,
  fetchDescriptions,
  useBetbyFeed,
  type BetbyDescriptions,
  type BetbyDistribution,
  type BetbyFeed,
} from '../../../../lib/betby';

interface LiveMatchPageProps {
  params: { matchId: string };
}

// A BETBY envia os mercados por id (padrão Betradar); nomes conhecidos dos mais comuns.
const MARKET_NAMES: Record<string, string> = {
  '1': '1X2',
  '10': 'Dupla hipótese',
  '11': 'Empate anula',
  '16': 'Handicap',
  '18': 'Total de golos',
  '29': 'Ambas marcam',
  '60': '1X2 — 1.ª parte',
  '186': 'Vencedor',
  '219': 'Vencedor (incl. prolongamento)',
  '340': 'Vencedor',
};
const OUTCOME_NAMES: Record<string, string> = {
  '1': '1', '2': 'X', '3': '2', '4': '1', '5': '2', '9': '1X', '10': '12', '11': 'X2',
  '12': 'Mais', '13': 'Menos', '74': 'Sim', '76': 'Não', '1714': '1', '1715': '2',
};

function variantLabel(variant: string) {
  // "variant=..." são ids internos (as seleções já trazem o nome); o resto são linhas como "total=2.5".
  if (variant.startsWith('variant=') || variant === 'type=general') return '';
  return variant.replace(/\|/g, ' · ').replace(/=/g, ' ');
}

export default function LiveMatchPage({ params }: LiveMatchPageProps) {
  const feed: BetbyFeed = useSearchParams().get('feed') === 'prematch' ? 'prematch' : 'live';
  const { events, dictionaries, loading, error, reload } = useBetbyFeed(feed);
  const match = events.find((e) => e.id === params.matchId);
  const markets = match ? Object.entries(match.markets) : [];
  const start = match ? eventStart(match) : null;

  const [descriptions, setDescriptions] = React.useState<BetbyDescriptions>({});
  const [distribution, setDistribution] = React.useState<BetbyDistribution>({});
  React.useEffect(() => {
    fetchDescriptions(params.matchId).then(setDescriptions).catch(() => setDescriptions({}));
    fetchBetDistribution(params.matchId).then(setDistribution).catch(() => setDistribution({}));
  }, [params.matchId]);

  const marketName = (marketId: string) =>
    descriptions.markets?.[marketId]?.name ?? MARKET_NAMES[marketId] ?? `Mercado ${marketId}`;
  const outcomeName = (marketId: string, variant: string, outcomeId: string) =>
    descriptions.markets?.[marketId]?.variants?.[variant]?.[0]?.outcomes.find((o) => o.id === outcomeId)?.name ??
    OUTCOME_NAMES[outcomeId] ??
    outcomeId;
  const share = (marketId: string, outcomeId: string) =>
    distribution.markets
      ?.find((m) => String(m.market_id) === marketId)
      ?.outcomes.find((o) => String(o.outcome_id) === outcomeId)?.percentage;

  return (
    <div className="min-h-screen bg-bet62-bg">
      <Header />
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-10 space-y-6">
        <div className="flex items-center justify-between gap-3">
          <Button variant="outline" asChild>
            <Link href={feed === 'prematch' ? '/events' : '/live'}>
              <ArrowLeft size={16} />
              Voltar
            </Link>
          </Button>
          <Button variant="outline" onClick={() => void reload()}>
            <RefreshCw size={16} />
            Atualizar
          </Button>
        </div>

        {loading ? (
          <Card>
            <CardContent className="p-8 text-white/60">A carregar detalhe da partida...</CardContent>
          </Card>
        ) : !match ? (
          <Card>
            <CardContent className="p-8 text-bet62-danger">{error ?? 'Partida não encontrada (pode já ter terminado).'}</CardContent>
          </Card>
        ) : (
          <>
            <Card>
              <CardContent className="p-6 md:p-8">
                <p className="text-xs uppercase tracking-widest text-white/40">{eventLabel(match, dictionaries) || 'Competição'}</p>
                <h1 className="mt-3 text-3xl md:text-4xl font-black tracking-tight">{eventTitle(match)}</h1>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-white/60">
                  <div className="inline-flex items-center gap-2">
                    <Clock3 size={14} />
                    {match.state?.clock?.match_time ?? start?.toLocaleString('pt-PT') ?? '—'}
                  </div>
                  {match.score && (
                    <div className="font-mono text-xl text-white">
                      {match.score.home_score ?? 0} - {match.score.away_score ?? 0}
                    </div>
                  )}
                </div>
                {match.score?.period_scores && match.score.period_scores.length > 0 && (
                  <p className="mt-3 text-sm text-white/50">
                    Parciais: {match.score.period_scores.map((p) => `${p.home_score}-${p.away_score}`).join(' · ')}
                  </p>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-xl font-bold">Mercados</h2>
                {markets.length === 0 ? (
                  <p className="text-white/55">Sem odds disponíveis para esta partida.</p>
                ) : (
                  <div className="grid gap-4 md:grid-cols-2">
                    {markets.map(([marketId, variants]) => (
                      <div key={marketId} className="rounded-2xl border border-bet62-border bg-bet62-surface/40 p-4 space-y-3">
                        <p className="text-sm font-semibold text-white/85">
                          {marketName(marketId)}
                        </p>
                        {Object.entries(variants).map(([variant, outcomes]) => (
                          <div key={variant} className="space-y-2">
                            {variantLabel(variant) && <p className="text-xs text-white/40">{variantLabel(variant)}</p>}
                            <div className="grid gap-2 grid-cols-2 sm:grid-cols-3">
                              {Object.entries(outcomes).map(([outcomeId, o]) => (
                                <div
                                  key={outcomeId}
                                  className="flex items-center justify-between gap-2 rounded-xl border border-bet62-border/70 bg-bet62-bg/40 px-3 py-2 text-sm"
                                >
                                  <span className="text-white/70 truncate" title={outcomeName(marketId, variant, outcomeId)}>
                                    {outcomeName(marketId, variant, outcomeId)}
                                    {share(marketId, outcomeId) !== undefined && (
                                      <span className="ml-1 text-xs text-white/40">{share(marketId, outcomeId)}%</span>
                                    )}
                                  </span>
                                  <span className={o.b === 1 ? 'font-mono text-white/30 line-through' : 'font-mono font-bold text-bet62-primary'}>
                                    {o.k ?? '—'}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
