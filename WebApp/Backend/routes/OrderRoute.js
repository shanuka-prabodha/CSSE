const router = require("express").Router();
const Order = require("../models/Order")
const Reply = require("../models/SupplierReplies")

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

router.route('/readOneOder/:id').get(async(req,res)=>{
    await Order.find({_id: req.params.id})
    .then((order)=>{
        res.json(order)
    })
    .catch(error=>{
        res.status(500).send(error.message);
    })
})


//change state to approved
//select supplier id from the choose supplier array and that order id should save to the supplierReplies table

router.route('/approve/:id').put(async (req, res) => {
    const id = req.params.id
    let ChooseSuppliers = '';


    console.log(req.body.AdminApproval)



    await Order.findByIdAndUpdate(id, req.body)
        .then((response) => {
            // res.json(response.ChooseSuppliers)
            ChooseSuppliers = response.ChooseSuppliers;
            ChooseSuppliers.map(ChooseSuppliers => {
                console.log("hi")
                console.log(id)
                console.log(ChooseSuppliers)

//supplier reply

                if(req.body.AdminApproval=='Approve'){

                    const reply = new Reply({
                        "suppliers": ChooseSuppliers,
                        "orders": id,
                        "Message": 'empty'

                    });

                    reply.save().then((data) => {
                        console.log("Order Received")
                    }).catch((err) => {
                        console.log(err)
                    })
                }


            })

            res.json("Order sent")
        })
        .catch((error) => {
            res.status(500).send({error: error.message})
        })
})



router.route('/find/:id').get(async (req, res) => {

    let items = {};
    await Order.find({_id: req.params.id})
        .then((data) => {
            // res.status(200).send(data);
            data.map((data) => {
                console.log(data.items)
                items = data.items
            })
            res.status(200).send(items)
        })
        .catch(error => {
            res.status(500).send(error.message);
        })
})


router.route('/staffupdate/:id').put(async(req,res) =>{
    let oderID = req.params.id;
    const{ReferenceNo,ChooseSuppliers} = req.body;

    console.log(oderID);

    const udpateOder = {
        ReferenceNo,
        ChooseSuppliers,
        PassedState:'Passed',
        AdminApproval:"Pending"


    }

    const update = await Order.findByIdAndUpdate(oderID,udpateOder)
    .then(()=>{
        res.status(200).send({status:'Oder updated'})
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).send({status:"error with update "})
    })

})




router.route('/assign/:id').put(async (req, res) => {
    const id = req.params.id

    console.log(id)

    await Order.findByIdAndUpdate(id, req.body)
        .then((response) => {
            // res.json(response.ChooseSuppliers)

            })

            res.json("Order sent")
        .catch((error) => {
            res.status(500).send({error: error.message})
        })
})



router.route('/state/:id').put(async (req, res) => {
    const id = req.params.id

    console.log(id)

    await Order.findByIdAndUpdate(id, req.body)
        .then((response) => {
            // res.json(response.ChooseSuppliers)

        })

    res.json("Order sent")
        .catch((error) => {
            res.status(500).send({error: error.message})
        })
})


router.route('/readApprovelOder').get(async(req,res)=>{

   let apporvel = req.query.id;
   console.log(apporvel)
    await Order.find({ AdminApproval :apporvel})
    .then((order)=>{
        res.json(order)
    })
    .catch(error=>{
        res.status(500).send(error.message);
    })
})


router.route("/delete/:id").delete(async(req,res)=>{
    let orderID = req.params.id;
    if(req.params && req.params.id){

        await Order.findByIdAndDelete(orderID)

        .then(data=>{
             
         res.status(200).send("order deleted successfully")
     }) 
     .catch(error=>{
         res.status(500).send(error.message);
     })
    }
});



module.exports = router;
