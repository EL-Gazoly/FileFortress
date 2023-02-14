const FolderRoutes = require('express').Router()
const {createFolder, deleteFolders} = require('../controller/FolderController')
const isAuth = require('../middlewares/checkAuth')


FolderRoutes.post('/create', isAuth, createFolder, (req, res, next) => {
    res.json({msg: 'Folder created'})
})

FolderRoutes.delete('/remove', isAuth, deleteFolders, (req, res, next) => {
    res.json({msg : 'Folder Deleted'})
})
module.exports = FolderRoutes 