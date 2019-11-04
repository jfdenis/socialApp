/*

Just the register for each user, where they get a token to login 

*/

const { Router } = require('express');
const router = Router();
const { signup } = require('../controllers/signupControllers');

router.route('/')
    .post(signup)



module.exports = router;