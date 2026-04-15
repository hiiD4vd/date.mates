import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BookingModal from './BookingModal';

const products = [
  { id: 1, category: 'Picnic Sets', title: 'Bohemian Sunset Picnic', price: 'Starts from Rp 250.000', priceValue: 250000, image: '/assets/images/IMG_1029_jpg.jpg' },
  { id: 2, category: 'Picnic Sets', title: 'Classic Romance Setup', price: 'Starts from Rp 300.000', priceValue: 300000, image: '/assets/images/IMG_1053_jpg.jpg' },
  { id: 3, category: 'Decorations', title: 'Midnight Starlight Decor', price: 'Starts from Rp 150.000', priceValue: 150000, image: '/assets/images/IMG_1061_jpg.jpg' },
  { id: 4, category: 'Decorations', title: 'Rustic Wooden Arch', price: 'Starts from Rp 200.000', priceValue: 200000, image: '/assets/images/0cdfbc84-79f4-4692-92e3-ef77033f5d9c.JPG' },
  { id: 5, category: 'Add-ons', title: 'Polaroid Capture Bundle', price: 'Starts from Rp 100.000', priceValue: 100000, image: '/assets/images/34E60EE6-2080-434F-98C8-B1DE0F2B369D.JPG' },
  { id: 6, category: 'Picnic Sets', title: 'Garden Tea Party', price: 'Starts from Rp 275.000', priceValue: 275000, image: '/assets/images/aebf960e-e5ea-49b3-b497-fe6442fa2c34.JPG' }
];

const categories = ['All', 'Picnic Sets', 'Decorations', 'Add-ons'];

const ProductCatalog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="packages" className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-darkgrey mb-8">Our Packages</h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${activeCategory === cat ? 'bg-darkgrey text-white shadow-md' : 'bg-white text-darkgrey/70 border border-orange-100 hover:bg-orange-50'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="group flex flex-col items-center text-center bg-white rounded-t-2xl shadow-[0_4px_20px_rgba(139,69,19,0.05)] hover:shadow-[0_8px_30px_rgba(139,69,19,0.1)] border border-orange-50 transition-all duration-300 pb-6 overflow-hidden">
              <div className="w-full aspect-square overflow-hidden mb-6">
                 <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <h3 className="font-sans font-bold text-lg text-darkgrey mb-2 px-4">{product.title}</h3>
              <p className="text-sm text-gray-500 mb-6 font-medium">{product.price}</p>
              
              <button 
                onClick={() => setSelectedProduct(product)}
                className="px-6 py-2 bg-peach text-white rounded-full text-sm font-semibold hover:bg-terracotta hover:shadow-md transition-all shadow-sm"
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
