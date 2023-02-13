const passport = require('passport')
const LocalStrategy = require('passport-local')
const User = require('../models/UserModel')
const {validatePassword} = require('./password')
const moment = require('moment')
const { where } = require('sequelize')
const passportIntialize = () => {
const passportConfig = (email, password, next) => {
    User.findOne(
        {
            where : { email : email}
        }
    )
    .then((user)=>{
        if(!user){
            next(null, false, {message: 'Email does not exist'})
        }
            if (user.isLocked){
                if (moment(user.LockedUntil).isAfter(moment.utc().format(), 'second')) {
                    next(null, false, {message: ` You are locked untill ${user.LockedUntil}`})
                }
                else {
                    User.update(
                        {
                            isLocked : false,
                            LockedUntil: null
                        },
                        {where : {id : user.id}}
                    );  
                }
            }
            const validate = validatePassword (password, user.hash, user.salt) 
            if(validate){
                User.update({ passwordRetry: 0 } , {where : {id : user.id}})
                next(null, user)
            }
            else{
                if(user.passwordRetry == 3 ){
                    User.update({
                        isLocked: true,
                        LockedUntil: moment.utc().add(5, 'm').format(),
                        passwordRetry: 0
                    },
                    { where : {id : user.id}}
                    )   
                    return next(null, false, {message : 'Too many password retries '})
                }
                else{
                    User.increment('passwordRetry',{
                        by: 1,
                        where : {id : user.id}
                    })
                    next(null, false, {message: 'Incorrect Password'})
                }
                
            }

            
        
    })
    .catch((error)=> {
        console.log('Internal error', error)
    })
}

const strategy  = new LocalStrategy(
    {
        usernameField: "email",
        passwordField: "password",
    },
    passportConfig
)
passport.use(strategy)

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findOne({
        where : {id : id}
    })
    .then((user)=> {
        done(null, user)
    })
    .catch((user)=>{
        done(null, user)
    })
})
}
module.exports = passportIntialize