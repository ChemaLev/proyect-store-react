import { Link } from "react-router-dom";
import "../assets/css/ProductCard.css"

export type ProductProps = {
  id: number
  name: string
  description?: string
  price: number
  stock?: number
  images: string[]
  colors?: string[]
  discount?: number
}

const ProductCard = ({ id, name, price, images, discount, colors }: ProductProps) => {

  return (
    <article id={`${id}`} className="product-card">
      <Link className="product-source" to={`/product-details/${id}`}>
        <img className="product-img" src={images[0]} alt="Iphone" />
      </Link>
      <div className="product-info">
        <span className="product-title">{name}</span>
        <span className="product-description">{colors?.join(' - ')}</span>
        <div className="product-price-block">
          <span className="price">S/.{price}</span>
          <span className="discount">{discount}% Off</span>
        </div>
        <div className="product-tax-policy">
          Incluye impuesto País y percepción AFIP
        </div>
      </div>
    </article>
  );
};

export default ProductCard;