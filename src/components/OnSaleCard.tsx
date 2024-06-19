import { Link } from "react-router-dom";
import { ProductProps } from "../types";
import "../assets/css/OnSaleCard.css"

const OnSaleCard: React.FC<ProductProps> = ({
  id,
  title,
  images,
  discount,
  price,
}) => {
  return (
    <article id={`${id}`} className="product-card">
      <Link className="product-source hover:" to={`/product-details/${id}`}>
        <img className="product-img" src={images[0]} alt="Iphone" />
      </Link>
      <div className="product-info">
        <span className="product-title-onsale">{title}</span>
        <span className="product-price-onsale">Desde S/.{price}</span>
        <div className="product-price-block">
          <span className="price-onsale">
          S/. {price - price * (discount / 100)}
          </span>
          <span className="discount-onsale">{discount}% Off</span>
        </div>
        <div className="product-tax-policy">
          ¡Compra y paga en soles!
        </div>
      </div>
    </article>
  );
};

export default OnSaleCard;
