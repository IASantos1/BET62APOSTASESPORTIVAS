'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MotionConfig } from 'framer-motion';
import { useEffect, useState, type ReactNode } from 'react';
import { applyAutoTheme } from '../lib/theme';
import { BoardProvider } from '../lib/board';
import { PwaManager } from '../components/pwa/PwaManager';
import { MobileNav } from '../components/layout/MobileNav';

/** Tema automático: verifica a hora a cada minuto (às 07:00 passa a claro, às 20:00 a escuro). */
function AutoTheme() {
  useEffect(() => {
    applyAutoTheme();
    const t = setInterval(applyAutoTheme, 60_000);
    const vis = () => document.visibilityState === 'visible' && applyAutoTheme();
    document.addEventListener('visibilitychange', vis);
    return () => {
      clearInterval(t);
      document.removeEventListener('visibilitychange', vis);
    };
  }, []);
  return null;
}

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 30 * 1000,
            refetchOnWindowFocus: false,
            retry: 1,
          },
          mutations: {
            retry: 1,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <MotionConfig
        reducedMotion="user"
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.25 }}
      >
        <BoardProvider>
          {children}
          <MobileNav />
        </BoardProvider>
        <PwaManager />
        <AutoTheme />
      </MotionConfig>
    </QueryClientProvider>
  );
}
