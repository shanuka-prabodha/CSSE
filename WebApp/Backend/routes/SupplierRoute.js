const router = require("express").Router();
const Supplier = require("../models/Supplier")
const Reply = require("../models/SupplierReplies");

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






router.route('/find/:id').get(async (req, res) => {

    console.log(req.params.id)
    await Supplier.find({_id: req.params.id})
        .then((reply) => {
            res.json(reply)

        })
        .catch(error => {
            res.status(500).send(error.message);
        })
})




module.exports=router;