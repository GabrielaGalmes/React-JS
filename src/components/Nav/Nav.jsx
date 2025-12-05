
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext/useCartContext';
import './Nav.css';

export const Nav = () => {
  const { getTotalItems } = useCartContext();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              🛍️ Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/category/Zapatillas" >
              Zapatillas
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/category/Borcegos" >
              Borcegos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/category/Pantubotas&Botinetas" >
              Pantubotas y Botinetas
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/category/Sandalias" >
              Sandalias
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link cart-link">
              🛒 Carrito
              {getTotalItems() > 0 && (
                <span className="cart-badge">{getTotalItems()}</span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};




