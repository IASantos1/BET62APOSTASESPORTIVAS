'use client';

// Esqueleto das páginas de desporto: cabeçalho, menu de desportos à esquerda, conteúdo, boletim à direita.
import * as React from 'react';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { SportsSidebar } from './SportsSidebar';
import { BetSlip } from './BetSlip';

export function SportsShell({ children, asideTop }: { children: React.ReactNode; asideTop?: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <SportsSidebar className="hidden lg:block" />
        <main className="flex-1 min-w-0">
          <div className="mx-auto max-w-[1200px] px-3 sm:px-4 lg:px-6 py-5 space-y-6">{children}</div>
          <Footer />
        </main>
        <BetSlip asideTop={asideTop} />
      </div>
    </div>
  );
}
