const path = require('path');
const router = require('express').Router();
const messages = require('./messages.js');
const calendar = require('./calendar.js');
const users = require('./users.js');

// Bundles routes to /api
router.use('/api', messages);
router.use('/api', calendar);
router.use('/api', users);

module.exports = router;