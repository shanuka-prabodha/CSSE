const router = require("express").Router();
const Order = require("../models/Order")
const Reply = require("../models/SupplierReplies")

router.route("/create").post((req, res) => {

    const order = new Order(req.body);

    order.save().then((data) => {
        res.json(data)
    }).catch((err) => {
        console.log(err)
    })
});


router.route('/readOder').get(async (req, res) => {
    await Order.find()
        .then((order) => {
            res.json(order)
        })
        .catch(error => {
            res.status(500).send(error.message);
        })
});


router.route('/new').get(async (req, res) => {
    await Order.find({"AdminApproval":"New"})
        .then((order) => {
            res.json(order)
        })
        .catch(error => {
            res.status(500).send(error.message);
        })
});

router.route('/pending').get(async (req, res) => {
    await Order.find({"AdminApproval":"Pending"})
        .then((order) => {
            res.json(order)
        })
        .catch(error => {
            res.status(500).send(error.message);
        })
});

router.route('/approved').get(async (req, res) => {
    await Order.find({"AdminApproval":"Approve"})
        .then((order) => {
            res.json(order)
        })
        .catch(error => {
            res.status(500).send(error.message);
        })
});

router.route('/decline').get(async (req, res) => {
    await Order.find({"AdminApproval":"Decline"})
        .then((order) => {
            res.json(order)
        })
        .catch(error => {
            res.status(500).send(error.message);
        })
});



//change state to approved
//select supplier id from the choose supplier array and that order id should save to the supplierReplies table

router.route('/approve/:id').put(async (req, res) => {
    const id = req.params.id
    let ChooseSuppliers = '';
    

    await Order.findByIdAndUpdate(id, req.body)
        .then((response) => {
            // res.json(response.ChooseSuppliers)
            ChooseSuppliers = response.ChooseSuppliers;
            ChooseSuppliers.map(ChooseSuppliers => {
                console.log("hi")
                console.log(id)
                console.log(ChooseSuppliers)

//supplier reply

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


module.exports = router;