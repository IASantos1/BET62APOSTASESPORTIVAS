'use client';

import { EventListPage } from '../../components/sports/EventListPage';

const all = () => true;

export default function SportsPage() {
  return (
    <EventListPage
      title="Desporto"
      filter={all}
      basePath="/desporto"
      emptyText="Sem eventos disponíveis de momento."
      showLeagues
    />
  );
}
