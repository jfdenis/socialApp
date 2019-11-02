const { Router } = require('express');
const router = Router();
const verifyToken = require('../middlewares/verifyToken');


const landing  = require('../controllers/homeControllers')

router.get('/', verifyToken, landing)

module.exports = router;