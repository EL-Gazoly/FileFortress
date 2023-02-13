const {DataTypes , UUIDV4} = require('sequelize')
const sequelize = require('../config/database')
const {unlink} = require('fs')
const File = sequelize.define(
    "File",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        path: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        size: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ownerId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        FolderId: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
)
File.afterCreate(async (filedata, options) => {
    const User = require('./UserModel')
    
    User.findOne({
        where : {id: filedata.ownerId}
    })
    .then((user)=>{
        if (user) {
            user.usage = user.usage + Number(filedata.size)
            user.save()
            console.log(user.usage)
        }
    })
    .catch((err)=> {
        console.log(err)
    })
})
File.afterDestroy(async (filedata, options) => {
    const User = require('./UserModel')
    
    User.findOne({ where: {id : filedata.ownerId}})
    .then((user) => {
        if(user) {
            user.usage = user.usage - filedata.size
            user.save()
        }
    })
    .catch((err) => {
        console.log(err)
    })
    unlink(filedata.path, (err) => {
        if (err) throw err
        console.log('file deleted successfully')
    })    
})


File.sync()

module.exports = File