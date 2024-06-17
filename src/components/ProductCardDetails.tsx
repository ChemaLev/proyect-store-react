import React from "react";
import Description from "./Description";
import { type ProductDetail } from "../types";
import Thumbs from "./Thumbs";
import Checkout from "./Checkout";

const ProductCardDetails: React.FC<ProductDetail> = ({ product }) => {
  return (
    <div className="product-detail" id="productDetail">
      <Thumbs product={product} />
      <Description product={product} />
      <Checkout product={product} />
    </div>
  );
};

export default ProductCardDetails;
