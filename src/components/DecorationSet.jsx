import React from 'react';

const decorations = [
  { id: 1, image: 'https://images.unsplash.com/photo-1596431962326-06830df2b719?auto=format&fit=crop&w=600&q=80' },
  { id: 2, image: 'https://images.unsplash.com/photo-1563241527-390ecba1fb28?auto=format&fit=crop&w=600&q=80' },
  { id: 3, image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=600&q=80' },
];

const DecorationSet = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-darkgrey">Decoration Set</h2>
        
        <div className="relative">
          <div className="flex space-x-6 overflow-x-auto pb-8 snap-x hide-scrollbar smooth-scroll">
            {decorations.map((item) => (
              <div key={item.id} className="min-w-[85vw] md:min-w-[30%] flex-none snap-center relative group rounded-2xl overflow-hidden aspect-square">
                <img 
                  src={item.image} 
                  alt="Decoration setup" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-10 pointer-events-none">
                  <div className="text-[#FF9F1C]/90 font-serif font-bold text-xl drop-shadow-md">
                    date.mates
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* 10-dot pagination indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(10)].map((_, i) => (
              <div 
                key={i} 
                className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-darkgrey' : 'bg-gray-300'}`}
              ></div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-peach text-darkgrey font-semibold rounded-lg px-10 py-4 hover:bg-[#F5A79F] transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
            Request Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default DecorationSet;
