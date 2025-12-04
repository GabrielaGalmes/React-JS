import { useState } from 'react';
import { CartContext } from './CartContext';

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Verificar si un producto ya existe en el carrito
  const exist = (id) => {
    return cart.some((p) => p.id === id);
  };

  // Agregar producto al carrito
  const addItem = (item) => {
    if (exist(item.id)) {
      alert('El producto ya existe en el carrito');
      return;
    }
    setCart([...cart, item]);
  };

  // Eliminar un producto del carrito
  const removeItem = (id) => {
    setCart(cart.filter((p) => p.id !== id));
  };

  // Vaciar el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Obtener cantidad total de productos
  const getTotalItems = () => {
    return cart.length;
  };

  // Obtener el total del carrito
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const values = {
    cart,
    addItem,
    removeItem,
    clearCart,
    getTotalItems,
    getTotalPrice
  };

  return (
    <CartContext.Provider value={values}>
      {children}
    </CartContext.Provider>
  );
};




