import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products, categories, badgeColors } from '../data/products';
import BookingModal from '../components/BookingModal';
import { useCart } from '../context/CartContext';

const PackagesPage = () => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filter out "See All" from categories since we only want to map real categories
  const realCategories = categories.filter(cat => cat !== 'See All');

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-bgLight pt-28 pb-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center mb-16 mt-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-forest font-medium italic mb-4"
          >
            Our Packages
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-500 font-sans max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          >
            Explore our curated collections of aesthetic setups and add-ons designed to make your moments truly unforgettable.
          </motion.p>
        </div>

        {/* Categories Sections */}
        {realCategories.map((category, catIndex) => {
          const categoryProducts = products.filter(p => p.category === category);
          if (categoryProducts.length === 0) return null;

          return (
            <section key={category} className="mb-20">
              {/* Category Title */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="flex items-center mb-8"
              >
                <h2 className="font-serif text-3xl md:text-4xl text-forest font-medium italic pr-6">{category}</h2>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-forest/30 to-transparent"></div>
              </motion.div>

              {/* Product Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
                {categoryProducts.map((product, index) => (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    key={product.id} 
                    className="flex flex-col text-left group cursor-pointer" 
                    onClick={() => setSelectedProduct(product)}
                  >
                    {/* Image Container */}
                    <div className="relative w-full aspect-square bg-gray-100 mb-4 overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <img 
                            src={product.images[0]} 
                            alt={product.title.replace('<br/>', ' ')} 
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                        {/* Add to Cart Overlay Button (appears on hover on desktop) */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center">
                            <button 
                              onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                              className="px-6 py-2 bg-white text-forest text-xs font-bold uppercase tracking-widest shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-forest hover:text-white rounded-full flex items-center gap-2"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                              {product.priceValue === 0 ? 'Request Quote' : 'Add to Cart'}
                            </button>
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col flex-grow px-1">
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider mb-1 font-semibold">{product.category}</span>
                        <h3 
                          className="text-[14px] md:text-[16px] text-gray-800 font-medium leading-snug mb-2"
                          dangerouslySetInnerHTML={{ __html: product.title }}
                        />
                        <div className="text-[13px] md:text-[15px] font-bold text-gray-900 mt-auto">
                            {product.priceValue === 0 ? <span className="text-forest">Harga by Request</span> : product.price}
                        </div>
                        
                        {/* Mobile button */}
                        <button 
                          onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                          className="mt-3 w-full py-2 bg-forest text-white text-[10px] font-bold uppercase tracking-widest flex md:hidden items-center justify-center gap-2 rounded-lg shadow-sm hover:bg-opacity-90 transition-colors"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                          {product.priceValue === 0 ? 'Request' : 'Add to Cart'}
                        </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          );
        })}

      </div>

      <BookingModal 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        product={selectedProduct} 
      />
    </main>
  );
};

export default PackagesPage;
