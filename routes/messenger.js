const express = require('express'); 
const router = express.Router();

router.get('/', (req, res) => {
  res.send('messenger')
})

module.exports = router