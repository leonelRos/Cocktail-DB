var Glassware = require("../models/glassware");
var Cocktail = require("../models/cocktail");

module.exports = {
  new: newGlassware,
  create,
  addToGlass,
};

function addToGlass(req, res) {
  Cocktail.findById(req.params.id, (err, cocktail) => {
    cocktail.glass.push(req.body.glasswareId);
    cocktail.save((err) => {
      res.redirect(`/cocktails/${cocktail._id}`);
    });
  });
}

function create(req, res) {
  Glassware.create(req.body, (err, glassware) => {
    res.redirect("/glasswares/new");
  });
}

function newGlassware(req, res) {
  Glassware.find({}, (err, glassware) => {
    res.render("glasswares/new", {
      title: "Add Glassware",
      glassware,
    });
  });
}
