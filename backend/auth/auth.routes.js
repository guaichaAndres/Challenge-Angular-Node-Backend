/**
 * auth.routes.js
 * Aquí se llaman a los métodos del controller para asignarlos a una ruta
 *especifica.
 * Autor: Guaicha Andres
 * Version: 1.0
 */
const Users = require("./auth.controller");

module.exports = (router) => {
  router.post("register", Users.createUser);
  router.post("login", Users.loginUser);
};
