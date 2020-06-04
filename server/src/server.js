const express = require("express");
require('dotenv').config();
// Assign environment variables
const port = process.env.PORT || 4000;
const config = require('./config')

/**
 * Setup services
 */

// Initiliase an express server
const app = express();

// Options to pass to mongodb to avoid deprecation warnings
const options = {
  useNewUrlParser: true
};

require('./startup/db')();
require('./startup/routes')(app);
require('./startup/passport');
app.listen(port, () => console.log(`Listening on port ${port}`));
