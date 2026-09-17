'use client';

import * as React from 'react';
import { cn } from '../../lib/utils';

export interface MiniFootballPitchProps {
  ballX?: number;
  ballY?: number;
  yellowHome?: number;
  yellowAway?: number;
  redHome?: number;
  redAway?: number;
  cornersHome?: number;
  cornersAway?: number;
  substitutionsHome?: number;
  substitutionsAway?: number;
  ballZone?: string;
  className?: string;
}

export default function MiniFootballPitch({
  ballX = 50,
  ballY = 50,
  yellowHome = 0,
  yellowAway = 0,
  redHome = 0,
  redAway = 0,
  cornersHome = 0,
  cornersAway = 0,
  substitutionsHome = 0,
  substitutionsAway = 0,
  ballZone,
  className,
}: MiniFootballPitchProps) {
  const mappedBallX = 5 + (ballX / 100) * 95;
  const mappedBallY = 4 + (ballY / 100) * 60;

  return (
    <div className={cn('w-full aspect-[105/68] relative', className)}>
      <svg
        viewBox="0 0 105 68"
        className="w-full h-full rounded-lg overflow-hidden"
        preserveAspectRatio="xMidYMid meet"
      >
        <rect x="0" y="0" width="105" height="68" fill="#1e5631" />
        <rect x="0" y="0" width="105" height="68" stroke="#ffffff" strokeWidth="0.6" fill="none" />
        <line x1="52.5" y1="0" x2="52.5" y2="68" stroke="#ffffff" strokeWidth="0.6" />
        <circle cx="52.5" cy="34" r="9.15" stroke="#ffffff" strokeWidth="0.6" fill="none" />
        <circle cx="52.5" cy="34" r="0.8" fill="#ffffff" />
        <rect x="0" y="17.84" width="16.5" height="32.32" stroke="#ffffff" strokeWidth="0.6" fill="none" />
        <rect x="88.5" y="17.84" width="16.5" height="32.32" stroke="#ffffff" strokeWidth="0.6" fill="none" />
        <rect x="0" y="25.25" width="5.5" height="17.5" stroke="#ffffff" strokeWidth="0.6" fill="none" />
        <rect x="99.5" y="25.25" width="5.5" height="17.5" stroke="#ffffff" strokeWidth="0.6" fill="none" />
        <circle cx="11" cy="34" r="0.5" fill="#ffffff" />
        <circle cx="94" cy="34" r="0.5" fill="#ffffff" />
        <path d="M 11 24.85 A 9.15 9.15 0 0 1 11 43.15" stroke="#ffffff" strokeWidth="0.6" fill="none" />
        <path d="M 94 24.85 A 9.15 9.15 0 0 0 94 43.15" stroke="#ffffff" strokeWidth="0.6" fill="none" />
        <circle cx="0" cy="0" r="0.8" stroke="#ffffff" strokeWidth="0.6" fill="none" />
        <circle cx="0" cy="68" r="0.8" stroke="#ffffff" strokeWidth="0.6" fill="none" />
        <circle cx="105" cy="0" r="0.8" stroke="#ffffff" strokeWidth="0.6" fill="none" />
        <circle cx="105" cy="68" r="0.8" stroke="#ffffff" strokeWidth="0.6" fill="none" />
        <rect x="-1" y="31" width="2" height="6" fill="#ffffff" />
        <rect x="104" y="31" width="2" height="6" fill="#ffffff" />
        <circle
          cx={mappedBallX}
          cy={mappedBallY}
          r="1.2"
          fill="#ffffff"
          stroke="#000000"
          strokeWidth="0.2"
          style={{ transition: 'cx 600ms ease, cy 600ms ease' }}
        />
      </svg>

      {ballZone ? (
        <div className="absolute inset-0 pointer-events-none flex items-start justify-center pt-1">
          <span className="text-[10px] bg-black/60 text-white px-2 py-0.5 rounded-md backdrop-blur-sm">
            {ballZone}
          </span>
        </div>
      ) : null}

      <div className="absolute top-1.5 left-1.5 flex items-center gap-1 text-[10px] font-semibold bg-black/50 px-1.5 py-0.5 rounded-md backdrop-blur-sm">
        <span>🟨</span>
        <span className="text-yellow-400 font-mono">{yellowHome}</span>
        <span className="text-white/50">/</span>
        <span className="text-yellow-400 font-mono">{yellowAway}</span>
      </div>

      <div className="absolute top-1.5 right-1.5 flex items-center gap-1 text-[10px] font-semibold bg-black/50 px-1.5 py-0.5 rounded-md backdrop-blur-sm">
        <span>🟥</span>
        <span className="text-red-500 font-mono">{redHome}</span>
        <span className="text-white/50">/</span>
        <span className="text-red-500 font-mono">{redAway}</span>
      </div>

      <div className="absolute bottom-1.5 left-1.5 flex items-center gap-1 text-[10px] font-semibold bg-black/50 px-1.5 py-0.5 rounded-md backdrop-blur-sm">
        <span>🎯</span>
        <span className="text-white font-mono">{cornersHome}</span>
        <span className="text-white/50">/</span>
        <span className="text-white font-mono">{cornersAway}</span>
      </div>

      <div className="absolute bottom-1.5 right-1.5 flex items-center gap-1 text-[10px] font-semibold bg-black/50 px-1.5 py-0.5 rounded-md backdrop-blur-sm">
        <span>↺</span>
        <span className="text-white font-mono">{substitutionsHome}</span>
        <span className="text-white/50">/</span>
        <span className="text-white font-mono">{substitutionsAway}</span>
      </div>
    </div>
  );
}

export { commentaryToBallPosition } from '../../lib/commentary-to-position';
export type { FootballZone } from '../../lib/commentary-to-position';
