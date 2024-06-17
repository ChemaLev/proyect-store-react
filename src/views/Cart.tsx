import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import Button from "../components/Button";
import "../assets/css/Cart.css";
import { faHeart, faTrashCan } from "@fortawesome/free-regular-svg-icons";

const Cart = () => {

  return (
    <>
      <Navbar showInput={false} />
      <Hero textPrincipal="mi" textSecondary="carrito" />

      <main>
        <div className="container">
          <div className="purchase">
            <div className="purchase-cart" id="purchaseCart">
              <article className="product-cart">
                <img src="../../public/mock2.jpg" alt="" />
                <div className="product-cart__content">
                  <p>Iphone</p>
                  <p>- Red</p>
                  <p>Elevate your audio experiencie with the bose...</p>
                  <div className="purchase-items">
                    <input type="number" min="1" id="inputQty" value={1}/>
                    <Button typeBtn="button" custom="icons">
                      <FontAwesomeIcon icon={faHeart} />
                    </Button>
                    <Button typeBtn="button" custom="icons">
                      <FontAwesomeIcon icon={faTrashCan} />
                    </Button>
                  </div>
                </div>
                <p>S/. 100</p>
              </article>
            </div>
            <div className="purchase-order">
              <h3>Resumen del Pedido</h3>
              <h4>
                Total: <span id="purchaseTotal"></span>
              </h4>
              <span>Incluye impuestos Pais y percepción AFIP</span>
              <Button typeBtn="button" custom="primary">
                Comprar
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Cart;
