
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";

const AllRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList></ProductList>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AllRoutes;
