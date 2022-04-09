const express = require("express")
const app = express()

const userRouter = require("./routers/users")
const authRouter = require("./routers/auth")
const productRouter = require("./routers/product")
const cartRouter = require("./routers/cart")
const orderRouter = require("./routers/order")
const cors = require('cors')

//MongoDB connect to backend server
const mongoose = require("mongoose")
//require and configure the package 
const dotenv = require("dotenv")
dotenv.config() //
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Successful!") )
    .catch((err) => console.log("Error", err))
//
    app.use(cors())
    //express.json() function is a built-in middleware function in Express. It parses incoming requests
    app.use(express.json())

    app.use('/api/users', userRouter)
    app.use('/api/auth', authRouter)
    app.use('/api/products', productRouter)
    app.use('/api/carts', cartRouter)
    app.use('/api/orders', orderRouter)
app.listen(process.env.PORT || 5000, ()=> console.log("Backend server is running"))