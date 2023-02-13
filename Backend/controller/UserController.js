const User = require('../models/UserModel')
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
                return console.log(user)
                next()
            })
        }
    })

}

module.exports = Register