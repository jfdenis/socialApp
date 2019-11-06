const { Router } = require('express');
const router = Router();
const { getPosts } = require('../controllers/postsController');

router.get('/', getPosts)

module.exports = router;