require('dotenv').config();
const landingCtrl = {};
const jwt = require('jsonwebtoken');
const verifyToken = require('../middlewares/verifyToken');
const User = require('../models/Signup');
const SECRET_KEY = process.env.SECRET_KEY



landingCtrl.landing = verifyToken, async (req, res, next) => {
    // Datos del token en el middleware verifyToken
    const user = await User.findById(req.userId, {password: 0});
    if(!user) {
        return res.status(404).send('User not found')
    }
    res.json(user)
}

module.exports = landingCtrl;