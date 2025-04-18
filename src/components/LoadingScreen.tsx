
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // First expand the domain
    const expandTimer = setTimeout(() => {
      setExpanded(true);
    }, 1000);

    // Then start fade out after 3 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3000);

    // Complete the loading
    const loadTimer = setTimeout(() => {
      setLoading(false);
    }, 3600);

    return () => {
      clearTimeout(expandTimer);
      clearTimeout(fadeTimer);
      clearTimeout(loadTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div 
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-700",
        fadeOut ? "opacity-0" : "opacity-100"
      )}
    >
      <div className="relative w-[300px] h-[300px] flex items-center justify-center">
        {/* Domain circles */}
        <div 
          className={cn(
            "absolute w-[300px] h-[300px] border-2 border-tron-blue/70 rounded-full transition-transform duration-[2s]",
            expanded ? "scale-[1.5] opacity-0" : "scale-100 opacity-100"
          )}
        />
        <div 
          className={cn(
            "absolute w-[250px] h-[250px] border border-tron-purple/60 rounded-full transition-transform duration-[2s] rotate-45",
            expanded ? "scale-[1.8] opacity-0" : "scale-100 opacity-100"
          )}
        />
        <div 
          className={cn(
            "absolute w-[200px] h-[200px] border border-tron-blue/50 rounded-full animate-spin duration-[15s]",
            expanded ? "opacity-0" : "opacity-100"
          )}
        />
        <div 
          className={cn(
            "absolute w-[150px] h-[150px] border border-tron-purple/40 rounded-full animate-spin duration-[10s] rotate-180",
            expanded ? "opacity-0" : "opacity-100"
          )}
        />
        
        {/* Center elements */}
        <div 
          className={cn(
            "relative z-10 flex flex-col items-center transition-transform duration-[2s]",
            expanded ? "scale-[1.2] opacity-0" : "scale-100 opacity-100"
          )}
        >
          <div className="flex space-x-8 mb-4">
            <div className="gojo-eye animate-glow-pulse" />
            <div className="gojo-eye animate-glow-pulse" />
          </div>
          <div className="text-3xl font-bold text-gradient">RK</div>
        </div>

        {/* Expanding final circle */}
        {expanded && (
          <div className="absolute w-[50px] h-[50px] rounded-full bg-tron-blue/30 animate-domain-expand" />
        )}
      </div>
    </div>
  );
};

export default LoadingScreen;
