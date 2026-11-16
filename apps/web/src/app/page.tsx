'use client';

// Início = Destaques (como no outro projeto): ligas mais procuradas, ao vivo agora, criador de
// apostas, eventos em destaque e múltiplas prontas de 5 jogos.
import * as React from 'react';
import { SportsShell } from '../components/sports/SportsShell';
import {
  AccaCard,
  BuilderCard,
  Carousel,
  EmptyPanel,
  LeagueCards,
  MatchCard,
  SectionHead,
} from '../components/sports/blocks';
import { drawAccas, drawBuilders, pickHighlights, useBoard } from '../lib/board';

export default function HomePage() {
  const { events, leagues, loading, error } = useBoard();
  const live = React.useMemo(() => pickHighlights(events.filter((e) => e.status === 'live')), [events]);
  const upcoming = React.useMemo(() => pickHighlights(events.filter((e) => e.status === 'scheduled')), [events]);
  const builders = React.useMemo(() => drawBuilders(events), [events]);
  const accas = React.useMemo(() => drawAccas(events, { top: true }), [events]);

  return (
    <SportsShell>
      <LeagueCards leagues={leagues} />

      {loading && !events.length ? (
        <EmptyPanel>A carregar jogos…</EmptyPanel>
      ) : error && !events.length ? (
        <EmptyPanel>Não foi possível obter os jogos: {error}</EmptyPanel>
      ) : null}

      {live.length > 0 && (
        <section>
          <SectionHead title="Ao Vivo agora" href="/live" live />
          <Carousel>
            {live.map((e) => (
              <MatchCard key={e.id} e={e} />
            ))}
          </Carousel>
        </section>
      )}

      {builders.length > 0 && (
        <section>
          <SectionHead title="Construa o seu ganho" />
          <Carousel>
            {builders.map((b) => (
              <BuilderCard key={b.eventId} b={b} />
            ))}
          </Carousel>
        </section>
      )}

      {upcoming.length > 0 && (
        <section>
          <SectionHead title="Eventos em destaque" href="/desporto" />
          <Carousel>
            {upcoming.map((e) => (
              <MatchCard key={e.id} e={e} />
            ))}
          </Carousel>
        </section>
      )}

      {accas.length > 0 && (
        <section>
          <SectionHead title="🏆 Apostas vencedoras" />
          <Carousel>
            {accas.map((a, i) => (
              <AccaCard key={i} a={a} />
            ))}
          </Carousel>
        </section>
      )}
    </SportsShell>
  );
}
