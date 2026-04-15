import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[800px] flex items-center overflow-hidden bg-offwhite">
      {/* Background Image with Overlay */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/assets/images/IMG_0993_jpg.jpg")' }}
      >
        {/* Dark gradient overlay at the bottom for text readability */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-end h-full pb-32">
        <div className="max-w-4xl text-center md:text-left mx-auto md:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-medium text-white leading-[1.1] mb-6 tracking-tight drop-shadow-lg">
              A Unique Date Experience
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-white/90 text-lg md:text-xl font-sans mb-10 max-w-xl mx-auto md:mx-0 font-medium leading-relaxed drop-shadow-sm">
              Create unforgettable moments with our premium aesthetic setups.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <a href="#packages" className="bg-peach text-white text-sm font-semibold rounded-full px-8 py-3.5 hover:bg-terracotta transition-colors shadow-lg">
              Book Your Date
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating Socials */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute right-6 bottom-10 hidden md:flex flex-col space-y-3 z-20"
      >
        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-darkgrey hover:bg-peach transition-colors shadow-md">
           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
        </a>
        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-darkgrey hover:bg-peach transition-colors shadow-md">
           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
        </a>
      </motion.div>

      {/* Modern Dot Indicators */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 items-center z-20"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-white opacity-100 cursor-pointer shadow-sm"></div>
        <div className="w-2 h-2 rounded-full bg-white/50 hover:bg-white/80 cursor-pointer transition-colors shadow-sm"></div>
        <div className="w-2 h-2 rounded-full bg-white/50 hover:bg-white/80 cursor-pointer transition-colors shadow-sm"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
