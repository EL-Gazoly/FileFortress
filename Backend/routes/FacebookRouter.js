const FacebookRouter = require('express').Router()
const passport = require('passport')


FacebookRouter.get('/', passport.authenticate('facebook', {scope: ['email']}))

FacebookRouter.get('/callback', passport.authenticate('facebook', {failureRedirect: '/login'}),
function(req, res){
    res.redirect('/')
}
)

module.exports = FacebookRouter