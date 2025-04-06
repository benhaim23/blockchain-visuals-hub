
import React from 'react';
import { GlowingEffect } from './glowing-effect';
import { cn } from '@/lib/utils';

interface GlowingBoxProps {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  spread?: number;
  borderWidth?: number;
  inactiveZone?: number;
  proximity?: number;
}

export function GlowingBox({ 
  children, 
  className, 
  contentClassName,
  spread = 30,
  borderWidth = 2,
  inactiveZone = 0.1,
  proximity = 50
}: GlowingBoxProps) {
  return (
    <div className={cn("relative rounded-lg", className)}>
      <GlowingEffect
        spread={spread}
        glow={true}
        disabled={false}
        proximity={proximity}
        inactiveZone={inactiveZone}
        borderWidth={borderWidth}
      />
      <div className={cn("relative z-10 bg-background/95 backdrop-blur-sm rounded-md border border-border/50 p-4", contentClassName)}>
        {children}
      </div>
    </div>
  );
}
