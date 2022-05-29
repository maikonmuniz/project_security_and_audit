const mongoose = require('mongoose');
require('dotenv').config()
const DB_USER = process.env.DB_USER  
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.rsye5xm.mongodb.net/?retryWrites=true&w=majority`
// mongodb+srv://security_audit:<password>@cluster0.rsye5xm.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(uri, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
    }).then(() => {
        console.log('Conectado com sucesso')
    }).catch((error) => {
        console.log(error)
    })

mongoose.Promise = global.Promise

module.exports = mongoose;