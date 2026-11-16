'use client';

// Boletim de apostas (só no navegador; ainda sem backend para registar apostas).
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { BetPick, Builder } from '../lib/board';

interface SlipState {
  picks: BetPick[];
  /** Criador de apostas: várias seleções no mesmo jogo, uma só aposta. */
  builder: Builder | null;
  mode: 'single' | 'multiple';
  stake: number;
  open: boolean;
  toggle: (pick: BetPick) => void;
  addMany: (picks: BetPick[]) => void;
  setBuilder: (b: Builder) => void;
  remove: (key: string) => void;
  clear: () => void;
  setMode: (m: 'single' | 'multiple') => void;
  setStake: (v: number) => void;
  setOpen: (v: boolean) => void;
}

export const useSlip = create<SlipState>()(
  persist(
    (set) => ({
      picks: [],
      builder: null,
      mode: 'single',
      stake: 5,
      open: false,
      // Uma seleção por jogo: escolher outra no mesmo jogo substitui a anterior.
      toggle: (pick) =>
        set((s) => {
          if (s.picks.some((p) => p.key === pick.key)) return { picks: s.picks.filter((p) => p.key !== pick.key) };
          const picks = [...s.picks.filter((p) => p.eventId !== pick.eventId), pick];
          return { picks, builder: null, mode: picks.length > 1 ? 'multiple' : s.mode };
        }),
      addMany: (list) =>
        set((s) => {
          const events = new Set(list.map((p) => p.eventId));
          return { picks: [...s.picks.filter((p) => !events.has(p.eventId)), ...list], builder: null, mode: 'multiple', open: true };
        }),
      setBuilder: (builder) => set({ builder, picks: [], open: true }),
      remove: (key) => set((s) => ({ picks: s.picks.filter((p) => p.key !== key) })),
      clear: () => set({ picks: [], builder: null }),
      setMode: (mode) => set({ mode }),
      setStake: (stake) => set({ stake }),
      setOpen: (open) => set({ open }),
    }),
    { name: 'bet62-slip', partialize: (s) => ({ picks: s.picks, builder: s.builder, mode: s.mode, stake: s.stake }) },
  ),
);
