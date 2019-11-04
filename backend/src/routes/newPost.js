/*

New post is the endpoint where we add some post to the database

*/

const { Router } = require('express');
const router = Router();
const verifyToken = require('../middlewares/verifyToken');
const post = require('../controllers/newpostControllers');

router.post('/', verifyToken, post);


module.exports = router;