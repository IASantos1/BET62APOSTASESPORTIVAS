import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { rm } from 'node:fs/promises';
import { build as esbuild } from 'esbuild';
import esbuildPluginPino from 'esbuild-plugin-pino';

// O plugin esbuild-plugin-pino usa `require` para resolver dependencias.
globalThis.require = createRequire(import.meta.url);

const serviceDir = path.dirname(fileURLToPath(import.meta.url));

async function buildAll() {
  const distDir = path.resolve(serviceDir, 'dist');
  await rm(distDir, { recursive: true, force: true });

  await esbuild({
    entryPoints: { index: path.resolve(serviceDir, 'src/api/index.ts') },
    platform: 'node',
    bundle: true,
    format: 'cjs',
    outdir: distDir,
    logLevel: 'info',
    sourcemap: 'linked',
    // Pacotes com binarios nativos ou que exigem resolucao dinamica de arquivo
    // nao podem ser empacotados pelo esbuild.
    external: [
      '*.node',
      'bcrypt',
      'argon2',
      'pg-native',
      'nodemailer',
    ],
    plugins: [
      // pino usa worker threads para transports (ex: pino-pretty); empacotar
      // ingenuamente quebra isso, entao usamos o plugin dedicado.
      esbuildPluginPino({ transports: ['pino-pretty'] }),
    ],
  });
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
