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

  const displayProducts = filteredProducts.slice(0, 6);

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

      {/* Product Grid - 2 columns on mobile, 3 on md, 4 on lg optional (currently 3) */}
      <motion.div 
        layout
        className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 mb-12"
      >
        <AnimatePresence mode="popLayout">
            {displayProducts.map((product, index) => (
            <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                key={product.id} 
                className="aspect-[4/5] md:aspect-square bg-gray-200 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden relative group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300" 
                onClick={() => setSelectedProduct(product)}
            >
                <img 
                    src={product.images[0]} 
                    alt={product.title.replace('<br/>', ' ')} 
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent group-hover:via-black/20 transition duration-300"></div>
            
                <div className="absolute top-4 left-4 right-4 md:top-8 md:left-8 md:right-8 flex justify-between items-start z-10 pointer-events-none">
                    <div 
                      className="text-white font-serif text-[18px] md:text-[28px] italic leading-tight text-left drop-shadow-md"
                      dangerouslySetInnerHTML={{ __html: product.title }}
                    />
                </div>

                <div className={`absolute bottom-4 left-4 right-4 md:bottom-8 md:right-8 md:left-auto ${badgeColors[index % 3]} text-white px-3 py-2.5 md:px-5 md:py-4 rounded-[1rem] md:rounded-[1.5rem] text-[9px] md:text-[11px] font-medium leading-relaxed max-w-full md:max-w-[220px] text-left z-10 shadow-lg transition-transform duration-300 group-hover:-translate-y-1 md:group-hover:-translate-y-2 backdrop-blur-sm bg-opacity-90`}>
                   <div className="font-bold mb-0.5 md:mb-1 opacity-95 uppercase tracking-wider text-[10px] md:text-[12px]">{product.price}</div>
                   <div className="opacity-90 line-clamp-2 md:line-clamp-none mb-2">{product.desc}</div>
                   <button 
                     onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                     className="flex items-center justify-center gap-1.5 w-full py-1.5 md:py-2 bg-white/20 hover:bg-white/40 rounded-lg text-[9px] md:text-[10px] font-bold uppercase tracking-wider transition-colors backdrop-blur-md"
                   >
                     <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                     Add to Cart
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
