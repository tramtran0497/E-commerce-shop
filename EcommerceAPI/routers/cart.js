const express = require("express")
// Single routing
const router = express.Router()
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken")
const Cart = require("../models/Cart")
// Creating a cart, everyone can make it
router.post('/createCart', verifyToken,async(req,res)=>{
    const newCart = new Cart(req.body)
    try{
        const savedCart = await newCart.save()
        console.log("My Cart: ",savedCart)
        res.status(200).json(savedCart)
    }catch(err){
        res.status(500).json(err)
    }
})
// Updating your cart, must know userID, have a look again
router.put('/:id', verifyTokenAndAuthorization, async(req,res)=>{
    try{
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {$set: req.body},{new: true})
        res.status(200).json(updatedCart)
    }catch(err){
        res.status(500).json(err)
    }
})
// deleting your cart, must userID
router.delete('/:id', verifyTokenAndAuthorization, async(req, res)=>{
    try{
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Deleting your cart successfull")
    }catch(err){
        res.status(500).json(err)
    }
})
// Get your cart, must know userID
router.get('/find/:userId', verifyTokenAndAuthorization, async(req,res)=>{
    try{
        const cart = await Cart.findOne({userId: req.params.userId})
        res.status(200).json(cart)
    } catch(err){
        res.status(500).json(err)
    }
})
// Get all user's cart
router.get('/findAllCarts', verifyTokenAndAdmin, async (req, res) =>{
    try{
        const carts = await Cart.find()
        res.status(200).json(carts)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router