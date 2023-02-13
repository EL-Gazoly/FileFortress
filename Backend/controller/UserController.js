const User = require('../models/UserModel')
const passport = require('passport')
const { generatePassword} = require('../config/password')
const Register = (req, res, next)=> {
    User.findOne({
        where: {email: req.body.email}      
    })
    .then((user)=>{
        if (user){
            res.status(400)
            return res.json({error: 'email already exist'})
        }
        else{
            const {salt, hash} = generatePassword(req.body.password)
            User.create({
                name: req.body.name,
                email : req.body.email,
                hash: hash, 
                salt: salt,
            })
            .then((user)=>{
                return console.log('Ok' ,user.id)
            })
            next()
        }
    })

}
const Login = (req, res, next) => {
passport.authenticate('local', function(err, user, info){
    if( err ){
        res.status(404).json(err)
    }
    if( !user ){
        res.status(401).json(info)
    }
    req.logIn(user, function (err) {
        if ( err ){
            return next(err)
        }
        return next()
    })
})(req, res, next)
}

module.exports = {
    Register, 
    Login
}