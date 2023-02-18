const  sequelize = require('../config/database')
const {DataTypes, UUIDV4} = require('sequelize')
const Folder = sequelize.define(
    'Folder',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        ownerId:{
            type: DataTypes.STRING,
            allowNull: false
        },
        isHome:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        parentId:{
            type: DataTypes.UUID,
            allowNull: true,
        }
        

    },
    
)

Folder.afterDestroy(async (folderdata, optoins) => {
    const File = require('./FileModel')

    await File.findAll({
        where : {FolderId : folderdata.id}
    })
    .then((files)=>{
        files.forEach((file)=> {
            file.destory().then(()=> {})
        })
    }    
    )
    .catch((err) => console.error(err))

    await Folder.findAll({
        where: {parentId: folderdata.id}
    })
    .then((folders) =>
        folders.forEach((folder)=> {
            folder.destory().then(()=>{})
        })
    )
    .catch((err) => console.err(err))
})
Folder.sync()
module.exports = Folder