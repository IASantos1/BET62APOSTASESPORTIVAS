'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Wallet,
  ArrowUpCircle,
  ArrowDownCircle,
  History,
  Ticket,
  Gift,
  Banknote,
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  Clock,
  Plus,
  ArrowRightLeft,
} from 'lucide-react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Sidebar } from '../../components/layout/Sidebar';
import { Card, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { Progress } from '../../components/ui/Progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/Tabs';
import { cn, formatCurrencyEUR } from '../../lib/utils';

const DEPOSIT_HIST = [
  { id: 'd1', date: '2026-09-10 14:22', method: 'MB WAY', amount: 50, status: 'Concluído', statusColor: 'emerald' },
  { id: 'd2', date: '2026-09-05 09:11', method: 'Multibanco', amount: 20, status: 'Concluído', statusColor: 'emerald' },
  { id: 'd3', date: '2026-08-28 18:44', method: 'Visa', amount: 100, status: 'Concluído', statusColor: 'emerald' },
];

const WITHDRAW_HIST = [
  { id: 'w1', date: '2026-09-12 10:05', method: 'Transferência SEPA', amount: 50, status: 'A processar', statusColor: 'amber' },
  { id: 'w2', date: '2026-09-02 16:30', method: 'MB WAY', amount: 30, status: 'Concluído', statusColor: 'emerald' },
];

const BETS_HIST = [
  { id: 'b1', date: '2026-09-12 21:15', event: 'Benfica vs Sporting', market: '1X2 · Casa', stake: 10, odds: 2.45, result: 'Ganhou', return: 24.5, color: 'emerald' },
  { id: 'b2', date: '2026-09-11 20:30', event: 'Porto vs Boavista', market: 'Over 2.5', stake: 5, odds: 1.85, result: 'Perdida', return: 0, color: 'rose' },
  { id: 'b3', date: '2026-09-10 19:00', event: 'Real Madrid vs Barcelona', market: 'Ambas marcam', stake: 15, odds: 1.70, result: 'Ganhou', return: 25.5, color: 'emerald' },
];

const BONUS_HIST = [
  { id: 'bn1', date: '2026-09-10 14:23', type: 'Welcome 100%', amount: 20, status: 'Rollover 60%', progress: 60 },
  { id: 'bn2', date: '2026-09-07 11:00', type: 'Freebet Depósito €10', amount: 5, status: 'Liberado', progress: 100 },
];

export default function CarteiraPage() {
  const realBalance = 145.32;
  const bonusBalance = 20.0;
  const withdrawable = 133.28;

  return (
    <div className="relative min-h-screen bg-bet62-bg overflow-hidden">
      <Header />
      <div className="flex">
        <Sidebar compact />
        <main className="flex-1 min-w-0">
          <div className="relative">
            <div className="absolute inset-0 bg-bet62-grid [background-size:48px_48px] opacity-60 pointer-events-none" />
            <div className="absolute top-0 left-10 w-[620px] h-[620px] bg-emerald-500/8 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute top-24 right-10 w-[620px] h-[620px] bg-pink-500/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '0.8s' }} />
          </div>

          <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8 py-8 space-y-8">
            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
            >
              <div>
                <div className="inline-flex items-center gap-2 mb-2">
                  <Badge variant="green" className="text-xs px-3 py-1 font-bold uppercase tracking-wider">
                    <Wallet size={12} /> Carteira
                  </Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-black tracking-tight">
                  Resumo da Carteira
                </h1>
                <p className="text-white/60 mt-1 text-sm md:text-base">
                  Visualiza os teus saldos, rollover e histórico completo
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="primary" size="sm" asChild className="gap-1.5">
                  <Link href="/carteira/deposito">
                    <Plus size={16} /> Depositar
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild className="gap-1.5">
                  <Link href="/carteira/levantamento">
                    <ArrowRightLeft size={16} /> Levantar
                  </Link>
                </Button>
              </div>
            </motion.section>

            <section>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 }}
                >
                  <div className="relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500 via-[#10b981] to-emerald-700 p-6 md:p-7 h-full shadow-[0_8px_32px_rgba(16,185,129,0.2)]">
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl animate-pulse-slow" />
                    <div className="relative">
                      <div className="flex items-center justify-between mb-4">
                        <div className="h-12 w-12 rounded-2xl bg-white/15 backdrop-blur border border-white/20 flex items-center justify-center text-white">
                          <Banknote size={22} />
                        </div>
                        <Badge variant="green" className="!bg-white/20 !text-white border border-white/20 text-[10px] uppercase tracking-wider">
                          SALDO REAL
                        </Badge>
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/80">
                        Dinheiro real disponível
                      </p>
                      <p className="mt-2 font-mono font-black text-4xl md:text-5xl text-white tracking-tight">
                        {formatCurrencyEUR(realBalance)}
                      </p>
                      <p className="mt-2 text-xs text-white/75 leading-relaxed">
                        Dinheiro que depositaste ou ganhaste em apostas. Disponível para jogar ou levantar.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <div className="relative overflow-hidden rounded-3xl border border-pink-400/20 bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-600 p-6 md:p-7 h-full shadow-[0_8px_32px_rgba(236,72,153,0.2)]">
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl animate-pulse-slow" />
                    <div className="relative">
                      <div className="flex items-center justify-between mb-4">
                        <div className="h-12 w-12 rounded-2xl bg-white/15 backdrop-blur border border-white/20 flex items-center justify-center text-white">
                          <Gift size={22} />
                        </div>
                        <Badge variant="pink" className="!bg-white/20 !text-white border border-white/20 text-[10px] uppercase tracking-wider">
                          SALDO BÓNUS
                        </Badge>
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/80">
                        Bónus sujeitos a rollover
                      </p>
                      <p className="mt-2 font-mono font-black text-4xl md:text-5xl text-white tracking-tight">
                        {formatCurrencyEUR(bonusBalance)}
                      </p>
                      <p className="mt-2 text-xs text-white/75 leading-relaxed">
                        Valor de bónus ativo. Cumpre o rollover para converter em saldo levantável.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                >
                  <div className="relative overflow-hidden rounded-3xl border border-sky-400/20 bg-gradient-to-br from-sky-500 via-blue-600 to-blue-800 p-6 md:p-7 h-full shadow-[0_8px_32px_rgba(14,165,233,0.2)]">
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl animate-pulse-slow" />
                    <div className="relative">
                      <div className="flex items-center justify-between mb-4">
                        <div className="h-12 w-12 rounded-2xl bg-white/15 backdrop-blur border border-white/20 flex items-center justify-center text-white">
                          <ShieldCheck size={22} />
                        </div>
                        <Badge variant="outline" className="!bg-white/20 !text-white !border-white/20 text-[10px] uppercase tracking-wider">
                          SALDO LEVANTÁVEL
                        </Badge>
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/80">
                        Disponível para levantar
                      </p>
                      <p className="mt-2 font-mono font-black text-4xl md:text-5xl text-white tracking-tight">
                        {formatCurrencyEUR(withdrawable)}
                      </p>

                      <div className="mt-4 space-y-3">
                        <div>
                          <div className="flex items-center justify-between text-[10px] font-semibold text-white/75 uppercase tracking-wider mb-1">
                            <span>Welcome 100%</span>
                            <span>60%</span>
                          </div>
                          <Progress value={60} variant="success" size="sm" />
                        </div>
                        <div>
                          <div className="flex items-center justify-between text-[10px] font-semibold text-white/75 uppercase tracking-wider mb-1">
                            <span>Freebet €10</span>
                            <span>35%</span>
                          </div>
                          <Progress value={35} variant="primary" size="sm" />
                        </div>
                        <div>
                          <div className="flex items-center justify-between text-[10px] font-semibold text-white/75 uppercase tracking-wider mb-1">
                            <span>Reload Semanal</span>
                            <span>80%</span>
                          </div>
                          <Progress value={80} variant="accent" size="sm" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-5 md:p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <History size={18} className="text-bet62-primary" />
                    <h2 className="text-xl font-bold tracking-tight">Histórico</h2>
                  </div>

                  <Tabs defaultValue="depositos" className="w-full">
                    <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full">
                      <TabsTrigger value="depositos" className="text-xs md:text-sm gap-1.5">
                        <ArrowDownCircle size={14} /> Depósitos
                      </TabsTrigger>
                      <TabsTrigger value="levantamentos" className="text-xs md:text-sm gap-1.5">
                        <ArrowUpCircle size={14} /> Levantamentos
                      </TabsTrigger>
                      <TabsTrigger value="apostas" className="text-xs md:text-sm gap-1.5">
                        <Ticket size={14} /> Apostas
                      </TabsTrigger>
                      <TabsTrigger value="bonus" className="text-xs md:text-sm gap-1.5">
                        <Gift size={14} /> Bónus
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="depositos">
                      <div className="rounded-2xl border border-bet62-border overflow-x-auto">
                        <table className="w-full min-w-[480px] text-sm">
                          <thead>
                            <tr className="bg-bet62-surface/60 border-b border-bet62-border">
                              <th className="text-left px-3 md:px-4 py-3 text-white/50 font-semibold uppercase tracking-wider text-[11px]">Data</th>
                              <th className="text-left px-3 md:px-4 py-3 text-white/50 font-semibold uppercase tracking-wider text-[11px]">Método</th>
                              <th className="text-right px-3 md:px-4 py-3 text-white/50 font-semibold uppercase tracking-wider text-[11px]">Valor</th>
                              <th className="text-right px-3 md:px-4 py-3 text-white/50 font-semibold uppercase tracking-wider text-[11px]">Estado</th>
                            </tr>
                          </thead>
                          <tbody>
                            {DEPOSIT_HIST.map((d, i) => (
                              <tr key={d.id} className={cn('border-b border-bet62-border/50 last:border-0', i % 2 === 0 ? 'bg-bet62-bg/20' : '')}>
                                <td className="px-3 md:px-4 py-3.5 text-xs md:text-sm text-white/80 whitespace-nowrap">
                                  <div className="flex items-center gap-2">
                                    <Clock size={13} className="text-white/40 shrink-0" />
                                    {d.date}
                                  </div>
                                </td>
                                <td className="px-3 md:px-4 py-3.5 text-xs md:text-sm text-white/80">{d.method}</td>
                                <td className="px-3 md:px-4 py-3.5 text-right font-mono font-bold text-emerald-400">+{formatCurrencyEUR(d.amount)}</td>
                                <td className="px-3 md:px-4 py-3.5 text-right">
                                  <span className={cn(
                                    'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase',
                                    d.statusColor === 'emerald' ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/15 text-amber-400 border border-amber-500/20',
                                  )}>
                                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                                    {d.status}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </TabsContent>

                    <TabsContent value="levantamentos">
                      <div className="rounded-2xl border border-bet62-border overflow-x-auto">
                        <table className="w-full min-w-[480px] text-sm">
                          <thead>
                            <tr className="bg-bet62-surface/60 border-b border-bet62-border">
                              <th className="text-left px-3 md:px-4 py-3 text-white/50 font-semibold uppercase tracking-wider text-[11px]">Data</th>
                              <th className="text-left px-3 md:px-4 py-3 text-white/50 font-semibold uppercase tracking-wider text-[11px]">Método</th>
                              <th className="text-right px-3 md:px-4 py-3 text-white/50 font-semibold uppercase tracking-wider text-[11px]">Valor</th>
                              <th className="text-right px-3 md:px-4 py-3 text-white/50 font-semibold uppercase tracking-wider text-[11px]">Estado</th>
                            </tr>
                          </thead>
                          <tbody>
                            {WITHDRAW_HIST.map((d, i) => (
                              <tr key={d.id} className={cn('border-b border-bet62-border/50 last:border-0', i % 2 === 0 ? 'bg-bet62-bg/20' : '')}>
                                <td className="px-3 md:px-4 py-3.5 text-xs md:text-sm text-white/80 whitespace-nowrap">
                                  <div className="flex items-center gap-2">
                                    <Clock size={13} className="text-white/40 shrink-0" />
                                    {d.date}
                                  </div>
                                </td>
                                <td className="px-3 md:px-4 py-3.5 text-xs md:text-sm text-white/80">{d.method}</td>
                                <td className="px-3 md:px-4 py-3.5 text-right font-mono font-bold text-rose-400">-{formatCurrencyEUR(d.amount)}</td>
                                <td className="px-3 md:px-4 py-3.5 text-right">
                                  <span className={cn(
                                    'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase',
                                    d.statusColor === 'emerald' ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/15 text-amber-400 border border-amber-500/20',
                                  )}>
                                    <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
                                    {d.status}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </TabsContent>

                    <TabsContent value="apostas">
                      <div className="rounded-2xl border border-bet62-border overflow-x-auto">
                        <table className="w-full min-w-[480px] text-sm">
                          <thead>
                            <tr className="bg-bet62-surface/60 border-b border-bet62-border">
                              <th className="text-left px-3 md:px-4 py-3 text-white/50 font-semibold uppercase tracking-wider text-[11px]">Data</th>
                              <th className="text-left px-3 md:px-4 py-3 text-white/50 font-semibold uppercase tracking-wider text-[11px]">Evento / Mercado</th>
                              <th className="text-right px-3 md:px-4 py-3 text-white/50 font-semibold uppercase tracking-wider text-[11px]">Stake</th>
                              <th className="text-right px-3 md:px-4 py-3 text-white/50 font-semibold uppercase tracking-wider text-[11px]">Odd</th>
                              <th className="text-right px-3 md:px-4 py-3 text-white/50 font-semibold uppercase tracking-wider text-[11px]">Resultado</th>
                            </tr>
                          </thead>
                          <tbody>
                            {BETS_HIST.map((b, i) => (
                              <tr key={b.id} className={cn('border-b border-bet62-border/50 last:border-0', i % 2 === 0 ? 'bg-bet62-bg/20' : '')}>
                                <td className="px-3 md:px-4 py-3.5 text-xs text-white/60 whitespace-nowrap">{b.date}</td>
                                <td className="px-3 md:px-4 py-3.5">
                                  <p className="text-xs md:text-sm font-semibold text-white/90 truncate max-w-[220px]">{b.event}</p>
                                  <p className="text-[11px] text-white/50">{b.market}</p>
                                </td>
                                <td className="px-3 md:px-4 py-3.5 text-right font-mono text-xs md:text-sm text-white/80">{formatCurrencyEUR(b.stake)}</td>
                                <td className="px-3 md:px-4 py-3.5 text-right font-mono font-bold text-xs md:text-sm text-bet62-primary">{b.odds.toFixed(2)}</td>
                                <td className="px-3 md:px-4 py-3.5 text-right">
                                  <div>
                                    <p className={cn(
                                      'text-xs font-bold uppercase',
                                      b.color === 'emerald' ? 'text-emerald-400' : 'text-rose-400',
                                    )}>{b.result}</p>
                                    <p className={cn(
                                      'text-[11px] font-mono font-semibold',
                                      b.color === 'emerald' ? 'text-emerald-400/80' : 'text-white/40',
                                    )}>
                                      {b.return > 0 ? `+${formatCurrencyEUR(b.return)}` : formatCurrencyEUR(0)}
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </TabsContent>

                    <TabsContent value="bonus">
                      <div className="grid md:grid-cols-2 gap-3">
                        {BONUS_HIST.map((b) => (
                          <Card key={b.id} className="bg-bet62-surface/30">
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between mb-2">
                                <div>
                                  <p className="text-sm font-bold">{b.type}</p>
                                  <p className="text-[11px] text-white/50">{b.date}</p>
                                </div>
                                <span className="font-mono font-black text-bet62-primary">+{formatCurrencyEUR(b.amount)}</span>
                              </div>
                              <div className="mt-2">
                                <div className="flex items-center justify-between text-[11px] text-white/60 font-semibold mb-1">
                                  <span className="uppercase tracking-wider">{b.status}</span>
                                  <span className="font-mono">{b.progress}%</span>
                                </div>
                                <Progress value={b.progress} variant="success" size="sm" />
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
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
