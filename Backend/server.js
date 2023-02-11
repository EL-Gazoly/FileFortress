const express = require('express')
require('dotenv').config()

const app = express()


//Application routes
app.use('/api/upload/', require('./routes/uploadRouter'))



//server port
app.listen(process.env.PORT, console.log(`Server start at ${process.env.PORT}`))