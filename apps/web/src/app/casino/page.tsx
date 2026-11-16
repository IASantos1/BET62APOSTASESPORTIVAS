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

// Divisões como no outro projeto (casinolobby.js): categorias e temas, cada uma numa fila própria.
const TABLE = /\b(roulette|roleta|blackjack|black jack|baccarat|bacar[aá]|poker|craps|sic ?bo|dragon ?tiger|teen ?patti|andar ?bahar|hold'?em|casino war|red dog|pai gow)/i;
const CRASH = /\b(aviator|aviatrix|jet ?x\d*|spaceman|crash|zeppelin|space ?xy|limbo|balloon)\b/i;
const INSTANT = /\b(mines?|plinko|dice|keno|hi-?lo|goal|hotline|mini roulette|scratch|coin ?flip|tower|limbo|bingo|penalty)\b/i;
const PROGRESSIVE = /mega moolah|mega fortune|divine fortune|hall of gods|arabian nights|major millions|wowpot|king cashalot|age of the gods|jackpot giant|wheel of wishes|mega vault|superpot|jackpot king|mega jackpot/i;
const JACKPOT = /jackpot|moolah|mega fortune|divine fortune|hall of gods|major millions|wowpot|millionaire|mega joker|cash collect/i;
const has = (re: RegExp) => (g: Game) => re.test(g.name);
const slot = (re: RegExp) => (g: Game) => g.type !== 'live' && !TABLE.test(g.name) && re.test(g.name);
type Cat = [key: string, label: string, test: (g: Game) => boolean, theme?: boolean];
const CATS: Cat[] = [
  ['slots', 'Slots', (g) => g.type !== 'live' && g.type !== 'crash' && !TABLE.test(g.name) && !CRASH.test(g.name) && !INSTANT.test(g.name)],
  ['ao-vivo', 'Casino ao Vivo', (g) => g.type === 'live'],
  ['roleta', 'Roleta', has(/roulette|roleta|roulett/i)],
  ['blackjack', 'Blackjack', has(/black ?jack/i)],
  ['baccarat', 'Baccarat', has(/baccarat|bacar[aá]/i)],
  ['crash', 'Jogos Crash', (g) => g.type === 'crash' || CRASH.test(g.name)],
  ['jackpots', 'Jackpots', (g) => JACKPOT.test(g.name) || PROGRESSIVE.test(g.name)],
  ['megaways', 'Megaways', has(/megaways/i)],
  ['instantaneos', 'Jogos Instantâneos', (g) => g.type !== 'live' && INSTANT.test(g.name)],
  ['mesa', 'Jogos de Mesa', (g) => g.type !== 'live' && TABLE.test(g.name)],
  ['pesca', 'Pesca', slot(/\b(big bass|fish(ing|in|erman)?|angler|carp|trout|bass)\b/i), true],
  ['grecia', 'Grécia Antiga', slot(/olympus|zeus|athena|hades|poseidon|hercules|medusa|spartan?|pegasus|kraken|titans?|apollo|aphrodite|olympian/i), true],
  ['egito', 'Egito Antigo', slot(/egypt|pharaoh|cleopatra|anubis|horus|tomb|pyramid|book of (dead|ra)|sphinx|scarab|\bnile\b|tutankh/i), true],
  ['doces', 'Doces e Fruta', slot(/sweet|candy|sugar|lollipop|cake|fruit|cherr|juicy|jelly/i), true],
  ['asia', 'Fortuna Asiática', slot(/dragon|tiger|koi|panda|cai ?shen|dynasty|samurai|geisha|mahjong|lantern|neko|fortune (ox|rabbit|mouse)/i), true],
];
const TABS: [string, string][] = [['', 'Todos'], ...CATS.filter((c) => !c.at(3)).map(([k, l]) => [k, l] as [string, string])];
const ROW = 18;
const PAGE = 48;
// Primeiro os mais procurados (como no outro projeto), depois por nome.
const HITS = ['fortune tiger', 'aviator', 'gates of olympus', 'sweet bonanza', 'fortune ox', 'mines', 'plinko', 'spaceman', 'fortune rabbit', 'big bass bonanza', 'sugar rush', 'starlight princess'];
const hitRank = (n: string) => {
  const i = HITS.indexOf(n.toLowerCase());
  return i < 0 ? 999 : i;
};

function GameCard({ g, onPlay }: { g: Game; onPlay: (g: Game) => void }) {
  return (
    <button
      onClick={() => onPlay(g)}
      title={g.demo ? `Jogar ${g.name} (demo)` : `${g.name} · só a dinheiro real`}
      className="group block w-full overflow-hidden rounded-xl border border-bet62-border bg-bet62-surface/60 text-left transition hover:border-bet62-primary/60"
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
        {!g.demo && <span className="absolute right-1.5 top-1.5 rounded bg-black/70 px-1.5 text-[9px] font-bold text-[#fff]">REAL</span>}
      </div>
      <div className="p-2">
        <p className="truncate text-xs font-bold">{g.name}</p>
        <p className="truncate text-[10px] text-white/45">{g.provider}</p>
      </div>
    </button>
  );
}

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
      .filter((g) => (!tab || !!CATS.find(([k]) => k === tab)?.[2](g)) && (!provider || g.provider === provider) && (!term || g.name.toLowerCase().includes(term) || g.provider.toLowerCase().includes(term)))
      .sort((a, b) => hitRank(a.name) - hitRank(b.name) || Number(!!b.image) - Number(!!a.image) || a.name.localeCompare(b.name));
  }, [games, tab, provider, q]);

  // Sem filtros: a página dividida em filas (populares, cada categoria e tema, cada fornecedor).
  const lobby = !tab && !provider && !q.trim();
  const rows = React.useMemo(() => {
    if (!games.length) return [];
    const sorted = [...games].sort((a, b) => hitRank(a.name) - hitRank(b.name) || Number(b.demo) - Number(a.demo) || Number(!!b.image) - Number(!!a.image));
    const out: { key: string; title: string; games: Game[]; tab?: string; provider?: string }[] = [];
    out.push({ key: 'populares', title: 'Populares', games: sorted.slice(0, ROW) });
    for (const [k, l, test] of CATS) {
      const list = sorted.filter(test);
      if (list.length >= 4) out.push({ key: k, title: l, games: list.slice(0, ROW), tab: k });
    }
    for (const [p] of providers.slice(0, 15)) {
      const list = sorted.filter((g) => g.provider === p);
      if (list.length >= 4) out.push({ key: `p-${p}`, title: `Jogos da ${p}`, games: list.slice(0, ROW), provider: p });
    }
    return out;
  }, [games, providers]);

  const play = async (game: Game) => {
    if (!game.demo) {
      setPlaying({
        game,
        url: null,
        error: 'Este jogo só funciona a dinheiro real (jogos Premium e mesas ao vivo não têm modo demo no Big Bang). Para jogar a valer é preciso ativar as contas e a carteira do site.',
      });
      return;
    }
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

            {lobby && (
              <div className="space-y-6">
                {rows.map((r) => (
                  <section key={r.key}>
                    <div className="mb-2 flex items-center justify-between">
                      <h2 className="text-base font-black md:text-lg">{r.title}</h2>
                      {(r.tab || r.provider) && (
                        <button
                          onClick={() => (r.tab ? setTab(r.tab) : setProvider(r.provider!))}
                          className="text-xs font-semibold text-white/55 hover:text-white"
                        >
                          Ver todos ›
                        </button>
                      )}
                    </div>
                    <div className="-mx-1 flex snap-x gap-2.5 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                      {r.games.map((g) => (
                        <div key={g.id} className="w-[7.5rem] shrink-0 snap-start md:w-36">
                          <GameCard g={g} onPlay={play} />
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            )}
            {!lobby && <p className="text-xs text-white/45">{list.length} jogos</p>}
            {!lobby && <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8">
              {list.slice(0, shown).map((g) => (
                <GameCard key={g.id} g={g} onPlay={play} />
              ))}
            </div>}
            {!lobby && list.length > shown && (
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
