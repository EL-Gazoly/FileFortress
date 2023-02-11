const uploadRouter = require('express').Router()
const upload = require('../config/multer')
const uploadFile = require('../controller/uploadController')

uploadRouter.post('/file' ,upload.array('file'),async(req,res, next) => {
    await uploadFile(req,res)
})

module.exports = uploadRouter;