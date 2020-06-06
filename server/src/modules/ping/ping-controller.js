const express = require('express');
const router = express.Router();
const logger = require('../../startup/logger');
const mongoose = require('mongoose')

router.get('/', (req, res) => {
    res.status(200).send({
        status: 'success',
        message,
        mongoDbConnectionState: mongoose.STATES[mongoose.connection.readyState],
      });
});

module.exports = router;