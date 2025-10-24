import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from '../ItemList/ItemList';
import './ItemListContainer.css';

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

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
        if (categoryId) {
          const filtered = data.filter((prod) => prod.category === categoryId);
          setProducts(filtered);
        } else {
          setProducts(data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div className="item-list-container">
      <h2 className="container-title">
        {categoryId ? `Categoría: ${categoryId}` : 'Todos los Productos'}
      </h2>
      
      {loading ? (
        <p className="loading">Cargando productos...</p>
      ) : products.length > 0 ? (
        <ItemList lista={products} />
      ) : (
        <p className="no-products">No hay productos en esta categoría</p>
      )}
    </div>
  );
}
