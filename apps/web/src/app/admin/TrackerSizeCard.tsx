'use client';

// Admin: largura, altura e tamanho (zoom) do minicampo, em separado para telemóvel e PC,
// com uma pré-visualização do resultado. Vazio = padrão automático.
import * as React from 'react';
import { CheckCircle2, Monitor, RotateCcw, Save, Smartphone } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { loadSiteConfig, type SiteConfig } from '../../lib/site-config';
import { trackerBox, type TrackerMode } from '../../components/sports/TrackerFrame';

type Key =
  | 'trackerMobileWidthPx'
  | 'trackerMobileHeightPx'
  | 'trackerMobileScalePct'
  | 'trackerDesktopWidthPx'
  | 'trackerDesktopHeightPx'
  | 'trackerDesktopScalePct';

interface Field {
  key: Key;
  label: string;
  unit: 'px' | '%';
  min: number;
  max: number;
  hint: string;
}

const GROUPS: { mode: TrackerMode; title: string; icon: React.ReactNode; note: string; fields: Field[] }[] = [
  {
    mode: 'mobile',
    title: 'Telemóvel / tablet',
    icon: <Smartphone size={16} />,
    note: 'Logo abaixo do menu superior, sobe com a página ao rolar.',
    fields: [
      { key: 'trackerMobileWidthPx', label: 'Largura', unit: 'px', min: 240, max: 1200, hint: 'Vazio: borda a borda (tablet: 560 px)' },
      { key: 'trackerMobileHeightPx', label: 'Altura', unit: 'px', min: 220, max: 1000, hint: 'Vazio: automática (0,7 × largura + 112 px)' },
      { key: 'trackerMobileScalePct', label: 'Tamanho (zoom)', unit: '%', min: 50, max: 200, hint: 'Vazio: 100%. Menos de 100% mostra o widget mais pequeno' },
    ],
  },
  {
    mode: 'desktop',
    title: 'PC',
    icon: <Monitor size={16} />,
    note: 'No topo da coluna do boletim, entre o menu superior e o boletim. A largura é a da coluna.',
    fields: [
      { key: 'trackerDesktopWidthPx', label: 'Largura', unit: 'px', min: 240, max: 900, hint: 'Vazio: 360 px' },
      { key: 'trackerDesktopHeightPx', label: 'Altura', unit: 'px', min: 220, max: 1000, hint: 'Vazio: automática (0,7 × largura + 112 px)' },
      { key: 'trackerDesktopScalePct', label: 'Tamanho (zoom)', unit: '%', min: 50, max: 200, hint: 'Vazio: 100%' },
    ],
  },
];
const ALL = GROUPS.flatMap((g) => g.fields);

type Values = Record<Key, string>;
const toValues = (c: SiteConfig): Values =>
  Object.fromEntries(ALL.map(({ key }) => [key, c[key] == null ? '' : String(c[key])])) as Values;
const num = (v: string) => (v.trim() === '' ? null : Number(v));

/** Desenho do minicampo (placar, campo e barra de ícones) com as dimensões escolhidas, à escala. */
function Preview({ mode, values }: { mode: TrackerMode; values: Values }) {
  const m = mode === 'mobile';
  const width = num(values[m ? 'trackerMobileWidthPx' : 'trackerDesktopWidthPx']);
  const height = num(values[m ? 'trackerMobileHeightPx' : 'trackerDesktopHeightPx']);
  const scale = num(values[m ? 'trackerMobileScalePct' : 'trackerDesktopScalePct']);
  const available = m ? 390 : width ?? 360;
  const { w, h, s } = trackerBox(mode, available, m ? width : null, height, scale);
  // Conteúdo do widget numa janela de w/s: placar e ícones fixos, campo proporcional à largura.
  const head = 62 * s;
  const icons = 48 * s;
  const pitch = 0.7 * w;
  const content = head + pitch + icons;
  const k = 220 / available; // escala do desenho
  return (
    <div className="space-y-2">
      <div className="mx-auto overflow-hidden rounded-xl border border-bet62-border bg-black/30" style={{ width: available * k }}>
        <div className="h-3 bg-bet62-primary" />
        <div className="relative mx-auto overflow-hidden" style={{ width: w * k, height: h * k }}>
          <div className="bg-slate-800" style={{ height: head * k }} />
          <div className="bg-emerald-700" style={{ height: pitch * k }} />
          <div className="bg-slate-700" style={{ height: icons * k }} />
        </div>
        <div className="space-y-1 p-2">
          {[0, 1, 2].map((i) => <div key={i} className="h-2 rounded bg-white/10" />)}
        </div>
      </div>
      <p className="text-center text-[11px] text-white/55">
        {Math.round(w)} × {Math.round(h)} px · {Math.round(s * 100)}%
        {m && ' (ecrã de 390 px)'}
      </p>
      {content > h + 2 && (
        <p className="text-center text-[11px] text-amber-400">
          Altura curta: cerca de {Math.round(content - h)} px do widget (barra de ícones) ficam cortados.
        </p>
      )}
    </div>
  );
}

export function TrackerSizeCard() {
  const [values, setValues] = React.useState<Values>(() => toValues({}));
  const [busy, setBusy] = React.useState(false);
  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
    loadSiteConfig(true).then((config) => setValues(toValues(config)));
  }, []);

  const set = (key: Key, value: string) => setValues((v) => ({ ...v, [key]: value }));
  const reset = (mode: TrackerMode) =>
    setValues((v) => ({ ...v, ...Object.fromEntries(GROUPS.find((g) => g.mode === mode)!.fields.map((f) => [f.key, ''])) }));

  const save = async (event: React.FormEvent) => {
    event.preventDefault();
    setBusy(true);
    setMessage('');
    const patch = Object.fromEntries(ALL.map(({ key }) => [key, num(values[key])])) as Pick<SiteConfig, Key>;
    try {
      const response = await fetch('/api/config', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(patch),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || `HTTP ${response.status}`);
      setValues(toValues(result as SiteConfig));
      await loadSiteConfig(true);
      setMessage('Guardado. Os visitantes veem a mudança em até 1 minuto.');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Não foi possível guardar.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <section className="space-y-4 rounded-2xl border border-bet62-border bg-bet62-surface/50 p-5 text-sm">
      <div>
        <h2 className="text-lg font-black">Minicampo: largura, altura e tamanho</h2>
        <p className="mt-1 text-xs text-white/55">
          Deixe um campo vazio para usar o padrão automático. O tamanho (zoom) aumenta ou diminui o conteúdo do widget dentro da caixa.
        </p>
      </div>
      <form onSubmit={(event) => void save(event)} className="space-y-4">
        <div className="grid gap-4 lg:grid-cols-2">
          {GROUPS.map((g) => (
            <div key={g.mode} className="space-y-3 rounded-xl border border-bet62-border p-4">
              <div className="flex items-center justify-between gap-2">
                <h3 className="flex items-center gap-2 font-bold">{g.icon} {g.title}</h3>
                <button type="button" onClick={() => reset(g.mode)} className="inline-flex items-center gap-1 text-xs text-white/55 hover:text-white">
                  <RotateCcw size={12} /> Repor padrão
                </button>
              </div>
              <p className="text-xs text-white/50">{g.note}</p>
              <div className="grid gap-4 sm:grid-cols-[1fr_220px]">
                <div className="space-y-3">
                  {g.fields.map((f) => (
                    <label key={f.key} className="block space-y-1">
                      <span className="flex items-center justify-between text-xs font-semibold">
                        {f.label}
                        <span className="flex items-center gap-1">
                          <input
                            type="number"
                            min={f.min}
                            max={f.max}
                            step={1}
                            placeholder="auto"
                            value={values[f.key]}
                            onChange={(e) => set(f.key, e.target.value)}
                            className="w-20 rounded-md border border-bet62-border bg-bet62-bg px-2 py-1 text-right font-mono"
                          />
                          <span className="w-4 text-white/50">{f.unit}</span>
                        </span>
                      </span>
                      <input
                        type="range"
                        min={f.min}
                        max={f.max}
                        step={f.unit === '%' ? 5 : 2}
                        value={values[f.key] === '' ? (f.unit === '%' ? 100 : f.min) : Number(values[f.key])}
                        onChange={(e) => set(f.key, e.target.value)}
                        className="w-full accent-bet62-primary"
                        aria-label={`${g.title}: ${f.label}`}
                      />
                      <span className="block text-[11px] text-white/45">{f.hint}</span>
                    </label>
                  ))}
                </div>
                <Preview mode={g.mode} values={values} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button type="submit" size="sm" loading={busy} icon={<Save size={14} />}>Guardar</Button>
          {message && (
            <p className="inline-flex items-center gap-1.5 text-xs text-white/65" role="status">
              {message.startsWith('Guardado') && <CheckCircle2 size={14} className="text-emerald-400" />}
              {message}
            </p>
          )}
        </div>
      </form>
    </section>
  );
}
