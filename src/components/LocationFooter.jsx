import React from 'react';

const LocationFooter = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Map Placeholder */}
          <div>
            <h4 className="font-serif text-2xl text-darkgrey mb-6">Find Us</h4>
            <div className="w-full h-48 bg-gray-100 rounded flex items-center justify-center border border-gray-200">
               <span className="text-gray-400 font-medium text-sm border-b border-gray-300 pb-1">Map Integration Placeholder</span>
            </div>
            <p className="mt-4 text-gray-500 text-sm">Jl. Setiabudi No. 123, Bandung, Indonesia</p>
          </div>
          
          {/* Links */}
          <div className="flex flex-col justify-between md:items-end md:text-right">
             <div className="mb-8 md:mb-0">
               <a href="#" className="font-serif text-3xl font-bold text-darkgrey block mb-4">
                  date<span className="text-rose-300 mx-0.5 mt-2">.</span>mates
               </a>
               <p className="text-gray-500 text-sm max-w-xs md:ml-auto">Create unforgettable moments with our premium aesthetic setups.</p>
             </div>
             
             <ul className="flex space-x-6 mt-6 md:mt-0">
                <li><a href="#" className="text-gray-400 hover:text-darkgrey transition-colors text-sm font-semibold">Instagram</a></li>
                <li><a href="#" className="text-gray-400 hover:text-darkgrey transition-colors text-sm font-semibold">TikTok</a></li>
                <li><a href="#" className="text-gray-400 hover:text-darkgrey transition-colors text-sm font-semibold">WhatsApp</a></li>
             </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} date.mates. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="hover:text-darkgrey transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-darkgrey transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LocationFooter;
