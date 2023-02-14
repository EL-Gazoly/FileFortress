const UserRouter = require('express').Router()
const {Register , Login} = require('../controller/UserController')
const isAuth = require('../middlewares/checkAuth')

UserRouter.post('/register', Register, (req, res, next) => {
    res.status(200).json({msg: 'Ok'})
})

UserRouter.post('/login', Login, (req, res, next) => {
    res.status(200).json({ msg: 'Ok'})
})

UserRouter.post("/logout", isAuth, (req, res, next) => {
  req.logout((err)=>{
    if(err){
        return next(err);
    }
    return res.json('Okay you are loged out now, see you later i guess :(')
  });
  
});

module.exports = UserRouter