import React, { useState, useEffect } from "react";
import Navbar from "./Navbar"; //Import Navbar
import Home from "./pages/Home"; //Import do home
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Login from "./login";
import VisualizarCliente from "./pages/visualizarciente";
import VisualizarCliente1 from "./pages/visualizarcliente1";
import MySideNav from "./MySideNav";
import { getTokenInfo } from "./Auth";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CriarCliente from "./pages/criarcliente";

function App() {
  const [userLogged, setUserLogged] = useState(null);

  useEffect(() => {
    const token = getTokenInfo();
    if (!token) return;
    setUserLogged(userLogged);
  }, [userLogged]);

  // função da AppS
  return (
    <Router>
      <MySideNav auth={{ userLogged, setUserLogged }} />
      <Navbar auth={{ userLogged, setUserLogged }} />
      <div className="App">
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={<Home auth={{ userLogged, setUserLogged }} />}
            />
            <Route
              path="/login"
              element={<Login auth={{ userLogged, setUserLogged }} />}
            />
            <Route path="*" element={<NotFound />}></Route>

            <Route
              path="/criarcliente"
              element={<CriarCliente auth={{ userLogged, setUserLogged }} />}
            />

            <Route
              path="/visualizarcliente"
              element={
                <VisualizarCliente auth={{ userLogged, setUserLogged }} />
              }
            />
            <Route
              path="/visualizarcliente1"
              element={
                <VisualizarCliente1 auth={{ userLogged, setUserLogged }} />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
