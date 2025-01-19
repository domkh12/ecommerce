import { Route, Routes } from "react-router-dom";
import MainLayout from "./page/layout/MainLayout";
import ProductList from "./page/product/ProductList";
import UserList from "./page/user/UserList";
import HomePage from "./page/home/HomePage";
import ProductCard from "./page/product/ProductCard";
import CreateProduct from "./page/product/CreateProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/dash" element={<MainLayout />}>

          <Route path="products">
            <Route index element={<ProductList />}/>
            <Route path="new" element={<CreateProduct />}/>
          </Route>

          <Route path="users" element={<UserList />} />
          <Route path="product-cards" element={<ProductCard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
