var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var glasswareSchema = new Schema({
    type_of_glass: { type: String, required: true, unique: true },
    material: String
}, {
    timestamps: true
});

module.exports = mongoose.model("Glassware", glasswareSchema);
