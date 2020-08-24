var Cocktail = require('../models/cocktail');
const cocktail = require('../models/cocktail');
// const { create } = require('../models/cocktail');
// const cocktails = require('./cocktails');

module.exports = {
    create
};

function create(req, res){
    Cocktail.findById(req.params.id, function(err, cocktail){
        cocktail.reviews.push(req.body);
        cocktail.save(function(err){
            res.redirect(`/cocktails/${cocktail._id}`);
        })
    })
}
