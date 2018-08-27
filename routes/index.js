const wechat = require('./wechat');
const home = require('./home');
const messenger = require('./messenger');

const routes = (app) => {
  app.use('/', home);
  app.use('/wechat', wechat);
  app.use('/messenger', messenger);
}

module.exports = routes;