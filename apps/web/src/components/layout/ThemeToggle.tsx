'use client';

// Modo claro / escuro: a classe "light" no <html>, guardada no navegador (o script do layout
// aplica-a antes do primeiro desenho, para não piscar).
import * as React from 'react';
import { Moon, Sun } from 'lucide-react';

import { THEME_KEY } from '../../lib/theme';

export function ThemeToggle() {
  const [light, setLight] = React.useState(false);
  React.useEffect(() => setLight(document.documentElement.classList.contains('light')), []);
  const flip = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle('light', next);
    document.documentElement.classList.toggle('dark', !next);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', next ? '#f1f4f8' : '#0a0e17');
    try {
      localStorage.setItem(THEME_KEY, next ? 'light' : 'dark');
    } catch {}
  };
  return (
    <button
      type="button"
      onClick={flip}
      aria-label={light ? 'Mudar para modo escuro' : 'Mudar para modo claro'}
      title={light ? 'Modo escuro' : 'Modo claro'}
      className="grid h-9 w-9 place-items-center rounded-xl border border-bet62-border text-white/70 hover:text-white"
    >
      {light ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}
