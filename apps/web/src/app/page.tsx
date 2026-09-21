import Link from 'next/link';
import {
  Dices,
  Gift,
  ShieldCheck,
  Sparkles,
  Wallet,
  ArrowRight,
} from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Sidebar } from '../components/layout/Sidebar';
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';

const FEATURES = [
  {
    title: 'Cassino',
    description: 'Acesso rápido aos jogos, provedores e campanhas ativas da plataforma.',
    href: '/casino',
    icon: Dices,
  },
  {
    title: 'Promoções',
    description: 'Campanhas de aquisição, recarga, cashback e jornadas de retenção.',
    href: '/promocoes',
    icon: Gift,
  },
  {
    title: 'Carteira',
    description: 'Fluxos de depósito, levantamento e gestão operacional de pagamentos.',
    href: '/carteira',
    icon: Wallet,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-bet62-bg">
      <Header />
      <div className="flex">
        <Sidebar compact />
        <main className="flex-1 min-w-0">
          <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8 py-8 space-y-8">
            <section className="rounded-3xl border border-bet62-border bg-bet62-glass backdrop-blur-xl p-8 md:p-10 overflow-hidden relative">
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-bet62-primary/15 blur-3xl" />
              <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)] items-center">
                <div className="space-y-5">
                  <Badge variant="green" className="uppercase tracking-widest text-[10px] px-3 py-1">
                    <Sparkles size={12} className="mr-1" />
                    Plataforma simplificada
                  </Badge>
                  <div className="space-y-3">
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.02]">
                      BET62 focada em
                      <span className="block text-bet62-primary">casino, pagamentos e conta</span>
                    </h1>
                    <p className="max-w-2xl text-white/65 text-base md:text-lg leading-relaxed">
                      As integrações de APIs esportivas foram removidas deste workspace.
                      A navegação principal agora privilegia os módulos estáveis da plataforma.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="glow" size="xl" asChild>
                      <Link href="/casino">
                        Ir para Cassino
                        <ArrowRight size={16} />
                      </Link>
                    </Button>
                    <Button variant="outline" size="xl" asChild>
                      <Link href="/promocoes">Ver Promoções</Link>
                    </Button>
                  </div>
                </div>

                <Card glow="primary">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-11 w-11 rounded-2xl bg-bet62-primary/15 border border-bet62-primary/30 inline-flex items-center justify-center">
                        <ShieldCheck size={20} className="text-bet62-primary" />
                      </div>
                      <div>
                        <p className="font-bold">Operação atual</p>
                        <p className="text-sm text-white/55">Sem dependência de feeds esportivos externos</p>
                      </div>
                    </div>
                    <div className="grid gap-3">
                      <div className="rounded-2xl border border-bet62-border bg-bet62-surface/50 p-4">
                        <p className="text-xs uppercase tracking-widest text-white/40">Frontoffice</p>
                        <p className="mt-1 font-semibold">Home, cassino, promoções e jornadas de carteira</p>
                      </div>
                      <div className="rounded-2xl border border-bet62-border bg-bet62-surface/50 p-4">
                        <p className="text-xs uppercase tracking-widest text-white/40">Backoffice</p>
                        <p className="mt-1 font-semibold">Auth, user, kyc, wallet, bonus, casino e admin</p>
                      </div>
                      <div className="rounded-2xl border border-bet62-border bg-bet62-surface/50 p-4">
                        <p className="text-xs uppercase tracking-widest text-white/40">Infra</p>
                        <p className="mt-1 font-semibold">Gateway e scripts sem o microserviço de odds</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="grid gap-4 md:grid-cols-3">
              {FEATURES.map((feature) => (
                <Card key={feature.title} className="h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="h-12 w-12 rounded-2xl bg-bet62-primary/10 border border-bet62-primary/20 inline-flex items-center justify-center mb-4">
                      <feature.icon size={22} className="text-bet62-primary" />
                    </div>
                    <h2 className="text-xl font-bold">{feature.title}</h2>
                    <p className="mt-2 text-sm text-white/60 flex-1">{feature.description}</p>
                    <Button variant="ghost" className="mt-5 justify-start px-0" asChild>
                      <Link href={feature.href}>
                        Abrir módulo
                        <ArrowRight size={15} />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </section>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
