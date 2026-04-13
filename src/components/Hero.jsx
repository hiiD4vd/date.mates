import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center bg-gray-900">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&w=2000&q=80")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-center h-full pt-16 pb-16">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white leading-tight mb-6 mt-16">
            Are You Looking For A Unique Date Experiences?
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-sans mb-10 max-w-md font-light leading-relaxed">
            We got your back! Find various kind of activities that could make your dream dates come true
          </p>
          
          <div className="flex items-center space-x-6">
            <button className="bg-white text-darkgrey font-semibold rounded-lg px-8 py-4 hover:bg-peach hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              Explore More
            </button>
            <div className="flex space-x-2">
              <button className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-darkgrey transition-colors">
                <ChevronLeft size={20} />
              </button>
              <button className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-darkgrey transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Socials */}
      <div className="absolute right-8 bottom-24 hidden md:flex flex-col space-y-4">
        <a href="#" className="text-white text-sm tracking-widest uppercase origin-bottom-right -rotate-90 hover:text-peach transition-colors mb-12">Instagram</a>
        <a href="#" className="text-white text-sm tracking-widest uppercase origin-bottom-right -rotate-90 hover:text-peach transition-colors">Tiktok</a>
      </div>

      {/* Pagination Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div className="w-2 h-2 rounded-full bg-white"></div>
        <div className="w-2 h-2 rounded-full bg-white/40"></div>
        <div className="w-2 h-2 rounded-full bg-white/40"></div>
      </div>
    </section>
  );
};

export default Hero;
