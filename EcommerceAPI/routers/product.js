const express = require("express")
// Single routing
const router = express.Router()
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken")
const Product = require("../models/Product")
//Add product, only Admin
router.post("/add", verifyTokenAndAdmin, async(req,res) => {
    const newProduct = new Product(req.body)
    try{
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)
    }catch(err){
        res.status(500).json(err)
    }
} )
// Detele product, only Admin
router.delete("/:id", verifyTokenAndAdmin, async(req, res) => {
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Deleting the product successfull!")
    } catch(err){
        res.status(500).json(err)
    }
})
//Get product, everyone can access
router.get("/find/:id", async(req,res)=>{
    try{
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    }
    catch(err){
        res.status(500).json(err)
    }
})
//Get all products, everyone can access
router.get("/", async(req,res)=>{
    const newQ  = req.query.new
    const categoryQ = req.query.category
    try{
        let products;
        if(newQ){
            products = await Product.find().sort({createdAt: -1}).limit(1)
        } else if(categoryQ){
            products = await Product.find({categories: {$in: [categoryQ]}}) // $in: 
        } else {
            products = await Product.find()
        }
        //console.log(products)

        res.status(200).json(products)
    }
    catch(err){
        res.status(500).json(err)
    }
})
module.exports = router