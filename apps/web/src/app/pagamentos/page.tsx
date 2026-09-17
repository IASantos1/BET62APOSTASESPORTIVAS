'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  CreditCard,
  Banknote,
  Smartphone,
  Building2,
  BadgeDollarSign,
  ShieldCheck,
  Clock,
  Zap,
  AlertTriangle,
  Landmark,
  Wallet,
  RefreshCw,
  FileCheck2,
  Gavel,
  Info,
  MapPin as MapPinIcon,
} from 'lucide-react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Sidebar } from '../../components/layout/Sidebar';
import { Card, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { PaymentMethodLogo } from '../../components/ui/PaymentMethodLogo';
import { cn } from '../../lib/utils';

type MethodRow = {
  method: string;
  name: string;
  brand: string;
  minDep: string;
  minWd: string;
  fee: string;
  timeDep: string;
  timeWd: string;
  '3ds': boolean;
  available: string;
  bg: string;
  border: string;
};

const METHODS: MethodRow[] = [
  {
    method: 'card',
    name: 'Cartão Visa / Mastercard',
    brand: 'Stripe Checkout PCI-DSS L1',
    minDep: '€10',
    minWd: '€20',
    fee: 'Taxa 0% BET62',
    timeDep: 'Instantâneo (< 5s)',
    timeWd: '1 – 3 dias úteis',
    '3ds': true,
    available: 'Todos os países UE',
    bg: 'from-white/15 via-slate-500/5 to-transparent',
    border: 'border-white/20',
  },
  {
    method: 'mbway',
    name: 'MB WAY',
    brand: 'SIBS · Portugal exclusivo',
    minDep: '€10',
    minWd: '— (Em breve)',
    fee: 'Taxa 0%',
    timeDep: 'Instantâneo (< 30s)',
    timeWd: 'A implementar',
    '3ds': true,
    available: 'Portugal Continental e Açores',
    bg: 'from-[#009688]/15 via-[#009688]/5 to-transparent',
    border: 'border-[#009688]/40',
  },
  {
    method: 'multibanco',
    name: 'Multibanco · Referência',
    brand: 'SIBS · ATM / Homebanking',
    minDep: '€10',
    minWd: '€50',
    fee: 'Taxa 0%',
    timeDep: '5 min – 2 horas úteis',
    timeWd: '1 – 2 dias úteis',
    '3ds': false,
    available: 'Portugal Continental e Madeira',
    bg: 'from-[#0070c9]/15 via-[#0070c9]/5 to-transparent',
    border: 'border-[#0070c9]/40',
  },
  {
    method: 'sepa',
    name: 'Transferência SEPA (IBAN EUR)',
    brand: 'União Europeia · SWIFT SEPA Instant',
    minDep: '€50',
    minWd: '€20',
    fee: 'Taxa 0% (SWIFT pode cobrar 0.1%, dependendo banco)',
    timeDep: 'S2CT Instant · até 10s | Tradicional 1-2 dias úteis',
    timeWd: '1 – 2 dias úteis · SEPA',
    '3ds': false,
    available: '36 países EEA + Reino Unido + Suíça',
    bg: 'from-indigo-500/15 via-indigo-500/5 to-transparent',
    border: 'border-indigo-400/30',
  },
  {
    method: 'pix',
    name: 'Pix Brasil (BRL → EUR)',
    brand: 'BCB · Clearing instantâneo brasileiro',
    minDep: 'R$ 50 (~€10)',
    minWd: 'R$ 150 (~€30)',
    fee: 'Taxa 0% BET62 · FX spread ≈ 1.2%',
    timeDep: '< 15 segundos (24/7)',
    timeWd: 'Até 3h úteis BR · 24/7 inclusive feriados',
    '3ds': false,
    available: 'Brasil (apenas contas CPF / PJ)',
    bg: 'from-green-500/15 via-yellow-500/5 to-transparent',
    border: 'border-green-400/30',
  },
  {
    method: 'usdc',
    name: 'USDC · Polygon (Afiliados Ouro)',
    brand: 'Circle USD Coin · Stablecoin 1:1 USD',
    minDep: '$100 USD',
    minWd: '$200 USD',
    fee: 'Gás Polygon ≈ $0.01',
    timeDep: '< 30 segundos · 24/7',
    timeWd: '< 2 horas úteis · 24/7',
    '3ds': false,
    available: 'Apenas tiers Ouro e VIP · Afiliados + alto roller',
    bg: 'from-sky-500/15 via-blue-500/5 to-transparent',
    border: 'border-sky-400/30',
  },
];

const RULES = [
  { i: ShieldCheck, t: 'Método da entrada = método da saída', d: 'Levantas para o mesmo método onde depositaste (anti-Lavagem Lei 83/2017). Exceções só para IBAN SEPA titular KYC validado.' },
  { i: Gavel, t: 'Mínimo levantamento €20', d: 'Abaixo disto, taxa administrativa €2. 4 levantamentos gratuitos por mês. 5º+ : 2% (mín €2) para custear processadores.' },
  { i: Clock, t: 'Processamento horário comercial', d: 'Levantamentos aprovados 24/7 mas liquidação bancária só em dias úteis. Pedidos feitos 22h Sexta só liquidam 2ª feira manhã SEPA.' },
  { i: RefreshCw, t: 'Troca moeda', d: 'Conta é fixa EUR. BRL Pix recebe conversão em tempo real spread ~1.2%. Sem taxa adicional BET62.' },
  { i: FileCheck2, t: 'KYC obrigatório antes do 1º levantamento', d: 'BI + morada + selfie. Sem KYC completo, levantamento fica em fila "Aguardando Validação" e NÃO é processado.' },
  { i: Info, t: 'Nenhuma aposta pendente?', d: 'Podes levantar todo o saldo disponível (incluindo bónus inativo, sem rollover por cumprir). Não bloqueamos dinheiro real.' },
];

export default function PagamentosPage() {
  return (
    <div className="relative min-h-screen bg-bet62-bg overflow-hidden">
      <Header />
      <div className="flex">
        <Sidebar compact />
        <main className="flex-1 min-w-0">
          <div className="relative">
            <div className="absolute inset-0 bg-bet62-grid [background-size:48px_48px] opacity-60 pointer-events-none" />
            <div className="absolute top-0 left-1/3 w-[680px] h-[680px] bg-emerald-500/8 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute top-80 right-10 w-[620px] h-[620px] bg-bet62-accent/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '0.8s' }} />
          </div>

          <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8 py-8 space-y-12">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center gap-3 flex-wrap">
              <Link href="/" className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-bet62-border hover:border-white/20 hover:bg-white/5 text-white/70 hover:text-white text-sm transition">
                <ArrowLeft size={16} /> Voltar
              </Link>
              <Badge variant="green" className="px-3 py-1 text-xs uppercase tracking-widest">
                <Banknote size={12} /> Métodos de Pagamento · 2026
              </Badge>
              <Badge variant="outline" className="px-3 py-1 text-xs"><ShieldCheck size={12} /> Todos PCI-DSS / 3DS / PCI-CSS</Badge>
            </motion.div>

            <motion.section initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}>
              <Card className="overflow-hidden border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 via-bet62-bg to-bet62-primary/5">
                <CardContent className="p-8 md:p-12 grid md:grid-cols-[1.2fr_1fr] gap-10 items-center">
                  <div>
                    <Badge variant="green" className="mb-4 px-3 py-1 text-xs font-bold uppercase tracking-widest">
                      <Zap size={12} /> Taxa 0% BET62 · Sem surpresas
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05]">
                      Depósito e levantamento<span className="text-emerald-400"> em segundos</span>,<br className="hidden md:block" />
                      nos métodos que tu <span className="text-bet62-primary">realmente usas.</span>
                    </h1>
                    <p className="mt-5 text-white/65 text-base md:text-lg leading-relaxed max-w-2xl">
                      Desde MB WAY instantâneo em Portugal a Pix 24/7 no Brasil, passando por cartão Stripe 3DS e
                      SEPA Instant em 36 países. Processamento seguro, com fundos custodiados em contas segregadas.
                    </p>
                    <div className="mt-7 flex flex-wrap gap-3">
                      <Button asChild size="xl" variant="glow"><Link href="/carteira/deposito"><Wallet size={18} /> Ir para Depósito</Link></Button>
                      <Button asChild size="xl" variant="outline"><Link href="/carteira/levantamento">Ver Levantamentos</Link></Button>
                    </div>
                    <div className="mt-8 grid sm:grid-cols-4 gap-3">
                      {[
                        { i: Zap, t: 'Instantâneo', s: 'MB WAY / Pix / Cartão' },
                        { i: BadgeDollarSign, t: '0% Taxa BET62', s: '4 levantamentos grátis/mês' },
                        { i: ShieldCheck, t: '3DS + PCI L1', s: 'Stripe · SIBS · Circle' },
                        { i: Landmark, t: 'Fundos segregados', s: 'Contas separadas KPMG auditado' },
                      ].map((x, i) => {
                        const Icon = x.i;
                        return (
                          <motion.div key={x.t} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.1 + i * 0.05 }}>
                            <Card>
                              <CardContent className="p-4 flex items-start gap-3">
                                <div className="h-10 w-10 shrink-0 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400"><Icon size={18} /></div>
                                <div className="min-w-0">
                                  <p className="font-bold text-white text-sm">{x.t}</p>
                                  <p className="text-xs text-white/55 mt-0.5">{x.s}</p>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.15 }} className="space-y-3">
                    <Card>
                      <CardContent className="p-5 flex items-center gap-4">
                        <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0"><Building2 size={22} /></div>
                        <div className="min-w-0">
                          <p className="text-[11px] uppercase tracking-widest text-white/45 font-bold">Processadores Oficiais</p>
                          <p className="font-bold tracking-tight text-white">Stripe · SIBS / Multibanco · BCP SEPA · Itaú Pix · Circle USDC · Sumsub KYC</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="border-yellow-500/20 bg-yellow-500/5">
                      <CardContent className="p-5 flex items-start gap-4">
                        <AlertTriangle size={22} className="text-yellow-400 shrink-0 mt-0.5" />
                        <div className="min-w-0">
                          <p className="text-[11px] uppercase tracking-widest text-yellow-300 font-bold">Todas moedas → EUR (fixo)</p>
                          <p className="text-sm text-white/75 leading-relaxed">A tua conta BET62 é sempre Euro. Pix BRL → EUR com FX spread ≈1.2% transparente, sem markup oculto.</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.section>

            <section>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-5 flex items-center gap-2">
                <CreditCard size={22} className="text-bet62-primary" /> Métodos disponíveis hoje
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {METHODS.map((m, i) => (
                  <motion.article key={m.method} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}>
                    <Card className={cn('h-full overflow-hidden border bg-gradient-to-br', m.bg, m.border)}>
                      <CardContent className="p-5 space-y-5">
                        <div className="flex items-center gap-4">
                          <PaymentMethodLogo method={m.method} size="lg" />
                          <div className="min-w-0">
                            <h3 className="font-black tracking-tight text-xl text-white">{m.name}</h3>
                            <p className="text-xs text-white/55 mt-0.5">{m.brand}</p>
                          </div>
                          {m['3ds'] && (
                            <Badge variant="green" className="ml-auto shrink-0 text-[10px]"><ShieldCheck size={10} /> 3DS 2.2</Badge>
                          )}
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="rounded-2xl border border-bet62-border bg-bet62-bg/60 p-3">
                            <p className="text-[10px] uppercase tracking-widest font-bold text-white/45">Depósito Mín.</p>
                            <p className="mt-1 font-mono font-black text-white text-lg">{m.minDep}</p>
                          </div>
                          <div className="rounded-2xl border border-bet62-border bg-bet62-bg/60 p-3">
                            <p className="text-[10px] uppercase tracking-widest font-bold text-white/45">Lev. Mín.</p>
                            <p className="mt-1 font-mono font-black text-white text-lg">{m.minWd}</p>
                          </div>
                          <div className="rounded-2xl border border-bet62-border bg-bet62-bg/60 p-3 col-span-2">
                            <p className="text-[10px] uppercase tracking-widest font-bold text-white/45">Comissões BET62</p>
                            <p className="mt-1 font-bold text-sm text-white">{m.fee}</p>
                          </div>
                          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-3">
                            <p className="text-[10px] uppercase tracking-widest font-bold text-emerald-300">Tempo Depósito</p>
                            <p className="mt-1 text-xs text-white/80">{m.timeDep}</p>
                          </div>
                          <div className="rounded-2xl border border-bet62-accent/20 bg-bet62-accent/5 p-3">
                            <p className="text-[10px] uppercase tracking-widest font-bold text-bet62-accent/90">Tempo Levantamento</p>
                            <p className="mt-1 text-xs text-white/80">{m.timeWd}</p>
                          </div>
                        </div>
                        <div className="rounded-2xl border border-white/5 bg-bet62-bg/50 p-3.5">
                          <div className="flex items-start gap-2">
                            <MapPinLocal />
                            <div>
                              <p className="text-[10px] uppercase tracking-widest font-bold text-white/45">Disponibilidade Geográfica</p>
                              <p className="mt-1 text-sm text-white/75">{m.available}</p>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2.5 pt-1">
                          <Button asChild variant="primary" size="sm" className="whitespace-nowrap justify-center"><Link href="/carteira/deposito">Depositar</Link></Button>
                          <Button asChild variant="outline" size="sm" className="whitespace-nowrap justify-center"><Link href="/carteira/levantamento">Levantar</Link></Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.article>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-5 flex items-center gap-2">
                <Gavel size={22} className="text-bet62-secondary" /> Regras importantes sobre pagamentos
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {RULES.map((r, i) => {
                  const Icon = r.i;
                  return (
                    <motion.div key={r.t} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.15 + i * 0.04 }}>
                      <Card className="h-full">
                        <CardContent className="p-5 flex items-start gap-4">
                          <div className="h-11 w-11 shrink-0 rounded-xl bg-bet62-gradient/15 border border-bet62-border flex items-center justify-center text-bet62-primary mt-0.5"><Icon size={20} /></div>
                          <div>
                            <h3 className="font-bold tracking-tight text-white mb-1">{r.t}</h3>
                            <p className="text-sm text-white/65 leading-relaxed">{r.d}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </section>

            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.55 }}>
              <Card className="border-bet62-primary/30 bg-bet62-primary/5">
                <CardContent className="p-8 md:p-10 grid md:grid-cols-[1fr_auto] gap-6 items-center">
                  <div className="flex items-start gap-4">
                    <Smartphone size={26} className="text-bet62-primary shrink-0 mt-0.5" />
                    <div>
                      <Badge variant="blue" className="mb-3">MB WAY e outros métodos nativos</Badge>
                      <h3 className="text-2xl md:text-3xl font-black tracking-tight">
                        Falta um método que usas? MB NET, PaySafecard, Apple Pay...
                      </h3>
                      <p className="mt-3 text-sm md:text-base text-white/65 leading-relaxed max-w-3xl">
                        Diz-nos qual. A roadmap de pagamentos é definida pelos votos dos jogadores. Envia sugestão via
                        ticket pagamento, se reunirmos 250 votos adicionamos em menos de 60 dias.
                      </p>
                    </div>
                  </div>
                  <Button asChild size="xl" variant="primary" className="whitespace-nowrap md:justify-self-end">
                    <Link href="/contacto?dept=pagamentos">Sugerir Método</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.section>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}

function MapPinLocal() {
  return <MapPinIcon size={16} className="text-bet62-secondary shrink-0 mt-0.5" />;
}
