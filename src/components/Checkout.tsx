import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProductDetail, ProductProps } from "../types";
import React, { useState } from "react";

interface CartProps extends ProductProps {
  quantityProduct: number;
}

const Checkout: React.FC<ProductDetail> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", JSON.stringify([]));
  }
  const { price, discount } = product;

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(event.target.value);
    setQuantity(newQuantity);
  };

  const handleBtnChange = () => {
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

    alert(`Agregaste ${quantity} productos al carrito`)

    localStorage.setItem("cart", JSON.stringify(cart));
  };

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
            defaultValue={quantity}
            onChange={handleQuantityChange}
          />
        </div>
        <div className="call">
          <button type="button" className="btn btn-primary">
            Comprar
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleBtnChange}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
