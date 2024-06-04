import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import Hero from "../components/Hero";
import "../assets/css/index.css";

function Home() {
  return (
    <>
      <NavBar />
      <Hero textPrincipal="tecnología" textSecondary="renovada"/>
      <main>
        <div className="container">
          <div id="productList" className="product-container">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Home;
