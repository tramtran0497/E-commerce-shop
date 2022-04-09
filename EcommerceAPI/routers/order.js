const express = require("express")
// Single routing
const router = express.Router()
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken")
const Order = require("../models/Order")

// Creating an order, everyone can make it
router.post('/createOrder', verifyToken,async(req,res)=>{
    const newOrder = new Order(req.body)
    try{
        const savedOrder = await newOrder.save()
        //console.log("My Order: ",savedOrder)
        res.status(200).json(savedOrder)
    }catch(err){
        res.status(500).json(err)
    }
})

router.put('/:id', verifyTokenAndAdmin, async(req,res)=>{
    try{
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {$set: req.body},{new: true})
        res.status(200).json(updatedOrder)
    }catch(err){
        res.status(500).json(err)
    }
})
// deleting 
router.delete('/:id', verifyTokenAndAdmin, async(req, res)=>{
    try{
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Deleting your order successfull")
    }catch(err){
        res.status(500).json(err)
    }
})
// 
router.get('/find/:userId', verifyTokenAndAuthorization, async(req,res)=>{
    try{
        const order = await Order.find({userId: req.params.userId})
        res.status(200).json(order)
    } catch(err){
        res.status(500).json(err)
    }
})
// Get all user's cart
router.get('/findAllOrders', verifyTokenAndAdmin, async (req, res) =>{
    try{
        const orders = await Order.find()
        res.status(200).json(orders)
    }catch(err){
        res.status(500).json(err)
    }
})

// Get monthly income

router.get("/income", verifyTokenAndAdmin, async(req,res)=>{
    const date = new Date()
    const lastMonth = new Date(date.setMonth(date.getMonth()-1))
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth()-1))
    try{
        const income = await Order.aggregate([
            {$match: {createdAt: {$gte: previousMonth}}},
            {$project: {
                month: {$month: "$createdAt"},
                sales: "$amount",
            }},
            {$group: {
                _id: "$month",
                total: {$sum: "$sales"}
            }}
        ])
        res.status(200).json(income)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router


module.exports = router