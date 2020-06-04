const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const config = require('../config');

passport.use(new FacebookStrategy({
    clientID: config.facebookAuth.clientId,
    clientSecret: config.facebookAuth.clientSecret,
    callbackURL: config.facebookAuth.callBackURL
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

