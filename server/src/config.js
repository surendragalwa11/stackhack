module.exports = Object.freeze({
    'facebookAuth': {
        clientId: process.env.fb_clientId,
        clientSecret: process.env.fb_clientSecret,
        callBackURL: process.env.fb_callBackURL + '/api/v1/user/auth/facebook/callback',
    }, 
    'googleAuth': {
        clientId: process.env.google_clientId,
        clientSecret: process.env.google_clientSecret,
        callBackURL: process.env.google_callBackURL + '/api/v1/user/auth/google/callback'
    }
})