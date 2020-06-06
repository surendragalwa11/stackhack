const mongoose = require('mongoose');
const userCollection = require('../../constants/MongoCollection').userCollectionName;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'User Name is required']
    },
    userId: {
        type: String,
        required: [true, 'User Id is required']
    },
    fullName: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    authSource: {
        type: String,
    },
    createdOn: {
        type: Date,
        default: Date.now,
    },
    updatedOn: {
        type: Date,
        default: Date.now,
    }
})

userSchema.plugin(passportLocalMongoose);

const model = mongoose.model('User', userSchema, userCollection);

module.exports.userModel = model