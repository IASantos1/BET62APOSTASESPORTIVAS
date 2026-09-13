'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Wallet,
  Landmark,
  Smartphone,
  ArrowLeft,
  ShieldCheck,
  AlertTriangle,
  Clock,
  Shield,
} from 'lucide-react';
import { Header } from '../../../components/layout/Header';
import { Footer } from '../../../components/layout/Footer';
import { Sidebar } from '../../../components/layout/Sidebar';
import { Card, CardContent } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { cn, formatCurrencyEUR } from '../../../lib/utils';

type WithdrawMethod = 'bank' | 'mbway';

const NOTES = [
  { icon: ShieldCheck, label: 'KYC L1 obrigatório', desc: 'Verificação de identidade para levantar' },
  { icon: Clock, label: 'Mín. €20', desc: 'Valor mínimo de levantamento' },
  { icon: Shield, label: 'AML / Risk', desc: 'Revisão manual até 24h (primeiros)' },
];

export default function CarteiraLevantamentoPage() {
  const [amount, setAmount] = React.useState<number>(20);
  const [method, setMethod] = React.useState<WithdrawMethod>('bank');
  const [iban, setIban] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const availableBalance = 133.28;

  const handleSubmit = async () => {
    if (amount < 20 || amount > availableBalance) return;
    setLoading(true);
    try {
      await fetch('/api/client/withdraw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, method, iban: method === 'bank' ? iban : undefined }),
      });
    } catch {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-bet62-bg overflow-hidden">
      <Header />
      <div className="flex">
        <Sidebar compact />
        <main className="flex-1 min-w-0">
          <div className="relative">
            <div className="absolute inset-0 bg-bet62-grid [background-size:48px_48px] opacity-60 pointer-events-none" />
            <div className="absolute top-0 right-1/4 w-[560px] h-[560px] bg-sky-500/8 rounded-full blur-3xl animate-pulse-slow" />
          </div>

          <div className="relative max-w-4xl mx-auto px-4 lg:px-8 py-8 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 flex-wrap"
            >
              <Link
                href="/carteira"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-bet62-border hover:border-white/20 hover:bg-white/5 text-white/70 hover:text-white text-sm transition"
              >
                <ArrowLeft size={16} /> Voltar
              </Link>
              <Badge variant="outline" className="text-xs px-3 py-1 font-bold uppercase tracking-wider !border-sky-500/30 !text-sky-400 bg-sky-500/5">
                <Wallet size={12} /> Levantamento
              </Badge>
              <div className="ml-auto flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-3 py-2">
                <span className="text-xs text-white/60 uppercase tracking-wider font-bold">Saldo levantável</span>
                <span className="font-mono font-black text-emerald-400 text-lg">{formatCurrencyEUR(availableBalance)}</span>
              </div>
            </motion.div>

            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              <h1 className="text-3xl md:text-4xl font-black tracking-tight">
                Solicitar Levantamento
              </h1>
              <p className="text-white/60 mt-1.5 text-sm md:text-base">
                Escolhe o método, indica o valor IBAN (se aplicável) e recebe o dinheiro na tua conta
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="grid md:grid-cols-3 gap-3"
            >
              {NOTES.map((n, i) => {
                const Icon = n.icon;
                return (
                  <div key={n.label} className="rounded-2xl border border-bet62-border bg-bet62-surface/50 p-4 flex items-center gap-3">
                    <div className={cn(
                      'h-10 w-10 rounded-xl flex items-center justify-center shrink-0',
                      i === 2 ? 'bg-amber-500/10 border border-amber-500/20 text-amber-400' : 'bg-sky-500/10 border border-sky-500/20 text-sky-400',
                    )}>
                      <Icon size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-white">{n.label}</p>
                      <p className="text-xs text-white/50">{n.desc}</p>
                    </div>
                  </div>
                );
              })}
            </motion.section>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <Card className="overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-sky-500 via-bet62-primary to-bet62-accent" />
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-6">
                    <Landmark size={18} className="text-bet62-primary" />
                    <h2 className="text-xl font-bold tracking-tight">Método de Levantamento</h2>
                  </div>

                  <div className="space-y-3 mb-8">
                    <button
                      onClick={() => setMethod('bank')}
                      className={cn(
                        'w-full flex items-start gap-4 p-4 md:p-5 rounded-2xl border text-left transition-all',
                        method === 'bank'
                          ? 'border-sky-500/50 bg-sky-500/8 shadow-[0_0_0_1px_rgba(14,165,233,0.2)]'
                          : 'border-bet62-border hover:border-white/20 bg-bet62-surface/50',
                      )}
                    >
                      <div className="h-14 w-14 md:h-16 md:w-16 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-700 flex items-center justify-center text-white shrink-0">
                        <Landmark size={26} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="font-bold text-base md:text-lg">Transferência Bancária</p>
                          <Badge variant="outline" className="py-0 text-[10px]">IBAN SEPA</Badge>
                        </div>
                        <div className="flex flex-wrap gap-x-4 gap-y-0.5 mt-1.5 text-xs md:text-sm text-white/55">
                          <span>Mínimo €20</span>
                          <span>·</span>
                          <span>1-2 dias úteis</span>
                          <span>·</span>
                          <span>Taxa 0%</span>
                        </div>
                        <p className="text-[11px] text-white/45 mt-1">
                          Transferência SEPA para conta bancária em nome do titular da conta BET62
                        </p>
                      </div>
                      <div className="pt-1">
                        {method === 'bank' ? (
                          <div className="h-6 w-6 rounded-full bg-sky-500 flex items-center justify-center shrink-0">
                            <div className="h-2.5 w-2.5 rounded-full bg-white" />
                          </div>
                        ) : (
                          <div className="h-6 w-6 rounded-full border-2 border-white/20 shrink-0" />
                        )}
                      </div>
                    </button>

                    <button
                      onClick={() => setMethod('mbway')}
                      className={cn(
                        'w-full flex items-start gap-4 p-4 md:p-5 rounded-2xl border text-left transition-all',
                        method === 'mbway'
                          ? 'border-[#009688]/60 bg-[#009688]/10 shadow-[0_0_0_1px_rgba(0,150,136,0.25)]'
                          : 'border-bet62-border hover:border-white/20 bg-bet62-surface/50',
                      )}
                    >
                      <div className="h-14 w-14 md:h-16 md:w-16 rounded-2xl bg-[#009688] flex items-center justify-center text-white shrink-0">
                        <Smartphone size={26} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="font-bold text-base md:text-lg">MB WAY</p>
                          <Badge variant="green" className="py-0 text-[10px]">Instantâneo</Badge>
                        </div>
                        <div className="flex flex-wrap gap-x-4 gap-y-0.5 mt-1.5 text-xs md:text-sm text-white/55">
                          <span>Mínimo €20</span>
                          <span>·</span>
                          <span>Instantâneo</span>
                          <span>·</span>
                          <span>Taxa 0%</span>
                        </div>
                        <p className="text-[11px] text-white/45 mt-1">
                          Apenas disponível se o último depósito foi feito por MB WAY (mesmo nº telemóvel)
                        </p>
                      </div>
                      <div className="pt-1">
                        {method === 'mbway' ? (
                          <div className="h-6 w-6 rounded-full bg-[#009688] flex items-center justify-center shrink-0">
                            <div className="h-2.5 w-2.5 rounded-full bg-white" />
                          </div>
                        ) : (
                          <div className="h-6 w-6 rounded-full border-2 border-white/20 shrink-0" />
                        )}
                      </div>
                    </button>
                  </div>

                  {method === 'bank' ? (
                    <div className="mb-6">
                      <label className="block text-xs font-bold uppercase tracking-wider text-white/60 mb-2.5">
                        IBAN (Conta SEPA em teu nome)
                      </label>
                      <div className="relative">
                        <Landmark size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                        <input
                          type="text"
                          placeholder="PT50 0000 0000 0000 0000 0000 0"
                          value={iban}
                          onChange={(e) => setIban(e.target.value.toUpperCase())}
                          className="flex h-14 w-full rounded-2xl border border-bet62-border bg-bet62-bg/60 pl-12 pr-4 font-mono text-sm md:text-base tracking-wider text-white placeholder:text-white/30 transition-all focus-visible:outline-none focus-visible:border-sky-500 focus-visible:ring-2 focus-visible:ring-sky-500/30"
                        />
                      </div>
                      <p className="text-[11px] text-white/45 mt-2 leading-relaxed">
                        A conta bancária tem de estar em nome do titular da conta BET62 (verificação KYC L1). IBAN incorreto atrasa o processamento.
                      </p>
                    </div>
                  ) : null}

                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-2.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-white/60">
                        Valor do Levantamento (mín. €20)
                      </label>
                      <button
                        onClick={() => setAmount(availableBalance)}
                        className="text-[11px] font-bold text-bet62-primary hover:underline underline-offset-2 uppercase tracking-wider"
                      >
                        Levantar tudo
                      </button>
                    </div>
                    <div className="relative">
                      <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-white/40 font-mono font-black text-2xl md:text-3xl">€</span>
                      <input
                        type="number"
                        step="0.01"
                        min={20}
                        max={availableBalance}
                        value={amount}
                        onChange={(e) => setAmount(Math.min(parseFloat(e.target.value) || 0, availableBalance))}
                        className="flex h-16 md:h-20 w-full rounded-2xl border border-bet62-border bg-bet62-bg/60 pl-14 pr-5 text-3xl md:text-4xl font-mono font-black text-white placeholder:text-white/30 transition-all focus-visible:outline-none focus-visible:border-bet62-primary focus-visible:ring-2 focus-visible:ring-bet62-primary/30"
                      />
                    </div>
                    <div className="grid grid-cols-4 gap-2 mt-3">
                      {[20, 50, 100, Math.floor(availableBalance)].map((v, i) => (
                        <button
                          key={`${v}-${i}`}
                          onClick={() => setAmount(Math.min(v, availableBalance))}
                          className={cn(
                            'py-2.5 md:py-3 rounded-xl text-sm md:text-base font-bold border transition-all',
                            amount === v
                              ? 'border-bet62-primary bg-bet62-primary/10 text-bet62-primary shadow-sm'
                              : 'border-bet62-border text-white/60 hover:text-white hover:border-white/20 hover:bg-white/5',
                          )}
                        >
                          €{v}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-amber-500/25 bg-amber-500/5 p-4 md:p-5 mb-6 flex items-start gap-3">
                    <AlertTriangle size={20} className="text-amber-400 shrink-0 mt-0.5" />
                    <div className="text-xs md:text-sm text-white/75 leading-relaxed space-y-1.5">
                      <p>
                        <span className="font-bold text-amber-300">Levantamento sujeito a:</span>
                      </p>
                      <ul className="space-y-1 pl-0">
                        <li className="flex items-start gap-2">
                          <CheckCircle size={13} className="text-amber-400/80 mt-0.5 shrink-0" />
                          <span>KYC L1 aprovado (verificação de identidade + morada)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle size={13} className="text-amber-400/80 mt-0.5 shrink-0" />
                          <span>Risk Engine AML (até 24h revisão manual para primeiros levantamentos)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle size={13} className="text-amber-400/80 mt-0.5 shrink-0" />
                          <span>Mesmo método de pagamento que o último depósito (sempre que possível)</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <Button
                    variant="primary"
                    size="xl"
                    className="w-full uppercase font-black tracking-widest h-14 md:h-16 text-base md:text-lg"
                    disabled={amount < 20 || amount > availableBalance || (method === 'bank' && iban.trim().length < 10) || loading}
                    loading={loading}
                    loadingText="A submeter pedido..."
                    onClick={handleSubmit}
                  >
                    SOLICITAR LEVANTAMENTO
                  </Button>

                  <p className="mt-4 text-center text-[11px] text-white/40 leading-relaxed">
                    Pedidos submetidos após 18:00 ou fins-de-semana são processados no próximo dia útil.
                    Transações seguras e auditadas · Anti-fraude e AML ativos.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}

function CheckCircle(props: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ?? 24}
      height={props.size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  );
}
