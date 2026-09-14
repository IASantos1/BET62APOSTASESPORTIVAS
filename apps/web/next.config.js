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
  env: {
    NEXT_PUBLIC_API_BASE_URL: 'http://localhost',
    NEXT_PUBLIC_WS_URL: 'ws://localhost',
  },
};

module.exports = nextConfig;
