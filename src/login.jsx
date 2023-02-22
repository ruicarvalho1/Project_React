import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { getTokenInfo } from "./Auth";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import logo from "./assets/images/logo.jpg";

const Login = ({ auth }) => {
  const navigate = useNavigate();
  const { userLogged, setUserLogged } = auth;

  useEffect(() => {
    if (userLogged) {
      navigate("/");
    }
  });

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const payload = { username, password };

    //! axios.get( url , configs )
    //! axios.post( url , payload , configs )
    //! axios.put( url , payload , configs )
    axios
      .post("http://localhost:8080/api/user/login", payload)
      .then(({ data }) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          setUserLogged(getTokenInfo(data.token));
          navigate("/");
          //localStorage.removeItem('token');
        }
      });

    // * delete code below
    // const isLogged = localStorage.getItem('token');
    // //* examples with auth
    // const configs = {
    //     headers: {
    //         Authorization: 'Bearer ' + isLogged
    //     }
    // };
    // const { data: res2 } = await axios.get('http://localhost:4545/api/user', configs);
    // console.log(res2);
  };

  return (
    <Container id="main-container" className="d-grid h-100">
      <Form
        id="sign-in-form"
        className="text-center p-3 w-100"
        onSubmit={onSubmit}
      >
        <img src={logo} width="175px" alt="img"></img>
        <br />
        <br />
        <br />
        <h1 className="mb-3 fs-3 fw-normal">Please Sign in</h1>
        <Form.Group>
          <Form.Control
            required
            value={username}
            onChange={(e) => setusername(e.target.value)}
            size="lg"
            placeholder="Username"
            autoComplete="username"
            className="position-relative"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="sign-in-password">
          <Form.Control
            required
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            type="password"
            size="lg"
            placeholder="Password"
            autoComplete="current-password"
            className="position-relative"
          />
        </Form.Group>
        <Form.Group
          className="d-flex justify-content-center mb-4"
          controlId="remember-me"
        >
          <Form.Check label="Remember me" />
        </Form.Group>
        <div className="d-grid">
          <button
            class="btn btn-primary"
            type="submit"
            variant="primary"
            size="lg"
          >
            Sign in
          </button>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
