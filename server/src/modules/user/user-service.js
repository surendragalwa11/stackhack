const { validateUser, validateUserLogin } = require('./user-validation');
const logger = require('../../startup/logger');
const { userModel } = require('./user-model');
var uuid = require('node-uuid');
const jwt = require('jsonwebtoken');
const { getEnvVariable } = require('../../utils/getEnvVariable');

const resigerUser = async (userDTO) => {

    const isValidUser = validateUser(userDTO);
    if (isValidUser.error) {
        throw new Error(isValidUser.error.details[0].message, 400)
    }

    let newUser = userModel({
        username: userDTO.username,
        userId: uuid.v1(),
        email: userDTO.email,
        authSource: 'local'
    })

    const user = await userModel.register(newUser, userDTO.password);
    return {
        status: 'success',
        message: 'User created successfully'
    }

};

const loginUser = async (userDTO) => {
    const isValidUser = validateUserLogin(userDTO);
    if (isValidUser.error) {
        throw new Error(isValidUser.error.details[0].message, 400)
    }

    const { user } = await userModel.authenticate()(userDTO.username, userDTO.password);
    if (user) {
        logger.debug(`${JSON.stringify(user)}`)
        const token = jwt.sign({
            userId: user._id,
            username: user.username
        }, getEnvVariable('JWT_PRIVATE_KEY'),
            { expiresIn: '24h' })
        return ({ success: true, message: "Authentication  successfull", token: token });
    } else {
        throw new Error('Incorrect username or password');
    }
}

module.exports = {
    resigerUser,
    loginUser
}