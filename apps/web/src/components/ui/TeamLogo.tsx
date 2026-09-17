'use client';

import Image from 'next/image';
import { cn } from '../../lib/utils';

interface TeamLogoProps {
  src?: string;
  name: string;
  color: 'primary' | 'secondary' | 'accent';
  size?: number;
}

const gradientMap = {
  primary: 'from-bet62-primary/25 to-bet62-accent/25 border-bet62-primary/30 text-bet62-primary',
  secondary: 'from-bet62-secondary/25 to-bet62-accent/25 border-bet62-secondary/30 text-bet62-secondary',
  accent: 'from-bet62-accent/25 to-bet62-primary/25 border-bet62-accent/30 text-bet62-accent',
} as const;

export function TeamLogo({ src, name, color, size = 40 }: TeamLogoProps) {
  if (src) {
    return (
      <Image
        src={src}
        alt={name}
        width={size}
        height={size}
        className="rounded-xl object-contain"
      />
    );
  }

  const initials = name
    .split(/[\s-]/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('');

  return (
    <div
      className={cn(
        'shrink-0 rounded-xl bg-gradient-to-br border inline-flex items-center justify-center font-black text-xs',
        gradientMap[color],
      )}
      style={{ width: size, height: size }}
    >
      {initials || '?'}
    </div>
  );
}
