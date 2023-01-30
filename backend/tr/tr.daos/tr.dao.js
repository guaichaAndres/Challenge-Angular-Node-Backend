const mongoose = require('mongoose');
const trSchema = require('../tr.models/tr.model');
trSchema.statics = {
    create: function (data,cb){
        const card = new this(data);
        card.save(cb);
    },
}
const trModel = mongoose.model('Cards',trSchema);

module.exports =trModel;


