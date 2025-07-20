'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export function DynamicBackground({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = React.useState(false);
  const [opacity, setOpacity] = React.useState(0);

  React.useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? Math.min(scrollY / (docHeight * 0.5), 1) : 0;
      setOpacity(scrollPercent * 0.05); // Keep it subtle, max 5% opacity
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set initial value

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative isolate">
      <div
        style={{ opacity: isMounted ? opacity : 0 }}
        className="fixed inset-0 -z-10 transition-opacity duration-500"
        aria-hidden="true"
      >
        <svg
          className="absolute left-[50%] top-0 h-[100vh] w-[100vw] -translate-x-[50%] [mask-image:radial-gradient(50%_50%_at_50%_50%,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="grid-pattern"
              width="64"
              height="64"
              patternUnits="userSpaceOnUse"
              x="50%"
              y="-1"
              patternTransform="translate(0 -1)"
            >
              <path d="M0 64V.5H64" fill="none" stroke="hsl(var(--primary) / 0.1)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth="0" fill="url(#grid-pattern)" />
        </svg>
      </div>
      {children}
    </div>
  );
}
