const signUpCtrl = {};
const User = require('../models/Signup');

signUpCtrl.signup = async (req, res) => {
    

    res.json({message: 'works'})
}

module.exports = signUpCtrl;