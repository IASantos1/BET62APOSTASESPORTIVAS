import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx}',
    './src/providers/**/*.{js,ts,jsx,tsx}',
    './src/stores/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // "white" segue o tema: branco no escuro, quase preto no claro (text-white/60 etc. continuam a funcionar).
        white: 'rgb(var(--c-fg) / <alpha-value>)',
        // Texto sobre o vermelho da marca: sempre branco.
        onbrand: '#ffffff',
        bet62: {
          primary: '#e11d48',
          'primary-100': '#fee2e2',
          'primary-200': '#fecaca',
          'primary-300': '#fca5a5',
          'primary-400': '#f87171',
          'primary-500': '#e11d48',
          'primary-600': '#be123c',
          'primary-700': '#9f1239',
          secondary: 'rgb(var(--c-fg) / <alpha-value>)',
          'secondary-100': '#ffffff',
          'secondary-200': '#f9fafb',
          'secondary-300': '#f3f4f6',
          'secondary-400': '#e5e7eb',
          'secondary-500': '#d1d5db',
          'secondary-600': '#9ca3af',
          accent: '#9f1239',
          'accent-100': '#fee2e2',
          'accent-200': '#fecdd3',
          'accent-300': '#fda4af',
          'accent-400': '#fb7185',
          'accent-500': '#9f1239',
          'accent-600': '#881337',
          red: '#e11d48',
          'red-100': '#fee2e2',
          'red-500': '#e11d48',
          'red-600': '#be123c',
          'red-700': '#9f1239',
          white: 'rgb(var(--c-fg) / <alpha-value>)',
          'white-100': '#ffffff',
          'white-200': '#f9fafb',
          'white-300': '#f3f4f6',
          bg: 'rgb(var(--c-bg) / <alpha-value>)',
          surface: 'rgb(var(--c-surface) / <alpha-value>)',
          'surface-2': 'rgb(var(--c-surface-2) / <alpha-value>)',
          'surface-3': 'rgb(var(--c-surface-3) / <alpha-value>)',
          glass: 'var(--bet62-glass)',
          border: 'var(--c-border)',
          // Botões de odds (mais visíveis que o vermelho sobre fundo escuro).
          odd: 'rgb(var(--c-odd) / <alpha-value>)',
          'odd-hover': 'rgb(var(--c-odd-hover) / <alpha-value>)',
          'odd-price': 'rgb(var(--c-odd-price) / <alpha-value>)',
          warning: '#fbbf24',
          danger: '#dc2626',
          success: '#16a34a',
        },
      },
      fontFamily: {
        sans: ['var(--font-space)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        'neon-primary': '0 4px 12px rgba(0,0,0,0.22)',
        'neon-primary-lg': '0 8px 24px rgba(0,0,0,0.3)',
        'neon-secondary': '0 4px 12px rgba(0,0,0,0.22)',
        'neon-accent': '0 4px 12px rgba(0,0,0,0.22)',
        'glass': '0 8px 32px rgba(0,0,0,0.35)',
      },
      backgroundImage: {
        'bet62-gradient': 'linear-gradient(135deg, rgba(225,29,72,1) 0%, rgba(190,18,60,1) 100%)',
        'bet62-gradient-soft': 'linear-gradient(135deg, rgba(225,29,72,0.1) 0%, rgba(159,18,57,0.06) 100%)',
        'bet62-grid':
          'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-slow': {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.88', transform: 'scale(1.005)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'score-flash': {
          '0%': { backgroundColor: 'rgba(225,29,72,0.22)' },
          '100%': { backgroundColor: 'transparent' },
        },
      },
      animation: {
        'gradient-x': 'gradient-x 6s ease infinite',
        marquee: 'marquee 30s linear infinite',
        float: 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out both',
        'score-flash': 'score-flash 1.4s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
