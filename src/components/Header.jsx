import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-offwhite/90 backdrop-blur-lg border-b border-amber-100 shadow-[0_4px_20px_rgba(139,69,19,0.05)] py-4' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-3 items-center">
        {/* Left: Logo */}
        <div className="flex justify-start">
          <a href="#" className="flex items-center">
            <img 
              src="/assets/logo/datemates logo transparent.png" 
              alt="date.mates logo" 
              className={`h-8 md:h-10 object-contain transition-all duration-300 ${scrolled ? 'opacity-100' : 'brightness-0 invert opacity-90 drop-shadow-md'}`} 
            />
          </a>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden md:flex justify-center items-center space-x-8">
          {['Our Packages', 'How It Works', 'Testimonials'].map((item) => (
            <a key={item} href="#" className={`text-sm font-sans font-medium transition-colors ${scrolled ? 'text-darkgrey/70 hover:text-darkgrey' : 'text-white/80 hover:text-white'}`}>
              {item}
            </a>
          ))}
        </nav>

        {/* Right: CTA */}
        <div className="flex justify-end items-center">
          <a href="#" className={`hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold rounded-full border transition-all ${
            scrolled ? 'border-darkgrey text-darkgrey hover:bg-peach hover:border-peach hover:text-white' : 'border-white text-white hover:bg-white hover:text-darkgrey'
          }`}>
            Collaborate
          </a>
          
          {/* Mobile menu button */}
          <button className={`md:hidden focus:outline-none transition-colors ${scrolled ? 'text-darkgrey' : 'text-white'}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
