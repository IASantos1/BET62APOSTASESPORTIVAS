import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

// Configuração do site escolhida no admin (guardada no servidor, vale para todos os visitantes).
// No Railway, para sobreviver a um novo deploy, monte um volume (RAILWAY_VOLUME_MOUNT_PATH) ou use
// as variáveis de ambiente equivalentes.
export interface SiteConfig {
  /** Endereço com todos os mercados de um jogo, com {base} {brand} {locale} {feed} {id}. */
  eventEndpoint?: string | null;
  /** Campo do evento BETBY com o id do tracker e o fornecedor (statscore, betradar…). */
  trackerField?: { path: string; provider: string } | null;
  /** Endereço das estatísticas de um jogo na BETBY, com os mesmos marcadores. */
  statsEndpoint?: string | null;
  /** Dimensões opcionais do tracker em pixels; null mantém o padrão responsivo. */
  trackerMobileWidthPx?: number | null;
  trackerMobileHeightPx?: number | null;
  trackerDesktopWidthPx?: number | null;
  trackerDesktopHeightPx?: number | null;
  /** Tamanho (zoom) do conteúdo do tracker, em %: 100 = normal. */
  trackerMobileScalePct?: number | null;
  trackerDesktopScalePct?: number | null;
}

const FILE = path.join(process.env.DATA_DIR || process.env.RAILWAY_VOLUME_MOUNT_PATH || '/tmp/bet62-data', 'site-config.json');

export function readConfig(): SiteConfig {
  let saved: SiteConfig = {};
  try {
    saved = JSON.parse(readFileSync(FILE, 'utf8'));
  } catch {
    // ainda sem ficheiro
  }
  return {
    eventEndpoint: saved.eventEndpoint ?? process.env.BETBY_EVENT_ENDPOINT ?? null,
    statsEndpoint: saved.statsEndpoint ?? process.env.BETBY_STATS_ENDPOINT ?? null,
    trackerField:
      saved.trackerField ??
      (process.env.BETBY_TRACKER_FIELD ? { path: process.env.BETBY_TRACKER_FIELD, provider: process.env.BETBY_TRACKER_PROVIDER || 'statscore' } : null),
    trackerMobileWidthPx: saved.trackerMobileWidthPx ?? null,
    trackerMobileHeightPx: saved.trackerMobileHeightPx ?? null,
    trackerDesktopWidthPx: saved.trackerDesktopWidthPx ?? null,
    trackerDesktopHeightPx: saved.trackerDesktopHeightPx ?? null,
    trackerMobileScalePct: saved.trackerMobileScalePct ?? null,
    trackerDesktopScalePct: saved.trackerDesktopScalePct ?? null,
  };
}

export function writeConfig(patch: SiteConfig) {
  const next = { ...readConfig(), ...patch };
  mkdirSync(path.dirname(FILE), { recursive: true });
  writeFileSync(FILE, JSON.stringify(next, null, 2));
  return next;
}
