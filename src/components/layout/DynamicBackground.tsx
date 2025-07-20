'use client';

import { useEffect, useState } from 'react';

export function DynamicBackground({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollY / docHeight : 0;
      
      const clampedScrollPercent = Math.min(Math.max(scrollPercent, 0), 1);
      
      const startLightness = 13.3;
      const endLightness = 20;
      const currentLightness = startLightness + (endLightness - startLightness) * clampedScrollPercent;
      
      document.body.style.setProperty('--background-lightness', `${currentLightness}%`);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Set initial value
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.removeProperty('--background-lightness');
    };
  }, []);

  // Avoid hydration mismatch by rendering children only on the client
  if (!isMounted) {
    return null;
  }

  return <>{children}</>;
}
