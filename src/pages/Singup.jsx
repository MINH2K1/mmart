import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { motion } from "framer-motion";
import Helmet from "../components/Layout/Helmet/Helmet";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";
// import "../styles/singup.css";
const Singup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const singup = async (e) => {
    e.preventDefault();
    console.log(auth);
    try {
      const userCrendital = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCrendital);

      toast.success("Create An Account Success");
      navigate("/login");
    } catch (error) {
      const errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
      toast.error(`${errorMessage}`);
    }
  };
  return (
    <Helmet title="singup">
      <section>
        <Container>
          <Row>
            <Col lg="6" className="m-auto text-center">
              <Form className="auth__form" onSubmit={singup}>
                <h3 className="text-white mb-4">Singup</h3>
                {/* <FormGroup className="form__group">
                  <input
                    type="text"
                    placeholder="Enter your username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </FormGroup> */}
                <FormGroup className="form__group">
                  <input
                    type="email"
                    // pattern="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.2 }}
                  className="buy__btn btn__login"
                >
                  Create an Acount
                </motion.button>
                <p>
                  Already have account?
                  <Link to={"/login"}> Login</Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Singup;
