import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/Auth/layout";
import AuthLogin from "./Pages/Auth/Login";
import AuthSignup from "./Pages/Auth/SignUp";
import Adminlayout from "./components/admin-view/layout";
import Adminorder from "./Pages/admin-view/order";
import AdminDashboard from "./Pages/admin-view/dashboard"
import Adminproducts from "./Pages/admin-view/products"
import Adminfeature from "./Pages/admin-view/feature"

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        {/* auth route  */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="signup" element={<AuthSignup />} />
        </Route>
        {/* admin route */}
        <Route path="/admin" element={<Adminlayout />}>
          <Route path="dashboard" element={<AdminDashboard/>} />
          <Route path="order" element={<Adminorder />} />
          <Route path="products" element={<Adminproducts />} />
          <Route path="feature" element={<Adminfeature />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
