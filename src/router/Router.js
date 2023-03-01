import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import ProductDetail from "../pages/ProductDetail";
import Singup from "../pages/Singup";
import Checkout from "../pages/Checkout";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />}></Route>
      <Route path="home" element={<Home />}></Route>
      <Route path="shop" element={<Shop />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="cart" element={<Cart />}></Route>
      <Route path="checkout" element={<Checkout />}></Route>
      <Route path="singup" element={<Singup />}></Route>
      <Route path="shop/:id" element={<ProductDetail />}></Route>
    </Routes>
  );
};

export default Router;
