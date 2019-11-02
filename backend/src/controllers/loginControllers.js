require('dotenv').config();
const signUpCtrl = {};
const User = require('../models/Signup');
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

signUpCtrl.signup = async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    const user = await User.findOne({email:email})
    if(!user) {
        res.status(404).send("User doesn't exists")
    }

    const validPassword = await user.validatepassword(password)
    console.log(validPassword)

    if(!validPassword) {
        res.status(401).json({auth: false, token: null });
    }
    const token = await jwt.sign({id:user.id}, SECRET_KEY, {
        expiresIn: 60 * 60 * 24
    });

    res.json({auth: true, token})
}

module.exports = signUpCtrl;