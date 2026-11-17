'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Sessão do jogador. A sessão verdadeira é um cookie httpOnly do servidor (/api/auth/*);
// aqui só guardamos uma cópia dos dados para o cabeçalho aparecer logo, e confirmamos com
// /api/auth/me ao abrir o site.
export interface AuthUser {
  id: string;
  email: string;
  roles: string[];
  firstName?: string;
  lastName?: string;
  birthdate?: string;
  phone?: string | null;
  nif?: string | null;
  country?: string;
  balance?: number;
  excludedUntil?: string | null;
  createdAt?: string;
  memberId?: string;
  prefs?: Record<string, boolean>;
  iban?: string | null;
  ibanName?: string | null;
  twoFactorEnabled: boolean;
}

export interface RegisterPayload {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  birthdate: string;
  nif?: string;
  phone?: string;
  country?: string;
}

interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  /** false quando o servidor não tem base de dados (contas indisponíveis). */
  accountsAvailable: boolean;

  setUser: (user: AuthUser | null) => void;
  refresh: () => Promise<AuthUser | null>;
  login: (email: string, password: string) => Promise<void>;
  register: (payload: RegisterPayload) => Promise<void>;
  logout: () => Promise<void>;
}

async function call<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, {
    ...init,
    credentials: 'same-origin',
    headers: { 'content-type': 'application/json', ...(init?.headers ?? {}) },
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error((data as { error?: string }).error || `Erro ${res.status}`);
  return data as T;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      accountsAvailable: true,

      setUser: (user) => set({ user, isAuthenticated: !!user }),

      refresh: async () => {
        try {
          const r = await call<{ user: AuthUser | null; accounts?: boolean }>('/api/auth/me', { cache: 'no-store' });
          set({ user: r.user, isAuthenticated: !!r.user, accountsAvailable: r.accounts !== false });
          return r.user;
        } catch {
          return null;
        }
      },

      login: async (email, password) => {
        set({ isLoading: true });
        try {
          const r = await call<{ user: AuthUser }>('/api/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) });
          set({ user: r.user, isAuthenticated: true });
        } finally {
          set({ isLoading: false });
        }
      },

      register: async (payload) => {
        set({ isLoading: true });
        try {
          const r = await call<{ user: AuthUser }>('/api/auth/register', { method: 'POST', body: JSON.stringify(payload) });
          set({ user: r.user, isAuthenticated: true });
        } finally {
          set({ isLoading: false });
        }
      },

      logout: async () => {
        await call('/api/auth/logout', { method: 'POST' }).catch(() => undefined);
        set({ user: null, isAuthenticated: false });
      },
    }),
    {
      name: 'bet62-auth',
      version: 2,
      // Sessões falsas antigas (versão 0, sem servidor) são descartadas.
      migrate: () => ({ user: null, isAuthenticated: false }),
      partialize: (s) => ({ user: s.user, isAuthenticated: s.isAuthenticated }),
      onRehydrateStorage: () => (state) => {
        void state?.refresh();
      },
    },
  ),
);

/** Pedido JSON autenticado (cookie de sessão) para as páginas da conta. */
export const api = call;
