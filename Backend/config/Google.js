const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const {Op} = require('sequelize')
const User = require('../models/UserModel')


passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/api/auth/google/callback"
      }, function(accessToken, refreshToken, profile, cb) {
        User.findOne({
          where: {
            [Op.and]: [
              { id: profile.id },
              { LoginStrategy: 'google' }
            ]
          }
        }).then(user => {
          if (user) {
            return cb(null, user);
          } else {
            User.create({
              id: profile.id,
              name: profile.displayName,
              email: profile.emails[0].value,
              LoginStrategy: 'google'
            }).then(createdUser => {
              return cb(null, createdUser);
            }).catch(error => {
              return cb(error);
            });
          }
        }).catch(error => {
          return cb(error);
        });
      }));
      