const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./utils/logger');
const routes = require('./routes')
const app = express().use(bodyParser.json());
const port = Number(process.env.PORT) || 4012;

routes(app);

app.listen(port, (err) => {
  if (err) throw err;
  logger.info(`server start at port: ${port}`);
})