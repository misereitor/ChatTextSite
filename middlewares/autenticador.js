module.exports = function (req, res, next) {
  if (!req.session.usuario) {
    return res.redirect('/')
    //} else if (!req.session.usuario.password) {
    //res.redirect('/chat')
  } else {
    next()
  }
  //console.log(req.session.usuario)
};