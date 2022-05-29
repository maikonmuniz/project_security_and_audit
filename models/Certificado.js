const mongoose = require('../db/conn')
const { Schema } = mongoose

const Certificado = new Schema({

        name: {
            type: String,
            required: true
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        email: {
            type: String,
            required: true
        },
        DateSend: {
            type: Date,
            required: true
        }
    })

module.exports = mongoose.model('Certificado', Certificado)