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
  changeData: (
    <NavItem eventKey="alteracaoDados">
      <NavIcon>
        <i className="fa-solid fa-users-gear" style={{ fontize: "1.5em" }}></i>
      </NavIcon>
      <NavText>Criar dados utilizador</NavText>
      <NavItem eventKey="criarcliente">
        <NavText>*Criar Cliente</NavText>
      </NavItem>
    </NavItem>
  ),
  visualizarDados: (
    <NavItem eventKey="visualizarDados">
      <NavIcon>
        <i className="fa-solid fa-eye" style={{ fontize: "1.5em" }}></i>
      </NavIcon>
      <NavText>Visualizar os dados</NavText>

      <NavItem eventKey="visualizarDadosFuncionarios">
        <NavText>*Dados dos Clientes</NavText>
      </NavItem>
    </NavItem>
  ),
  dadosEcopontos: (
    <NavItem eventKey="dadosEcopontos">
      <NavIcon>
        <i className="fa-solid fa-dumpster" style={{ fontize: "1.5em" }}></i>
      </NavIcon>
      <NavText>Dados dos ecopontos</NavText>
    </NavItem>
  ),
  dadosEcopontosI: (
    <NavItem eventKey="dadosEcopontosI">
      <NavIcon>
        <i className="fa-solid fa-dumpster" style={{ fontize: "1.5em" }}></i>
      </NavIcon>
      <NavText>Dados dos ecopontos Indústria</NavText>
    </NavItem>
  ),
  criarEcopontos: (
    <NavItem eventKey="criarEcopontos">
      <NavIcon>
        <i className="fa-solid fa-plus" style={{ fontize: "1.5em" }}></i>
      </NavIcon>
      <NavText>Criar Ecoponto</NavText>
    </NavItem>
  ),

  listaResiduosEletronicos: (
    <NavItem eventKey="dadosEcopontos">
      <NavIcon>
        <i
          className="fa-solid fa-rectangle-list"
          style={{ fontize: "1.5em" }}
        ></i>
      </NavIcon>
      <NavText>Lista Resíduos Eletrónicos</NavText>
    </NavItem>
  ),

  gestao: (
    <NavItem eventKey="listaDespejo">
      <NavIcon>
        <i className="fa-solid fa-list-check" style={{ fontize: "1.5em" }}></i>
      </NavIcon>
      <NavText>Lista quantidade levantadas</NavText>
    </NavItem>
  ),

  consultadados: (
    <NavItem eventKey="consultadados">
      <NavIcon>
        <i className="fa-solid fa-eye" style={{ fontize: "1.5em" }}></i>
      </NavIcon>
      <NavText>Consulta de Dados</NavText>
      <NavItem eventKey="dadosEcopontos">
        <NavText>* Consulta Dados Ecopontos e Resíduos</NavText>
      </NavItem>
      <NavItem eventKey="visualizarHorarios">
        <NavText>* Visualização Horários</NavText>
      </NavItem>
      <NavItem eventKey="sinaleticaEcopontos">
        <NavText>* Sinalética dos Ecopontos</NavText>
      </NavItem>
    </NavItem>
  ),

  listaResiduoscatalogados: (
    <NavItem eventKey="listaResiduoscatalogados">
      <NavIcon>
        <i
          className="
         fa-solid fa-clipboard-list"
          style={{ fontize: "1.5em" }}
        ></i>
      </NavIcon>
      <NavText>Componentes Catalogados</NavText>
    </NavItem>
  ),
  criarDespejo: (
    <NavItem eventKey="criarDespejo">
      <NavIcon>
        <i className="fa-solid fa-plus" style={{ fontize: "1.5em" }}></i>
      </NavIcon>
      <NavText>Criar Despejo</NavText>
    </NavItem>
  ),
};

const MySideNav = ({ auth }) => {
  const { userLogged } = auth;
  const navigate = useNavigate();

  const hasPermissions = (roles) => roles.includes(userRole);

  const userRole = userLogged?.role;

  const { ADMIN, COMPANY, INDUSTRY } = ROLES;

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
        {hasPermissions([ADMIN]) && routes.changeData}
        {hasPermissions([ADMIN]) && routes.visualizarDados}
        {hasPermissions([ADMIN]) && routes.dadosEcopontos}
        {hasPermissions([ADMIN]) && routes.criarEcopontos}
        {hasPermissions([INDUSTRY]) && routes.gestao}
        {hasPermissions([INDUSTRY]) && routes.dadosEcopontosI}
        {hasPermissions([INDUSTRY]) && routes.criarDespejo}
        {hasPermissions([INDUSTRY]) && routes.visualizacaoGrafico}
        {hasPermissions([COMPANY]) && routes.consultadados}
        {hasPermissions([COMPANY]) && routes.alteracaoDadosEcopontos}
        {hasPermissions([COMPANY]) && routes.consultadados.visualizarHorarios}
        {hasPermissions([COMPANY]) && routes.listaResiduoscatalogados}
        {hasPermissions([COMPANY]) && routes.visualizacaoGrafico}
        {hasPermissions([COMPANY]) && routes.criarEcopontos}
      </SideNav.Nav>
    </SideNav>
  );
};

export default MySideNav;
