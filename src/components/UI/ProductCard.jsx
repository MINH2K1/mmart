import React from "react";
import { motion } from "framer-motion";
import "../../styles/product_card.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/reducers/cartSlice";
import { toast } from "react-toastify";
const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        image: item.imgUrl,
      })
    );
    toast.success("Product added success");
  };

  return (
    <Col lg="3" md="4" className="mb-2">
      <div className="product__item">
        <motion.div whileHover={{ scale: 0.9 }} className="product__img">
          <img src={item.imgUrl} alt="product" />
        </motion.div>
        <div className="p-2 product-info">
          <h3 className="product__name">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>{" "}
          </h3>
          <span className="text-center">{item.category}</span>
        </div>
        <div className="product__card-bottom">
          <span className="price">${item.price}</span>
          <motion.span whileHover={{ scale: 1.2 }} onClick={addToCart}>
            <i className="ri-add-line"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
