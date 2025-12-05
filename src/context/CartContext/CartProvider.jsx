import { useState } from 'react';
import { CartContext } from './CartContext';

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

    // Verifica si existe
  const exist = (id) => cart.find((p) => p.id === id);

  // Agrega producto con cantidad
  const addItem = (item, quantity = 1) => {
    const productExist = exist(item.id);

    if (productExist) {
      // Si existe → suma cantidades
      const updatedCart = cart.map((prod) =>
        prod.id === item.id
          ? { ...prod, quantity: prod.quantity + quantity }
          : prod
      );
      setCart(updatedCart);
    } else {
      // Si no existe → lo agrega con quantity
      setCart([...cart, { ...item, quantity }]);
    }
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

  // Obtener el Precio total del carrito
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




