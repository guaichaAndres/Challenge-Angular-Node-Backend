const mongoose = require('mongoose');

const transSchema = require('../tr.models/tr.trans')

transSchema.statics = {
    create: function (data,cb){
        const trans = new this(data);
        trans.save(cb);
    },
}

const transModel = mongoose.model('Trans',transSchema);

module.exports =transModel;