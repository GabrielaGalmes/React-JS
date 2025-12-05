import { useCartContext } from '../../context/CartContext/useCartContext';
import { Item } from '../Item/Item';
import './ItemDetail.css';
import { Count } from "../Count/Count"

export const ItemDetail = ({ detail }) => {
  const { addItem } = useCartContext();

  if (!detail || Object.keys(detail).length === 0) return <p>Cargando...</p>;

  const handleAdd = (qty) => {
    addItem({...detail, qty}); // ahora puede agregar productos repetidos
  };

  const handleBuy = () => {
    addItem({ ...detail, qty: 1 });
    alert("Compra realizada");  //  se confirma la compra
  };

  return (
    <div className="item-detail">
      <Item {...detail}>
        
         {/* Contador para agregar varias unidades */}
        <Count btnText="Agregar al carrito" onConfirm={handleAdd} />

        {/* Botón para compra rápida */}
        <button className="btn-buy" onClick={handleBuy}>
          Comprar
        </button>
      </Item>
    </div>
  );
};