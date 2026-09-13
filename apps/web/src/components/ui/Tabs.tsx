'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

export const Tabs = TabsPrimitive.Root;

export const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, children, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'relative inline-flex h-11 items-center justify-center gap-1 rounded-xl bg-bet62-surface/60 p-1 text-sm border border-bet62-border',
      className,
    )}
    {...props}
  >
    {children}
  </TabsPrimitive.List>
));
TabsList.displayName = 'TabsList';

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'relative inline-flex items-center justify-center whitespace-nowrap rounded-lg px-4 py-1.5 font-medium text-white/60 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bet62-primary/40 disabled:pointer-events-none disabled:opacity-50',
      'data-[state=active]:text-bet62-bg data-[state=active]:bg-bet62-primary',
      className,
    )}
    {...props}
  >
    <span className="relative z-10">{children}</span>
  </TabsPrimitive.Trigger>
));
TabsTrigger.displayName = 'TabsTrigger';

export const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bet62-primary/40 rounded-xl',
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = 'TabsContent';
