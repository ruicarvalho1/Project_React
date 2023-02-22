import jwt from "jwt-decode";

export const ROLES = {
  ADMIN: "ADMIN",
  COMPANY: "COMPANY",
  INDUSTRY: "INDUSTRY",
};

export const getTokenInfo = (tokenAux = null) => {
  //Info do token
  const token = tokenAux || localStorage.getItem("token");
  if (!token) return null;

  const payload = jwt(token);
  console.log(payload.data);
  /**
   *
   * admin
   * username
   * utilizador_empresa
   * utilizador_gestor_industria
   *
   * 3 users:
   *
   * 1 ADMIN (admin = true)
   * 2 COMPANY (utilizador_empresa != NULL)
   * 3 INDUSTRY (utilizador_gestor_industria != NULL)
   */

  if (payload.data.admin) {
    payload.data.role = ROLES.ADMIN;
  }

  if (payload.data.utilizador_empresa !== null) {
    payload.data.role = ROLES.COMPANY;
  }

  if (payload.data.utilizador_gestor_industria !== null) {
    payload.data.role = ROLES.INDUSTRY;
  }

  return payload.data;
};
