import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

export const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    
    fetch('/data/products.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error en la petición');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data); // Agrega esta línea aquí
        const found = data.find((prod) => String(prod.id) === String(id));
        if (found) {
          setDetail(found);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
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
}