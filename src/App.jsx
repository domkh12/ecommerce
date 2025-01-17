import { Route, Routes } from "react-router-dom";
import MainLayout from "./page/layout/MainLayout";
import ProductList from "./page/product/ProductList";
import UserList from "./page/user/UserList";
import HomePage from "./page/home/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/dash" element={<MainLayout />}>
          <Route path="products" element={<ProductList />} />
          <Route path="users" element={<UserList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
