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

router.route('/readSupplier').get(async(req,res)=>{
    await Supplier.find()
    .then((data)=>{
        res.status(200).send({data:data})
    })
    .catch(error=>{
        res.status(500).send(error.message);
    })
})





module.exports=router;