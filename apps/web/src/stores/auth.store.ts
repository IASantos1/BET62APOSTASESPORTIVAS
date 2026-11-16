'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface AuthUser {
  id: string;
  email: string;
  roles: string[];
  firstName?: string;
  lastName?: string;
  twoFactorEnabled: boolean;
}

interface AuthState {
  user: AuthUser | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  setCredentials: (payload: {
    user: AuthUser;
    accessToken: string;
    refreshToken?: string | null;
  }) => void;
  clearCredentials: () => void;
  hydrate: () => void;
  login: (email: string, password: string) => Promise<void>;
  register: (payload: Record<string, unknown>) => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
      isLoading: false,

      setCredentials: ({ user, accessToken, refreshToken }) => {
        set({
          user,
          accessToken,
          refreshToken: refreshToken ?? null,
          isAuthenticated: true,
        });
      },
      clearCredentials: () => {
        set({
          user: null,
          accessToken: null,
          refreshToken: null,
          isAuthenticated: false,
        });
      },
      hydrate: () => {
        const t = get().accessToken;
        if (t && get().user) {
          set({ isAuthenticated: true });
        }
      },

      // Autenticação ainda sem backend: os métodos mantêm a interface usada pelas páginas.
      login: async (_email: string, _password: string) => {
        throw new Error('Autenticação ainda não configurada.');
      },

      register: async (_payload) => {
        throw new Error('Registo ainda não configurado.');
      },

      logout: async () => {
        get().clearCredentials();
      },
    }),
    {
      name: 'bet62-auth',
      partialize: (s) => ({
        user: s.user,
        accessToken: s.accessToken,
        refreshToken: s.refreshToken,
        isAuthenticated: s.isAuthenticated,
      }),
      onRehydrateStorage: () => (state) => {
        state?.hydrate();
      },
    },
  ),
);
