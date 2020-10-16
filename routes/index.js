const express = require("express");
const router = express.Router();
const request = require("request");
const rootURL = `https://thecocktaildb.com/api/json/v2/${process.env.COCKTAIL_KEY}/search.php?s=`;
const passport = require('passport');


router.get("/", (req, res, next) => {
  res.render("index", {
    title: "Cocktail-DB",
    userDrink: null,
  });
});

router.post("/", (req, res, next) => {
  var options = {
    url: rootURL + req.body.drinks,
  };
  request(options, (err, response, body) => {
    var userDrink = JSON.parse(body);
    // console.log(userDrink.drinks[0].strDrink);
    // console.log(JSON.stringify(userDrink));
    res.render("index", { userDrink: userDrink });
    console.log("err:", err);
  });
});

router.get('/', function(req, res, next){
  res.render('index')
})


router.get('/login', passport.authenticate('auth0', {
  clientID: 'HJLslQo5toIoVTeQ62ilYj4TjeMkxvOq',
  domain: 'dev-u06815mj.us.auth0.com',
  redirectUri: 'http://localhost:3000/callback',
  responseType: 'code', 
  audience: 'https://dev-u06815mj.us.auth0.com/userinfo',
  scope: 'openid profile'
   }), 
   function(req, res){
       res.redirect('/')
   })

router.get('/logout', function(req,res){
  req.logout();
  res.redirect('/')
});

router.get('/callback', passport.authenticate('auth0', {
  failureRedirect:'/failure'
}), function(req,res){
  res.redirect('/user')
});

router.get('/user', function(req,res,next){
  res.render('user', {
      user: req.user
  })
});

router.get('/failure', function(req, res, next){
  res.render('failure')
})

module.exports = router;
