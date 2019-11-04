/*
Here you edit the database settings, you have to set the MONGO_URI
which is in an env file, if you don't do that you cannot connect mongodb 
with your app.

Here I'm using mongoose as the driver to connect MongoDB with my project

just install it by write npm install mongoose
in your terminal


*/

// Database settings
require('dotenv').config();
const mongoose = require('mongoose');

const  MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(db => console.log(`Conectado con Mongo`))
    .catch(err => console.log(err))