import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import "../assets/css/ProductDetails.css";
import { useParams } from "react-router-dom";
import { products } from "../db/products.json";
import ProductCardDetails from "../components/ProductCardDetails";

const DetailsView = () => {
  const { id } = useParams<string>();

  const product = products.find((product) => product.id == Number(id));

  return (
    <>
      <Navbar showInput={false} />
      <main>
        <div className="container">
          {
            product ? ( <ProductCardDetails product={product} /> ) : ( <div className="products-error">El producto no ha sido encontrado o no se cargó correctamente</div> )
          }
        </div>
      </main>

      <Footer />
    </>
  );
};

export default DetailsView;
