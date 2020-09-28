var express = require("express");
var router = express.Router();
var cocktailsCtrl = require("../controllers/cocktails");

/* GET users listing. */
router.get("/", cocktailsCtrl.index);
router.get("/new", cocktailsCtrl.new);
router.get("/:id", cocktailsCtrl.show);
router.post("/", cocktailsCtrl.create);
router.delete("/:id", cocktailsCtrl.delete);

module.exports = router;
