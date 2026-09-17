'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Megaphone,
  Newspaper,
  Download,
  Mail,
  CalendarDays,
  Award,
  Users,
  BadgeDollarSign,
  Volume2,
  CheckCircle2,
  MessageSquare,
} from 'lucide-react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Sidebar } from '../../components/layout/Sidebar';
import { Card, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

const PRESS_KIT = [
  { icon: Newspaper, title: 'Press Release (PT)', desc: 'Comunicado de lançamento v2.0, Novembro 2024', ext: 'PDF · 1.2 MB' },
  { icon: Award, title: 'Brandbook Oficial', desc: 'Logótipos, cores, tipografia e guia de estilo', ext: 'ZIP · 18 MB' },
  { icon: Megaphone, title: 'Media Assets', desc: 'Screenshots app/web, banners sociais e hero visual', ext: 'ZIP · 48 MB' },
  { icon: BadgeDollarSign, title: 'Fact Sheet 2026', desc: 'KPIs, mercados, desportos e crescimento', ext: 'PDF · 780 KB' },
];

const PRESS_CONTACTS = [
  { icon: MessageSquare, label: 'Comunicação Social', value: 'press@bet62.example', sub: 'Resposta média: 2h úteis' },
  { icon: Mail, label: 'Parcerias Comerciais', value: 'partners@bet62.example', sub: 'Eventos, patrocinios e campanhas' },
  { icon: Users, label: 'Relações Públicas', value: 'pr@bet62.example', sub: 'Entrevistas e participação em media' },
];

const NEWS = [
  {
    date: '2026-01-15',
    tag: 'LANÇAMENTO',
    color: 'pink' as const,
    title: 'BET62 lança experiência Futebol ao vivo com dados da GOAL API',
    desc: 'Mercados ao vivo para 18 ligas top europeias com latência inferior a 3 segundos, placar automático e cash-out parcial.',
  },
  {
    date: '2025-11-02',
    tag: 'CRESCIMENTO',
    color: 'green' as const,
    title: 'Plataforma atinge 120.000 jogadores registados em 9 meses',
    desc: 'Taxa de retenção mês 12 acima da média do setor graças a bónus transparentes e atendimento 24/7 humano.',
  },
  {
    date: '2025-08-20',
    tag: 'PARCERIA',
    color: 'blue' as const,
    title: 'Integração oficial com PropLine abre 20+ modalidades esportivas',
    desc: 'Basquetebol, Ténis, MMA, eSports CS2, League of Legends, NFL, F1, entre outros, agora disponíveis.',
  },
  {
    date: '2025-05-04',
    tag: 'REGULAÇÃO',
    color: 'outline' as const,
    title: 'BET62 completa auditoria KPMG de fundos segregados para jogadores',
    desc: 'Relatório confirma custódia de 100% dos depósitos em contas separadas de exploração.',
  },
];

export default function ImprensaPage() {
  return (
    <div className="relative min-h-screen bg-bet62-bg overflow-hidden">
      <Header />
      <div className="flex">
        <Sidebar compact />
        <main className="flex-1 min-w-0">
          <div className="relative">
            <div className="absolute inset-0 bg-bet62-grid [background-size:48px_48px] opacity-60 pointer-events-none" />
            <div className="absolute top-0 right-10 w-[620px] h-[620px] bg-fuchsia-500/8 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute top-60 left-10 w-[620px] h-[620px] bg-bet62-primary/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '0.8s' }} />
          </div>

          <div className="relative max-w-[1300px] mx-auto px-4 lg:px-8 py-8 space-y-14">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center gap-3">
              <Link href="/" className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-bet62-border hover:border-white/20 hover:bg-white/5 text-white/70 hover:text-white text-sm transition">
                <ArrowLeft size={16} /> Voltar
              </Link>
              <Badge variant="outline" className="px-3 py-1 text-xs uppercase tracking-widest">Imprensa & Media</Badge>
            </motion.div>

            <motion.section initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}>
              <Card className="overflow-hidden bg-gradient-to-br from-bet62-surface via-bet62-bg to-bet62-surface-2">
                <CardContent className="p-8 md:p-12 grid md:grid-cols-[1.3fr_1fr] gap-8 items-center">
                  <div>
                    <Badge variant="pink" className="mb-4 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                      <Volume2 size={12} /> Sala de Imprensa BET62
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05]">
                      Tudo o que precisas para <span className="text-bet62-primary">falar sobre a BET62.</span>
                    </h1>
                    <p className="mt-5 text-white/65 text-base md:text-lg leading-relaxed max-w-xl">
                      Contactos de imprensa, brandbook oficial, press releases, media assets e fact-sheets 2026.
                      Fazemos o possível para responder dentro de 2 horas úteis.
                    </p>
                    <div className="mt-7 flex flex-wrap gap-3">
                      <Button size="lg" variant="glow"><Download size={16} /> Baixar Press Kit</Button>
                      <Button asChild size="lg" variant="outline"><Link href="/contacto">Contactar Imprensa</Link></Button>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {PRESS_CONTACTS.map((c, i) => {
                      const Icon = c.icon;
                      return (
                        <motion.div key={c.value} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}>
                          <Card>
                            <CardContent className="p-4 flex items-center gap-3">
                              <div className="shrink-0 h-11 w-11 rounded-xl bg-bet62-primary/10 border border-bet62-primary/20 flex items-center justify-center text-bet62-primary">
                                <Icon size={18} />
                              </div>
                              <div className="min-w-0">
                                <p className="text-[11px] uppercase tracking-widest text-white/45 font-bold">{c.label}</p>
                                <p className="font-mono font-bold text-white truncate">{c.value}</p>
                                <p className="text-xs text-white/50">{c.sub}</p>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            <section>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-5">Press Kit Oficial</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {PRESS_KIT.map((k, i) => {
                  const Icon = k.icon;
                  return (
                    <motion.div key={k.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}>
                      <Card className="h-full group hover:border-bet62-primary/40 transition">
                        <CardContent className="p-5 space-y-3">
                          <div className="h-12 w-12 rounded-2xl bg-bet62-gradient/15 border border-bet62-border flex items-center justify-center text-bet62-primary">
                            <Icon size={22} />
                          </div>
                          <div>
                            <h3 className="font-bold tracking-tight text-white">{k.title}</h3>
                            <p className="text-xs text-white/55 mt-1">{k.desc}</p>
                          </div>
                          <div className="flex items-center justify-between pt-1">
                            <span className="font-mono text-[11px] text-white/40">{k.ext}</span>
                            <Button size="sm" variant="outline" className="group-hover:border-bet62-primary/40 group-hover:text-bet62-primary transition">
                              <Download size={14} /> Baixar
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-5 flex items-center gap-2">
                <Newspaper size={22} className="text-bet62-secondary" /> Últimas notícias
              </h2>
              <div className="space-y-3">
                {NEWS.map((n, i) => (
                  <motion.article key={n.title} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.15 + i * 0.05 }}>
                    <Card className="hover:border-white/20 transition">
                      <CardContent className="p-5 md:p-6 grid md:grid-cols-[auto_1fr_auto] gap-4 md:gap-6 items-start">
                        <div className="flex md:flex-col items-start md:items-center md:w-24 gap-3 md:gap-1">
                          <div className="h-12 w-12 md:h-16 md:w-16 rounded-2xl bg-bet62-gradient/10 border border-bet62-border flex items-center justify-center text-bet62-primary shrink-0">
                            <CalendarDays size={20} />
                          </div>
                          <div>
                            <p className="font-mono text-[11px] text-white/45">{n.date}</p>
                            <Badge variant={n.color} className="mt-1 uppercase text-[10px]">{n.tag}</Badge>
                          </div>
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-lg md:text-xl font-bold tracking-tight text-white">{n.title}</h3>
                          <p className="mt-1.5 text-sm text-white/60 leading-relaxed">{n.desc}</p>
                        </div>
                        <Button variant="outline" size="sm" className="self-center hidden md:inline-flex">Ler notícia</Button>
                      </CardContent>
                    </Card>
                  </motion.article>
                ))}
              </div>
            </section>

            <motion.section initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.5 }}>
              <Card className="border-emerald-500/20 bg-emerald-500/5">
                <CardContent className="p-6 md:p-8 grid md:grid-cols-[1fr_auto] gap-5 items-center">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 size={22} className="text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold tracking-tight text-white">És jornalista, blogueiro ou influencer?</h3>
                      <p className="mt-1 text-sm text-white/65 leading-relaxed">
                        Temos conta beta especial com banca teste para análises independentes, estatísticas detalhadas
                        e acesso exclusivo à equipa de produto. Escreve-nos com o teu órgão e link portfolio.
                      </p>
                    </div>
                  </div>
                  <Button asChild variant="primary" size="lg"><a href="mailto:press@bet62.example">press@bet62.example</a></Button>
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
