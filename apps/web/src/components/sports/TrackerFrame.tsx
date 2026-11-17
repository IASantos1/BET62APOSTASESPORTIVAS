'use client';

// Minicampo (iframe do tracker BETBY/Statscore) com largura, altura e tamanho (zoom) configuráveis no admin.
// O placar (~62px) e a barra de ícones (~48px) do widget têm altura fixa; só o campo cresce com a
// largura (~0.7 × largura). Por isso a altura automática é 0.7 × largura + 112px (telemóvel e PC).
// O zoom desenha o widget numa janela maior/menor e escala-o, para caber o mesmo conteúdo noutro tamanho.
import * as React from 'react';

export type TrackerMode = 'mobile' | 'desktop';

/** Dimensões finais do minicampo para um espaço disponível de `available` px. */
export function trackerBox(mode: TrackerMode, available: number, widthPx?: number | null, heightPx?: number | null, scalePct?: number | null) {
  const s = Math.min(2, Math.max(0.5, (scalePct ?? 100) / 100));
  const auto = mode === 'mobile' && available >= 640 ? 560 : available;
  const w = Math.max(0, Math.min(widthPx ?? auto, available));
  const h = heightPx ?? Math.round(0.7 * w + 112 * s);
  return { w, h, s };
}

export function TrackerFrame({
  src,
  title,
  mode,
  widthPx,
  heightPx,
  scalePct,
}: {
  src: string;
  title: string;
  mode: TrackerMode;
  widthPx?: number | null;
  heightPx?: number | null;
  scalePct?: number | null;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [available, setAvailable] = React.useState(0);
  React.useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setAvailable(Math.round(el.getBoundingClientRect().width));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const { w, h, s } = trackerBox(mode, available, widthPx, heightPx, scalePct);
  return (
    <div ref={ref} className="w-full">
      {available > 0 && (
        <div className="relative mx-auto overflow-hidden" style={{ width: w, height: h }}>
          <iframe
            src={src}
            title={title}
            scrolling="no"
            allow="fullscreen"
            className="block border-0"
            style={{ width: w / s, height: h / s, transform: s === 1 ? undefined : `scale(${s})`, transformOrigin: '0 0' }}
          />
        </div>
      )}
    </div>
  );
}
