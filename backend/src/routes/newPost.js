const { Router } = require('express');
const router = Router();
const verifyToken = require('../middlewares/verifyToken');
const post = require('../controllers/newpostControllers');

router.post('/', verifyToken, post);


module.exports = router;