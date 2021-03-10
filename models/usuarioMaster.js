module.exports = function (app) {

    const db = require('../libs/db_connect');
    const mongoose = require('mongoose');


    const usuarioMaster = mongoose.Schema({
        nome: { type: String, required: true }
        , email: {
            type: String, required: true
            , index: { unique: true }
        },
        password: { type: String, require: true }

    });

    return mongoose.model('usuariosMaster', usuarioMaster);
};