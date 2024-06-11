import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { type ProductProps } from "../types";
import Hero from "../components/Hero";
import { products as initialProducts } from "../db/products.json";
import { useState } from "react";

function Home() {
  //El alias cambio a 'initialProducts por lo que utilizamos el useState para obtener solo el primer valor'
  const [products] = useState(initialProducts);
  const [nameProduct, setNameProduct] = useState<string>("");

  const handleSearch = (inputSearch: string) => {
    setNameProduct(inputSearch);
  };

  const filterProducts = (products: ProductProps[]): ProductProps[] => {
    return products.filter((product) => {
      return product.name.toLowerCase().includes(nameProduct.toLowerCase());
    });
  };

  const filteredProducts = filterProducts(products);

  return (
    <>
      <NavBar showInput={true} onChange={handleSearch} />
      <Hero textPrincipal="tecnología" textSecondary="renovada" />
      <main>
        <div className="container">
          <div id="productList" className="product-container">
            {filteredProducts.map((product, index) => {
              return (
                <ProductCard
                  key={index}
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  stock={product.stock}
                  images={product.images}
                  colors={product.colors}
                  discount={product.discount}
                />
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Home;
