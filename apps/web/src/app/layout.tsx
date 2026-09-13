import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import Providers from '../providers/Providers';
import '../styles/theme.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space',
  display: 'swap',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '600'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'BET62 Apostas Esportivas | Cassino e Desporto Vivo',
    template: '%s · BET62',
  },
  description:
    'BET62 Apostas Esportivas · Apostas online em desporto, futebol ao vivo, cassino, slots e dealers reais. Bónus 100% até €300 + 250 giros grátis. Licenciado.',
  keywords: [
    'bet62',
    'apostas esportivas',
    'apostas online',
    'futebol',
    'cassino',
    'casino ao vivo',
    'slots',
    'apostas ao vivo',
    'bónus',
    'EUR',
    'MGA',
  ],
  authors: [{ name: 'BET62' }],
  creator: 'BET62',
  publisher: 'BET62',
  applicationName: 'BET62 Apostas',
  manifest: '/manifest.json',
  themeColor: '#0a0e17',
  category: 'entertainment',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_PT',
    url: 'https://bet62.example',
    title: 'BET62 Apostas Esportivas',
    description:
      'Plataforma futurista de apostas desportivas e cassino. Odds competitivas, mercado ao vivo, pagamentos rápidos em EUR.',
    siteName: 'BET62',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'BET62 Logo Neon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BET62 Apostas Esportivas',
    description: 'O futuro das apostas · Futebol · Cassino · Ao Vivo',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'BET62',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#0a0e17',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  viewportFit: 'cover',
  colorScheme: 'dark',
};

const fontVars =
  `${spaceGrotesk.variable} ${jetBrainsMono.variable}`.trim();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt"
      className={`dark ${fontVars}`}
      style={{ colorScheme: 'dark' }}
    >
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `:root{--font-space:${spaceGrotesk.style.fontFamily},ui-sans-serif,system-ui;--font-mono:${jetBrainsMono.style.fontFamily},ui-monospace,SFMono-Regular;}`,
          }}
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body
        className="bg-[var(--bet62-bg)] text-white font-sans antialiased min-h-screen selection:bg-bet62-primary/30 selection:text-white"
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
