'use client';

import * as React from 'react';
import { CheckCircle2, Save } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { loadSiteConfig, type SiteConfig } from '../../lib/site-config';

type DimensionKey =
  | 'trackerMobileWidthPx'
  | 'trackerMobileHeightPx'
  | 'trackerDesktopWidthPx'
  | 'trackerDesktopHeightPx';

const fields: { key: DimensionKey; label: string; min: number; max: number; fallback: string }[] = [
  { key: 'trackerMobileWidthPx', label: 'Largura mobile', min: 240, max: 1200, fallback: 'Automática (100%)' },
  { key: 'trackerMobileHeightPx', label: 'Altura mobile', min: 220, max: 1000, fallback: 'Responsiva' },
  { key: 'trackerDesktopWidthPx', label: 'Largura desktop', min: 240, max: 900, fallback: '320 px' },
  { key: 'trackerDesktopHeightPx', label: 'Altura desktop', min: 220, max: 1000, fallback: '420 px' },
];

type Values = Record<DimensionKey, string>;
const emptyValues = (): Values => ({
  trackerMobileWidthPx: '',
  trackerMobileHeightPx: '',
  trackerDesktopWidthPx: '',
  trackerDesktopHeightPx: '',
});

function toValues(config: SiteConfig): Values {
  return Object.fromEntries(fields.map(({ key }) => [key, config[key] == null ? '' : String(config[key])])) as Values;
}

export function TrackerSizeCard() {
  const [values, setValues] = React.useState<Values>(emptyValues);
  const [busy, setBusy] = React.useState(false);
  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
    loadSiteConfig(true).then((config) => setValues(toValues(config)));
  }, []);

  const save = async (event: React.FormEvent) => {
    event.preventDefault();
    setBusy(true);
    setMessage('');
    const patch = Object.fromEntries(fields.map(({ key }) => {
      const raw = values[key].trim();
      return [key, raw === '' ? null : Number(raw)];
    })) as Pick<SiteConfig, DimensionKey>;

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
      setMessage('Dimensões guardadas.');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Não foi possível guardar.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <section className="rounded-2xl border border-bet62-border bg-bet62-surface/50 p-5 space-y-4 text-sm">
      <div>
        <h2 className="text-lg font-black">Dimensões do minicampo</h2>
        <p className="mt-1 text-xs text-white/55">Valores em píxeis. Deixe vazio para usar o padrão indicado.</p>
      </div>
      <form onSubmit={(event) => void save(event)} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          {fields.map(({ key, label, min, max, fallback }) => (
            <label key={key} className="space-y-1.5">
              <span className="font-semibold">{label}</span>
              <Input
                type="number"
                min={min}
                max={max}
                step={1}
                placeholder={fallback}
                value={values[key]}
                onChange={(event) => setValues((current) => ({ ...current, [key]: event.target.value }))}
              />
              <span className="block text-xs text-white/45">{min}–{max} px</span>
            </label>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button type="submit" size="sm" loading={busy} icon={<Save size={14} />}>Guardar dimensões</Button>
          {message && (
            <p className="inline-flex items-center gap-1.5 text-xs text-white/65" role="status">
              {message === 'Dimensões guardadas.' && <CheckCircle2 size={14} className="text-emerald-400" />}
              {message}
            </p>
          )}
        </div>
      </form>
    </section>
  );
}
