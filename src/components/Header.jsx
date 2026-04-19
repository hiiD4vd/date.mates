import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-cream/90 backdrop-blur-lg border-b border-gray-100 py-4 shadow-sm' : 'bg-cream py-6'}`}
    >
      <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/assets/logo/datemates logo transparent.png" 
              alt="date.mates logo" 
              className="h-16 md:h-20 object-contain drop-shadow-sm" 
            />
          </Link>
        </div>

        {/* Center: Navigation */}
        <div className="hidden lg:flex items-center gap-10 text-[13px] font-medium text-mutedGrey">
          {['Our Packages', 'How It Works', 'Date Ideas', 'Gallery'].map((item, idx) => {
            const isPackages = item === 'Our Packages';
            const linkProps = isPackages 
              ? { as: Link, to: '/packages' } 
              : { as: HashLink, to: `/#${item.replace(/\s+/g, '').toLowerCase()}` };

            return (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                key={item} 
              >
                <linkProps.as
                  to={linkProps.to}
                  className="relative group transition-colors duration-300 hover:text-forest inline-block"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-forest transition-all duration-300 group-hover:w-full"></span>
                </linkProps.as>
              </motion.div>
            );
          })}
        </div>

        {/* Right: CTA */}
        <div className="flex items-center">
          <HashLink to="/#contact" className="hidden lg:inline-flex px-6 py-2.5 border border-sage text-sage rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-sage hover:text-white transition-all duration-300">
            Collaborate
          </HashLink>
          
          {/* Mobile menu button */}
          <button className="lg:hidden focus:outline-none text-forest ml-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
