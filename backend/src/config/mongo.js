const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config({path: './config.env'})

mongoURL = process.env.mongoURL
mongoose.connect(mongoURL)

mongoose.connection.on("connected", () => {
    console.log("Mongo connection is established");
  });

mongoose.connection.on("disconnected", () => {
    console.log("Mongo connection is disconnected");
  });