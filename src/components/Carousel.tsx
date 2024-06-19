import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { products } from "../db/products.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Button from "./Button";
import OnSaleCard from "./OnSaleCard";

const Carousel = () => {
  const [from, setfrom] = useState(0);
  const [to, setTo] = useState(4);

  const updateIndices = (increment: number) => {
    setfrom(from + increment);
    setTo(to + increment);
  };

  const previous = () => {
    if (from > 0) updateIndices(-4);
  };

  const next = () => {
    if (to < products.length) updateIndices(4);
  };

  return (
    <div className="product-container">
      <Button
        typeBtn="button"
        custom={
          from > 0 ? `onsale-active btn-left` : `onsale-disabled btn-left`
        }
        onClick={previous}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </Button>

      {products.slice(from, to).map((product, index) => {
        return (
          <OnSaleCard
            key={index}
            id={product.id}
            name={product.name}
            title={product.title}
            description={product.description}
            price={product.price}
            images={product.images}
            colors={product.colors}
            discount={product.discount}
          />
        );
      })}

      <Button
        typeBtn="button"
        custom={
          to < products.length
            ? `onsale-active btn-rigth`
            : `onsale-disabled btn-rigth`
        }
        onClick={next}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </Button>
    </div>
  );
};

export default Carousel;
