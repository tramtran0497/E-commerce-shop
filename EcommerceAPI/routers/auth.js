const express = require("express")
// Single routing
const router = express.Router()
const User = require("../models/User")
const CryptoJS = require("crypto-js")
// we use JWT because it saves space in server (do not need to place user in server every requests).
// JWT is created and add with user at the first client asks LOGIN request to server, then each request JWT as a key
const jwt = require('jsonwebtoken');
//REGISTER
// required async function
router.post("/register", async (req,res)=>{
    const {username, email, password} = req.body
    const newUser = new User({
        username: username,
        email: email,
        password: CryptoJS.AES.encrypt(password, process.env.SEC_PASS).toString(),
    })
    try{
        const savedUser = await newUser.save()
        //console.log(savedUser)
        res.status(200).json(savedUser)
    }
    catch(error){
        console.log("Problems when registering: ",error)
        res.status(500).json(error)
    } 
})
//LOGIN
router.post("/login", async (req,res) =>{
    try{
        // to find "user" by using input username    
        const user = await User.findOne({username: req.body.username})// "user" is found and it's info also, we can use to compare password
        // if can not find
        //console.log("Showing",user)
        !user && res.status(401).json("Wrong username or password. Please try again!")
        const hashedPass = CryptoJS.AES.decrypt(user.password, process.env.SEC_PASS) // we hash password which is saved before in DB.
        const Originalpassword = hashedPass.toString(CryptoJS.enc.Utf8) // we have a srting of Originalpassword, CryptoJS.enc.Utf8 !important
        console.log(Originalpassword)
        // then we compare to the input password
        Originalpassword !== req.body.password && res.status(401).json("Wrong username or password. Please try again!")
        //create JWT  when logining, and it has limited time
        const accessToken = jwt.sign(
            {
                // 2 info are selected as unique options
                id: user._id,
                isAdmin: user.isAdmin,
            },
            process.env.SEC_JWT,
            {expiresIn: "1d"}
        )
        // passed Login, showing user. However, showing password is not a good idea. If you wanna show others
        const {password, ...others} = user._doc // if only "user", it shows many things out of what we need to show, info inside _doc which we wanna share 
        res.status(200).json({...others, accessToken})
        //res.status(200).json("Welcome to the App!")
    } catch(error){
        res.status(500).json(error)
    }
})
module.exports = router