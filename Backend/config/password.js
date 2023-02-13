const crypto = require('crypto')

const generatePassword = password => {
    var salt = crypto.randomBytes(32).toString('hex')
    var hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex')
    return {
        salt,
        hash
    }

}

const validatePassword = (password, hash, salt) => {
    var validate = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex')

    return validate == hash
}

module.exports = {
    generatePassword, 
    validatePassword
}