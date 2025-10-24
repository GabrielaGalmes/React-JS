
import { Link } from "react-router-dom";
import "./Item.css";

export const Item = ({ name, price, description, imageUrl, children }) => {
  
  return (
    <article className="product-item">
        <p>Zapatillas</p>
      <img src={imageUrl} alt={description} />
      
      <p>Precio: ${price}</p>
      
      {children}
    </article>
    
  );
};
