'use client';

// Detalhe do jogo: placar, estatísticas ao vivo (cartões, cantos…) e todos os mercados,
// cada odd clicável para o boletim.
import Link from 'next/link';
import * as React from 'react';
import { ArrowLeft, Clock3 } from 'lucide-react';
import { SportsShell } from '../../../../components/sports/SportsShell';
import { EmptyPanel } from '../../../../components/sports/blocks';
import { fmtWhen } from '../../../../components/sports/links';
import { fetchBetDistribution, fetchDescriptions, type BetbyDescriptions, type BetbyDistribution } from '../../../../lib/betby';
import { pickOf, useBoard, type BoardEvent } from '../../../../lib/board';
import { SPORT_BY_KEY, countryLabel } from '../../../../lib/sports/catalog';
import { useSlip } from '../../../../stores/slip.store';
import { cn } from '../../../../lib/utils';

// Nomes dos mercados mais comuns (ids Betradar usados pela BETBY). O nome da BETBY
// (/api/v3/descriptions) tem prioridade; depois estes; senão o id.
const MARKET_NAMES: Record<string, string> = {
  '1': 'Resultado final', '8': 'Próximo golo', '10': 'Dupla hipótese', '11': 'Empate anula aposta', '14': 'Handicap europeu',
  '16': 'Handicap', '18': 'Total de golos', '19': 'Total de golos (casa)', '20': 'Total de golos (fora)', '26': 'Par / Ímpar',
  '29': 'Ambas as equipas marcam', '35': 'Resultado e ambas marcam', '37': 'Resultado e total de golos', '45': 'Resultado exato',
  '47': 'Intervalo / Final', '60': 'Resultado 1.ª parte', '63': 'Dupla hipótese 1.ª parte', '66': 'Handicap 1.ª parte',
  '68': 'Total de golos 1.ª parte', '69': 'Total 1.ª parte (casa)', '70': 'Total 1.ª parte (fora)', '74': 'Ambas marcam 1.ª parte',
  '75': 'Ambas marcam 2.ª parte', '81': 'Resultado exato 1.ª parte', '83': 'Resultado 2.ª parte', '186': 'Vencedor',
  '187': 'Handicap de jogos', '189': 'Total de jogos', '199': 'Resultado exato (sets)', '202': 'Vencedor do set',
  '219': 'Vencedor (incl. prolongamento)', '223': 'Handicap (incl. prolongamento)', '225': 'Total (incl. prolongamento)',
  '340': 'Vencedor', '406': 'Vencedor (incl. prolongamento)',
};
const OUTCOME_NAMES: Record<string, string> = {
  '2': 'Empate', '9': '1X', '10': '12', '11': 'X2', '12': 'Mais', '13': 'Menos', '70': 'Ímpar', '72': 'Par', '74': 'Sim', '76': 'Não',
  '78': '1 e Sim', '80': '1 e Não', '82': 'X e Sim', '84': 'X e Não', '86': '2 e Sim', '88': '2 e Não',
  '794': '1 e Menos', '796': '1 e Mais', '798': 'X e Menos', '800': 'X e Mais', '802': '2 e Menos', '804': '2 e Mais',
};
const STAT_NAMES: Record<string, string> = {
  corners: 'Cantos', yellow_cards: 'Cartões amarelos', red_cards: 'Cartões vermelhos', yellow_red_cards: 'Segundo amarelo',
};
// Mercados principais primeiro, depois pelo id.
const ORDER = ['1', '186', '219', '340', '406', '10', '18', '29', '16', '11', '60', '68', '37', '35', '45'];
const marketRank = (id: string) => (ORDER.includes(id) ? ORDER.indexOf(id) : 100 + Number(id) / 1e6);

function variantLabel(variant: string) {
  // "variant=..." são ids internos (as seleções já trazem o nome); o resto são linhas como "total=2.5".
  if (!variant || variant.startsWith('variant=') || variant === 'type=general') return '';
  return variant
    .split('|')
    .map((part) =>
      part
        .replace(/^total=/, 'Linha ')
        .replace(/^hcp=/, 'Handicap ')
        .replace(/^setnr=/, 'Set ')
        .replace(/^gamenr=/, 'Jogo ')
        .replace(/^(quarternr|periodnr)=/, 'Período ')
        .replace(/^goalnr=/, 'Golo n.º ')
        .replace(/=/g, ' '),
    )
    .join(' · ');
}

const num = (v: unknown) => (typeof v === 'number' ? v : Number(v));
function statRows(stats: BoardEvent['statistics']) {
  return Object.entries(stats ?? {})
    .filter(([, v]) => v && typeof v === 'object' && Number.isFinite(num(v.home)) && Number.isFinite(num(v.away)))
    .map(([k, v]) => ({ key: k, name: STAT_NAMES[k] ?? k.replace(/_/g, ' '), home: num(v.home), away: num(v.away) }));
}

function Inner({ id }: { id: string }) {
  const { events, loading } = useBoard();
  const e = events.find((x) => x.id === id);
  const picks = useSlip((s) => s.picks);
  const toggle = useSlip((s) => s.toggle);
  const [descriptions, setDescriptions] = React.useState<BetbyDescriptions>({});
  const [distribution, setDistribution] = React.useState<BetbyDistribution>({});
  React.useEffect(() => {
    fetchDescriptions(id).then(setDescriptions).catch(() => setDescriptions({}));
    fetchBetDistribution(id).then(setDistribution).catch(() => setDistribution({}));
  }, [id]);

  if (!e) return <EmptyPanel>{loading ? 'A carregar…' : 'Jogo não encontrado (pode já ter terminado).'}</EmptyPanel>;

  const marketName = (m: string) => descriptions.markets?.[m]?.name ?? MARKET_NAMES[m] ?? `Mercado ${m}`;
  const outcomeName = (m: string, variant: string, o: string) => {
    const described = descriptions.markets?.[m]?.variants?.[variant]?.[0]?.outcomes.find((x) => x.id === o)?.name;
    if (described) return described;
    // "1" / "2" (resultado, vencedor, handicap) → nome da equipa.
    if (o === '1' || o === '4' || o === '1714') return e.home;
    if (o === '3' || o === '5' || o === '1715') return e.away;
    return OUTCOME_NAMES[o] ?? o;
  };
  const share = (m: string, o: string) =>
    distribution.markets?.find((x) => String(x.market_id) === m)?.outcomes.find((x) => String(x.outcome_id) === o)?.percentage;
  const live = e.status === 'live';
  const markets = Object.entries(e.markets).sort((a, b) => marketRank(a[0]) - marketRank(b[0]));
  const stats = statRows(e.statistics);

  return (
    <>
      <Link href={live ? '/live' : '/events'} className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white">
        <ArrowLeft size={16} /> Voltar
      </Link>

      <div className="rounded-2xl border border-bet62-border bg-bet62-surface/50 p-5 md:p-6">
        <p className="text-center text-xs uppercase tracking-widest text-white/40">
          {SPORT_BY_KEY[e.sport]?.icon} {countryLabel(e.country)} · {e.league}
        </p>
        <div className="mt-3 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          <p className="text-right text-lg md:text-2xl font-black">{e.home}</p>
          <p className="font-mono text-2xl md:text-3xl font-black">{live && e.score ? `${e.score.home} - ${e.score.away}` : 'vs'}</p>
          <p className="text-lg md:text-2xl font-black">{e.away}</p>
        </div>
        <p className="mt-2 flex items-center justify-center gap-2 text-sm text-white/55">
          <Clock3 size={14} />
          {live ? <span className="font-semibold text-bet62-primary">● {e.clock || 'Ao vivo'}</span> : fmtWhen(e.startTime)}
        </p>
        {e.periods && e.periods.length > 0 && (
          <p className="mt-2 text-center text-xs text-white/45">
            Parciais: {e.periods.map((p) => `${p.home_score}-${p.away_score}`).join(' · ')}
          </p>
        )}
        {stats.length > 0 && (
          <div className="mx-auto mt-5 max-w-md space-y-2">
            {stats.map((s) => (
              <div key={s.key} className="grid grid-cols-[2rem_1fr_2rem] items-center gap-3 text-sm">
                <b className="text-right font-mono">{s.home}</b>
                <div className="text-center text-xs text-white/55">
                  {s.name}
                  <div className="mt-1 flex h-1.5 overflow-hidden rounded-full bg-white/10">
                    <span className="bg-bet62-primary" style={{ width: `${s.home + s.away ? (s.home / (s.home + s.away)) * 100 : 50}%` }} />
                  </div>
                </div>
                <b className="font-mono">{s.away}</b>
              </div>
            ))}
          </div>
        )}
      </div>

      <section className="space-y-3">
        <h2 className="text-lg font-black">
          Mercados <span className="text-sm font-normal text-white/40">{markets.length}</span>
        </h2>
        {markets.length === 0 && <EmptyPanel>Sem odds disponíveis para este jogo.</EmptyPanel>}
        <div className="grid gap-3 md:grid-cols-2">
          {markets.map(([m, variants]) => (
            <div key={m} className="space-y-2 rounded-2xl border border-bet62-border bg-bet62-surface/40 p-3">
              <p className="text-sm font-semibold">{marketName(m)}</p>
              {Object.entries(variants).map(([variant, outcomes]) => (
                <div key={variant} className="space-y-1.5">
                  {variantLabel(variant) && <p className="text-[11px] text-white/40">{variantLabel(variant)}</p>}
                  <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3">
                    {Object.entries(outcomes).map(([o, v]) => {
                      const label = outcomeName(m, variant, o);
                      const key = `${e.id}|${m}|${variant}|${o}`;
                      const selected = picks.some((p) => p.key === key);
                      const blocked = v.b === 1 || !(Number(v.k) > 1);
                      const pct = share(m, o);
                      const vl = variantLabel(variant);
                      return (
                        <button
                          key={o}
                          type="button"
                          disabled={blocked}
                          title={label}
                          onClick={() => {
                            const pick = pickOf(e, m, variant, o, vl ? `${marketName(m)} (${vl})` : marketName(m), label);
                            if (pick) toggle(pick);
                          }}
                          className={cn(
                            'flex items-center justify-between gap-2 rounded-lg border px-2.5 py-2 text-left text-sm transition',
                            selected
                              ? 'border-bet62-primary bg-bet62-primary text-white'
                              : 'border-bet62-border bg-bet62-bg/50 hover:border-bet62-primary/60',
                            blocked && 'cursor-not-allowed opacity-40',
                          )}
                        >
                          <span className={cn('min-w-0 truncate text-xs', selected ? 'text-white' : 'text-white/70')}>
                            {label}
                            {pct !== undefined && <span className="ml-1 opacity-60">{pct}%</span>}
                          </span>
                          <b className={cn('font-mono', selected ? 'text-white' : 'text-bet62-primary')}>{blocked ? '—' : v.k}</b>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default function MatchPage({ params }: { params: { matchId: string } }) {
  return (
    <SportsShell>
      <Inner id={params.matchId} />
    </SportsShell>
  );
}
