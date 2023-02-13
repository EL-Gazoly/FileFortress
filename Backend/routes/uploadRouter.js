const uploadRouter = require('express').Router()
const upload = require('../config/multer')
const uploadFile = require('../controller/uploadController')
const isAuth = require('../middlewares/checkAuth')
uploadRouter.post('/file' , isAuth ,upload.array('file'), async(req,res, next) => {
    await uploadFile(req,res)
})

module.exports = uploadRouter;