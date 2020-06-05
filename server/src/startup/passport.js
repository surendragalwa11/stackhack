const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const config = require('../config');
const { userModel } = require('../modules/user/user-model');
const logger = require('./logger');
const profielFiledsFB = require('../constants/ApplicationConstants').facebookProfileFields;

passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());
// Strategy to authenticate for system username and password
passport.use(new LocalStrategy(userModel.authenticate()));

// Stratey for facebook usernamae and password
passport.use(new FacebookStrategy({
  clientID: config.facebookAuth.clientId,
  clientSecret: config.facebookAuth.clientSecret,
  callbackURL: config.facebookAuth.callBackURL,
  profileFields: profielFiledsFB
},
  async function (accessToken, refreshToken, profile, cb) {
    try {
      let user = await userModel.findOne({ 'userId': profile.id });
      if (user) {
        logger.info('user found');
        return cb(user);
      }else {
        logger.debug(`Facebook user not found. Creating one...`)
        let newUser = new userModel({
          username: profile.displayName,
          userId: profile.id,
          email: profile.emails[0].value,
          authSource: 'fb'
        })

        await newUser.save();
        return cb(newUser);
      }
    } catch (error) {
      logger.error(`SOme error : ${error}`);
    }
  }
));
