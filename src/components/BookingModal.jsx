import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Carousel = ({ images }) => {
  if (!images || images.length === 0) return <div className="w-full h-full bg-gray-200"></div>;

  if (images.length === 1) {
    return (
      <div className="w-full h-full bg-gray-100">
        <img src={images[0]} alt="Product" className="w-full h-full object-cover" />
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-gray-100 relative group/swiper">
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation
        className="w-full h-full"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx} className="w-full h-full">
            <img 
              src={img} 
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const BookingModal = ({ isOpen, onClose, product }) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  // Reset isAdded when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsAdded(false);
    }
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    
    // Close modal after a short delay so user sees the success state
    setTimeout(() => {
      onClose();
    }, 800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        ></motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative bg-white w-full max-w-5xl h-[90vh] md:h-[80vh] flex flex-col md:flex-row shadow-[0_15px_40px_rgba(139,69,19,0.2)] rounded-[2rem] md:rounded-[3rem] overflow-hidden"
        >
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/80 backdrop-blur border border-orange-100 rounded-full flex items-center justify-center text-forest hover:bg-warmPeach hover:text-white hover:border-warmPeach shadow-sm transition-colors"
          >
            ✕
          </button>

          {/* Left: Product Images */}
          <div className="w-full h-64 md:h-full md:w-1/2 flex-shrink-0 bg-[#FDFBF7]">
             <Carousel images={product.images || [product.image]} />
          </div>

          {/* Right: Content Area */}
          <div className="w-full md:w-1/2 flex-1 md:h-full flex flex-col relative overflow-hidden bg-white">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute inset-0 flex flex-col bg-white"
            >
              <div className="p-8 md:p-12 overflow-y-auto flex-1 min-h-0">
                <h3 
                   className="font-serif text-3xl md:text-4xl text-forest font-medium italic mb-2"
                   dangerouslySetInnerHTML={{ __html: product.title }}
                />
                <div className="text-xl font-bold text-forest mb-6">{product.price}</div>
                
                <p className="text-gray-600 font-sans leading-relaxed text-sm mb-8">
                   {product.desc}. Experience a breathtaking setup curated perfectly for you. Our collection provides the ultimate aesthetic environment for making memories.
                </p>

                <div className="space-y-6">
                   {product.category !== 'Board Games' && product.category !== 'Additional Items' && (
                     <>
                       <div>
                          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">What's Included</h4>
                          <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                            <li>Premium aesthetic main setup</li>
                            <li>Comfortable seating & cushions</li>
                            <li>Tableware & minimal decorations</li>
                            <li>2 hours complimentary setup time beforehand</li>
                          </ul>
                       </div>

                       <div>
                          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Terms & Conditions</h4>
                          <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                            <li>Booking must be made at least D-3</li>
                            <li>Down payment of 50% is required</li>
                            <li>Valid for max 2-4 persons (depends on set)</li>
                            <li>Venue rental is not included</li>
                          </ul>
                       </div>
                     </>
                   )}
                </div>
                {/* Spacer to prevent content from hiding behind the fixed CTA */}
                <div className="h-[105px] w-full flex-shrink-0"></div>
              </div>

              {/* Fixed bottom CTA for step 1 */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-white via-white to-transparent pointer-events-none">
                 <button 
                   onClick={handleAddToCart}
                   disabled={isAdded}
                   className={`w-full flex items-center justify-center gap-2 font-bold py-4 rounded-full shadow-md transition-all duration-300 pointer-events-auto ${isAdded ? 'bg-forest text-white' : 'bg-sage text-white hover:bg-forest hover:shadow-lg'}`}
                 >
                    {isAdded ? (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        Added to Cart!
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        Add to Cart
                      </>
                    )}
                 </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BookingModal;
