import { Link } from 'react-router-dom';
import { Item } from '../Item/Item';
import './ItemList.css';

export const ItemList = ({ lista }) => {
  return (
    <div className="item-list">
      {lista.map((prod) => (
        <Link key={prod.id} to={`/detail/${prod.id}`} className="item-link">
          <Item {...prod} />
        </Link>
      ))}
    </div>
  );
};