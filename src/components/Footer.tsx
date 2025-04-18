
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 relative overflow-hidden bg-black border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-gradient font-bold text-xl">RK</span>
            <p className="text-gray-400 mt-2">Where Code Meets Cosmos</p>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400">
              © {currentYear} Rishi Kunnath. All rights reserved.
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <p className="text-gray-400 flex items-center">
              Built with <Heart className="w-4 h-4 text-tron-purple mx-1" /> and Code
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
