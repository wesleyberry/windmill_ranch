const path = require('path');
const router = require('express').Router();
const messages = require('./messages.js');

router.use('/api', messages);

module.exports = router;