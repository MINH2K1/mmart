import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Layout/Helmet/Helmet";

const Checkout = () => {
  const totalAmout = useSelector((state) => state.cart.totalAmount);
  const quantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <Helmet title="check-out">
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <Form></Form>
              <input placeholder="Enter Your Name" />
              <input placeholder="Enter Your Adress" />
              <input placeholder="Enter Your Phone" />
              <input placeholder="Enter Your Email" />
            </Col>
            <Col lg="4">
              <h6>Quantity: {quantity} (items)</h6>
              <h6>SubToTal: ${totalAmout}</h6>
              <button className="buy__btn">Order </button>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
