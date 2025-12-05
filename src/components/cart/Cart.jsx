import { useCartContext } from "../../context/CartContext/useCartContext"
import './Cart.css';

export const Cart = () => {
  const { cart, removeItem, clearCart, getTotalPrice } = useCartContext()

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Tu carrito está vacío</h2>
        <p>¡Agrega productos para comenzar!</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Mi Carrito</h2>
      
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item-image" />
            <div className="cart-item-info">
              <h3>{item.title}</h3>
              <p className="cart-item-price">${item.price.toLocaleString('es-AR')}</p>
            </div>
            <button 
              onClick={() => removeItem(item.id)} 
              className="remove-btn"
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Total: ${getTotalPrice().toLocaleString('es-AR')}</h3>
        <button onClick={clearCart} className="clear-cart-btn">
          Vaciar Carrito
        </button>
      </div>
    </div>

  );
};