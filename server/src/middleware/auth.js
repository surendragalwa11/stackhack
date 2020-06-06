/* eslint-disable func-names */
const jwt = require('jsonwebtoken');
const { getEnvVariable } = require('../utils/getEnvVariable');
const constants = require('../constants/ApplicationConstants');
const logger = require('../startup/logger');

// To validate the JWT token from header
module.exports = function (req, res, next) {
  const token = req.header(constants.tokenHeaderName) ? req.header(constants.tokenHeaderName) : req.query.token;
  // Return if no token in header
  if (!token) {
    return res.status(401).send({
      status: constants.errorStatusString,
      message: 'No token provided',
    });
  }
  
  try {
    const decoded = jwt.verify(token, getEnvVariable('JWT_PRIVATE_KEY'));
    req.userId = decoded.userId;
    req.username = decoded.username;
    req.token = decoded
    next();
  } catch (ex) {
    return res.status(401).send({
      status: constants.errorStatusString,
      message: 'Invalid token',
    });
  }
};
