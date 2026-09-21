import Link from 'next/link';
import { CalendarX } from 'lucide-react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-bet62-bg">
      <Header />
      <main className="max-w-4xl mx-auto px-4 lg:px-8 py-16">
        <Card>
          <CardContent className="p-8 md:p-10 text-center">
            <div className="mx-auto h-16 w-16 rounded-3xl border border-bet62-border bg-bet62-primary/10 inline-flex items-center justify-center">
              <CalendarX size={28} className="text-bet62-primary" />
            </div>
            <h1 className="mt-6 text-3xl md:text-4xl font-black tracking-tight">
              Agenda esportiva removida
            </h1>
            <p className="mt-3 text-white/65 max-w-2xl mx-auto">
              Os próximos eventos e mercados dependiam das APIs esportivas que foram descontinuadas neste projeto.
            </p>
            <div className="mt-8">
              <Button variant="glow" asChild>
                <Link href="/">Voltar à página inicial</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
