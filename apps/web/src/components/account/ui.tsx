'use client';

// Peças partilhadas das secções da conta (o perfil está em app/conta/[[...secao]]/page.tsx).
import * as React from 'react';
import { cn } from '../../lib/utils';

/** Cartão simples das páginas da conta. */
export function Panel({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('space-y-4 rounded-2xl border border-bet62-border bg-bet62-surface/50 p-5', className)}>
      <h2 className="text-lg font-black">{title}</h2>
      {children}
    </div>
  );
}

export function Notice({ msg }: { msg: { ok: boolean; text: string } | null }) {
  if (!msg) return null;
  return <p className={cn('text-sm', msg.ok ? 'text-emerald-400' : 'text-rose-400')} role="status">{msg.text}</p>;
}

export const field = 'w-full rounded-xl border border-bet62-border bg-bet62-bg px-3 py-2.5 text-sm outline-none focus:border-bet62-primary';
