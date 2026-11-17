'use client';

// Modo diagnóstico (Admin → WinHouse): mostra de onde vem cada jogo / mercado / seleção.
// WH = WinHouse (servidor), BB = BETBY (navegador). Desligado, não mostra nada.
import { useDiagnostics } from '../../lib/winhouse-board';
import { cn } from '../../lib/utils';

export function SourceBadge({ source, linked, className }: { source: 'wh' | 'bb' | 'winhouse' | 'betby' | undefined; linked?: boolean; className?: string }) {
  const on = useDiagnostics();
  if (!on) return null;
  const wh = source === 'wh' || source === 'winhouse';
  return (
    <span
      title={wh ? (linked ? 'WinHouse, ligado à BETBY (minicampo)' : 'WinHouse (sem jogo BETBY ligado)') : 'BETBY'}
      className={cn(
        'inline-flex shrink-0 items-center gap-0.5 rounded px-1 py-px font-mono text-[9px] font-black leading-none tracking-wide',
        wh ? 'bg-sky-500/20 text-sky-400 ring-1 ring-sky-500/40' : 'bg-amber-500/20 text-amber-400 ring-1 ring-amber-500/40',
        className,
      )}
    >
      {wh ? 'WH' : 'BB'}
      {wh && linked ? '+BB' : ''}
    </span>
  );
}
