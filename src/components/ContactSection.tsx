
import React, { useEffect, useRef, useState } from 'react';
import { Send, Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
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
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would integrate with a form submission API in production
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };
  
  return (
    <section 
      id="contact" 
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
              <span className="text-gradient">Get In Touch</span>
            </h2>
            <div className="h-1 w-16 mx-auto bg-gradient-to-r from-tron-blue to-tron-purple rounded-full"></div>
            <p className={cn(
              "text-gray-400 mt-6 max-w-2xl mx-auto transition-all duration-700 delay-300",
              isVisible ? "opacity-100" : "opacity-0"
            )}>
              Have a project in mind or want to discuss opportunities? Reach out!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={cn(
              "transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            )}>
              <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-tron-blue">Send a Message</h3>
                
                <div className="mb-6">
                  <label className="block text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md bg-black/30 border border-tron-blue/30 text-white focus:outline-none focus:border-tron-blue focus:ring-1 focus:ring-tron-blue/50 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md bg-black/30 border border-tron-blue/30 text-white focus:outline-none focus:border-tron-blue focus:ring-1 focus:ring-tron-blue/50 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-300 mb-2">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-md bg-black/30 border border-tron-blue/30 text-white focus:outline-none focus:border-tron-blue focus:ring-1 focus:ring-tron-blue/50 transition-colors resize-none"
                    placeholder="I'd like to discuss a project..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="tron-button flex items-center justify-center w-full"
                >
                  <Send className="w-4 h-4 mr-2" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className={cn(
              "transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            )}
            style={{ transitionDelay: '150ms' }}>
              <div className="glass-panel p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-6 text-tron-purple">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-tron-blue mt-1 mr-4" />
                    <div>
                      <h4 className="text-white font-medium mb-1">Email</h4>
                      <a href="mailto:contact@rishikunnath.com" className="text-gray-300 hover:text-tron-blue transition-colors">
                        contact@rishikunnath.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-tron-blue mt-1 mr-4" />
                    <div>
                      <h4 className="text-white font-medium mb-1">Phone</h4>
                      <a href="tel:+10000000000" className="text-gray-300 hover:text-tron-blue transition-colors">
                        +1 (000) 000-0000
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-tron-blue mt-1 mr-4" />
                    <div>
                      <h4 className="text-white font-medium mb-1">Location</h4>
                      <p className="text-gray-300">
                        Atlanta, Georgia, USA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="glass-panel p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-tron-purple">Connect Online</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <a href="#" className="flex items-center p-3 rounded-md hover:bg-white/5 transition-colors group">
                    <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-tron-blue transition-colors mr-3" />
                    <span className="text-gray-300 group-hover:text-white transition-colors">LinkedIn</span>
                  </a>
                  
                  <a href="#" className="flex items-center p-3 rounded-md hover:bg-white/5 transition-colors group">
                    <Github className="w-5 h-5 text-gray-400 group-hover:text-tron-blue transition-colors mr-3" />
                    <span className="text-gray-300 group-hover:text-white transition-colors">GitHub</span>
                  </a>
                  
                  <a href="#" className="flex items-center p-3 rounded-md hover:bg-white/5 transition-colors group">
                    <Twitter className="w-5 h-5 text-gray-400 group-hover:text-tron-blue transition-colors mr-3" />
                    <span className="text-gray-300 group-hover:text-white transition-colors">Twitter</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
