const passport = require('passport')
const GithubStrategy = require('passport-github2').Strategy;
const authenticate = require('../middlewares/passport-function')

passport.use( new GithubStrategy({
    clientID : process.env.GITHUB_CLIENT_ID,
    clientSecret : process.env.GITHUB_CLIENT_SECRET,
    callbackURL : '/api/auth/github/callback',
    profileFields: ['id', 'displayName', 'email']
},
function(accessToken, refreshToken, profile, cb){
    authenticate(accessToken, refreshToken , profile, cb)
}))