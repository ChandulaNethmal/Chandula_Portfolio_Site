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
      const scrollPercent = docHeight > 0 ? Math.min(scrollY / (docHeight * 0.25), 1) : 0; // fade in a bit faster
      setOpacity(scrollPercent * 0.03); // Keep it very subtle, max 3% opacity
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
          className="absolute left-[50%] top-0 h-full w-full -translate-x-[50%] [mask-image:radial-gradient(50%_50%_at_50%_50%,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="circuit-pattern"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
              patternContentUnits="userSpaceOnUse"
              x="50%"
              y="-1"
            >
              <path d="M79.5 0V80" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1" />
              <path d="M0 79.5H80" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1" />
              <path d="M40 0V20" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1" />
              <path d="M40 60V80" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1" />
              <path d="M0 40H20" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1" />
              <path d="M60 40H80" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1" />
              <circle cx="40" cy="40" r="5" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1" fill="none" />
              <circle cx="20" cy="20" r="2" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1" fill="none" />
              <circle cx="60" cy="60" r="2" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1" fill="none" />
              <circle cx="20" cy="60" r="2" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1" fill="none" />
              <circle cx="60" cy="20" r="2" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1" fill="none" />
              <path d="M20 20H40" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1" />
              <path d="M40 40H60" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1" />
              <path d="M60 60V40" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1" />
              <path d="M20 60V40" stroke="hsl(var(--primary) / 0.1)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth="0" fill="url(#circuit-pattern)" />
        </svg>
      </div>
      {children}
    </div>
  );
}
