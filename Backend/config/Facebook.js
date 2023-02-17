const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../models/UserModel')
const passport = require('passport')
const {Op} = require('sequelize')
passport.use( new FacebookStrategy({
    clientID : process.env.FACEBOOK_APP_ID,
    clientSecret : process.env.FACEBOOK_APP_SECRET,
    callbackURL : '/api/auth/facebook/callback',
    profileFields: ['id', 'displayName', 'email']
},
function(accessToken,refreshToken, profile, cb ) {
    User.findOne({
        where : {
            [Op.and] : [
                {id : profile.id},
                {LoginStrategy : 'facebook'}
            ]
        }
    })
    .then((user) => {
        if (user){
            return cb(null, user)
        }
        else {
            
            User.create({
                id : profile.id,
                name : profile.displayName,
                email : profile.emails[0].value,
                LoginStrategy: profile.provider
            })
            .then(user => {
                return cb(null ,user)
            })
            .catch(err => cb(err))
        }
    })
    .catch(error => {
        return cb(error)
    })
    console.log(profile);
}
))