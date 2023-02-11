const Sequelize = require('sequelize')
let sequelize;
try{
    sequelize = new Sequelize(
        process.env.DATABASE,
        process.env.DATABASE_USERNAME,
        process.env.DATABASE_PASS,
        {
            host : process.env.DATABASE_HOST,
            port : process.env.DATABASE_PORT,
            dialect: "postgres",
        }
    )
}catch(error){
    console.log(e)
}
const connect = async ()=> {
    try{
            await sequelize.authenticate()
            console.log('Connection has been established successfully')
    }catch(error){
        console.log('Unable to connect to the database' , error)
    }
}
connect()
module.exports = sequelize;