const mongoose = require("mongoose")
// create a new schema instance, defining the various fields inside it in the constructor's object parameter.
const OrderSchema = new mongoose.Schema({
    userId: {type: String, required: true, unique:true},
    products: [
    {
        productId:{
            type: String,
        },
        quantity:{
            type: Number,
            default: 1,
        },
    },
    ],
    amount: {type: Number, required: true},
    address: {type: String, required: true },
    status: {type: String, default: "pending"}
}, {timestamps: true})
//Schemas are then "compiled" into models using the mongoose.model() method.
module.exports = mongoose.model("Order", OrderSchema)