const jwt = require("jsonwebtoken")
// verifyToken is middleware, running it before user can use the app. for login or authenticate
const verifyToken = (req,res,next) => {
    const authHeader = req.headers.token
    if(authHeader){
        // if using something before token token is declared like below command
        // const token = authHeader.split(" ")[1]
        const token = authHeader
        // constructure of verify: token, Secretkey, callback func with 2 params (err, user) 
        // err, when some errors happend
        // user is info about {id, isAdmin are declared 2 unique things to create JWT, can see it at auth.js and 2 things (iat, exp) limited time valid JWT }
        jwt.verify(token, process.env.SEC_JWT, (error, user)=>{
            if(error) res.status(401).json("Token is not valid!")
            // creating req.user = user 
            req.user = user;
            //console.log("USER:", user)
            next()
        })
    } else{
        return res.status(401).json("You are not authenticated!")
    }
}
// verifyTokenAndAuthorization is middleware
const verifyTokenAndAuthorization = (req,res,next)=>{
    // in this case, in user.js only call one middleware name "verifyTokenAndAuthorization". questions: 
    // 1. how can check Token?
    // 2. can be connect between verifyToken and codes below? 
    verifyToken(req,res,()=> {
        // with these conditions: correct id or you are Admin!
        // using req.user 
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }
        else{
            res.status(403).json("You are not allowed to access!")
        }
    })
}
// creating a middleware for checking Admin
const verifyTokenAndAdmin = (req,res, next) =>{
    // this middle only checks isAdmin or not
    verifyToken(req,res, ()=>{
        if(req.user.isAdmin){
            next()
        } else{
            res.status(403).json("You are not allowed to access!")
        }
    }) 
}
// exporting multiples functions needs to use {}
module.exports = {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin}