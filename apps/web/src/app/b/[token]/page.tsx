'use client';

// Bilhete partilhado (link público): só o bilhete; as seleções ainda por jogar podem ser copiadas
// para o boletim de quem o abre.
import * as React from 'react';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';
import { Header } from '../../../components/layout/Header';
import { Footer } from '../../../components/layout/Footer';
import { TicketCard, type TicketData } from '../../../components/account/Ticket';
import { pickOf, useBoard, type BetPick } from '../../../lib/board';
import { useSlip } from '../../../stores/slip.store';

export default function SharedTicketPage({ params }: { params: { token: string } }) {
  const [ticket, setTicket] = React.useState<TicketData | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const { events } = useBoard();
  const addMany = useSlip((s) => s.addMany);
  const [copied, setCopied] = React.useState(false);
  React.useEffect(() => {
    fetch(`/api/shared-bets/${encodeURIComponent(params.token)}`)
      .then((r) => r.json().then((j) => (r.ok ? setTicket(j.ticket) : setError(j.error || 'Bilhete indisponível.'))))
      .catch(() => setError('Sem ligação.'));
  }, [params.token]);
  // Seleções ainda por jogar e com a odd aberta agora: podem ir para o boletim (à odd atual).
  const copyable: BetPick[] = (ticket?.legs ?? []).flatMap((l) => {
    const e = events.find((x) => x.id === l.eventId);
    if (!e || l.status !== 'open') return [];
    const p = pickOf(e, l.marketId, l.variant, l.outcomeId, l.market, l.outcome);
    return p ? [p] : [];
  });
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-lg space-y-4 px-3 py-6 sm:px-4">
        <h1 className="text-2xl font-black">🎟️ Bilhete partilhado</h1>
        {error ? (
          <p className="rounded-2xl border border-bet62-border bg-bet62-surface p-5 text-sm text-white/70">{error}</p>
        ) : !ticket ? (
          <div className="grid place-items-center py-16 text-white/60"><Loader2 className="animate-spin" /></div>
        ) : (
          <>
            <TicketCard b={ticket} shared />
            <div className="flex flex-wrap gap-2">
              {copyable.length > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    addMany(copyable);
                    setCopied(true);
                  }}
                  className="rounded-xl bg-bet62-primary px-4 py-2.5 text-sm font-bold text-onbrand"
                >
                  {copied
                    ? 'Copiado para o boletim'
                    : `Copiar ${copyable.length === ticket.legs.length ? 'as apostas' : `${copyable.length} ${copyable.length === 1 ? 'seleção' : 'seleções'} em aberto`} para o boletim`}
                </button>
              )}
              <Link href="/desporto" className="rounded-xl border border-bet62-border px-4 py-2.5 text-sm font-bold hover:bg-white/5">
                Ver jogos
              </Link>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
