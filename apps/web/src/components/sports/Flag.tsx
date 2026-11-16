'use client';

// Bandeira do país (imagem do flagcdn, como no outro projeto: o Windows não desenha emojis de
// bandeiras). Regiões (Europa, Internacional…) e circuitos (ATP, WTA) ficam com um ícone.
import * as React from 'react';
import { cn } from '../../lib/utils';

const FLAG: Record<string, string> = {
  argentina: 'ar', australia: 'au', austria: 'at', belgium: 'be', brazil: 'br', canada: 'ca', chile: 'cl', colombia: 'co',
  'czech republic': 'cz', czechia: 'cz', denmark: 'dk', ecuador: 'ec', england: 'gb-eng', scotland: 'gb-sct', wales: 'gb-wls',
  'northern ireland': 'gb-nir', finland: 'fi', france: 'fr', germany: 'de', greece: 'gr', israel: 'il', italy: 'it', japan: 'jp',
  mexico: 'mx', netherlands: 'nl', norway: 'no', paraguay: 'py', peru: 'pe', poland: 'pl', portugal: 'pt', romania: 'ro',
  serbia: 'rs', 'south korea': 'kr', 'republic of korea': 'kr', spain: 'es', sweden: 'se', switzerland: 'ch', turkey: 'tr',
  turkiye: 'tr', 'united states': 'us', usa: 'us', uruguay: 'uy', ireland: 'ie', croatia: 'hr', ukraine: 'ua', russia: 'ru',
  china: 'cn', 'saudi arabia': 'sa', egypt: 'eg', morocco: 'ma', bolivia: 'bo', venezuela: 've', iceland: 'is', hungary: 'hu',
  slovakia: 'sk', slovenia: 'si', bulgaria: 'bg', cyprus: 'cy', qatar: 'qa', lithuania: 'lt', latvia: 'lv', estonia: 'ee',
  belarus: 'by', kazakhstan: 'kz', georgia: 'ge', 'bosnia and herzegovina': 'ba', 'north macedonia': 'mk', montenegro: 'me',
  albania: 'al', armenia: 'am', azerbaijan: 'az', moldova: 'md', luxembourg: 'lu', malta: 'mt', 'faroe islands': 'fo',
  india: 'in', indonesia: 'id', iran: 'ir', iraq: 'iq', jordan: 'jo', kuwait: 'kw', 'united arab emirates': 'ae', bahrain: 'bh',
  thailand: 'th', vietnam: 'vn', malaysia: 'my', singapore: 'sg', philippines: 'ph', 'hong kong': 'hk', 'chinese taipei': 'tw',
  'new zealand': 'nz', 'south africa': 'za', nigeria: 'ng', ghana: 'gh', algeria: 'dz', tunisia: 'tn', kenya: 'ke',
  'costa rica': 'cr', panama: 'pa', honduras: 'hn', guatemala: 'gt', 'el salvador': 'sv', jamaica: 'jm',
  europe: 'eu',
};
const REGION_ICON: [RegExp, string][] = [
  [/^(world|international|international clubs|internacional)$/i, '🌍'],
  [/america|concacaf|conmebol/i, '🌎'],
  [/asia|afc|oceania/i, '🌏'],
  [/africa|caf/i, '🌍'],
  [/^(atp|wta|challengers?|itf)/i, '🎾'],
];

export function flagCode(country: string) {
  return FLAG[String(country || '').trim().toLowerCase()] ?? null;
}

const broken = new Set<string>();

export function Flag({ country, className }: { country: string; className?: string }) {
  const code = flagCode(country);
  const [failed, setFailed] = React.useState(() => !!code && broken.has(code));
  if (!code || failed) {
    const icon = REGION_ICON.find(([re]) => re.test(country))?.[1] ?? '🏳️';
    return <span className={cn('inline-grid h-3.5 w-5 shrink-0 place-items-center text-[11px] leading-none', className)}>{icon}</span>;
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://flagcdn.com/w40/${code}.png`}
      alt=""
      loading="lazy"
      width={20}
      height={14}
      onError={() => {
        broken.add(code);
        setFailed(true);
      }}
      className={cn('h-3.5 w-5 shrink-0 rounded-[2px] object-cover shadow-[0_0_0_1px_rgba(0,0,0,0.15)]', className)}
    />
  );
}
