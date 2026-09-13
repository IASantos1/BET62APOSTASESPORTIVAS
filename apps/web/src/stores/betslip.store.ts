'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type MarketType =
  | '1X2'
  | 'WIN_DRAW_WIN'
  | 'OVER_UNDER'
  | 'BOTH_TEAMS_TO_SCORE'
  | 'HANDICAP'
  | 'CORRECT_SCORE'
  | 'DOUBLE_CHANCE'
  | 'DRAW_NO_BET';

export type AcceptanceType = 'ACCEPT_ALL' | 'ACCEPT_HIGHER' | 'ACCEPT_ANY';

export interface BetslipSelection {
  id: string;
  eventId: string;
  marketId: string;
  selectionId: string;
  selectionName: string;
  marketName: string;
  eventName: string;
  kickoffAt: string;
  odds: number;
  marketType: MarketType;
  outcome?: string;
  handicapValue?: number;
  totalLineValue?: number;
}

interface BetslipState {
  selections: BetslipSelection[];
  stakeAmount: number | null;
  acceptanceType: AcceptanceType;
  cashoutEnabled: boolean;

  totalOdds: number;
  potentialWin: number;

  addSelection: (s: BetslipSelection) => void;
  removeSelection: (id: string) => void;
  clearSelections: () => void;
  setStake: (amount: number | null) => void;
  toggleCashoutEnabled: () => void;
  setAcceptanceType: (t: AcceptanceType) => void;
}

export const useBetslipStore = create<BetslipState>()(
  persist(
    (set, get) => ({
      selections: [],
      stakeAmount: null,
      acceptanceType: 'ACCEPT_ALL',
      cashoutEnabled: false,
      totalOdds: 1,
      potentialWin: 0,

      addSelection: (s) => {
        const existing = get().selections;
        const filtered = existing.filter((x) => !(x.eventId === s.eventId && x.marketId === s.marketId && x.selectionId === s.selectionId));
        const next = [...filtered, s];
        const totalOdds = next.reduce((acc, cur) => acc * (Number(cur.odds) || 1), 1);
        const potentialWin = get().stakeAmount != null ? get().stakeAmount! * totalOdds : 0;
        set({ selections: next, totalOdds, potentialWin });
      },
      removeSelection: (id) => {
        const next = get().selections.filter((s) => s.id !== id);
        const totalOdds = next.reduce((acc, cur) => acc * (Number(cur.odds) || 1), 1);
        const potentialWin = get().stakeAmount != null ? get().stakeAmount! * totalOdds : 0;
        set({ selections: next, totalOdds, potentialWin });
      },
      clearSelections: () =>
        set({
          selections: [],
          totalOdds: 1,
          potentialWin: 0,
          stakeAmount: null,
        }),
      setStake: (amount) => {
        const totalOdds = get().selections.reduce((acc, cur) => acc * (Number(cur.odds) || 1), 1);
        set({
          stakeAmount: amount,
          totalOdds,
          potentialWin: amount != null ? amount * totalOdds : 0,
        });
      },
      toggleCashoutEnabled: () =>
        set((state) => ({ cashoutEnabled: !state.cashoutEnabled })),
      setAcceptanceType: (t) => set({ acceptanceType: t }),
    }),
    {
      name: 'bet62-betslip',
      partialize: (s) => ({
        selections: s.selections,
        stakeAmount: s.stakeAmount,
        acceptanceType: s.acceptanceType,
        cashoutEnabled: s.cashoutEnabled,
      }),
    },
  ),
);
