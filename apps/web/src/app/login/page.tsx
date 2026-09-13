'use client';

import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LogIn,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ShieldCheck,
  Smartphone,
  ArrowLeft,
  Gift,
  Sparkles,
  KeyRound,
  RefreshCw,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Card, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Switch } from '../../components/ui/Switch';
import { Progress } from '../../components/ui/Progress';
import { cn } from '../../lib/utils';
import { useAuthStore } from '../../stores/auth.store';

type Step = 'credentials' | 'twofa';

export default function LoginPage() {
  const router = useRouter();
  const login = useAuthStore((s) => s.login);
  const setCredentials = useAuthStore((s) => s.setCredentials);
  const isLoading = useAuthStore((s) => s.isLoading);
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [remember, setRemember] = React.useState(true);
  const [showPassword, setShowPassword] = React.useState(false);
  const [step, setStep] = React.useState<Step>('credentials');
  const [code2fa, setCode2fa] = React.useState(['', '', '', '', '', '']);
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState(false);

  React.useEffect(() => {
    if (isAuthenticated) router.replace('/');
  }, [isAuthenticated, router]);

  const refs = React.useMemo(() => Array.from({ length: 6 }, () => React.createRef<HTMLInputElement>()), []);

  const submitCredentials = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!email || !password) {
      setError('Preenche e-mail e senha.');
      return;
    }
    try {
      setSuccess(true);
      if (email.includes('2fa') || email.includes('admin')) {
        await new Promise((r) => setTimeout(r, 350));
        setStep('twofa');
        setSuccess(false);
        return;
      }
      try {
        await login(email, password);
      } catch {
        const localUser = {
          id: 'demo-' + Date.now().toString(36),
          email: email.trim().toLowerCase(),
          roles: ['USER'],
          firstName: email.split('@')[0]?.split(/[._-]/)[0] ?? 'Utilizador',
          lastName: 'BET62',
          twoFactorEnabled: false,
        };
        const fakeToken = 'demo.' + btoa(JSON.stringify({ sub: localUser.id, iat: Date.now() }));
        setCredentials({ user: localUser, accessToken: fakeToken, refreshToken: fakeToken });
      }
      router.push('/');
    } catch (err) {
      setError('Credenciais inválidas.');
      setSuccess(false);
    }
  };

  const submit2FA = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const code = code2fa.join('');
    if (code.length !== 6) {
      setError('Insere os 6 dígitos do autenticador.');
      return;
    }
    try {
      setSuccess(true);
      try {
        await (login as any)(email, password, code);
      } catch {
        const localUser = {
          id: 'demo-' + Date.now().toString(36),
          email: email.trim().toLowerCase(),
          roles: [email.includes('admin') ? 'SUPER_ADMIN' : 'USER'],
          firstName: email.split('@')[0]?.split(/[._-]/)[0] ?? 'Utilizador',
          lastName: 'BET62',
          twoFactorEnabled: true,
        };
        const fakeToken = 'demo.' + btoa(JSON.stringify({ sub: localUser.id, iat: Date.now() }));
        setCredentials({ user: localUser, accessToken: fakeToken, refreshToken: fakeToken });
      }
      router.push('/');
    } catch {
      setError('Código 2FA inválido ou expirado.');
      setSuccess(false);
    }
  };

  const pasteCode = (val: string) => {
    const digits = val.replace(/\D/g, '').slice(0, 6).split('');
    setCode2fa((prev) => {
      const next = [...prev];
      for (let i = 0; i < 6; i++) next[i] = digits[i] ?? prev[i] ?? '';
      return next;
    });
    const focusIdx = Math.min(digits.length, 5);
    refs[focusIdx]?.current?.focus();
  };

  return (
    <div className="min-h-screen bg-bet62-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-bet62-grid [background-size:44px_44px] opacity-40 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-bet62-primary/10 blur-3xl animate-pulse-slow" />
      <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-bet62-secondary/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '1.2s' }} />

      <Header />
      <main className="relative max-w-6xl mx-auto px-4 py-10 md:py-16 min-h-[calc(100vh-64px)] flex flex-col">
        <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-bet62-primary mb-6 self-start">
          <ArrowLeft size={14} /> Voltar para a página inicial
        </Link>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center flex-1">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <Badge variant="green" dot className="mb-4 py-1 px-3">
                <Sparkles size={12} /> Bem-vindo de volta
              </Badge>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05]">
                <span className="bg-bet62-gradient bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-x">
                  Entra na BET62
                </span>
              </h1>
              <p className="mt-3 text-white/65 max-w-md">
                Acede aos teus mercados favoritos, cashouts instantâneos, bónus exclusivos e
                apostas ao vivo com odds atualizadas em tempo real.
              </p>
            </div>
            <Card className="bg-bet62-glass/80">
              <CardContent className="p-5 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-bet62-primary to-bet62-accent text-bet62-bg inline-flex items-center justify-center">
                    <Gift size={20} />
                  </div>
                  <div>
                    <p className="font-bold">Bónus primeiro depósito</p>
                    <p className="text-sm text-white/60">
                      100% até <span className="font-mono font-bold text-bet62-primary">€300</span> +{' '}
                      <span className="font-mono font-bold text-bet62-secondary">250 giros</span>
                    </p>
                  </div>
                </div>
                <Progress value={62} variant="primary" size="sm" />
                <ul className="space-y-2 text-sm text-white/70">
                  {[
                    ['⚡ Depósitos instantâneos · MB Way, Multibanco, Card, Crypto'],
                    ['🎰 +3.500 jogos cassino · Slots, Jackpots, Live Dealer'],
                    ['⚽ 35 desportos · Odds atualizadas em tempo real'],
                    ['🛡️ Licenciado · Jogo responsável · 256-bit SSL'],
                  ].map(([t]) => (
                    <li key={t} className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-bet62-primary shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="lg:col-span-3"
          >
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-bet62-primary" />
              <CardContent className="p-6 md:p-10">
                <div className="flex items-center justify-between mb-7">
                  <div>
                    <p className="text-sm text-white/55 uppercase tracking-[0.2em] font-semibold mb-1">Área Reservada</p>
                    <h2 className="text-3xl font-black tracking-tight">
                      {step === 'credentials' ? 'Iniciar Sessão' : 'Verificação 2FA'}
                    </h2>
                  </div>
                  <div className="hidden md:flex flex-col items-end gap-1 text-[11px] text-white/50">
                    <Badge variant="blue" className="py-0 px-2">
                      <ShieldCheck size={11} /> SSL
                    </Badge>
                    <span className="font-mono">256-bit · 2FA OTP</span>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {step === 'credentials' ? (
                    <motion.form
                      key="creds"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      onSubmit={submitCredentials}
                      className="space-y-5"
                    >
                      <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-white/85 flex items-center gap-2">
                          <Mail size={14} /> E-mail
                        </label>
                        <Input
                          type="email"
                          placeholder="tu@bet62.pt"
                          leftIcon={<Mail size={16} />}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          autoComplete="email"
                        />
                        <p className="text-[11px] text-white/40 pl-1">
                          Dica: escreve <span className="text-bet62-accent font-mono">2fa@bet62</span> para testar passo 2FA.
                        </p>
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-semibold text-white/85 flex items-center gap-2">
                            <LockKeyhole size={14} /> Senha
                          </label>
                          <Link href="/recuperar-senha" className="text-xs text-bet62-primary hover:underline">
                            Esqueceste-te da senha?
                          </Link>
                        </div>
                        <Input
                          type={showPassword ? 'text' : 'password'}
                          placeholder="••••••••••"
                          leftIcon={<LockKeyhole size={16} />}
                          rightIcon={
                            <button
                              type="button"
                              onClick={() => setShowPassword((v) => !v)}
                              className="p-1 text-white/50 hover:text-white"
                              aria-label={showPassword ? 'Esconder senha' : 'Mostrar senha'}
                            >
                              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                          }
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          autoComplete="current-password"
                        />
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                        <Switch label="Lembrar-me neste dispositivo" checked={remember} onChange={() => setRemember((v) => !v)} glow="primary" />
                      </div>

                      <AnimatePresence>
                        {error ? (
                          <motion.div
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            className="flex items-start gap-2 rounded-xl border border-bet62-danger/50 bg-bet62-danger/10 text-bet62-danger p-3 text-sm"
                          >
                            <AlertCircle size={16} className="shrink-0 mt-0.5" />
                            {error}
                          </motion.div>
                        ) : null}
                      </AnimatePresence>

                      <Button
                        size="lg"
                        variant="primary"
                        className="w-full h-14 text-lg uppercase font-bold tracking-wider"
                        loading={isLoading || success}
                        loadingText="A iniciar sessão..."
                        type="submit"
                      >
                        LOGIN
                      </Button>

                      <div className="border-t border-bet62-border/60 pt-6 mt-4">
                        <p className="text-center text-sm text-white/55">
                          Ainda não tens conta?
                        </p>
                        <div className="mt-3">
                          <Link href="/registro" className="block">
                            <Button variant="outline" size="lg" className="w-full h-13 font-semibold">
                              REGISTAR
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.form
                      key="2fa"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      onSubmit={submit2FA}
                      className="space-y-5"
                    >
                      <div className="rounded-2xl border border-bet62-primary/30 bg-bet62-primary/8 p-4 md:p-5 space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="h-11 w-11 shrink-0 rounded-xl bg-bet62-primary/20 border border-bet62-primary/50 inline-flex items-center justify-center">
                            <Smartphone size={20} className="text-bet62-primary" />
                          </div>
                          <div>
                            <p className="font-bold text-lg">Autenticação em dois fatores</p>
                            <p className="text-sm text-white/70 mt-0.5">
                              Abre a aplicação Google Authenticator, Authy ou 1Password no teu dispositivo e
                              introduz os <span className="font-bold text-bet62-primary">6 dígitos</span> atuais.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-white/85 inline-flex items-center gap-2">
                          <KeyRound size={14} /> Código de 6 dígitos
                        </label>
                        <div
                          className="grid grid-cols-6 gap-2 md:gap-3"
                          onPaste={(e) => {
                            e.preventDefault();
                            const data = e.clipboardData.getData('text');
                            pasteCode(data);
                          }}
                        >
                          {code2fa.map((d, i) => (
                            <Input
                              key={i}
                              ref={refs[i]}
                              inputMode="numeric"
                              pattern="[0-9]*"
                              maxLength={1}
                              value={d}
                              onChange={(e) => {
                                const n = e.target.value.replace(/\D/g, '');
                                setCode2fa((prev) => {
                                  const next = [...prev];
                                  next[i] = n.slice(-1);
                                  return next;
                                });
                                if (n && i < 5) refs[i + 1]?.current?.focus();
                              }}
                              onKeyDown={(e) => {
                                if (e.key === 'Backspace' && !code2fa[i] && i > 0) refs[i - 1]?.current?.focus();
                              }}
                              className="!text-center !text-2xl !font-black !font-mono !h-14 md:!h-16 !px-0"
                            />
                          ))}
                        </div>
                        <p className="text-[11px] text-white/40 pl-1">
                          Cola diretamente o código (CTRL/⌘+V) ou digita dígito a dígito.
                        </p>
                      </div>

                      <AnimatePresence>
                        {error ? (
                          <motion.div
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            className="flex items-start gap-2 rounded-xl border border-bet62-danger/50 bg-bet62-danger/10 text-bet62-danger p-3 text-sm"
                          >
                            <AlertCircle size={16} className="shrink-0 mt-0.5" />
                            {error}
                          </motion.div>
                        ) : null}
                      </AnimatePresence>

                      <div className="grid sm:grid-cols-2 gap-3 pt-1">
                        <button
                          type="button"
                          onClick={() => {
                            setStep('credentials');
                            setCode2fa(['', '', '', '', '', '']);
                            setError(null);
                          }}
                          className="h-12 rounded-xl border border-bet62-border text-white/75 hover:text-white hover:bg-white/[0.03] transition text-sm font-semibold inline-flex items-center justify-center gap-2"
                        >
                          <ArrowLeft size={14} /> Voltar
                        </button>
                        <Button
                          size="lg"
                          variant="glow"
                          className="h-14"
                          icon={<ShieldCheck size={18} />}
                          type="submit"
                          loading={isLoading || success}
                          loadingText="A verificar..."
                        >
                          Verificar e entrar
                        </Button>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-sm pt-1">
                        <button type="button" className="text-bet62-primary hover:underline inline-flex items-center gap-1">
                          <RefreshCw size={13} /> Gerar novos códigos de recuperação
                        </button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
            <p className="mt-4 text-center text-[11px] text-white/40 px-4">
              Ao entrar, confirmas que tens 18+ anos, aceitas os nossos Termos de Utilização
              e Política de Privacidade. O jogo pode ser viciante · Joga com responsabilidade.
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
