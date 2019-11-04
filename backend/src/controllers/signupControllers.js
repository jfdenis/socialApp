/*
In the Signin we add new users and to encrypt
the password we need configure the module in the
models then we add here

*/

// Controllers Settings Signin
require('dotenv').config();
const signCtrl = {};
const User = require('../models/Signup');
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

signCtrl.signup = async (req, res) => {
    const { name, last_name, username, email, password } = req.body;
    const user =  new User ({ name, last_name, username, email, password });
    user.password = await user.myencrypt(user.password);

    // Saving the new user
    console.log(user);
    await user.save();

    // Token Settings

    const token = jwt.sign({id:user._id}, SECRET_KEY, {
        expiresIn: 60 * 60 * 24
    });

    res.json({auth: true, token});
};

module.exports = signCtrl;