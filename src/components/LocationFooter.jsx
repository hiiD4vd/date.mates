import React from 'react';

const LocationFooter = () => {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-darkgrey mb-4">Our Location</h2>
          <p className="text-gray-500 mb-10 font-medium">Bandung, Indonesia</p>
          
          <div className="w-full h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-inner relative">
            {/* Placeholder for Google Maps iframe */}
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 flex-col">
               <svg className="w-12 h-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
               </svg>
               <span className="text-gray-500 font-medium">Google Maps Embed Placeholder</span>
               <span className="text-sm text-gray-400">Bandung, West Java, Indonesia</span>
               
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d126748.60965008544!2d107.57311709400263!3d-6.903449459384915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Bandung%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1689255823075!5m2!1sen!2sid" 
                className="absolute inset-0 w-full h-full opacity-80"
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="bg-white border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-darkgrey/60 text-sm font-medium order-2 md:order-1 mt-4 md:mt-0 flex-1 text-center font-sans tracking-wide">
            Copyright © 2026 Datemates
          </div>
          <div className="flex items-center space-x-6 order-1 md:order-2">
            <a href="#" className="text-darkgrey/60 hover:text-peach transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-music-2"><circle cx="8" cy="18" r="4"/><path d="M12 18V2l7 4"/></svg>
            </a>
            <a href="#" className="text-darkgrey/60 hover:text-peach transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LocationFooter;
