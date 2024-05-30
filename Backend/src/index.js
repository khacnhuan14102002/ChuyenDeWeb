const express = require('express');
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const routes = require('./routes')
const bodyParser = require("body-parser");
dotenv.config()

const app = express()
const port = process.env.PORT || 3001
app.use(bodyParser.json())
// app.get('/', (req, res) => {
//     res.send('Hello World! e')
//   })
routes(app)

console.log('process.env.MONGODB_DB',process.env.MONGODB_DB)

mongoose.connect(`${process.env.MONGODB_DB}`)
    .then(() => {
        console.log('Connect DB sucess')
    })
    .catch((err) => {
        console.error(err)
    })

app.listen(port, () => {
    console.log('server is running in port: ' + port)
})