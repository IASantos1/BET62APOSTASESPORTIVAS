'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Users,
  Percent,
  Trophy,
  Gift,
  Coins,
  Calculator,
  ShieldCheck,
  Share2,
  BadgeDollarSign,
  CheckCircle2,
  Banknote,
  ArrowRight,
  UserPlus,
} from 'lucide-react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Sidebar } from '../../components/layout/Sidebar';
import { Card, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { cn } from '../../lib/utils';

const TIERS = [
  {
    id: 'bronze',
    name: 'Bronze',
    minRev: '€0',
    rateCPA: '€30',
    rateRev: '20%',
    sub: 'Começa aqui. Sem requisitos mínimos.',
    color: 'from-amber-600/30 via-amber-500/10 to-transparent',
    ring: 'ring-amber-500/30',
    border: 'border-amber-500/30',
    chip: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    badge: 'outline' as const,
    perks: ['CPA até €30 / FTD', 'Revenue Share 20%', 'Dashboard ao vivo', 'Retenção média 38%', 'Suporte dedicado PT'],
  },
  {
    id: 'silver',
    name: 'Prata',
    minRev: '€2.500 / mês',
    rateCPA: '€45',
    rateRev: '28%',
    sub: 'Para criadores e mediuns sites.',
    featured: true,
    color: 'from-bet62-primary/40 via-bet62-primary/15 to-transparent',
    ring: 'ring-bet62-primary/40',
    border: 'border-bet62-primary/50',
    chip: 'bg-bet62-gradient text-white border-transparent',
    badge: 'pink' as const,
    perks: ['CPA até €45 / FTD', 'Revenue Share 28%', 'CPA + Hybrid disponível', 'Bónus sub-afiliados 3%', 'Gestor de conta pessoal', 'Antecipação de pagamentos'],
  },
  {
    id: 'gold',
    name: 'Ouro',
    minRev: '€15.000 / mês',
    rateCPA: '€70',
    rateRev: '35%+',
    sub: 'Agências, grandes portais e influencers.',
    color: 'from-yellow-500/30 via-yellow-400/10 to-transparent',
    ring: 'ring-yellow-400/30',
    border: 'border-yellow-400/40',
    chip: 'bg-yellow-500/15 text-yellow-300 border-yellow-400/30',
    badge: 'amber' as const,
    perks: ['CPA até €70 / FTD', 'RevShare até 38%', 'Deal custom (CPA + Rev)', 'Sub-afiliados 5%', 'Pagamento semanal c/ garantia', 'Creatives tailor-made', 'API reporting full access'],
  },
];

const FAQ = [
  {
    q: 'Que modelos de comissão estão disponíveis?',
    a: '3 modelos: CPA (valor fixo por primeiro depósito FTD ≥ €10), Revenue Share (%) sobre o GGR líquido do teu tráfego, e Hybrid (CPA inicial + RevShare reduzido em vigor vitalício).',
  },
  {
    q: 'Quando e como são pagas as comissões?',
    a: 'Todos os pagamentos entre o dia 1 e 5 do mês seguinte (Net-5, não Net-30). Métodos: Transferência SEPA em EUR, Stripe, Wise, PayPal e até criptomoeda USDC para tiers Prata e acima. Mínimo de pagamento: €100 Bronze, €250 Prata, €500 Ouro.',
  },
  {
    q: 'Posso usar redes sociais, YouTube, TikTok e Twitch?',
    a: 'Sim, com toda a liberdade (desde que marketing responsável, 18+, conteúdo não enganoso). Temos creatives pré-feitos, bónus exclusivos para a tua audiência e landing pages white-label.',
  },
  {
    q: 'Qual a duração do cookie?',
    a: '180 dias (6 meses), um dos mais longos do mercado. E é first-party (não third-party), portanto sobrevive a ITP Safari e bloqueadores Chrome.',
  },
  {
    q: 'Existem jogadores proibidos ou países não elegíveis?',
    a: 'Sim. Aceitamos tráfego de 30 países UE/LATAM/África lusófona. EUA, Reino Unido (por enquanto), França, países sanctionados OFAC e jogadores auto-excluídos são excluídos do tracking. CPAs não são pagas para IPs VPN conhecidos.',
  },
  {
    q: 'Como acompanho o meu desempenho?',
    a: 'Dashboard BET62 Partners com tracking em tempo real: clicks, signups, FTDs, GGR, NGR, retenção, LTV por coorte, gráficos diários e exportação CSV / API JSON ilimitada.',
  },
];

export default function AfiliadosPage() {
  return (
    <div className="relative min-h-screen bg-bet62-bg overflow-hidden">
      <Header />
      <div className="flex">
        <Sidebar compact />
        <main className="flex-1 min-w-0">
          <div className="relative">
            <div className="absolute inset-0 bg-bet62-grid [background-size:48px_48px] opacity-60 pointer-events-none" />
            <div className="absolute top-0 right-10 w-[680px] h-[680px] bg-bet62-primary/10 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute top-80 left-10 w-[620px] h-[620px] bg-yellow-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '0.8s' }} />
          </div>

          <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8 py-8 space-y-14">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center gap-3 flex-wrap">
              <Link href="/" className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-bet62-border hover:border-white/20 hover:bg-white/5 text-white/70 hover:text-white text-sm transition">
                <ArrowLeft size={16} /> Voltar
              </Link>
              <Badge variant="amber" className="px-3 py-1 text-xs uppercase tracking-widest">Programa de Afiliados BET62 Partners</Badge>
              <Badge variant="green" className="px-3 py-1 text-xs"><Coins size={12} /> RevShare até 35%</Badge>
            </motion.div>

            <motion.section initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }} className="grid lg:grid-cols-[1.25fr_1fr] gap-8 items-center">
              <div>
                <Badge variant="pink" className="mb-4 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  <BadgeDollarSign size={12} /> CPA até €70 · 180 dias cookie
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
                  Ganha com cada <span className="text-bet62-primary">jogador</span><br className="hidden md:block" />
                  que enviares para a <span className="text-yellow-400">BET62.</span>
                </h1>
                <p className="mt-6 text-white/70 text-base md:text-lg leading-relaxed max-w-xl">
                  Programa de afiliados transparente, pagamentos rápidos, tracking first-party,
                  equipa de gestores em português e criativos atualizados todas as semanas.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button asChild size="xl" variant="glow"><Link href="/registro?ref=partner"><UserPlus size={18} /> Criar Conta Afiliado</Link></Button>
                  <Button size="xl" variant="outline"><Share2 size={18} /> Saber mais</Button>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-3 max-w-lg">
                  {[
                    { i: Users, t: '3.200+', s: 'afiliados ativos' },
                    { i: Banknote, t: '€ 8.4M+', s: 'pago em comissões' },
                    { i: Trophy, t: 'Top 10', s: 'NetRefer Ranking 2025' },
                  ].map((x, idx) => {
                    const Icon = x.i;
                    return (
                      <motion.div key={x.s} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.1 + idx * 0.05 }}>
                        <Card>
                          <CardContent className="p-4 text-center space-y-1.5">
                            <div className="h-9 w-9 mx-auto rounded-xl bg-bet62-gradient/15 border border-bet62-border flex items-center justify-center text-bet62-primary">
                              <Icon size={16} />
                            </div>
                            <p className="text-xl font-black text-white tracking-tight">{x.t}</p>
                            <p className="text-[11px] text-white/55 leading-snug">{x.s}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
                <Card className="overflow-hidden border-bet62-primary/40 bg-gradient-to-br from-bet62-surface/95 via-bet62-bg to-bet62-primary/5">
                  <CardContent className="p-6 md:p-7 space-y-5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-black tracking-tight text-lg">Simulador de Ganhos (Estimativa)</h3>
                      <Badge variant="blue" className="text-[11px]"><Calculator size={11} /> Beta</Badge>
                    </div>
                    {[
                      { k: 'Clicks / mês', v: '5.000', i: Share2 },
                      { k: 'CR Signups (%)', v: '22% → 1.100', i: Users },
                      { k: 'FTD (min €10)', v: '18% → 200', i: Banknote },
                      { k: 'CPA × Tier Prata', v: '€45 × 200 = €9.000', i: Gift },
                    ].map((r) => {
                      const Icon = r.i;
                      return (
                        <div key={r.k} className="flex items-center justify-between rounded-xl border border-bet62-border bg-bet62-bg/60 px-4 py-3">
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="h-9 w-9 shrink-0 rounded-lg bg-bet62-primary/10 border border-bet62-primary/20 flex items-center justify-center text-bet62-primary"><Icon size={15} /></div>
                            <span className="text-xs uppercase tracking-widest font-bold text-white/50">{r.k}</span>
                          </div>
                          <span className="font-mono font-black text-white truncate">{r.v}</span>
                        </div>
                      );
                    })}
                    <div className="rounded-2xl p-5 bg-gradient-to-br from-bet62-primary via-bet62-primary/90 to-bet62-accent text-white">
                      <p className="text-[11px] uppercase tracking-widest font-bold opacity-90">Resultado estimado · mês</p>
                      <div className="mt-1 items-baseline flex gap-2">
                        <p className="text-4xl font-black tracking-tight">€ 12.600</p>
                        <p className="text-sm font-bold opacity-80">+ RevShare €3.600</p>
                      </div>
                      <p className="mt-1 text-xs opacity-85">*Ilustração. Os teus números dependem de segmento e qualidade do tráfego.</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.section>

            <section>
              <div className="flex items-end justify-between mb-5">
                <h2 className="text-2xl md:text-3xl font-black tracking-tight flex items-center gap-2">
                  <Trophy size={22} className="text-yellow-400" /> Estrutura de Tiers 2026
                </h2>
                <Badge variant="outline" className="text-xs">Promoção: sem tempo mínimo de contrato</Badge>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {TIERS.map((t, i) => (
                  <motion.div key={t.id} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.1 + i * 0.06 }}>
                    <Card className={cn('h-full relative overflow-hidden bg-gradient-to-br border shadow-2xl', t.color, t.border, t.featured && `ring-2 ${t.ring} -translate-y-1`)}>
                      <CardContent className="relative p-6 space-y-5">
                        <div className="flex items-center justify-between">
                          <Badge className={cn('px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest', t.chip)} variant={t.badge}>{t.name}</Badge>
                          {t.featured && <Badge variant="pink">MAIS ESCOLHIDO</Badge>}
                        </div>
                        <div>
                          <p className="text-[11px] uppercase tracking-widest text-white/50 font-bold mb-1">Requisito</p>
                          <p className="text-lg font-black tracking-tight text-white">{t.minRev}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                            <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold">CPA máximo</p>
                            <p className="text-xl font-black tracking-tight text-bet62-primary">{t.rateCPA}</p>
                          </div>
                          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                            <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold">RevShare</p>
                            <p className="text-xl font-black tracking-tight text-yellow-400">{t.rateRev}</p>
                          </div>
                        </div>
                        <p className="text-sm text-white/60">{t.sub}</p>
                        <ul className="space-y-2 pt-1">
                          {t.perks.map((p) => (
                            <li key={p} className="flex items-start gap-2 text-sm text-white/75">
                              <CheckCircle2 size={16} className="shrink-0 text-emerald-400 mt-0.5" /> {p}
                            </li>
                          ))}
                        </ul>
                        <Button variant={t.featured ? 'primary' : 'outline'} size="lg" className="w-full">
                          <ArrowRight size={16} /> Entrar no Tier {t.name}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-5">Perguntas frequentes (FAQ)</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {FAQ.map((f, i) => (
                  <motion.div key={f.q} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.2 + i * 0.03 }}>
                    <Card className="h-full">
                      <CardContent className="p-5 space-y-2">
                        <h3 className="font-bold tracking-tight text-white flex items-start gap-2">
                          <Percent size={18} className="shrink-0 text-bet62-accent mt-0.5" /> {f.q}
                        </h3>
                        <p className="text-sm text-white/60 leading-relaxed">{f.a}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>

            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.55 }}>
              <Card className="border-bet62-primary/40 bg-gradient-to-br from-bet62-primary/5 via-bet62-bg to-bet62-accent/5 overflow-hidden">
                <CardContent className="p-8 md:p-10 grid md:grid-cols-[1fr_auto] gap-6 items-center">
                  <div className="flex items-start gap-4">
                    <ShieldCheck size={26} className="text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <Badge variant="green" className="mb-3">Contrato transparente · Sem fine-print</Badge>
                      <h3 className="text-2xl md:text-3xl font-black tracking-tight">
                        Nós sobrevivemos à tua performance. Pagamos sempre, pontualmente.
                      </h3>
                      <p className="mt-3 text-sm md:text-base text-white/65 leading-relaxed max-w-3xl">
                        Não negamos comissões legítimas. Não temos carryover negativo (NGR negativo do teu jogador NÃO trava as próximas comissões).
                        Temos canal direto WhatsApp para o nosso managing partner em caso de litígio.
                      </p>
                    </div>
                  </div>
                  <Button asChild size="xl" variant="glow" className="whitespace-nowrap">
                    <Link href="/contacto?dept=partners">Falar com Gestor</Link>
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
