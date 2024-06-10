import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

type ProductDetailProps = {
  id: number
  name: string
  description: string
  price: number
  stock: number
  images: string[]
  colors: string[]
  discount: number
}

type ProductDetail = {
    product: ProductDetailProps
}

const ProductCardDetails = ({ product } : ProductDetail) => {

    const { images, name, description, price, discount } = product;
    const [imageFull, setImageFull] = useState<string>(images[0]);

    const handlerClick = (event:React.MouseEvent<HTMLImageElement>) => {
        const targetName = event.target as HTMLImageElement
        if(targetName.tagName == 'IMG'){
          const newImage = targetName.src;
          setImageFull(newImage);
        }   
    }

    return (
        <div className="product-detail" id="productDetail">
            <div className="product-images">
              <div className="product-images-secondary" onClick={handlerClick}>
                {images.map((image, index) => {
                  return(
                    <img
                    key={index}
                    className="product-image-mini"
                    src={image}
                    alt=""/>
                  )
                })}
              </div>
              <div className="product-image-principal">
                <img
                  className="product-image-full"
                  src={imageFull}
                  alt=""
                />
              </div>
            </div>

            <div className="product-information">
              <h4>{name}</h4>
              <h3>
                SAMSUNG Galaxy S23 FE Cell Phone, 128GB, Unlocked Android
                Smartphone, Long Battery Life, Premium Processor, Tough Gorilla
                Glass Display, Hi-Res 50MP Camera, US Version, 2023, Graphite
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
                  <b>Marca: </b>{name}
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

            <div className="product-prices">
              <div className="product-list-prices">
                <p className="old-price">
                  Precio: <span>S/. {price}</span>
                </p>
                <p className="current-price">Ahorras: S/ {price*(discount/100)} ({discount}%)</p>
                <p className="price">S/. { price - (price*(discount/100))}</p>
              </div>
              <div className="product-shipment">
                <div className="product-shipment__detail">
                  <FontAwesomeIcon icon={faTruckFast} />
                  <p>
                    <span>Agrega el producto al carrito</span> para conocer los
                    costos de envío
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
                  <input type="number" id="quantityProduct" min="1" max="99" />
                </div>
                <div className="call">
                  <button type="button" className="btn btn-primary">
                    Comprar
                  </button>
                  <button type="button" className="btn btn-secondary">
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
    )
}

export default ProductCardDetails;