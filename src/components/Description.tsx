import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { type ProductDetail } from "../types";
import React from "react";

const Description: React.FC<ProductDetail> = ({ product }) => {
  const { name, description } = product;
  
  return (
    <div className="product-information">
      <h4>{name}</h4>
      <h3>
        SAMSUNG Galaxy S23 FE Cell Phone, 128GB, Unlocked Android Smartphone,
        Long Battery Life, Premium Processor, Tough Gorilla Glass Display,
        Hi-Res 50MP Camera, US Version, 2023, Graphite
      </h3>
      <span className="qualification">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        657 calificaciones
      </span>
      <ul>
        <li>
          <b>Disponibilidad: </b>En stock
        </li>
        <li>
          <b>Marca: </b>
          {name}
        </li>
        <li>
          <b>Peso con empaque: </b>0.500 kg
        </li>
        <li>
          <b>Producto de: </b>Amazon
        </li>
      </ul>
      <p>{description}</p>
    </div>
  );
};

export default Description;
