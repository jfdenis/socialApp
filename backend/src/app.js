/*
Here is the server settings, you can edit this if you want, 
also you can add more middlewares this page is exported
becouse another file starts the server.
*/

// Server settings
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

// Importing routes



// Settings
app.set('port', process.env.PORT || 4000);



// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(morgan('dev'));

//Routes
app.use('/', require('./routes/start'));
app.use('/signup', require('./routes/signup'));
app.use('/login', require('./routes/login'));
app.use('/home', require('./routes/home'));
app.use('/api/posts', require('./routes/posts'));
app.use('/api/users',  require('./routes/users'));
app.use('/new-post', require('./routes/newPost'));

module.exports = app;