module.exports = function (app) {

  const autenticar = require('./../middlewares/autenticador')
    , chat = app.controllers.chat;
  app.get('/chat', autenticar, chat.index);

};