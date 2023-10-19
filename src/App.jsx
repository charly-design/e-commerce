import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import PaymentDone from "./pages/PaymentDone";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./pages/admin/Dashboard";
import AddProduct from "./pages/admin/AddProduct";
import Purchases from "./pages/admin/Purchases";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='payment' element={<PaymentDone />} />
          <Route path='cart' element={<Cart />} />
          <Route path='login' element={<Login />} />
          <Route path='dashboard' element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='add-product' element={<AddProduct />} />
            <Route path='purchases' element={<Purchases />} />
          </Route>

          <Route path='product/:id' element={<Product />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
