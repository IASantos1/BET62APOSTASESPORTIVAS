'use client';

// Admin → BETBY → "Diagnóstico do feed (servidor)": como chegam as atualizações de um jogo.
import * as React from 'react';
import { Loader2, Search } from 'lucide-react';
import { cn } from '../../lib/utils';

type Json = Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any

export function FeedDiagCard() {
  const [q, setQ] = React.useState('');
  const [feed, setFeed] = React.useState<'live' | 'prematch'>('live');
  const [busy, setBusy] = React.useState(false);
  const [r, setR] = React.useState<Json | null>(null);
  const [copied, setCopied] = React.useState(false);
  const run = async () => {
    setBusy(true);
    setR(null);
    setCopied(false);
    try {
      const res = await fetch(`/api/admin/betby-feed?feed=${feed}&q=${encodeURIComponent(q)}`, { cache: 'no-store' });
      setR(res.ok ? await res.json() : { error: `HTTP ${res.status}` });
    } catch (e) {
      setR({ error: (e as Error).message });
    } finally {
      setBusy(false);
    }
  };
  return (
    <div className="rounded-xl border border-bet62-border bg-bet62-surface p-5 text-sm">
      <div className="mb-1 font-bold">Diagnóstico do feed (a partir do servidor)</div>
      <p className="mb-3 text-xs text-white/55">
        O servidor lê o feed da BETBY duas vezes (15 s de intervalo) e mostra, para o jogo procurado, o placar e as odds 1X2 em cada versão. Serve para ver porque é que umas odds não atualizam.
      </p>
      <div className="flex flex-wrap gap-2">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="nome de uma equipa (ex.: Santos)"
          className="min-w-0 flex-1 rounded-lg border border-bet62-border bg-bet62-bg px-3 py-2 text-xs outline-none focus:border-bet62-primary/60" />
        <select value={feed} onChange={(e) => setFeed(e.target.value as 'live' | 'prematch')} className="rounded-lg border border-bet62-border bg-bet62-bg px-2 py-2 text-xs">
          <option value="live">Ao vivo</option>
          <option value="prematch">Pré-jogo</option>
        </select>
        <button onClick={() => void run()} disabled={busy} className="inline-flex items-center gap-2 rounded-lg bg-bet62-primary px-3 py-2 text-xs font-bold text-onbrand disabled:opacity-50">
          {busy ? <Loader2 size={14} className="animate-spin" /> : <Search size={14} />} {busy ? 'A ler (≈20 s)…' : 'Analisar'}
        </button>
      </div>
      {r && (
        <div className="mt-3 space-y-2 text-xs">
          {r.error ? (
            <p className="text-bet62-primary">{r.error}</p>
          ) : (
            <>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-white/60">
                  Índice: {r.index.top} top + {r.index.rest} rest versões · jogos no índice: {r.index.eventsInIndex} · por ordem crescente: {r.index.ascending ? 'sim' : 'não'} · 15 s depois: +{r.after15s.added} / −{r.after15s.removed}, {r.after15s.keptButContentChanged} de {r.after15s.kept} mudaram de conteúdo
                </span>
                <button onClick={() => void navigator.clipboard.writeText(JSON.stringify(r, null, 2)).then(() => setCopied(true))} className="rounded-md bg-bet62-primary px-2 py-1 font-bold text-onbrand">
                  {copied ? 'Copiado ✓' : 'Copiar tudo (para enviar)'}
                </button>
              </div>
              {(['before', 'after'] as const).map((k) => (
                <div key={k}>
                  {(r.matches[k] as Json[]).map((m) => (
                    <div key={`${k}${m.id}`} className="mb-2 rounded-md bg-black/20 p-2">
                      <div className="mb-1 font-semibold">{m.match} <span className="font-mono text-white/40">{m.id}</span></div>
                      {(m.sources as Json[]).map((s, i) => (
                        <div key={i} className={cn('flex flex-wrap gap-x-3 border-t border-bet62-border/40 py-1 font-mono text-[11px]', s.removed && 'text-amber-400')}>
                          <span className="text-white/45">{s.source}</span>
                          {s.removed ? <span>jogo removido</span> : (
                            <>
                              {s.score && <span>placar {s.score}</span>}
                              {s.clock && <span>{s.clock}</span>}
                              {s['1x2'] && <span className="text-sky-300">1X2 {typeof s['1x2'] === 'string' ? s['1x2'] : Object.values(s['1x2']).join(' / ')}</span>}
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
              {!(r.matches.before as Json[]).length && <p className="text-white/50">Nenhum jogo com esse nome no feed.</p>}
            </>
          )}
        </div>
      )}
    </div>
  );
}
