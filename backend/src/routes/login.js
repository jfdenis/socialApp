/*
Login page, where the user write his information about the register
to gei into home page and also get a token to navegate

*/

const { Router } = require('express');
const router = Router();

const { signup } = require('../controllers/loginControllers');

router.route('/')
    .post(signup)




module.exports = router;
