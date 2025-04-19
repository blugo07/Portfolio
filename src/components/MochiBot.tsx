
import React, { useState, useEffect } from 'react';

const MochiBot = () => {
  const [isBlinking, setIsBlinking] = useState(false);
  const [isSmiling, setIsSmiling] = useState(true);

  useEffect(() => {
    // Random blinking interval between 2-4 seconds
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200); // Blink duration
    }, Math.random() * 2000 + 2000);

    // Change smile every 5-8 seconds
    const smileInterval = setInterval(() => {
      setIsSmiling(prev => !prev);
    }, Math.random() * 3000 + 5000);

    return () => {
      clearInterval(blinkInterval);
      clearInterval(smileInterval);
    };
  }, []);

  return (
    <div className="relative w-48 h-48 neo-blur rounded-full p-4 animate-float">
      {/* Robot head */}
      <div className="w-full h-full rounded-full bg-white/10 flex flex-col items-center justify-center border-2 border-tron-blue/30">
        {/* Eyes */}
        <div className="flex space-x-8 mb-4">
          <div className={`w-4 h-${isBlinking ? '0.5' : '4'} rounded-full bg-tron-blue transition-all duration-200 ${isBlinking ? 'transform scale-y-0' : ''}`} />
          <div className={`w-4 h-${isBlinking ? '0.5' : '4'} rounded-full bg-tron-blue transition-all duration-200 ${isBlinking ? 'transform scale-y-0' : ''}`} />
        </div>
        
        {/* Smile */}
        <div className={`w-12 h-6 relative overflow-hidden transition-all duration-300 ${isSmiling ? 'opacity-100' : 'opacity-70'}`}>
          <div className={`absolute w-12 h-12 border-4 border-tron-blue rounded-full ${isSmiling ? '-top-2' : 'top-4'} transition-all duration-300`} />
        </div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-tron-glow -z-10 opacity-30 animate-glow-pulse" />
    </div>
  );
};

export default MochiBot;
