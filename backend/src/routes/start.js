const { Router } = require('express');
const router = Router();
const { inicio } = require('../controllers/startControllers');

router.route('/')
    .get(inicio)




module.exports = router;