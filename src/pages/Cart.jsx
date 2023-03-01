import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import Helmet from "../components/Layout/Helmet/Helmet";
import { cartActions } from "../redux/reducers/cartSlice";
import "../styles/cart.css";
const Cart = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const productCart = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  useEffect(() => {
    productCart.length > 0 ? setShow(true) : setShow(false);
  }, [productCart]);

  const removeCart = (id, quantity) => {
    const value = id;
    dispatch(cartActions.removeItem({ value, quantity }));
  };
  return (
    <Helmet title="cart">
      <Container>
        {show && (
          <Row>
            <Col lg="9">
              <div className="cart__box">
                <div className="table__cart">
                  <table>
                    <thead>
                      <tr>
                        <td>Id</td>
                        <td>Image</td>
                        <td>Product Name</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Unit Price</td>
                        <td>Delete</td>
                      </tr>
                    </thead>
                    <tbody>
                      {productCart.map((item) => {
                        return (
                          <tr key={item.id}>
                            <td>{item.id}</td>
                            <td className="cart__img">
                              <img src={item.image} alt="img" />
                            </td>
                            <td>{item.productName}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td>
                              {Number(item.quantity) * Number(item.price)}
                            </td>
                            <motion.td
                              whileTap={{ scale: 1.1 }}
                              className="cart__delete"
                              onClick={() => removeCart(item.id, item.quantity)}
                            >
                              <span>
                                <i className="ri-delete-bin-line"></i>
                              </span>
                            </motion.td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </Col>
            <Col lg="3">
              <div>
                <div className="cart__totail">Totail : {totalAmount}</div>
                <motion.button whileHover={{ scale: 1.1 }} className="buy__btn">
                  <Link to={"/checkout"}>Thanh Toán</Link>
                </motion.button>
              </div>
            </Col>
          </Row>
        )}
        {!show && <div className="cart__no"> Cart has no products</div>}
      </Container>
    </Helmet>
  );
};

export default Cart;
