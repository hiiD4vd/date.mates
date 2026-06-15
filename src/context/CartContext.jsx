import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [duration, setDuration] = useState(''); // Added duration state

  // Calculate total whenever cart changes or duration changes
  const cartTotal = cartItems.reduce((total, item) => {
    let price = item.priceValue;
    if (duration === '24 Hours' && item.price24h) {
      price = item.price24h;
    }
    return total + (price * item.quantity);
  }, 0);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(item => item.id === product.id);
      
      if (existingItemIndex >= 0) {
        // Item exists, update quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        return updatedItems;
      } else {
        // New item
        return [...prevItems, { ...product, quantity }];
      }
    });
    
    // Do not automatically open cart, allow user to keep browsing
    // setIsCartOpen(true);
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const value = {
    cartItems,
    cartTotal,
    cartCount,
    isCartOpen,
    duration,
    setIsCartOpen,
    setDuration,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
