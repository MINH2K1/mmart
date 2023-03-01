import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Helmet from "../components/Layout/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../styles/home.css";
import heroImg from "../assets/images/hero-img.png";
import { motion } from "framer-motion";
import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";
import products from "../assets/data/products";
import counterImg from "../assets/images/counter-timer-img.png";
import Clock from "../components/UI/Clock";
const Home = () => {
  const year = new Date().getFullYear();
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSales, setBestSales] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  useEffect(() => {
    const fitteredProduct = products.filter(
      (item) => item.category === "chair"
    );

    const bestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );

    const mobileProducts = products.filter(
      (item) => item.category === "mobile"
    );

    const fitterWirelessProduct = products.filter(
      (item) => item.category === "wireless"
    );

    const fitterPopularsProduct = products.filter(
      (item) => item.category === "watch"
    );

    setTrendingProducts(fitteredProduct);
    setBestSales(bestSalesProducts);
    setMobileProducts(mobileProducts);
    setWirelessProducts(fitterWirelessProduct);
    setPopularProducts(fitterPopularsProduct);
  }, []);

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending product in {year}</p>
                <h2>Make Yours Interiror More Minimalistic & Modern</h2>
                <p className="hero__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  corrupti, iusto quo culpa hic distinctio pariatur laborum iste
                  vero saepe incidunt maiores et ducimus, tempore, porro libero
                  itaque numquam sint.
                </p>
                <motion.button whileTap={{ scale: 1.5 }} className="buy__btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>
      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title"> Best Sales</h2>
            </Col>
            <ProductsList data={bestSales} />
          </Row>
        </Container>
      </section>
      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="6" className="oclock__conent">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quanlity ArmChair</h3>
              </div>
              <Clock />
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="store__btn buy__btn"
              >
                <Link to={"/shop"}>Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="6" className="text-end hide_img">
              <img src={counterImg} alt="img" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__subtitle"> New Arrivals</h2>
            </Col>
            <ProductsList data={mobileProducts} />
            <ProductsList data={wirelessProducts} />
          </Row>
        </Container>
      </section>

      <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__subtitle"> Popular in Category</h2>
            </Col>
            <ProductsList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
