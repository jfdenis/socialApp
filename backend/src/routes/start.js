/*

This is the main page, no login, no signin and no home page
here is just the presentation of the page.


*/

const { Router } = require('express');
const router = Router();
const { inicio } = require('../controllers/startControllers');

router.route('/')
    .get(inicio)




module.exports = router;