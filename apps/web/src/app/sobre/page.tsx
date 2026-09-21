'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Trophy,
  ShieldCheck,
  Users,
  Globe2,
  Banknote,
  Clock,
  ArrowLeft,
  HeartHandshake,
  Target,
  Rocket,
  Zap,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Sidebar } from '../../components/layout/Sidebar';
import { Card, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

const STATS = [
  { icon: Users, label: '+120.000', sub: 'Jogadores registados' },
  { icon: Banknote, label: '€ 120M+', sub: 'Pagamentos processados' },
  { icon: Globe2, label: '20+', sub: 'Desportos ao vivo' },
  { icon: Trophy, label: '1.800+', sub: 'Eventos semanais' },
  { icon: Zap, label: '< 10s', sub: 'Levantamentos instant' },
  { icon: ShieldCheck, label: '100%', sub: 'Encriptação SSL' },
];

const VALUES = [
  { icon: ShieldCheck, title: 'Segurança Total', desc: 'Infraestrutura cloud encriptada, custódia de fundos segregada e auditorias mensais por terceiros independentes.' },
  { icon: TrendingUp, title: 'Odds Competitivas', desc: 'Margem média abaixo de 5% nos mercados principais, pagamentos rápidos e sem comissões escondidas em levantamentos.' },
  { icon: HeartHandshake, title: 'Jogo Responsável', desc: 'Limites de depósito, auto-exclusão permanente e parcerias com GamCare e Jogadores Anónimos.' },
  { icon: Rocket, title: 'Inovação Constante', desc: 'Mercados ao vivo em tempo real, cash-out avançado, estatísticas profundas e alertas personalizados 24/7.' },
];

export default function SobrePage() {
  return (
    <div className="relative min-h-screen bg-bet62-bg overflow-hidden">
      <Header />
      <div className="flex">
        <Sidebar compact />
        <main className="flex-1 min-w-0">
          <div className="relative">
            <div className="absolute inset-0 bg-bet62-grid [background-size:48px_48px] opacity-60 pointer-events-none" />
            <div className="absolute top-0 left-10 w-[620px] h-[620px] bg-bet62-primary/10 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute top-40 right-10 w-[620px] h-[620px] bg-bet62-secondary/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '0.8s' }} />
            <div className="absolute top-80 left-1/2 -translate-x-1/2 w-[720px] h-[720px] bg-bet62-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.4s' }} />
          </div>

          <div className="relative max-w-[1300px] mx-auto px-4 lg:px-8 py-8 space-y-14">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center gap-3">
              <Link href="/" className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-bet62-border hover:border-white/20 hover:bg-white/5 text-white/70 hover:text-white text-sm transition">
                <ArrowLeft size={16} /> Voltar ao início
              </Link>
              <Badge variant="outline" className="px-3 py-1 text-xs uppercase tracking-widest">Sobre Nós</Badge>
            </motion.div>

            <motion.section initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }} className="text-center max-w-4xl mx-auto">
              <Badge variant="pink" className="mb-4 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                <Sparkles size={12} /> A tua casa de apostas · Desde 2024
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
                Construímos a <span className="text-bet62-primary">plataforma de apostas</span><br className="hidden md:block" />
                que nós mesmos <span className="text-bet62-secondary">queríamos jogar.</span>
              </h1>
              <p className="mt-6 text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                BET62 nasceu da frustração com plataformas lentas, opaque e sem atendimento. Estamos a redefinir o jogo
                responsável português: odds competitivas, pagamentos instantâneos, interface futurista e suporte 24/7 humano, não bots.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                <Button asChild size="xl" variant="glow"><Link href="/registro">Criar Conta Grátis</Link></Button>
                <Button asChild size="xl" variant="outline"><Link href="/promocoes">Ver Bónus</Link></Button>
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {STATS.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <motion.div key={s.label} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.1 + 0.05 * i }}>
                      <Card className="h-full">
                        <CardContent className="p-5 text-center space-y-2">
                          <div className="h-11 w-11 mx-auto rounded-2xl bg-bet62-gradient/15 border border-bet62-border inline-flex items-center justify-center text-bet62-primary">
                            <Icon size={20} />
                          </div>
                          <p className="text-xl md:text-2xl font-black tracking-tight text-white">{s.label}</p>
                          <p className="text-xs text-white/55">{s.sub}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>

            <section className="grid md:grid-cols-2 gap-4">
              {VALUES.map((v, i) => {
                const Icon = v.icon;
                return (
                  <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 + 0.05 * i }}>
                    <Card className="h-full">
                      <CardContent className="p-6 flex items-start gap-4">
                        <div className="shrink-0 h-12 w-12 rounded-2xl bg-bet62-primary/10 border border-bet62-primary/20 flex items-center justify-center text-bet62-primary">
                          <Icon size={22} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold tracking-tight text-white">{v.title}</h3>
                          <p className="mt-1.5 text-sm text-white/60 leading-relaxed">{v.desc}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </section>

            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.4 }}>
              <Card className="overflow-hidden border-bet62-primary/30 bg-gradient-to-br from-bet62-primary/5 via-transparent to-bet62-secondary/5">
                <CardContent className="p-8 md:p-10 grid md:grid-cols-[1fr_auto] gap-6 items-center">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="green"><Target size={12} /> Missão</Badge>
                      <Badge variant="blue"><Zap size={12} /> Visão 2026</Badge>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                      Apostas justas, pagamentos rápidos e jogo seguro — sempre.
                    </h2>
                    <p className="mt-3 text-white/65 leading-relaxed max-w-2xl">
                      Em 12 meses queremos ser a plataforma portuguesa #1 em NPS (Net Promoter Score).
                      Para isso, pagamos todas as vitórias legítimas em &lt;24h, não limitamos ganhadores
                      e devolvemos impostos sobre prémios diretos ao jogador dentro da UE.
                    </p>
                  </div>
                  <Button asChild size="xl" variant="primary" className="md:whitespace-nowrap">
                    <Link href="/contacto">Fala connosco</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.section>

            <section>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-5 flex items-center gap-2">
                <CheckCircle2 size={22} className="text-emerald-400" /> Principais factos
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { t: 'Licença & Regulação', d: 'Operamos sob licença Malta Gaming Authority (MGA), reconhecida em toda a União Europeia e Reino Unido.' },
                  { t: 'Moeda: Euro EUR', d: 'Todas as transações, carteira, odds e prémios são em EUR. Sem spreads cambiais escondidos.' },
                  { t: 'Suporte 24/7 humano', d: 'Chat ao vivo, email e WhatsApp. Resposta média em 3 min em português de Portugal.' },
                  { t: 'Sem KYC abusivo', d: 'Aposta e depósito sem validação inicial. KYC nível 1 só no primeiro levantamento.' },
                  { t: 'Cash-out inteligente', d: 'Cash-out parcial e total em todos os mercados ao vivo e pré-jogo.' },
                  { t: 'Acesso multiplataforma', d: 'Website totalmente responsivo + PWA. Sem apps obrigatórias, sem limitação iOS/Android.' },
                ].map((f, i) => (
                  <motion.div key={f.t} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.45 + 0.05 * i }}>
                    <Card className="h-full">
                      <CardContent className="p-5">
                        <h3 className="font-bold tracking-tight text-white mb-1.5">{f.t}</h3>
                        <p className="text-sm text-white/60 leading-relaxed">{f.d}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
