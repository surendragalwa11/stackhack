const mongoose = require('mongoose');
const connection = mongoose.connection;
const logger = require('./logger');

const db = process.env.DB_URL;

const connectToDb = () => {
  mongoose.connect(db, {
    useNewUrlParser: true,
  })
    .then(() => {
      logger.info(`Connected to ${db}`)
    })
    .catch((error) => {
      logger.error(`Error in connecting to mongo db ${error}`);
      // process.exit(1);
    });
}

module.exports = async function () {
  connectToDb();
};
