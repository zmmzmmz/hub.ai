const express = require('express');
const crypto = require('crypto');
const logger = require('../utils/logger');
const xml2js = require('xml2js');
const axios = require('axios');
const router = express.Router();
const token = 'weixin';

router.get('/', async (req, res) => {
  const {signature, timestamp, nonce, echostr} = req.query;
  const query = [token, timestamp, nonce];
  query.sort();
  const queryStr = query.join('');
  const hashCode = crypto.createHash('sha1');
  const resCode = hashCode.update(queryStr, 'utf8').digest('hex');
  if (signature === resCode) {
    logger.info('receive auth message');
    res.send(echostr);
  } else {
    logger.warn('receive auth message, but mismatch');
    res.send('mismatch');
  }
}).post('/', (req, res) => {
  let buffer = []
  req.on('data', (data) => {
    buffer.push(data)
  })
  req.on('end', () => {
    const msgXml = Buffer.concat(buffer).toString('utf-8');
    xml2js.parseString(msgXml, {explicitArray : false}, (err, result) => {
      if (err) res.status(500).send(err.message)
      result = result.xml
      console.log(result, req)
      res.send('receive messages')
    })
  })
}).get('/token', async (req, res) => {
  res.send('token')
})

module.exports = router;