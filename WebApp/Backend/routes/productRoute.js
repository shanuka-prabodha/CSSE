const router = require("express").Router();
const Product = require("../models/product")

router.route("/add").post((req,res)=>{

    const product = new Product(req.body);

    product.save().then((data)=>{
        res.json(data)
    }).catch((err)=>{
        console.log(err)
    })
});

router.route("/product").get((req,res)=>{
    Product.find().then((item)=>{
        res.json(item)
    }).catch((err)=>{
        console.log(err);
    });
});

router.route("/delete").delete((req,res)=>{
    Product.deleteMany().then(()=>{
        res.send("Deleted successfully");
    }).catch((err)=>{
        console.log(err);
    })
})


module.exports=router;