'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Gift,
  Banknote,
  Trophy,
  Flame,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Info,
} from 'lucide-react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Sidebar } from '../../components/layout/Sidebar';
import { Card, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { cn } from '../../lib/utils';

const BONUSES = [
  {
    id: 'welcome',
    tag: '🎁 WELCOME',
    title: 'Bónus de Boas-Vindas',
    subtitle: '100% até €20',
    conditions: ['5x Rollover sobre Bónus', 'Validade: 7 dias', 'Mínimo depósito: €10'],
    cta: 'Reivindica',
    icon: Gift,
    theme: {
      bg: 'from-bet62-primary to-red-700',
      ring: 'ring-bet62-primary/30',
      chip: 'bg-bet62-bg/70 text-white',
      cta: 'bg-bet62-bg text-bet62-primary hover:bg-bet62-bg/80',
      border: 'border-bet62-primary/30',
      text: 'text-bet62-bg',
    },
  },
  {
    id: 'dep10',
    tag: '💰 DEPÓSITO €10',
    title: 'Freebet de €5',
    subtitle: 'Deposita €10, recebe €5',
    conditions: ['5x Rollover sobre €5', 'Odd mínima: 1.50', 'Validade: 14 dias'],
    cta: 'Reivindica',
    icon: Banknote,
    theme: {
      bg: 'from-white to-slate-100',
      ring: 'ring-white/20',
      chip: 'bg-black/80 text-white',
      cta: 'bg-black text-white hover:bg-black/80',
      border: 'border-white/30',
      text: 'text-slate-900',
    },
  },
  {
    id: 'dep20',
    tag: '💰 DEPÓSITO €20',
    title: 'Freebet de €10',
    subtitle: 'Deposita €20, recebe €10',
    conditions: ['5x Rollover sobre €10', 'Odd mínima: 1.50', 'Validade: 14 dias'],
    cta: 'Reivindica',
    icon: Banknote,
    theme: {
      bg: 'from-slate-900 via-black to-slate-950',
      ring: 'ring-white/10',
      chip: 'bg-white/10 text-white border border-white/20',
      cta: 'bg-white text-black hover:bg-white/90',
      border: 'border-white/10',
      text: 'text-white',
    },
  },
  {
    id: 'firstbet',
    tag: '⚽ PRIMEIRA APOSTA',
    title: 'Aposta Grátis €5',
    subtitle: 'Após a tua 1ª aposta',
    conditions: ['Primeira aposta ≥ €5', 'Odd mínima: 1.50', '3x Rollover após crédito'],
    cta: 'Ativar agora',
    icon: Trophy,
    theme: {
      bg: 'from-[#10b981] to-[#059669]',
      ring: 'ring-emerald-400/30',
      chip: 'bg-white/20 text-white',
      cta: 'bg-white text-emerald-700 hover:bg-white/90',
      border: 'border-emerald-300/30',
      text: 'text-white',
    },
  },
  {
    id: 'reload',
    tag: '🔥 RELOAD SEMANAL',
    title: '25% até €20',
    subtitle: 'Toda semana 1x',
    conditions: ['1 depósito por semana', '5x Rollover sobre bónus', 'Mín depósito: €10'],
    cta: 'Reivindica',
    icon: Flame,
    theme: {
      bg: 'from-purple-600 via-fuchsia-600 to-purple-800',
      ring: 'ring-fuchsia-400/30',
      chip: 'bg-white/20 text-white',
      cta: 'bg-white text-purple-700 hover:bg-white/90',
      border: 'border-fuchsia-300/30',
      text: 'text-white',
    },
  },
  {
    id: 'cashback',
    tag: '💰 CASHBACK SEMANAL 5%',
    title: 'Até €20 / semana',
    subtitle: 'Volta 5% das perdas',
    conditions: ['3x Rollover cashback', 'Calculado às segundas 00:00', 'Mín crédito: €1'],
    cta: 'Ativar',
    icon: Sparkles,
    theme: {
      bg: 'from-sky-500 via-blue-600 to-blue-800',
      ring: 'ring-sky-400/30',
      chip: 'bg-white/20 text-white',
      cta: 'bg-white text-blue-700 hover:bg-white/90',
      border: 'border-sky-300/30',
      text: 'text-white',
    },
  },
];

const RULES = [
  { label: 'Mínimo Depósito', value: '€10' },
  { label: 'Mínimo Levantamento', value: '€20' },
  { label: 'KYC L1 Obrigatório', value: 'Levantamentos' },
  { label: 'Freebet Odd Mínima', value: '1.50' },
];

export default function PromocoesPage() {
  return (
    <div className="relative min-h-screen bg-bet62-bg overflow-hidden">
      <Header />
      <div className="flex">
        <Sidebar compact />
        <main className="flex-1 min-w-0">
          <div className="relative">
            <div className="absolute inset-0 bg-bet62-grid [background-size:48px_48px] opacity-60 pointer-events-none" />
            <div className="absolute top-0 left-10 w-[620px] h-[620px] bg-bet62-primary/10 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute top-40 right-10 w-[620px] h-[620px] bg-fuchsia-500/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '0.8s' }} />
            <div className="absolute top-96 left-1/2 -translate-x-1/2 w-[720px] h-[720px] bg-emerald-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.4s' }} />
          </div>

          <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8 py-8 space-y-12">
            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center pt-4"
            >
              <Badge variant="pink" className="mb-4 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                <Sparkles size={12} /> Ofertas exclusivas para ti
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                🎁 PROMOÇÕES BET62 · 5 Bónus
              </h1>
              <p className="mt-4 text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Cumpre condições claras, rollover <span className="font-bold text-bet62-primary">SÓ sobre bónus</span>,
                NUNCA bloqueia o teu dinheiro real
              </p>
            </motion.section>

            <section>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {BONUSES.map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <motion.div
                      key={b.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.05 * i }}
                    >
                      <div
                        className={cn(
                          'relative overflow-hidden rounded-3xl border h-full bg-gradient-to-br p-6',
                          b.theme.bg,
                          b.theme.border,
                          `shadow-[0_8px_32px_rgba(0,0,0,0.35)] ring-1 ${b.theme.ring}`,
                        )}
                      >
                        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl animate-pulse-slow" />
                        <div className="absolute right-4 top-4 h-24 w-24 rounded-full bg-white/5 blur-xl" />
                        <div className="relative">
                          <div className={cn('inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3', b.theme.chip)}>
                            {b.tag}
                          </div>
                          <div className="flex items-center justify-between mb-4">
                            <div className={cn('h-12 w-12 rounded-2xl backdrop-blur border border-white/15 inline-flex items-center justify-center', b.theme.text, 'bg-white/15')}>
                              <Icon size={22} />
                            </div>
                          </div>
                          <h3 className={cn('text-2xl md:text-3xl font-black tracking-tight', b.theme.text)}>
                            {b.title}
                          </h3>
                          <p className={cn('text-sm mt-1 font-semibold opacity-90', b.theme.text)}>
                            {b.subtitle}
                          </p>

                          <div className="mt-4 space-y-1.5">
                            {b.conditions.map((c) => (
                              <div key={c} className={cn('flex items-start gap-2 text-xs font-medium opacity-85', b.theme.text)}>
                                <CheckCircle2 size={13} className="mt-0.5 shrink-0" />
                                <span>{c}</span>
                              </div>
                            ))}
                          </div>

                          <div className="mt-5">
                            <Button
                              size="sm"
                              variant="outline"
                              className={cn('w-full font-bold tracking-wide border-0', b.theme.cta)}
                              asChild
                            >
                              <Link href="/registro">
                                {b.cta} <ArrowRight size={14} />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="overflow-hidden">
                <div className="h-1 bg-bet62-gradient" />
                <CardContent className="p-5 md:p-8">
                  <div className="flex items-center gap-2 mb-5">
                    <Info size={18} className="text-bet62-primary" />
                    <h2 className="text-xl md:text-2xl font-bold tracking-tight">Regras Gerais</h2>
                  </div>

                  <div className="overflow-x-auto rounded-2xl border border-bet62-border">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-bet62-surface/60 border-b border-bet62-border">
                          <th className="text-left px-4 py-3.5 text-white/60 font-semibold uppercase tracking-wider text-xs">
                            Regra
                          </th>
                          <th className="text-left px-4 py-3.5 text-white/60 font-semibold uppercase tracking-wider text-xs">
                            Valor / Condição
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {RULES.map((r, i) => (
                          <tr
                            key={r.label}
                            className={cn(
                              'border-b border-bet62-border/50 last:border-0 transition',
                              i % 2 === 0 ? 'bg-bet62-bg/20' : 'bg-transparent',
                            )}
                          >
                            <td className="px-4 py-3.5 text-white/80 font-medium flex items-center gap-2">
                              <ShieldCheck size={15} className="text-bet62-primary/70 shrink-0" />
                              {r.label}
                            </td>
                            <td className="px-4 py-3.5 font-mono font-bold text-bet62-primary">
                              {r.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="mt-4 text-xs text-white/40 leading-relaxed">
                    * Todas as promoções estão sujeitas aos Termos e Condições Gerais da BET62.
                    Rolover aplica-se APENAS ao valor do bónus, nunca ao saldo real depositado.
                    Jogo responsável: +18 anos.
                  </p>
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
