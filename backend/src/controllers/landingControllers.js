const landingCtrl = {};
const User = require('../models/Signup');

landingCtrl.landing =   (req, res) => {
    
    res.json({message: 'works'})
}

module.exports = landingCtrl;