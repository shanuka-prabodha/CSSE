const router = require("express").Router();
const Supplier = require("../models/Supplier")

router.route("/add").post((req,res)=>{

    const Supplier = new Supplier(req.body);

    Supplier.save().then((data)=>{
        res.json(data)
    }).catch((err)=>{
        console.log(err)
    })
})


module.exports=router;