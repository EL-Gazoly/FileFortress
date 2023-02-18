const User = require('../models/UserModel')
const {Op} = require('sequelize')

function authenticate(accessToken, refreshToken, profile, cb, id, ){
    User.findOne({
        where: {
          [Op.and]: [
            { id: profile.id },
            { LoginStrategy: profile.provider }
          ]
        }
      }).then(user => {
        let email = profile.emails && profile.emails.length > 0 ? profile.emails[0].value : `${profile.id}@${profile.provider}.com`;
     
        if (user) {
          return cb(null, user);
        } else {
          User.create({
            id: profile.id,
            name: profile.displayName,
            email: email,
            LoginStrategy: profile.provider
          }).then(createdUser => {
            return cb(null, createdUser);
          }).catch(error => {
            return cb(error);
          });
        }
      }).catch(error => {
        return cb(error);
      });
      console.log(profile)
    }

module.exports = authenticate