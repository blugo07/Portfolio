
import React, { useEffect, useRef, useState } from 'react';
import { Coffee, Database, Figma, FileCode, Flame, Layers, LayoutGrid, Leaf } from 'lucide-react';
import { cn } from '@/lib/utils';

const skills = [
  { name: 'Java', icon: Coffee, color: 'text-amber-500' },
  { name: 'Python', icon: Layers, color: 'text-blue-400' },
  { name: 'React', icon: LayoutGrid, color: 'text-sky-400' },
  { name: 'Swift', icon: FileCode, color: 'text-orange-500' },
  { name: 'Firebase', icon: Flame, color: 'text-amber-500' },
  { name: 'MongoDB', icon: Leaf, color: 'text-green-500' },
  { name: 'Figma', icon: Figma, color: 'text-purple-400' },
  { name: 'SQL', icon: Database, color: 'text-blue-500' },
];

const SkillsSection = () => {
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
      id="skills" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-black"
    >
      {/* Background elements */}
      <div className="absolute inset-0 tron-grid"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tron-glow opacity-20 blur-[100px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={cn(
              "text-4xl font-bold mb-4 transition-all duration-700 transform",
              isVisible ? "opacity-100" : "opacity-0 translate-y-10"
            )}>
              <span className="text-gradient">Technical Skills</span>
            </h2>
            <div className="h-1 w-16 mx-auto bg-gradient-to-r from-tron-blue to-tron-purple rounded-full"></div>
            <p className={cn(
              "text-gray-400 mt-6 max-w-2xl mx-auto transition-all duration-700 delay-300",
              isVisible ? "opacity-100" : "opacity-0"
            )}>
              Mastering a diverse tech stack to bring innovative ideas to life with precision and creativity.
            </p>
          </div>
          
          {/* Skills grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className={cn(
                  "flex flex-col items-center transition-all duration-700",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="skill-icon mb-3 group">
                  <skill.icon className={cn("w-8 h-8", skill.color)} />
                  <div className="absolute inset-0 bg-tron-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </div>
                <span className="text-gray-300">{skill.name}</span>
              </div>
            ))}
          </div>
          
          {/* Technologies section */}
          <div className={cn(
            "mt-20 glass-panel p-8 rounded-lg transition-all duration-700 transform",
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}>
            <h3 className="text-2xl font-bold mb-6 text-center text-tron-blue">Technologies & Tools</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4">
              <div className="col-span-1">
                <h4 className="text-tron-purple font-medium mb-2">Frontend</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>HTML5 / CSS3</li>
                  <li>JavaScript / TypeScript</li>
                  <li>React.js / Next.js</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              
              <div className="col-span-1">
                <h4 className="text-tron-purple font-medium mb-2">Backend</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>Node.js / Express</li>
                  <li>Python / Flask</li>
                  <li>Java / Spring Boot</li>
                  <li>GraphQL</li>
                </ul>
              </div>
              
              <div className="col-span-1">
                <h4 className="text-tron-purple font-medium mb-2">Other</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>Git / CI/CD</li>
                  <li>Docker / Kubernetes</li>
                  <li>AWS / GCP</li>
                  <li>TensorFlow / PyTorch</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
