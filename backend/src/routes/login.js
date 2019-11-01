const { Router } = require('express');
const router = Router();

const { signup } = require('../controllers/loginControllers');

router.route('/')
    .post(signup)




module.exports = router;
