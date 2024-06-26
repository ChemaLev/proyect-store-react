import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { NavBarLink } from "./NavBarLink";
import { Link } from "react-router-dom";
import "../assets/css/NavBar.css";

type NavbarProps = {
  onChange?: (term: string) => void;
  showInput: boolean;
};

const Navbar = ({ onChange, showInput }: NavbarProps) => {
  const handleInputChange = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const inputSearch = event.currentTarget.value;
    if (onChange) {
      onChange(inputSearch);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">
              <img
                src="../../public/tiendamia-logo.svg"
                width="218"
                alt="Logo store"
              />
            </Link>
          </div>
          <div className="form">
            {showInput && (
              <form>
                <input
                  type="text"
                  placeholder="Buscar"
                  id="inputSearch"
                  onKeyUp={handleInputChange}
                />
              </form>
            )}
          </div>
          <div className="social-media" id="socialMedia">
            <ul>
              <li>
                <Link to="#">
                  <FontAwesomeIcon className="font-icons" icon={faHeart} />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FontAwesomeIcon className="font-icons" icon={faFacebook} />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FontAwesomeIcon className="font-icons" icon={faInstagram} />
                </Link>
              </li>
              <li>
                <Link to="/cart">
                  <FontAwesomeIcon
                    className="font-icons"
                    icon={faCartShopping}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div id="nav" className="header-nav">
          <ul className="nav-list">
            <NavBarLink text="Ofertas" link="#" />
            <NavBarLink text="Cómo Comprar" link="#" />
            <NavBarLink text="Costos y Tarifas" link="#" />
            <NavBarLink text="Tarifas" link="#" />
            <NavBarLink text="Garantía" link="#" />
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
