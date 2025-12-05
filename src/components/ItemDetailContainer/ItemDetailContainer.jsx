
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { getProductById } from '../../services/products'; // <-- usamos la función de la API
import './ItemDetailContainer.css';

export const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    getProductById(id)
      .then((data) => {
        if (data) setDetail(data);
        else throw new Error('Producto no encontrado');
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="item-detail-container">
      {loading ? (
        <p className="loading">Cargando producto...</p>
      ) : Object.keys(detail).length > 0 ? (
        <ItemDetail detail={detail} />
      ) : (
        <p className="not-found">Producto no encontrado</p>
      )}
    </div>
  );
};
