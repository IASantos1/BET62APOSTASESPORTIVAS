'use client';

// Configuração escolhida no admin (endereço dos mercados completos, estatísticas, tracker).
import * as React from 'react';
import { BETBY_CONFIG } from './betby';

export interface SiteConfig {
  eventEndpoint?: string | null;
  statsEndpoint?: string | null;
  trackerField?: { path: string; provider: string } | null;
  trackerMobileWidthPx?: number | null;
  trackerMobileHeightPx?: number | null;
  trackerDesktopWidthPx?: number | null;
  trackerDesktopHeightPx?: number | null;
}

let cached: Promise<SiteConfig> | null = null;
export function loadSiteConfig(force = false) {
  if (!cached || force) cached = fetch('/api/config', { cache: 'no-store' }).then((r) => (r.ok ? r.json() : {})).catch(() => ({}));
  return cached;
}

export function useSiteConfig() {
  const [cfg, setCfg] = React.useState<SiteConfig | null>(null);
  React.useEffect(() => {
    loadSiteConfig().then(setCfg);
  }, []);
  return cfg;
}

/** Preenche um modelo de endereço: {base} {brand} {locale} {feed} {id}. */
export function fillTemplate(tpl: string, id: string, feed: 'live' | 'prematch') {
  return tpl
    .replace(/\{base\}/g, BETBY_CONFIG.baseUrl)
    .replace(/\{brand\}/g, BETBY_CONFIG.brandId)
    .replace(/\{locale\}/g, BETBY_CONFIG.locale)
    .replace(/\{feed\}/g, feed)
    .replace(/\{id\}/g, id);
}
