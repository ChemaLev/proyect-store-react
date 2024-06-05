import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "../assets/css/Cart.css";

const Cart = () => {
  return (
    <>
      <Navbar />
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
                  <input type="number" min="1" id="inputQty" />
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
              <button
                type="button"
                className="btn btn-primary"
                id="btnEndPurchase"
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Cart;
