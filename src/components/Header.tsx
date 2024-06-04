import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

const Header = () => {
    return (
    <header className="header">
        <div className="container">
            <div className="header-content">
                <div className="logo">
                    <a href="./index.html"><img src="../../public/tiendamia-logo.svg" width="218" alt="Logo store" />
                    </a>
                </div>
                <div className="form">
                <form>
                    <input type="text" placeholder="Buscar" id="inputSearch"/>
                </form>
                </div>
                <div className="social-media" id="socialMedia">
                    <ul>
                        <li><a href="#"><FontAwesomeIcon className="font-icons" icon={faHeart} /></a></li>
                        <li><a href="#"><FontAwesomeIcon className="font-icons" icon={faFacebook} /></a></li>
                        <li><a href="#"><FontAwesomeIcon className="font-icons" icon={faInstagram} /></a></li>
                        <li><a href="./cart.html"><FontAwesomeIcon className="font-icons" icon={faCartShopping} /></a></li>
                    </ul>
                </div>
            </div>
            <div id="nav" className="header-nav">
                <ul className="nav-list">
                </ul>
            </div>
        </div>
    </header>
    );

} 

export default Header;