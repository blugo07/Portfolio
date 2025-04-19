
import React, { useState, useEffect } from 'react';

const MochiBot = () => {
  const [isBlinking, setIsBlinking] = useState(false);
  const [isWaving, setIsWaving] = useState(false);

  useEffect(() => {
    // Random blinking interval between 2-4 seconds
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, Math.random() * 2000 + 2000);

    // Wave animation every 5 seconds
    const waveInterval = setInterval(() => {
      setIsWaving(true);
      setTimeout(() => setIsWaving(false), 1000);
    }, 5000);

    return () => {
      clearInterval(blinkInterval);
      clearInterval(waveInterval);
    };
  }, []);

  return (
    <div className="relative w-64 h-64 neo-blur rounded-full p-4 animate-float">
      {/* Antenna */}
      <div className="absolute left-1/2 -top-6 -translate-x-1/2">
        <div className="w-2 h-6 bg-gray-300 rounded-full" />
        <div className="w-4 h-4 bg-gray-800 rounded-full -mt-1 mx-auto" />
      </div>

      {/* Robot head */}
      <div className="w-full h-full rounded-[40px] bg-gray-100 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Face screen (black glass effect) */}
        <div className="w-48 h-32 bg-gray-900 rounded-2xl relative overflow-hidden backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" />
          
          {/* Eyes */}
          <div className="relative z-10 flex justify-center space-x-8 mt-6">
            <div className={`w-3 h-${isBlinking ? '0.5' : '6'} rounded-sm bg-tron-blue transition-all duration-200 ${isBlinking ? 'transform scale-y-0' : ''} glow-effect`} />
            <div className={`w-3 h-${isBlinking ? '0.5' : '6'} rounded-sm bg-tron-blue transition-all duration-200 ${isBlinking ? 'transform scale-y-0' : ''} glow-effect`} />
          </div>
          
          {/* Smile */}
          <div className="relative z-10 mt-4 flex justify-center">
            <div className="w-12 h-4">
              <div className="w-12 h-12 border-4 border-tron-blue rounded-full -mt-6 glow-effect" 
                   style={{ borderTopColor: 'transparent', borderLeftColor: 'transparent', borderRightColor: 'transparent' }} />
            </div>
          </div>
        </div>

        {/* Side ears/speakers */}
        <div className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-12 bg-gray-300 rounded-full" />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-12 bg-gray-300 rounded-full" />

        {/* Body (subtle indication) */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-16 bg-gray-100 rounded-t-[30px]" />
      </div>

      {/* Arms */}
      <div className={`absolute -left-8 top-1/2 w-12 h-4 bg-gray-300 rounded-full origin-right transform transition-transform duration-500 ${isWaving ? 'rotate-45' : ''}`} />
      <div className="absolute -right-8 top-1/2 w-12 h-4 bg-gray-300 rounded-full" />
      
      {/* Glow effects */}
      <div className="absolute inset-0 rounded-full bg-tron-glow -z-10 opacity-30 animate-glow-pulse" />
      
      <style jsx>{`
        .glow-effect {
          box-shadow: 0 0 10px #1EAEDB, 0 0 20px #1EAEDB40;
        }
      `}</style>
    </div>
  );
};

export default MochiBot;
