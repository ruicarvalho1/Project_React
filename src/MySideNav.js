import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useNavigate } from "react-router-dom";
import { ROLES } from "./Auth";

const routes = {
  home: (
    <NavItem eventKey="" style={{ color: "White" }}>
      <NavIcon>
        <i className="fa fa-fw fa-home" style={{ fontize: "1.5em" }}></i>
      </NavIcon>
      <NavText style={{ color: "white" }}>Home</NavText>
    </NavItem>
  ),
  criarcliente: (
    <NavItem eventKey="criarcliente" style={{ color: "White" }}>
      <NavIcon style={{ color: "White" }}>
        <i className="fa-solid fa-users-gear" style={{ fontize: "1.5em" }}></i>
      </NavIcon>
      <NavText style={{ color: "White" }}>Criar dados cliente</NavText>
    </NavItem>
  ),
  visulizarcliente: (
    <NavItem eventKey="visualizarcliente" style={{ color: "White" }}>
      <NavIcon style={{ color: "White" }}>
        <i className="fa-solid fa-eye" style={{ fontize: "1.5em" }}></i>
      </NavIcon>
      <NavText style={{ color: "White" }}>Visualizar cliente</NavText>
    </NavItem>
  ),
  visulizarcliente1: (
    <NavItem eventKey="visualizarcliente1" style={{ color: "White" }}>
      <NavIcon style={{ color: "White" }}>
        <i className="fa-solid fa-eye" style={{ fontize: "1.5em" }}></i>
      </NavIcon>
      <NavText style={{ color: "White" }}>Visualizar cliente</NavText>
    </NavItem>
  ),
};

const MySideNav = ({ auth }) => {
  const { userLogged } = auth;
  const navigate = useNavigate();

  const hasPermissions = (roles) => roles.includes(userRole);

  const userRole = userLogged?.role;

  const { ADMIN, COMPANY } = ROLES;

  return (
    <SideNav
      onSelect={(selected) => {
        console.log(selected);
        navigate("/" + selected);
      }}
      className="mysidenav"
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home-Admin">
        {routes.home}
        {hasPermissions([ADMIN]) && routes.criarcliente}
        {hasPermissions([ADMIN]) && routes.visulizarcliente}
        {hasPermissions([COMPANY]) && routes.criarcliente}
        {hasPermissions([COMPANY]) && routes.visulizarcliente1}
      </SideNav.Nav>
    </SideNav>
  );
};

export default MySideNav;
