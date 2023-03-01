import React from "react";
import "./footer.css";
import { Container, Col, Row, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col lg="4">
            <div className="logo">
              <div>
                <h1 className="text-white">Multimart</h1>
              </div>
            </div>
            <p className="footer__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
              doloribus a? <br />
              Vero deserunt reprehenderit quod nam quibusdam.
            </p>
          </Col>

          <Col lg="3">
            <div className="footer__categories">
              <h4 className="footer__categories--title">Top Categories </h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Moders Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Arm Chair</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Watch </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2">
            <div className="footer__categories">
              <h4 className="quick__link"> Quick Link</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Home</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="Login">Login</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3">
            <div className="footer__categories">
              <h4 className="quick__link">Contact </h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <span>
                    {" "}
                    <i className="ri-map-pin-line"></i>
                  </span>
                  <Link to="#">Nam Tu Liem, Ha Noi </Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <span>
                    {" "}
                    <i className="ri-phone-line"></i>
                  </span>
                  <Link to="#">+84 833832976</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">tranducminh2001.work@gmail.com</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
