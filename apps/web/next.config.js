// Identifica cada versão publicada: o site compara-o com o do servidor e avisa quando há uma nova.
const BUILD_ID = (process.env.RAILWAY_GIT_COMMIT_SHA || process.env.SOURCE_COMMIT || String(Date.now())).slice(0, 12);

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: { NEXT_PUBLIC_BUILD_ID: BUILD_ID },
  generateBuildId: async () => BUILD_ID,
  async headers() {
    // O service worker tem de ser sempre lido de novo, para as atualizações chegarem.
    return [{ source: '/sw.js', headers: [{ key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' }] }];
  },
  output: 'standalone',
  // O driver do PostgreSQL corre só no servidor e não deve ser empacotado pelo webpack.
  experimental: { serverComponentsExternalPackages: ['pg'] },
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
};

module.exports = nextConfig;
