module.exports = function (app) {

  const autenticar = require('./../middlewares/autenticador')
  const autenticarDois = require('./../middlewares/autenticadorDois')
    , contatos = app.controllers.contatos;

  app.get('/contatos', autenticar, autenticarDois, contatos.index);
  app.post('/contato', autenticar, autenticarDois, contatos.create);

};