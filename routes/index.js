const wechat = require('./wechat');
const messenger = require('./messenger');

const routes = (app) => {
  app.use('/wechat', wechat);
  app.use('/messenger', messenger);
}

module.exports = routes;