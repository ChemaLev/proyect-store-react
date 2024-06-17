import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProductDetail, ProductProps } from "../types";
import Button from "./Button";
import React, { useEffect, useRef, useState } from "react";

interface CartProps extends ProductProps {
  quantityProduct: number;
}

const Checkout: React.FC<ProductDetail> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const unitsProduct = useRef<HTMLInputElement>(null);

  const { price, discount } = product;

  const handleQuantityChange = () => {
    if (unitsProduct.current) {
      const newQuantity = Number(unitsProduct.current.value);
      setQuantity(newQuantity);
    }
  };

  const handleAddProductCart = () => {
    const cart: CartProps[] = JSON.parse(localStorage.getItem("cart") ?? "[]");
    const newProduct = {
      ...product,
      quantityProduct: quantity,
    };

    const existingProduct = cart.findIndex((prod) => prod.id == product.id);

    if (existingProduct !== -1) {
      cart[existingProduct].quantityProduct += newProduct.quantityProduct;
    } else {
      cart.push(newProduct);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      const productsOnCart: CartProps[] = JSON.parse(
        localStorage.getItem("cart") ?? "[]"
      );
      const productFind = productsOnCart.find(
        (element) => element.id == product.id
      );
      setQuantity(productFind?.quantityProduct ?? 1);
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }, [product.id]);

  return (
    <div className="product-prices">
      <div className="product-list-prices">
        <p className="old-price">
          Precio x Unidad: <span>S/. {price}</span>
        </p>
        <p className="current-price">
          Ahorras: S/ {price * (discount / 100)} ({discount}%)
        </p>
        <p className="price">
          S/. {(price - price * (discount / 100)) * quantity}
        </p>
      </div>
      <div className="product-shipment">
        <div className="product-shipment__detail">
          <FontAwesomeIcon icon={faTruckFast} />
          <p>
            <span>Agrega el producto al carrito</span> para conocer los costos
            de envío
          </p>
        </div>
        <div className="product-shipment__detail">
          <FontAwesomeIcon icon={faTruckFast} />
          <p>
            Recibí este producto de 5 a 10 días hábiles seleccionando
            <span>envío</span>
          </p>
        </div>
      </div>
      <div className="product-actions">
        <div className="quantity">
          <label htmlFor="quantityProduct">Cantidad:</label>
          <input
            type="number"
            id="quantityProduct"
            min="1"
            max="99"
            value={quantity}
            ref={unitsProduct}
            onChange={handleQuantityChange}
          />
        </div>
        <div className="call">
          <Button typeBtn="button" custom="primary">
            Comprar
          </Button>
          <Button
            typeBtn="button"
            custom="secondary"
            onClick={handleAddProductCart}
          >
            Agregar del carrito
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
