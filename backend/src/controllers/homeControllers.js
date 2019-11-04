/*
Here we can edit the function of home route, where indicates what is in the page and what it does

We need to require the JWT becouse this page has to be block

*/
require('dotenv').config();
const landingCtrl = {};
const jwt = require('jsonwebtoken');
const verifyToken = require('../middlewares/verifyToken');
const User = require('../models/Signup');
const SECRET_KEY = process.env.SECRET_KEY



const landing = async (req, res, next) => {
    // Datos del token en el middleware verifyToken
    const user = await User.findById(req.userId, {password: 0});
    if(!user) {
        return res.status(404).send('User not found')
    }
    res.json(user)
}

module.exports = landing