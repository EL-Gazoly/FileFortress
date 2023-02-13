const sequelize = require('../config/database')
const {DataTypes, UUIDV4} = require('sequelize')
const User = sequelize.define(
    'User',
    {
        id:{
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            validate: {
                notEmpty:{
                    args: true,
                    msg: 'Name cannot be empty'
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: {
                    args: true,
                    msg: 'This is not an email format'
                }
            }
        }, 
        hash:{
            type: DataTypes.STRING,
            allowNull: false
        },
         salt:{
            type: DataTypes.STRING,
            allowNul: false
         },
         isLocked:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
         },
         LockedUntil:{
            type: DataTypes.DATE,
         },
         passwordRetry:{
            type: DataTypes.INTEGER,
            defaultValue: 0
         },
         usage:{
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNul: false
         }

    }
)
User.sync()

module.exports = User