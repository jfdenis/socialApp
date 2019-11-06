const User = require('../models/Signup')
usersCtrl = {}

usersCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.send(users)
    console.log(users)
}


module.exports = usersCtrl;