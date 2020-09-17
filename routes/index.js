const { response } = require("express");
const express = require("express");
const router = express.Router();
const request = require("request");
const rootURL = "https://thecocktaildb.com/api/json/v2/9973533/search.php?s";
console.log(rootURL);

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", {
    title: "Cocktail-DB",
  });
});

module.exports = router;
