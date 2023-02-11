const {DataTypes , UUIDV4} = require('sequelize')
const sequelize = require('../config/database')

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
File.sync()

module.exports = File