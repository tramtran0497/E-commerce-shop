const mongoose = require("mongoose")
// create a new schema instance, defining the various fields inside it in the constructor's object parameter.
const ProductSchema = new mongoose.Schema({
    title: {type: String, required: true, unique:true},
    desc: {type: String, required: true},
    img: {type: String, required: true},
    categories: {type: Array},
    size: {type: Array},
    color: {type: Array},
    price: {type: Number, required: true},
    inStock: {type: Boolean, default: true}
}, {timestamps: true})
//Schemas are then "compiled" into models using the mongoose.model() method.
module.exports = mongoose.model("Product", ProductSchema)