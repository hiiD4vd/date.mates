import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import BookingModal from './BookingModal';
import { products, categories, badgeColors } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductCatalog = () => {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('See All');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filter products based on active category
  const filteredProducts = activeCategory === 'See All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const displayProducts = filteredProducts.slice(0, 8);

  // Handlers
  const handleCategorySwitch = (cat) => {
    setActiveCategory(cat);
  };

  return (
    <section id="packages" className="max-w-[1400px] mx-auto px-4 md:px-8 py-16 text-center">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-4xl md:text-6xl text-forest leading-tight mb-4"
      >
        <span className="font-serif italic"><span className="drop-cap">O</span>ur Collection</span>
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="text-[12px] md:text-[13px] text-mutedGrey max-w-sm mx-auto mb-8 leading-relaxed"
      >
        Discover curated setups designed to elevate your date moments. Tastefully selected for the best experience.
      </motion.p>

      {/* Navigation Controls */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 pt-4"
      >
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => handleCategorySwitch(cat)}
            className={`px-4 py-2 md:px-6 md:py-2.5 rounded-full text-[9px] md:text-[10px] font-bold tracking-widest uppercase transition-all duration-300 border ${activeCategory === cat ? 'bg-forest border-forest text-white shadow-md' : 'bg-transparent border-gray-300 text-mutedGrey hover:border-gray-400 hover:bg-gray-50'}`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Product Grid - E-Commerce Style */}
      <motion.div 
        layout
        className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12"
      >
        <AnimatePresence mode="popLayout">
            {displayProducts.map((product, index) => (
            <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.5 }}
                key={product.id} 
                className="flex flex-col text-left group cursor-pointer" 
                onClick={() => setSelectedProduct(product)}
            >
                {/* Image Container */}
                <div className="relative w-full aspect-square bg-gray-100 mb-4 overflow-hidden rounded-xl">
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
                      className="mt-3 w-full py-2 border border-gray-200 text-gray-600 text-[10px] font-bold uppercase tracking-widest flex md:hidden items-center justify-center gap-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                      {product.priceValue === 0 ? 'Request' : 'Add to Cart'}
                    </button>
                </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {/* Navigation to Packages Page */}
      <motion.div layout className="flex justify-center mt-4">
        <Link 
          to="/packages"
          className="px-8 py-3 bg-sage text-white rounded-full text-[10px] md:text-[11px] font-bold tracking-widest uppercase transition-all duration-300 shadow-sm hover:shadow-md hover:bg-opacity-90 inline-block"
        >
          See All Packages
        </Link>
      </motion.div>

      <BookingModal 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        product={selectedProduct} 
      />
    </section>
  );
};

export default ProductCatalog;
