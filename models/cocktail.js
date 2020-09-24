var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var reviewCocktails = new Schema(
  {
    content: {
      type: String,
    },

    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5,
    },
  },
  {
    timestamps: true,
  }
);

var cocktailSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    ingredient1: {
      type: String,
      required: true,
    },
    ingredient2: {
      type: String,
      required: true,
    },
    ingredient3: {
      type: String,
      required: true,
    },
    ingredient4: {
      type: String,
      // required: true
    },
    ingredient5: {
      type: String,
      // required: true
    },
    preparation: {
      type: String,
      required: true,
    },
    reviews: [reviewCocktails],
    glass: [{ type: Schema.Types.ObjectId, ref: "Glassware" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cocktail", cocktailSchema);
