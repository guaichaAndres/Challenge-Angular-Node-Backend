const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.set('strictQuery', true);

const balanceSchema = new Schema({

ingresos:[{
    lunes: 1000,
    martes: 22588,
    miercoles: 4564,
    jueves: 46445,
    viernes: 78997
}],


egresos:[{
    lunes: 89797,
    martes: 65465,
    miercoles: 46546,
    jueves: 65465,
    viernes: 654654
}]

  });