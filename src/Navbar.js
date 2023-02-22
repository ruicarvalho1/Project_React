import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navbar1 = ({ auth }) => {
  const { userLogged, setUserLogged } = auth;
  const navigate = useNavigate();
  console.log(userLogged);

  return (
    <>
      <Navbar bg="dark" variant="dark" className="w-100">
        <Container>
          <Navbar.Brand href="#home">Chip7</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>

        <div className="links">
          {!userLogged && (
            <Link
              to="/login"
              style={{
                color: "white",
                backgroundColor: "#2F4F4F",
                borderRadius: "8px",
              }}
            >
              Login
            </Link>
          )}

          {userLogged && (
            <button
              onClick={() => {
                localStorage.removeItem("token");
                setUserLogged(null);
                navigate("/");
              }}
              style={{
                color: "white",
                backgroundColor: "#2F4F4F",
                borderRadius: "8px",
              }}
            >
              Logout
            </button>
          )}
        </div>
      </Navbar>
      <br />
    </>
  );
};

export default Navbar1;
