var Cocktail = require('../models/cocktail');

module.exports = {
    index,
    new: newCocktail,
    create
};

function index(req, res) {
    Cocktail.find({}, function (err, cocktails) {
        res.render('cocktails/index', {
            cocktails
        })
    });
};

function create(req, res) {
    var cocktail = new Cocktail(req.body);
    cocktail.save(function (err) {
        if (err) return res.render('cocktails/new');
        console.log(cocktail)
        res.redirect('/cocktails')
    })
}

function newCocktail(req, res) {
    res.render('cocktails/new')
}