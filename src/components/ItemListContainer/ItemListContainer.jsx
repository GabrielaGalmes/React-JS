
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from '../ItemList/ItemList';
import { getProducts } from '../../services/products'; // <-- usamos la función de la API
import './ItemListContainer.css';

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    setLoading(true);

    getProducts()
      .then((data) => {
        if (category) {
          const filtered = data.filter((prod) => prod.category === category);
          setProducts(filtered);
        } else {
          setProducts(data);
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <div className="item-list-container">
      <h1>Bienvenidos</h1>
      <h2 className="container-title">
        {category ? `Categoría: ${category}` : 'Todos los Productos'}
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
};

