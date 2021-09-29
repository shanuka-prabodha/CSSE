const router = require("express").Router();
const Supplier = require("../models/Supplier")

router.route("/add").post((req,res)=>{

    const supplier = new Supplier(req.body);

    supplier.save().then((data)=>{
        res.json(data)
    }).catch((err)=>{
        console.log(err)
    })
})


module.exports=router;