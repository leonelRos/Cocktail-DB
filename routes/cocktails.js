var express = require('express');
var router = express.Router();
var cocktailsCtrl = require('../controllers/cocktails')

/* GET users listing. */
router.get('/', cocktailsCtrl.index)
router.get('/new', cocktailsCtrl.new)
router.post('/', cocktailsCtrl.create)

module.exports = router;