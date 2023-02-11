const File = require('../models/FileModel')


const uploadFile = (req, res) => {
    req.files.forEach(file => {
        File.create({
            name: file.originalname,
            path: file.path,
            type: file.mimetype,
            size: file.size,
            ownerId: file.encoding,
            FolderId: file.destination
        }) 
         .then((file) => {
            console.log(file);
            res.status(200).json({msg: 'files uploaded'});
        })
          .catch((e) => {
            console.log(e);
            res.status(400);
        });

    });
}

module.exports = uploadFile