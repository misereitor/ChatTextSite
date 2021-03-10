const mongoose = require('mongoose')
const bluebird = require('bluebird')
const currentEnv = process.env.NODE_ENV || 'development'
const envURL = {
  test: 'mongodb://localhost:27017/ntalk_test',
  development: 'mongodb://localhost:27017/ntalk'
}
mongoose.Promise = bluebird
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

module.exports = mongoose.connect(envURL[currentEnv], {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})