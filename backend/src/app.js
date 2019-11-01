// Server settings
const express = require('express');
const morgan = require('morgan');
const app = express();

// Importing routes



// Settings
app.set('port', process.env.PORT || 3000);



// Middlewares  
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(morgan('dev'));

//Routes
app.use('/signin', require('./routes/signin'));
app.use('/signup', require('./routes/signup'));
app.use('/inicio', require('./routes/landing'));

module.exports = app;