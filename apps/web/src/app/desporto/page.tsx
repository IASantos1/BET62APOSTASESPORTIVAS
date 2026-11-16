'use client';

import { EventListPage } from '../../components/sports/EventListPage';

const all = () => true;

export default function SportsPage() {
  return (
    <EventListPage
      title="Desporto"
      subtitle="Todos os eventos pré-jogo e ao vivo com odds disponíveis."
      filter={all}
      basePath="/desporto"
      emptyText="Sem eventos disponíveis de momento."
      showLeagues
    />
  );
}
