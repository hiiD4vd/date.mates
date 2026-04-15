import React, { useState } from 'react';
import BookingModal from './BookingModal';

const products = [
  { id: 1, category: 'Picnic Sets', title: 'Bohemian<br/>Sunset Picnic', desc: 'An afternoon of bohemian style under the sunset', price: 'Starts from Rp 250.000', priceValue: 250000, image: '/assets/images/IMG_1029_jpg.jpg' },
  { id: 2, category: 'Picnic Sets', title: 'Classic<br/>Romance Setup', desc: 'A perfect romantic setup for your special day', price: 'Starts from Rp 300.000', priceValue: 300000, image: '/assets/images/IMG_1053_jpg.jpg' },
  { id: 3, category: 'Decorations', title: 'Midnight<br/>Starlight Decor', desc: 'Watch the stars shine with elegant lighting', price: 'Starts from Rp 150.000', priceValue: 150000, image: '/assets/images/IMG_1061_jpg.jpg' },
  { id: 4, category: 'Decorations', title: 'Rustic<br/>Wooden Arch', desc: 'Classic wooden touch for a natural aesthetic', price: 'Starts from Rp 200.000', priceValue: 200000, image: '/assets/images/0cdfbc84-79f4-4692-92e3-ef77033f5d9c.JPG' },
  { id: 5, category: 'Add-ons', title: 'Polaroid<br/>Capture Bundle', desc: 'Capture the wonderful memories forever', price: 'Starts from Rp 100.000', priceValue: 100000, image: '/assets/images/34E60EE6-2080-434F-98C8-B1DE0F2B369D.JPG' },
  { id: 6, category: 'Picnic Sets', title: 'Garden<br/>Tea Party', desc: 'Elegant tea setup around the beautiful nature', price: 'Starts from Rp 275.000', priceValue: 275000, image: '/assets/images/aebf960e-e5ea-49b3-b497-fe6442fa2c34.JPG' }
];

const categories = ['All', 'Picnic Sets', 'Decorations', 'Add-ons'];
const badgeColors = ['bg-accentYellow', 'bg-accentGreen', 'bg-accentPink'];

const ProductCatalog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="packages" className="max-w-[1400px] mx-auto px-8 py-16 text-center">
      <h2 className="text-5xl md:text-6xl text-primary leading-tight mb-4">
          <span className="font-serif italic"><span className="drop-cap">O</span>ur Packages</span>
      </h2>
      <p className="text-[13px] text-textGray max-w-sm mx-auto mb-8 leading-relaxed">
         Browse through our collection of premium aesthetic setups, curated<br className="hidden md:block"/>
         specially for unforgettable date moments and gatherings.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 border ${activeCategory === cat ? 'bg-primary border-primary text-white shadow-md' : 'bg-transparent border-gray-300 text-textGray hover:border-gray-400 hover:bg-gray-50'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {filteredProducts.map((product, index) => (
          <div key={product.id} className="h-[480px] bg-gray-200 rounded-[2.5rem] overflow-hidden relative group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300" onClick={() => setSelectedProduct(product)}>
            <img src={product.image} alt={product.title.replace('<br/>', ' ')} className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-300"></div>
            
            <div className="absolute top-8 left-8 right-8 flex justify-between items-start z-10">
                <div 
                  className="text-white font-serif text-[28px] italic leading-tight text-left drop-shadow-lg"
                  dangerouslySetInnerHTML={{ __html: product.title }}
                />
            </div>

            <div className={`absolute bottom-8 right-8 ${badgeColors[index % 3]} text-white p-5 rounded-2xl text-[11px] font-medium leading-relaxed max-w-[200px] text-left z-10 shadow-lg transition-transform duration-300 group-hover:-translate-y-1`}>
               <div className="font-bold mb-1 opacity-90 uppercase tracking-wider">{product.price}</div>
               <div>{product.desc}</div>
            </div>
          </div>
        ))}
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
