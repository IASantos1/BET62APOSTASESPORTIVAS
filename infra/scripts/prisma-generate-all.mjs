#!/usr/bin/env node
import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = resolve(__dirname, '..', '..');

const prismaServices = [
  'auth-service',
  'wallet-service',
  'bonus-service',
  'bets-service',
  'casino-service',
  'kyc-service',
  'notifications-service',
  'user-service',
  'admin-service',
];

console.log('');
console.log(`=== BET62 PRISMA GENERATE ALL (${prismaServices.length} servicos) ===`);
console.log(`ROOT: ${ROOT}`);
console.log('');

let ok = 0;
let fail = 0;
const failed = [];

for (const svc of prismaServices) {
  const svcPath = resolve(ROOT, 'services', svc);
  if (!existsSync(svcPath)) {
    console.log(`SKIP   ${svc} - pasta nao encontrada`);
    continue;
  }
  process.stdout.write(`> PRISMA GENERATE  ${svc} ...  `);
  try {
    execSync('npx prisma generate', {
      cwd: svcPath,
      stdio: ['ignore', 'pipe', 'pipe'],
      encoding: 'utf-8',
      timeout: 300_000,
      env: { ...process.env },
    });
    console.log('[OK]');
    ok += 1;
  } catch (err) {
    console.log('[FAIL]');
    const stdout = err.stdout ? String(err.stdout).slice(-400) : '';
    const stderr = err.stderr ? String(err.stderr).slice(-400) : '';
    if (stdout.trim().length > 0) { console.log('  --- stdout tail ---'); console.log(stdout.trim()); }
    if (stderr.trim().length > 0) { console.log('  --- stderr tail ---'); console.log(stderr.trim()); }
    fail += 1;
    failed.push(svc);
  }
}

console.log('');
console.log('============================================');
console.log('  PRISMA GENERATE - RESUMO:');
console.log(`    SUCESSO: ${ok} / ${prismaServices.length}`);
if (fail > 0) {
  console.log(`    FALHAS:  ${fail}`);
  console.log(`       Servicos com erro: ${failed.join(', ')}`);
  console.log('============================================');
  process.exit(1);
} else {
  console.log('============================================');
  console.log('  Todos os clientes Prisma gerados com sucesso.');
  process.exit(0);
}
