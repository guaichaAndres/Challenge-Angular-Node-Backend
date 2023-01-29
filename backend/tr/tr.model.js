const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.set('strictQuery', true);

const cardSchema = new Schema({
    saldo: {
        type: Number,
        required: true,
      },
      vencimiento: {
        type: String,
        required: true,
      },
      numero: {
        type: Number,
        required: true,
      },
      codigoSeguridad: {
        type: Number,
        required: true,
      },
      titular: {
         type: String
      },
});


module.exports = cardSchema;