const mongoose = require("mongoose")
// create a new schema instance, defining the various fields inside it in the constructor's object parameter.
const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique:true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    isAdmin:{
        // difference between admin and user
        type: Boolean,
        default: false
    },  
}, 
//Mongoose schemas have a timestamps option that tells Mongoose to automatically manage createdAt and updatedAt properties on your documents
{timestamps: true})
//Schemas are then "compiled" into models using the mongoose.model() method.
module.exports = mongoose.model("User", UserSchema)