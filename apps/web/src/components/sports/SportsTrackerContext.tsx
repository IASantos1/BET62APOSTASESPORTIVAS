'use client';

import * as React from 'react';

interface SportsTrackerContextValue {
  url: string | null;
  active: boolean;
  setTracker: (url: string | null, active: boolean) => void;
}

export const SportsTrackerContext = React.createContext<SportsTrackerContextValue | null>(null);

export function useSportsTracker() {
  const context = React.useContext(SportsTrackerContext);
  if (!context) throw new Error('useSportsTracker must be used inside SportsShell');
  return context;
}
