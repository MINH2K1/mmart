import React from "react";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import Router from "../../router/Router";
const Layout = () => {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <Router />
      <Footer />
    </div>
  );
};

export default Layout;
