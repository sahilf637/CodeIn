const express = require("express");
const dotenv = require('dotenv');
const { Server } =  require("socket.io");
const cors = require("cors");
const path = require('path')
require('./config/mongo.js')

const app = express()

dotenv.config({ path: './config.env'});

app.use(express.json())

app.use(cors())

const PORT = process.env.PORT

const httpserver = app.listen(PORT, () => {
    console.log(`Running Server on port ${PORT}`)
})

// const io = new Server(httpserver, {

// })

