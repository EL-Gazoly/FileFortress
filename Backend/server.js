const express = require('express')
const passport = require('passport')
const session = require('./config/session')
require('dotenv').config()

const app = express()

//middelwares 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


require('./config/Google')
require('./config/Github')
require('./config/Facebook')
require('./config/passport')

app.use(session)
app.use(passport.initialize())
app.use(passport.session())

//Application routes
app.use('/api/file/', require('./routes/FileRouter'))
app.use('/api/user/', require('./routes/UserRoutes'))
app.use('/api/folder/', require('./routes/FolderRoutes'))
app.use('/api/auth/github/', require('./routes/GithubRouter'))
app.use('/api/auth/google/' , require('./routes/GoogleRoutes'))
app.use('/api/auth/facebook/', require('./routes/FacebookRouter'))

//server port
app.listen(process.env.PORT, console.log(`Server start at ${process.env.PORT}`))