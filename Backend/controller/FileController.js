const File = require('../models/FileModel')
const {Op} = require('sequelize')
const {createReadStream} = require('fs')
const archiver = require('archiver')

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
            res.status(404).json({msg : 'file cannot be found'})
        }
    })
    .catch((err) => {console.error(err); res.status(403).msg('You cannot delete this file'); })
}

const downloadFile = (req, res ,next) => {
    File.findAll({
        where : {
            [Op.and]: [
            {id : req.body.id},
            {ownerId : req.user.id}
            ]
        }
    }) 
    .then((files) => {
        console.log(files.length)
        if (files.length == 0){
            res.status(404).send('file is not found')
            
        }
        else if (files.length == 1){
            res.download(files[0].path, files[0].name)
            res.json({msg : 'Downloaded Successfully'})
        }
        else {
            const archive = archiver('zip')
            archive.on('error', function (err) {
              res.status(500).send({error: err.message})
            })
            res.attachment('files.zip')
            archive.pipe(res)
            files.forEach((file) => {
              archive.append(createReadStream(file.path), {name: file.name})
            })
            archive.finalize()
    }

    })
    .catch((err) => {console.log(err); res.status(500).json({error : err})})
  
}
module.exports = {
    uploadFile, 
    deleteFiles,
    downloadFile
}