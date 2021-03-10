module.exports = function (req, res, next) {
    if (!req.session.usuario.password) {
        res.redirect('/')
    } else {
        next()
    }
};