var Cocktail = require('../models/cocktail');
var Glassware = require('../models/glassware');

module.exports = {
    index,
    show,
    new: newCocktail,
    create
};

function index(req, res) {
    Cocktail.find({}, function (err, cocktails) {
        res.render('cocktails/index', {
            title: 'Cocktails List',
            cocktails
        })
    });
};

function show(req, res) {
    Cocktail.findById(req.params.id).populate("glass").exec(function (err, cocktail) {
        Glassware.find({ _id: { $nin: cocktail.glass } })
            .exec(function (err, glassware) {
            console.log(glassware)
            res.render('cocktails/show', {
                title: 'Cocktail Details',
                cocktail, glassware
            })
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
    res.render('cocktails/new', {
        title: "Add Cocktail"
    })
}