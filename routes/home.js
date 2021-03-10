module.exports = function (app) {

  const home = app.controllers.home;

  app.get('/', home.index);
  app.get('/login', home.loginmaster);
  app.post('/entrar', home.login);
  app.post('/cadastrar', home.register);
  app.get('/sair', home.logout);
};