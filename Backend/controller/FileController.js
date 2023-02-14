const File = require('../models/FileModel')
const {Op} = require('sequelize')

const uploadFile = (req, res) => {
    req.files.forEach(file => {
        File.create({
            name: file.originalname,
            path: file.path,
            type: file.mimetype,
            size: file.size,
            ownerId: req.user.id,
            FolderId: req.body.FolderId
        }) 
         .then((file) => {
            res.status(200).json({msg: 'files uploaded'});
        })
          .catch((e) => {
            res.status(400);
        });

    }); 
}

module.exports = uploadFile

const  deleteFiles = (req, res, next) => {
    File.findAll({
        where : {
            [Op.and]: [
            {id : req.body.id},
            {ownerId : req.user.id}
            ]
        }
    })
    .then((files)=>{
        if (files) {
            files.forEach((file) => {
               file.destroy() 
            })
            res.status(200).json({msg : 'file deleted successfully'})
        }
        else {
            res.status(400).json({msg : 'file cannot be found'})
        }
    })
    .catch((err) => {console.error(err); res.status(403).msg('You cannot delete this file'); })
}

module.exports = {
    uploadFile, 
    deleteFiles,
}