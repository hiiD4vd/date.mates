import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#" className="font-serif text-2xl font-bold text-darkgrey flex items-center">
            date<span className="text-peach mx-0.5 mt-2">.</span>mates
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-sm uppercase font-semibold text-darkgrey hover:text-peach transition-colors">Home</a>
          <a href="#" className="text-sm uppercase font-semibold text-darkgrey hover:text-peach transition-colors">By Datemates</a>
          <a href="#" className="text-sm uppercase font-semibold text-darkgrey hover:text-peach transition-colors">Date Ideas</a>
          <a href="#" className="text-sm uppercase font-semibold text-darkgrey hover:text-peach transition-colors">Moments</a>
          <a href="#" className="text-sm uppercase font-semibold text-darkgrey hover:text-peach transition-colors">Gift</a>
          <a href="#" className="text-sm uppercase font-semibold text-darkgrey hover:text-peach transition-colors">Blog</a>
          <a href="#" className="text-sm uppercase font-bold text-darkgrey bg-peach/30 px-4 py-2 rounded-full hover:bg-peach/50 transition-colors">
            Collaborate with Us
          </a>
        </nav>

        {/* Mobile menu button (placeholder) */}
        <div className="md:hidden flex items-center">
          <button className="text-darkgrey focus:outline-none hover:text-peach transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
