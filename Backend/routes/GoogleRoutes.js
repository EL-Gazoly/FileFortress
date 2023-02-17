const GoogleRotuer = require('express').Router()
const passport = require('passport')



GoogleRotuer.get('/',   passport.authenticate('google', { scope: ['profile', 'email'] }) )


GoogleRotuer.get(
    "/callback",
    passport.authenticate("google", { failureRedirect: "/login" }),
    function (req, res) {
      // Successful authentication, redirect home.
      res.redirect("/");
    }
  );
module.exports = GoogleRotuer