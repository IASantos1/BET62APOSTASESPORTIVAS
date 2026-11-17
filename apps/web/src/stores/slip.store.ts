'use client';

// Boletim de apostas. Ao apostar, os bilhetes são gravados no servidor (/api/bets).
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { BetPick, Builder } from '../lib/board';

/** O jogo de uma seleção no site (a chave começa pelo id do jogo no site, igual para WinHouse e BETBY). */
const gameKey = (p: BetPick) => p.key.split('|')[0];

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
  /** Atualiza as odds das seleções (chave → odd atual). */
  setOdds: (odds: Map<string, number>) => void;
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
          const picks = [...s.picks.filter((p) => gameKey(p) !== gameKey(pick)), pick];
          return { picks, builder: null, mode: picks.length > 1 ? 'multiple' : s.mode };
        }),
      addMany: (list) =>
        set((s) => {
          const events = new Set(list.map(gameKey));
          return { picks: [...s.picks.filter((p) => !events.has(gameKey(p))), ...list], builder: null, mode: 'multiple', open: true };
        }),
      setBuilder: (builder) => set({ builder, picks: [], open: true }),
      remove: (key) => set((s) => ({ picks: s.picks.filter((p) => p.key !== key) })),
      clear: () => set({ picks: [], builder: null }),
      setMode: (mode) => set({ mode }),
      setStake: (stake) => set({ stake }),
      setOpen: (open) => set({ open }),
      setOdds: (odds) =>
        set((s) => ({
          picks: s.picks.map((p) => (odds.has(p.key) ? { ...p, odds: odds.get(p.key)! } : p)),
          builder: s.builder ? { ...s.builder, legs: s.builder.legs.map((p) => (odds.has(p.key) ? { ...p, odds: odds.get(p.key)! } : p)) } : null,
        })),
    }),
    { name: 'bet62-slip', partialize: (s) => ({ picks: s.picks, builder: s.builder, mode: s.mode, stake: s.stake }) },
  ),
);
