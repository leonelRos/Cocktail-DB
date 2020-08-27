var Glassware = require('../models/glassware');
var Cocktail = require('../models/cocktail')

module.exports = {
    new: newGlassware,
    create,
    addToGlass
};

function addToGlass(req, res) {
    Cocktail.findById(req.params.id, function(err, cocktail) {
        cocktail.glass.push(req.body.glasswareId);
        cocktail.save(function(err) {
            res.redirect(`/cocktails/${cocktail._id}`);
        });
    });
}

function create(req, res) {
    Glassware.create(req.body, function(err, glassware) {
        res.redirect('/glasswares/new')
    })
}

function newGlassware(req, res) {
    Glassware.find({}, function(err, glassware) {
        res.render('glasswares/new', {
            title: 'Add Glassware',
            glassware
        });
    });
}
