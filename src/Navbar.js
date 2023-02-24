import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";

const Navbar1 = ({ auth }) => {
  const { userLogged, setUserLogged } = auth;
  const navigate = useNavigate();
  console.log(userLogged);

  return (
    <>
      <Navbar
        bg="light"
        variant="light"
        className="w-100"
        style={{ margin: 0, borderRadius: "white" }}
      >
        <Container style={{ margin: 0 }}>
          <Navbar.Brand href="#home" className="mx-auto">
            Chip7
          </Navbar.Brand>

          <div className="links ml-auto" style={{ padding: 15 }}>
            {!userLogged && (
              <Link
                to="/login"
                style={{
                  color: "white",
                  backgroundColor: "#212529",
                  borderRadius: "8px",
                }}
              >
                Login
              </Link>
            )}

            {userLogged && (
              <Link
                onClick={() => {
                  localStorage.removeItem("token");
                  setUserLogged(null);
                  navigate("/");
                }}
                style={{
                  color: "white",
                  backgroundColor: "#212529",
                  borderRadius: "0px",
                }}
              >
                Logout
              </Link>
            )}
          </div>
        </Container>
      </Navbar>

      <br />
    </>
  );
};

export default Navbar1;
