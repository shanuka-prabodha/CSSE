const router = require("express").Router();
const Reply = require("../models/SupplierReplies")

router.route("/add").post((req,res)=>{

    const reply = new Reply(req.body);

    reply.save().then((data)=>{
        res.json(data)
    }).catch((err)=>{
        console.log(err)
    })
})


module.exports=router;