const express = require('express')
const passport = require('passport')
const session = require('./config/session')
require('dotenv').config()
const passportInitialize = require('./config/passport')
const app = express()

//middelwares 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



passportInitialize()

app.use(session)
app.use(passport.initialize())
app.use(passport.session())

//Application routes
app.use('/api/file/', require('./routes/FileRouter'))
app.use('/api/user/', require('./routes/UserRoutes'))
app.use('/api/folder/', require('./routes/FolderRoutes'))


//server port
app.listen(process.env.PORT, console.log(`Server start at ${process.env.PORT}`))