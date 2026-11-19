import { NextResponse } from 'next/server';
import { isAdminAuthorized } from '../../../../lib/admin-auth';
import { fail, json, route } from '../../../../lib/server/auth';
import { hasDatabase } from '../../../../lib/server/db';
import {
  accountsToRead, applyMyBets, serverTest, getMirrorSettings, getServerStatus, mirrorSummary, queueOpenLegs, serverActive, recordPlacement, saveMirrorSettings, toPlace, tokenInfo, type MyBet,
} from '../../../../lib/server/mirror';

export const dynamic = 'force-dynamic';


const denied = () => NextResponse.json({ error: 'Sem sessão de admin.' }, { status: 401 });

/**
 * Liquidação automática pela BETBY (só o admin). O navegador do admin pede aqui o trabalho:
 * a chave da conta demo, as seleções a enviar e os ids das apostas BETBY a acompanhar.
 */
export const GET = route(async () => {
  if (!isAdminAuthorized()) return denied();
  if (!hasDatabase()) return json({ database: false });
  const s = await getMirrorSettings();
  const info = tokenInfo(s.token);
  const server = await getServerStatus();
  // O servidor já está a tratar (a BETBY não o bloqueia): o navegador do admin não repete o trabalho.
  const byServer = serverActive(server);
  const active = s.enabled && !!s.token && !info?.expired && !byServer;
  if (active) await queueOpenLegs();
  return json({
    database: true,
    server,
    byServer,
    enabled: s.enabled,
    stake: s.stake,
    hasToken: !!s.token,
    token: active ? s.token : null,
    oldAccounts: (s.oldTokens ?? []).map((t) => tokenInfo(t)),
    tokenInfo: info,
    place: active ? await toPlace(20) : [],
    // Contas a ler no my_bets/list: a atual e as anteriores que ainda têm apostas em aberto.
    accounts: active ? await accountsToRead(s.token, s.oldTokens ?? []) : [],
    summary: await mirrorSummary(),
  });
});

/**
 *  { action: 'settings', enabled?, stake?, token? }      — configuração (token null apaga)
 *  { action: 'placed', accepted: [{key, betId}], rejected: [{key, error}] } — resultado do bet/place
 *  { action: 'mybets', results: [...] }                   — o my_bets/list da BETBY
 */
export const POST = route(async (req: Request) => {
  if (!isAdminAuthorized()) return denied();
  if (!hasDatabase()) return fail('Sem base de dados.');
  const b = (await req.json().catch(() => ({}))) as Record<string, unknown>;
  if (b.action === 'settings') {
    const patch: Record<string, unknown> = {};
    if (typeof b.enabled === 'boolean') patch.enabled = b.enabled;
    if (b.stake !== undefined) {
      const v = Number(b.stake);
      if (!(v >= 0.1 && v <= 1000)) return fail('Valor por aposta entre 0,10 € e 1000 €.');
      patch.stake = Math.round(v * 100) / 100;
    }
    if (b.token === null) patch.token = null;
    else if (typeof b.token === 'string') {
      const t = b.token.trim().replace(/^Bearer\s+/i, '');
      if (!/^[\w-]+\.[\w-]+\.[\w-]+$/.test(t) || t.length > 4000) return fail('Chave inválida: cole o valor do cabeçalho authorization (eyJ…).');
      const info = tokenInfo(t);
      if (info?.expired) return fail('Esta chave já expirou: faça login no demo da BETBY e copie a nova.');
      patch.token = t;
    }
    const s = await saveMirrorSettings(patch);
    return json({ ok: true, enabled: s.enabled, stake: s.stake, hasToken: !!s.token, tokenInfo: tokenInfo(s.token) });
  }
  if (b.action === 'serverTest') return json(await serverTest());
  if (b.action === 'placed') {
    const clean = <T,>(v: unknown) => (Array.isArray(v) ? (v.slice(0, 100) as T[]) : []);
    const accepted = clean<{ key: unknown; betId: unknown }>(b.accepted)
      .filter((a) => typeof a.key === 'string' && /^\d{5,30}$/.test(String(a.betId)))
      .map((a) => ({ key: String(a.key), betId: String(a.betId) }));
    const rejected = clean<{ key: unknown; error: unknown }>(b.rejected)
      .filter((r) => typeof r.key === 'string')
      .map((r) => ({ key: String(r.key), error: String(r.error ?? 'recusada') }));
    const s = await getMirrorSettings();
    await recordPlacement(accepted, rejected, tokenInfo(s.token)?.sub ?? null);
    return json({ ok: true });
  }
  if (b.action === 'mybets') {
    const results = (Array.isArray(b.results) ? b.results.slice(0, 500) : []) as MyBet[];
    return json({ ok: true, ...(await applyMyBets(results)) });
  }
  return fail('Ação desconhecida.');
});
