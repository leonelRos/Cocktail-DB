var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/review')

router.post('/cocktails/:id/reviews', reviewsCtrl.create)

module.exports = router;