/* eslint-disable func-names */
const jwt = require('jsonwebtoken');
const { getEnvVariable } = require('../utils/getEnvVariable');
const constants = require('../constant/ApplicationConstant');
const logger = require('../startup/logger');

// To validate the JWT token from header
module.exports = function (req, res, next) {
  const token = req.header(constants.tokenHeaderNanme) ? req.header(constants.tokenHeaderNanme) : req.query.token;
  // Return if no token in header
  if (!token) {
    return res.status(401).send({
      status: constants.errorStatusString,
      message: 'No token provided',
    });
  }
  
  try {
    const decoded = jwt.verify(token, getEnvVariable('JWT_PRIVATE_KEY'));
    req.user = decoded;
    req.token = token;
    if (!req.user.client_acronym) {
      logger.error('Could not get client acronym. Which collection should I use?');
      throw new Error()
    }
    next();
  } catch (ex) {
    return res.status(401).send({
      status: constants.errorStatusString,
      message: 'Invalid token',
    });
  }
};
