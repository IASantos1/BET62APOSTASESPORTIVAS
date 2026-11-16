import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const ROOT = process.env.LOGO_CACHE_DIR
  || path.join(process.env.DATA_DIR || process.env.RAILWAY_VOLUME_MOUNT_PATH || '/tmp/bet62-data', 'logos');

type CachedImage = { bytes: Uint8Array; contentType: string; cached: boolean };

/**
 * Guarda localmente os ficheiros de media API-Sports. Apenas o domínio oficial de media é aceite.
 * Com um Railway Volume montado em DATA_DIR/RAILWAY_VOLUME_MOUNT_PATH, os ficheiros sobrevivem a deploys.
 */
export async function cachedLogoImage(source: string): Promise<CachedImage | null> {
  let url: URL;
  try {
    url = new URL(source);
  } catch {
    return null;
  }
  if (url.protocol !== 'https:' || url.hostname !== 'media.api-sports.io') return null;

  const ext = path.extname(url.pathname).toLowerCase();
  const safeExt = ['.png', '.jpg', '.jpeg', '.webp', '.svg'].includes(ext) ? ext : '.img';
  const key = createHash('sha256').update(url.toString()).digest('hex');
  const file = path.join(ROOT, `${key}${safeExt}`);

  try {
    const bytes = readFileSync(file);
    return { bytes, contentType: contentType(safeExt), cached: true };
  } catch {
    // Primeiro acesso: descarrega uma vez e grava no armazenamento local.
  }

  const response = await fetch(url, { signal: AbortSignal.timeout(8000) });
  if (!response.ok) throw new Error(`Media API HTTP ${response.status}`);
  const bytes = new Uint8Array(await response.arrayBuffer());
  if (!bytes.length || bytes.length > 2_000_000) throw new Error('Imagem inválida ou demasiado grande');

  mkdirSync(ROOT, { recursive: true });
  writeFileSync(file, bytes);
  return { bytes, contentType: response.headers.get('content-type') || contentType(safeExt), cached: false };
}

function contentType(ext: string) {
  return ext === '.svg' ? 'image/svg+xml'
    : ext === '.jpg' || ext === '.jpeg' ? 'image/jpeg'
      : ext === '.webp' ? 'image/webp'
        : ext === '.png' ? 'image/png' : 'application/octet-stream';
}
