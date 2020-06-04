const constants = require('../constant/ApplicationConstant');
const { validateMondoDBObjectID } = require('../utils/mongo/mongoDbUtils');

module.exports = function (req, res, next) {
  const userId = req.params.id || req.body._id;
  if (!validateMondoDBObjectID(userId)) {
    return res.status(400).send({
      status: constants.errorStatusString,
      message: 'Invalid Object Id',
    });
  }
  next();
};
