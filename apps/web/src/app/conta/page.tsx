'use client';

// Perfil do jogador: dados pessoais, segurança (senha) e jogo responsável (limites e autoexclusão).
import * as React from 'react';
import { useRouter } from 'next/navigation';
import { AccountShell, Notice, Panel, field } from '../../components/account/AccountShell';
import { Button } from '../../components/ui/Button';
import { api, useAuthStore, type AuthUser } from '../../stores/auth.store';

type Msg = { ok: boolean; text: string } | null;
const fmtDate = (iso?: string | null) => (iso ? new Date(iso.length === 10 ? `${iso}T00:00:00` : iso).toLocaleDateString('pt-PT') : '—');

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-bet62-border/60 py-2 text-sm last:border-0">
      <span className="text-white/55">{label}</span>
      <span className="text-right font-semibold">{value}</span>
    </div>
  );
}

function Personal({ user }: { user: AuthUser }) {
  const setUser = useAuthStore((s) => s.setUser);
  const [phone, setPhone] = React.useState(user.phone ?? '');
  const [msg, setMsg] = React.useState<Msg>(null);
  const [busy, setBusy] = React.useState(false);
  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    try {
      const r = await api<{ user: AuthUser }>('/api/account', { method: 'PATCH', body: JSON.stringify({ phone }) });
      setUser(r.user);
      setMsg({ ok: true, text: 'Telemóvel guardado.' });
    } catch (err) {
      setMsg({ ok: false, text: err instanceof Error ? err.message : 'Erro ao guardar.' });
    } finally {
      setBusy(false);
    }
  };
  return (
    <Panel title="Dados pessoais">
      <div>
        <Row label="Nome" value={`${user.firstName ?? ''} ${user.lastName ?? ''}`.trim()} />
        <Row label="E-mail" value={user.email} />
        <Row label="Data de nascimento" value={fmtDate(user.birthdate)} />
        <Row label="NIF" value={user.nif || '—'} />
        <Row label="País" value={user.country ?? 'PT'} />
        <Row label="Cliente desde" value={fmtDate(user.createdAt)} />
      </div>
      <form onSubmit={save} className="flex flex-wrap items-end gap-2">
        <label className="min-w-[200px] flex-1 space-y-1">
          <span className="text-xs font-semibold text-white/70">Telemóvel</span>
          <input className={field} value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+351 912 345 678" autoComplete="tel" />
        </label>
        <Button type="submit" size="sm" loading={busy}>Guardar</Button>
      </form>
      <Notice msg={msg} />
      <p className="text-xs text-white/45">Nome, data de nascimento, NIF e e-mail só podem ser alterados pelo apoio ao cliente (verificação de identidade).</p>
    </Panel>
  );
}

function Security() {
  const [current, setCurrent] = React.useState('');
  const [next, setNext] = React.useState('');
  const [confirm, setConfirm] = React.useState('');
  const [msg, setMsg] = React.useState<Msg>(null);
  const [busy, setBusy] = React.useState(false);
  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg(null);
    if (next !== confirm) return setMsg({ ok: false, text: 'As senhas novas não coincidem.' });
    setBusy(true);
    try {
      await api('/api/account/password', { method: 'POST', body: JSON.stringify({ current, next }) });
      setCurrent('');
      setNext('');
      setConfirm('');
      setMsg({ ok: true, text: 'Senha alterada. As outras sessões foram terminadas.' });
    } catch (err) {
      setMsg({ ok: false, text: err instanceof Error ? err.message : 'Erro ao alterar a senha.' });
    } finally {
      setBusy(false);
    }
  };
  return (
    <Panel title="Segurança">
      <form onSubmit={save} className="grid gap-3 sm:grid-cols-3">
        <input className={field} type="password" placeholder="Senha atual" value={current} onChange={(e) => setCurrent(e.target.value)} autoComplete="current-password" />
        <input className={field} type="password" placeholder="Nova senha" value={next} onChange={(e) => setNext(e.target.value)} autoComplete="new-password" />
        <input className={field} type="password" placeholder="Repetir nova senha" value={confirm} onChange={(e) => setConfirm(e.target.value)} autoComplete="new-password" />
        <div className="sm:col-span-3 flex items-center gap-3">
          <Button type="submit" size="sm" loading={busy}>Alterar senha</Button>
          <Notice msg={msg} />
        </div>
      </form>
      <p className="text-xs text-white/45">Mínimo 8 caracteres, com 3 de: minúscula, maiúscula, número, símbolo.</p>
    </Panel>
  );
}

interface Limits {
  day: number | null;
  week: number | null;
  month: number | null;
  pending: { values: Record<string, number | null>; appliesAt: string | null } | null;
}
const LIMIT_LABELS: [keyof Omit<Limits, 'pending'>, string][] = [['day', 'Diário'], ['week', 'Semanal'], ['month', 'Mensal']];

function Responsible() {
  const router = useRouter();
  const setUser = useAuthStore((s) => s.setUser);
  const [limits, setLimits] = React.useState<Limits | null>(null);
  const [form, setForm] = React.useState<Record<string, string>>({ day: '', week: '', month: '' });
  const [msg, setMsg] = React.useState<Msg>(null);
  const [period, setPeriod] = React.useState('30');
  const [sure, setSure] = React.useState(false);
  const [exMsg, setExMsg] = React.useState<Msg>(null);
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
    setExMsg(null);
    try {
      await api('/api/account/exclusion', { method: 'POST', body: JSON.stringify({ period, confirm: sure }) });
      setUser(null);
      router.push('/jogo-responsavel');
    } catch (err) {
      setExMsg({ ok: false, text: err instanceof Error ? err.message : 'Erro.' });
    }
  };
  return (
    <Panel title="Jogo responsável">
      <form onSubmit={save} className="space-y-3">
        <p className="text-sm text-white/70">Limites de depósito (€). Vazio = sem limite. Baixar um limite vale já; subir ou retirar vale daqui a 24 h.</p>
        <div className="grid gap-3 sm:grid-cols-3">
          {LIMIT_LABELS.map(([k, label]) => (
            <label key={k} className="space-y-1">
              <span className="text-xs font-semibold text-white/70">{label}</span>
              <input className={field} inputMode="decimal" placeholder="Sem limite" value={form[k]} onChange={(e) => setForm((f) => ({ ...f, [k]: e.target.value }))} />
            </label>
          ))}
        </div>
        {limits?.pending && (
          <p className="text-xs text-amber-300">
            Pendente até {new Date(limits.pending.appliesAt ?? '').toLocaleString('pt-PT')}:{' '}
            {Object.entries(limits.pending.values).map(([k, v]) => `${LIMIT_LABELS.find(([x]) => x === k)?.[1]} ${v === null ? 'sem limite' : `${v} €`}`).join(' · ')}
          </p>
        )}
        <div className="flex items-center gap-3">
          <Button type="submit" size="sm">Guardar limites</Button>
          <Notice msg={msg} />
        </div>
      </form>
      <div className="space-y-3 rounded-xl border border-rose-500/40 bg-rose-500/5 p-4">
        <p className="font-bold">Autoexclusão</p>
        <p className="text-sm text-white/70">Bloqueia a sua conta durante o período escolhido. Não pode ser encurtada e a sessão termina de imediato.</p>
        <div className="flex flex-wrap items-center gap-2">
          <select className={`${field} w-auto`} value={period} onChange={(e) => setPeriod(e.target.value)}>
            <option value="1">24 horas</option>
            <option value="7">7 dias</option>
            <option value="30">30 dias</option>
            <option value="90">3 meses</option>
            <option value="180">6 meses</option>
            <option value="365">1 ano</option>
            <option value="perm">Permanente</option>
          </select>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={sure} onChange={(e) => setSure(e.target.checked)} /> Confirmo que quero excluir a minha conta
          </label>
          <Button type="button" size="sm" variant="ghost" disabled={!sure} onClick={() => void exclude()} className="border-rose-500/60 text-rose-300">
            Excluir conta
          </Button>
        </div>
        <Notice msg={exMsg} />
      </div>
    </Panel>
  );
}

export default function ContaPage() {
  return (
    <AccountShell title="Perfil">
      {(user) => (
        <>
          <Personal user={user} />
          <Security />
          <Responsible />
        </>
      )}
    </AccountShell>
  );
}
