
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
    <div className="relative w-64 h-64 neo-blur rounded-3xl p-4 animate-float">
      {/* Antenna */}
      <div className="absolute left-1/2 -top-6 -translate-x-1/2">
        <div className="w-2 h-6 bg-white rounded-full" />
        <div className="w-4 h-4 bg-[#221F26] rounded-full -mt-1 mx-auto" />
      </div>

      {/* Robot head */}
      <div className="w-full h-full rounded-3xl bg-white flex flex-col items-center justify-center relative overflow-hidden shadow-lg">
        {/* Face screen */}
        <div className="w-48 h-32 bg-[#221F26] rounded-2xl relative overflow-hidden">
          {/* Eyes */}
          <div className="relative z-10 flex justify-center space-x-8 mt-8">
            <div className={`w-4 h-${isBlinking ? '0.5' : '8'} rounded-full bg-tron-blue transition-all duration-200 ${isBlinking ? 'transform scale-y-0' : ''} glow-effect`} />
            <div className={`w-4 h-${isBlinking ? '0.5' : '8'} rounded-full bg-tron-blue transition-all duration-200 ${isBlinking ? 'transform scale-y-0' : ''} glow-effect`} />
          </div>
          
          {/* Smile */}
          <div className="relative z-10 mt-4 flex justify-center">
            <div className="w-16 h-16 rounded-full border-4 border-tron-blue glow-effect"
                 style={{ borderTopColor: 'transparent', borderLeftColor: 'transparent', borderRightColor: 'transparent', transform: 'translateY(-50%)' }} />
          </div>
        </div>

        {/* Side ears/speakers */}
        <div className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-12 bg-white rounded-full shadow-md" />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-12 bg-white rounded-full shadow-md" />
      </div>

      {/* Arms */}
      <div className={`absolute -left-8 top-1/2 w-12 h-4 bg-white rounded-full origin-right transform transition-transform duration-500 ${isWaving ? 'rotate-45' : ''} shadow-md`} />
      <div className="absolute -right-8 top-1/2 w-12 h-4 bg-white rounded-full shadow-md" />
      
      {/* Glow effects */}
      <div className="absolute inset-0 rounded-3xl bg-tron-glow -z-10 opacity-20 animate-glow-pulse" />
      
      <style>{`
        .glow-effect {
          box-shadow: 0 0 15px #1EAEDB, 0 0 25px rgba(30,174,219,0.3);
        }
      `}</style>
    </div>
  );
};

export default MochiBot;

