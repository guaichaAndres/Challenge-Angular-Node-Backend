/**
 * server.js
 * Archivo main que servirá para iniciar la aplicacion
 * Autor: Guaicha Andres
 * Version: 1.0
 */
"use strict";
//Se hará uso del framework express. La version se indica en el archivo package.json
const express = require("express");
const app = express();

app.listen(3000, () => console.log(`server running on port 3000`));
