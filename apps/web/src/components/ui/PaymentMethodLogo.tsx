'use client';

import Image from 'next/image';
import { cn } from '../../lib/utils';

type PaymentMethodLogoProps = {
  method: 'mbway' | 'multibanco' | 'card';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
};

const SIZE_MAP = {
  sm: { w: 32, h: 20, container: 'h-11 w-11' },
  md: { w: 44, h: 28, container: 'h-14 w-14 md:h-16 md:w-16' },
  lg: { w: 56, h: 36, container: 'h-20 w-20' },
} as const;

const METHOD_BG = {
  mbway: 'bg-[#009688]',
  multibanco: 'bg-[#0070c9]',
  card: 'bg-gradient-to-br from-slate-600 to-slate-900',
} as const;

export function PaymentMethodLogo({
  method,
  className,
  size = 'md',
}: PaymentMethodLogoProps) {
  const sz = SIZE_MAP[size];
  const bgClass = METHOD_BG[method];

  if (method === 'card') {
    return (
      <div
        className={cn(
          sz.container,
          'rounded-2xl flex items-center justify-center shrink-0 overflow-hidden relative',
          bgClass,
          className,
        )}
      >
        <div className="flex items-center gap-0.5 scale-[0.55] md:scale-[0.65]">
          <div className="relative w-[50px] h-[30px] rounded-md overflow-hidden shadow-sm">
            <Image
              src="/payments/visa.svg"
              alt="Logo Visa"
              fill
              sizes="50px"
              className="object-cover"
              priority={false}
            />
          </div>
          <div className="relative w-[50px] h-[30px] rounded-md overflow-hidden shadow-sm -ml-2">
            <Image
              src="/payments/mastercard.svg"
              alt="Logo Mastercard"
              fill
              sizes="50px"
              className="object-cover"
              priority={false}
            />
          </div>
        </div>
      </div>
    );
  }

  const src =
    method === 'mbway' ? '/payments/mbway.svg' : '/payments/multibanco.svg';
  const alt = method === 'mbway' ? 'Logo MB WAY' : 'Logo Multibanco SIBS';

  return (
    <div
      className={cn(
        sz.container,
        'rounded-2xl flex items-center justify-center shrink-0 overflow-hidden',
        bgClass,
        className,
      )}
    >
      <div className="relative" style={{ width: sz.w, height: sz.h }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={`${sz.w}px`}
          className="object-contain p-1"
          priority={false}
        />
      </div>
    </div>
  );
}
