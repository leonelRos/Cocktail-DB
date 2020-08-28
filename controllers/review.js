var Cocktail = require('../models/cocktail');
// const cocktail = require('../models/cocktail');


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
