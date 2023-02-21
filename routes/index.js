const express = require('express');
const router = express.Router();
const {index, ping} = require('../controllers/index.controllers')


/* GET home page. */
router.get('/', index)

router.get('/ping', ping)


module.exports = router;
