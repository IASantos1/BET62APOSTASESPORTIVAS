'use client';

// Perfil do jogador, com a estrutura do repositório bet: cartão do jogador no topo e as secções
// por grupos (menu lateral no computador, acordeão no telemóvel). /conta/<secção>.
import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Activity,
  BadgeCheck,
  Banknote,
  Bell,
  ChevronDown,
  ChevronRight,
  History,
  KeyRound,
  LifeBuoy,
  Loader2,
  LogOut,
  MonitorSmartphone,
  ShieldCheck,
  SlidersHorizontal,
  User,
  Wallet,
  Lock,
  type LucideIcon,
} from 'lucide-react';
import { Header } from '../../../components/layout/Header';
import { Footer } from '../../../components/layout/Footer';
import { useAuthStore, type AuthUser } from '../../../stores/auth.store';
import { cn, formatCurrencyEUR } from '../../../lib/utils';
import { WalletSection } from '../../../components/account/WalletSection';
import { BetsSection } from '../../../components/account/BetsSection';
import {
  ActivitySection,
  BankSection,
  LimitsSection,
  NotificationsSection,
  PersonalSection,
  PreferencesSection,
  PrivacySection,
  SecuritySection,
  SessionsSection,
  SupportSection,
  VerificationSection,
} from '../../../components/account/sections';

type Group = 'conta' | 'dinheiro' | 'seguranca' | 'jogo' | 'ajuda';
interface Section {
  id: string;
  group: Group;
  label: string;
  title: string;
  text: string;
  icon: LucideIcon;
  render: (u: AuthUser) => React.ReactNode;
}

const GROUPS: [Group, string][] = [
  ['conta', 'Conta'],
  ['dinheiro', 'Dinheiro e apostas'],
  ['seguranca', 'Segurança'],
  ['jogo', 'Jogo responsável'],
  ['ajuda', 'Ajuda'],
];

const SECTIONS: Section[] = [
  { id: 'pessoais', group: 'conta', label: 'Informações pessoais', title: 'Informações Pessoais', text: 'Gestão e atualização dos seus dados pessoais, garantindo a exatidão e conformidade com os requisitos legais aplicáveis.', icon: User, render: (u) => <PersonalSection user={u} /> },
  { id: 'verificacao', group: 'conta', label: 'Verificação de identidade', title: 'Verificação de Identidade (KYC)', text: 'Complete a verificação para desbloquear levantamentos.', icon: BadgeCheck, render: (u) => <VerificationSection user={u} /> },
  { id: 'preferencias', group: 'conta', label: 'Preferências de conta', title: 'Preferências de Conta', text: 'Definições gerais da conta.', icon: SlidersHorizontal, render: () => <PreferencesSection /> },
  { id: 'notificacoes', group: 'conta', label: 'Notificações', title: 'Notificações', text: 'Preferências de comunicação e alertas da sua conta.', icon: Bell, render: (u) => <NotificationsSection user={u} /> },
  { id: 'privacidade', group: 'conta', label: 'Privacidade', title: 'Configurações de Privacidade', text: 'Preferências relativas ao tratamento e proteção dos seus dados pessoais.', icon: Lock, render: (u) => <PrivacySection user={u} /> },
  { id: 'carteira', group: 'dinheiro', label: 'Carteira', title: 'Carteira', text: 'Saldo, depósitos, levantamentos e todos os movimentos da conta.', icon: Wallet, render: () => <WalletSection /> },
  { id: 'apostas', group: 'dinheiro', label: 'As minhas apostas', title: 'As Minhas Apostas', text: 'Todas as suas apostas, em aberto e liquidadas.', icon: History, render: () => <BetsSection /> },
  { id: 'pagamento', group: 'dinheiro', label: 'Dados bancários', title: 'Dados Bancários para Levantamento', text: 'Guarde os seus dados bancários para facilitar os pedidos de levantamento.', icon: Banknote, render: (u) => <BankSection user={u} /> },
  { id: 'atividade', group: 'dinheiro', label: 'Histórico de atividade', title: 'Histórico de Atividade', text: 'Resumo da sua atividade na plataforma: apostas realizadas e resultados obtidos.', icon: Activity, render: () => <ActivitySection /> },
  { id: 'seguranca', group: 'seguranca', label: 'Definições de segurança', title: 'Definições de Segurança', text: 'Proteção da conta: palavra-passe e controlo dos acessos.', icon: KeyRound, render: () => <SecuritySection /> },
  { id: 'sessoes', group: 'seguranca', label: 'Sessões ativas', title: 'Sessões Ativas', text: 'Dispositivos com sessão iniciada na sua conta.', icon: MonitorSmartphone, render: () => <SessionsSection /> },
  { id: 'limites', group: 'jogo', label: 'Limites e autoexclusão', title: 'Limites e Autoexclusão', text: 'Limites de depósito, pausas e autoexclusão para uma experiência de jogo responsável.', icon: ShieldCheck, render: (u) => <LimitsSection user={u} /> },
  { id: 'suporte', group: 'ajuda', label: 'Suporte e assistência', title: 'Suporte e Assistência', text: 'Canais de contacto para esclarecimento de dúvidas relacionadas com a conta.', icon: LifeBuoy, render: () => <SupportSection /> },
];
const ALIAS: Record<string, string> = { '': 'pessoais', 'jogo-responsavel': 'limites' };

const initials = (u: AuthUser) => `${u.firstName?.[0] ?? ''}${u.lastName?.[0] ?? ''}`.toUpperCase() || u.email[0].toUpperCase();

function Card({ s, user }: { s: Section; user: AuthUser }) {
  return (
    <div className="space-y-4 rounded-2xl border border-bet62-border bg-bet62-surface/50 p-4 sm:p-5">
      <div>
        <h2 className="text-lg font-black">{s.title}</h2>
        <p className="text-sm text-white/55">{s.text}</p>
      </div>
      {s.render(user)}
    </div>
  );
}

export default function ContaPage({ params }: { params: { secao?: string[] } }) {
  const router = useRouter();
  const { user, refresh, logout, accountsAvailable } = useAuthStore();
  const [checked, setChecked] = React.useState(false);
  const raw = params.secao?.[0] ?? '';
  const active = SECTIONS.find((s) => s.id === (ALIAS[raw] ?? raw))?.id ?? 'pessoais';
  // Telemóvel: tocar na secção aberta fecha-a.
  const [collapsed, setCollapsed] = React.useState(false);
  React.useEffect(() => setCollapsed(false), [active]);
  // Só uma das duas versões é montada (cada secção faz os seus pedidos).
  const [desktop, setDesktop] = React.useState<boolean | null>(null);
  React.useEffect(() => {
    const m = window.matchMedia('(min-width: 1024px)');
    const update = () => setDesktop(m.matches);
    update();
    m.addEventListener('change', update);
    return () => m.removeEventListener('change', update);
  }, []);

  // Telemóvel: ao abrir uma secção por link, descer até ela.
  React.useEffect(() => {
    if (desktop !== false || !raw || !checked) return;
    const t = setTimeout(() => document.getElementById(`pf-${active}`)?.scrollIntoView({ block: 'start', behavior: 'smooth' }), 150);
    return () => clearTimeout(t);
  }, [active, checked, desktop, raw]);

  React.useEffect(() => {
    let alive = true;
    refresh().then((u) => {
      if (!alive) return;
      setChecked(true);
      if (!u) router.replace(`/login?next=${encodeURIComponent(`/conta${raw ? `/${raw}` : ''}`)}`);
    });
    return () => {
      alive = false;
    };
  }, [raw, refresh, router]);

  const exit = async () => {
    await logout();
    router.push('/');
  };

  const content = !accountsAvailable ? (
    <p className="rounded-2xl border border-amber-400/40 bg-amber-400/10 p-5 text-sm">As contas ainda não estão disponíveis: falta ligar a base de dados ao servidor.</p>
  ) : !checked || !user ? (
    <div className="grid place-items-center py-24 text-white/60"><Loader2 className="animate-spin" /></div>
  ) : (
    (() => {
      const excluded = !!user.excludedUntil && new Date(user.excludedUntil) > new Date();
      const isAdmin = user.roles.includes('ADMIN');
      const grouped = (row: (s: Section) => React.ReactNode) =>
        GROUPS.map(([g, title]) => {
          const list = SECTIONS.filter((s) => s.group === g);
          return (
            <div key={g} className="space-y-1">
              <h4 className="px-2 pt-2 text-[11px] font-bold uppercase tracking-wider text-white/45">{title}</h4>
              {list.map(row)}
            </div>
          );
        });
      const extra = (
        <div className="space-y-1 border-t border-bet62-border pt-2">
          {isAdmin && (
            <Link href="/admin" className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold hover:bg-white/5">
              <ShieldCheck size={16} /> Administração
            </Link>
          )}
          <button onClick={() => void exit()} className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm font-semibold text-white/75 hover:bg-white/5">
            <LogOut size={16} /> Terminar sessão
          </button>
        </div>
      );
      return (
        <div className="space-y-4">
          {/* Cartão do jogador */}
          <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-bet62-border bg-bet62-surface/50 p-4 sm:p-5">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-bet62-primary text-lg font-black text-onbrand">{initials(user)}</div>
            <div className="min-w-0 flex-1">
              <strong className="block truncate text-lg">{`${user.firstName ?? ''} ${user.lastName ?? ''}`.trim() || user.email}</strong>
              <span className="block truncate text-sm text-white/60">{user.email}</span>
              <small className="font-mono text-xs text-white/45">{user.memberId}</small>
            </div>
            <div className="text-right">
              <small className="block text-xs text-white/55">Saldo disponível</small>
              <strong className="font-mono text-2xl font-black">{formatCurrencyEUR(user.balance ?? 0)}</strong>
              {excluded && <em className="block text-xs not-italic text-amber-300">Autoexcluído até {new Date(user.excludedUntil!).toLocaleDateString('pt-PT')}</em>}
            </div>
          </div>

          {/* Telemóvel: acordeão */}
          {desktop === false && (
          <div className="space-y-2">
            {grouped((s) => {
              const open = s.id === active && !collapsed;
              const Icon = s.icon;
              return (
                <div key={s.id} id={`pf-${s.id}`} className="scroll-mt-20 overflow-hidden rounded-xl border border-bet62-border">
                  <Link
                    href={`/conta/${s.id}`}
                    scroll={false}
                    onClick={(e) => {
                      if (s.id === active) {
                        e.preventDefault();
                        setCollapsed((c) => !c);
                      }
                    }}
                    className={cn('flex items-center gap-3 px-3 py-3 text-sm font-semibold', open && 'bg-white/5')}
                  >
                    <Icon size={17} /> <span className="flex-1">{s.label}</span>
                    <ChevronDown size={16} className={cn('transition', open && 'rotate-180')} />
                  </Link>
                  {open && <div className="border-t border-bet62-border p-2"><Card s={s} user={user} /></div>}
                </div>
              );
            })}
            {extra}
          </div>
          )}

          {/* Computador: menu lateral + secção */}
          {desktop && (
          <div className="grid grid-cols-[260px_1fr] gap-5">
            <nav className="sticky top-20 h-fit space-y-1 rounded-2xl border border-bet62-border bg-bet62-surface/50 p-2">
              {grouped((s) => {
                const Icon = s.icon;
                return (
                  <Link
                    key={s.id}
                    href={`/conta/${s.id}`}
                    className={cn(
                      'flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-semibold',
                      s.id === active ? 'bg-bet62-primary text-onbrand' : 'text-white/80 hover:bg-white/5',
                    )}
                  >
                    <Icon size={16} /> <span className="flex-1">{s.label}</span>
                    {s.id === active && <ChevronRight size={15} />}
                  </Link>
                );
              })}
              {extra}
            </nav>
            <div className="min-w-0">
              <Card s={SECTIONS.find((s) => s.id === active)!} user={user} />
            </div>
          </div>
          )}
        </div>
      );
    })()
  );

  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-[1200px] px-3 py-6 sm:px-4 lg:px-6">{content}</main>
      <Footer />
    </div>
  );
}
