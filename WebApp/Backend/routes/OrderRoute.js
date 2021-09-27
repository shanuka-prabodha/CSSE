const router = require("express").Router();
const Order = require("../models/Order")

router.route("/create").post((req,res)=>{

    const order = new Order(req.body);

    order.save().then((data)=>{
        res.json(data.items)
    }).catch((err)=>{
        console.log(err)
    })
});


router.route('/readOder').get(async(req,res)=>{
    await Order.find()
    .then((order)=>{
        res.json(order)
    })
    .catch(error=>{
        res.status(500).send(error.message);
    })
})







module.exports=router;