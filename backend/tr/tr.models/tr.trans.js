const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.set('strictQuery', true);

const transSchema = new Schema({

    receptor: {
      type: String,
      required: true
    },
    monto: {
  type: Number,
  required: true
    },
    fecha: {
  type: String,
  required: true
    },
    estado: {
  type: Boolean,
  required: true,
  default: true,
    },
    emisor: {
        type: Schema.ObjectId, 
        ref: "User" 
     },
  });
  module.exports = transSchema;
