const UserRouter = require('express').Router()
const Register = require('../controller/UserController')

UserRouter.post('/register', Register, (req, res, next) => {
    res.status(200).json({msg: 'Ok'})
})

module.exports = UserRouter