const File = require('../models/FileModel')


const uploadFile = (req, res) => {
    req.files.forEach(file => {
        File.create({
            name: file.originalname,
            path: file.path,
            type: file.mimetype,
            size: file.size,
            ownerId: req.user.id,
            FolderId: file.destination
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