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
app.use('/', require('./routes/start'));
app.use('/signup', require('./routes/signup'));
app.use('/login', require('./routes/login'));
app.use('/home', require('./routes/home'));
app.use('/new-post', require('./routes/newPost'));

module.exports = app;