// Wrapper de dev multiplataforma: builda e roda em dois passos (spawnSync)
// em vez de "esbuild.config.mjs && node dist/index.js" via shell, evitando
// sintaxe POSIX-only e overhead extra de subprocessos do gerenciador de pacotes.
const { spawnSync } = require('node:child_process');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

function run(command, args) {
  const result = spawnSync(command, args, { stdio: 'inherit', shell: process.platform === 'win32' });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

run('node', ['./esbuild.config.mjs']);
run('node', ['--enable-source-maps', './dist/index.js']);
