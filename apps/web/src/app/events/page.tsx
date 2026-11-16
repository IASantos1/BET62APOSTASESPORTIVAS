'use client';

import { EventListPage } from '../../components/sports/EventListPage';
import type { BoardEvent } from '../../lib/board';

const isUpcoming = (e: BoardEvent) => e.status === 'scheduled';

export default function EventsPage() {
  return (
    <EventListPage
      title="Próximos jogos"
      subtitle="Pré-jogo por liga."
      filter={isUpcoming}
      basePath="/events"
      emptyText="Sem jogos próximos de momento."
      showLeagues
    />
  );
}
