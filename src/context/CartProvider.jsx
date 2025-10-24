import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const exist = (id) => cart.some((p) => p.id === id);
  const addItem = (item) => {
    if (exist(item.id)) return alert('Ya está en el carrito');
    setCart([...cart, item]);
  };
  const clearCart = () => setCart([]);
  const getTotalItems = () => cart.length;

  return (
    <CartContext.Provider value={{ cart, addItem, clearCart, getTotalItems }}>
      {children}
    </CartContext.Provider>
  );
};




