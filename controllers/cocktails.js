// const cocktail = require("../models/cocktail");
var Cocktail = require("../models/cocktail");
var Glassware = require("../models/glassware");

module.exports = {
  index,
  show,
  new: newCocktail,
  create,
  delete: deleteCocktail,
};

// function deleteCocktail(req, res) {
//   Cocktail.findByIdAndRemove(req.params.id).then(function (err, cocktails) {
//     res.redirect("/cocktails");
//   });
// }

function index(req, res) {
  Cocktail.find({}, (err, cocktails) => {
    res.render("cocktails/index", {
      title: "Cocktails List",
      cocktails,
    });
  });
}

function show(req, res) {
  Cocktail.findById(req.params.id)
    .populate("glass")
    .exec((err, cocktail) => {
      Glassware.find({ _id: { $nin: cocktail.glass } }).exec(
        (err, glassware) => {
          console.log(glassware);
          res.render("cocktails/show", {
            title: "Cocktail Details",
            cocktail,
            glassware,
          });
        }
      );
    });
}

function create(req, res) {
  var cocktail = new Cocktail(req.body);
  cocktail.save(function (err) {
    if (err) return res.render("cocktails/new");
    console.log(cocktail);
    res.redirect("/cocktails");
  });
}

function newCocktail(req, res) {
  res.render("cocktails/new", {
    title: "Add Cocktail",
  });
}

function deleteCocktail(req, res) {
  Cocktail.findByIdAndDelete(req.params.id).then(function (err, cocktails) {
    res.redirect("/cocktails");
  });
}
