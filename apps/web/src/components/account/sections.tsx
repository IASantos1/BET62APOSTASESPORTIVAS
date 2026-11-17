'use client';

// Secções do perfil (estrutura do repositório bet, com o layout do BET62).
import * as React from 'react';
import Link from 'next/link';
import { Download, Laptop, Loader2, Smartphone } from 'lucide-react';
import { Button } from '../ui/Button';
import { Notice, field } from './ui';
import { api, useAuthStore, type AuthUser } from '../../stores/auth.store';
import { cn, formatCurrencyEUR } from '../../lib/utils';

type Msg = { ok: boolean; text: string } | null;
const fmtDate = (iso?: string | null, long = false) =>
  iso
    ? new Date(iso.length === 10 ? `${iso}T00:00:00` : iso).toLocaleDateString('pt-PT', long ? { day: '2-digit', month: 'long', year: 'numeric' } : undefined)
    : '—';

function useSave<T>(fn: () => Promise<T>) {
  const [busy, setBusy] = React.useState(false);
  const [msg, setMsg] = React.useState<Msg>(null);
  const run = async (ok: string) => {
    setBusy(true);
    setMsg(null);
    try {
      const r = await fn();
      setMsg({ ok: true, text: ok });
      return r;
    } catch (e) {
      setMsg({ ok: false, text: e instanceof Error ? e.message : 'Erro ao guardar.' });
      return null;
    } finally {
      setBusy(false);
    }
  };
  return { busy, msg, setMsg, run };
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block space-y-1">
      <span className="text-xs font-semibold text-white/70">{label}</span>
      {children}
    </label>
  );
}

const Readonly = ({ value }: { value: string }) => <input className={cn(field, 'opacity-70')} value={value} readOnly />;

function Box({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3 rounded-xl border border-bet62-border p-4">
      <h4 className="font-bold">{title}</h4>
      {children}
    </div>
  );
}

export function NoteBox({ children, tone = 'info' }: { children: React.ReactNode; tone?: 'info' | 'warn' | 'ok' }) {
  const cls = { info: 'border-bet62-border bg-white/5', warn: 'border-amber-400/40 bg-amber-400/10', ok: 'border-emerald-400/40 bg-emerald-400/10' }[tone];
  return <div className={cn('rounded-xl border p-3 text-sm', cls)}>{children}</div>;
}

// ---------- Conta ----------

export function PersonalSection({ user }: { user: AuthUser }) {
  const setUser = useAuthStore((s) => s.setUser);
  const [phone, setPhone] = React.useState(user.phone ?? '');
  const s = useSave(() => api<{ user: AuthUser }>('/api/account', { method: 'PATCH', body: JSON.stringify({ phone }) }));
  return (
    <form
      className="space-y-4"
      onSubmit={async (e) => {
        e.preventDefault();
        const r = await s.run('Alterações guardadas.');
        if (r) setUser(r.user);
      }}
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Nome completo"><Readonly value={`${user.firstName ?? ''} ${user.lastName ?? ''}`.trim()} /></Field>
        <Field label="Telemóvel"><input className={field} type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+351 900 000 000" autoComplete="tel" /></Field>
        <Field label="E-mail"><Readonly value={user.email} /></Field>
        <Field label="Data de nascimento"><Readonly value={fmtDate(user.birthdate)} /></Field>
        <Field label="NIF"><Readonly value={user.nif || '—'} /></Field>
        <Field label="País"><Readonly value={user.country ?? 'PT'} /></Field>
        <Field label="ID de membro"><Readonly value={user.memberId ?? ''} /></Field>
        <Field label="Membro desde"><Readonly value={fmtDate(user.createdAt, true)} /></Field>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" size="sm" loading={s.busy}>Guardar alterações</Button>
        <Notice msg={s.msg} />
      </div>
      <p className="text-xs text-white/45">Nome, e-mail, data de nascimento e NIF não podem ser alterados aqui (verificação de identidade): contacte o suporte.</p>
    </form>
  );
}

export function VerificationSection({ user }: { user: AuthUser }) {
  const rows: [string, string, boolean][] = [
    ['Dados pessoais', 'Nome, data de nascimento e NIF', !!user.nif],
    ['Documento de identificação', 'Cartão de Cidadão ou passaporte', false],
    ['Comprovativo de morada', 'Fatura ou extrato com menos de 3 meses', false],
  ];
  return (
    <div className="space-y-3">
      <div className="divide-y divide-bet62-border/60 rounded-xl border border-bet62-border">
        {rows.map(([label, sub, ok]) => (
          <div key={label} className="flex items-center justify-between gap-3 p-3 text-sm">
            <div><b className="block">{label}</b><small className="text-white/55">{sub}</small></div>
            <span className={cn('rounded-full px-2.5 py-0.5 text-xs font-bold', ok ? 'bg-emerald-500/15 text-emerald-300' : 'bg-white/10 text-white/60')}>
              {ok ? 'Indicado' : 'Não enviado'}
            </span>
          </div>
        ))}
      </div>
      <NoteBox>O envio de documentos chega com os levantamentos. A verificação demora normalmente entre 24 e 72 horas.</NoteBox>
    </div>
  );
}

export function PreferencesSection() {
  const rows: [string, string, string][] = [
    ['Formato de odds', 'Decimal (2.50)', '2.50'],
    ['Idioma', 'Português (Portugal)', 'PT'],
    ['Fuso horário', 'Europe/Lisbon', 'WET/WEST'],
    ['Moeda', 'Euro', '€ EUR'],
  ];
  return (
    <div className="divide-y divide-bet62-border/60 rounded-xl border border-bet62-border">
      {rows.map(([label, sub, tag]) => (
        <div key={label} className="flex items-center justify-between gap-3 p-3 text-sm">
          <div><b className="block">{label}</b><small className="text-white/55">{sub}</small></div>
          <span className="rounded-lg border border-bet62-border px-2 py-0.5 font-mono text-xs">{tag}</span>
        </div>
      ))}
    </div>
  );
}

function Toggles({ user, items }: { user: AuthUser; items: [string, string, string][] }) {
  const setUser = useAuthStore((s) => s.setUser);
  const [busy, setBusy] = React.useState<string | null>(null);
  const [msg, setMsg] = React.useState<Msg>(null);
  const prefs = user.prefs ?? {};
  const flip = async (k: string) => {
    setBusy(k);
    setMsg(null);
    try {
      const r = await api<{ user: AuthUser }>('/api/account/prefs', { method: 'POST', body: JSON.stringify({ [k]: !prefs[k] }) });
      setUser(r.user);
    } catch (e) {
      setMsg({ ok: false, text: e instanceof Error ? e.message : 'Erro.' });
    } finally {
      setBusy(null);
    }
  };
  return (
    <div className="space-y-2">
      <div className="divide-y divide-bet62-border/60 rounded-xl border border-bet62-border">
        {items.map(([k, label, sub]) => (
          <div key={k} className="flex items-center justify-between gap-3 p-3 text-sm">
            <div><b className="block">{label}</b><small className="text-white/55">{sub}</small></div>
            <button
              type="button"
              role="switch"
              aria-checked={!!prefs[k]}
              aria-label={label}
              disabled={busy === k}
              onClick={() => void flip(k)}
              className={cn('relative h-6 w-11 shrink-0 rounded-full transition', prefs[k] ? 'bg-bet62-primary' : 'bg-white/15')}
            >
              <i className={cn('absolute top-0.5 h-5 w-5 rounded-full bg-white transition-all', prefs[k] ? 'left-[22px]' : 'left-0.5')} />
            </button>
          </div>
        ))}
      </div>
      <Notice msg={msg} />
    </div>
  );
}

export function NotificationsSection({ user }: { user: AuthUser }) {
  return (
    <Toggles
      user={user}
      items={[
        ['notifyResults', 'Resultados das apostas por e-mail', 'Aviso quando uma aposta é liquidada'],
        ['notifyPromos', 'Promoções por e-mail', 'Ofertas e campanhas'],
        ['notifySms', 'Promoções por SMS', 'Ofertas e campanhas (precisa de telemóvel na conta)'],
        ['notifyPush', 'Avisos no telemóvel', 'Quando uma aposta ganha e quando um levantamento é aprovado'],
      ]}
    />
  );
}

export function PrivacySection({ user }: { user: AuthUser }) {
  return (
    <div className="space-y-4">
      <Toggles
        user={user}
        items={[
          ['cookiesAnalytics', 'Cookies analíticos', 'Dados de utilização para melhorar a plataforma'],
          ['cookiesMarketing', 'Cookies de marketing', 'Personalização de anúncios e conteúdos'],
          ['shareData', 'Partilha de dados com parceiros', 'Dados partilhados com entidades afiliadas'],
        ]}
      />
      <div className="flex flex-wrap gap-2">
        <a href="/api/account/export" download className="inline-flex items-center gap-1.5 rounded-xl border border-bet62-border px-4 py-2 text-sm font-bold hover:bg-white/5">
          <Download size={16} /> Descarregar os meus dados
        </a>
      </div>
      <p className="text-xs text-white/45">Para eliminar a conta, contacte o suporte (o saldo tem de ser levantado antes).</p>
    </div>
  );
}

// ---------- Dinheiro e apostas ----------

export function BankSection({ user }: { user: AuthUser }) {
  const setUser = useAuthStore((st) => st.setUser);
  const [iban, setIban] = React.useState(user.iban ?? '');
  const [name, setName] = React.useState(user.ibanName ?? `${user.firstName ?? ''} ${user.lastName ?? ''}`.trim());
  const s = useSave(() => api<{ user: AuthUser }>('/api/account/bank', { method: 'POST', body: JSON.stringify({ iban, ibanName: name }) }));
  return (
    <form
      className="space-y-4"
      onSubmit={async (e) => {
        e.preventDefault();
        const r = await s.run('Dados bancários guardados.');
        if (r) setUser(r.user);
      }}
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="IBAN"><input className={cn(field, 'font-mono')} value={iban} onChange={(e) => setIban(e.target.value)} placeholder="PT50 0000 0000 0000 0000 0000 0" autoComplete="off" /></Field>
        <Field label="Titular da conta"><input className={field} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" /></Field>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" size="sm" loading={s.busy}>Guardar dados bancários</Button>
        <Notice msg={s.msg} />
      </div>
      <NoteBox>Os levantamentos são pagos apenas para contas em nome do titular da conta BET62.</NoteBox>
    </form>
  );
}

interface Stats {
  bets: { total: number; open: number; won: number; lost: number; void: number; winRate: number; staked: number; returned: number; bestOdds: number };
  wallet: { deposited: number; withdrawn: number };
}

export function ActivitySection() {
  const [st, setSt] = React.useState<Stats | null>(null);
  const [err, setErr] = React.useState<string | null>(null);
  React.useEffect(() => {
    api<Stats>('/api/account/stats').then(setSt).catch((e) => setErr(e instanceof Error ? e.message : 'Erro.'));
  }, []);
  if (err) return <p className="text-sm text-rose-400">{err}</p>;
  if (!st) return <Loader2 className="animate-spin text-white/60" />;
  const tiles: [string, string][] = [
    ['Apostas feitas', String(st.bets.total)],
    ['Em aberto', String(st.bets.open)],
    ['Ganhas', String(st.bets.won)],
    ['Perdidas', String(st.bets.lost)],
    ['Taxa de acerto', `${st.bets.winRate}%`],
    ['Maior odd ganha', st.bets.bestOdds ? st.bets.bestOdds.toFixed(2) : '—'],
    ['Total apostado', formatCurrencyEUR(st.bets.staked)],
    ['Total recebido', formatCurrencyEUR(st.bets.returned)],
    ['Depositado', formatCurrencyEUR(st.wallet.deposited)],
    ['Levantado', formatCurrencyEUR(st.wallet.withdrawn)],
  ];
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
        {tiles.map(([l, v]) => (
          <div key={l} className="rounded-xl border border-bet62-border p-3">
            <p className="text-xs text-white/55">{l}</p>
            <p className="font-mono text-lg font-black">{v}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        <Link href="/conta/apostas" className="rounded-xl border border-bet62-border px-4 py-2 text-sm font-bold hover:bg-white/5">Ver as minhas apostas</Link>
        <Link href="/conta/carteira" className="rounded-xl border border-bet62-border px-4 py-2 text-sm font-bold hover:bg-white/5">Ver movimentos</Link>
      </div>
    </div>
  );
}

// ---------- Segurança ----------

export function SecuritySection() {
  const [current, setCurrent] = React.useState('');
  const [next, setNext] = React.useState('');
  const [confirm, setConfirm] = React.useState('');
  const s = useSave(() => api('/api/account/password', { method: 'POST', body: JSON.stringify({ current, next }) }));
  return (
    <form
      className="space-y-4"
      onSubmit={async (e) => {
        e.preventDefault();
        if (next !== confirm) return s.setMsg({ ok: false, text: 'As senhas novas não coincidem.' });
        if (await s.run('Senha alterada. As sessões noutros dispositivos foram terminadas.')) {
          setCurrent('');
          setNext('');
          setConfirm('');
        }
      }}
    >
      <h4 className="font-bold">Alterar palavra-passe</h4>
      <div className="grid gap-3 sm:grid-cols-3">
        <Field label="Palavra-passe atual"><input className={field} type="password" value={current} onChange={(e) => setCurrent(e.target.value)} autoComplete="current-password" required /></Field>
        <Field label="Nova palavra-passe"><input className={field} type="password" value={next} onChange={(e) => setNext(e.target.value)} autoComplete="new-password" minLength={8} required /></Field>
        <Field label="Confirmar nova palavra-passe"><input className={field} type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} autoComplete="new-password" minLength={8} required /></Field>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" size="sm" loading={s.busy}>Alterar palavra-passe</Button>
        <Notice msg={s.msg} />
      </div>
      <NoteBox>
        Mínimo 8 caracteres, com 3 de: minúscula, maiúscula, número, símbolo. Ao alterar a palavra-passe, as sessões abertas noutros dispositivos são terminadas. Veja-as em{' '}
        <Link href="/conta/sessoes" className="font-semibold text-bet62-primary hover:underline">Sessões ativas</Link>.
      </NoteBox>
    </form>
  );
}

interface Session {
  id: string;
  current: boolean;
  createdAt: string;
  userAgent: string | null;
  ip: string | null;
}

function deviceName(ua: string | null) {
  if (!ua) return 'Dispositivo desconhecido';
  const os = /iPhone|iPad/.test(ua) ? 'iPhone/iPad' : /Android/.test(ua) ? 'Android' : /Windows/.test(ua) ? 'Windows' : /Mac OS/.test(ua) ? 'Mac' : /Linux/.test(ua) ? 'Linux' : 'Outro';
  const br = /Edg\//.test(ua) ? 'Edge' : /CriOS|Chrome\//.test(ua) ? 'Chrome' : /FxiOS|Firefox\//.test(ua) ? 'Firefox' : /Safari\//.test(ua) ? 'Safari' : 'Navegador';
  return `${br} · ${os}`;
}

export function SessionsSection() {
  const [list, setList] = React.useState<Session[] | null>(null);
  const [msg, setMsg] = React.useState<Msg>(null);
  const load = React.useCallback(() => {
    api<{ sessions: Session[] }>('/api/account/sessions').then((r) => setList(r.sessions)).catch((e) => setMsg({ ok: false, text: e.message }));
  }, []);
  React.useEffect(load, [load]);
  const end = async (q: string) => {
    setMsg(null);
    try {
      await api(`/api/account/sessions?${q}`, { method: 'DELETE' });
      load();
    } catch (e) {
      setMsg({ ok: false, text: e instanceof Error ? e.message : 'Erro.' });
    }
  };
  if (!list) return <Loader2 className="animate-spin text-white/60" />;
  return (
    <div className="space-y-3">
      <div className="divide-y divide-bet62-border/60 rounded-xl border border-bet62-border">
        {list.map((s) => (
          <div key={s.id} className="flex items-center justify-between gap-3 p-3 text-sm">
            <div className="flex min-w-0 items-center gap-3">
              {/iPhone|Android/.test(s.userAgent ?? '') ? <Smartphone size={18} /> : <Laptop size={18} />}
              <div className="min-w-0">
                <b className="block truncate">{deviceName(s.userAgent)}{s.current && <span className="ml-2 rounded-full bg-emerald-500/15 px-2 py-0.5 text-xs text-emerald-300">Este dispositivo</span>}</b>
                <small className="text-white/55">Desde {new Date(s.createdAt).toLocaleString('pt-PT')}{s.ip ? ` · IP ${s.ip}` : ''}</small>
              </div>
            </div>
            {!s.current && (
              <button className="shrink-0 rounded-lg border border-bet62-border px-3 py-1.5 text-xs font-bold hover:bg-white/5" onClick={() => void end(`id=${s.id}`)}>
                Terminar
              </button>
            )}
          </div>
        ))}
      </div>
      {list.some((s) => !s.current) && (
        <Button type="button" size="sm" variant="ghost" onClick={() => void end('all=1')}>Terminar todas as outras sessões</Button>
      )}
      <Notice msg={msg} />
    </div>
  );
}

// ---------- Jogo responsável ----------

interface Limits {
  day: number | null;
  week: number | null;
  month: number | null;
  pending: { values: Record<string, number | null>; appliesAt: string | null } | null;
}
const LIMIT_LABELS: [keyof Omit<Limits, 'pending'>, string][] = [['day', 'Diário'], ['week', 'Semanal'], ['month', 'Mensal']];
const PAUSES: [string, string][] = [['1', 'Pausa 24 horas'], ['3', 'Pausa 72 horas'], ['7', '1 semana'], ['30', '1 mês'], ['90', '3 meses'], ['180', '6 meses'], ['365', '1 ano'], ['perm', 'Permanente']];

export function LimitsSection({ user }: { user: AuthUser }) {
  const setUser = useAuthStore((s) => s.setUser);
  const [limits, setLimits] = React.useState<Limits | null>(null);
  const [form, setForm] = React.useState<Record<string, string>>({ day: '', week: '', month: '' });
  const [msg, setMsg] = React.useState<Msg>(null);
  const [period, setPeriod] = React.useState<string | null>(null);
  const [exMsg, setExMsg] = React.useState<Msg>(null);
  const excluded = !!user.excludedUntil && new Date(user.excludedUntil) > new Date();
  const apply = (l: Limits) => {
    setLimits(l);
    setForm({ day: l.day?.toString() ?? '', week: l.week?.toString() ?? '', month: l.month?.toString() ?? '' });
  };
  React.useEffect(() => {
    api<{ limits: Limits }>('/api/account/limits').then((r) => apply(r.limits)).catch(() => undefined);
  }, []);
  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg(null);
    try {
      const body = Object.fromEntries(Object.entries(form).map(([k, v]) => [k, v.trim() === '' ? null : Number(v.replace(',', '.'))]));
      const r = await api<{ limits: Limits }>('/api/account/limits', { method: 'POST', body: JSON.stringify(body) });
      apply(r.limits);
      setMsg({ ok: true, text: r.limits.pending ? 'Guardado. Aumentos e remoções só valem daqui a 24 h.' : 'Limites guardados.' });
    } catch (err) {
      setMsg({ ok: false, text: err instanceof Error ? err.message : 'Erro ao guardar.' });
    }
  };
  const exclude = async () => {
    if (!period) return;
    setExMsg(null);
    try {
      const r = await api<{ user: AuthUser }>('/api/account/exclusion', { method: 'POST', body: JSON.stringify({ period, confirm: true }) });
      setUser(r.user);
      setPeriod(null);
    } catch (err) {
      setExMsg({ ok: false, text: err instanceof Error ? err.message : 'Erro.' });
    }
  };
  return (
    <div className="space-y-4">
      <p className="text-sm text-white/70">
        Apostar deve ser uma forma de entretenimento. Faça pausas e nunca aposte dinheiro de que precise. Se sentir que perdeu o controlo, procure apoio especializado.
      </p>
      <Box title="Limites pessoais de depósito">
        <form onSubmit={save} className="space-y-3">
          <div className="grid gap-3 sm:grid-cols-3">
            {LIMIT_LABELS.map(([k, label]) => (
              <Field key={k} label={`${label} (€)`}>
                <input className={field} inputMode="decimal" placeholder="Sem limite" value={form[k]} onChange={(e) => setForm((f) => ({ ...f, [k]: e.target.value }))} />
              </Field>
            ))}
          </div>
          {limits?.pending && (
            <p className="text-xs text-amber-300">
              Pendente até {new Date(limits.pending.appliesAt ?? '').toLocaleString('pt-PT')}:{' '}
              {Object.entries(limits.pending.values).map(([k, v]) => `${LIMIT_LABELS.find(([x]) => x === k)?.[1]} ${v === null ? 'sem limite' : `${v} €`}`).join(' · ')}
            </p>
          )}
          <div className="flex flex-wrap items-center gap-3">
            <Button type="submit" size="sm">Guardar limites</Button>
            <Notice msg={msg} />
          </div>
          <p className="text-xs text-white/45">Baixar um limite vale de imediato; subir ou retirar só vale 24 horas depois.</p>
        </form>
      </Box>
      <Box title="Pausa e autoexclusão">
        {excluded ? (
          <NoteBox tone="warn">
            <b>Autoexclusão ativa</b> até {new Date(user.excludedUntil!).toLocaleString('pt-PT')}. Durante este período não é possível apostar nem depositar; os levantamentos continuam disponíveis.
          </NoteBox>
        ) : (
          <>
            <p className="text-xs text-white/55">A autoexclusão é imediata e não pode ser anulada antes do fim. Os levantamentos continuam disponíveis.</p>
            <div className="flex flex-wrap gap-2">
              {PAUSES.map(([v, label]) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setPeriod(v)}
                  className={cn('rounded-full border px-3 py-1.5 text-xs font-bold', period === v ? 'border-rose-500 bg-rose-500/20' : 'border-bet62-border hover:bg-white/5')}
                >
                  {label}
                </button>
              ))}
            </div>
            {period && (
              <NoteBox tone="warn">
                <p className="mb-2">Confirma {PAUSES.find(([v]) => v === period)?.[1].toLowerCase()}? Não pode ser anulada antes do fim.</p>
                <div className="flex gap-2">
                  <Button type="button" size="sm" onClick={() => void exclude()} className="bg-rose-600 text-white">Confirmar</Button>
                  <Button type="button" size="sm" variant="ghost" onClick={() => setPeriod(null)}>Cancelar</Button>
                </div>
              </NoteBox>
            )}
          </>
        )}
        <Notice msg={exMsg} />
      </Box>
      <p className="text-xs text-white/55">
        Apoio: SICAD — Linha Vida <b>1414</b> (anónima e confidencial). Mais informação em{' '}
        <Link href="/jogo-responsavel" className="font-semibold text-bet62-primary hover:underline">Jogo responsável</Link>.
      </p>
    </div>
  );
}

// ---------- Ajuda ----------

export function SupportSection() {
  const rows: [string, React.ReactNode, string][] = [
    ['Contacto', <Link key="c" href="/contacto" className="text-bet62-primary hover:underline">Formulário de contacto</Link>, 'Resposta até 24 horas úteis'],
    ['Central de ajuda', <Link key="a" href="/ajuda" className="text-bet62-primary hover:underline">Perguntas frequentes</Link>, ''],
    ['Horário de atendimento', '24 horas, 7 dias por semana', ''],
    ['Jogo responsável', 'SICAD — Linha Vida 1414', 'Apoio anónimo e confidencial'],
  ];
  return (
    <div className="space-y-3">
      <div className="divide-y divide-bet62-border/60 rounded-xl border border-bet62-border">
        {rows.map(([l, v, sub]) => (
          <div key={l} className="p-3 text-sm">
            <small className="text-white/55">{l}</small>
            <b className="block">{v}</b>
            {sub && <small className="text-white/55">{sub}</small>}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        <Link href="/conta/limites" className="rounded-xl border border-bet62-border px-4 py-2 text-sm font-bold hover:bg-white/5">Limites e autoexclusão</Link>
        <Link href="/conta/privacidade" className="rounded-xl border border-bet62-border px-4 py-2 text-sm font-bold hover:bg-white/5">Privacidade</Link>
      </div>
    </div>
  );
}
