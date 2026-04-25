import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Our Packages', 'How It Works', 'Date Ideas', 'Gallery'];

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-cream/90 backdrop-blur-lg border-b border-gray-100 py-3 shadow-sm' : 'bg-transparent py-4 md:py-6'}`}
      >
        <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/assets/logo/datemates logo transparent.png" 
                alt="date.mates logo" 
                className="h-14 md:h-16 object-contain drop-shadow-sm"
                style={{ filter: 'brightness(0) saturate(100%) invert(35%) sepia(15%) saturate(1637%) hue-rotate(96deg) brightness(98%) contrast(86%)' }}
              />
            </Link>
          </div>

          {/* Center: Navigation */}
          <div className="hidden lg:flex items-center gap-10 text-[13px] font-medium text-mutedGrey">
            {navItems.map((item, idx) => {
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

          {/* Right: CTA & Cart & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            {/* Cart Icon */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-forest hover:bg-forest/5 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              {cartCount > 0 && (
                <span className="absolute 0 right-0 top-0 w-4 h-4 bg-dustyRose text-white text-[9px] font-bold flex items-center justify-center rounded-full border border-white">
                  {cartCount}
                </span>
              )}
            </button>

            <HashLink to="/#contact" className="hidden lg:inline-flex px-6 py-2.5 border border-sage text-sage rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-sage hover:text-white transition-all duration-300">
              Collaborate
            </HashLink>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 focus:outline-none text-forest hover:bg-forest/5 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[72px] left-0 w-full bg-cream border-b border-gray-200 shadow-xl z-40 lg:hidden overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 space-y-4">
              {navItems.map((item) => {
                const isPackages = item === 'Our Packages';
                const linkProps = isPackages 
                  ? { as: Link, to: '/packages' } 
                  : { as: HashLink, to: `/#${item.replace(/\s+/g, '').toLowerCase()}` };

                return (
                  <linkProps.as
                    key={item}
                    to={linkProps.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-serif italic text-forest py-2 border-b border-forest/10"
                  >
                    {item}
                  </linkProps.as>
                );
              })}
              <div className="pt-4">
                <HashLink 
                  to="/#contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full inline-flex justify-center px-6 py-3 bg-sage text-white rounded-full text-xs font-bold tracking-widest uppercase hover:bg-forest transition-all duration-300"
                >
                  Collaborate
                </HashLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
