import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BookingModal from './BookingModal';

const products = [
  // Decoration Set (6 items)
  { id: 1, category: 'Decoration Set', title: 'Bohemian<br/>Sunset Picnic', desc: 'An afternoon of bohemian style under the sunset', price: 'Rp 250.000', priceValue: 250000, image: '/assets/images/IMG_1029_jpg.jpg' },
  { id: 2, category: 'Decoration Set', title: 'Classic<br/>Romance Setup', desc: 'A perfect romantic setup for your special day', price: 'Rp 300.000', priceValue: 300000, image: '/assets/images/IMG_1053_jpg.jpg' },
  { id: 3, category: 'Decoration Set', title: 'Midnight<br/>Starlight Decor', desc: 'Watch the stars shine with elegant lighting', price: 'Rp 150.000', priceValue: 150000, image: '/assets/images/IMG_1061_jpg.jpg' },
  { id: 4, category: 'Decoration Set', title: 'Rustic<br/>Wooden Arch', desc: 'Classic wooden touch for a natural aesthetic', price: 'Rp 200.000', priceValue: 200000, image: '/assets/images/0cdfbc84-79f4-4692-92e3-ef77033f5d9c.JPG' },
  { id: 5, category: 'Decoration Set', title: 'Vintage<br/>Lace Canopy', desc: 'A soft lace touch for your dreamy moments', price: 'Rp 220.000', priceValue: 220000, image: '/assets/images/aebf960e-e5ea-49b3-b497-fe6442fa2c34.JPG' },
  { id: 6, category: 'Decoration Set', title: 'Earth & Stone<br/>Centerpiece', desc: 'Minimalist earthy table setting elements', price: 'Rp 120.000', priceValue: 120000, image: '/assets/images/1e8e2f2d-fdd6-4588-b0a5-ad6ec83053ea.JPG' },

  // Our Picnic Set (6 items)
  { id: 7, category: 'Our Picnic Set', title: 'Garden<br/>Tea Party', desc: 'Elegant tea setup around the beautiful nature', price: 'Rp 275.000', priceValue: 275000, image: '/assets/images/aebf960e-e5ea-49b3-b497-fe6442fa2c34.JPG' },
  { id: 8, category: 'Our Picnic Set', title: 'Lakeside<br/>Serenity', desc: 'Cozy blankets and aesthetic pillows for two', price: 'Rp 200.000', priceValue: 200000, image: '/assets/images/1F42A6DD-11EA-4256-8D99-C57D0DC2F04B.jpg' },
  { id: 9, category: 'Our Picnic Set', title: 'Sunrise<br/>Breakfast', desc: 'Start your day with an aesthetic sunrise', price: 'Rp 180.000', priceValue: 180000, image: '/assets/images/228f6c06-96f6-4cfc-b9d3-f2d5eb85da9e.JPG' },
  { id: 10, category: 'Our Picnic Set', title: 'Golden Hour<br/>Setup', desc: 'Perfect warmth and glow for your evening date', price: 'Rp 320.000', priceValue: 320000, image: '/assets/images/34E60EE6-2080-434F-98C8-B1DE0F2B369D.JPG' },
  { id: 11, category: 'Our Picnic Set', title: 'Autumn<br/>Palette', desc: 'Warm rust and dried botanical aesthetic', price: 'Rp 210.000', priceValue: 210000, image: '/assets/images/IMG_1029_jpg.jpg' },
  { id: 12, category: 'Our Picnic Set', title: 'Spring<br/>Blossom', desc: 'Fresh floral designs and bright natural elements', price: 'Rp 240.000', priceValue: 240000, image: '/assets/images/IMG_1053_jpg.jpg' },

  // Board Games (5 items)
  { id: 13, category: 'Board Games', title: 'Aesthetic<br/>Chess Set', desc: 'Custom carved wooden chess for slow minds', price: 'Rp 50.000', priceValue: 50000, image: '/assets/images/IMG_1061_jpg.jpg' },
  { id: 14, category: 'Board Games', title: 'Vintage<br/>Scrabble', desc: 'Word weaving while watching the sunset', price: 'Rp 45.000', priceValue: 45000, image: '/assets/images/aebf960e-e5ea-49b3-b497-fe6442fa2c34.JPG' },
  { id: 15, category: 'Board Games', title: 'Classic<br/>Uno Cards', desc: 'Casual fun moments for your gathering', price: 'Rp 25.000', priceValue: 25000, image: '/assets/images/34E60EE6-2080-434F-98C8-B1DE0F2B369D.JPG' },
  { id: 16, category: 'Board Games', title: 'Wooden<br/>Jenga', desc: 'Thrill and laughter with a wooden classic', price: 'Rp 40.000', priceValue: 40000, image: '/assets/images/0cdfbc84-79f4-4692-92e3-ef77033f5d9c.JPG' },
  { id: 17, category: 'Board Games', title: 'Monopoly<br/>Deluxe', desc: 'Hours of interactive play with your mates', price: 'Rp 60.000', priceValue: 60000, image: '/assets/images/1e8e2f2d-fdd6-4588-b0a5-ad6ec83053ea.JPG' },

  // Additional Items (4 items)
  { id: 18, category: 'Additional Items', title: 'Polaroid<br/>Capture Bundle', desc: 'Capture the wonderful memories forever', price: 'Rp 100.000', priceValue: 100000, image: '/assets/images/34E60EE6-2080-434F-98C8-B1DE0F2B369D.JPG' },
  { id: 19, category: 'Additional Items', title: 'Extra<br/>Comfy Pillows', desc: 'Add more comfort to your outdoor relaxing', price: 'Rp 30.000', priceValue: 30000, image: '/assets/images/1F42A6DD-11EA-4256-8D99-C57D0DC2F04B.jpg' },
  { id: 20, category: 'Additional Items', title: 'Fairy<br/>Lights Add-on', desc: 'Warm glow for the evening ambiance', price: 'Rp 40.000', priceValue: 40000, image: '/assets/images/IMG_1061_jpg.jpg' },
  { id: 21, category: 'Additional Items', title: 'Flower<br/>Bouquet', desc: 'Premium dried flowers centerpiece setup', price: 'Rp 80.000', priceValue: 80000, image: '/assets/images/228f6c06-96f6-4cfc-b9d3-f2d5eb85da9e.JPG' }
];

const categories = ['Decoration Set', 'Our Picnic Set', 'Board Games', 'Additional Items'];
const badgeColors = ['bg-accentYellow', 'bg-accentGreen', 'bg-accentPink'];

const ProductCatalog = () => {
  const [activeCategory, setActiveCategory] = useState('Decoration Set');
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // New state variables for ultimate hybrid navigation
  const [isExpandedView, setIsExpandedView] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  // Filter products by active category
  const filteredProducts = products.filter(p => p.category === activeCategory);
  
  // Decide how many items to show based on standard view vs expanded view
  const displayProducts = isExpandedView 
    ? filteredProducts.slice(0, visibleCount) 
    : filteredProducts.slice(0, 4); // Max 4 for default teaser view

  // Handlers
  const handleCategorySwitch = (cat) => {
    setActiveCategory(cat);
    setIsExpandedView(false); // Reset to teaser view on category switch
    setVisibleCount(6); // Reset pagination counter
  };

  const expandCategory = () => {
    setIsExpandedView(true);
    setVisibleCount(6); // Initial count for expanded view
    window.scrollTo({ top: document.getElementById('packages').offsetTop - 100, behavior: 'smooth' });
  };

  const backToHome = () => {
    setIsExpandedView(false);
    setVisibleCount(6);
    window.scrollTo({ top: document.getElementById('packages').offsetTop - 100, behavior: 'smooth' });
  };

  const loadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <section id="packages" className="max-w-[1400px] mx-auto px-8 py-16 text-center">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-5xl md:text-6xl text-primary leading-tight mb-4"
      >
        {!isExpandedView ? (
          <span className="font-serif italic"><span className="drop-cap">O</span>ur Packages</span>
        ) : (
          <span className="font-serif italic"><span className="drop-cap">A</span>ll {activeCategory}</span>
        )}
      </motion.h2>
      
      {!isExpandedView && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-[13px] text-textGray max-w-sm mx-auto mb-8 leading-relaxed"
        >
          Browse through our collection of premium aesthetic setups, curated<br className="hidden md:block"/>
          specially for unforgettable date moments and gatherings.
        </motion.p>
      )}

      {/* Navigation Controls */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {!isExpandedView ? (
          categories.map(cat => (
            <button 
              key={cat}
              onClick={() => handleCategorySwitch(cat)}
              className={`px-6 py-2.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 border ${activeCategory === cat ? 'bg-primary border-primary text-white shadow-md' : 'bg-transparent border-gray-300 text-textGray hover:border-gray-400 hover:bg-gray-50'}`}
            >
              {cat}
            </button>
          ))
        ) : (
          <button 
            onClick={backToHome}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 border bg-transparent border-primary text-primary hover:bg-primary hover:text-white"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back to Home
          </button>
        )}
      </motion.div>

      {/* Product Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
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
                className="aspect-square bg-gray-200 rounded-[2.5rem] overflow-hidden relative group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300" 
                onClick={() => setSelectedProduct(product)}
            >
                <img 
                    src={product.image} 
                    alt={product.title.replace('<br/>', ' ')} 
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-300"></div>
            
                <div className="absolute top-8 left-8 right-8 flex justify-between items-start z-10 pointer-events-none">
                    <div 
                      className="text-white font-serif text-[28px] italic leading-tight text-left drop-shadow-lg"
                      dangerouslySetInnerHTML={{ __html: product.title }}
                    />
                </div>

                <div className={`absolute bottom-8 right-8 ${badgeColors[index % 3]} text-white px-5 py-4 rounded-[1.5rem] text-[11px] font-medium leading-relaxed max-w-[220px] text-left z-10 shadow-lg transition-transform duration-300 group-hover:-translate-y-2`}>
                   <div className="font-bold mb-1 opacity-95 uppercase tracking-wider text-[12px]">{product.price}</div>
                   <div className="opacity-90">{product.desc}</div>
                </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {/* Hybrid Navigation / Pagination Controls */}
      <motion.div layout>
        {!isExpandedView ? (
           filteredProducts.length > 4 && (
             <button 
               onClick={expandCategory}
               className="px-8 py-3 rounded-full text-[11px] font-bold tracking-widest uppercase transition-all duration-300 border border-primary text-primary hover:bg-primary hover:text-white inline-block shadow-sm"
             >
               See All {activeCategory}
             </button>
           )
        ) : (
           visibleCount < filteredProducts.length && (
             <button 
               onClick={loadMore}
               className="px-10 py-3.5 bg-accentPink text-white rounded-full text-[11px] font-bold tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:bg-opacity-90"
             >
               Load More Items
             </button>
           )
        )}
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
