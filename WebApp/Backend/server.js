const express = require("express");
const mongoose =require("mongoose");
const bodyParser =require("body-parser");
const cors=require("cors");
const path = require('path');
const dotenv=require("dotenv");


const app = express();
dotenv.config();
app.use(cors());

app.use(bodyParser.json());
const PORT=process.env.PORT ||8020
const URL = process.env.MONGODB_URL;




mongoose.connect(URL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,

})

const connection = mongoose.connection;

connection.once("open",()=>{
    console.log("Mongo DB Connection success");
})



app.route('/').get((req,res)=>{
    res.send('SLIIT CSSE');
})

const userRouter = require("./routes/User");
app.use('/user',userRouter)

const Order = require('./routes/OrderRoute')
app.use('/order',Order)


const Reply = require('./routes/ReplyRoute')
app.use('/reply',Reply)

const Item = require('./routes/ItemsRoute')
app.use('/item',Item)

const Supplier = require('./routes/SupplierRoute')
app.use('/supplier',Supplier)

const Payment = require('./routes/PaymentRoute')
app.use('/payment',Payment)

const Product = require('./routes/productRoute')
app.use('/product',Product);




app.listen(PORT,()=>{
    console.log(`Server is up and running on port ${PORT}`);
});

