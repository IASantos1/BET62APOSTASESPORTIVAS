'use client';

// Relógio ao vivo a contar ao segundo (como o do minicampo). A BETBY envia o minuto do jogo
// ("52:31"), se está parado e, por vezes, o momento a que se refere; entre atualizações do feed o
// relógio continua a andar aqui. Sem esse momento, conta a partir de quando este valor chegou.
import * as React from 'react';
import type { BoardEvent } from './board';

let tickers = 0;
const listeners = new Set<() => void>();
let timer: ReturnType<typeof setInterval> | null = null;
function subscribe(fn: () => void) {
  listeners.add(fn);
  tickers += 1;
  timer ??= setInterval(() => listeners.forEach((l) => l()), 1000);
  return () => {
    listeners.delete(fn);
    tickers -= 1;
    if (!tickers && timer) {
      clearInterval(timer);
      timer = null;
    }
  };
}

/** Força um novo desenho a cada segundo (um só intervalo para a página toda). */
function useSecond() {
  const [, set] = React.useState(0);
  React.useEffect(() => subscribe(() => set((n) => n + 1)), []);
}

const seen = new Map<string, number>(); // "id|valor" → quando chegou este valor do relógio

export function liveClockText(e: Pick<BoardEvent, 'id' | 'clock' | 'clockStopped' | 'clockAt'>, now = Date.now()) {
  const clock = e.clock;
  const m = /^(\d{1,3}):(\d{2})$/.exec(clock ?? '');
  if (!clock || !m) return clock || 'Ao vivo';
  if (e.clockStopped) return clock;
  const key = `${e.id}|${clock}`;
  if (!seen.has(key)) {
    seen.set(key, now);
    if (seen.size > 2000) seen.delete(seen.keys().next().value as string);
  }
  const base = e.clockAt ?? seen.get(key)!;
  // Nunca mais de 5 min à frente do último valor (feed parado: o relógio não foge).
  const extra = Math.max(0, Math.min(300, Math.floor((now - base) / 1000)));
  const total = Number(m[1]) * 60 + Number(m[2]) + extra;
  return `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
}

/** O relógio do jogo a contar ao segundo. */
export function useLiveClock(e: Pick<BoardEvent, 'id' | 'clock' | 'clockStopped' | 'clockAt'>) {
  useSecond();
  return liveClockText(e);
}

export function LiveClockText({ e }: { e: Pick<BoardEvent, 'id' | 'clock' | 'clockStopped' | 'clockAt'> }) {
  return <>{useLiveClock(e)}</>;
}
