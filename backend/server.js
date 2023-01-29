/**
 * server.js
 * Archivo main que servirá para iniciar la aplicacion
 * Autor: Guaicha Andres
 * Version: 1.0
 */
"use strict";
//Se hará uso del framework express. La version se indica en el archivo package.json
const cors = require ('cors');
const authRoutes = require ('./auth/auth.routes');
const trRoutes  = require ('./tr/tr.routes');
const express = require("express");
const properties = require('./config/properties');
const DB= require('./config/db');
//initDB
DB();
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const bodyParserJSON = bodyParser.json();
const bodyParserURLEnconded = bodyParser.urlencoded({extended:true});
app.use(bodyParserJSON);
app.use(cors());
app.use(bodyParserURLEnconded);
app.use('api',router);
authRoutes(router);
trRoutes(router);
router.get('/',(req,res)=>{
});
app.use(router);
app.listen(3000, () => console.log(`server running on port ${properties.PORT}`));
