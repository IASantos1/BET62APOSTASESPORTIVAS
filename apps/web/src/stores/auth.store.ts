'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { setTokens, clearTokens, type ApiError, apiClient } from '../lib/api-client';

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
        setTokens(accessToken, refreshToken ?? null);
        set({
          user,
          accessToken,
          refreshToken: refreshToken ?? null,
          isAuthenticated: true,
        });
      },
      clearCredentials: () => {
        clearTokens();
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

      login: async (email: string, password: string) => {
        set({ isLoading: true });
        try {
          const res = await apiClient.post<{
            user?: AuthUser;
            userId?: string;
            accessToken?: string;
            refreshToken?: string;
            expiresInSec?: number;
            tokenType?: string;
          }>('/auth/login', { email, password }, { auth: false });

          const user: AuthUser = (res.user ?? {
            id: res.userId,
            email,
            roles: ['USER'],
            twoFactorEnabled: false,
          }) as AuthUser;

          get().setCredentials({
            user,
            accessToken: res.accessToken ?? '',
            refreshToken: res.refreshToken ?? null,
          });
        } catch (err) {
          const e = err as ApiError;
          if (e.status === 401) {
            get().clearCredentials();
          }
          throw err;
        } finally {
          set({ isLoading: false });
        }
      },

      register: async (payload) => {
        set({ isLoading: true });
        try {
          const res = await apiClient.post<{
            user?: AuthUser;
            accessToken?: string;
            refreshToken?: string;
          }>('/auth/register', payload, { auth: false });

          if (res.accessToken) {
            const u: AuthUser = (res.user ?? {
              id: '',
              email: String((payload.email as string) ?? ''),
              roles: ['USER'],
              twoFactorEnabled: false,
            }) as AuthUser;
            get().setCredentials({
              user: u,
              accessToken: res.accessToken,
              refreshToken: res.refreshToken ?? null,
            });
          }
        } finally {
          set({ isLoading: false });
        }
      },

      logout: async () => {
        try {
          await apiClient.post('/auth/logout', {}, { skipAuthError: true });
        } catch {
          // ignore
        }
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
