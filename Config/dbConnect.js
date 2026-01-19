const mongo = require('mongoose')
const dbConnection = async() => {
    try {
        await mongo.connect(`mongodb://localhost:27017/${process.env.DB}`)
        console.log('Database connected')
    } catch (err) {
        console.log(`Database connection failed`,err.message)
        process.exit(1)
    }
}
module.exports = dbConnection;