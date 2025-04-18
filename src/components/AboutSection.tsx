
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-tron-darkPurple"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gojo-background"></div>
      
      {/* Gojo eyes effect in background */}
      <div className="absolute top-1/4 left-1/4 gojo-eye scale-[2] opacity-20"></div>
      <div className="absolute bottom-1/4 right-1/4 gojo-eye scale-[3] opacity-10"></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-tron-grid bg-[size:30px_30px] opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={cn(
              "text-4xl font-bold mb-4 transition-all duration-700 transform",
              isVisible ? "opacity-100" : "opacity-0 translate-y-10"
            )}>
              <span className="text-gradient">About Me</span>
            </h2>
            <div className="h-1 w-16 mx-auto bg-gradient-to-r from-tron-blue to-tron-purple rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left column */}
            <div className={cn(
              "glass-panel p-6 rounded-lg transition-all duration-700 transform",
              isVisible ? "opacity-100 animate-slide-in-left" : "opacity-0 -translate-x-20"
            )}>
              <h3 className="text-2xl font-bold mb-4 text-tron-blue">Who I Am</h3>
              <p className="text-gray-300 mb-4">
                I'm a full-stack developer with a passion for creating innovative solutions 
                at the intersection of technology and user experience. My journey in tech has 
                been driven by curiosity and a desire to push boundaries.
              </p>
              <p className="text-gray-300">
                With expertise in both front-end and back-end development, I bring ideas to life 
                through clean code, intuitive interfaces, and scalable architectures. I thrive in 
                collaborative environments where creativity meets technical execution.
              </p>
            </div>
            
            {/* Right column */}
            <div className={cn(
              "glass-panel p-6 rounded-lg transition-all duration-700 transform",
              isVisible ? "opacity-100 animate-slide-in-right" : "opacity-0 translate-x-20"
            )}>
              <h3 className="text-2xl font-bold mb-4 text-tron-purple">My Approach</h3>
              <p className="text-gray-300 mb-4">
                I approach every project with a blend of analytical thinking and creative 
                problem-solving. My goal is to create technology that not only works flawlessly 
                but also provides meaningful experiences for users.
              </p>
              <p className="text-gray-400 italic border-l-4 border-tron-blue pl-4 my-6">
                "I craft code like I manipulate Infinity."
              </p>
              <p className="text-gray-300">
                When I'm not coding, you can find me exploring emerging technologies, 
                contributing to open-source projects, or refining my skills through continuous learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
