const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('Ping Get.')
    res.send('Application up and running')
});

module.exports = router;