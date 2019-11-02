require('dotenv').config();
const landingCtrl = {};
const jwt = require('jsonwebtoken');
const User = require('../models/Signup');
const SECRET_KEY = process.env.SECRET_KEY

landingCtrl.landing = async  (req, res) => {
    
    const token = req.headers['x-access-token'];
    if(!token) {
        res.status(404).json({
            auth: false,
            message: 'No Token provided'
        });
    }
    const decoded = jwt.verify(token, SECRET_KEY )
    const user = await User.findById(decoded.id, {password: 0});
    if(!user) {
        res.status(404).send('User not found')
    }
    res.json(user)
}

module.exports = landingCtrl;