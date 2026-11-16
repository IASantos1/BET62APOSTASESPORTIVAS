'use client';

// Topo da página inicial (como no outro projeto): os jogos de casino mais procurados em ícones
// redondos, numa fila que desliza para o lado. Tocar abre o jogo no Casino.
import * as React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Game {
  id: number;
  name: string;
  image: string | null;
  demo: boolean;
}
const HITS = ['fortune tiger', 'aviator', 'gates of olympus', 'sweet bonanza', 'fortune ox', 'mines', 'plinko', 'spaceman', 'fortune rabbit', 'big bass bonanza', 'sugar rush', 'starlight princess', 'wolf gold', 'book of dead', 'crazy time'];
const rank = (n: string) => {
  const i = HITS.indexOf(n.toLowerCase());
  return i < 0 ? 999 : i;
};

let cache: Promise<Game[]> | null = null;
const load = () =>
  (cache ??= fetch('/api/casino/games')
    .then((r) => r.json())
    .then((d: { games?: Game[] }) => d.games ?? [])
    .catch(() => []));

export function CasinoBubbles() {
  const [games, setGames] = React.useState<Game[]>([]);
  React.useEffect(() => {
    load().then((list) => {
      const seen = new Set<string>();
      const top = [...list]
        .filter((g) => g.image)
        .sort((a, b) => rank(a.name) - rank(b.name) || Number(b.demo) - Number(a.demo))
        .filter((g) => {
          const k = g.name.toLowerCase();
          if (seen.has(k)) return false;
          seen.add(k);
          return true;
        })
        .slice(0, 15);
      setGames(top);
    });
  }, []);
  if (!games.length) return null;
  return (
    <section aria-label="Jogos de casino" className="-mx-1 flex gap-3 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {games.map((g) => (
        <Link key={g.id} href={`/casino?game=${g.id}`} className="flex w-[4.5rem] shrink-0 flex-col items-center gap-1.5 text-center">
          <span className="block h-16 w-16 overflow-hidden rounded-full bg-gradient-to-br from-bet62-primary to-bet62-accent p-[2px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={g.image!} alt="" loading="lazy" decoding="async" className="h-full w-full rounded-full object-cover" />
          </span>
          <small className="line-clamp-2 text-[10px] leading-tight text-white/70">{g.name.replace(/[™®©]/g, '').trim()}</small>
        </Link>
      ))}
      <Link href="/casino" className="flex w-[4.5rem] shrink-0 flex-col items-center gap-1.5 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full border border-bet62-border bg-bet62-surface">
          <ChevronRight size={22} />
        </span>
        <small className="text-[10px] text-white/70">Ver todos</small>
      </Link>
    </section>
  );
}
