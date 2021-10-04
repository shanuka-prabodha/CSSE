const router = require("express").Router();
const Item = require("../models/Items")

router.route("/add").post((req,res)=>{

    const item = new Item(req.body);

    item.save().then((data)=>{
        res.json(data)
    }).catch((err)=>{
        console.log(err)
    })
})


module.exports=router;