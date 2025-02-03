import { Route, Routes } from "react-router-dom";
import MainLayout from "./page/layout/MainLayout";
import ProductList from "./page/product/ProductList";
import UserList from "./page/user/UserList";
import ProductCard from "./page/product/ProductCard";
import CreateProduct from "./page/product/CreateProduct";
import CategoryList from "./page/category/CategoryList";
import Layout from "./page/layout/Layout";
import Home from "./page/home/Home";
import Contact from "./page/contact/Contact";
import About from "./page/about/About";
import Signup from "./page/signup/Signup";
import NotFound from "./page/not_found/NotFound";
import ProductDetail from "./page/productDetail/ProductDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Route>

        <Route path="/dash" element={<MainLayout />}>
          <Route path="categories" element={<CategoryList />} />

          <Route path="products">
            <Route index element={<ProductList />} />
            <Route path="new" element={<CreateProduct />} />
          </Route>

          <Route path="users" element={<UserList />} />
          <Route path="product-cards" element={<ProductCard />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
