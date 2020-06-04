module.exports = Object.freeze({
    'facebookAuth': {
        clientId: process.env.fb_clientId,
        clientSecret: process.env.fb_clientSecret,
        callBackURL: process.env.fb_callBackURL + '/api/v1/user/auth/facebook/callback',
    }, 
    'googleAuth': {
        clientId: '',
        clientSecret: '',
        callBackURL: '',
    }
})