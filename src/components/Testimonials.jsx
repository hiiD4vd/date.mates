import React from 'react';
import { User } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Column - Testimonial */}
          <div className="w-full lg:w-5/12 flex flex-col pt-8">
            <h3 className="text-xl text-gray-500 font-medium mb-8">What they said?</h3>
            <div className="bg-peach/10 p-10 rounded-2xl relative shadow-sm border border-peach/20">
              <div className="text-6xl text-peach/40 font-serif absolute top-4 left-6 leading-none">"</div>
              <p className="italic text-lg text-darkgrey/80 leading-relaxed relative z-10 font-serif mb-8 pt-4">
                The decoration setup was absolutely enchanting! It made our anniversary celebration incredibly romantic and memorable. Every detail was thoughtfully arranged.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-peach flex items-center justify-center text-white overflow-hidden shadow-sm">
                  <User size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-darkgrey">Sarah & John</h4>
                  <p className="text-sm text-gray-500">Anniversary Date</p>
                </div>
              </div>
            </div>
            {/* Carousel dots */}
            <div className="flex mt-8 space-x-2">
              <div className="w-2 h-2 rounded-full bg-darkgrey"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
          </div>

          {/* Right Column - Why date.mates / Collage */}
          <div className="w-full lg:w-7/12">
            <h2 className="text-4xl md:text-5xl font-serif text-darkgrey mb-8">Why date.mates?</h2>
            <ul className="space-y-4 mb-12">
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-peach flex items-center justify-center text-white mr-4 flex-shrink-0 mt-0.5">✓</span>
                <span className="text-lg text-darkgrey font-medium">We offer you unique date experiences</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-peach flex items-center justify-center text-white mr-4 flex-shrink-0 mt-0.5">✓</span>
                <span className="text-lg text-darkgrey font-medium">We help you to create your moments</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-peach flex items-center justify-center text-white mr-4 flex-shrink-0 mt-0.5">✓</span>
                <span className="text-lg text-darkgrey font-medium">We are your date mates</span>
              </li>
            </ul>

            {/* Collage area */}
            <div className="relative h-[400px] w-full hidden sm:block">
              {/* Decorative shapes */}
              <div className="absolute top-10 left-10 w-12 h-12 rounded-full bg-yellow-300 opacity-50 blur-xl"></div>
              <div className="absolute bottom-20 right-20 w-16 h-16 rounded-full bg-peach opacity-60 blur-xl"></div>
              
              {/* Images masonry/overlap */}
              <div className="absolute top-0 right-0 w-[55%] h-[65%] rounded-2xl overflow-hidden shadow-lg z-20 group">
                <img src="https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&w=600&q=80" alt="Picnic detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="absolute bottom-0 right-[25%] w-[45%] h-[55%] rounded-2xl overflow-hidden shadow-xl z-30 border-4 border-white group mt-8 group">
                <img src="https://images.unsplash.com/photo-1496841733276-80db6e30b135?auto=format&fit=crop&w=600&q=80" alt="Picnic sunset" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="absolute top-[20%] left-0 w-[45%] h-[50%] rounded-2xl overflow-hidden shadow-md z-10 group">
                <img src="https://images.unsplash.com/photo-1522262590532-a991489a0253?auto=format&fit=crop&w=600&q=80" alt="Picnic basket" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
