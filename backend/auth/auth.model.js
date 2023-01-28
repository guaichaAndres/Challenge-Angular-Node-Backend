/**
 * auth.model.js
 * Clase donde se define el esquema con Mongoose. De esta manera se define como se guardarán
 * los datos dentro de la base MongoDB
 * Autor: Guaicha Andres
 * Version: 1.0
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.set('strictQuery', true);
const userSchema = new Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      trim: true
    },
  },
  {
    timestamps: true,
  }
);

module.exports = userSchema;