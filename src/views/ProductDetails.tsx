import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";

import "../assets/css/ProductDetails.css";

const ProductDetails = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          <div className="product-detail" id="productDetail">
            <div className="product-images">
              <div className="product-images-secondary">
                <img
                  className="product-image-mini"
                  src="../../public/mock2.jpg"
                  alt=""
                />
                <img
                  className="product-image-mini"
                  src="../../public/mock2.jpg"
                  alt=""
                />
                <img
                  className="product-image-mini"
                  src="../../public/mock2.jpg"
                  alt=""
                />
              </div>
              <div className="product-image-principal">
                <img
                  className="product-image-full"
                  src="../../public/mock2.jpg"
                  alt=""
                />
              </div>
            </div>

            <div className="product-information">
              <h4>Samsung</h4>
              <h3>
                SAMSUNG Galaxy S23 FE Cell Phone, 128GB, Unlocked Android
                Smartphone, Long Battery Life, Premium Processor, Tough Gorilla
                Glass Display, Hi-Res 50MP Camera, US Version, 2023, Graphite
              </h3>
              <span className="qualification">
                <FontAwesomeIcon icon={ faStar } />
                <FontAwesomeIcon icon={ faStar } />
                657 calificaciones
              </span>
              <ul>
                <li>
                  <b>Disponibilidad: </b>En stock
                </li>
                <li>
                  <b>Marca: </b>Samsung
                </li>
                <li>
                  <b>Peso con empaque: </b>0.500 kg
                </li>
                <li>
                  <b>Producto de: </b>Amazon
                </li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                culpa inventore, neque deserunt molestiae delectus aspernatur
                voluptas reprehenderit, enim magni dolore sapiente doloribus
                corrupti distinctio aliquam officiis rerum nam eos. Corporis
                quod autem doloribus voluptatem quos a, beatae ex illo sit
                eaque, deleniti ipsum magnam aliquam! Soluta incidunt eveniet
                autem tempora, asperiores laudantium officiis dolorem veniam
                voluptatem similique exercitationem voluptatum? Ad iusto ex
                sequi facilis maiores inventore voluptatum aperiam? Temporibus
                quo ad perferendis voluptate quae ullam illo neque nesciunt
                iusto veritatis? Sit eveniet minima esse! Itaque harum possimus
                quae magni?
              </p>
            </div>

            <div className="product-prices">
              <div className="product-list-prices">
                <p className="old-price">
                  Precio: <span>S/. 3,202</span>
                </p>
                <p className="current-price">Ahorras: S/ 267 (9%)</p>
                <p className="price">S/. 2,925</p>
              </div>
              <div className="product-shipment">
                <div className="product-shipment__detail">
                  <FontAwesomeIcon icon={ faTruckFast } />
                  <p>
                    <span>Agrega el producto al carrito</span> para conocer los
                    costos de envío
                  </p>
                </div>
                <div className="product-shipment__detail">
                <FontAwesomeIcon icon={ faTruckFast } />
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
                  />
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
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ProductDetails;
