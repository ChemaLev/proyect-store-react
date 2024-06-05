import Home from "../views/Home";
import ProductDetails from "../views/ProductDetails";
import Cart from "../views/Cart";
import NotFound from "../views/NotFound";
import { createBrowserRouter } from "react-router-dom";
import "../assets/css/index.css";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product-details",
    element: <ProductDetails />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/*",
    element: <NotFound />
  }
];

const router = createBrowserRouter(routes);

export default router;
