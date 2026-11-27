import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/formatPrice";
import "./ProductCard.css";

const ProductCard = ({ id, name, image, imagem, price, priceDiscount }) => {
  const source = image || imagem;
  return (
    <article className="product-card">
      <Link to={`/product/${id || 1}`} className="product-card-image">
        {source && <img src={source} alt={name} />}
      </Link>
      <p className="product-card-name">{name}</p>
      <div className="product-card-price">
        {priceDiscount ? (
          <>
            <span className="product-card-price-original">{formatPrice(price)}</span>
            <strong>{formatPrice(priceDiscount)}</strong>
          </>
        ) : (
          <strong>{formatPrice(price)}</strong>
        )}
      </div>
    </article>
  );
};

export default ProductCard;
