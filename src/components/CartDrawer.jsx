import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';
import { useCart } from '../context/CartContext';

const RENTAL_DURATIONS = ['12 Hours', '24 Hours'];

const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [duration, setDuration] = useState('');

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(number);
  };

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;
    
    if (!name || !address || !date || !duration) {
      alert('Please fill in all required fields (Name, Address, Date, and Duration).');
      return;
    }

    const itemsText = cartItems.map(item => `- ${item.quantity}x ${item.title.replace(/<br\/>/g, ' ')} (${formatRupiah(item.priceValue * item.quantity)})`).join('\n');
    
    const message = `Hello date.mates, I would like to book:
    
*Order Summary:*
${itemsText}

*Total:* ${formatRupiah(cartTotal)}

*Customer Details:*
Name: ${name}
Address: ${address}
Date: ${date}
Duration: ${duration}

Is this available?`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6285163565305?text=${encodedMessage}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110]"
            onClick={() => setIsCartOpen(false)}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-white z-[120] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-cream">
              <h2 className="font-serif text-2xl italic text-forest">Your Cart</h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-forest shadow-sm hover:bg-gray-50 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Cart Items & Form */}
            <div className="flex-1 overflow-y-auto bg-white">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                  <div className="w-20 h-20 mb-4 rounded-full bg-cream flex items-center justify-center">
                    <svg className="w-10 h-10 text-dustyRose" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                  </div>
                  <h3 className="text-lg font-bold text-forest mb-2">Your cart is empty</h3>
                  <p className="text-sm text-gray-500 mb-6">Looks like you haven't added any picnic sets or items yet.</p>
                  <HashLink 
                    to="/#packages"
                    onClick={() => setIsCartOpen(false)}
                    className="px-6 py-2.5 bg-forest text-white rounded-full text-[11px] font-bold tracking-widest uppercase transition-all hover:bg-opacity-90 inline-block"
                  >
                    Continue Browsing
                  </HashLink>
                </div>
              ) : (
                <div className="p-6">
                  <div className="space-y-4 mb-8">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 border-b border-gray-100 pb-2">Selected Items</h3>
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <img src={item.images[0]} alt="product" className="w-20 h-20 object-cover rounded-xl bg-cream" />
                        <div className="flex-1">
                          <h4 className="text-sm font-bold text-forest leading-tight mb-1" dangerouslySetInnerHTML={{ __html: item.title }} />
                          <div className="text-dustyRose font-medium text-xs mb-2">{formatRupiah(item.priceValue)}</div>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                              <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-0.5 bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors">-</button>
                              <span className="px-2 text-xs font-medium min-w-[24px] text-center">{item.quantity}</span>
                              <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-0.5 bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors">+</button>
                            </div>
                            <button onClick={() => removeFromCart(item.id)} className="text-xs text-gray-400 hover:text-red-500 transition-colors underline">Remove</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Form */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 border-b border-gray-100 pb-2">Booking Details</h3>
                    <div>
                      <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Full Name</label>
                      <input 
                        type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Jane Doe"
                        className="w-full border border-gray-200 bg-[#FDFBF7] rounded-xl px-4 py-2.5 text-forest focus:outline-none focus:border-dustyRose focus:ring-1 focus:ring-dustyRose text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Delivery/Setup Address</label>
                      <textarea 
                        value={address} onChange={(e) => setAddress(e.target.value)} placeholder="e.g. Jl. Sudirman No. 123" rows={2}
                        className="w-full border border-gray-200 bg-[#FDFBF7] rounded-xl px-4 py-2.5 text-forest focus:outline-none focus:border-dustyRose focus:ring-1 focus:ring-dustyRose text-sm resize-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Date</label>
                        <input 
                          type="date" value={date} onChange={(e) => setDate(e.target.value)}
                          className="w-full border border-gray-200 bg-[#FDFBF7] rounded-xl px-3 py-2.5 text-forest focus:outline-none focus:border-dustyRose focus:ring-1 focus:ring-dustyRose text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Duration</label>
                        <select 
                          value={duration} onChange={(e) => setDuration(e.target.value)}
                          className="w-full border border-gray-200 bg-[#FDFBF7] rounded-xl px-3 py-2.5 text-forest focus:outline-none focus:border-dustyRose focus:ring-1 focus:ring-dustyRose text-sm"
                        >
                          <option value="" disabled>Select</option>
                          {RENTAL_DURATIONS.map(dur => <option key={dur} value={dur}>{dur}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="h-[20px]"></div>
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="border-t border-gray-100 bg-white p-6 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
                <div className="flex justify-between items-end mb-4">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Total Investment</span>
                  <span className="font-serif text-2xl text-forest font-bold">{formatRupiah(cartTotal)}</span>
                </div>
                <button 
                  onClick={handleWhatsAppCheckout}
                  className="w-full flex items-center justify-center bg-[#25D366] text-white font-bold py-3.5 rounded-full shadow-md hover:bg-[#1EBE5A] hover:shadow-lg transition-all"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  Book via WhatsApp
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
