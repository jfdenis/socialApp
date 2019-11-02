const { Router } = require('express');
const router = Router();
const verifyToken = require('../middlewares/verifyToken');


const { landing } = require('../controllers/landingControllers')

router.get('/', landing)

module.exports = router;