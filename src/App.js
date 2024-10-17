import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import LoginSignup from "./Pages/LoginSignup";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer/Footer";
import banner1 from "../src/Components/Assets/b16.jpg";
import banner2 from "../src/Components/Assets/b17.jpg";
import banner3 from "../src/Components/Assets/b18.jpg";
import Admin from "./Pages/Admin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/men"
            element={
              <ShopCategory category="men's clothing" banner={banner1} />
            }
          />
          <Route
            path="/jewelery"
            element={<ShopCategory category="jewelery" banner={banner2} />}
          />
          <Route
            path="/electronics"
            element={<ShopCategory category="electronics" banner={banner3} />}
          />
          <Route
            path="/women's clothing"
            element={<ShopCategory category="women's clothing" banner={banner3} />}
          />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
