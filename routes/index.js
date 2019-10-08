const path = require('path');
const router = require('express').Router();
const messages = require('./messages.js');
const calendar = require('./calendar.js');

router.use('/api', messages);
router.use('/api', calendar);

module.exports = router;