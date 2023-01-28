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
//Se usa encriptamiento de contrasena por motivos de seguridad mediante bcrypt
exports.createUser = (req, res, next) => {
  const newUser = {
    //Aqui se recuperan los datos desde el front
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
  };
  User.create(newUser, (err, user) => {
    if(err && err.code===11000) return res.status(409).send("El correo electrónico ya existe");
    if (err) return res.status(500).send("Server Error");
    /**
     * El tiempo de duracion que tendra
     * la sesion del usuario
     */
    const expiresIn = 24 * 60 * 60;
    const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, {
      expiresIn: expiresIn,
    });
    //El objeto que se envia al front
    //No hace falta que la contrasena se vea en el front.
    const dataUser = {
      name: user.name,
      email: user.email,
      accessToken: accessToken,
      expiresIn: expiresIn
    }
    //El response hacia el frontend
    res.send({ dataUser });
  });
};

exports.loginUser = (req, res, next) => {
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
      //Se compara la contrasena recuperada de la BD con la contrasena que da el usuario
      const resultPassword = bcrypt.compareSync(userData.password,user.password);
      if (resultPassword) {
        const expiresIn = 24 * 60 * 60;
        const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, {
          expiresIn: expiresIn,
        });
        //Por seguridad se envian datos necesarios para frontend, pero no la contrasena
        const dataUser = {
          name: user.name,
          email: user.email,
          accessToken: accessToken,
          expiresIn: expiresIn
        }
        res.send({ dataUser });
      } else {
        //password invalido
        res.status(409).send({ message: "Algo ha salido mal" });
      }
    }
  });
};
