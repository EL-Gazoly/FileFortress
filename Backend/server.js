const express = require('express')
const passport = require('passport')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()

//middelwares 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Application routes
app.use('/api/upload/', require('./routes/uploadRouter'))
app.use('/api/user/', require('./routes/UserRoutes'))



//server port
app.listen(process.env.PORT, console.log(`Server start at ${process.env.PORT}`))