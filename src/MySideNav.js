import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useNavigate } from "react-router-dom";
import { ROLES } from "./Auth";

const routes = {
  home: (
    <NavItem eventKey="">
      <NavIcon>
        <i className="fa fa-fw fa-home" style={{ fontize: "1.5em" }}></i>
      </NavIcon>
      <NavText>Home</NavText>
    </NavItem>
  ),
  criarcliente: (
    <NavItem eventKey="criarcliente">
      <NavIcon>
        <i className="fa-solid fa-users-gear" style={{ fontize: "1.5em" }}></i>
      </NavIcon>
      <NavText>Criar dados cliente</NavText>
    </NavItem>
  ),
  visulizarcliente: (
    <NavItem eventKey="visualizarcliente">
      <NavIcon>
        <i className="fa-solid fa-eye" style={{ fontize: "1.5em" }}></i>
      </NavIcon>
      <NavText>Visualizar os dados do cliente</NavText>
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
        {hasPermissions([COMPANY]) && routes.alteracaoDadosEcopontos}
      </SideNav.Nav>
    </SideNav>
  );
};

export default MySideNav;
