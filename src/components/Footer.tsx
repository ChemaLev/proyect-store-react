import "../assets/css/Footer.css"

const Footer = () => {

  return (
    <>
      <footer>
        <div className="container" >
            <div className="footer-columns">
                <ul className="footer-columns-list">
                    <li className="footer-columns-title">Ofertas</li>
                    <li><a href="#">Laptops</a></li>
                    <li><a href="#">Audio</a></li>
                    <li><a href="#">Auriculares</a></li>
                </ul>
                <ul className="footer-columns-list">
                    <li className="footer-columns-title">Cómo comprar</li>
                    <li><a href="#">Formas de Pago</a></li>
                    <li><a href="#">Envios</a></li>
                    <li><a href="#">Devoluciones</a></li>
                </ul>
                <ul className="footer-columns-list">
                    <li className="footer-columns-title">Costos y tarifas</li>
                    <li><a href="#">Impuesto</a></li>
                    <li><a href="#">Facturación</a></li>
                </ul>
                <ul className="footer-columns-list">
                    <li className="footer-columns-title">Mis pedidos</li>
                    <li><a href="#">Pedir nuevamente</a></li>
                    <li><a href="#">Lista de deseos</a></li>
                </ul>
                <ul className="footer-columns-list">
                    <li className="footer-columns-title">Garantía</li>
                    <li><a href="#">Garantía 1</a></li>
                    <li><a href="#">Garantía 2</a></li>
                </ul>
            </div>
        </div>
        <div className="copyright">Curso de Html + CSS 2024</div>
      </footer>
    </>
  );
};

export default Footer;
