
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/useCartContext';
import './Nav.css';

export const Nav = () => {
  const { getTotalItems } = useCartContext();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          🛍️ Mi Tienda
        </Link>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/category/Zapatillas" className="nav-link">
              Zapatillas
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/category/Borcegos" className="nav-link">
              Borcegos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/category/Botas" className="nav-link">
              Botas
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/category/Sandalias" className="nav-link">
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
}




