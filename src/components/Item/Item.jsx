import './Item.css';

export const Item = ({ title, price, image, description, children }) => {
  return (
    <article className="item-card">
      <img src={image} alt={title} className="item-image" />
      <div className="item-content">
        <h3 className="item-title">{title}</h3>
        <p className="item-description">{description}</p>
        <p className="item-price">${price.toLocaleString('es-AR')}</p>
        {children}
      </div>
    </article>
  );
}
