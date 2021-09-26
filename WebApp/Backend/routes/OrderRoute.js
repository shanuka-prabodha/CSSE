const router = require("express").Router();
const Order = require("../models/Order")

router.route("/create").post((req,res)=>{

    const order = new Order(req.body);

    order.save().then((data)=>{
        res.json(data.items)
    }).catch((err)=>{
        console.log(err)
    })
})


module.exports=router;