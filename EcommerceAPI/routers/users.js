const express = require("express")
const User = require("../models/User")
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken")
const CryptoJS = require("crypto-js")
// Single routing
const router = express.Router()
//Update user's info like username, email, password
router.put("/:id", verifyTokenAndAuthorization , async (req,res)=>{
    // after passing middleware, checking users update their password or not
   if(req.body.password){
    // if yes, updating
    req.body.password =  CryptoJS.AES.encrypt(req.body.password, process.env.SEC_PASS).toString()
   }
   try{
    // strating to set new updated value for user through id
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        // replaces the value of a field with the specified value.
        // only updating which ones is declared in req.body ex: {"username": "Tram."} changing the username to Tram.
        $set: req.body
    }, 
    //new: true to return the modified document rather than the original. defaults to false
    {new: true})
    // therefore, updatedUser return the modified document
    res.status(200).json(updatedUser)
   } 
   catch(err){
       res.status(500).json(err)
   }  
})
// Delete user, only Admin has permission
router.delete("/:id", verifyTokenAndAdmin, async(req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("You delete successfull!")
    }catch(err){
        res.status(500).json(err)
    }
})
// Get data of an user through id, only Admin
router.get("/find/:id", verifyTokenAndAdmin, async(req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        // passed middleware check your permission, showing user. However, showing password is not a good idea. If you wanna show others
        const {password, ...others} = user._doc // if only "user", it shows many things out of what we need to show, info inside _doc which we wanna share 
        res.status(200).json({others})
    }catch(err){
        res.status(500).json(err)
    }
})
// Get all data of users, only Admin again
// adding more options for Admin, if query new=true then showing only lastest created users
router.get("/findAll", verifyTokenAndAdmin, async(req,res)=>{
    const query = req.query.new
    try{
        const users = query ? await User.find().sort({_id: -1}).limit(2) : await User.find()
        //console.log("USERS", users)
        // in this case, showing all users, did not find the way to unshow password
        res.status(200).json(users)
    }catch(err){
        res.status(500).json(err)
    }
})
// Get user stats
router.get("/stats", verifyTokenAndAdmin, async(req,res) => {
    // creating a variable is current date
    const date = new Date()
    // based on current date, finding which time same date in last year
    // getFullYear() method "returns" the year of the specified date according to local time.
    // setFullYear() method "sets" the full year for a specified date according to local time.
    const dateLastYear = new Date(date.setFullYear(date.getFullYear()-1))
    try{
        // using Aggregations operations process data records and return computed results.
        const data = await User.aggregate([
            // condition to match
            {$match: {createdAt: {$gte: dateLastYear}}},
            // Adds a new field or resets the value of an existing field.
            // $month returns the month of a date as a number between 1 and 12.
            {$project: {
                month: {$month: "$createdAt"}
            }},
            // group which is same matching
            {$group: {
                _id: "$month", // {$month} the data in the User collection to have grouped by month.
                total: {$sum: 1} // $Sum: 1, each is calculated 1
            }}
        ])
        //console.log(data)
        res.status(200).json(data)
    }
    catch(err){
        res.status(500).json(err)
    }
})
module.exports = router