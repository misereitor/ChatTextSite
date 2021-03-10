module.exports = function (app) {

  const Usuario = app.models.usuarioMaster;
  const Contatos = app.models.usuario;


  const ContatoController = {

    index: function (req, res) {
      Contatos.find(function (erro, contato) {
        const resultado = { contatos: contato };
        res.render('contatos/index', resultado);
      });
    },

    create: function (req, res) {
      Usuario.findById(_id, function (erro, usuario) {
        const contato = req.body.contato;
        usuario.contatos.push(contato);
        usuario.save(function () {
          res.redirect('/contatos');
        });
      });
    },

    // show: function (req, res) {
    //   Contatos.find(function (erro, contatos) {
    //     const contatoID = req.params.id;
    //     const contato = contatos.id(contatoID);
    //     const resultado = { contato: contato };
    //     console.log(contato)
    //     res.render('contatos/show', resultado);
    //   });
    // },

    // edit: function (req, res) {
    //   const _id = req.session.usuario._id;
    //   Usuario.findById(_id, function (erro, usuario) {
    //     const contatoID = req.params.id;
    //     const contato = usuario.contatos.id(contatoID);
    //     const resultado = { contato: contato };
    //     res.render('contatos/edit', resultado);
    //   });
    // },

    // update: function (req, res) {
    //   const _id = req.session.usuario._id;
    //   Usuario.findById(_id, function (erro, usuario) {
    //     const contatoID = req.params.id;
    //     const contato = usuario.contatos.id(contatoID);
    //     contato.nome = req.body.contato.nome;
    //     contato.email = req.body.contato.email;
    //     usuario.save(function () {
    //       res.redirect('/contatos');
    //     });
    //   });
    // },

    // destroy: function (req, res) {
    //   const _id = req.session.usuario._id;
    //   Usuario.findById(_id, function (erro, usuario) {
    //     const contatoID = req.params.id;
    //     usuario.contatos.id(contatoID).remove();
    //     usuario.save(function () {
    //       res.redirect('/contatos');
    //     });
    //   });
    // }
  }
  return ContatoController;
};