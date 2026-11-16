'use client';

// Cassino Big Bang: a lista de jogos vem do servidor (/api/casino/games, chave BIGBANG_API_KEY) e cada
// jogo abre em modo demo (dinheiro virtual). Jogar a dinheiro real precisa da carteira, que ainda não
// existe neste site.
import * as React from 'react';
import { Dices, Loader2, PlayCircle, Search, X } from 'lucide-react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { cn } from '../../lib/utils';

interface Game {
  id: number;
  name: string;
  provider: string;
  image: string | null;
  type: string;
  category: string;
  demo: boolean;
}

const TABS = [
  ['', 'Todos'],
  ['Slots', 'Slots'],
  ['Ao Vivo', 'Ao Vivo'],
  ['Crash', 'Crash'],
] as const;
const PAGE = 48;
// Primeiro os mais procurados (como no outro projeto), depois por nome.
const HITS = ['fortune tiger', 'aviator', 'gates of olympus', 'sweet bonanza', 'fortune ox', 'mines', 'plinko', 'spaceman', 'fortune rabbit', 'big bass bonanza', 'sugar rush', 'starlight princess'];
const hitRank = (n: string) => {
  const i = HITS.indexOf(n.toLowerCase());
  return i < 0 ? 999 : i;
};

export default function CasinoPage() {
  const [games, setGames] = React.useState<Game[]>([]);
  const [state, setState] = React.useState<'loading' | 'ok' | 'off'>('loading');
  const [error, setError] = React.useState<string | null>(null);
  const [tab, setTab] = React.useState('');
  const [provider, setProvider] = React.useState('');
  const [q, setQ] = React.useState('');
  const [shown, setShown] = React.useState(PAGE);
  const [playing, setPlaying] = React.useState<{ game: Game; url: string | null; error?: string } | null>(null);

  React.useEffect(() => {
    fetch('/api/casino/games')
      .then((r) => r.json())
      .then((d: { enabled: boolean; games: Game[]; error?: string }) => {
        setGames(d.games || []);
        setError(d.error ?? null);
        setState(d.enabled && d.games?.length ? 'ok' : 'off');
      })
      .catch((e) => {
        setError(String(e));
        setState('off');
      });
  }, []);
  React.useEffect(() => setShown(PAGE), [tab, provider, q]);

  const providers = React.useMemo(() => {
    const m = new Map<string, number>();
    for (const g of games) m.set(g.provider, (m.get(g.provider) ?? 0) + 1);
    return [...m.entries()].sort((a, b) => b[1] - a[1]);
  }, [games]);
  const list = React.useMemo(() => {
    const term = q.trim().toLowerCase();
    return games
      .filter((g) => (!tab || g.category === tab) && (!provider || g.provider === provider) && (!term || g.name.toLowerCase().includes(term) || g.provider.toLowerCase().includes(term)))
      .sort((a, b) => hitRank(a.name) - hitRank(b.name) || Number(!!b.image) - Number(!!a.image) || a.name.localeCompare(b.name));
  }, [games, tab, provider, q]);

  const play = async (game: Game) => {
    setPlaying({ game, url: null });
    try {
      const r = await fetch('/api/casino/launch', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ gameId: game.id }) });
      const d = (await r.json()) as { url?: string; error?: string };
      setPlaying(d.url ? { game, url: d.url } : { game, url: null, error: d.error || 'Não foi possível abrir o jogo.' });
    } catch (e) {
      setPlaying({ game, url: null, error: String(e) });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-[1700px] space-y-5 px-4 py-6 lg:px-8">
        <section className="hero-glow rounded-2xl border border-bet62-border p-5 md:p-8">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-bet62-primary">
            <Dices size={14} /> Cassino BET62
          </p>
          <h1 className="mt-2 text-3xl font-black tracking-tight md:text-5xl">Slots, Crash e Casino Ao Vivo</h1>
          <p className="mt-2 max-w-2xl text-sm text-white/65 md:text-base">
            {state === 'ok' ? `${games.length} jogos de ${providers.length} fornecedores.` : 'Os jogos do Big Bang Casino aparecem aqui.'} Experimente em modo
            demo, com dinheiro virtual.
          </p>
        </section>

        {state === 'loading' && (
          <p className="flex items-center gap-2 text-sm text-white/60">
            <Loader2 size={16} className="animate-spin" /> A carregar jogos…
          </p>
        )}
        {state === 'off' && (
          <div className="rounded-2xl border border-bet62-border bg-bet62-surface/50 p-6 text-sm text-white/70">
            Cassino indisponível de momento.
            {error && <span className="mt-1 block font-mono text-xs text-white/45">{error}</span>}
          </div>
        )}

        {state === 'ok' && (
          <>
            <div className="flex flex-wrap items-center gap-2">
              {TABS.map(([k, l]) => (
                <button
                  key={k}
                  onClick={() => setTab(k)}
                  className={cn(
                    'rounded-full border px-4 py-2 text-sm font-bold',
                    tab === k ? 'border-bet62-primary bg-bet62-primary text-onbrand' : 'border-bet62-border bg-bet62-surface/60 text-white/70 hover:text-white',
                  )}
                >
                  {l}
                </button>
              ))}
              <select
                value={provider}
                onChange={(e) => setProvider(e.target.value)}
                className="rounded-full border border-bet62-border bg-bet62-surface px-4 py-2 text-sm"
                aria-label="Fornecedor"
              >
                <option value="">Todos os fornecedores</option>
                {providers.map(([p, n]) => (
                  <option key={p} value={p}>
                    {p} ({n})
                  </option>
                ))}
              </select>
              <label className="flex min-w-[12rem] flex-1 items-center gap-2 rounded-full border border-bet62-border bg-bet62-surface px-4 py-2 text-sm">
                <Search size={14} className="text-white/50" />
                <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Procurar jogo ou fornecedor" className="w-full bg-transparent outline-none" />
              </label>
            </div>

            <p className="text-xs text-white/45">{list.length} jogos</p>
            <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8">
              {list.slice(0, shown).map((g) => (
                <button
                  key={g.id}
                  onClick={() => g.demo && play(g)}
                  disabled={!g.demo}
                  title={g.demo ? `Jogar ${g.name} (demo)` : 'Disponível só a dinheiro real'}
                  className="group overflow-hidden rounded-xl border border-bet62-border bg-bet62-surface/60 text-left transition hover:border-bet62-primary/60 disabled:opacity-60"
                >
                  <div className="relative aspect-[3/4] bg-gradient-to-br from-bet62-surface-2 to-bet62-surface-3">
                    {g.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={g.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                    ) : (
                      <span className="absolute inset-0 grid place-items-center p-2 text-center text-xs font-bold text-white/70">{g.name}</span>
                    )}
                    <span className="absolute inset-0 hidden place-items-center bg-black/55 group-hover:grid">
                      <PlayCircle size={36} className="text-[#fff]" />
                    </span>
                    {g.category === 'Ao Vivo' && <span className="absolute left-1.5 top-1.5 rounded bg-bet62-primary px-1.5 text-[9px] font-bold text-onbrand">AO VIVO</span>}
                  </div>
                  <div className="p-2">
                    <p className="truncate text-xs font-bold">{g.name}</p>
                    <p className="truncate text-[10px] text-white/45">{g.provider}</p>
                  </div>
                </button>
              ))}
            </div>
            {list.length > shown && (
              <button onClick={() => setShown((n) => n + PAGE)} className="w-full rounded-xl border border-bet62-border py-3 text-sm text-white/70 hover:text-white">
                Ver mais jogos ({list.length - shown})
              </button>
            )}
          </>
        )}
      </main>
      <Footer />

      {playing && (
        <div className="fixed inset-0 z-[90] flex flex-col bg-black">
          <div className="flex items-center justify-between gap-2 bg-bet62-bg px-3 py-2">
            <p className="truncate text-sm font-bold">
              {playing.game.name} <span className="font-normal text-white/50">· demo</span>
            </p>
            <button onClick={() => setPlaying(null)} aria-label="Fechar jogo" className="rounded-lg p-1.5 text-white/70 hover:text-white">
              <X size={20} />
            </button>
          </div>
          {playing.url ? (
            <iframe src={playing.url} title={playing.game.name} className="h-full w-full flex-1 border-0" allow="fullscreen; autoplay" />
          ) : (
            <div className="grid flex-1 place-items-center p-6 text-center text-sm text-white/70">
              {playing.error ? playing.error : <Loader2 className="animate-spin" />}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
