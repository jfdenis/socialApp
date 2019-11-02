const { Router } = require('express');
const router = Router();


const { landing } = require('../controllers/landingControllers')

router.route('/')

    .get(landing)


module.exports = router;