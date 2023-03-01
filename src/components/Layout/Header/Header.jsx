import React, { useRef } from "react";

import "./header.css";
import logo from "../../../assets/images/eco-logo.png";
import { Container, Row } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import userIcon from "../../../assets/images/user-icon.png";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
const nav__links = [
  { path: "home", display: "Home" },
  { path: "shop", display: "Shop" },
  { path: "cart", display: "Cart" },
];
const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const menuRef = useRef(null);
  const menuToggle = () => {
    menuRef.current.classList.toggle("active__menu");
  };
  return (
    <header className="header sticky_heard">
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img alt="logo" src={logo} />
              <div>
                <h1>Multimart</h1>
                <p>Since 1995</p>
              </div>
            </div>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navclass) =>
                        navclass.isActive ? "nav__active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav__icons">
              <span className="cart__icon">
                <Link to={"/cart"}>
                  <i className="ri-shopping-bag-line"></i>
                </Link>
                <span className="badge">{totalQuantity}</span>
              </span>
              <span>
                <motion.img
                  src={userIcon}
                  whileTap={{ scale: 1.2 }}
                  alt="user icon"
                />
              </span>
              <div className="mobile__menu" onClick={menuToggle}>
                <span>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
