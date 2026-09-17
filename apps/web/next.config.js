/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  compress: true,
  reactStrictMode: true,
  eslint: {
    // Lint/format issues are a code-quality concern, not a deploy blocker —
    // TypeScript type-checking below still runs and still fails the build.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
  // NEX_PUBLIC_API_BASE_URL/NEXT_PUBLIC_WS_URL nao sao definidas aqui de
  // proposito: o Next.js grava o valor de `env` no bundle do cliente em BUILD
  // TIME, entao um valor fixo tipo "http://localhost" fica hardcoded para
  // sempre, mesmo em producao — todo fetch/websocket do browser tentava
  // conectar na maquina do proprio usuario em vez do dominio real do site.
  // Sem essas vars, lib/api-client.ts cai no fallback relativo "/api" (mesma
  // origem) e lib/socket.ts cai em window.location.origin — ambos corretos
  // em qualquer ambiente (local, Railway, etc.) sem precisar de configuracao.
};

module.exports = nextConfig;
