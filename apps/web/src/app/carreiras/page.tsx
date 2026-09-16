'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Briefcase,
  Users,
  Rocket,
  MapPin,
  Clock,
  Euro,
  Zap,
  Globe,
  Coffee,
  Award,
  HeartHandshake,
  CheckCircle2,
  Star,
} from 'lucide-react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Sidebar } from '../../components/layout/Sidebar';
import { Card, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

const PERKS = [
  { icon: Euro, title: 'Salário competitivo', sub: '14º + bonus performance + stock options para sênior' },
  { icon: Coffee, title: 'Híbrido flexível', sub: '3 dias escritório / 2 home ou 100% remoto (tu decides)' },
  { icon: Clock, title: 'Horário descontraído', sub: 'Core 10h–17h, resto ajusta-te ao teu melhor desempenho' },
  { icon: Zap, title: 'Orçamento formação', sub: '€1.500 / ano em cursos, conferências e livros técnicos' },
  { icon: Globe, title: 'Remote work EU', sub: 'Até 60 dias / ano a trabalhar de qualquer país da União Europeia' },
  { icon: Award, title: 'Escalão rápido', sub: 'Reviews trimestrais + plano de carreira transparente em 8 níveis' },
];

const OPENINGS = [
  {
    id: 'fullstack-3',
    title: 'Full-Stack Engineer Sênior (Next 14 + NestJS)',
    team: 'Engenharia Plataforma',
    type: 'Full-time · Remoto (UE)',
    level: 'L4 – L5',
    location: 'Lisboa / Porto / Remoto UE',
    range: '€38k – €55k + bonus 20%',
    tags: ['Next.js 14', 'NestJS 11', 'Postgres 17', 'Prisma', 'Redis', 'WebSockets', 'Microservices 12x'],
  },
  {
    id: 'odds-product',
    title: 'Odds Trader / Product Manager Desportivo',
    team: 'Mercados & Odds',
    type: 'Full-time · Híbrido',
    level: 'L3 – L4',
    location: 'Lisboa · Parque das Nações',
    range: '€28k – €38k + bónus trimestral',
    tags: ['Futebol', 'Odds Compilator', 'Excel avançado', 'Estatística', 'GOAL API / PropLine'],
  },
  {
    id: 'crm',
    title: 'CRM & Retention Manager (Português)',
    team: 'Crescimento',
    type: 'Full-time · Lisboa',
    level: 'L3',
    location: 'Lisboa · Parque das Nações',
    range: '€22k – €30k + bonus retenção',
    tags: ['Braze', 'Klaviyo', 'Segment', 'Cohort analysis', 'SMS / Push / Email'],
  },
  {
    id: 'cs-lead',
    title: 'Team Lead · Customer Support 24/7',
    team: 'Operações',
    type: 'Full-time · Turnos',
    level: 'L2 – L3',
    location: 'Braga · Centro',
    range: '€18k – €24k + prémios NPS',
    tags: ['Zendesk', 'Chat 24/7', 'Português nativo', 'KPIs CSAT / FRT', 'Gestão 8-12 pessoas'],
  },
  {
    id: 'antifraud',
    title: 'Anti-Fraud & KYC Analyst',
    team: 'Risco & Compliance',
    type: 'Full-time · Remoto',
    level: 'L3',
    location: 'Remoto (Portugal)',
    range: '€20k – €28k',
    tags: ['Sumsub', 'Onfido', 'SEON', 'AML5', 'Jogador responsável', 'MGA'],
  },
  {
    id: 'growth-dsg',
    title: 'Growth Designer (Figma · Motion)',
    team: 'Design & Marca',
    type: 'Full-time · Remoto UE',
    level: 'L3 – L4',
    location: 'Remoto UE',
    range: '€24k – €36k + options',
    tags: ['Figma', 'Framer Motion', 'Lottie', 'Design System', 'A/B Testes'],
  },
];

export default function CarreirasPage() {
  return (
    <div className="relative min-h-screen bg-bet62-bg overflow-hidden">
      <Header />
      <div className="flex">
        <Sidebar compact />
        <main className="flex-1 min-w-0">
          <div className="relative">
            <div className="absolute inset-0 bg-bet62-grid [background-size:48px_48px] opacity-60 pointer-events-none" />
            <div className="absolute top-0 left-1/3 w-[620px] h-[620px] bg-emerald-500/8 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute top-60 right-10 w-[620px] h-[620px] bg-bet62-accent/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '0.8s' }} />
          </div>

          <div className="relative max-w-[1300px] mx-auto px-4 lg:px-8 py-8 space-y-14">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center gap-3">
              <Link href="/" className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-bet62-border hover:border-white/20 hover:bg-white/5 text-white/70 hover:text-white text-sm transition">
                <ArrowLeft size={16} /> Voltar
              </Link>
              <Badge variant="green" className="px-3 py-1 text-xs uppercase tracking-widest">Carreiras · Junte-se à equipa</Badge>
            </motion.div>

            <motion.section initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }} className="text-center max-w-4xl mx-auto">
              <Badge variant="pink" className="mb-4 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                <Star size={12} /> 4.7 / 5 no Glassdoor (beta)
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
                Vamos construir a <span className="text-emerald-400">melhor plataforma</span><br className="hidden md:block" />
                de apostas da Europa. <span className="text-bet62-secondary">Sem bosses, só missionários.</span>
              </h1>
              <p className="mt-6 text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Somos 35 pessoas distribuídas por 6 países. O nosso produto serve jogadores em 28 línguas.
                Valorizamos entrega, humildade e curiosidade — independentemente do teu CV.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button asChild size="xl" variant="glow"><a href="#abertas">Ver Vagas Abertas</a></Button>
                <Button asChild size="xl" variant="outline"><Link href="/contacto">Candidatura Espontânea</Link></Button>
              </div>
              <div className="mt-10 flex flex-wrap gap-3 justify-center">
                {[
                  { i: Users, l: 'Equipa 35+' },
                  { i: HeartHandshake, l: '9 nacionalidades' },
                  { i: Rocket, l: 'Triplicamos em 2025' },
                  { i: MapPin, l: 'Escritórios LX / Braga' },
                ].map((x) => {
                  const Icon = x.i;
                  return (
                    <Badge key={x.l} variant="outline" className="px-3.5 py-1.5 text-xs">
                      <Icon size={12} /> {x.l}
                    </Badge>
                  );
                })}
              </div>
            </motion.section>

            <section>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-5">Porquê a BET62?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {PERKS.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <motion.div key={p.title} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.1 + i * 0.05 }}>
                      <Card className="h-full">
                        <CardContent className="p-5 flex items-start gap-4">
                          <div className="shrink-0 h-11 w-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                            <Icon size={20} />
                          </div>
                          <div>
                            <h3 className="font-bold tracking-tight text-white mb-1">{p.title}</h3>
                            <p className="text-sm text-white/60 leading-relaxed">{p.sub}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </section>

            <section id="abertas">
              <div className="flex items-end justify-between mb-5">
                <h2 className="text-2xl md:text-3xl font-black tracking-tight flex items-center gap-2">
                  <Briefcase size={22} className="text-bet62-primary" /> Vagas Abertas
                </h2>
                <Badge variant="blue" className="text-xs">{OPENINGS.length} posições · hiring ASAP</Badge>
              </div>
              <div className="space-y-3">
                {OPENINGS.map((j, i) => (
                  <motion.article key={j.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 + i * 0.04 }}>
                    <Card className="group hover:border-emerald-400/40 transition">
                      <CardContent className="p-5 md:p-6 grid md:grid-cols-[1fr_auto] gap-5">
                        <div className="space-y-3 min-w-0">
                          <div className="flex flex-wrap gap-2 items-center">
                            <Badge variant="green" className="uppercase text-[10px]">{j.team}</Badge>
                            <Badge variant="outline" className="text-[11px]"><Briefcase size={11} /> {j.type}</Badge>
                            <Badge variant="outline" className="text-[11px]"><Star size={11} /> {j.level}</Badge>
                          </div>
                          <h3 className="text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-bet62-primary transition">{j.title}</h3>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/55">
                            <span className="inline-flex items-center gap-1.5"><MapPin size={12} /> {j.location}</span>
                            <span className="inline-flex items-center gap-1.5"><Euro size={12} /> {j.range}</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {j.tags.map((t) => (
                              <code key={t} className="px-2 py-0.5 rounded-md bg-bet62-surface/60 border border-bet62-border text-[11px] font-mono text-white/70">
                                {t}
                              </code>
                            ))}
                          </div>
                        </div>
                        <div className="flex md:flex-col gap-2 md:justify-end md:items-stretch items-stretch">
                          <Button variant="primary" size="lg" className="whitespace-nowrap">Candidatar-me</Button>
                          <Button variant="outline" size="sm" className="whitespace-nowrap"><CheckCircle2 size={14} /> Descrição</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.article>
                ))}
              </div>
            </section>

            <motion.section initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.5 }}>
              <Card className="border-bet62-primary/30 bg-gradient-to-br from-bet62-primary/5 via-bet62-bg to-bet62-accent/5">
                <CardContent className="p-8 md:p-10 grid md:grid-cols-[1.2fr_auto] gap-5 items-center">
                  <div>
                    <Badge variant="pink" className="mb-3">Candidatura espontânea</Badge>
                    <h3 className="text-2xl md:text-3xl font-black tracking-tight">
                      Não há a vaga perfeita para ti? Envia-nos na mesma.
                    </h3>
                    <p className="mt-3 text-sm md:text-base text-white/65 leading-relaxed max-w-2xl">
                      Muitas das nossas melhores contratações foram criadas em volta da pessoa, não do job description.
                      Conta-nos o que tu sabes fazer melhor, um projecto open-source ou portfolio, e o impacto que queres ter cá.
                    </p>
                  </div>
                  <Button asChild size="xl" variant="glow" className="whitespace-nowrap md:justify-self-end">
                    <a href="mailto:jobs@bet62.example?subject=Candidatura%20Espont%C3%A2nea%20BET62">jobs@bet62.example</a>
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
