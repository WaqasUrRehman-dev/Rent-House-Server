const { connect } = require('mongoose')
require('dotenv').config()

const connectDB = async () => {
    await connect(process.env.MONGO_URL)
    console.log("DB CONNECTED")
}

module.exports = connectDB