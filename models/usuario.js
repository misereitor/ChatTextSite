module.exports = function (app) {

  const db = require('../libs/db_connect');
  const mongoose = require('mongoose');

  const contato = mongoose.Schema({
    nome: String
    , email: String
  });

  return mongoose.model('contatos', contato);
};