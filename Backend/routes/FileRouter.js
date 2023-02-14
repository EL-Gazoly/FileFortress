const fileRouter = require('express').Router()
const upload = require('../config/multer')
const {uploadFile, deleteFiles} = require('../controller/FileController')
const isAuth = require('../middlewares/checkAuth')
fileRouter.post('/upload' , isAuth ,upload.array('file'), async(req,res, next) => {
    await uploadFile(req,res)
})

fileRouter.delete('/remove', isAuth, deleteFiles, (req, res, next) =>{
    res.json({msg: 'Ok'})
} )

module.exports = fileRouter;