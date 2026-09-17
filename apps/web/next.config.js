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
  // Antes estas vars vinham hardcoded para "http://localhost"/"ws://localhost",
  // o que o Next.js grava no bundle do cliente em BUILD TIME — em producao todo
  // fetch/websocket do browser tentava conectar na maquina do proprio usuario
  // em vez do dominio real do site. Com `?? ''` (falsy), lib/api-client.ts cai
  // no fallback relativo "/api" (mesma origem) e lib/socket.ts cai em
  // window.location.origin — ambos corretos em qualquer ambiente — a menos que
  // uma env var real seja configurada explicitamente no Railway.
  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL ?? '',
    NEXT_PUBLIC_WS_URL: process.env.NEXT_PUBLIC_WS_URL ?? '',
  },
};

module.exports = nextConfig;
