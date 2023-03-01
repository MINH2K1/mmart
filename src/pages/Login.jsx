import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { motion } from "framer-motion";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import Helmet from "../components/Layout/Helmet/Helmet";
import { UserActions } from "../redux/reducers/userAction";
import "../styles/login.css";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [userAction, setUserAction] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      if (user) {
        console.log(user);
        toast.success("Login Success");
        navigate("/home");
      } else {
        throw new Error("Have Error");
      }

      // await navigate("/home");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error({ errorCode, errorMessage });
    }
  };

  return (
    <Helmet title="Login">
      <section>
        <Container>
          <Row>
            <Col lg="6" className="m-auto text-center">
              <h3>Login</h3>
              <Form className="auth__form">
                <FormGroup className="form__group">
                  <input
                    type="email"
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
                  whileHover={{ scale: 1.2 }}
                  className="buy__btn btn__login"
                  onClick={login}
                >
                  Login
                </motion.button>
                <p>
                  Don't have account?
                  <Link to={"/singup"}> Create an account</Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
