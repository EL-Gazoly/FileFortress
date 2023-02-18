const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy;
const authenticate = require('../middlewares/passport-function')


passport.use( new FacebookStrategy({
    clientID : process.env.FACEBOOK_APP_ID,
    clientSecret : process.env.FACEBOOK_APP_SECRET,
    callbackURL : '/api/auth/facebook/callback',
    profileFields: ['id', 'displayName', 'email', 'name']
},
function(accessToken, refreshToken, profile, cb) {
authenticate(accessToken, refreshToken, profile, cb)
}))