const session = require('express-session')


const mysession = session({
        secret : `${process.env.SESSION_SECRET}`,
        resave : false,
        saveUninitialized : false
})

module.exports = mysession