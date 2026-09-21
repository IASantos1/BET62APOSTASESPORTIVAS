import Link from 'next/link';
import { ArrowLeft, Ban } from 'lucide-react';
import { Header } from '../../../../components/layout/Header';
import { Footer } from '../../../../components/layout/Footer';
import { Card, CardContent } from '../../../../components/ui/Card';
import { Button } from '../../../../components/ui/Button';

interface LiveMatchPageProps {
  params: { matchId: string };
}

export default function LiveMatchPage({ params }: LiveMatchPageProps) {
  return (
    <div className="min-h-screen bg-bet62-bg">
      <Header />
      <main className="max-w-4xl mx-auto px-4 lg:px-8 py-16">
        <Card>
          <CardContent className="p-8 md:p-10">
            <div className="h-14 w-14 rounded-3xl border border-bet62-border bg-bet62-primary/10 inline-flex items-center justify-center">
              <Ban size={24} className="text-bet62-primary" />
            </div>
            <h1 className="mt-6 text-3xl font-black tracking-tight">
              Detalhe de evento indisponível
            </h1>
            <p className="mt-3 text-white/65 leading-relaxed">
              O identificador <span className="font-mono text-white/85">{params.matchId}</span> já não pode ser resolvido,
              porque o feed esportivo e os endpoints de odds foram removidos do projeto.
            </p>
            <div className="mt-8">
              <Button variant="outline" asChild>
                <Link href="/live">
                  <ArrowLeft size={16} />
                  Voltar
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
