/*
Here is the home page (not the main)
the user get into this page if it login and has an token

*/

const { Router } = require('express');
const router = Router();
const verifyToken = require('../middlewares/verifyToken');


const landing  = require('../controllers/homeControllers')

router.get('/', verifyToken, landing)

module.exports = router;