import "../assets/css/ProductCard.css"

const ProductCard = () => {
  return (
    <article id="" className="product-card">
      <a className="product-source" href="#">
        <img className="product-img" src="../public/mock1.jpg" alt="Iphone" />
      </a>
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