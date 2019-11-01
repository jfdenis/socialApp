// Database settings
require('dotenv').config();
const mongoose = require('mongoose');

const  MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true,})
    .then(db => console.log(`Conectado con Mongo`))
    .catch(err => console.log(err))