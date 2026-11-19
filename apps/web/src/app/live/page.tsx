'use client';

import { EventListPage } from '../../components/sports/EventListPage';
import type { BoardEvent } from '../../lib/board';

const isLive = (e: BoardEvent) => e.status === 'live';

export default function LivePage() {
  return (
    <EventListPage
      title="Ao Vivo"
      filter={isLive}
      basePath="/live"
      emptyText="Não há jogos ao vivo neste momento."
    />
  );
}
