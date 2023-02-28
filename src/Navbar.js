import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

const Navbar1 = ({ auth }) => {
  const { userLogged, setUserLogged } = auth;
  const navigate = useNavigate();
  console.log(userLogged);

  return (
    <>
      <Navbar
        bg="white"
        variant="white"
        className="w-100"
        style={{ margin: 0, borderRadius: "white" }}
      >
        <Container style={{ margin: 0 }}>
          <Navbar.Brand href="#home" className="mx-auto">
            CHIP7
          </Navbar.Brand>

          <div
            className="links ml-auto"
            style={{ padding: 0, marginLeft: 0, marginRight: 0 }}
          >
            {!userLogged && (
              <Link to="/login">
                <Button variant="outline-secondary">Login</Button>
              </Link>
            )}

            {userLogged && (
              <Button
                onClick={() => {
                  localStorage.removeItem("token");
                  setUserLogged(null);
                  navigate("/");
                }}
                variant="outline-secondary"
              >
                Logout
              </Button>
            )}
          </div>
        </Container>
      </Navbar>

      <br />
    </>
  );
};

export default Navbar1;
