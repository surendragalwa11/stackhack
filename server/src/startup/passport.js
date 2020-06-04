const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const config = require('../config');
const { userModel } = require('../modules/user/user-model');

passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());
passport.use(new LocalStrategy(userModel.authenticate()));

passport.use(new FacebookStrategy({
  clientID: config.facebookAuth.clientId,
  clientSecret: config.facebookAuth.clientSecret,
  callbackURL: config.facebookAuth.callBackURL,
  profileFields: ['id', 'displayName', 'photos', 'email']
},
  async function (accessToken, refreshToken, profile, cb) {
    try {
      let user = await userModel.findOne({ 'userId': profile.id });
      if (user) {
        console.log('user found');
        return cb(user);
      }else {
        console.log(JSON.stringify(profile))
        let newUser = new userModel({
          username: profile.displayName,
          userId: profile.id,
          email: profile.emails[0].value,
          'authFrom.soruce': 'fb'
        })

        await newUser.save();
        return cb(newUser);
      }
    } catch (error) {
      console.log(`SOme error : ${error}`);
    }
  }
));

