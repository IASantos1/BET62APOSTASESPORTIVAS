import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

// Cache em memória guardada num ficheiro (no volume do Railway, se houver; senão em /tmp), para os
// pedidos às APIs externas (quotas diárias) não se repetirem a cada arranque.
const DIR = process.env.DATA_DIR || process.env.RAILWAY_VOLUME_MOUNT_PATH || '/tmp/bet62-data';

interface Entry<T> {
  at: number;
  value: T;
}

export class FileCache<T> {
  private map = new Map<string, Entry<T>>();
  private file: string;
  private timer: NodeJS.Timeout | null = null;

  constructor(name: string) {
    this.file = path.join(DIR, `${name}.json`);
    try {
      const raw = JSON.parse(readFileSync(this.file, 'utf8')) as Record<string, Entry<T>>;
      for (const [k, v] of Object.entries(raw)) this.map.set(k, v);
    } catch {
      // sem ficheiro ainda
    }
  }

  get(key: string, maxAgeMs: number): T | undefined {
    const e = this.map.get(key);
    return e && Date.now() - e.at < maxAgeMs ? e.value : undefined;
  }

  set(key: string, value: T) {
    this.map.set(key, { at: Date.now(), value });
    if (this.timer) return;
    this.timer = setTimeout(() => {
      this.timer = null;
      try {
        mkdirSync(DIR, { recursive: true });
        writeFileSync(this.file, JSON.stringify(Object.fromEntries(this.map)));
      } catch {
        // disco só de leitura: fica em memória
      }
    }, 2000);
  }

  get size() {
    return this.map.size;
  }
}
