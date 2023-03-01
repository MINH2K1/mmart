import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import Helmet from "../components/Layout/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { motion } from "framer-motion";
import "../styles/product_detail.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/reducers/cartSlice";
import { toast } from "react-toastify";
const ProductDetail = () => {
  const [tag, setTag] = useState(true);

  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
  } = product;
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: id,
        productName: productName,
        price: price,
        image: imgUrl,
      })
    );
    toast.success("Product added success");
  };

  console.log(product);
  return (
    <Helmet title="Products">
      <CommonSection />
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="aaa" />
            </Col>
            <Col lg="6">
              <div className="product__detail">
                <h2>{productName}</h2>
                <div className="product__rating">
                  <div>
                    {" "}
                    <span>
                      <i className="ri-star-s-fill"></i>{" "}
                      <i className="ri-star-s-fill"></i>{" "}
                      <i className="ri-star-s-fill"></i>{" "}
                      <i className="ri-star-s-fill"></i>{" "}
                      <i className="ri-star-half-line"></i>{" "}
                    </span>
                    <p>({avgRating} ratings)</p>
                  </div>
                  <h1 className="product__detail--price">${price}</h1>
                  <p>{shortDesc}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 0.9 }}
                  className="buy__btn"
                  onClick={() => {
                    addToCart();
                  }}
                >
                  Add Cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tag__wrapper d-flex align-items-center gap-5">
                <h6
                  className={`${tag === true ? "active__tag" : ""}`}
                  onClick={() => setTag(true)}
                >
                  Desription
                </h6>
                <h6
                  className={`${tag === false ? "active__tag" : ""}`}
                  onClick={() => setTag(false)}
                >
                  Reviews({reviews.length})
                </h6>
              </div>
              {tag && <div className="tag__content">{description}</div>}
              {!tag && (
                <div className="tag__content productview">
                  <ul>
                    {reviews?.map((item, index) => {
                      return (
                        <li key={index}>
                          <div className="name__rating">Tran Duc Minh</div>
                          <span>{item.rating} (rating)</span>
                          <p>{item.text}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetail;
