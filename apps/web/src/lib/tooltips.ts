'use client';

// Explicações dos mercados da BETBY (o "ⓘ"): /translations/market-tooltips/<idioma>.json, com a
// chave "<desporto>-<mercado>" (ex.: "1-1" = futebol, 1X2). Lidas no navegador (a BETBY bloqueia
// servidores), primeiro em português e, se não houver, em inglês. Guardadas 24 h.
import * as React from 'react';
import { BETBY_CONFIG } from './betby';

type Tips = Record<string, string>;
const KEY = 'bet62-market-tooltips-v1';
const LANGS = ['pt-PT', 'pt', 'pt-BR', 'en-GB'];
let memo: Promise<Tips> | null = null;

async function load(): Promise<Tips> {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || 'null') as { at: number; tips: Tips } | null;
    if (saved && Date.now() - saved.at < 24 * 3600_000) return saved.tips;
  } catch {}
  for (const lang of LANGS) {
    try {
      const r = await fetch(`${BETBY_CONFIG.baseUrl}/translations/market-tooltips/${lang}.json`);
      if (!r.ok) continue;
      const tips = (await r.json()) as Tips;
      if (!tips || typeof tips !== 'object' || !Object.keys(tips).length) continue;
      try {
        localStorage.setItem(KEY, JSON.stringify({ at: Date.now(), tips }));
      } catch {}
      return tips;
    } catch {
      // seguinte idioma
    }
  }
  return {};
}

export function useMarketTooltips() {
  const [tips, setTips] = React.useState<Tips>({});
  React.useEffect(() => {
    memo ??= load();
    let alive = true;
    memo.then((t) => alive && setTips(t));
    return () => {
      alive = false;
    };
  }, []);
  return tips;
}
