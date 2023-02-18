const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const authenticate = require('../middlewares/passport-function')


passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/api/auth/google/callback"
      }, function(accessToken, refreshToken, profile, cb) {
        authenticate(accessToken, refreshToken, profile, cb)
      }));
      