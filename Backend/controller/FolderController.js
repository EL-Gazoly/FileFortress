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

module.exports = {
    createFolder,
}