import React from 'react';

const products = [
  { id: 1, title: 'Basic Set', price: 'Rp 70.000 - Rp 100.000', image: 'https://images.unsplash.com/photo-1579633842323-8cfdbad136d7?auto=format&fit=crop&w=400&q=80' },
  { id: 2, title: 'Movie Night Decoration', price: 'Rp 150.000 - Rp 250.000', image: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&w=400&q=80' },
  { id: 3, title: 'Romantic Dinner', price: 'Rp 200.000 - Rp 350.000', image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=400&q=80' },
  { id: 4, title: 'Group Picnic', price: 'Rp 250.000 - Rp 450.000', image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=400&q=80' },
];

const ProductCatalog = () => {
  return (
    <section className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-darkgrey">Our Picnic Set</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col group bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="relative aspect-square mb-6 overflow-hidden rounded-lg">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-2 left-2 z-10 pointer-events-none">
                  <div className="text-[#FF9F1C]/90 font-serif font-bold text-sm drop-shadow-md">
                    date.mates
                  </div>
                </div>
              </div>
              <div className="text-center flex-grow flex flex-col justify-between">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-medium">Our set</p>
                  <h3 className="font-bold text-lg text-darkgrey mb-1">{product.title}</h3>
                  <p className="text-gray-500 text-sm mb-6">{product.price}</p>
                </div>
                <button className="bg-peach/80 text-darkgrey text-sm font-semibold rounded-lg px-6 py-2.5 hover:bg-peach transition-colors mx-auto w-4/5">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center items-center space-x-2">
          <button className="w-10 h-10 flex items-center justify-center rounded border border-gray-300 text-gray-500 bg-white hover:bg-gray-50 hover:text-darkgrey transition-colors">1</button>
          <button className="w-10 h-10 flex items-center justify-center rounded border border-transparent text-gray-500 hover:text-darkgrey transition-colors">2</button>
          <button className="w-10 h-10 flex items-center justify-center rounded border border-transparent text-gray-500 hover:text-darkgrey transition-colors">3</button>
          <span className="text-gray-400">...</span>
          <button className="w-10 h-10 flex items-center justify-center rounded border border-transparent text-gray-500 hover:text-darkgrey transition-colors">→</button>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
