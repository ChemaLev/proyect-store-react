import { Link } from "react-router-dom";
import "../assets/css/ProductCard.css"

const ProductCard = () => {
  return (
    <article id="" className="product-card">
      <Link className="product-source" to="#">
        <img className="product-img" src="../public/mock1.jpg" alt="Iphone" />
      </Link>
      <div className="product-info">
        <span className="product-title">Iphone 12</span>
        <span className="product-description">Red</span>

        <div className="product-price-block">
          <span className="price">S/.3,400</span>
          <span className="discount">20% Off</span>
        </div>
        <div className="product-tax-policy">
          Incluye impuesto País y percepción AFIP
        </div>
      </div>
    </article>
  );
};

export default ProductCard;