
// ...existing code...
import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, qty = 1) => {
    setCart(prev => {
      const idx = prev.findIndex(p => p.id === item.id);
      if (idx > -1) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: (copy[idx].qty || 0) + qty };
        return copy;
      }
      return [...prev, { ...item, qty }];
    });
  };

  const removeItem = id => setCart(prev => prev.filter(i => i.id !== id));
  const clear = () => setCart([]);
  const getQuantity = () => cart.reduce((s, i) => s + (i.qty || 0), 0);
  const totalPrice = () => cart.reduce((s, i) => s + (i.qty || 0) * (i.price || 0), 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, getQuantity, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
// ...existing code...
