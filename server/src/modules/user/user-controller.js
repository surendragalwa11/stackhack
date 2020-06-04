const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res) => {
    console.log('User Get.')
    res.send('All users')
});


router.get('/auth/facebook',
  passport.authenticate('facebook'));

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    // res.redirect('/');
    res.send("Authttenciated")
  });

module.exports = router;