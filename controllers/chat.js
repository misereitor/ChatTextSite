module.exports = function (app) {

  const ChatController = {
    index: function (req, res) {
      const params = { sala: req.query.sala };
      res.render('chat/index', params);
      //console.log(req.session)
    }
  };

  return ChatController;

};