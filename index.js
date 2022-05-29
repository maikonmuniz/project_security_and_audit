const cors = require("cors")
const express = require("express")
const bodyParser = require("body-parser")
const app = express()

// config json response
app.use(express.json())

app.use(bodyParser.json())

// config cors
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// confid folder for images
app.use(express.static('public'))

//Routes
const userRoutes = require('./routes/userRoutes')
app.use('/users', userRoutes)

const certificadoRoutes = require('./routes/certificadoRoutes')
app.use('/certificado', certificadoRoutes)

console.log("ROdano essa porra")
app.listen(process.env.PORT || 5000)