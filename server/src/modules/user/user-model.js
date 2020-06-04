const mongoose = require('mongoose');
const userCollection = require('../../constants/MongoCollection').userCollectionName;

const userSchema = new mongoose.Schema({
    


})


const model = mongoose.model('User', userSchema, userCollection);