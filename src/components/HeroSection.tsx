
import React, { useEffect, useState } from 'react';
import { Mail, Phone, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate loading after initial component render
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden tron-grid">
      {/* Background effects */}
      <div className="absolute inset-0 bg-tron-grid bg-[size:40px_40px] opacity-30 animate-grid-flow"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-tron-glow opacity-30 blur-[100px]"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-4 overflow-hidden">
            <h1 
              className={cn(
                "text-4xl md:text-6xl lg:text-7xl font-bold glitch-text transition-all duration-700 transform",
                loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              )}
              data-text="RISHI KUNNATH"
            >
              RISHI KUNNATH
            </h1>
          </div>
          
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-tron-blue to-tron-purple my-6 rounded-full"></div>
          
          <h2 
            className={cn(
              "text-xl md:text-2xl text-gray-300 mb-6 transition-all duration-700 delay-300",
              loaded ? "opacity-100" : "opacity-0"
            )}
          >
            <span className="text-tron-blue">Full-Stack Dev</span> · 
            <span className="text-white"> Mobile Innovator</span> · 
            <span className="text-tron-purple"> AI Visionary</span>
          </h2>
          
          <p 
            className={cn(
              "text-gray-400 text-lg md:text-xl mb-10 transition-all duration-700 delay-500",
              loaded ? "opacity-100" : "opacity-0"
            )}
          >
            Where Code Meets Cosmos.
          </p>
          
          {/* Contact links */}
          <div 
            className={cn(
              "flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-700",
              loaded ? "opacity-100" : "opacity-0"
            )}
          >
            <a 
              href="mailto:contact@rishikunnath.com" 
              className="tron-button flex items-center space-x-2"
            >
              <Mail className="w-4 h-4" />
              <span>Get In Touch</span>
            </a>
            
            <a 
              href="tel:+10000000000" 
              className="text-gray-400 hover:text-tron-blue transition-colors flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>+1 (000) 000-0000</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-tron-blue transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
      
      {/* Light beams */}
      <div className="absolute top-1/3 left-0 light-beam w-1/3 animate-beam"></div>
      <div className="absolute top-2/3 right-0 light-beam w-1/4 animate-beam" style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
};

export default HeroSection;
