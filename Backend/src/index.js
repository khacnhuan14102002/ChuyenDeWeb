const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });

const dotenv = require('dotenv');
const mongoose = require("mongoose");
dotenv.config()

const app = express()
const port = process.env.PORT || 3001

app.get('/', (req, res) => {
    res.send('Hello World! e')
  })

console.log('process.env.MONGODB_DB',process.env.MONGODB_DB)

mongoose.connect(`mongodb+srv://maithi73822:${process.env.MONGODB_DB}@cluster0.0phdbkh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => {
        console.log('Connect DB sucess')
    })
    .catch((err) => {
        console.error(err)
    })

app.listen(port, () => {
    console.log('server is running in port: ' + port)
})