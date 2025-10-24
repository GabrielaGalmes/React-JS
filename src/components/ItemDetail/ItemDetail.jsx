import { useCartContext } from '../../context/useCartContext';
import { Item } from '../Item/Item';
import './ItemDetail.css';

export const ItemDetail = ({ detail }) => {
  const { addItem } = useCartContext();


  return (
    <div className="item-detail">
      <Item {...detail}>
        <button onClick={() => {addItem(detail);
        }}
        >
          Agregar al Carrito
        </button>
      </Item>
    </div>
  );
}