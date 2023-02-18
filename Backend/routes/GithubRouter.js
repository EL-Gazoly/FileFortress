const passport = require('passport')
const GithubRouter = require('express').Router()

GithubRouter.get('/', passport.authenticate('github', {scope : [ 'user:email' ] }))

GithubRouter.get('/callback', passport.authenticate('github' , {failureRedirect : '/login'}),
function(req, res){
    res.redirect('/')
}
)

module.exports = GithubRouter