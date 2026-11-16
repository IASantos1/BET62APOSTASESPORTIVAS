'use client';

// Desporto, Ao Vivo e Próximos: filtro por desporto (mosaicos), ligas mais procuradas e os jogos
// agrupados por liga, 8 ligas de cada vez (como no outro projeto) para a página não pesar.
import * as React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { RefreshCw } from 'lucide-react';
import { SportsShell } from './SportsShell';
import { CompetitionGroups, EmptyPanel, LeagueCards, SportTiles } from './blocks';
import { useBoard, type BoardEvent } from '../../lib/board';

const BLOCK = 8;

interface Props {
  title: string;
  subtitle: string;
  filter: (e: BoardEvent) => boolean;
  basePath: string;
  emptyText: string;
  showLeagues?: boolean;
}

function Inner({ title, subtitle, filter, basePath, emptyText, showLeagues }: Props) {
  const { events, leagues, loading, error, updatedAt, reload } = useBoard();
  const router = useRouter();
  const sport = useSearchParams().get('sport') ?? '';
  const [shown, setShown] = React.useState(BLOCK);
  React.useEffect(() => setShown(BLOCK), [sport]);
  const all = React.useMemo(() => events.filter(filter), [events, filter]);
  const list = sport ? all.filter((e) => e.sport === sport) : all;
  const blocks = new Set(list.map((e) => `${e.sport}|${e.competition}`)).size;

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl md:text-3xl font-black tracking-tight">{title}</h1>
          <p className="mt-1 text-sm text-white/55">
            {subtitle}
            {updatedAt && <span className="text-white/35"> · atualizado às {updatedAt.toLocaleTimeString('pt-PT')}</span>}
          </p>
        </div>
        <button onClick={reload} className="flex items-center gap-2 rounded-xl border border-bet62-border px-3 py-2 text-sm text-white/70 hover:text-white">
          <RefreshCw size={14} /> Atualizar
        </button>
      </div>

      <SportTiles events={all} active={sport} onPick={(s) => router.replace(s ? `${basePath}?sport=${s}` : basePath, { scroll: false })} />
      {showLeagues && <LeagueCards leagues={leagues} sport={sport} />}

      {loading && !events.length ? (
        <EmptyPanel>A carregar jogos…</EmptyPanel>
      ) : error && !events.length ? (
        <EmptyPanel>Não foi possível obter os jogos: {error}</EmptyPanel>
      ) : list.length === 0 ? (
        <EmptyPanel>{emptyText}</EmptyPanel>
      ) : (
        <>
          <CompetitionGroups events={list} limit={shown} />
          {blocks > shown && (
            <button
              onClick={() => setShown((n) => n + BLOCK)}
              className="w-full rounded-xl border border-bet62-border py-3 text-sm text-white/70 hover:text-white"
            >
              Ver mais ligas ({blocks - shown})
            </button>
          )}
        </>
      )}
    </>
  );
}

export function EventListPage(props: Props) {
  return (
    <SportsShell>
      <React.Suspense fallback={<EmptyPanel>A carregar…</EmptyPanel>}>
        <Inner {...props} />
      </React.Suspense>
    </SportsShell>
  );
}
