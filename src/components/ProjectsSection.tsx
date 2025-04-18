
import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, MessageSquare, Map, Film, Camera } from 'lucide-react';
import { cn } from '@/lib/utils';

const projects = [
  {
    title: 'UGAmi',
    description: 'Interactive campus map application with real-time chat features for students at the University of Georgia.',
    tech: ['React Native', 'Firebase', 'Google Maps API'],
    icon: Map,
    color: 'bg-gradient-to-br from-red-500/20 to-amber-500/20 border-red-500/30',
    iconColor: 'text-red-500'
  },
  {
    title: 'PeerPAWS',
    description: 'Collaborative study platform featuring real-time group chat and resource sharing for academic communities.',
    tech: ['Next.js', 'Socket.io', 'MongoDB'],
    icon: MessageSquare,
    color: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-blue-500/30',
    iconColor: 'text-blue-500'
  },
  {
    title: 'eBooking',
    description: 'Digital cinema seat reservation system with real-time availability updates and payment processing.',
    tech: ['React', 'Node.js', 'Stripe API'],
    icon: Film,
    color: 'bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border-amber-500/30',
    iconColor: 'text-amber-500'
  },
  {
    title: 'DogIdentifier',
    description: 'AI-powered mobile application that identifies dog breeds from photos with high accuracy.',
    tech: ['Swift', 'TensorFlow', 'CoreML'],
    icon: Camera,
    color: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30',
    iconColor: 'text-purple-500'
  }
];

const ProjectsSection = () => {
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
      id="projects" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-tron-darkPurple"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gojo-background"></div>
      <div className="absolute inset-0 bg-tron-grid bg-[size:30px_30px] opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={cn(
              "text-4xl font-bold mb-4 transition-all duration-700 transform",
              isVisible ? "opacity-100" : "opacity-0 translate-y-10"
            )}>
              <span className="text-gradient">Featured Projects</span>
            </h2>
            <div className="h-1 w-16 mx-auto bg-gradient-to-r from-tron-blue to-tron-purple rounded-full"></div>
            <p className={cn(
              "text-gray-400 mt-6 max-w-2xl mx-auto transition-all duration-700 delay-300",
              isVisible ? "opacity-100" : "opacity-0"
            )}>
              Innovative solutions built with cutting-edge technologies.
            </p>
          </div>
          
          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className={cn(
                  "project-card overflow-hidden transition-all duration-700",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
                  project.color
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <div className={cn("w-10 h-10 rounded-full flex items-center justify-center", project.color)}>
                        <project.icon className={cn("w-5 h-5", project.iconColor)} />
                      </div>
                      <h3 className="text-xl font-bold ml-3 text-white">{project.title}</h3>
                    </div>
                    <div className="flex space-x-2">
                      <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                        <Github className="w-4 h-4 text-gray-400 hover:text-white" />
                      </a>
                      <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                        <ExternalLink className="w-4 h-4 text-gray-400 hover:text-white" />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs rounded-full bg-black/20 border border-white/10 text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                
                <div className="p-4 bg-black/20">
                  <a href="#" className="text-tron-blue hover:text-white transition-colors flex items-center justify-center">
                    <span className="mr-2">View Project Details</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* More projects link */}
          <div className="text-center mt-12">
            <a 
              href="#" 
              className={cn(
                "tron-button inline-flex items-center transition-all duration-700",
                isVisible ? "opacity-100" : "opacity-0"
              )}
            >
              <span>View All Projects</span>
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
