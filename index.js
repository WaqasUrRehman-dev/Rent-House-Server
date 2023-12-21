const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.SERVER_PORT
const connectDB = require('./utils/db')

const user_Route = require('./Users/router')
const house_Route = require('./Houses/router')

app.use(express.json())

app.use('/api', user_Route)
app.use('/api', house_Route)


app.listen(port, () => {
    connectDB().then(() => {
        console.log(`Example app listening on port ${port}`)
    }).catch((err) => {
        console.log(err)
    })


})