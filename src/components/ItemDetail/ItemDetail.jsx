import { useCartContext } from '../../context/CartContext/useCartContext';
import { Item } from '../Item/Item';
import './ItemDetail.css';
import { Count } from "../Count/Count"
import { useNavigate } from 'react-router-dom';

export const ItemDetail = ({ detail }) => {
  const { addItem } = useCartContext();

   const navigate = useNavigate();

  if (!detail || Object.keys(detail).length === 0) return <p>Cargando...</p>;

  const handleAdd = (qty) => {
    addItem({...detail, qty}); // ahora puede agregar productos repetidos
  };

  const handleBuy = () => {
    addItem({ ...detail, qty: 1 });
    alert("Compra realizada"); //  se confirma la compra
    
    navigate('/cart'); // redirige al carrito
  
  };

  const handleContinue = () => {
    navigate('/'); // redirige a home
  };

  return (
    <div className="item-detail">
      <Item {...detail}>
        
         {/* Contador para agregar varias unidades */}
        <Count btnText="Agregar al carrito" onConfirm={handleAdd} />

        <div className="detail-buttons">
          {/* Botón para compra rápida */}
          <button className="btn-buy" onClick={handleBuy}>
            Finalizar Compra
          </button>

          <button className="btn-continue" onClick={handleContinue}>
            Seguir comprando
          </button>

        </div>
      </Item>
    </div>
  );
};