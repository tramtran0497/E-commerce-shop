const mongoose = require("mongoose")
// create a new schema instance, defining the various fields inside it in the constructor's object parameter.
const CartSchema = new mongoose.Schema({
    userId: {type: String, required: true, unique:true},
    products: [
    {
        productId:{type: String},
        quantity:{type: Number,
            default: 1,
        }
    } 
    ]
}, {timestamps: true})
//Schemas are then "compiled" into models using the mongoose.model() method.
module.exports = mongoose.model("Cart", CartSchema)