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
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
                {categoryProducts.map((product, index) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
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
                         className="flex items-center justify-center gap-1.5 w-full py-1.5 md:py-2 bg-white hover:bg-gray-100 text-forest rounded-lg text-[9px] md:text-[10px] font-bold uppercase tracking-wider transition-colors shadow-sm"
                       >
                         <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                         Add to Cart
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
