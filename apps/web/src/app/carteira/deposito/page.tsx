'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Wallet,
  CreditCard,
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Info,
} from 'lucide-react';
import { Header } from '../../../components/layout/Header';
import { Footer } from '../../../components/layout/Footer';
import { Card, CardContent } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { PaymentMethodLogo } from '../../../components/ui/PaymentMethodLogo';
import { cn } from '../../../lib/utils';
import { apiClient, ApiError } from '../../../lib/api-client';

type PaymentMethod = 'mbway' | 'multibanco' | 'card';

const BENEFITS = [
  { icon: Zap, label: 'Instantâneo', desc: 'Confirmado em segundos' },
  { icon: ShieldCheck, label: 'Taxa 0%', desc: 'Sem comissões escondidas' },
  { icon: CheckCircle2, label: 'Mín. €10', desc: 'Valores acessíveis' },
];

export default function CarteiraDepositoPage() {
  const [amount, setAmount] = React.useState<number>(20);
  const [method, setMethod] = React.useState<PaymentMethod>('mbway');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async () => {
    if (amount < 10) return;
    setLoading(true);
    setError(null);
    try {
      const data = await apiClient.post<{ checkoutUrl?: string }>('/wallet/deposit/stripe/create-intent', {
        provider: 'STRIPE',
        amount,
        currency: 'EUR',
        paymentMethod: method,
        returnUrl: `${window.location.origin}/carteira`,
      });
      if (data?.checkoutUrl) window.location.href = data.checkoutUrl;
      else setError('Não foi possível iniciar o pagamento. Tenta novamente.');
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Erro ao iniciar o depósito.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-bet62-bg overflow-hidden">
      <Header />
      <main className="min-w-0 w-full">
          <div className="relative">
            <div className="absolute inset-0 bg-bet62-grid [background-size:48px_48px] opacity-60 pointer-events-none" />
            <div className="absolute top-0 left-1/4 w-[560px] h-[560px] bg-emerald-500/8 rounded-full blur-3xl animate-pulse-slow" />
          </div>

          <div className="relative max-w-4xl mx-auto px-4 lg:px-8 py-8 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3"
            >
              <Link
                href="/carteira"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-bet62-border hover:border-white/20 hover:bg-white/5 text-white/70 hover:text-white text-sm transition"
              >
                <ArrowLeft size={16} /> Voltar
              </Link>
              <Badge variant="green" className="text-xs px-3 py-1 font-bold uppercase tracking-wider">
                <Wallet size={12} /> Depósito
              </Badge>
            </motion.div>

            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              <h1 className="text-3xl md:text-4xl font-black tracking-tight">
                Depósito na Carteira
              </h1>
              <p className="text-white/60 mt-1.5 text-sm md:text-base">
                Escolhe o método, define o valor e recebe instantaneamente na tua carteira BET62
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="grid md:grid-cols-3 gap-3"
            >
              {BENEFITS.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div key={b.label} className="rounded-2xl border border-bet62-border bg-bet62-surface/50 p-4 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                      <Icon size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-white">{b.label}</p>
                      <p className="text-xs text-white/50">{b.desc}</p>
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
                <div className="h-1 bg-gradient-to-r from-emerald-500 via-bet62-primary to-bet62-accent" />
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-6">
                    <CreditCard size={18} className="text-bet62-primary" />
                    <h2 className="text-xl font-bold tracking-tight">Método de Pagamento</h2>
                  </div>

                  <div className="space-y-3 mb-8">
                    <button
                      onClick={() => setMethod('mbway')}
                      className={cn(
                        'w-full flex items-center gap-4 p-4 md:p-5 rounded-2xl border text-left transition-all',
                        method === 'mbway'
                          ? 'border-[#009688]/60 bg-[#009688]/10 shadow-[0_0_0_1px_rgba(0,150,136,0.25)]'
                          : 'border-bet62-border hover:border-white/20 bg-bet62-surface/50',
                      )}
                    >
                      <PaymentMethodLogo method="mbway" size="md" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="font-bold text-base md:text-lg">MB WAY</p>
                          <Badge variant="green" className="py-0 text-[10px]">Instantâneo</Badge>
                        </div>
                        <p className="text-xs md:text-sm text-white/55 mt-0.5">Mínimo €10 · Sem taxa · Confirmação por smartphone</p>
                      </div>
                      {method === 'mbway' ? (
                        <div className="h-6 w-6 rounded-full bg-[#009688] flex items-center justify-center shrink-0">
                          <div className="h-2.5 w-2.5 rounded-full bg-white" />
                        </div>
                      ) : (
                        <div className="h-6 w-6 rounded-full border-2 border-white/20 shrink-0" />
                      )}
                    </button>

                    <button
                      onClick={() => setMethod('multibanco')}
                      className={cn(
                        'w-full flex items-center gap-4 p-4 md:p-5 rounded-2xl border text-left transition-all',
                        method === 'multibanco'
                          ? 'border-[#0070c9]/60 bg-[#0070c9]/10 shadow-[0_0_0_1px_rgba(0,112,201,0.25)]'
                          : 'border-bet62-border hover:border-white/20 bg-bet62-surface/50',
                      )}
                    >
                      <PaymentMethodLogo method="multibanco" size="md" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="font-bold text-base md:text-lg">Multibanco</p>
                          <Badge variant="outline" className="py-0 text-[10px]">Referência</Badge>
                        </div>
                        <p className="text-xs md:text-sm text-white/55 mt-0.5">Mínimo €10 · Sem taxa · Paga em ATM / Homebanking</p>
                      </div>
                      {method === 'multibanco' ? (
                        <div className="h-6 w-6 rounded-full bg-[#0070c9] flex items-center justify-center shrink-0">
                          <div className="h-2.5 w-2.5 rounded-full bg-white" />
                        </div>
                      ) : (
                        <div className="h-6 w-6 rounded-full border-2 border-white/20 shrink-0" />
                      )}
                    </button>

                    <button
                      onClick={() => setMethod('card')}
                      className={cn(
                        'w-full flex items-center gap-4 p-4 md:p-5 rounded-2xl border text-left transition-all',
                        method === 'card'
                          ? 'border-white/30 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.1)]'
                          : 'border-bet62-border hover:border-white/20 bg-bet62-surface/50',
                      )}
                    >
                      <PaymentMethodLogo method="card" size="md" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="font-bold text-base md:text-lg">Visa / Mastercard</p>
                          <Badge variant="outline" className="py-0 text-[10px] border-white/15 text-white/70">Seguro 3DS</Badge>
                        </div>
                        <p className="text-xs md:text-sm text-white/55 mt-0.5">Mínimo €10 · Sem taxa · Débito e Crédito aceites</p>
                      </div>
                      {method === 'card' ? (
                        <div className="h-6 w-6 rounded-full bg-slate-600 flex items-center justify-center shrink-0">
                          <div className="h-2.5 w-2.5 rounded-full bg-white" />
                        </div>
                      ) : (
                        <div className="h-6 w-6 rounded-full border-2 border-white/20 shrink-0" />
                      )}
                    </button>
                  </div>

                  <div className="mb-8">
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/60 mb-3">
                      Valor do Depósito (mín. €10)
                    </label>
                    <div className="relative">
                      <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-white/40 font-mono font-black text-2xl md:text-3xl">€</span>
                      <input
                        type="number"
                        step="0.01"
                        min={10}
                        value={amount}
                        onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                        className="flex h-16 md:h-20 w-full rounded-2xl border border-bet62-border bg-bet62-bg/60 pl-14 pr-5 text-3xl md:text-4xl font-mono font-black text-white placeholder:text-white/30 transition-all focus-visible:outline-none focus-visible:border-bet62-primary focus-visible:ring-2 focus-visible:ring-bet62-primary/30"
                      />
                    </div>
                    <div className="grid grid-cols-4 gap-2 mt-3">
                      {[10, 20, 50, 100].map((v) => (
                        <button
                          key={v}
                          onClick={() => setAmount(v)}
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

                  <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4 mb-6 flex items-start gap-3">
                    <Info size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                    <div className="text-xs md:text-sm text-white/75 leading-relaxed">
                      <span className="font-bold text-emerald-300">Depósitos verificados instantaneamente.</span>
                      <br />
                      Taxa 0%. Mínimo €10. O valor é creditado na carteira assim que a operação for confirmada.
                    </div>
                  </div>

                  {error ? (
                    <p className="mb-4 text-sm text-bet62-danger bg-bet62-danger/10 border border-bet62-danger/30 rounded-xl px-3 py-2">
                      {error}
                    </p>
                  ) : null}

                  <Button
                    variant="primary"
                    size="xl"
                    className="w-full uppercase font-black tracking-widest h-14 md:h-16 text-base md:text-lg"
                    disabled={amount < 10 || loading}
                    loading={loading}
                    loadingText="A redirecionar para pagamento..."
                    onClick={handleSubmit}
                  >
                    CONTINUAR PARA PAGAMENTO
                  </Button>

                  <p className="mt-4 text-center text-[11px] text-white/40 leading-relaxed">
                    Ao continuar, confirmas que tens 18+ anos e aceitas os Termos & Condições.
                    Transação encriptada SSL 256-bit · Stripe Payments
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          <Footer />
        </main>
    </div>
  );
}
