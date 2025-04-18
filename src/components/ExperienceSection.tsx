
import React, { useEffect, useRef, useState } from 'react';
import { Building2, Award, GraduationCap, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'TechNova Solutions',
    period: '2022 - Present',
    description: 'Lead full-stack development of cloud-based applications, managing a team of 5 engineers and implementing CI/CD pipelines that improved deployment efficiency by 40%.',
    icon: Briefcase,
    color: 'text-tron-blue'
  },
  {
    title: 'Mobile Application Developer',
    company: 'InnoApp Studios',
    period: '2020 - 2022',
    description: 'Developed and launched 4 iOS/Android applications using React Native, increasing user engagement by 30% through innovative UI/UX implementations.',
    icon: Building2,
    color: 'text-tron-purple'
  },
  {
    title: 'Software Engineer Intern',
    company: 'DataViz Technologies',
    period: '2019 - 2020',
    description: 'Contributed to data visualization tools, optimized database queries resulting in 25% performance improvement, and implemented feature enhancements.',
    icon: Briefcase,
    color: 'text-blue-400'
  }
];

const education = [
  {
    degree: 'M.S. in Computer Science',
    institution: 'Georgia Institute of Technology',
    period: '2018 - 2020',
    description: 'Specialized in Artificial Intelligence and Machine Learning, with research focus on neural networks for image recognition.',
    icon: GraduationCap,
    color: 'text-amber-500'
  },
  {
    degree: 'B.S. in Computer Science',
    institution: 'University of Georgia',
    period: '2014 - 2018',
    description: 'Graduated with honors, minor in Mathematics. Senior project on real-time collaboration tools awarded department recognition.',
    icon: GraduationCap,
    color: 'text-red-500'
  }
];

const awards = [
  {
    title: 'Innovation Award',
    issuer: 'Tech Innovators Summit',
    year: '2023',
    description: 'Recognized for developing an AI-driven application that improved accessibility for users with disabilities.'
  },
  {
    title: 'Best Mobile Application',
    issuer: 'App Development Conference',
    year: '2021',
    description: 'Won first place for creating an intuitive and feature-rich mobile experience with exceptional user engagement metrics.'
  }
];

const ExperienceSection = () => {
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
      id="experience" 
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
              <span className="text-gradient">Experience & Education</span>
            </h2>
            <div className="h-1 w-16 mx-auto bg-gradient-to-r from-tron-blue to-tron-purple rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Work Experience */}
            <div className={cn(
              "transition-all duration-700",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            )}>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <Briefcase className="w-6 h-6 mr-2 text-tron-blue" />
                <span>Work Experience</span>
              </h3>
              
              <div className="space-y-8">
                {experiences.map((experience, index) => (
                  <div 
                    key={experience.title} 
                    className="timeline-item"
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <h4 className="text-xl font-bold text-white">{experience.title}</h4>
                    <div className="flex justify-between mb-2">
                      <span className="text-tron-blue">{experience.company}</span>
                      <span className="text-gray-400">{experience.period}</span>
                    </div>
                    <p className="text-gray-300">{experience.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Education */}
            <div className={cn(
              "transition-all duration-700",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            )}>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <GraduationCap className="w-6 h-6 mr-2 text-tron-purple" />
                <span>Education</span>
              </h3>
              
              <div className="space-y-8">
                {education.map((item, index) => (
                  <div 
                    key={item.degree} 
                    className="timeline-item"
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <h4 className="text-xl font-bold text-white">{item.degree}</h4>
                    <div className="flex justify-between mb-2">
                      <span className="text-tron-purple">{item.institution}</span>
                      <span className="text-gray-400">{item.period}</span>
                    </div>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                ))}
              </div>
              
              {/* Awards */}
              <h3 className="text-2xl font-bold mt-16 mb-8 flex items-center">
                <Award className="w-6 h-6 mr-2 text-amber-500" />
                <span>Awards & Recognition</span>
              </h3>
              
              <div className="space-y-6">
                {awards.map((award, index) => (
                  <div 
                    key={award.title}
                    className={cn(
                      "glass-panel p-5 rounded-lg transition-all duration-700",
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    )}
                    style={{ transitionDelay: `${(index + 4) * 150}ms` }}
                  >
                    <div className="flex justify-between mb-2">
                      <h4 className="font-bold text-white">{award.title}</h4>
                      <span className="text-amber-500">{award.year}</span>
                    </div>
                    <div className="text-sm text-gray-400 mb-2">{award.issuer}</div>
                    <p className="text-gray-300 text-sm">{award.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
