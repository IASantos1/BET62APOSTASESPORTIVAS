'use client';

// O bilhete (modelo do repositório bet, com as cores do BET62): o tipo e o estado, a barra das
// seleções resolvidas, cada seleção com o estado do seu jogo (hora, minuto e resultado ao vivo,
// terminado), o resumo (aposta, odd total, retorno), lucro/prejuízo, cash out, referência e partilhar.
import * as React from 'react';
import Link from 'next/link';
import { createPortal } from 'react-dom';
import { Copy, Download, Link2, Lock, RefreshCw, Share2, X } from 'lucide-react';
import { useBoard, type BoardEvent } from '../../lib/board';
import { useAuthStore } from '../../stores/auth.store';
import { cn, formatCurrencyEUR as money } from '../../lib/utils';
import { fmtOdds, fmtWhen } from '../sports/links';

export interface TicketLeg {
  eventId: string;
  event: string;
  sport: string;
  startTime: string | null;
  live: boolean;
  marketId: string;
  variant: string;
  outcomeId: string;
  market: string;
  outcome: string;
  odds: number;
  status: string;
  eventStatus: string;
  score: string | null;
  clock: string | null;
}
export interface TicketData {
  id: string | null;
  ref: string;
  kind: 'single' | 'multiple' | 'builder';
  status: string;
  stake: number;
  odds: number;
  potential: number;
  payout: number;
  createdAt: string;
  settledAt: string | null;
  cashout: { status: string; value: number | null; reason: string | null; live: boolean } | null;
  legs: TicketLeg[];
}

const BADGE: Record<string, [string, string]> = {
  open: ['Em aberto', 'pending'],
  review: ['Em análise', 'pending'],
  won: ['Ganha', 'won'],
  lost: ['Perdida', 'lost'],
  void: ['Anulada', 'void'],
  rejected: ['Recusada', 'void'],
  cashout: ['Cash Out', 'cashout'],
};
const KIND: Record<string, [string, string]> = { single: ['Simples', '🎯'], multiple: ['Múltipla', '🔗'], builder: ['Criador de apostas', '🧩'] };
const MARK: Record<string, string> = { won: '✓', lost: '✕', void: '—', half_won: '½', half_lost: '½' };
const STATUS_CLS: Record<string, string> = {
  pending: 'bg-amber-400/15 tk-pending',
  won: 'bg-emerald-400/15 tk-won',
  lost: 'bg-rose-400/15 tk-lost',
  cashout: 'bg-yellow-400/15 tk-gold',
  void: 'bg-bet62-surface-3 text-white/70',
};
const fmtDateTime = (iso: string) => new Date(iso).toLocaleString('pt-PT', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });

/** O estado do jogo de uma seleção, com o quadro ao vivo do site por cima do que o servidor sabe. */
function legState(l: TicketLeg, open: boolean, ev?: BoardEvent) {
  const live = ev?.status === 'live' || (open && l.eventStatus === 'live');
  const score = ev?.score ? `${ev.score.home}-${ev.score.away}` : l.score;
  const clock = ev?.clock ?? l.clock;
  if (open && live) return { live: true, text: `${clock || 'Ao vivo'}${score ? ` · ${score}` : ''}` };
  if (l.eventStatus === 'finished') return { live: false, text: `Terminado${l.score ? ` · ${l.score}` : ''}` };
  if (l.eventStatus === 'cancelled') return { live: false, text: 'Jogo cancelado' };
  if (live) return { live: false, text: `Ao vivo${score ? ` · ${score}` : ''}` };
  return { live: false, text: l.startTime ? fmtWhen(new Date(l.startTime).getTime()) : '—' };
}

export function TicketCard({ b, onChanged, shared = false }: { b: TicketData; onChanged?: () => void; shared?: boolean }) {
  const { events } = useBoard();
  const [badge, cls] = BADGE[b.status] ?? BADGE.open;
  const open = b.status === 'open' || b.status === 'review';
  const builder = b.kind === 'builder';
  const [title, icon] = KIND[b.kind] ?? KIND.single;
  const n = b.legs.length;
  const first = b.legs[0];
  const done = b.legs.filter((l) => l.status !== 'open').length;
  const evOf = (id: string) => events.find((e) => e.id === id);
  const ret: [string, number, string] = open
    ? ['Retorno potencial', b.potential, '']
    : b.status === 'lost'
      ? ['Retorno', 0, 'tk-lost']
      : b.status === 'void' || b.status === 'rejected'
        ? ['Reembolso', b.payout || b.stake, '']
        : b.status === 'cashout'
          ? ['Cash out', b.payout, 'tk-gold']
          : ['Ganhou', b.payout, 'tk-won'];
  const profit = open || b.status === 'void' || b.status === 'rejected' ? null : b.payout - b.stake;
  const [sharing, setSharing] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const sub = builder ? first?.event : n > 1 ? `${n} seleções` : first?.event;
  const builderState = builder && first ? legState(first, open, evOf(first.eventId)) : null;

  return (
    <div className="relative overflow-hidden rounded-[14px] border border-bet62-border bg-bet62-surface">
      <i className={cn('absolute inset-x-0 top-0 h-[3px]', builder ? 'bg-emerald-400' : 'bg-bet62-primary')} aria-hidden />
      {/* Cabeça: o que é, quantas seleções, o estado */}
      <div className="flex items-center gap-3 px-4 pb-3 pt-4">
        <span className={cn('grid h-[38px] w-[38px] shrink-0 place-items-center rounded-[11px] text-[19px]', builder ? 'bg-emerald-400/15' : 'bg-bet62-primary/15')}>{icon}</span>
        <div className="min-w-0 flex-1">
          <strong className="flex items-center gap-1.5 text-[15px] font-black">
            {title}
            {n > 1 && !builder && <em className="grid h-5 min-w-5 place-items-center rounded-full bg-bet62-surface-3 px-1.5 text-[11px] not-italic">{n}</em>}
          </strong>
          <small className="mt-0.5 block truncate text-xs text-white/55">{sub}</small>
          {builderState && <span className={cn('text-xs', builderState.live ? 'font-extrabold text-bet62-primary' : 'text-white/45')}>{builderState.live && <i className="pulse-dot mr-1.5 inline-block align-middle" />}{builderState.text}</span>}
        </div>
        <span className={cn('inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-black', STATUS_CLS[cls])}>
          {cls === 'pending' && <i className="h-[7px] w-[7px] rounded-full bg-amber-400" />}
          {badge}
        </span>
      </div>
      {/* Barra: quantas seleções já estão resolvidas */}
      {n > 1 && (
        <div className="mx-4 mb-2.5 flex gap-[3px]" title={`${done} de ${n} resolvidas`}>
          {b.legs.map((l, i) => (
            <i key={i} className={cn('h-1 flex-1 rounded-sm', l.status === 'won' || l.status === 'half_won' ? 'bg-emerald-400' : l.status === 'lost' || l.status === 'half_lost' ? 'bg-rose-400' : l.status === 'void' ? 'bg-white/30' : 'bg-bet62-surface-3')} />
          ))}
        </div>
      )}
      {/* Seleções */}
      <div className="border-t border-bet62-border">
        {b.legs.map((l, i) => {
          const st = legState(l, open, evOf(l.eventId));
          const mark = MARK[l.status] ?? '';
          return (
            <Link key={i} href={`/live/match/${l.eventId}`} className={cn('flex items-center gap-3 px-4 py-[11px] hover:bg-bet62-surface-2', i > 0 && 'border-t border-bet62-border')}>
              <span
                className={cn(
                  'grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 text-[11px] font-black text-white',
                  l.status === 'won' || l.status === 'half_won' ? 'border-emerald-500 bg-emerald-500' : l.status === 'lost' || l.status === 'half_lost' ? 'border-rose-400 bg-rose-400' : l.status === 'void' ? 'border-bet62-surface-3 bg-bet62-surface-3' : st.live ? 'border-bet62-primary' : 'border-white/30',
                )}
              >
                {mark}
              </span>
              <span className="min-w-0 flex-1">
                <strong className={cn('block truncate text-sm font-extrabold', (l.status === 'lost' || l.status === 'half_lost') && 'line-through decoration-rose-400/60')}>{l.outcome}</strong>
                <small className="mt-0.5 block truncate text-[11.5px] text-white/55">
                  {l.market}
                  {builder ? '' : ` · ${l.event}`}
                </small>
                {!builder && (
                  <small className={cn('block truncate text-[11.5px]', st.live ? 'font-extrabold text-bet62-primary' : 'text-white/40')}>
                    {st.live && <i className="pulse-dot mr-1.5 inline-block align-middle" />}
                    {st.text}
                  </small>
                )}
              </span>
              <b className="shrink-0 font-mono text-sm font-black">{fmtOdds(l.odds)}</b>
            </Link>
          );
        })}
      </div>
      {/* Resumo */}
      <div className="mx-4 mt-1 grid grid-cols-[1fr_1fr_1.3fr] gap-px overflow-hidden rounded-xl bg-bet62-border">
        <div className="bg-bet62-surface-2 px-3 py-2.5">
          <small className="block text-[11px] text-white/55">Aposta</small>
          <b className="mt-0.5 block font-mono text-[15px] font-black">{money(b.stake)}</b>
        </div>
        <div className="bg-bet62-surface-2 px-3 py-2.5">
          <small className="block text-[11px] text-white/55">Odd total</small>
          <b className="mt-0.5 block font-mono text-[15px] font-black">{fmtOdds(b.odds)}</b>
        </div>
        <div className={cn('px-3 py-2.5 text-right', b.status === 'won' ? 'bg-emerald-500/15' : b.status === 'cashout' ? 'bg-yellow-400/15' : 'bg-bet62-surface-2')}>
          <small className="block text-[11px] text-white/55">{ret[0]}</small>
          <b className={cn('mt-0.5 block font-mono text-[17px] font-black', ret[2])}>{money(ret[1])}</b>
        </div>
      </div>
      {profit !== null && profit !== 0 && (
        <div className={cn('mx-4 mt-2 text-right text-xs font-extrabold', profit > 0 ? 'tk-won' : 'tk-lost')}>
          {profit > 0 ? 'Lucro +' : 'Prejuízo '}
          {money(profit)}
        </div>
      )}
      {!shared && b.id && <Cashout b={b} onChanged={onChanged} />}
      {/* Rodapé: referência (copiar), data, partilhar */}
      <div className="mt-3 flex items-center gap-3 border-t border-bet62-border px-4 pb-3 pt-2.5 text-[11px] text-white/45">
        <button
          type="button"
          title="Copiar referência"
          onClick={() => {
            void navigator.clipboard?.writeText(b.ref).then(() => {
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            });
          }}
          className="inline-flex items-center gap-1 font-mono hover:text-white"
        >
          <Copy size={11} /> {copied ? 'Copiado' : `Ref ${b.ref}`}
        </button>
        <span className="flex-1">{fmtDateTime(b.settledAt && !open ? b.settledAt : b.createdAt)}</span>
        {!shared && b.id && (
          <button type="button" onClick={() => setSharing(true)} className="inline-flex items-center gap-1 font-bold text-white/70 hover:text-white">
            <Share2 size={12} /> Partilhar
          </button>
        )}
      </div>
      {sharing && <ShareModal b={b} onClose={() => setSharing(false)} />}
    </div>
  );
}

// ---------- cash out ----------

function Cashout({ b, onChanged }: { b: TicketData; onChanged?: () => void }) {
  const refresh = useAuthStore((s) => s.refresh);
  const [confirm, setConfirm] = React.useState(false);
  const [busy, setBusy] = React.useState(false);
  const [msg, setMsg] = React.useState<{ ok: boolean; text: string } | null>(null);
  const [offer, setOffer] = React.useState(b.cashout);
  React.useEffect(() => setOffer(b.cashout), [b.cashout]);
  if (b.status === 'cashout') return <div className="mx-4 mt-3 flex items-center justify-center gap-2 rounded-[14px] border border-bet62-border bg-bet62-surface-2 p-3.5 text-[13px] font-bold text-white/45"><Lock size={14} /> Cash out efetuado</div>;
  if (b.status !== 'open') return null;
  const locked = (t: string) => (
    <div className="mx-4 mt-3 flex items-center justify-center gap-2 rounded-[14px] border border-bet62-border bg-bet62-surface-2 p-3.5 text-center text-[13px] font-bold text-white/45">
      <Lock size={14} /> {t}
    </div>
  );
  if (!offer || offer.status === 'unavailable') return locked(`Cash out indisponível${offer?.reason ? ` · ${offer.reason}` : ''}`);
  if (offer.status === 'suspended') return locked(`Cash out suspenso${offer.reason ? ` · ${offer.reason}` : ''}`);
  const go = async () => {
    setBusy(true);
    setMsg(null);
    try {
      const r = await fetch(`/api/bets/${b.id}/cashout`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ value: offer.value }) });
      const j = (await r.json().catch(() => ({}))) as { value?: number; error?: string; cashout?: TicketData['cashout'] };
      if (!r.ok) {
        if (j.cashout) setOffer(j.cashout);
        setMsg({ ok: false, text: j.error || 'Não foi possível fazer o cash out.' });
        return;
      }
      setMsg({ ok: true, text: `${money(j.value ?? 0)} creditados no saldo.` });
      void refresh();
      window.dispatchEvent(new Event('bet62:bets-changed'));
      onChanged?.();
    } finally {
      setBusy(false);
      setConfirm(false);
    }
  };
  return (
    <div className="mx-4 mt-3 space-y-2">
      {confirm ? (
        <div className="flex items-center gap-2.5 rounded-[14px] bg-gradient-to-br from-emerald-700 to-emerald-500 px-3.5 py-3 text-[#ffffff]">
          <div className="flex-1">
            <small className="block text-[11px] text-emerald-50">Cash out</small>
            <b className="font-mono text-lg font-black">{money(offer.value ?? 0)}</b>
          </div>
          <button type="button" onClick={() => setConfirm(false)} className="text-xs text-emerald-50">Cancelar</button>
          <button type="button" disabled={busy} onClick={() => void go()} className="rounded-[10px] bg-[#ffffff] px-3.5 py-2 text-sm font-black text-[#047857] disabled:opacity-60">
            {busy ? (offer.live ? 'A confirmar…' : '…') : 'CONFIRMAR'}
          </button>
        </div>
      ) : (
        <button type="button" onClick={() => setConfirm(true)} className="flex w-full items-center justify-center gap-2 rounded-[14px] bg-gradient-to-br from-emerald-700 to-emerald-500 p-3.5 text-[15px] font-black text-[#ffffff]">
          <RefreshCw size={16} /> Cash Out {money(offer.value ?? 0)}
        </button>
      )}
      {msg && <p className={cn('text-center text-xs', msg.ok ? 'text-emerald-400' : 'text-amber-300')}>{msg.text}</p>}
    </div>
  );
}

// ---------- partilhar ----------

/** O bilhete desenhado em 1080×1920 (formato stories), como no repositório bet, com as cores do BET62. */
async function ticketPicture(b: TicketData, url: string, showMoney: boolean): Promise<Blob | null> {
  const W = 1080, H = 1920;
  const c = document.createElement('canvas');
  c.width = W;
  c.height = H;
  const g = c.getContext('2d');
  if (!g) return null;
  try {
    await document.fonts?.ready;
  } catch {}
  const family = getComputedStyle(document.body).fontFamily || 'ui-sans-serif, system-ui';
  const F = (w: number, px: number) => `${w} ${px}px ${family}`;
  const BRAND = '#e11d48', TEXT = '#e8eaed', SUB = '#9aa3ad', CARD = '#121a29', LINE = '#26324a', RED = '#ff6b81', GREEN = '#3ee05a';
  const rr = (x: number, y: number, w: number, h: number, r: number | number[]) => {
    g.beginPath();
    if (g.roundRect) g.roundRect(x, y, w, h, r);
    else g.rect(x, y, w, h);
  };
  const fit = (t: string, max: number) => {
    let s = String(t || '');
    if (g.measureText(s).width <= max) return s;
    while (s.length > 1 && g.measureText(`${s}…`).width > max) s = s.slice(0, -1);
    return `${s}…`;
  };
  const brand = (cx: number, y: number, px: number, alpha = 1) => {
    g.save();
    g.globalAlpha = alpha;
    g.font = F(900, px);
    g.textAlign = 'left';
    const bw = g.measureText('BET').width, nw = g.measureText('62').width, bx = cx - (bw + nw) / 2;
    g.fillStyle = '#ffffff';
    g.fillText('BET', bx, y);
    g.fillStyle = BRAND;
    g.fillText('62', bx + bw, y);
    g.restore();
  };
  const bg = g.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, '#3a0714');
  bg.addColorStop(0.45, '#0f1522');
  bg.addColorStop(1, '#0a0e17');
  g.fillStyle = bg;
  g.fillRect(0, 0, W, H);
  const glow = g.createRadialGradient(W / 2, 110, 20, W / 2, 110, 700);
  glow.addColorStop(0, 'rgba(225,29,72,.35)');
  glow.addColorStop(1, 'rgba(225,29,72,0)');
  g.fillStyle = glow;
  g.fillRect(0, 0, W, 900);
  const [badge] = BADGE[b.status] ?? BADGE.open;
  const [kind] = KIND[b.kind] ?? KIND.single;
  const open = b.status === 'open' || b.status === 'review';
  const legs = b.legs;
  const x = 60, w = W - 120, zoneTop = 90, maxH = 1680 - zoneTop;
  const headH = 170, moneyH = 170, padB = 40;
  const room = maxH - headH - moneyH - 30 - padB;
  const MIN = 112, MAX = 170;
  let shown = legs;
  let rowH = Math.min(MAX, Math.floor(room / Math.max(1, legs.length)));
  if (rowH < MIN) {
    const k = Math.max(1, Math.floor((room - 56) / MIN));
    shown = legs.slice(0, k);
    rowH = Math.min(MAX, Math.floor((room - 56) / k));
  }
  const more = legs.length - shown.length;
  const h = headH + shown.length * rowH + (more ? 56 : 0) + 30 + moneyH + padB;
  const top = zoneTop + Math.max(0, Math.round((maxH - h) / 2));
  g.fillStyle = CARD;
  rr(x, top, w, h, 40);
  g.fill();
  g.save();
  rr(x, top, w, h, 40);
  g.clip();
  g.translate(W / 2, top + h / 2);
  g.rotate(-0.32);
  brand(0, 100, Math.min(320, h * 0.42), 0.08);
  g.restore();
  g.strokeStyle = LINE;
  g.lineWidth = 3;
  rr(x, top, w, h, 40);
  g.stroke();
  g.fillStyle = BRAND;
  rr(x, top, w, 10, [40, 40, 0, 0]);
  g.fill();
  g.textAlign = 'left';
  g.fillStyle = TEXT;
  g.font = F(900, 56);
  g.fillText(fit(kind, w - 420), x + 50, top + 98);
  g.fillStyle = SUB;
  g.font = F(600, 34);
  g.fillText(`${legs.length} ${legs.length === 1 ? 'seleção' : 'seleções'}`, x + 50, top + 146);
  const st: Record<string, [string, string]> = { open: ['#3a3210', '#f5c542'], review: ['#3a3210', '#f5c542'], won: ['#103a1d', GREEN], lost: ['#3a1218', RED], void: ['#2a2f35', SUB], rejected: ['#2a2f35', SUB], cashout: ['#3a3210', '#ffc83d'] };
  const [sb, sf] = st[b.status] ?? st.open;
  g.font = F(800, 34);
  const tw = g.measureText(badge).width + 64;
  g.fillStyle = sb;
  rr(x + w - 50 - tw, top + 62, tw, 66, 33);
  g.fill();
  g.fillStyle = sf;
  g.textAlign = 'center';
  g.fillText(badge, x + w - 50 - tw / 2, top + 107);
  const full = rowH >= 140;
  const big = full ? 42 : rowH >= 124 ? 38 : 34, small = full ? 30 : rowH >= 124 ? 27 : 25;
  let y = top + headH;
  for (const l of shown) {
    g.strokeStyle = LINE;
    g.lineWidth = 2;
    g.beginPath();
    g.moveTo(x + 40, y);
    g.lineTo(x + w - 40, y);
    g.stroke();
    const state = legState(l, open);
    const mark = ({ won: ['✓', GREEN], lost: ['✕', RED], void: ['—', SUB] } as Record<string, string[]>)[l.status];
    const mid = y + rowH / 2;
    g.beginPath();
    g.arc(x + 80, mid, 22, 0, Math.PI * 2);
    g.strokeStyle = mark ? mark[1] : state.live ? BRAND : '#5b636c';
    g.lineWidth = 4;
    g.stroke();
    if (mark) {
      g.fillStyle = mark[1];
      g.font = F(900, 28);
      g.textAlign = 'center';
      g.fillText(mark[0], x + 80, mid + 10);
    }
    const textW = w - 330, oddX = x + w - 50;
    const when = `${state.live ? '● ' : ''}${state.text}`;
    g.textAlign = 'left';
    if (full) {
      g.fillStyle = TEXT;
      g.font = F(800, big);
      g.fillText(fit(l.outcome, textW), x + 130, mid - 22);
      g.fillStyle = SUB;
      g.font = F(500, small);
      g.fillText(fit(`${l.market} · ${l.event}`, textW), x + 130, mid + 18);
      g.fillStyle = state.live ? BRAND : '#7d868f';
      g.font = F(700, small - 2);
      g.fillText(fit(when, textW), x + 130, mid + 56);
      g.textAlign = 'right';
      g.fillStyle = TEXT;
      g.font = F(900, big + 6);
      g.fillText(fmtOdds(l.odds), oddX, mid + 16);
    } else {
      g.fillStyle = TEXT;
      g.font = F(800, big);
      g.fillText(fit(l.outcome, textW), x + 130, mid - 8);
      g.fillStyle = SUB;
      g.font = F(500, small);
      g.fillText(fit(`${l.market} · ${l.event}`, textW), x + 130, mid + 30);
      g.textAlign = 'right';
      g.fillStyle = TEXT;
      g.font = F(900, big + 4);
      g.fillText(fmtOdds(l.odds), oddX, mid - 4);
      g.fillStyle = state.live ? BRAND : '#7d868f';
      g.font = F(700, small - 3);
      g.fillText(fit(when, 230), oddX, mid + 30);
    }
    y += rowH;
  }
  if (more) {
    g.textAlign = 'center';
    g.fillStyle = SUB;
    g.font = F(700, 32);
    g.fillText(`+ ${more} ${more === 1 ? 'seleção' : 'seleções'}`, W / 2, y + 40);
    y += 56;
  }
  const by = y + 30;
  g.fillStyle = 'rgba(10,14,23,.85)';
  rr(x + 36, by, w - 72, moneyH, 28);
  g.fill();
  const won = b.status === 'won' || b.status === 'cashout';
  const retVal = won ? b.payout : b.potential;
  const cells: [string, string][] = showMoney
    ? [['Aposta', money(b.stake)], ['Odd total', fmtOdds(b.odds)], [won ? 'Ganho' : open ? 'Retorno potencial' : 'Retorno', money(retVal)]]
    : [['Odd total', fmtOdds(b.odds)]];
  const cw = (w - 72) / cells.length;
  cells.forEach(([k, v], i) => {
    const cx = x + 36 + cw * i + cw / 2, last = i === cells.length - 1;
    g.textAlign = 'center';
    g.fillStyle = SUB;
    g.font = F(600, 30);
    g.fillText(fit(k, cw - 24), cx, by + 60);
    let px = last ? 56 : 50;
    g.font = F(900, px);
    while (px > 30 && g.measureText(v).width > cw - 30) {
      px -= 2;
      g.font = F(900, px);
    }
    g.fillStyle = last && (won || showMoney) ? (won ? GREEN : BRAND) : TEXT;
    g.fillText(v, cx, by + 130);
  });
  g.textAlign = 'center';
  g.fillStyle = TEXT;
  g.font = F(800, 38);
  g.fillText(open ? 'Faça a mesma aposta na BET62' : 'Aposte na BET62', W / 2, 1755);
  g.fillStyle = BRAND;
  g.font = F(900, 46);
  g.fillText(new URL(url).host, W / 2, 1815);
  g.fillStyle = '#6f7780';
  g.font = F(600, 26);
  g.fillText(`${b.ref}  ·  18+  ·  Jogue com responsabilidade`, W / 2, 1875);
  return new Promise((ok) => c.toBlob(ok, 'image/png'));
}

function ShareModal({ b, onClose }: { b: TicketData; onClose: () => void }) {
  const [url, setUrl] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [showMoney, setShowMoney] = React.useState(true);
  const [pic, setPic] = React.useState<{ blob: Blob; src: string } | null>(null);
  const [note, setNote] = React.useState<string | null>(null);
  React.useEffect(() => {
    fetch(`/api/bets/${b.id}/share`, { method: 'POST' })
      .then((r) => r.json().then((j) => (r.ok ? setUrl(j.url) : setError(j.error || 'Erro ao partilhar.'))))
      .catch(() => setError('Sem ligação.'));
  }, [b.id]);
  React.useEffect(() => {
    if (!url) return;
    let alive = true;
    void ticketPicture(b, url, showMoney).then((blob) => {
      if (!alive || !blob) return;
      setPic((old) => {
        if (old) URL.revokeObjectURL(old.src);
        return { blob, src: URL.createObjectURL(blob) };
      });
    });
    return () => {
      alive = false;
    };
  }, [b, url, showMoney]);
  const msg = b.status === 'won' ? `Bilhete vencedor na BET62 🏆 (odd ${fmtOdds(b.odds)})` : 'Vê o meu bilhete na BET62';
  const copyLink = async () => {
    if (!url) return;
    try {
      await navigator.clipboard.writeText(url);
      setNote('Link copiado: abre só este bilhete na BET62.');
    } catch {
      window.prompt('Copie o link do bilhete:', url);
    }
  };
  const share = async () => {
    if (!url) return;
    const file = pic ? new File([pic.blob], `bilhete-bet62-${b.ref}.png`, { type: 'image/png' }) : null;
    if (file && navigator.canShare?.({ files: [file] })) {
      try {
        await navigator.share({ files: [file], title: 'BET62', text: `${msg} ${url}` });
        return;
      } catch (e) {
        if ((e as Error)?.name === 'AbortError') return;
      }
    }
    if (navigator.share) {
      try {
        await navigator.share({ title: 'BET62', text: msg, url });
        return;
      } catch (e) {
        if ((e as Error)?.name === 'AbortError') return;
      }
    }
    void copyLink();
  };
  const save = () => {
    if (!pic) return;
    const a = Object.assign(document.createElement('a'), { href: pic.src, download: `bilhete-bet62-${b.ref}.png` });
    document.body.append(a);
    a.click();
    a.remove();
    setNote('Imagem guardada: publique-a nos stories ou envie-a a quem quiser.');
  };
  return createPortal(
    <div className="fixed inset-0 z-[80] grid place-items-center bg-black/70 p-4" onClick={onClose}>
      <div role="dialog" aria-label="Partilhar bilhete" className="w-full max-w-sm space-y-3 rounded-2xl border border-bet62-border bg-bet62-bg p-4" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between">
          <b>Partilhar bilhete</b>
          <button onClick={onClose} aria-label="Fechar" className="grid h-9 w-9 place-items-center rounded-xl hover:bg-white/5"><X size={18} /></button>
        </div>
        {error ? (
          <p className="text-sm text-rose-400">{error}</p>
        ) : (
          <>
            <div className="mx-auto aspect-[9/16] w-[200px] overflow-hidden rounded-xl bg-bet62-surface">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {pic && <img src={pic.src} alt="O bilhete, como vai ser partilhado" className="h-full w-full object-cover" />}
            </div>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={showMoney} onChange={(e) => setShowMoney(e.target.checked)} /> Mostrar os valores (aposta e retorno)
            </label>
            <div className="grid gap-2">
              <button type="button" disabled={!url} onClick={() => void share()} className="flex items-center justify-center gap-2 rounded-xl bg-bet62-primary py-2.5 font-bold text-onbrand disabled:opacity-50">
                <Share2 size={16} /> Partilhar
              </button>
              <button type="button" disabled={!pic} onClick={save} className="flex items-center justify-center gap-2 rounded-xl border border-bet62-border py-2.5 text-sm font-bold disabled:opacity-50">
                <Download size={16} /> Guardar imagem
              </button>
              <button type="button" disabled={!url} onClick={() => void copyLink()} className="flex items-center justify-center gap-2 rounded-xl py-2 text-sm font-bold text-white/70 hover:text-white disabled:opacity-50">
                <Link2 size={16} /> Copiar link
              </button>
            </div>
            {note && <p className="text-center text-xs text-emerald-400">{note}</p>}
          </>
        )}
      </div>
    </div>,
    document.body,
  );
}
