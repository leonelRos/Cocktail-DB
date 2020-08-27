var express = require('express');
var router = express.Router();
var glasswareCtrl = require('../controllers/glasswares');

router.get('/glasswares/new', glasswareCtrl.new)

router.post('/glasswares', glasswareCtrl.create)

router.post('/cocktails/:id/glasswares', glasswareCtrl.addToGlass)

module.exports = router;