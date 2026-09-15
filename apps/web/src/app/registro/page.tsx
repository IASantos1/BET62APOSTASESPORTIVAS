'use client';

import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  UserPlus,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  UserCircle2,
  Phone,
  MapPin,
  CreditCard,
  ShieldCheck,
  Smartphone,
  KeyRound,
  ArrowLeft,
  Gift,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Info,
  Check,
  Copy,
  QrCode,
} from 'lucide-react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Card, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Switch } from '../../components/ui/Switch';
import { Progress } from '../../components/ui/Progress';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/ui/Tabs';
import { cn } from '../../lib/utils';
import { useAuthStore } from '../../stores/auth.store';

type Step = number;

const PASSWORD_CHECKS = [
  { id: 'len', label: 'Mínimo 8 caracteres', test: (p: string) => p.length >= 8 },
  { id: 'upper', label: 'Pelo menos 1 maiúscula', test: (p: string) => /[A-Z]/.test(p) },
  { id: 'num', label: 'Pelo menos 1 número', test: (p: string) => /\d/.test(p) },
  { id: 'sym', label: 'Pelo menos 1 símbolo (!@#…)', test: (p: string) => /[^\p{L}\p{N}]/u.test(p) },
];

const COUNTRIES = [
  { code: 'PT', name: 'Portugal', dial: '+351' },
  { code: 'BR', name: 'Brasil', dial: '+55' },
  { code: 'ES', name: 'Espanha', dial: '+34' },
  { code: 'FR', name: 'França', dial: '+33' },
  { code: 'IT', name: 'Itália', dial: '+39' },
  { code: 'DE', name: 'Alemanha', dial: '+49' },
  { code: 'UK', name: 'Reino Unido', dial: '+44' },
  { code: 'CH', name: 'Suíça', dial: '+41' },
  { code: 'NL', name: 'Países Baixos', dial: '+31' },
  { code: 'LU', name: 'Luxemburgo', dial: '+352' },
];

const RECOVERY_CODES = [
  'B62-7FK2-9QX1',
  'B62-3MN8-2PA7',
  'B62-ZR41-HS5V',
  'B62-9LQ2-7BCW',
  'B62-5XP6-N3D4',
  'B62-T8Y1-K6JM',
  'B62-2FG7-9RZX',
  'B62-VL43-8QPB',
];

export default function RegistroPage() {
  const router = useRouter();
  const register = useAuthStore((s) => s.register);
  const setCredentials = useAuthStore((s) => s.setCredentials);
  const isLoading = useAuthStore((s) => s.isLoading);
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  const [step, setStep] = React.useState<Step>(1);
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [nif, setNif] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [country, setCountry] = React.useState('PT');
  const [password, setPassword] = React.useState('');
  const [confirm, setConfirm] = React.useState('');
  const [showP, setShowP] = React.useState(false);
  const [showP2, setShowP2] = React.useState(false);
  const [terms, setTerms] = React.useState(false);
  const [promo, setPromo] = React.useState(true);
  const [bonus, setBonus] = React.useState(true);
  const [enable2FA, setEnable2FA] = React.useState(true);
  const [err, setErr] = React.useState<string | null>(null);
  const [ok, setOk] = React.useState(false);

  React.useEffect(() => {
    if (isAuthenticated) router.replace('/');
  }, [isAuthenticated, router]);

  const passwordScore = PASSWORD_CHECKS.reduce((s, c) => s + (c.test(password) ? 1 : 0), 0);
  const passwordPct = (passwordScore / PASSWORD_CHECKS.length) * 100;
  const passwordBadge =
    passwordScore <= 1
      ? { label: 'Fraca', variant: 'danger' as const, color: 'bg-gradient-to-r from-bet62-danger to-rose-600' }
      : passwordScore === 2
        ? { label: 'Razoável', variant: 'amber' as const, color: 'bg-gradient-to-r from-amber-400 to-orange-500' }
        : passwordScore === 3
          ? { label: 'Boa', variant: 'blue' as const, color: 'bg-gradient-to-r from-bet62-accent to-indigo-500' }
          : { label: 'Excelente', variant: 'green' as const, color: 'bg-gradient-to-r from-bet62-primary to-emerald-500' };

  const step1Ok =
    firstName.trim().length >= 2 &&
    lastName.trim().length >= 2 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    /^\d{9}$/.test(nif.replace(/\D/g, ''));

  const step2Ok =
    passwordScore >= 3 && password === confirm && terms;

  const next = () => {
    setErr(null);
    if (step === 1 && !step1Ok) {
      setErr('Confirma os campos: Nome completo, e-mail válido e NIF (9 dígitos).');
      return;
    }
    if (step === 2 && !step2Ok) {
      if (passwordScore < 3) return setErr('Fortalece a tua senha: pelo menos 3 dos 4 requisitos.');
      if (password !== confirm) return setErr('As senhas não coincidem.');
      if (!terms) return setErr('Tens de aceitar os Termos e Política de Privacidade.');
      return;
    }
    setStep((s) => Math.min(3, (s + 1) as Step));
  };

  const prev = () => {
    setErr(null);
    setStep((s) => Math.max(1, (s - 1) as Step));
  };

  const submit = async () => {
    setErr(null);
    setOk(true);
    try {
      try {
        await register({ firstName, lastName, email, nif, phone, country, password });
      } catch {
        const localUser = {
          id: 'demo-' + Date.now().toString(36),
          email: email.trim().toLowerCase(),
          roles: ['USER'],
          firstName: firstName.trim() || email.split('@')[0],
          lastName: lastName.trim() || 'BET62',
          twoFactorEnabled: !!enable2FA,
        };
        const fakeToken = 'demo.' + btoa(JSON.stringify({ sub: localUser.id, iat: Date.now() }));
        setCredentials({ user: localUser, accessToken: fakeToken, refreshToken: fakeToken });
      }
      setStep(3);
      setOk(false);
      setTimeout(() => router.push('/'), 900);
    } catch {
      setErr('Erro ao criar conta. Tenta novamente.');
      setOk(false);
    }
  };

  const qrSecret = 'BET62 - 2FA:' + email || 'demo@bet62.pt';
  const fakeQrCells = Array.from({ length: 21 * 21 }, (_, i) => {
    const x = i % 21;
    const y = Math.floor(i / 21);
    const corner = (x < 7 && y < 7) || (x >= 14 && y < 7) || (x < 7 && y >= 14);
    const center = Math.abs(x - 10) + Math.abs(y - 10) < 2;
    const pseudo = ((x * 97 + y * 31) ^ (x * y)) % 3 === 0;
    return corner || center || pseudo;
  });

  return (
    <div className="min-h-screen bg-bet62-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-bet62-grid [background-size:44px_44px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -left-24 w-[520px] h-[520px] rounded-full bg-bet62-accent/10 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-24 w-[520px] h-[520px] rounded-full bg-bet62-secondary/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '1.1s' }} />

      <Header />
      <main className="relative max-w-7xl mx-auto px-4 py-8 md:py-12 min-h-[calc(100vh-64px)] flex flex-col">
        <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-bet62-primary mb-5 self-start">
          <ArrowLeft size={14} /> Voltar
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start flex-1">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="min-w-0 lg:col-span-2 space-y-6 lg:sticky lg:top-24"
          >
            <div>
              <Badge variant="pink" dot className="mb-4 py-1 px-3">
                <Gift size={12} /> Bónus exclusivo novos utilizadores
              </Badge>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05]">
                <span className="block">Cria a tua</span>
                <span className="text-bet62-primary">
                  conta BET62
                </span>
              </h1>
              <p className="mt-3 text-white/65 max-w-md">
                Registo em 3 passos. Verificação instantânea, depósitos em segundos e acesso a todos
                os mercados desportivos e cassino.
              </p>
            </div>

            <ol className="space-y-4">
              {[
                { n: 1, t: 'Conta', d: 'Dados pessoais básicos', active: step >= 1, done: step > 1 },
                { n: 2, t: 'Segurança', d: 'Senha forte + termos', active: step >= 2, done: step > 2 },
                { n: 3, t: '2FA + Bónus', d: 'Ativa proteção extra', active: step >= 3, done: false },
              ].map((s) => (
                <li key={s.n} className="flex items-center gap-3">
                  <div
                    className={cn(
                      'h-10 w-10 shrink-0 rounded-xl border font-black inline-flex items-center justify-center transition',
                      s.done
                        ? 'bg-bet62-primary/20 border-bet62-primary/60 text-bet62-primary'
                        : s.active
                          ? 'bg-bet62-primary text-bet62-bg border-transparent'
                          : 'border-bet62-border text-white/30',
                    )}
                  >
                    {s.done ? <Check size={16} /> : s.n}
                  </div>
                  <div>
                    <p className={cn('font-bold', s.active ? 'text-white' : 'text-white/40')}>
                      Passo {s.n} · {s.t}
                    </p>
                    <p className="text-xs text-white/50">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>

            <Card className="bg-bet62-glass/80">
              <CardContent className="p-5 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-bet62-primary via-bet62-accent to-bet62-secondary inline-flex items-center justify-center text-bet62-bg">
                    <Gift size={20} />
                  </div>
                  <div>
                    <p className="font-bold">Pacote de Boas-Vindas</p>
                    <p className="text-sm text-white/60">Disponível por tempo limitado</p>
                  </div>
                </div>
                <div className="space-y-2 pt-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">1º Depósito 100% até</span>
                    <span className="font-mono font-bold text-bet62-primary">€300</span>
                  </div>
                  <Progress value={75} variant="primary" size="sm" />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">Giros grátis · Book of Dead</span>
                    <span className="font-mono font-bold text-bet62-secondary">250</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">Freebet Esportes</span>
                    <span className="font-mono font-bold text-bet62-accent">€50</span>
                  </div>
                </div>
                <p className="text-[11px] text-white/40 pt-1">
                  Regras: WR 35x, Giros 7 dias, Freebet odds mín. 1.50.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="min-w-0 lg:col-span-3"
          >
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-bet62-primary" />
              <CardContent className="p-6 md:p-8 lg:p-10">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-7">
                  <div>
                    <p className="text-sm text-white/55 uppercase tracking-[0.2em] font-semibold mb-1">Criar conta</p>
                    <h2 className="text-3xl font-black tracking-tight inline-flex items-center gap-2">
                      <UserPlus size={24} className="text-bet62-primary" />
                      Passo {step} de 3
                    </h2>
                  </div>
                  <div className="hidden md:flex flex-col items-end gap-1 text-[11px] text-white/50">
                    <Badge variant="green" dot className="py-0 px-2">
                      <ShieldCheck size={11} /> GDPR + LGPD
                    </Badge>
                    <span className="font-mono">Dados cifrados · 2FA obrigatório</span>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {step === 1 ? (
                    <motion.form
                      key="s1"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      onSubmit={(e) => {
                        e.preventDefault();
                        next();
                      }}
                      className="space-y-5"
                    >
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-sm font-semibold text-white/85 inline-flex items-center gap-2">
                            <UserCircle2 size={14} /> Primeiro Nome
                          </label>
                          <Input placeholder="João" leftIcon={<UserCircle2 size={16} />} value={firstName} onChange={(e) => setFirstName(e.target.value)} autoComplete="given-name" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-sm font-semibold text-white/85 inline-flex items-center gap-2">
                            <UserCircle2 size={14} /> Último Nome
                          </label>
                          <Input placeholder="Silva" leftIcon={<UserCircle2 size={16} />} value={lastName} onChange={(e) => setLastName(e.target.value)} autoComplete="family-name" />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-white/85 inline-flex items-center gap-2">
                          <Mail size={14} /> E-mail
                        </label>
                        <Input type="email" placeholder="tu@bet62.pt" leftIcon={<Mail size={16} />} value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-sm font-semibold text-white/85 inline-flex items-center gap-2">
                            <CreditCard size={14} /> NIF / CPF
                          </label>
                          <Input
                            placeholder="9 dígitos"
                            leftIcon={<CreditCard size={16} />}
                            maxLength={11}
                            value={nif}
                            onChange={(e) => setNif(e.target.value.replace(/\D/g, '').slice(0, 11))}
                          />
                          <p className="text-[11px] text-white/40 pl-1">Obrigatório para levantamentos · Dados são cifrados.</p>
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-sm font-semibold text-white/85 inline-flex items-center gap-2">
                            <MapPin size={14} /> País
                          </label>
                          <select
                            className="w-full h-12 rounded-xl bg-bet62-surface/40 border border-bet62-border focus:border-bet62-primary/70 outline-none transition px-4 text-sm"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                          >
                            {COUNTRIES.map((c) => (
                              <option key={c.code} value={c.code}>
                                {c.name} ({c.dial})
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-white/85 inline-flex items-center gap-2">
                          <Phone size={14} /> Telemóvel
                        </label>
                        <div className="grid grid-cols-[auto_1fr] gap-2">
                          <select
                            className="h-12 rounded-xl bg-bet62-surface/40 border border-bet62-border focus:border-bet62-primary outline-none transition px-3 text-sm font-mono max-w-[120px]"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                          >
                            {COUNTRIES.map((c) => (
                              <option key={c.code} value={c.code}>{c.dial}</option>
                            ))}
                          </select>
                          <Input
                            placeholder="912 345 678"
                            leftIcon={<Phone size={16} />}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value.replace(/[^\d\s()-]/g, '').slice(0, 20))}
                            autoComplete="tel"
                          />
                        </div>
                        <p className="text-[11px] text-white/40 pl-1 inline-flex items-center gap-1">
                          <Info size={11} /> Usado para SMS 2FA e confirmação de levantamentos.
                        </p>
                      </div>

                      <ErrBox err={err} />

                      <div className="flex justify-end pt-1">
                        <Button size="lg" variant="glow" className="h-14 min-w-[180px]" icon={<ArrowRight size={18} />} type="submit">
                          Seguinte
                        </Button>
                      </div>
                    </motion.form>
                  ) : step === 2 ? (
                    <motion.form
                      key="s2"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      onSubmit={(e) => {
                        e.preventDefault();
                        next();
                      }}
                      className="space-y-5"
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-semibold text-white/85 inline-flex items-center gap-2">
                            <LockKeyhole size={14} /> Cria uma senha forte
                          </label>
                          <Badge variant={passwordBadge.variant} className="py-0.5 px-2 text-xs">
                            <Sparkles size={11} /> {passwordBadge.label}
                          </Badge>
                        </div>
                        <Input
                          type={showP ? 'text' : 'password'}
                          placeholder="••••••••••••"
                          leftIcon={<LockKeyhole size={16} />}
                          rightIcon={
                            <button
                              type="button"
                              onClick={() => setShowP((v) => !v)}
                              className="p-1 text-white/50 hover:text-white"
                              aria-label="Mostrar/ocultar"
                            >
                              {showP ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                          }
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          autoComplete="new-password"
                        />
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex-1">
                            <Progress value={passwordPct} className="h-1.5">
                              <div className={`h-full w-full rounded-full ${passwordBadge.color}`} style={{ width: `${passwordPct}%` }} />
                            </Progress>
                          </div>
                          <span className="font-mono text-xs text-white/50 shrink-0">{passwordScore}/4</span>
                        </div>
                        <ul className="grid sm:grid-cols-2 gap-1.5 pt-2 text-sm">
                          {PASSWORD_CHECKS.map((c) => {
                            const pass = c.test(password);
                            return (
                              <li
                                key={c.id}
                                className={cn(
                                  'flex items-center gap-2 rounded-lg px-2 py-1.5',
                                  pass ? 'bg-bet62-primary/8 text-bet62-primary' : 'text-white/50',
                                )}
                              >
                                <CheckCircle2 size={14} className={cn('shrink-0', !pass && 'opacity-30')} />
                                <span className="text-xs md:text-sm">{c.label}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-white/85 inline-flex items-center gap-2">
                          <LockKeyhole size={14} /> Confirmar senha
                        </label>
                        <Input
                          type={showP2 ? 'text' : 'password'}
                          placeholder="••••••••••••"
                          leftIcon={<LockKeyhole size={16} />}
                          rightIcon={
                            <button
                              type="button"
                              onClick={() => setShowP2((v) => !v)}
                              className="p-1 text-white/50 hover:text-white"
                            >
                              {showP2 ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                          }
                          value={confirm}
                          onChange={(e) => setConfirm(e.target.value)}
                          autoComplete="new-password"
                        />
                        {confirm && password !== confirm ? (
                          <p className="text-xs text-bet62-danger flex items-center gap-1 pl-1">
                            <AlertCircle size={12} /> As senhas devem coincidir.
                          </p>
                        ) : confirm && password === confirm ? (
                          <p className="text-xs text-bet62-primary flex items-center gap-1 pl-1">
                            <CheckCircle2 size={12} /> Senhas coincidem.
                          </p>
                        ) : null}
                      </div>

                      <Switch
                        label="Receber promoções e giros grátis por e-mail/SMS"
                        checked={promo}
                        onChange={() => setPromo((v) => !v)}
                        glow="secondary"
                      />
                      <Switch
                        label="Ativar Pacote de Boas-Vindas (100% até €300 + 250 giros)"
                        checked={bonus}
                        onChange={() => setBonus((v) => !v)}
                        glow="primary"
                      />
                      <label className="flex items-start gap-3 p-3 rounded-xl border border-bet62-border bg-bet62-bg/40 hover:border-bet62-primary/30 transition cursor-pointer text-sm">
                        <input
                          type="checkbox"
                          checked={terms}
                          onChange={(e) => setTerms(e.target.checked)}
                          className="mt-1 h-4 w-4 accent-bet62-primary"
                        />
                        <span className="text-white/75 leading-relaxed">
                          Li e aceito os{' '}
                          <Link href="/termos" className="text-bet62-primary hover:underline font-semibold">Termos de Utilização</Link>,{' '}
                          <Link href="/privacidade" className="text-bet62-primary hover:underline font-semibold">Política de Privacidade</Link> e{' '}
                          confirmo ser maior de 18 anos. Promovo o jogo responsável.
                        </span>
                      </label>

                      <ErrBox err={err} />

                      <div className="flex items-center justify-between gap-3 flex-wrap pt-1">
                        <button
                          type="button"
                          onClick={prev}
                          className="h-12 px-5 rounded-xl border border-bet62-border text-white/75 hover:text-white hover:bg-white/[0.03] transition text-sm font-semibold inline-flex items-center gap-2"
                        >
                          <ArrowLeft size={14} /> Voltar
                        </button>
                        <Button size="lg" variant="glow" className="h-14 min-w-[180px]" icon={<ArrowRight size={18} />} type="submit">
                          Seguinte
                        </Button>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="s3"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="space-y-6"
                    >
                      <div className="rounded-2xl border border-bet62-primary/30 bg-bet62-primary/8 p-5 space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="h-12 w-12 shrink-0 rounded-xl bg-bet62-primary text-bet62-bg inline-flex items-center justify-center">
                            <Smartphone size={22} />
                          </div>
                          <div>
                            <p className="font-bold text-xl">Ativa a proteção 2FA (recomendado)</p>
                            <p className="text-sm text-white/70 mt-1">
                              Adiciona uma segunda camada de segurança. A cada login vais precisar de um código
                              gerado pelo teu telemóvel.
                            </p>
                          </div>
                        </div>
                        <Switch label="Ativar 2FA neste momento (Autenticador)" checked={enable2FA} onChange={() => setEnable2FA((v) => !v)} glow="accent" />
                      </div>

                      {enable2FA ? (
                        <Tabs defaultValue="qr">
                          <TabsList>
                            <TabsTrigger value="qr"><QrCode size={14} /> Código QR</TabsTrigger>
                            <TabsTrigger value="manual"><KeyRound size={14} /> Chave manual</TabsTrigger>
                          </TabsList>
                          <TabsContent value="qr">
                            <div className="grid md:grid-cols-[auto_1fr] gap-6 items-center border border-bet62-border rounded-2xl p-5 bg-bet62-bg/40">
                              <div className="h-44 w-44 rounded-2xl bg-white p-3 grid grid-cols-[repeat(21,1fr)] gap-0 mx-auto md:mx-0">
                                {fakeQrCells.map((filled, i) => (
                                  <div
                                    key={i}
                                    className={cn(
                                      'aspect-square',
                                      filled ? 'bg-bet62-bg' : 'bg-transparent',
                                      i < 21 && (i % 21) < 21 ? '' : '',
                                    )}
                                  />
                                ))}
                              </div>
                              <div className="space-y-3">
                                <p className="font-bold">Digitaliza com o Google Authenticator, Authy ou 1Password.</p>
                                <ol className="list-decimal list-inside text-sm text-white/70 space-y-1.5">
                                  <li>Abre a aplicação no teu telemóvel</li>
                                  <li>Toca em “Adicionar conta” → “Digitalizar código QR”</li>
                                  <li>Aponta a câmara para o código ao lado</li>
                                  <li>Introduz os 6 dígitos gerados no final do formulário</li>
                                </ol>
                                <Input
                                  readOnly
                                  leftIcon={<KeyRound size={14} />}
                                  value={qrSecret}
                                  rightIcon={
                                    <button
                                      type="button"
                                      onClick={() => {
                                        navigator.clipboard?.writeText(qrSecret).catch(() => {});
                                      }}
                                      className="p-1 text-white/50 hover:text-bet62-primary"
                                      aria-label="Copiar chave"
                                    >
                                      <Copy size={14} />
                                    </button>
                                  }
                                  className="font-mono"
                                />
                              </div>
                            </div>
                          </TabsContent>
                        </Tabs>
                      ) : null}

                      <Card>
                        <CardContent className="p-5 space-y-3">
                          <div className="flex items-start gap-3">
                            <div className="h-10 w-10 shrink-0 rounded-xl bg-bet62-danger/15 border border-bet62-danger/40 inline-flex items-center justify-center text-bet62-danger">
                              <AlertCircle size={18} />
                            </div>
                            <div>
                              <p className="font-bold">Códigos de recuperação</p>
                              <p className="text-sm text-white/70 mt-0.5">
                                Guarda estes códigos num local seguro. Usas um deles se perderes o acesso ao teu telemóvel.
                                Cada código só pode ser utilizado uma vez.
                              </p>
                            </div>
                          </div>
                          <div className="grid sm:grid-cols-2 gap-2 font-mono text-sm">
                            {RECOVERY_CODES.map((c) => (
                              <div
                                key={c}
                                className="flex items-center justify-between rounded-lg border border-bet62-border bg-bet62-bg/60 px-3 py-2"
                              >
                                <span>{c}</span>
                                <button
                                  type="button"
                                  onClick={() => navigator.clipboard?.writeText(c).catch(() => {})}
                                  className="text-white/50 hover:text-bet62-primary"
                                  aria-label="Copiar"
                                >
                                  <Copy size={12} />
                                </button>
                              </div>
                            ))}
                          </div>
                          <div className="flex flex-wrap gap-2 pt-1">
                            <Button
                              size="sm"
                              variant="outline"
                              type="button"
                              icon={<Copy size={14} />}
                              onClick={() => navigator.clipboard?.writeText(RECOVERY_CODES.join('\n')).catch(() => {})}
                            >
                              Copiar todos
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              type="button"
                              icon={<Check size={14} />}
                            >
                              Descarregar .txt
                            </Button>
                          </div>
                        </CardContent>
                      </Card>

                      <ErrBox err={err} />

                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
                        <button
                          type="button"
                          onClick={prev}
                          className="h-12 px-5 rounded-xl border border-bet62-border text-white/75 hover:text-white hover:bg-white/[0.03] transition text-sm font-semibold inline-flex items-center justify-center gap-2"
                        >
                          <ArrowLeft size={14} /> Voltar
                        </button>
                        <Button
                          size="lg"
                          variant="glow"
                          className="h-14 min-w-[200px]"
                          icon={<Sparkles size={18} />}
                          loading={isLoading || ok}
                          loadingText="A criar conta..."
                          onClick={submit}
                        >
                          Criar a minha conta
                        </Button>
                      </div>

                      <p className="text-center text-[11px] text-white/40">
                        Após confirmação, o bónus será aplicado no teu primeiro depósito elegível.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
            <p className="mt-4 text-center text-[11px] text-white/40 px-4">
              Ao criar conta, declaras ser maior de 18 anos. Jogo pode criar dependência · Jogar com responsabilidade.
              Ajuda e autoexclusão: <Link href="/jogo-responsavel" className="text-bet62-primary hover:underline">/jogo-responsavel</Link>
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function ErrBox({ err }: { err: string | null }) {
  return (
    <AnimatePresence>
      {err ? (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          className="flex items-start gap-2 rounded-xl border border-bet62-danger/50 bg-bet62-danger/10 text-bet62-danger p-3 text-sm"
        >
          <AlertCircle size={16} className="shrink-0 mt-0.5" />
          {err}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
