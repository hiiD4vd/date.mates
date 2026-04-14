import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BookingModal from './BookingModal';

const products = [
  { id: 1, category: 'Picnic Sets', title: 'Bohemian Sunset Picnic', price: 'Starts from Rp 250.000', priceValue: 250000, image: 'https://images.unsplash.com/photo-1596706788572-87ce80cdb90a?auto=format&fit=crop&w=600&q=80' },
  { id: 2, category: 'Picnic Sets', title: 'Classic Romance Setup', price: 'Starts from Rp 300.000', priceValue: 300000, image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=600&q=80' },
  { id: 3, category: 'Decorations', title: 'Midnight Starlight Decor', price: 'Starts from Rp 150.000', priceValue: 150000, image: 'https://images.unsplash.com/photo-1510255474663-8a3dcb1db891?auto=format&fit=crop&w=600&q=80' },
  { id: 4, category: 'Decorations', title: 'Rustic Wooden Arch', price: 'Starts from Rp 200.000', priceValue: 200000, image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=600&q=80' },
  { id: 5, category: 'Add-ons', title: 'Polaroid Capture Bundle', price: 'Starts from Rp 100.000', priceValue: 100000, image: 'https://images.unsplash.com/photo-1517424103138-00508eed9fba?auto=format&fit=crop&w=600&q=80' },
  { id: 6, category: 'Picnic Sets', title: 'Garden Tea Party', price: 'Starts from Rp 275.000', priceValue: 275000, image: 'https://images.unsplash.com/photo-1616422285623-1497d519b596?auto=format&fit=crop&w=600&q=80' }
];

const categories = ['All', 'Picnic Sets', 'Decorations', 'Add-ons'];

const ProductCatalog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="packages" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-darkgrey mb-8">Our Packages</h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${activeCategory === cat ? 'bg-darkgrey text-white shadow-md' : 'bg-offwhite text-gray-500 hover:bg-gray-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="group flex flex-col items-center text-center bg-offwhite rounded-t-2xl shadow-sm hover:shadow-lg transition-all duration-300 pb-6 overflow-hidden">
              <div className="w-full aspect-square overflow-hidden mb-6">
                 <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <h3 className="font-sans font-bold text-lg text-darkgrey mb-2 px-4">{product.title}</h3>
              <p className="text-sm text-gray-500 mb-6 font-medium">{product.price}</p>
              
              <button 
                onClick={() => setSelectedProduct(product)}
                className="px-6 py-2 border border-darkgrey rounded-full text-darkgrey text-sm font-semibold hover:bg-darkgrey hover:text-white transition-colors"
              >
                View Package
              </button>
            </div>
          ))}
        </div>
      </div>

      <BookingModal 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        product={selectedProduct} 
      />
    </section>
  );
};

export default ProductCatalog;
