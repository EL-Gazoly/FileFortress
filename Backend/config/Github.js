const GithubStrategy = require('passport-github').Strategy;
const passport = require('passport')
const User = require('../models/UserModel')
const {Op} = require('sequelize')

passport.use( new GithubStrategy({
    clientID : process.env.GITHUB_CLIENT_ID,
    clientSecret : process.env.GITHUB_CLIENT_SECRET,
    callbackURL : '/api/auth/github/callback',
    profileFields: ['id', 'displayName', 'email']
},
function(accessToken, refreshToken, profile, cb){
    const {id, displayName, username, email, provider} = profile;
    User.findOne({
        where : {
                [Op.and] : [
                    {id : id},
                    {LoginStrategy : provider}
                ]
        }
    })
    .then((user)=>{
        if(user){
            cb(null, user)
        }
        else{
            User.create({
                id: id,
                name: displayName,
                email: email || `${username}@github.com`,
                LoginStrategy: provider 
            })
            .then(user => {
                return cb(null, user)
            })
            .catch(err => cb(err))
        }
    })
    .catch(err => cb(err))
    console.log(profile)
}
))