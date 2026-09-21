'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Activity,
  Calendar,
  Trophy,
  Dices,
  User,
  Menu,
  X,
  Wallet,
  ArrowRightLeft,
  History,
  LogOut,
  ChevronDown,
  Gift,
  Plus,
} from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Avatar, AvatarFallback } from '../ui/Avatar';
import { PaymentMethodLogo } from '../ui/PaymentMethodLogo';
import {
  DEFAULT_DEPOSIT_METHOD,
  isPaymentMethodEnabled,
  normalizeDepositMethod,
  type PaymentMethod,
} from '../../lib/payment-methods';
import { cn } from '../../lib/utils';
import { useAuthStore } from '../../stores/auth.store';
import { formatCurrencyEUR } from '../../lib/utils';
import { apiClient, ApiError } from '../../lib/api-client';

const NAV = [
  { href: '/', label: 'Início', icon: Trophy },
  { href: '/live', label: 'Ao Vivo', icon: Activity },
  { href: '/events', label: 'Próximos', icon: Calendar },
  { href: '/casino', label: 'Cassino', icon: Dices },
  { href: '/promocoes', label: 'Promoções', icon: Gift, badge: '5' },
];

export function Bet62Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn('flex items-center gap-2 group', className)}>
      <svg viewBox="0 0 128 48" width="140" height="52" className="h-9 w-auto">
        <text x="14" y="34" fontFamily="'Space Grotesk',sans-serif"
              fontSize="32" fontWeight="900" letterSpacing="-1.2">
          <tspan fill="#e11d48">BET</tspan>
          <tspan fill="#ffffff">62</tspan>
        </text>
      </svg>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [depositOpen, setDepositOpen] = React.useState(false);
  const [depositAmount, setDepositAmount] = React.useState<number>(20);
  const [selectedMethod, setSelectedMethod] = React.useState<PaymentMethod>(DEFAULT_DEPOSIT_METHOD);
  const [depositLoading, setDepositLoading] = React.useState(false);
  const [depositError, setDepositError] = React.useState<string | null>(null);
  const { user, isAuthenticated, logout, isLoading } = useAuthStore();
  const balance = 0;

  const handleDeposit = async () => {
    if (depositAmount < 10) return;
    const paymentMethod = normalizeDepositMethod(selectedMethod);
    setDepositLoading(true);
    setDepositError(null);
    try {
      const data = await apiClient.post<{ checkoutUrl?: string }>('/wallet/deposit/stripe/create-intent', {
        provider: 'STRIPE',
        amount: depositAmount,
        currency: 'EUR',
        paymentMethod,
        returnUrl: `${window.location.origin}/carteira`,
      });
      if (data?.checkoutUrl) {
        window.location.href = data.checkoutUrl;
      } else {
        setDepositError('Não foi possível iniciar o pagamento. Tenta novamente.');
      }
    } catch (err) {
      const message = err instanceof ApiError ? err.message : 'Erro ao iniciar o depósito.';
      setDepositError(message);
    } finally {
      setDepositLoading(false);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-bet62-border bg-bet62-bg/80 backdrop-blur-xl pt-[env(safe-area-inset-top)]">
        <div className="mx-auto max-w-[1600px] px-4 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <button
              className="lg:hidden p-2 rounded-lg text-white/70 hover:text-bet62-primary hover:bg-white/5 transition"
              onClick={() => setMobileOpen(true)}
              aria-label="Menu"
            >
              <Menu size={20} />
            </button>
            <Bet62Logo />
            <nav className="hidden lg:flex items-center gap-1">
              {NAV.map((item) => {
                const active = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'relative group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium transition-all',
                      active
                        ? 'text-bet62-bg bg-bet62-primary'
                        : 'text-white/70 hover:text-white hover:bg-white/5',
                    )}
                  >
                    <Icon size={16} />
                    {item.label}
                    {item.badge ? (
                      <Badge variant="pink" className="py-0 px-1.5 text-[10px] ml-0">
                        {item.badge}
                      </Badge>
                    ) : null}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center gap-2 lg:gap-3">
            {!isAuthenticated || !user ? (
              <>
                <Button variant="primary" size="sm" className="px-5 font-bold uppercase tracking-wider" asChild>
                  <Link href="/login">LOGIN</Link>
                </Button>
              </>
            ) : (
              <>
                <div className="hidden md:flex items-center gap-2 pl-2 border-l border-bet62-border">
                  <button
                    onClick={() => setDepositOpen(true)}
                    className="h-10 w-10 rounded-xl bg-[#10b981] hover:bg-[#059669] shadow-md p-2 text-white font-bold flex items-center justify-center transition-all active:scale-[0.98]"
                    aria-label="Depósito rápido"
                  >
                    <Plus size={18} strokeWidth={2.5} />
                  </button>
                  <Button variant="primary" size="sm" className="gap-1.5">
                    <Wallet size={16} />
                    <span className="font-mono font-bold">{formatCurrencyEUR(balance)}</span>
                  </Button>
                  <div className="relative">
                    <button
                      onClick={() => setMenuOpen((v) => !v)}
                      className="flex items-center gap-2 p-1.5 pr-3 rounded-full border border-bet62-border hover:border-bet62-primary/50 transition bg-bet62-surface/60"
                    >
                      <Avatar className="h-8 w-8 ring-1 ring-bet62-primary/40">
                        <AvatarFallback>{(user.firstName?.[0] ?? user.email[0] ?? 'U').toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <ChevronDown size={14} className="text-white/60" />
                    </button>
                    <AnimatePresence>
                      {menuOpen ? (
                        <motion.div
                          initial={{ opacity: 0, y: -8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -8, scale: 0.96 }}
                          transition={{ duration: 0.18 }}
                          onMouseLeave={() => setMenuOpen(false)}
                          className="absolute right-0 top-full mt-2 w-60 rounded-2xl border border-bet62-border bg-bet62-surface/95 backdrop-blur-xl shadow-glass p-2 z-50"
                        >
                          <div className="px-3 py-2 border-b border-bet62-border/60 mb-1">
                            <p className="font-semibold truncate">{user.firstName ? `${user.firstName} ${user.lastName ?? ''}` : user.email}</p>
                            <p className="text-xs text-white/50 truncate">{user.email}</p>
                          </div>
                          {[
                            { label: 'Perfil', icon: User, href: '/conta' },
                            { label: 'Depósito', icon: ArrowRightLeft, href: '/carteira/deposito' },
                            { label: 'Levantamento', icon: Wallet, href: '/carteira/levantamento' },
                            { label: 'Minhas Apostas', icon: History, href: '/apostas' },
                          ].map((m) => (
                            <button
                              key={m.label}
                              onClick={() => {
                                setMenuOpen(false);
                                router.push(m.href);
                              }}
                              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 hover:text-bet62-primary text-white/85 text-sm transition"
                            >
                              <m.icon size={16} />
                              {m.label}
                            </button>
                          ))}
                          <button
                            disabled={isLoading}
                            onClick={async () => {
                              setMenuOpen(false);
                              await logout();
                              router.push('/');
                            }}
                            className="mt-1 w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-bet62-danger hover:bg-bet62-danger/10 text-sm transition"
                          >
                            <LogOut size={16} />
                            Sair
                          </button>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                </div>
                <div className="md:hidden flex items-center gap-2">
                  <button
                    onClick={() => setDepositOpen(true)}
                    className="h-9 w-9 rounded-xl bg-[#10b981] hover:bg-[#059669] shadow-md text-white font-bold flex items-center justify-center transition-all active:scale-[0.98] shrink-0"
                    aria-label="Depósito rápido"
                  >
                    <Plus size={16} strokeWidth={2.5} />
                  </button>
                  <div className="hidden">
                    <span className="font-mono text-sm text-bet62-primary font-bold">
                      {formatCurrencyEUR(balance)}
                    </span>
                  </div>
                  <div className="relative">
                    <button
                      onClick={() => setMenuOpen((v) => !v)}
                      className="flex items-center gap-1.5 p-1 pr-2 rounded-full border border-bet62-border hover:border-bet62-primary/50 transition bg-bet62-surface/60"
                    >
                      <Avatar className="h-9 w-9 ring-1 ring-bet62-primary/40">
                        <AvatarFallback>{(user.firstName?.[0] ?? user.email[0] ?? 'U').toUpperCase()}</AvatarFallback>
                      </Avatar>
                    </button>
                    <AnimatePresence>
                      {menuOpen ? (
                        <motion.div
                          initial={{ opacity: 0, y: -8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -8, scale: 0.96 }}
                          transition={{ duration: 0.18 }}
                          className="absolute right-0 top-full mt-2 w-60 rounded-2xl border border-bet62-border bg-bet62-surface/95 backdrop-blur-xl shadow-glass p-2 z-50"
                        >
                          <div className="px-3 py-2 border-b border-bet62-border/60 mb-1">
                            <p className="font-semibold truncate">{user.firstName ? `${user.firstName} ${user.lastName ?? ''}` : user.email}</p>
                            <p className="text-xs text-white/50 truncate">{user.email}</p>
                          </div>
                          {[
                            { label: 'Perfil', icon: User, href: '/conta' },
                            { label: 'Depósito', icon: ArrowRightLeft, href: '/carteira/deposito' },
                            { label: 'Levantamento', icon: Wallet, href: '/carteira/levantamento' },
                            { label: 'Minhas Apostas', icon: History, href: '/apostas' },
                          ].map((m) => (
                            <button
                              key={m.label}
                              onClick={() => {
                                setMenuOpen(false);
                                router.push(m.href);
                              }}
                              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 hover:text-bet62-primary text-white/85 text-sm transition"
                            >
                              <m.icon size={16} />
                              {m.label}
                            </button>
                          ))}
                          <button
                            disabled={isLoading}
                            onClick={async () => {
                              setMenuOpen(false);
                              await logout();
                              router.push('/');
                            }}
                            className="mt-1 w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-bet62-danger hover:bg-bet62-danger/10 text-sm transition"
                          >
                            <LogOut size={16} />
                            Sair
                          </button>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 320 }}
              className="fixed top-0 left-0 h-full w-[82vw] max-w-sm z-[60] bg-bet62-bg border-r border-bet62-border shadow-glass flex flex-col lg:hidden"
            >
              <div className="h-16 flex items-center justify-between px-4 border-b border-bet62-border pt-[env(safe-area-inset-top)]">
                <Bet62Logo />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/5 text-white/70"
                  aria-label="Fechar menu"
                >
                  <X size={20} />
                </button>
              </div>
              <nav className="flex-1 p-3 flex flex-col gap-1">
                {NAV.map((n) => (
                  <Link
                    key={n.href}
                    href={n.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium',
                      pathname === n.href
                        ? 'bg-bet62-primary/10 text-bet62-primary border border-bet62-primary/20'
                        : 'text-white/80 hover:bg-white/5',
                    )}
                  >
                    <n.icon size={18} /> {n.label}
                    {n.badge ? <Badge variant="pink" className="ml-auto py-0 text-[10px]">{n.badge}</Badge> : null}
                  </Link>
                ))}
              </nav>
              <div className="p-4 border-t border-bet62-border space-y-2">
                <Button variant="primary" size="lg" className="w-full uppercase font-bold tracking-wider" asChild>
                  <Link href="/login" onClick={() => setMobileOpen(false)}>
                    LOGIN
                  </Link>
                </Button>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {depositOpen ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDepositOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[70]"
            />
            <div className="fixed inset-0 z-[71] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.96 }}
                transition={{ duration: 0.25, type: 'spring', damping: 25, stiffness: 300 }}
                className="pointer-events-auto w-full max-w-lg max-h-[calc(100dvh-2rem)] overflow-y-auto"
              >
                <div className="rounded-3xl border border-bet62-border bg-bet62-surface/95 backdrop-blur-xl shadow-glass p-6">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight">Depósito Rápido</h3>
                    <p className="text-xs text-white/50 mt-0.5">Escolhe o método e valor</p>
                  </div>
                  <button
                    onClick={() => setDepositOpen(false)}
                    className="p-2 rounded-xl hover:bg-white/5 text-white/60 hover:text-white transition"
                    aria-label="Fechar"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="space-y-2.5 mb-5">
                  <button
                    onClick={() => {
                      if (isPaymentMethodEnabled('mbway')) setSelectedMethod('mbway');
                    }}
                    disabled={!isPaymentMethodEnabled('mbway')}
                    className={cn(
                      'w-full flex items-center gap-3 p-3.5 rounded-2xl border text-left transition-all',
                      selectedMethod === 'mbway'
                        ? 'border-[#009688]/60 bg-[#009688]/10 shadow-[0_0_0_1px_rgba(0,150,136,0.25)]'
                        : 'border-bet62-border bg-bet62-surface/50',
                      !isPaymentMethodEnabled('mbway') && 'opacity-55 cursor-not-allowed',
                    )}
                  >
                    <PaymentMethodLogo method="mbway" size="sm" />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm">MB WAY</p>
                      <p className="text-xs text-white/50">Em breve · usar Stripe ou Multibanco</p>
                    </div>
                    {selectedMethod === 'mbway' ? (
                      <div className="h-5 w-5 rounded-full bg-[#009688] flex items-center justify-center shrink-0">
                        <div className="h-2 w-2 rounded-full bg-white" />
                      </div>
                    ) : (
                      <div className="h-5 w-5 rounded-full border-2 border-white/20 shrink-0" />
                    )}
                  </button>

                  <button
                    onClick={() => setSelectedMethod('multibanco')}
                    className={cn(
                      'w-full flex items-center gap-3 p-3.5 rounded-2xl border text-left transition-all',
                      selectedMethod === 'multibanco'
                        ? 'border-[#0070c9]/60 bg-[#0070c9]/10 shadow-[0_0_0_1px_rgba(0,112,201,0.25)]'
                        : 'border-bet62-border hover:border-white/20 bg-bet62-surface/50',
                    )}
                  >
                    <PaymentMethodLogo method="multibanco" size="sm" />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm">Multibanco</p>
                      <p className="text-xs text-white/50">Referência · mín. €10</p>
                    </div>
                    {selectedMethod === 'multibanco' ? (
                      <div className="h-5 w-5 rounded-full bg-[#0070c9] flex items-center justify-center shrink-0">
                        <div className="h-2 w-2 rounded-full bg-white" />
                      </div>
                    ) : (
                      <div className="h-5 w-5 rounded-full border-2 border-white/20 shrink-0" />
                    )}
                  </button>

                  <button
                    onClick={() => setSelectedMethod('card')}
                    className={cn(
                      'w-full flex items-center gap-3 p-3.5 rounded-2xl border text-left transition-all',
                      selectedMethod === 'card'
                        ? 'border-white/30 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.1)]'
                        : 'border-bet62-border hover:border-white/20 bg-bet62-surface/50',
                    )}
                  >
                    <PaymentMethodLogo method="card" size="sm" />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm">Stripe Checkout</p>
                      <p className="text-xs text-white/50">Visa / Mastercard · 3D Secure</p>
                    </div>
                    {selectedMethod === 'card' ? (
                      <div className="h-5 w-5 rounded-full bg-slate-600 flex items-center justify-center shrink-0">
                        <div className="h-2 w-2 rounded-full bg-white" />
                      </div>
                    ) : (
                      <div className="h-5 w-5 rounded-full border-2 border-white/20 shrink-0" />
                    )}
                  </button>
                </div>

                <p className="mb-4 text-[11px] leading-relaxed text-white/45">
                  MB WAY ainda não está ativo como método nativo nesta conta Stripe, por isso fica marcado como indisponível até a ativação real.
                </p>

                <div className="mb-5">
                  <label className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
                    Valor (mín. €10)
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/40 font-mono font-bold text-lg">€</span>
                    <input
                      type="number"
                      step="0.01"
                      min={10}
                      value={depositAmount}
                      onChange={(e) => setDepositAmount(parseFloat(e.target.value) || 0)}
                      className="flex h-14 w-full rounded-2xl border border-bet62-border bg-bet62-bg/60 pl-10 pr-4 text-2xl font-mono font-bold text-white placeholder:text-white/30 transition-all focus-visible:outline-none focus-visible:border-bet62-primary focus-visible:ring-2 focus-visible:ring-bet62-primary/30"
                    />
                  </div>
                  <div className="flex gap-2 mt-2.5">
                    {[10, 20, 50, 100].map((v) => (
                      <button
                        key={v}
                        onClick={() => setDepositAmount(v)}
                        className={cn(
                          'flex-1 py-1.5 rounded-lg text-xs font-semibold border transition-all',
                          depositAmount === v
                            ? 'border-bet62-primary bg-bet62-primary/10 text-bet62-primary'
                            : 'border-bet62-border text-white/60 hover:text-white hover:border-white/20',
                        )}
                      >
                        €{v}
                      </button>
                    ))}
                  </div>
                </div>

                {depositError ? (
                  <p className="mb-3 text-sm text-bet62-danger bg-bet62-danger/10 border border-bet62-danger/30 rounded-xl px-3 py-2">
                    {depositError}
                  </p>
                ) : null}

                <Button
                  variant="primary"
                  size="lg"
                  className="w-full uppercase font-bold tracking-wider h-14 text-base"
                  disabled={depositAmount < 10 || depositLoading}
                  loading={depositLoading}
                  loadingText="A processar..."
                  onClick={handleDeposit}
                >
                  CONTINUAR
                </Button>
                </div>
              </motion.div>
            </div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
