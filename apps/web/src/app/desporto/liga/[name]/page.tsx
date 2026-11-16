'use client';

// Uma liga (do menu lateral ou dos cartões): ao vivo primeiro, depois os próximos jogos.
import Link from 'next/link';
import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import { SportsShell } from '../../../../components/sports/SportsShell';
import { CompetitionGroups, EmptyPanel, SectionHead } from '../../../../components/sports/blocks';
import { useBoard } from '../../../../lib/board';
import { SPORT_BY_KEY, countryLabel, type SportKey } from '../../../../lib/sports/catalog';

function Inner({ name }: { name: string }) {
  const { events, loading } = useBoard();
  const sport = useSearchParams().get('sport') as SportKey | null;
  const list = events.filter((e) => e.competition === name && (!sport || e.sport === sport));
  const first = list[0];
  const live = list.filter((e) => e.status === 'live');
  const next = list.filter((e) => e.status !== 'live');
  return (
    <>
      <div>
        <h1 className="text-2xl md:text-3xl font-black tracking-tight">{first?.league ?? name.replace(/^[^.]+\.\s+/, '')}</h1>
        <p className="mt-1 text-sm text-white/55">
          {first ? `${countryLabel(first.country)} · ${SPORT_BY_KEY[first.sport].name}` : sport ? SPORT_BY_KEY[sport]?.name : ''} · jogos ao vivo e próximos.
        </p>
      </div>
      <Link href="/desporto" className="inline-block rounded-full border border-bet62-border px-3 py-1.5 text-xs text-white/70 hover:text-white">
        ‹ Todo o desporto
      </Link>
      {loading && !events.length ? (
        <EmptyPanel>A carregar…</EmptyPanel>
      ) : !list.length ? (
        <EmptyPanel>Sem jogos desta liga com odds de momento.</EmptyPanel>
      ) : (
        <>
          {live.length > 0 && (
            <section>
              <SectionHead title="Ao vivo" live />
              <CompetitionGroups events={live} />
            </section>
          )}
          {next.length > 0 && (
            <section>
              <SectionHead title="Próximos jogos" />
              <CompetitionGroups events={next} />
            </section>
          )}
        </>
      )}
    </>
  );
}

export default function LeaguePage({ params }: { params: { name: string } }) {
  return (
    <SportsShell>
      <React.Suspense fallback={<EmptyPanel>A carregar…</EmptyPanel>}>
        <Inner name={decodeURIComponent(params.name)} />
      </React.Suspense>
    </SportsShell>
  );
}
