var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cocktailSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    ingredient1: {
        type: String,
        required: true
    },
    ingredient2: {
        type: String,
        required: true
    },
    ingredient3: {
        type: String,
        required: true
    },
    ingredient4: {
        type: String,
        required: true
    },
    ingredient5: {
        type: String,
        required: true
    },
    preparation: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Cocktail', cocktailSchema);