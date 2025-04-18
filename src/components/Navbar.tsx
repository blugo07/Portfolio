
import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Music, Home, User, BookOpen, Code, Award, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', icon: Home, href: '#home' },
  { name: 'About', icon: User, href: '#about' },
  { name: 'Skills', icon: Code, href: '#skills' },
  { name: 'Projects', icon: BookOpen, href: '#projects' },
  { name: 'Experience', icon: Award, href: '#experience' },
  { name: 'Contact', icon: Mail, href: '#contact' }
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      
      // Check if page is scrolled for navbar styling
      setScrolled(window.scrollY > 50);
      
      // Find the current active section
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMusic = () => {
    setMusicPlaying(!musicPlaying);
    // Audio functionality would be implemented here
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 lg:px-12",
      scrolled ? "py-4 neo-blur" : "py-6"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-gradient">RK</a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "px-4 py-2 rounded-md flex items-center space-x-2 transition-all duration-300 tron-glow group",
                activeSection === item.href.substring(1)
                  ? "text-tron-blue"
                  : "text-gray-400 hover:text-white"
              )}
            >
              <item.icon className={cn(
                "w-4 h-4 transition-all duration-300",
                activeSection === item.href.substring(1)
                  ? "text-tron-blue animate-glow-pulse"
                  : "text-gray-400 group-hover:text-white"
              )} />
              <span>{item.name}</span>
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <button 
            onClick={toggleMusic}
            className="tron-button rounded-full w-10 h-10 p-0 flex items-center justify-center"
          >
            <Music className={cn("w-4 h-4", musicPlaying ? "text-tron-purple" : "text-tron-blue")} />
          </button>
          
          <a 
            href="#" 
            className="tron-button flex items-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden tron-button rounded-full w-10 h-10 p-0 flex items-center justify-center"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden neo-blur mt-2 rounded-lg p-4 animate-fade-in">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-md flex items-center space-x-3",
                  activeSection === item.href.substring(1)
                    ? "text-tron-blue bg-white/5"
                    : "text-gray-400"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </a>
            ))}
            <div className="border-t border-white/10 pt-2 mt-2 flex justify-between">
              <button 
                onClick={toggleMusic}
                className="tron-button rounded-full w-10 h-10 p-0 flex items-center justify-center"
              >
                <Music className="w-4 h-4" />
              </button>
              
              <a 
                href="#" 
                className="tron-button flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
