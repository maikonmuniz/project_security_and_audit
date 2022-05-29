const mongoose = require('../db/conn')
const { Schema } = mongoose

const User = new Schema({

        name: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true
        },

        cpf_cnpj: {
            type: String
            // required: true
        },

        password: {
            type: String,
            required: true
        },

        image: {
            type: String
        },

        phone: {
            type: String,
            required: true
        },

    },

    {timestamps: true},

    )


User.index({ location: '2dsphere' });

module.exports = mongoose.model('User', User)