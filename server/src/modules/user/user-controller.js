const express = require('express');
const router = express.Router();
const passport = require('passport');
const { userModel } = require('./user-model');
const logger = require('../../startup/logger');
const { resigerUser, loginUser } = require('./user-service');

// Verify user with Face book authentication
router.get('/auth/facebook',
  passport.authenticate('facebook', { scope: 'email' }));

router.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), (req, res) => {
  // res.send("Authttenciated")
}
);

// Veriy user with Google authentication
router.get('/auth/google', passport.authenticate('google', {
  scope: ['https://www.googleapis.com/auth/userinfo.profile', 'email', 'profile' ]
}));

router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  // res.send("Authttenciated")
}
);

// Login user with system user name and password
router.post('/auth/login', async (req, res) => {
  try {
    const user = await loginUser(req.body);
    return res.send(user);
  } catch (error) {
    return res.status(400).send({
      status: 'error',
      message: error.message
    })
  }
})

// Register user with system Id and password
router.post('/register/local', async (req, res) => {

  try {
    const user = await resigerUser(req.body);
    return res.send(user);
  } catch (error) {
    return res.status(400).send({
      status: 'error',
      message: error.message
    })
  }

})

module.exports = router;