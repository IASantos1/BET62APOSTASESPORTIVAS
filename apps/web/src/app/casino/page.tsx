'use client';

import * as React from 'react';
import Link from 'next/link';
import { Dices, Flame, Gift, Heart, Loader2, Search, Sparkles, Trophy, X } from 'lucide-react';
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

const POPULAR = [
  'fortune tiger', 'aviator', 'gates of olympus', 'sweet bonanza', 'fortune ox',
  'mines', 'plinko', 'spaceman', 'fortune rabbit', 'big bass bonanza',
  'sugar rush', 'starlight princess',
];
const JACKPOT = /jackpot|moolah|mega fortune|divine fortune|hall of gods|major millions|wowpot|millionaire|mega joker|cash collect/i;
const CATEGORIES = [
  { id: 'all', label: '🎮 Todos' },
  { id: 'slots', label: '🎰 Slots' },
  { id: 'jackpot', label: '🏆 Jackpot' },
  { id: 'roulette', label: '🎡 Roleta' },
  { id: 'blackjack', label: '🃏 Blackjack' },
  { id: 'poker', label: '♠ Poker' },
  { id: 'live', label: '🔴 Live' },
  { id: 'megaways', label: '⚡ Megaways' },
  { id: 'new', label: '✨ Novos' },
  { id: 'popular', label: '🔥 Popular' },
  { id: 'favorites', label: '❤️ Favoritos' },
];
const hitRank = (name: string) => {
  const index = POPULAR.indexOf(name.toLowerCase());
  return index < 0 ? 999 : index;
};

function matchesCategory(game: Game, category: string, favorites: Set<number>) {
  const name = game.name.toLowerCase();
  switch (category) {
    case 'all': return true;
    case 'favorites': return favorites.has(game.id);
    case 'slots': return game.type !== 'live' && game.type !== 'crash' && !/roulette|roleta|black ?jack|baccarat|poker|craps/i.test(name) && !/aviator|aviatrix|jet ?x|spaceman|crash/i.test(name);
    case 'jackpot': return JACKPOT.test(name);
    case 'roulette': return /roulette|roleta/i.test(name);
    case 'blackjack': return /black ?jack/i.test(name);
    case 'poker': return /poker|hold'?em/i.test(name);
    case 'live': return game.type === 'live' || game.category.toLowerCase() === 'ao vivo';
    case 'megaways': return /megaways/i.test(name);
    case 'new': return /novo|new/i.test(game.category);
    case 'popular': return hitRank(game.name) < POPULAR.length;
    default: return false;
  }
}

function GameCard({ game, favorite, onFavorite, onPlay }: {
  game: Game; favorite: boolean; onFavorite: () => void; onPlay: () => void;
}) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-bet62-border bg-bet62-surface/70 transition hover:-translate-y-0.5 hover:border-bet62-primary/60">
      <button
        type="button"
        onClick={onFavorite}
        aria-label={favorite ? `Remover ${game.name} dos favoritos` : `Adicionar ${game.name} aos favoritos`}
        aria-pressed={favorite}
        className={cn('absolute right-2 top-2 z-10 grid h-8 w-8 place-items-center rounded-full bg-black/60 transition', favorite ? 'text-[#ff4d78]' : 'text-white hover:text-[#ff4d78]')}
      >
        <Heart size={16} fill={favorite ? 'currentColor' : 'none'} />
      </button>
      <button type="button" onClick={onPlay} className="block w-full text-left" title={game.demo ? `Jogar ${game.name} em modo demo` : game.name}>
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-bet62-surface-2 to-bet62-surface-3 sm:aspect-[4/3]">
          {game.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={game.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105" />
          ) : (
            <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-[#6d28d9] via-[#861da8] to-[#101827] p-3 text-center text-sm font-black text-white">{game.name}</div>
          )}
          <span className="absolute inset-0 grid place-items-center bg-black/0 text-white opacity-0 transition group-hover:bg-black/45 group-hover:opacity-100"><Dices size={34} /></span>
          {game.type === 'live' && <span className="absolute left-2 top-2 rounded bg-[#dc2626] px-2 py-1 text-[9px] font-black text-white">AO VIVO</span>}
        </div>
        <div className="bg-bet62-surface-2 p-2.5">
          <p className="truncate text-xs font-bold text-white">{game.name}</p>
          <p className="mt-1 truncate text-[10px] text-white/50">{game.provider}</p>
        </div>
      </button>
    </article>
  );
}

export default function CasinoPage() {
  const [games, setGames] = React.useState<Game[]>([]);
  const [state, setState] = React.useState<'loading' | 'ok' | 'off'>('loading');
  const [error, setError] = React.useState<string | null>(null);
  const [category, setCategory] = React.useState('all');
  const [provider, setProvider] = React.useState('');
  const [query, setQuery] = React.useState('');
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [favorites, setFavorites] = React.useState<Set<number>>(new Set());
  const [playing, setPlaying] = React.useState<{ game: Game; url: string | null; error?: string } | null>(null);

  React.useEffect(() => {
    fetch('/api/casino/games')
      .then((response) => response.json())
      .then((data: { enabled: boolean; games: Game[]; error?: string }) => {
        setGames(data.games || []);
        setError(data.error ?? null);
        setState(data.enabled && data.games?.length ? 'ok' : 'off');
      })
      .catch((cause) => {
        setError(String(cause));
        setState('off');
      });
  }, []);

  const providers = React.useMemo(() => [...new Set(games.map((game) => game.provider))].sort(), [games]);
  const filtered = React.useMemo(() => {
    const term = query.trim().toLocaleLowerCase();
    return games
      .filter((game) => matchesCategory(game, category, favorites))
      .filter((game) => !provider || game.provider === provider)
      .filter((game) => !term || game.name.toLocaleLowerCase().includes(term) || game.provider.toLocaleLowerCase().includes(term))
      .sort((a, b) => hitRank(a.name) - hitRank(b.name) || Number(!!b.image) - Number(!!a.image) || a.name.localeCompare(b.name));
  }, [games, category, favorites, provider, query]);

  const play = async (game: Game) => {
    if (!game.demo) {
      setPlaying({ game, url: null, error: 'Este jogo não tem modo demo disponível.' });
      return;
    }
    setPlaying({ game, url: null });
    try {
      const response = await fetch('/api/casino/launch', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ gameId: game.id }),
      });
      const data = (await response.json()) as { url?: string; error?: string };
      setPlaying(data.url ? { game, url: data.url } : { game, url: null, error: data.error || 'Não foi possível abrir o jogo.' });
    } catch (cause) {
      setPlaying({ game, url: null, error: String(cause) });
    }
  };

  const toggleFavorite = (id: number) => {
    setFavorites((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };
  const filteredView = category !== 'all' || Boolean(query.trim()) || Boolean(provider);
  const featured = filtered.slice(0, 9);
  const popular = games
    .filter((game) => matchesCategory(game, 'popular', favorites))
    .sort((a, b) => hitRank(a.name) - hitRank(b.name))
    .slice(0, 9);

  return (
    <div className="min-h-screen bg-bet62-bg">
      <Header />
      <main className="mx-auto max-w-[1600px] space-y-5 px-3 py-4 pb-24 sm:px-5 lg:px-8">
        <section className="grid grid-cols-3 gap-2 sm:gap-3">
          <div className="flex min-h-24 flex-col justify-between rounded-xl bg-gradient-to-br from-[#6d28d9] to-[#a855f7] p-3 sm:min-h-28 sm:p-4">
            <div className="text-xs font-black sm:text-sm">100 FREE SPINS</div><p className="text-[10px] opacity-90">Oferta especial para novos jogadores</p><span className="self-end text-xl">🎁</span>
          </div>
          <div className="flex min-h-24 flex-col justify-between rounded-xl bg-gradient-to-br from-[#a16207] to-[#facc15] p-3 text-[#251600] sm:min-h-28 sm:p-4">
            <div className="text-xs font-black sm:text-sm">BÓNUS SEMANAL</div><p className="text-[10px] opacity-90">Surpresas todas as semanas</p><span className="self-end text-xl">🏆</span>
          </div>
          <div className="flex min-h-24 flex-col justify-between rounded-xl bg-gradient-to-br from-[#047857] to-[#22c55e] p-3 sm:min-h-28 sm:p-4">
            <div className="text-xs font-black sm:text-sm">GIRO DA SORTE</div><p className="text-[10px] opacity-90">Descobre prémios especiais</p><span className="self-end text-xl">🎡</span>
          </div>
        </section>

        <section className="hero-glow relative overflow-hidden rounded-2xl border border-bet62-border p-5 sm:min-h-52 sm:p-8">
          <div className="relative z-10 max-w-[76%] sm:max-w-[65%]">
            <span className="inline-flex rounded bg-[#facc15] px-2 py-1 text-[9px] font-black text-[#171000]">🔥 OFERTA ESPECIAL</span>
            <h1 className="mt-2 text-2xl font-black leading-tight sm:text-4xl">O TEU CASINO<br />COMEÇA AQUI</h1>
            <p className="my-2 text-xs text-white/70 sm:text-sm">Descobre jogos, novidades e diversão.</p>
            <button onClick={() => document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' })} className="rounded-lg bg-[#22c55e] px-4 py-2.5 text-[10px] font-black text-[#05200f]">EXPLORAR JOGOS</button>
          </div>
          <div className="absolute bottom-2 right-3 text-6xl drop-shadow-lg sm:bottom-3 sm:right-8 sm:text-8xl">🎰</div>
        </section>

        <section className="rounded-2xl border border-[#66501c] bg-gradient-to-br from-[#332006] to-[#16120a] px-4 py-3 text-center">
          <h2 className="mb-1 text-xs font-black tracking-widest text-[#facc15]">🏆 JACKPOT DA SORTE 🏆</h2>
          <div className="text-2xl font-black tracking-wide text-[#ffe58a] sm:text-3xl">€128.450,72</div>
          <p className="mt-1 text-[10px] text-[#bca76a]">Prémio ilustrativo</p>
        </section>

        <nav aria-label="Categorias de casino" className="-mx-3 flex gap-2 overflow-x-auto px-3 pb-1 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
          {CATEGORIES.map((item) => (
            <button key={item.id} onClick={() => setCategory(item.id)} className={cn(
              'shrink-0 rounded-lg border px-3 py-2.5 text-[10px] font-bold transition sm:text-xs',
              category === item.id ? 'border-bet62-primary bg-bet62-primary text-onbrand' : 'border-bet62-border bg-bet62-surface text-white/65 hover:text-white',
            )}>{item.label}</button>
          ))}
        </nav>

        {state === 'loading' && <p className="flex items-center gap-2 text-sm text-white/60"><Loader2 size={16} className="animate-spin" /> A carregar jogos…</p>}
        {state === 'off' && <div className="rounded-xl border border-bet62-border bg-bet62-surface p-5 text-sm text-white/70">Cassino indisponível de momento.{error && <span className="mt-1 block text-xs text-white/40">{error}</span>}</div>}

        {state === 'ok' && (
          <>
            <div className="flex items-center gap-2">
              <button onClick={() => { setSearchOpen((open) => !open); if (searchOpen) setQuery(''); }} aria-label="Pesquisar jogos" className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-bet62-surface text-white"><Search size={17} /></button>
              {searchOpen && <input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Pesquisar jogos ou provedores..." className="h-9 min-w-0 flex-1 rounded-lg border border-bet62-border bg-bet62-surface px-3 text-sm text-white outline-none focus:border-bet62-primary" />}
              <select aria-label="Filtrar por provedor" value={provider} onChange={(event) => setProvider(event.target.value)} className="h-9 min-w-0 max-w-[55%] flex-1 rounded-lg border border-bet62-border bg-bet62-surface px-2 text-xs text-white sm:max-w-xs">
                <option value="">Todos os provedores</option>{providers.map((name) => <option key={name} value={name}>{name}</option>)}
              </select>
              {filteredView && <button onClick={() => { setCategory('all'); setProvider(''); setQuery(''); }} className="text-xs text-bet62-primary">Limpar</button>}
            </div>

            {filteredView ? (
              <section id="featured" className="space-y-3">
                <div className="flex items-center justify-between"><h2 className="text-base font-black">{category === 'favorites' ? '❤️ Favoritos' : category === 'all' ? 'Resultados' : CATEGORIES.find((item) => item.id === category)?.label}</h2><span className="text-xs text-white/45">{filtered.length} jogos</span></div>
                {filtered.length ? <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3 md:grid-cols-6 xl:grid-cols-8">{filtered.map((game) => <GameCard key={game.id} game={game} favorite={favorites.has(game.id)} onFavorite={() => toggleFavorite(game.id)} onPlay={() => void play(game)} />)}</div> : <p className="rounded-xl border border-bet62-border bg-bet62-surface p-6 text-center text-sm text-white/55">Não foram encontrados jogos nesta categoria.</p>}
              </section>
            ) : (
              <>
                <section id="featured" className="space-y-3">
                  <div className="flex items-center justify-between"><h2 className="flex items-center gap-2 text-base font-black sm:text-lg"><Flame size={18} className="text-[#facc15]" /> Jogos em Destaque</h2><button onClick={() => setCategory('all')} className="text-xs font-bold text-bet62-primary">Ver todos ›</button></div>
                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3 md:grid-cols-6 xl:grid-cols-8">{featured.map((game) => <GameCard key={game.id} game={game} favorite={favorites.has(game.id)} onFavorite={() => toggleFavorite(game.id)} onPlay={() => void play(game)} />)}</div>
                </section>

                <section className="flex items-center justify-between gap-4 rounded-2xl border border-[#5b21b6] bg-gradient-to-r from-[#172033] via-[#3b0764] to-[#111827] p-4 sm:p-5">
                  <div><h2 className="text-base font-black sm:text-lg">🔴 CASINO LIVE</h2><p className="mt-1 text-[11px] text-[#c4b5fd]">Experiência de casino ao vivo</p><button onClick={() => setCategory('live')} className="mt-3 rounded-lg bg-[#a855f7] px-3 py-2 text-[10px] font-black text-white">EXPLORAR LIVE</button></div><Dices size={38} className="shrink-0 text-[#c4b5fd]" />
                </section>

                {popular.length > 0 && <section className="space-y-3"><div className="flex items-center justify-between"><h2 className="flex items-center gap-2 text-base font-black sm:text-lg"><Sparkles size={18} className="text-[#facc15]" /> Jogos Populares</h2><button onClick={() => setCategory('popular')} className="text-xs font-bold text-bet62-primary">Ver todos ›</button></div><div className="grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3 md:grid-cols-6 xl:grid-cols-8">{popular.map((game) => <GameCard key={game.id} game={game} favorite={favorites.has(game.id)} onFavorite={() => toggleFavorite(game.id)} onPlay={() => void play(game)} />)}</div></section>}

                <section className="space-y-3"><h2 className="flex items-center gap-2 text-base font-black"><Dices size={18} className="text-bet62-primary" /> Provedores</h2><div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">{providers.map((name) => <button key={name} onClick={() => setProvider(name)} className="shrink-0 rounded-lg border border-bet62-border bg-bet62-surface px-3 py-2.5 text-[10px] font-black text-white/70 hover:border-bet62-primary/50">{name}</button>)}</div></section>
                <section className="rounded-2xl border border-[#166534] bg-gradient-to-br from-[#064e3b] via-[#14532d] to-[#0f172a] p-5 text-center"><h2 className="text-lg font-black text-[#86efac]">🎁 OFERTAS EXCLUSIVAS</h2><p className="my-2 text-xs text-[#bbf7d0]">Descobre as novidades e promoções disponíveis.</p><Link href="/promocoes" className="inline-flex rounded-lg bg-[#22c55e] px-4 py-2.5 text-[10px] font-black text-[#05200f]">VER PROMOÇÕES</Link></section>
                <p className="text-center text-xs text-white/45">18+ · Joga com responsabilidade · Jogos apresentados em modo de demonstração.</p>
              </>
            )}
          </>
        )}
      </main>
      <Footer />
      <nav aria-label="Navegação rápida" className="fixed inset-x-0 bottom-0 z-30 grid h-16 grid-cols-5 border-t border-bet62-border bg-bet62-bg/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-lg lg:hidden">
        <Link href="/" className="flex flex-col items-center justify-center gap-1 text-[9px] text-white/55"><span className="text-lg">⌂</span>Início</Link>
        <button onClick={() => document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' })} className="flex flex-col items-center justify-center gap-1 text-[9px] text-bet62-primary"><Dices size={18} />Jogos</button>
        <Link href="/promocoes" className="flex flex-col items-center justify-center gap-1 text-[9px] text-white/55"><Gift size={18} />Promoções</Link>
        <button onClick={() => setCategory('favorites')} className="flex flex-col items-center justify-center gap-1 text-[9px] text-white/55"><Heart size={18} />Favoritos</button>
        <Link href="/conta" className="flex flex-col items-center justify-center gap-1 text-[9px] text-white/55"><Trophy size={18} />Conta</Link>
      </nav>

      {playing && (
        <div className="fixed inset-0 z-[90] flex flex-col bg-black">
          <div className="flex items-center justify-between gap-2 bg-bet62-bg px-3 py-2"><p className="truncate text-sm font-bold">{playing.game.name} <span className="font-normal text-white/50">· demo</span></p><button onClick={() => setPlaying(null)} aria-label="Fechar jogo" className="rounded-lg p-1.5 text-white/70 hover:text-white"><X size={20} /></button></div>
          {playing.url ? <iframe src={playing.url} title={playing.game.name} className="h-full w-full flex-1 border-0" allow="fullscreen; autoplay" /> : <div className="grid flex-1 place-items-center p-6 text-center text-sm text-white/70">{playing.error || <Loader2 className="animate-spin" />}</div>}
        </div>
      )}
    </div>
  );
}
