import Home from "../views/Home";
import Cart from "../views/Cart";
import NotFound from "../views/NotFound";
import { createBrowserRouter } from "react-router-dom";
import "../assets/css/index.css";
import DetailsView from "../views/DetailsView";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product-details/:id",
    element: <DetailsView />,
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
