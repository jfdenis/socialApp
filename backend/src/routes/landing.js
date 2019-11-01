const { Router } = require('express');
const router = Router();

const { landiing } = require('../controllers/landingControllers')

router.route('/')
    .get(landiing)


module.exports = router;