/**
 * auth.dao.js
 * En esta clase se encontrara todo lo que respecta a la logica de negocio
 * Autor: Guaicha Andres
 * Version: 1.0
 */
const mongoose = require('mongoose');
const authSchema = require('./auth.model');

authSchema.statics = {
    create: function (data,cb){
        const user = new this(data);
        user.save(cb);
    },
    login: function (query, cb){
        this.find(query,cb);
    }
}
const authModel = mongoose.model('Users',authSchema);
module.exports =authModel;