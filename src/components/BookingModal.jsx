import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ADD_ONS = [
  { id: 1, name: 'Custom Sign', price: 20000 },
  { id: 2, name: 'Extra Lamp', price: 15000 },
  { id: 3, name: 'Polaroid Camera + 10 Films', price: 100000 },
  { id: 4, name: 'Premium Cutlery Set', price: 35000 },
];

const RENTAL_DURATIONS = ['12 Hours', '24 Hours'];

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  if (!images || images.length === 0) return <div className="w-full h-full bg-gray-200"></div>;

  return (
    <div className="relative w-full h-full group overflow-hidden bg-gray-100">
       <AnimatePresence mode="wait">
          <motion.img 
            key={currentIndex}
            src={images[currentIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
       </AnimatePresence>
       {images.length > 1 && (
         <>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/70 backdrop-blur rounded-full flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity hover:bg-white text-forest shadow-sm">
            <svg className="w-4 h-4 md:w-5 md:h-5 mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/70 backdrop-blur rounded-full flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity hover:bg-white text-forest shadow-sm">
            <svg className="w-4 h-4 md:w-5 md:h-5 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
             {images.map((_, idx) => (
                <div key={idx} className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? 'bg-white' : 'bg-white/50 border border-black/10'}`} />
             ))}
          </div>
         </>
       )}
    </div>
  );
};

const BookingModal = ({ isOpen, onClose, product }) => {
  const [step, setStep] = useState(1); // 1 = Details, 2 = Form
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [duration, setDuration] = useState('');
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [basePrice, setBasePrice] = useState(0);

  useEffect(() => {
    if (product && isOpen) {
       setBasePrice(product.priceValue || 70000); 
       setStep(1);
    } else {
        setName('');
        setAddress('');
        setDate('');
        setDuration('');
        setSelectedAddOns([]);
        setStep(1);
    }
  }, [product, isOpen]);

  const toggleAddOn = (addon) => {
    if (selectedAddOns.find(a => a.id === addon.id)) {
      setSelectedAddOns(selectedAddOns.filter(a => a.id !== addon.id));
    } else {
      setSelectedAddOns([...selectedAddOns, addon]);
    }
  };

  const calculateTotal = () => {
    let total = basePrice;
    selectedAddOns.forEach(addon => {
      total += addon.price;
    });
    return total;
  };

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(number);
  };

  const handleWhatsAppCheckout = () => {
    if (!name || !address || !date || !duration) {
        alert('Please fill in all required fields (Name, Address, Date, and Duration).');
        return;
    }
    const addOnsText = selectedAddOns.length > 0 
      ? selectedAddOns.map(a => a.name).join(', ') 
      : 'None';
      
    const message = `Hello date.mates, I want to book:
Package: ${product.title.replace(/<br\/>/g, ' ')}
Name: ${name}
Address: ${address}
Date: ${date}
Duration: ${duration}
Add-ons: ${addOnsText}
Total: ${formatRupiah(calculateTotal())}

Is this available?`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6285163565305?text=${encodedMessage}`, '_blank');
  };

  if (!isOpen || !product) return null;

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
            <AnimatePresence mode="wait">
              {step === 1 ? (
                // Step 1: Details & Terms
                <motion.div 
                  key="details"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
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
                    </div>
                    {/* Spacer to prevent content from hiding behind the fixed CTA */}
                    <div className="h-[105px] w-full flex-shrink-0"></div>
                  </div>

                  {/* Fixed bottom CTA for step 1 */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-white via-white to-transparent pointer-events-none">
                     <button 
                       onClick={() => setStep(2)}
                       className="w-full flex items-center justify-center bg-sage text-white font-bold py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 pointer-events-auto"
                     >
                        Continue to Booking
                     </button>
                  </div>
                </motion.div>
              ) : (
                // Step 2: Form
                <motion.div 
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex flex-col bg-white"
                >
                  {/* Fixed Header in Form */}
                  <div className="px-8 pt-8 md:px-12 md:pt-12 bg-white pb-4 border-b border-gray-100 flex items-center">
                     <button 
                       onClick={() => setStep(1)}
                       className="text-xs font-bold text-forest uppercase tracking-widest hover:underline flex items-center gap-1 mr-4"
                     >
                       <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                       Back
                     </button>
                     <h4 className="font-sans font-bold text-lg md:text-xl text-forest uppercase tracking-widest">
                       Configure Date
                     </h4>
                  </div>

                  <div className="p-8 md:p-12 overflow-y-auto flex-1 min-h-0">
                    <div className="space-y-6">
                      {/* Personal Info */}
                      <div className="grid grid-cols-1 gap-6">
                         <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Full Name</label>
                             <input 
                              type="text" 
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="e.g. Jane Doe"
                              className="w-full border border-gray-200 bg-[#FDFBF7] rounded-xl px-4 py-3 text-forest focus:outline-none focus:border-dustyRose focus:ring-1 focus:ring-dustyRose transition-colors text-sm"
                            />
                         </div>
                         <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Delivery/Setup Address</label>
                             <textarea 
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                              placeholder="e.g. Jl. Sudirman No. 123, Jakarta"
                              rows={2}
                              className="w-full border border-gray-200 bg-[#FDFBF7] rounded-xl px-4 py-3 text-forest focus:outline-none focus:border-dustyRose focus:ring-1 focus:ring-dustyRose transition-colors text-sm resize-none"
                            />
                         </div>
                      </div>

                      {/* Date & Time */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                         <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Select Date</label>
                             <input 
                              type="date" 
                              value={date}
                              onChange={(e) => setDate(e.target.value)}
                              className="w-full border border-gray-200 bg-[#FDFBF7] rounded-xl px-4 py-3 text-forest focus:outline-none focus:border-dustyRose focus:ring-1 focus:ring-dustyRose transition-colors text-sm"
                            />
                         </div>
                         <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Rental Duration</label>
                            <select 
                               value={duration}
                               onChange={(e) => setDuration(e.target.value)}
                               className="w-full border border-gray-200 bg-[#FDFBF7] rounded-xl px-4 py-3 text-forest focus:outline-none focus:border-dustyRose focus:ring-1 focus:ring-dustyRose transition-colors text-sm"
                            >
                               <option value="" disabled>Choose duration</option>
                               {RENTAL_DURATIONS.map(dur => <option key={dur} value={dur}>{dur}</option>)}
                            </select>
                         </div>
                      </div>

                      {/* Add-ons */}
                      <div className="pt-2">
                         <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Enhance with Add-ons</label>
                         <div className="space-y-3">
                            {ADD_ONS.map(addon => (
                               <label key={addon.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-2xl cursor-pointer hover:border-dustyRose hover:bg-dustyRose/5 transition-all duration-300">
                                  <div className="flex items-center">
                                     <input 
                                       type="checkbox" 
                                       checked={!!selectedAddOns.find(a => a.id === addon.id)}
                                       onChange={() => toggleAddOn(addon)}
                                       className="w-5 h-5 rounded-md border-gray-300 text-dustyRose focus:ring-dustyRose accent-dustyRose"
                                     />
                                     <span className="ml-3 text-forest font-medium text-sm">{addon.name}</span>
                                  </div>
                                  <span className="text-gray-500 text-sm">+{formatRupiah(addon.price)}</span>
                               </label>
                            ))}
                         </div>
                      </div>
                    </div>
                    {/* Spacer for fixed bottom CTA */}
                    <div className="h-[155px] w-full flex-shrink-0"></div>
                  </div>

                  {/* Summary & Checkout fixed at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-6 md:p-8">
                     <div className="flex justify-between items-end mb-4">
                       <div>
                          <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Total Investment</span>
                          <span className="font-serif text-2xl md:text-3xl text-forest font-bold">{formatRupiah(calculateTotal())}</span>
                       </div>
                     </div>
                     
                     <button 
                       onClick={handleWhatsAppCheckout}
                       className="w-full flex items-center justify-center bg-[#25D366] text-white font-bold py-4 rounded-full shadow-md hover:bg-[#1EBE5A] hover:shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all duration-300"
                     >
                        <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Book via WhatsApp
                     </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BookingModal;
