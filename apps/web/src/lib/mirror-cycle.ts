// Um ciclo da liquidação automática pela BETBY (conta demo), igual no servidor e no navegador do admin:
//   1. enviar as seleções novas (bet/place, uma aposta simples cada);
//   2. ler o my_bets/list da conta atual (e das anteriores com apostas por liquidar);
//   3. entregar o que a BETBY respondeu (as seleções liquidadas lá são liquidadas cá).
// O servidor tenta primeiro (24 h por dia); se a BETBY o bloquear, o painel do admin faz o mesmo.

type Json = Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any

export interface PlaceItem { leg_key: string; event_id: string; market_id: string; variant: string; outcome_id: string; odds: string | number }
export interface MirrorAccount { token: string; account: string | null; open: number; current: boolean }
export interface MirrorWork { token: string; stake: number; currency: string; place: PlaceItem[]; accounts: MirrorAccount[] }

export interface MirrorIO {
  /** o trabalho a fazer (null = desligado / sem chave / outro já trata) */
  work(): Promise<MirrorWork | null>;
  placed(accepted: { key: string; betId: string }[], rejected: { key: string; error: string }[]): Promise<void>;
  myBets(results: Json[]): Promise<{ decided?: number; confirmed?: number }>;
}

export interface CycleResult {
  placed: number;
  rejected: number;
  read: number;
  decided: number;
  confirmed: number;
  error?: string;
  /** a BETBY recusou o pedido por vir de onde vem (servidor), não pela chave */
  blocked?: boolean;
  /** a BETBY recusou a chave */
  badToken?: boolean;
  skipped?: boolean;
}

export const requestId = (p: PlaceItem) => `${p.event_id}_${p.market_id}_${p.variant}_${p.outcome_id}`;
const odd = (v: string | number) => String(Math.round(Number(v) * 1000) / 1000);

export async function mirrorCycle(io: MirrorIO, cfg: { baseUrl: string; brandId: string; locale: string }, fetchImpl: typeof fetch = fetch): Promise<CycleResult> {
  const out: CycleResult = { placed: 0, rejected: 0, read: 0, decided: 0, confirmed: 0 };
  const w = await io.work();
  if (!w) return { ...out, skipped: true };

  const call = async (path: string, token: string, init?: RequestInit) => {
    const r = await fetchImpl(`${cfg.baseUrl}${path}`, {
      ...init,
      headers: { accept: 'application/json', 'content-type': 'application/json', authorization: `Bearer ${token}` },
      cache: 'no-store',
    });
    const text = await r.text();
    let body: Json | null = null;
    try {
      body = JSON.parse(text);
    } catch {
      // não é JSON
    }
    // "access blocked" / bb-rsn: a BETBY recusa pela origem do pedido (servidor), não pela chave.
    const blocked = (r.status === 503 || r.status === 403) && /access blocked/i.test(text);
    return { status: r.status, ok: r.ok, body, text, blocked, reason: r.headers.get('bb-rsn') };
  };
  const fail = (what: string, r: Awaited<ReturnType<typeof call>>) => {
    if (r.blocked) {
      out.blocked = true;
      out.error = `A BETBY bloqueou o pedido (${what}: HTTP ${r.status}${r.reason ? `, bb-rsn ${r.reason}` : ''}).`;
    } else if (r.status === 401 || r.status === 403) {
      out.badToken = true;
      out.error = `A BETBY recusou a chave (${what}: HTTP ${r.status}): faça login no demo e cole a chave nova.`;
    } else out.error = `${what}: HTTP ${r.status} ${r.text.slice(0, 160)}`;
  };

  // 1. Enviar.
  if (w.place.length) {
    const body = w.place.map((p) => ({
      type: '1/1',
      sum: String(w.stake),
      k: odd(p.odds),
      global_id: null,
      bonus_id: null,
      bet_request_id: requestId(p),
      odds_change: 'any',
      selections: [{ event_id: p.event_id, market_id: p.market_id, specifiers: p.variant, outcome_id: p.outcome_id, k: odd(p.odds), promo_id: null, bonus_id: null, timestamp: Date.now() }],
    }));
    const r = await call(`/api/v2/coupon/brand/${cfg.brandId}/bet/place`, w.token, { method: 'POST', body: JSON.stringify(body) });
    if (!r.ok || !r.body) {
      fail('bet/place', r);
      if (out.blocked || out.badToken) return out;
    } else {
      const acc = (Array.isArray(r.body.accepted) ? r.body.accepted : []) as Json[];
      const errs = (Array.isArray(r.body.error) ? r.body.error : []) as Json[];
      const accepted: { key: string; betId: string }[] = [];
      const rejected: { key: string; error: string }[] = [];
      w.place.forEach((p, i) => {
        const a = acc.find((x) => x.bet_request_id === requestId(p));
        if (a?.bet_id) accepted.push({ key: p.leg_key, betId: String(a.bet_id) });
        else {
          const e = errs.find((x) => x?.bet_request_id === requestId(p)) ?? (errs.length === w.place.length ? errs[i] : null);
          rejected.push({ key: p.leg_key, error: e ? JSON.stringify(e).slice(0, 300) : 'sem resposta para esta seleção' });
        }
      });
      await io.placed(accepted, rejected);
      out.placed = accepted.length;
      out.rejected = rejected.length;
    }
  }

  // 2. Ler (até 10 páginas de 50 por conta).
  for (const a of w.accounts) {
    if (!a.current && !a.open) continue;
    const results: Json[] = [];
    for (let page = 0; page < 10; page++) {
      const q = `currency=${encodeURIComponent(w.currency)}&lang=${encodeURIComponent(cfg.locale)}&limit=50&skip=${page * 50}&status=&timestamp_from&timestamp_to`;
      const r = await call(`/api/v1/my_bets/list?${q}`, a.token);
      if (!r.ok || !r.body) {
        if (a.current) fail('my_bets/list', r);
        if (out.blocked) return out;
        break;
      }
      const list = (Array.isArray(r.body.results) ? r.body.results : []) as Json[];
      for (const b of list) {
        results.push({
          id: b.id,
          status: b.status,
          selections: (b.selections ?? []).map((s: Json) => ({ event_id: s.event_id, market_id: s.market_id, specifiers: s.specifiers, outcome_id: s.outcome_id, k: s.k, status: s.status })),
        });
      }
      if (list.length < 50 || results.length >= Number(r.body.count ?? 0)) break;
    }
    out.read += results.length;
    if (results.length) {
      const j = await io.myBets(results);
      out.decided += Number(j.decided ?? 0);
      out.confirmed += Number(j.confirmed ?? 0);
    }
  }
  return out;
}
