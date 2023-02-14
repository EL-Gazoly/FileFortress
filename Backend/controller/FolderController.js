const Folder = require('../models/FolderModel')
const {Op} = require('sequelize')

const createFolder = (req, res, next) => {
 Folder.findOne({
    where : {[Op.and] : [
        {ownerId : req.user.id},
        {parentId : req.body.parentId},
        {name : req.body.name}
    ]}
 })
 .then((folder) => {
    if (folder){
        res.status(400).json({msg: `Folder's name already exist`})
    }
    else {
        Folder.create({
            name : req.body.name,
            parentId : req.body.parentId,
            ownerId : req.user.id
        })
        .then((Folder) => {
            console.log(Folder);
            res.status(200).json({id : Folder.id})
        })
        .catch((err)=> {
            console.error(err)
            res.status(501)
        })
    }
 })
 .catch((err)=>{
    console.error(err)
    res.status(500)
 })   
}
const deleteFolders = (req, res, next) => {
    Folder.findAll({
        where : {
            [Op.and] : [
                {id : req.body.id},
                {ownerId: req.user.id}
            ]
        }
    })
    .then((folders) => {
        flag = false
        if (folders){
        folders.forEach((folder) => {
            if (folder.isHome){
                flag = true
            }
            else{
                folder.destroy()
            }
        }
        )
        if (flag){
            res.status(400).json({msg: 'You cannot remove the main folder'})
        }
        else {
        res.status(200).json({msg : 'Folders have been delted'})
        }
    }
    else {
        res.status(404).json({msg : 'Folder cannot be found'})
    }
    })
    .catch((err) => {console.error(err);res.status(500).json({msg : 'You cannot delete those folders'})})
}
module.exports = {
    createFolder,
    deleteFolders
}