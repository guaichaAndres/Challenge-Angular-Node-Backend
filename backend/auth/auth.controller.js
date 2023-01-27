/**
 * auth.controller.js
 * En este archivo se realizan los procedimientos
 * (métodos) necesarios para los endpoints
 * Autor: Guaicha Andres
 * Version: 1.0
 */
const User = require("./auth.dao");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const res = require("express/lib/response");
const SECRET_KEY = "P@ss123456";

//Esto servirá para crear un nuevo usuario.
exports.createUser = (req, res, next) => {
  const newUser = {
    //Aqui se recuperan los datos desde el front
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  User.create(newUser, (err, user) => {
    if (err) return res.status(500).send("Server Error");
    /**
     * El tiempo de duracion que tendra
     * la sesion del usuario
     */
    const expiresIn = 24 * 60 * 60;
    const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, {
      expiresIn: expiresIn,
    });
    //El response hacia el frontend
    res.send({ user });
  });
};

exports.loginUser = (req, res, next) => {};
const userData = {
  email: req.body.email,
  password: req.body.password,
};
User.findOne({ email: userData.email }, (err, user) => {
  if (err) return res.status(500).send("Server error!");
  if (!user) {
    //email invalido
    res.status(409).send({ message: "Algo ha salido mal" });
  } else {
    const resultPassword = userData.password;
    if (resultPassword) {
      const expiresIn = 24 * 60 * 60;
      const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, {
        expiresIn: expiresIn,
      });
      res.send({ userData });
    } else {
      //password invalido
      res.status(409).send({ message: "Algo ha salido mal" });
    }
  }
});
