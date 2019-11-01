const { Router } = require('express');
const router = Router();

const { signin } = require('../controllers/signinControllers');

router.route('/')
    .post(signin)




module.exports = router;
