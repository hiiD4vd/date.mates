import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ADD_ONS = [
  { id: 1, name: 'Custom Sign', price: 20000 },
  { id: 2, name: 'Extra Lamp', price: 15000 },
  { id: 3, name: 'Polaroid Camera + 10 Films', price: 100000 },
  { id: 4, name: 'Premium Cutlery Set', price: 35000 },
];

const TIME_SLOTS = [
  '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'
];

const BookingModal = ({ isOpen, onClose, product }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [basePrice, setBasePrice] = useState(0);

  useEffect(() => {
    if (product && isOpen) {
       // Mocking parse price since current product price is string 'Rp 70.000 - Rp 100.000'
       // For our strict new prices we will provide a solid base price.
       setBasePrice(product.priceValue || 70000); 
    } else {
        setDate('');
        setTime('');
        setSelectedAddOns([]);
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
    if (!date || !time) {
        alert('Please select date and time.');
        return;
    }
    const addOnsText = selectedAddOns.length > 0 
      ? selectedAddOns.map(a => a.name).join(', ') 
      : 'None';
      
    const message = `Hello date.mates, I want to book:
Package: ${product.title}
Date: ${date}
Time: ${time}
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
          className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto overflow-x-hidden flex flex-col md:flex-row shadow-2xl rounded-none"
        >
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 backdrop-blur border border-gray-200 rounded-full flex items-center justify-center text-darkgrey hover:bg-white shadow-sm"
          >
            ✕
          </button>

          {/* Left: Product Details */}
          <div className="w-full md:w-[45%] bg-offwhite p-8 md:p-12 flex flex-col items-center text-center">
            <h3 className="font-serif text-3xl md:text-4xl text-darkgrey mb-6">{product.title}</h3>
            <div className="w-full aspect-[4/3] overflow-hidden bg-gray-200 mb-8 rounded-none shadow-inner">
               <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
            </div>
            <p className="text-gray-500 font-sans leading-relaxed text-sm">
               Experience a breathtaking date setup curated perfectly for you. Our {product.title.toLowerCase()} provides the ultimate aesthetic environment for making memories.
            </p>
          </div>

          {/* Right: Form */}
          <div className="w-full md:w-[55%] p-8 md:p-12 flex flex-col bg-white">
            <h4 className="font-sans font-bold text-xl text-darkgrey mb-8 uppercase tracking-widest border-b pb-4">Configure Your Date</h4>
            
            <div className="space-y-6 flex-grow">
              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Select Date</label>
                    <input 
                      type="date" 
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full border border-gray-200 bg-offwhite rounded-none px-4 py-3 text-darkgrey focus:outline-none focus:border-peach focus:ring-1 focus:ring-peach transition-colors"
                    />
                 </div>
                 <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Select Time</label>
                    <select 
                       value={time}
                       onChange={(e) => setTime(e.target.value)}
                       className="w-full border border-gray-200 bg-offwhite rounded-none px-4 py-3 text-darkgrey focus:outline-none focus:border-peach focus:ring-1 focus:ring-peach transition-colors"
                    >
                       <option value="" disabled>Choose time</option>
                       {TIME_SLOTS.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                 </div>
              </div>

              {/* Add-ons */}
              <div className="pt-4">
                 <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Enhance with Add-ons</label>
                 <div className="space-y-3">
                    {ADD_ONS.map(addon => (
                       <label key={addon.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-none cursor-pointer hover:border-peach/50 hover:bg-peach/5 transition-colors">
                          <div className="flex items-center">
                             <input 
                               type="checkbox" 
                               checked={!!selectedAddOns.find(a => a.id === addon.id)}
                               onChange={() => toggleAddOn(addon)}
                               className="w-5 h-5 rounded-none border-gray-300 text-peach focus:ring-peach accent-peach"
                             />
                             <span className="ml-3 text-darkgrey font-medium">{addon.name}</span>
                          </div>
                          <span className="text-gray-500 text-sm">+{formatRupiah(addon.price)}</span>
                       </label>
                    ))}
                 </div>
              </div>
            </div>

            {/* Summary & Checkout */}
            <div className="mt-12 pt-6 border-t border-gray-100">
               <div className="flex justify-between items-end mb-6">
                 <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest">Total Investment</span>
                    <span className="font-serif text-3xl md:text-4xl text-darkgrey font-bold">{formatRupiah(calculateTotal())}</span>
                 </div>
               </div>
               
               <button 
                 onClick={handleWhatsAppCheckout}
                 className="w-full flex items-center justify-center bg-green-500 text-white font-bold py-4 rounded-none shadow hover:bg-green-600 transition-all duration-300 transform hover:-translate-y-1"
               >
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Book via WhatsApp
               </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BookingModal;
