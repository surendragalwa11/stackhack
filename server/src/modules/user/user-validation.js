const Joi = require('@hapi/joi');

const validateUser = (userDTO) => {

    const schema = {
        username: Joi.string().required(),
        userId: Joi.string(),
        fullName: Joi.string(),
        email: Joi.string().required(),
        authSource: Joi.string(),
        password: Joi.string().required(),
    }
    return Joi.validate(userDTO, schema);
}

const validateUserLogin = (userDTO) => {

    const schema = {
        username: Joi.string().required(),
        password: Joi.string().required(),
    }
    return Joi.validate(userDTO, schema);
}



module.exports = {
    validateUser,
    validateUserLogin
}