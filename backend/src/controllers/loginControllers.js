const signUpCtrl = {};
const User = require('../models/Signup');

signUpCtrl.signup = async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    const user = await User.findOne({email:email})
    if(!user) {
        res.status(404).send("User doesn't exists")
    }
    const validPassword = await user.validatepassword(password)
    console.log(validPassword)

    res.json({message: 'works'})
}

module.exports = signUpCtrl;