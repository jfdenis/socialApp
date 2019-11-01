const { Schema, model } = require('mongoose');

const signinSchema = {
    name: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    
}