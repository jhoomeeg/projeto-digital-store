import starIcon from "../../assets/star-icon.svg";
import { formatPrice } from "../../utils/formatPrice";
import "./BuyBox.css";

const BuyBox = ({ name, reference, stars, rating, price, priceDiscount, description, onBuy, children }) => (
  <aside className="buy-box">
    <h1>{name}</h1>
    {reference && <p className="buy-box-reference">REF: {reference}</p>}
    <div className="buy-box-rating">
      {stars != null && (
        <span className="buy-box-stars">
          {stars} <img src={starIcon} alt="" />
        </span>
      )}
      {rating != null && <span className="buy-box-rating-count">{rating} avaliações</span>}
    </div>
    <div className="buy-box-price">
      {priceDiscount ? (
        <>
          <strong>{formatPrice(priceDiscount)}</strong>
          <del>{formatPrice(price)}</del>
        </>
      ) : (
        <strong>{formatPrice(price)}</strong>
      )}
    </div>
    {description && <p className="buy-box-description">{description}</p>}
    {children}
    <button type="button" className="buy-box-button" onClick={onBuy}>COMPRAR</button>
  </aside>
);

export default BuyBox;
