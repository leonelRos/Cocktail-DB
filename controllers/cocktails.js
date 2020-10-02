var Cocktail = require("../models/cocktail");
var Glassware = require("../models/glassware");

module.exports = {
  index,
  show,
  new: newCocktail,
  create,
  delete: deleteCocktail,
  edit,
  update,
};

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
  cocktail.save((err) => {
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

//delete the cocktails
function deleteCocktail(req, res) {
  Cocktail.findByIdAndDelete(req.params.id).then((err, cocktails) => {
    res.redirect("/cocktails");
  });
}

function edit(req, res) {
  Cocktail.findById(req.params.id, (err, cocktail) => {
    res.render("cocktails/edit", {
      title: "Edit Cocktail",
      cocktail,
    });
  });
}

function update(req, res) {
  Cocktail.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, cocktail) => {
      // res.redirect(`/cocktails/${req.params.id}`);
      res.redirect("/cocktails");
    }
  );
}
