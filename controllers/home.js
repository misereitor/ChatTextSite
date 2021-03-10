module.exports = function (app) {

  const chat = app.controllers.chat
  const Usuario = app.models.usuario;
  const UsuarioMaster = app.models.usuarioMaster;

  const HomeController = {
    index: function (req, res) {
      res.render('home/index');
    },

    login: function (req, res) {
      const query = { email: req.body.usuario.email };
      Usuario.findOne(query)
        .select('nome email')
        .exec(function (erro, usuario) {
          if (usuario) {
            req.session.usuario = usuario;
            res.redirect('/chat');
          } else {
            Usuario.create(req.body.usuario, function (erro, usuario) {
              if (erro) {
                res.redirect('/');
              } else {
                req.session.usuario = usuario;
                res.redirect('/chat');
              }
            });
          }
        });
    },

    loginmaster: function (req, res) {
      res.render('login/index');
    },

    register: function (req, res) {
      const query = { email: req.body.usuario.email };
      const user = req.body.usuario
      UsuarioMaster.findOne(query)
        .select('nome email password')
        .exec(function (erro, usuario) {
          if (usuario) {
            if (user.nome) {
              res.redirect('/login');
            } else if (usuario.password == user.password) {
              req.session.usuario = usuario;
              res.redirect('/contatos');
            } else {
              res.redirect('/login')
            }
          } else {
            UsuarioMaster.create(req.body.usuario, function (erro, usuario) {
              if (erro) {
                res.redirect('/login');
              } else {
                req.session.usuario = usuario;
                res.redirect('/contatos');
              }
            });
          }
        });
    },

    exitChat: function (req, res) {

    },

    logout: function (req, res) {
      req.session.destroy();
      res.redirect('/login');
    }
  };

  return HomeController;

};