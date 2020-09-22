const express = require("express");
const router = express.Router();
const request = require("request");
const rootURL = "https://thecocktaildb.com/api/json/v2/9973533/search.php?s=";
// console.log(rootURL);

router.get("/", (req, res, next) => {
  res.render("index", {
    title: "Cocktail-DB",
    userDrink: null,
  });
});

router.post("/", (req, res, next) => {
  var options = {
    url: rootURL + req.body.drinks,
    headers: {
      "User-Agent": "9973533",
    },
  };
  request(options, (err, response, body) => {
    var userDrink = JSON.parse(body);
    // console.log(userDrink.drinks[0].strDrinkThumb);
    // console.log(JSON.stringify(userDrink));
    res.render("index", { userDrink: userDrink });
  });
});

module.exports = router;
