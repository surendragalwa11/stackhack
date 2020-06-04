const express = require('express');
const router = express.Router();
const passport = require('passport');
const { userModel } = require('./user-model');
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    console.log('User Get.')
    res.send('All users')
});

router.get('/auth/facebook',
  passport.authenticate('facebook', {scope: 'email'}));

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    // res.redirect('/');
    res.send("Authttenciated")
  });

router.post('/auth/login', async (req, res) => {
  if(!req.body.username){ 
    res.json({success: false, message: "Username was not given"}) 
  } else { 
    if(!req.body.password){ 
      res.json({success: false, message: "Password was not given"}) 
    }else{
		try {
			const { user } = await userModel.authenticate()(req.body.username, req.body.password);
			if(user) {
				console.log(`${JSON.stringify(user)}`)
				const token = jwt.sign({userId : user._id,  
					               username:user.username}, 'secretkey',  
					                  {expiresIn: '24h'}) 
				res.json({success:true, message:"Authentication  successfull", token: token }); 
			} else {
				res.json({success:false, message:'Incorrect username or password'})
			}
		}catch (err) {
			// if (err instanceof IncorrectUsernameError) {
				console.error(`Incorrect username error : ${err}`);
			// }
			res.json({success:false, message:'Incorrect username or password'})
		}

    } 
  } 
}
)


router.post('/register/local', (req, res) => {
  let newUser = userModel({
          username: req.body.username,
          userId: req.body.userId,
          email: req.body.email,
          'authFrom.soruce': 'local'
  })

  userModel.register(newUser, req.body.password, (err, user) => {
    if(err) {
      res.send(`Some error : ${err}`)
    }else {
      res.send('Successfuly created')
    }
  })
})

module.exports = router;