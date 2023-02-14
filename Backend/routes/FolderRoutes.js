const FolderRoutes = require('express').Router()
const {createFolder} = require('../controller/FolderController')
const isAuth = require('../middlewares/checkAuth')


FolderRoutes.post('/create', isAuth, createFolder, (req, res, next) => {
    res.json({msg: 'Folder created'})
})

module.exports = FolderRoutes